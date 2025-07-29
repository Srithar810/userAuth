import User from "../Models/user.schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

//Register User

export const registerUser=async(req,res)=>{
    try {
        const {username,emailId,password,role}= req.body;
        const hashPassword = await bcrypt.hash(password,10);
        // console.log(hashPassword);
        const newUser = new User({username,emailId,password:hashPassword,role});
        await newUser.save();
        res.status(200).json({message:"User Registered Sucessfully",data:newUser})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}