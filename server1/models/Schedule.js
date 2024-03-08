const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  tutor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  availableSlots: [{
    date: { type: Date, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true }
  }],
  pricing: {
    // Pricing information based on language, level, or duration
  }
});

const Schedule = mongoose.model('Schedule', scheduleSchema);
module.exports = Schedule;