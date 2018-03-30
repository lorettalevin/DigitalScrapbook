const express = require('express');
const router = express.Router();

router.post('/addscrapbook', (req, res) => {
    console.log("TESTING SERVER SIDE");
    res.json({
        success: true
    })
})







module.exports = router
