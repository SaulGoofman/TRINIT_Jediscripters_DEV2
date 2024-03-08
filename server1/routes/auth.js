import express from "express";
import { register_student, login_student } from "../controllers/auth.js";

const router = express.Router();

router.post("/register_student", register_student);
router.post("/login_student", login_student);

export default router;