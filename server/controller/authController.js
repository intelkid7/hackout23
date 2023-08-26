import adminModel from "../models/adminModel.js";
import doctorModel from "../models/doctorModel.js";
import JWT from 'jsonwebtoken';
import { comparePassword, hashPassword } from './../helpers/authHelper.js';


//function for register doctor after checking validation
export const registerDoctorController = async (req, res) => {
    try {
        //validation
        if(!req.body.role){
            return res.send({ message: "Role is Required" });
        }
        if(!req.body.name){
            return res.send({ message: "Name is Required" });
        }
        if(!req.body.hospital){
            return res.send({ message: "Hospital name is Required" });
        }
        if(!req.body.email){
            return res.send({ message: "Email id is Required" });
        }
        if(!req.body.password){
            return res.send({ message: "Password is Required" });
        }
        if(!req.body.gender){
            return res.send({ message: "Gender is Required" });
        }

        //checking if already exists
        const existing_d = await doctorModel.findOne({email: req.body.email});

        //exisiting doctor
        if (existing_d) {
            return res.status(200).send({
                success: false,
                message: "Doctor is already exist for this email id"
            });
        }

        //hash password
        const hashedPassword = await hashPassword(req.body.password);

        //register doctor
        const doc = new doctorModel({
            role: req.body.role,
            name: req.body.name,
            hospital: req.body.hospital,
            email: req.body.email,
            password: hashedPassword,
            gender: req.body.gender
        });

        doc.save();

        //sending success response
        res.status(201).send({
            success: true,
            message: "Doctor register successfully",
            doc
        });
    } 
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Doctor Registration",
            error
        });    
    }
}

//function for admin registration after checking validation
export const registerAdminController = async (req, res) => {
    try {
        //validation
        if(!req.body.role){
            return res.send({ message: "Role is Required" });
        }
        if(!req.body.name){
            return res.send({ message: "Name is Required" });
        }
        if(!req.body.email){
            return res.send({ message: "Email id is Required" });
        }
        if(!req.body.password){
            return res.send({ message: "Password is Required" });
        }

        //checking if already exists
        const existing_adm = await adminModel.findOne({email: req.body.email});

        //exisiting doctor
        if (existing_adm) {
            return res.status(200).send({
                success: false,
                message: "Admin is already exist for this email id"
            });
        }

        //hash password
        const hashedPassword = await hashPassword(req.body.password);

        //register admin
        const admin = new adminModel({
            role: req.body.role,
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        admin.save();

        //sending success response
        res.status(201).send({
            success: true,
            message: "Admin register successfully",
            admin
        });
    } 
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in admin Registration",
            error
        }); 
    }
}

//function for login page controller 
export const loginController = async (req, res) => {
    try {
        //validation for role
        if (!req.body.role) {
            return res.send({ error: "Role is Required" });
        }

        //checking doctor details
        if(req.body.role == "doctor"){
            if(!req.body.email || !req.body.password){
                return res.status(404).send({
                    success: false,
                    message: "Invalid email and password"
                });
            }

            //check doctor
            const d = await doctorModel.findOne({email: req.body.email});

            //if student not found
            if (!d) {
                return res.status(404).send({
                    success: false,
                    message: "Doctor is not registered yet"
                });
            }

            //if password not match with database password
            const match = await comparePassword(req.body.password, d.password);
            if (!match) {
                return res.status(200).send({
                    success: false,
                    message: "Invalid Password"
                });
            }

            //give token
            const token = JWT.sign({ _id: d._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

            res.status(200).send({
                success: true,
                message: "Login Successfully in Doctor Portal",
                d,
                token
            });
        }

        //checking details of Admin
        if(req.body.role == "admin"){
            if(!req.body.email || !req.body.password){
                return res.status(404).send({
                    success: false,
                    message: "Invalid email and password"
                });
            }

            //check doctor
            const admin1 = await adminModel.findOne({email: req.body.email});

            //if admin not found
            if (!admin1) {
                return res.status(404).send({
                    success: false,
                    message: "Admin is not registered yet"
                });
            }

            //if password not match with database password
            const match = await comparePassword(req.body.password, admin1.password);
            if (!match) {
                return res.status(200).send({
                    success: false,
                    message: "Invalid Password"
                });
            }

            //give token
            const token = await JWT.sign({ _id: admin1._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

            res.status(200).send({
                success: true,
                message: "Login Successfully in Doctor Portal",
                admin1,
                token
            });
        }
    } 

    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in login",
            error
        }); 
    }
}