const express = require('express');
const { getVersion } = require('../controllers/version');

const router = express.Router();

router.route('/').get(getVersion); 

module.exports = router;