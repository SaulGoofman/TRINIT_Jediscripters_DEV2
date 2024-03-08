import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema({
    language: { type: mongoose.Schema.Types.ObjectId, ref: 'Language' },
    flashcards: [{
        front: {type: String, required: true},
        back: {type: String, required: true},
        notes: {type: String}
    }]
});

const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bio: String,
  enrollments: [enrollmentSchema],
  paymentInfo: {
    // Payment information fields
  }
});

export const Enrollment = mongoose.model('Enrollment', enrollmentSchema);
const Student = mongoose.model('Student', studentSchema, 'student');
export default Student;