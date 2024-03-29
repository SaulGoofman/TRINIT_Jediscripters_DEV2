import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Student from "../models/Student.js"
import Tutor from "../models/Tutor.js";

/* REGISTER USER */
export const register_student = async (req, res) => {
  try {
    console.log(req.body);
    const {
      firstName,
      lastName,
      email,
      password,
      bio,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    
    const newStudent = new Student({
      firstName,
      lastName,
      email,
      password: passwordHash,
      bio,
      enrollments: [],
    });
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* LOGGING IN */
export const login_student = async (req, res) => {
  try {
    const { email, password } = req.body;
    const student = await Student.findOne({ email: email });
    if (!student) return res.status(400).json({ msg: "Student does not exist. " });

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET);
    delete student.password;
    res.status(200).json({ "token" : token, "user" : student });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const register_tutor = async (req, res) => {
  console.log(req.body);
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      bio,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    
    const newTutor = new Tutor({
      firstName,
      lastName,
      email,
      password: passwordHash,
      bio,
      languages: [],
    });
    const savedTutor = await newTutor.save();
    res.status(201).json(savedTutor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const login_tutor = async (req, res) => {
  try {
    const { email, password } = req.body;
    const tutor = await Tutor.findOne({ email: email });
    if (!tutor) return res.status(400).json({ msg: "Student does not exist. " });

    const isMatch = await bcrypt.compare(password, tutor.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    const token = jwt.sign({ id: tutor._id }, process.env.JWT_SECRET);
    delete tutor.password;
    res.status(200).json({ token, tutor });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};