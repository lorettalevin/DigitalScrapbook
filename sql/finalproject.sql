DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS images;
DROP TABLE IF EXISTS scrapbook;
DROP TABLE IF EXISTS pages;

CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        first VARCHAR (255) NOT NULL,
        last VARCHAR (255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        hash VARCHAR (100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE images (
        id SERIAL PRIMARY KEY,
        page_id INTEGER NOT NULL,
        url VARCHAR (255),
        description VARCHAR (255),
        image_title VARCHAR (255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE scrapbook (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        theme VARCHAR (255),
        size VARCHAR (255),
        color VARCHAR (255),
        scrapbook_title VARCHAR (255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE pages (
        id SERIAL PRIMARY KEY,
        scrapbook_id INTEGER NOT NULL,
        header VARCHAR (255),
        description TEXT
    );
