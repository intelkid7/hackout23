import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { loginController, registerAdminController, registerDoctorController } from "../controller/authController.js";
import { getPatientController } from "../controller/authController.js";
import ExpressFormidable from "express-formidable";

//route object
const router = express.Router();

//routing
//Register doctor|| Method Post only by admin
router.post('/registerDoctor', ExpressFormidable(), registerDoctorController);

//Register admin || Method post 
router.post('/registerAdmin', registerAdminController);

//Login route || Method post
router.post('/login', loginController);


//export router
export default router;