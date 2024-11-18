import mongoose from "mongoose";

const counterSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  sequence_value: { type: Number, default: true },
});

const Counter = mongoose.model("Counter", counterSchema);


export default Counter ;