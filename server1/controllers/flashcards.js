import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {Enrollment} from "../models/Student.js";
import Student from "../models/Student.js";
import  Language  from "../models/Language.js";


export const new_card = async (req, res) => {
  console.log(req.body);
  try {
    const {
      user_id,
      language_id,
      front,
      back,
      notes,
    } = req.body;
    

    const user = await Student.findById(user_id)
    console.log(user);
    let filter_language = user.enrollments.find(x => x.language.toString() === language_id);
    console.log(filter_language)
 
    filter_language.flashcards.push({front:front, back:back, notes:notes});

    await user.save();

    res.status(201).json("savedFlashCard");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



export const get_all_flashcards = async (req, res) => {
    console.log(req.body);
    const {
        user_id,
        language,
    } = req.body

    const user = await Student.findById(user_id)
    console.log(user.enrollments)
    
    const filter_lang = user.enrollments.find(obj => obj.language.toString() === language)
    // let filter_language = user.enrollments.find(x => JSON.stringify(x.language) === JSON.stringify(language))
    const flashcard = await Language.findById("65ec395c486af3686e9d77f4")

    console.log(flashcard)
    console.log(filter_lang)
    res.json(filter_lang.flashcards)

}