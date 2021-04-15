const express = require("express");

const router = express.Router();

const homeController = require('../controllers/home.controller.js');

router.get('/', homeController.login);
router.post('/', homeController.checkLogin);
router.get('/home', homeController.home);

module.exports = router;