import User from "../Models/user.schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

//Register User

export const registerUser = async (req, res) => {
  try {
    const { username, emailId, password, role } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    // console.log(hashPassword);
    const newUser = new User({
      username,
      emailId,
      password: hashPassword
    });
    await newUser.save();
    res
      .status(200)
      .json({ message: "User Registered Sucessfully", data: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//login user

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User NOt Found" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(404).json({ message: "invalid password " });
    }
    //jwt - sign
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    //assign a token in our model
    user.token = token;
    await user.save();
    res.status(200).json({ message: "User Logged Sucessfully", token: token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//get user

export const getUser=async(req,res)=>{
    try {
        const user = await User.find();
        res.status(200).json({message:"Admin User", data:user})
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}