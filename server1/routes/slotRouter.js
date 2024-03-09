import express from "express";

const router = express.Router();

import {
  findAllSlots,
  findSlotById,
  addSlot,
  updateSlot,
  deleteSlot,
} from "../controllers/slotController.js";

//get all slots
router.get("/", findAllSlots);

//get slot by id
//router.get('/', slotController.findSlotsByDate);

router.get("/:id", findSlotById);
router.post("/", addSlot);

export default router;
