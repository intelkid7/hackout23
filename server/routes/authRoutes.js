import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { RegisterPatientController, deleteAppointmentController, getRegisteredPatientController, getSingleRegisteredPatientController, loginController, registerAdminController, registerDoctorController, searchController } from "../controller/authController.js";
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

router.get('/patient/:id', getPatientController);

// add patient to register patient list
router.get('/addPatient/:id', RegisterPatientController);

// get registered patient list
router.get('/getRegisteredPatient', getRegisteredPatientController);

// get single registered patient
router.get('/getRegisteredPatientOne/:id', getSingleRegisteredPatientController);

// delete appointment
router.delete('/deletePatient/:id', deleteAppointmentController);

//search symptom
router.get('/search/:keyword', searchController);

//export router
export default router;