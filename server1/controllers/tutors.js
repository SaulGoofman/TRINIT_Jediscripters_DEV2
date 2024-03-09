import Student from "../models/Student.js"
import Tutor from "../models/Tutor.js";
import Language from "../models/Language.js"
import mongoose from "mongoose";

export const findTutors = async(req, res) => {
    try {
        const {
            search_string,
            languages,
            experience,
            pricing
        } = req.body;
        
        let langIds = []
        for (const lang of languages) {
            let language = await Language.findOne({ name : lang });
            if (language != null) {
                langIds.push(language["_id"]);
            }
        }
        //console.log(langIds);

        const [ lowerLimit, upperLimit ] = pricing;
        console.log(lowerLimit);
        const tutors = await Tutor.find({$and : [
            { firstName: { $regex: new RegExp(search_string, 'i') } },
            { languages: { $in: langIds } },
            { pricing: { $gt : Number(lowerLimit) }},
            { pricing: { $lt : Number(upperLimit) }}
        ]});
        res.status(201).json(tutors);
    }
    catch (err) {
        res.status(409).json({message: err.message });
    }
}