const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String },
  body: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', postSchema);
