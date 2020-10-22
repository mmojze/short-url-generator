const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

// @desc        Get version
// @route       GET /version
// @access      Public

exports.getVersion = asyncHandler(async (req, res, next) => {
    res.status(200).json({version: "Short url generator version 1.0.0"});
});