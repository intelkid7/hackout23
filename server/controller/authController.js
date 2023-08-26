// import patientModel from "../models/patientModel.js";
import PatientModel from "../models/patientModel.js"

export const getPatientController = async (req, res) => {

    const abhaNumber = req.params.id;

    console.log(abhaNumber)
     
    const patient = await PatientModel.find({abhaNumber})

    console.log(patient)

    if (patient) {
        res.status(200).send({
            success: true,
            message: "Patient found",
            data: patient
        })
    } else {
        res.status(500).send({
            success: false,
            message: "Patient not found"
        })
    }
}