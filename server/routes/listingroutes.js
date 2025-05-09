const express = require('express');
const { getallProducts, getProductById } = require('../controllers/listingController');

const router = express.Router();

router.get('/', getallProducts)

router.get('/:id',getProductById)


module.exports = router