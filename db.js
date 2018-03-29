const spicedPg = require('spiced-pg');
const {dbUser, dbPass} = require('./config/secrets.json');
const db = spicedPg(`postgres:${dbUser}:${dbPass}@localhost:5432/finalproject`);

function insertUserInfo(first, last, email, password) {
    return new Promise((resolve, reject) => {
        const q = `
        INSERT INTO users (first, last, email, hash)
        VALUES ($1, $2, $3, $4)
        RETURNING id`;
        const params = [first, last, email, password];
        db.query(q, params).then(results => {
            resolve(results.rows[0]);
        }).catch(err => {
            reject(err);
        });
    });
}

function checkCredentials(email) {
    return new Promise((resolve, reject) => {
        const q = `
        SELECT hash, id
        FROM users
        WHERE email = $1`;
        const params = [email];
        db.query(q, params).then(results => {
            resolve(results);
        }).catch(err => {
            reject(err);
        });
    });
}

module.exports = {
    insertUserInfo,
    checkCredentials
};
