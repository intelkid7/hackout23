//importing all require files, modules
import mongoose from "mongoose";

//mongoose schema of Doctor
const adminSchema = new mongoose.Schema({
    role: {
        type: String,
        require: true
    },
    name: {
        type: String,
        required: true
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

//export adminSchema using mongoose model method
export default mongoose.model('admins', adminSchema);