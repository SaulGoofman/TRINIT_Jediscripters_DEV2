import express from "express";
import { findTutors } from "../controllers/tutors.js";

const router = express.Router();

router.post("/register_student", register_student);

export default router;