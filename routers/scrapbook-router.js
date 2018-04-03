const express = require('express');
const router = express.Router();
const db = require('../db');
const multer = require('multer');
const uidSafe = require('uid-safe');
const path = require('path');
const s3 = require('../config/s3.js');
const {s3Url} = require("../config/config.json");

var diskStorage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename: function(req, file, callback) {
        uidSafe(24).then(function(uid) {
            callback(null, uid + path.extname(file.originalname));
        });
    }
});

const uploader = multer({
    storage: diskStorage,
    limits: {
        fileSize: 2097152
    }
});

router.post('/addscrapbook', (req, res) => {
    const {theme, color, scrapbook_title} = req.body;
    db.addScrapbook(req.session.id, theme, color, scrapbook_title).then(results => {
        res.json({
            success: true,
            scrapbook_id: results.id,
            user_id: req.session.id,
            theme,
            color,
            scrapbook_title
        });
    });
});

router.get('/getmyscrapbooks', (req, res) => {
    db.getScrapbooks(req.session.id).then(scrapbooks => {
        res.json({
            success: true,
            scrapbooks
        });
    });
});

router.get('/getsinglescrapbook', (req, res) => {
    db.getScrapbook(req.session.id).then(scrapbook => {
        res.json({
            success: true,
            scrapbook
        });
    });
});

router.post('/editonescrapbook/:id', (req, res) => {
    const { scrapbook_title, theme, color } = req.body;
    db.editScrapbook(req.session.id, scrapbook_title, theme, color).then(() => {
        res.json({
            success: true
        });
    });
});

router.post('/addpage/:scrapbook_id', (req, res) => {
    db.addPage(req.params.scrapbook_id, req.body.header).then(() => {
        res.json({
            success: true,
            header: req.body.header
        });
    });
});

router.get('/getpages/:scrapbook_id', (req, res) => {
    db.getPages(req.params.scrapbook_id).then(pages => {
        res.json({
            success: true,
            pages
        });
    });
});

router.post('/addimages/:page_id', uploader.single('file'), s3.upload, (req, res) => {
    db.addImages(req.params.page_id, req.file.filename, req.body.image_title, req.body.description).then(results => {
        const file = s3Url + req.file.filename;
        const {image_title, description} = req.body;
        res.json({
            success: true,
            page_id: req.params.page_id,
            file: req.file.filename,
            image_title,
            description
        });
    });
});

router.get('/getimages/:page_id', (req, res) => {
    db.getImages(req.params.page_id).then(images => {
        res.json({
            success: true,
            images
        });
    });
});

router.get('/getfullscrapbook/:scrapbook_id', (req, res) => {
    db.getFullScrapbook(req.params.scrapbook_id).then((scrapbookInfo) => {
        res.json({
            success: true,
            scrapbookInfo
        });
    });
});

module.exports = router;
