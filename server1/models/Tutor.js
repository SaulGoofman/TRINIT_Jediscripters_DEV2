import mongoose from "mongoose";

const tutorSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bio: String,
  languages: [String],
  experience: Number,
  pricing: Number,
  paymentInfo: {
    // Payment information fields
  }
});

const Tutor = mongoose.model('Tutor', tutorSchema, 'tutors');
export default Tutor;