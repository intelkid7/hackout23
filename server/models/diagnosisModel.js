import mongoose from "mongoose";

// Define the Diagnosis schema
const diagnosisSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'patients',
        required: true
    },
    symptoms: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'symptoms'
    }],
    diagnosisDate: {
        type: Date,
        default: Date.now,
    },
    doctorNotes: String
});

//export model using method 
export default mongoose.model('diagnosis', diagnosisSchema);