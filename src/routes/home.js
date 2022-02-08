const express = require('express');
const router = express.Router();
const rutaMain = require('../controllers/homeController');

router.get('/',rutaMain.index);


module.exports = router;