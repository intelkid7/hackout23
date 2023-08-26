import JWT from 'jsonwebtoken';
import doctorModel from '../models/doctorModel';

//protected routes token base 
export const requireSignIn = async (req, res, next) => {
    // console.log(req.headers, " printing_reqqq");
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        req.user = decode;
        next();
    }
    catch (error) {
        console.log(error);
    }
}

//admin access 
export const isDoctor = async (req, res, next) => {
    try {
        console.log(req.user);
        const user = await doctorModel.findById(req.user._id);
        if (!user) {
            return res.send({
                success: false,
                message: "UnAuthorized Access doctor middleware"
            });
        }
        else {
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(402).send({
            success: false,
            error,
            message: "Error in doctor middleware"
        });
    }
}