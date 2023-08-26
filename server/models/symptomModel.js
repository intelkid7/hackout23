import mongoose from "mongoose";

//define mongoose symptoms schema 
const symptomsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
});

//export model using method 
export default mongoose.model('symptoms', symptomsSchema);