const fs = require('fs');
const session = require('express-session');

exports.searchBookPage = (req, res) => {
    if (req.session.loggedin) {
        let message = 'Enter the title of the book ';
        res.render('search.ejs', {
            title: "Search Page",
            username: req.session.userName,
            message
        });
    } else {
        res.send('Please login to view this page!');
    }
    res.end();

}
exports.searchBook = (req, res) => {
    if (req.session.loggedin) {
        let message = '';
        let search_name = req.body.name_of_book_search;
        console.log(search_name);
        let query = "SELECT * FROM `books` WHERE name_of_book = '" + search_name + "'";
        db.query(query, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            console.log(result[0]);
            if (result.length > 0) {
                res.render('search-result.ejs', {
                    message,
                    title: "Welcome to Duy Dat's Book Store | View Players",
                    username: req.session.userName,
                    books: result
                });
            }
            else {
                res.render('search.ejs', {
                    message: 'Sorry, We Cant Find Your Book!',
                    title: "Welcome to Duy Dat's Book Store | View Players",
                    username: req.session.userName
                });
            }

        });
    } else {
        res.send('Please login to view this page!');
    }
}
exports.show = (req, res) => {
    if (req.session.loggedin) {

        let query = "SELECT * FROM `books` ORDER BY No ASC";
        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/home');
            }
            res.render('show.ejs', {
                title: "Welcome to Duy Dat's Book Store | Show Books",
                books: result,
                username: req.session.userName
            });
        });
    }
    else {
        res.send('Please login to view this page!');
    }
};

exports.addBookPage = (req, res) => {
    if (req.session.loggedin) {

        res.render('add-book.ejs', {
            title: "Welcome to Duy Dat's Library | Add a new book",
            message: '',
            username: req.session.userName
        });
    } else {
        res.send('Please login to view this page!');
    }
};

exports.addBook = (req, res) => {
    if (req.session.loggedin) {
        let message = '';
        let No = req.body.No;
        let name_of_book = req.body.name_of_book;
        let author = req.body.author;
        let quality = req.body.quality;
        let borrower = req.body.borrower;
        let num_phone_of_borrower = req.body.num_phone_of_borrower;

        let name_of_bookQuery = "SELECT * FROM `books` WHERE name_of_book = '" + name_of_book + "'";

        db.query(name_of_bookQuery, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            if (result.length > 0) {
                message = 'Book already exists';
                res.render('add-book.ejs', {
                    message,
                    title: "Welcome to Duy Dat's Library | Add a new book",
                    username: req.session.userName
                });
            } else {
                // send the player's details to the database
                let query = "INSERT INTO `books` (No, name_of_book, author, quality, borrower, num_phone_of_borrower) VALUES ('" +
                    No + "', '" + name_of_book + "', '" + author + "', '" + quality + "', '" + borrower + "', '" + num_phone_of_borrower + "')";
                db.query(query, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    res.redirect('/manage/add');
                });
            }
        });
    } else {
        res.send('Please login to view this page!');
    }
}

exports.editBookPage = (req, res) => {
    if (req.session.loggedin) {
        let bookNo = req.params.No;
        console.log(bookNo);
        let query = "SELECT * FROM `books` WHERE No = '" + bookNo + "' ";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('edit-book.ejs', {
                title: "Edit Book",
                book: result[0],
                message: '',
                username: req.session.userName
            });
        });
    }
    else {
        res.send('Please login to view this page!');
    }
}

exports.editBook = (req, res) => {
    if (req.session.loggedin) {

        let bookNo = req.params.No;
        console.log(bookNo);
        let name_of_book = req.body.name_of_book;
        let author = req.body.author;
        let quality = req.body.quality;
        let borrower = req.body.borrower;
        let num_phone_of_borrower = req.body.num_phone_of_borrower;

        let query = "UPDATE `books` SET `name_of_book` = '" + name_of_book + "', `author` = '" + author + "', `quality` = '" + quality + "', `borrower` = '" + borrower + "', `num_phone_of_borrower` = '" + num_phone_of_borrower + "' WHERE `books`.`No` = '" + bookNo + "'";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/manage/show');
        });
    }

    else {
        res.send('Please login to view this page!');
    }
}
exports.deleteBook = (req, res) => {
    if (req.session.loggedin) {

        let bookNo = req.params.No;
        let deleteUserQuery = 'DELETE FROM `books` WHERE No = "' + bookNo + '"';
        db.query(deleteUserQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/manage/show');
        });
    }

    else {
        res.send('Please login to view this page!');
    }
}
