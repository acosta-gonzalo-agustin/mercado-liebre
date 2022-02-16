const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/list',productController.list);

router.get('/create',productController.create);
router.post('/store',productController.store);


module.exports = router;