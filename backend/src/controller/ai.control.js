// const aiService = require('../services/ai.service.js')
import { generateContent } from '../services/ai.service.js'

export const getReview = async (req,res) =>{
    const content = req.body.content;
    if(!content)  return res.status(400).send("Promt is required")
    const response = await generateContent(content);
    res.send(response);
}