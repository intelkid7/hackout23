//importing all require files, modules
import mongoose from "mongoose";

//mongoose schema of Doctor
const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    hospital: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

//export doctorSchema using mongoose model method
export default mongoose.model('doctors', doctorSchema);