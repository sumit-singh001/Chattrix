import express from "express";
const router = express.Router();
import { signup, login, logout,onBoard } from "../controller/auth.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

router.post('/signup', signup)
router.post('/login', login)
router.post('/logout', logout)
router.post('/onboarding',protectRoute,onBoard);

router.get('/me',protectRoute,(req,res) =>{
     res.status(200).json({user: req.user});
})

export default router;