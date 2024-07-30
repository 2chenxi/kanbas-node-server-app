import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema({
    
        title: String,
        course: mongoose.Schema.Types.ObjectId,
      },
      { collection: "assignments" }

);

export default assignmentSchema;