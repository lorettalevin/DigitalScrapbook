const express = require('express');
const app = express();
const compression = require('compression');
const bodyParser = require('body-parser');
const csrf = require('csurf');
const cookieSession = require("cookie-session");
const server = require('http').Server(app);

app.use(compression());

if (process.env.NODE_ENV != 'production') {
    app.use(
        '/bundle.js',
        require('http-proxy-middleware')({
            target: 'http://localhost:8081/'
        })
    );
} else {
    app.use('/bundle.js', (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.use(express.static(__dirname + "/public"));

app.use(compression());

app.use(bodyParser.json());

if (process.env.NODE_ENV != 'production') {
    app.use('/bundle.js', require('http-proxy-middleware')({target: 'http://localhost:8081/'}));
} else {
    app.use('/bundle.js', (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.use(cookieSession({
    secret: "a really hard to guess secret",
    maxAge: 1000 * 60 * 60 * 24 * 14
}));

app.use(csrf());

app.use(function(req, res, next) {
    res.cookie('mytoken', req.csrfToken());
    next();
});

//////////////////////////////////////////////////////////////////////////////

app.use(require('./routers/auth-router'));
app.use(require('./routers/scrapbook-router'));

//////////////////////////////////////////////////////////////////////////////
app.get('/welcome', (req, res) => {
    if (req.session.id) {
        res.redirect('/');
    } else {
        res.sendFile(__dirname + '/index.html');
    }
});

app.get('/', (req, res) => {
    if (!req.session.id) {
        res.redirect('/welcome');
    } else {
        res.sendFile(__dirname + '/index.html');
    }
});


app.get('*', function(req, res) {
    if (!req.session.id) {
        return res.redirect('/welcome');
    }

    res.sendFile(__dirname + '/index.html');
});

app.listen(8080, function() {
    console.log("I'm listening.");
});
