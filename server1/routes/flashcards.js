import express from "express";
import { new_card, get_all_flashcards } from "../controllers/flashcards.js";


const router = express.Router();



router.post("/new_card", new_card);
router.get("/get_card", get_all_flashcards);

export default router;