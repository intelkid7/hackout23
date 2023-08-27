import mongoose from "mongoose";

const diseaseSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    medicines: {
      type: [String],
      required: true
    }
  });

export default mongoose.model('diseases', diseaseSchema);
  