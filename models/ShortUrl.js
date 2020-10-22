const mongoose = require('mongoose');
const shortid = require('shortid');

const ShortUrlSchema = new mongoose.Schema({
  url: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'Please enter a valid URL'
    ],
    required: [true, 'Please provide a URL'],
  },
  short_url_id: { 
      type: String
  }
});


/* Middleware to assign id */

ShortUrlSchema.pre('save', function (next) {

  this.short_url_id = shortid.generate();
  next();

});

module.exports = mongoose.model('ShortUrl', ShortUrlSchema); 