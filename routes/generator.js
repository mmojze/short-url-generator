const express = require('express');
const { generateShorturl } = require('../controllers/generator');

const router = express.Router();

router.route('/').post(generateShorturl); 

module.exports = router;