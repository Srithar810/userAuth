import express from "express";
import { registerUser,loginUser,getUser } from "../Controllers/user.controller.js";
import { authMiddleware,adminMiddleware } from "../Middleware/auth.middleware.js";


const router = express.Router();

router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/getUser",authMiddleware,adminMiddleware,getUser)


export default router;