const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcryptjs');

function checkPassword(textEnteredInLoginForm, hashedPasswordFromDatabase) {
    return new Promise(function(resolve, reject) {
        bcrypt.compare(textEnteredInLoginForm, hashedPasswordFromDatabase, function(err, doesMatch) {
            if (err) {
                reject(err);
            } else {
                resolve(doesMatch);
            }
        });
    });
}

function hashPassword(plainTextPassword) {
    return new Promise(function(resolve, reject) {
        bcrypt.genSalt(function(err, salt) {
            if (err) {
                return reject(err);
            }
            bcrypt.hash(plainTextPassword, salt, function(err, hash) {
                if (err) {
                    return reject(err);
                }
                resolve(hash);
            });
        });
    });
}

router.post('/registration', (req, res) => {
    if (!req.body.first || !req.body.last || !req.body.email || !req.body.password) {
        res.json({
            success: false,
            errorMessage: "Please fill out ALL fields"
        });
    } else {
        hashPassword(req.body.password).then(hash => {
            db.insertUserInfo(req.body.first, req.body.last, req.body.email, hash).then(results => {
                req.session = {
                    // first: req.body.first,
                    // last: req.body.last,
                    email: req.body.email,
                    id: results.id
                };
                res.json({success: true});
            }).catch(err => {
                console.log(err);
                res.json({success: false, errorMessage: "Email already exists"});
            });
        });
    }
});

router.post('/login', (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.json({success: false, errorMessage: "Please fill out ALL fields"});
    } else {
        db.checkCredentials(req.body.email).then(results => {
            checkPassword(req.body.password, results.rows[0].hash).then(doesMatch => {
                if (doesMatch) {
                    req.session = {
                        email: req.body.email,
                        id: results.rows[0].id
                    };
                    res.json({success: true});
                } else {
                    res.json({
                        success: false,
                        errorMessage: "Invalid password"
                    });
                }
            }).catch(err => {
                console.log(err);
                res.json({
                    success: false,
                    errorMessage: "Invalid password"
                });
            });
        }).catch(err => {
            console.log(err);
            res.json({
                success: false,
                errorMessage: "Invalid email!"
            });
        });
    }
});


router.get('/logout', (req, res) => {
    req.session = null;
    res.redirect("/welcome");
});

module.exports = router;
