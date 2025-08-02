import { Schema, model } from "mongoose";

const bookingSchema = new Schema({
  name: String,
  phone: String,
  date: String,
  time: String,
  service: String,
  status: {
    type: String,
    enum: ["pending", "confirmed", "completed"],
    default: "pending"
  }
});

export default model("Booking", bookingSchema);
