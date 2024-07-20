import express from "express";
import Lab5 from "./Lab5/index.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js"
import UserRoutes from "./User/routes.js";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas-suf";
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors()); 
app.use(express.json()); // do all your work after this line
UserRoutes(app);
app.get('/', (req, res) => {
    res.send('Welcome to Full Stack Development!');
});
CourseRoutes(app);     
ModuleRoutes(app); 
AssignmentRoutes(app);         
Lab5(app);                        
app.listen(process.env.PORT || 4000);