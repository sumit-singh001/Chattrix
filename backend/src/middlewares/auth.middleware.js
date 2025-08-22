import User from "../models/User.js";
import jwt from "jsonwebtoken";


export const protectRoute = async (req,res,next) =>{
    try {
        if(!req.cookies.jwt) {
                return res.status(401).json({message: "No token"});
         }
        const decoded = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET_KEY);
        if(!decoded) {
            return res.status(401).json({message: "Unauthorised token"});
        }
        const user = await User.findById(decoded.userId).select("-password");
        if(!user) {
            return res.status(401).json({message: "No User"});
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({message: "Inavalid token"});
    }
}