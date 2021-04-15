const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const path = require('path');
const session = require('express-session');

const app = express();
const homeRoutes = require('./routes/home.routes.js');
const bookRoutes = require('./routes/book.routes.js');

const port = 2000;

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'library'
});

global.db = db;

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload


app.use('/', homeRoutes);
app.use('/manage', bookRoutes);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});