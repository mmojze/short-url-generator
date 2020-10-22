const express = require('express');
const { redirectShorturl } = require('../controllers/redirect');

const router = express.Router();

router.route('/:shortId').get(redirectShorturl); 

module.exports = router;