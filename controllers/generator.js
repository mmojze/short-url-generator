const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const ShortUrl = require('../models/ShortUrl');

// @desc        Generate short url 
// @route       POST /generator
// @access      Public

exports.generateShorturl = asyncHandler(async (req, res, next) => {

    const short_url = await ShortUrl.create(req.body);

    res.status(201).json({
        success: true,
        data: short_url
    });

});