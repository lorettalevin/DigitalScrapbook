const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/addscrapbook', (req, res) => {
    db.addScrapbook(req.session.id, req.body.theme, req.body.color, req.body.scrapbook_title);
    res.json({
        success: true
    });
});







module.exports = router
