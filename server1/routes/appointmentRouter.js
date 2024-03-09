import express from "express";

const router = express.Router();

import {
  findAllAppointments,
  addAppointment,
  editAppointment,
  deleteAppointment,
} from "../controllers/appointmentController.js";
import { validateSlot, validateInput } from "../middleware/middleware.js";

//get all appointments
router.get("/", findAllAppointments);

//add appointment
router.post("/", validateInput, validateSlot, addAppointment);

//update appointment
router.put("/:id", validateInput, validateSlot, editAppointment);

//delete appointment
router.delete("/:id", deleteAppointment);

export default router;
