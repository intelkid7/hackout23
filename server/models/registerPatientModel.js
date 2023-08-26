import mongoose from "mongoose";

// Define the patient schema
const regPatientSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "patient",
  },
});

// Create the patient model
export default mongoose.model("RegisterPatients", regPatientSchema);
