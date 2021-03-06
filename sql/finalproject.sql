DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS images;
DROP TABLE IF EXISTS scrapbooks;
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
        file VARCHAR (255) NOT NULL,
        description VARCHAR (255) NOT NULL,
        image_title VARCHAR (255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE scrapbooks (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        theme VARCHAR (255) NOT NULL,
        color VARCHAR (255) NOT NULL,
        scrapbook_title VARCHAR (255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE pages (
        id SERIAL PRIMARY KEY,
        scrapbook_id INTEGER NOT NULL,
        header VARCHAR (255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
