import express from "express";
import { getPatientController } from "../controller/authController.js";

//route object
const router = express.Router();

router.get("/patient/:id", getPatientController);

//export router
export default router;