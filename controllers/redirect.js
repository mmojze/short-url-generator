const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const ShortUrl = require('../models/ShortUrl');

// @desc        Get and redirect to short url 
// @route       GET /:shortId
// @access      Public

exports.redirectShorturl = asyncHandler(async (req, res, next) => {

    const short_url = await ShortUrl.findOne({ short_url_id: req.params.shortId });

    if (!short_url) { 
        return next(new ErrorResponse('No URL found with ID ' + req.params.shortId, 404))
    }

    res.redirect(short_url.url);

});