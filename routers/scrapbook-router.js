const express = require('express');
const router = express.Router();
const db = require('../db');

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

module.exports = router;
