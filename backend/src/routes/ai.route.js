// const express = require('express');
// const aiController = require('../controller/ai.control.js');
import express from "express";
import { getReview } from '../controller/ai.control.js'
const router = express.Router();

router.post('/chat',getReview);

export default router;