const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  description: String,
  level: { type: String, enum: ['beginner', 'intermediate', 'advanced'] }
});

const Language = mongoose.model('Language', languageSchema);
module.exports = Language;