const express = require('express');
const router = express.Router();
const rutaLogin = require('../controllers/loginController');

router.get('/',rutaLogin.login);


module.exports = router;