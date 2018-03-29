DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS images;
DROP TABLE IF EXISTS scrapbook;

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
        user_id INTEGER,
        url VARCHAR (255),
        description VARCHAR (255),
        imagetitle VARCHAR (255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE scrapbook (
        id SERIAL PRIMARY KEY,
        user_id INTEGER,
        theme VARCHAR (255),
        size VARCHAR (255),
        color VARCHAR (255),
        pagetitle VARCHAR (255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
