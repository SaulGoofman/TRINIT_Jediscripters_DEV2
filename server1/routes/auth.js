import express from "express";
import { register_student, login_student, register_tutor, login_tutor } from "../controllers/auth.js";

const router = express.Router();

router.post("/register_student", register_student);
router.post("/login_student", login_student);
router.post("/register_tutor", register_tutor);
router.post("/login_tutor", login_tutor);

export default router;