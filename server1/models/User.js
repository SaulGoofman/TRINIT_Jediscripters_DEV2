import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'tutor', 'admin'], required: true },
  bio: String,
  languages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Language' }],
  //experience: String,
  paymentInfo: {
    // Payment information fields
  }
});

const User = mongoose.model('User', userSchema, 'users');
export default User;