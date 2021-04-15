const fs = require('fs');
const session = require('express-session');
const { route } = require('../routes/home.routes');
const router = require('../routes/home.routes');
exports.login = (req, res) => {
	let message = '';
    res.render('login.ejs', {
        title: "Welcome to Duy Dat's Book Store | Login Pages",
		message: ''
	});
};
exports.checkLogin = (req, res) =>{
    let userName = req.body.userName;
    let passWord = req.body.passWord;
    let user = "SELECT * FROM `users` Where user_name = '"+userName+"' and password ='"+ passWord+"'";
    
	if (userName && passWord) {
		db.query(user, function(error, results, fields) {
			if (results.length > 0) {
				req.session.loggedin = true;
				req.session.userName = userName;
				res.redirect('/home');
			} else {
				res.render('login.ejs',{
					message : 'Incorrect Username and/or Password!',
					title: "Welcome to Duy Dat's Book Store | Login Pages"
				});
			}
			res.end();
		});
	} else {
		res.render('login.ejs', {
        title: "Welcome to Duy Dat's Book Store | Login Pages",
		message : 'Please enter Username and Password!'
	
	});
	}
};
exports.home = (req, res) =>{
	if (req.session.loggedin) {
		res.render('home.ejs', {
			title: "Home Page Of Library Manage",
			username : req.session.userName
		})
	} else {
		res.send('Please login to view this page!');
	}
	res.end();
}