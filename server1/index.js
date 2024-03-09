import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import Student from "./models/Student.js";
import Tutor from "./models/Tutor.js";
import authRoutes from "./routes/auth.js";
import appointmentRouter from "./routes/appointmentRouter";
import slotRouter from "./routes/slotRouter";

//Testing
import { findTutors } from "./controllers/tutors.js";

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

//Registration
app.use("/auth", authRoutes);
app.get("/findTutors", findTutors);
server.use("/appointments", appointmentRouter);
server.use("/slots", slotRouter);

console.log(process.env.MONGO_URL);
const PORT = process.env.PORT || 6001;
console.log(process.env.PORT);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME */
    // User.insertMany(users);
    // Post.insertMany(posts);
  })
  .catch((error) => console.log(`${error} did not connect`));
