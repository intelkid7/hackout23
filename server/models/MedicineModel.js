import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

export default mongoose.model('medicines', medicineSchema);