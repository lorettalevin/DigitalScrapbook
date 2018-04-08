const spicedPg = require('spiced-pg');
const {dbUser, dbPass} = require('./config/secrets.json');
const db = spicedPg(`postgres:${dbUser}:${dbPass}@localhost:5432/finalproject`);
const {s3Url} = require("./config/config.json");

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

function addScrapbook(user_id, theme, color, title) {
    return new Promise((resolve, reject) => {
        const q = `
        INSERT INTO scrapbooks (user_id, theme, color, scrapbook_title)
        VALUES ($1, $2, $3, $4)
        RETURNING id
        `;
        const params = [user_id, theme, color, title];
        db.query(q, params).then(results => {
            resolve(results.rows[0]);
        }).catch(err => {
            reject(err);
        });
    });
}

function getScrapbooks(user_id) {
    return new Promise((resolve, reject) => {
        const q = `
        SELECT *
        FROM scrapbooks
        WHERE user_id = $1
        `;
        const params = [user_id];
        db.query(q, params).then(results => {
            resolve(results.rows);
        }).catch(err => {
            reject(err);
        });
    });
}

function getScrapbook(user_id) {
    return new Promise((resolve, reject) => {
        const q = `
        SELECT *
        FROM scrapbooks
        WHERE user_id = $1
        `;
        const params = [user_id];
        db.query(q, params).then(results => {
            resolve(results.rows[0]);
        }).catch(err => {
            reject(err);
        });
    });
}

function getScrapbookNew(scrapbook_id) {
    return new Promise((resolve, reject) => {
        const q = `
        SELECT *
        FROM scrapbooks
        WHERE id = $1
        `;
        const params = [scrapbook_id];
        db.query(q, params).then(results => {
            resolve(results.rows[0]);
        }).catch(err => {
            reject(err);
        });
    });
}

function editScrapbook(id, scrapbook_title, theme, color) {
    return new Promise((resolve, reject) => {
        const q = `
        UPDATE scrapbooks
        SET scrapbook_title = $1,
        theme = $2,
        color = $3
        WHERE id = $4
        `;
        const params = [scrapbook_title, theme, color, id];
        db.query(q, params).then(results => {
            resolve(results.rows[0]);
        }).catch(err => {
            reject(err);
        });
    });
}

function addPage(scrapbook_id, header) {
    return new Promise((resolve, reject) => {
        const q = `
        INSERT INTO pages (scrapbook_id, header)
        VALUES ($1, $2)
        RETURNING id
        `;
        const params = [scrapbook_id, header];
        db.query(q, params).then(results => {
            resolve(results.rows[0].id);
        }).catch(err => {
            reject(err);
        });
    });
}

function getPages(scrapbook_id) {
    return new Promise((resolve, reject) => {
        const q = `
        SELECT *
        FROM pages
        WHERE scrapbook_id = $1
        `;
        const params = [scrapbook_id];
        db.query(q, params).then(results => {
            resolve(results.rows);
        }).catch(err => {
            reject(err);
        });
    });
}

function addImages(page_id, file, description, image_title) {

    return new Promise((resolve, reject) => {
        const q = `
        INSERT INTO images (page_id, file, description, image_title)
        VALUES ($1, $2, $3, $4)
        RETURNING *
        `;
        const params = [page_id, file, description, image_title];
        console.log("These are our params", params);

        db.query(q, params).then(results => {
            console.log("these are our results", results.rows);
            resolve(results.rows);
        }).catch(err => {
            reject(err);
        });
    });
}


function getImages(page_id) {
    return new Promise((resolve, reject) => {
        const q = `
        SELECT *
        FROM images
        WHERE page_id = $1
        `;
        const params = [page_id];
        db.query(q, params).then(results => {
            results.rows.forEach(image => {
                image.file = s3Url + image.file;
            })
            resolve(results.rows);
        }).catch(err => {
            reject(err);
        });
    });
}

function getFullScrapbook(scrapbook_id) {
    return new Promise(function(resolve, reject) {
        return Promise.all([getScrapbookNew(scrapbook_id), getPages(scrapbook_id)]).then(([scrapbook, pages]) => {
            const promises = [];
            pages.forEach(page => {
                promises.push(getImages(page.id));
            });
            Promise.all(promises).then(images => {
                for (let i = 0; i < images.length; i++) {
                    if (images[i][0] && images[i][0].page_id) {
                        if (pages[i].id === images[i][0].page_id) {
                            pages[i].images = images[i];
                        }
                    } else {
                        pages[i].images = [];
                    }
                }
                resolve({
                    scrapbook,
                    pages
                });
            });
        }).catch(err => {
            reject(err);
        });
    });
}


module.exports = {
    insertUserInfo,
    checkCredentials,
    addScrapbook,
    getScrapbooks,
    getScrapbook,
    editScrapbook,
    addPage,
    getPages,
    addImages,
    getImages,
    getFullScrapbook,
    getScrapbookNew
};
