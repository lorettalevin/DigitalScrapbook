const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/addscrapbook', (req, res) => {
    const {theme, color, scrapbook_title} = req.body;
    db.addScrapbook(req.session.id, theme, color, scrapbook_title).then(
        results => {
            res.json({
                success: true,
                scrapbook_id: results.id,
                user_id: req.session.id,
                theme,
                color,
                scrapbook_title
            });
        }
    );
});







module.exports = router
