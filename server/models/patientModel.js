import mongoose from 'mongoose';

// Define the patient schema
const patientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String
  },
  contact: {
    phoneNumber: String,
    email: String,
    abhaNumber: String  // Adding Abha number field
  },
  medicalHistory: {
    allergies: [String],
    conditions: [String],
    medications: [String]
  },
  appointments: [
    {
      date: Date,
      doctor: String,
      reason: String
    }
  ],
  abhaNumber:{
    type: String,
  }
});

// Create the patient model
export default mongoose.model('patients', patientSchema);

