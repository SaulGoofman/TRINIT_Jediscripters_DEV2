import mongoose from "mongoose";

const Schema = mongoose.Schema;

const slotSchema = new Schema(
  {
    slotTime: {
      type: String,
      require: true,
    },
    slotDate: {
      type: String,
      require: true,
    },
    slotBooked: {
      type: String,
      require: false,
    },
  },
  { versionKey: false }
);

const slotModel = mongoose.model("user", slotSchema);

export default slotModel;
