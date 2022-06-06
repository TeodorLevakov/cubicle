const express = require('express');

const homeController = require('./controllers/homeController.js');
const cubeContoller = require('./controllers/cubeController.js');

const router = express.Router();

router.use('/', homeController);

router.use('/cube', cubeContoller);

module.exports = router;