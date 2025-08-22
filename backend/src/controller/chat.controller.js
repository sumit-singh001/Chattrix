import { generateStreamToken } from "../lib/stream.js";

export async function getStreamToken(req,res) {
    try {
        const token = generateStreamToken(req.user.id);
        res.status(200).json({token})
    } catch (error) {
        console.error(error.message);
        res.status(404).json({message: "Internal Server error"})
    }
    
}