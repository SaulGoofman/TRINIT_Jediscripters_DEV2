const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  tutor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  language: { type: mongoose.Schema.Types.ObjectId, ref: 'Language', required: true },
  scheduledDateTime: { type: Date, required: true },
  duration: { type: Number, required: true }, // In minutes
  status: { type: String, enum: ['scheduled', 'completed', 'canceled'], default: 'scheduled' },
  feedback: {
    rating: { type: Number, min: 1, max: 5 },
    comment: String
  }
});

const Lesson = mongoose.model('Lesson', lessonSchema);
module.exports = Lesson;