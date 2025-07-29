import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            minlength:4,
            maxlength:40,
        },
        
        emailId:{
            type:String,
            lowercase:true,
            required:true,
            trim:true,
            // validate(value){
            //     if(!validator.isEmail(value)){
            //         throw new Error ("Invalid Email Address :"+ value)
            //     }
            // },

        },
        password:{
            type:String,
            required:true,
            // validate(value){
            //     if(!validator.isStrongPassword(value)){
            //         throw new Error("Enter a Strong Password: "+value);

            //     }
            // },
        },
        age:{
            type:Number,
            min:18,
        
        },
        gender:{
            type:String,
            rnum:{
                values:["male","female","others"],
                message:`{VALUE} is not a valid gender type`,
            },

        },
        photoUrl:{
            type:String,
            default:"https://geographyandyou.com/images/user-profile.png",
            validate(value){
                if(!validator.isURL(value)){
                    throw new Error("Invalid photo URL: "+ value)
                }
            },
        },
        about:{
            type:String,
            default:"This is user Authenticate and Authorization part of the user"
        },
        role:{
            type:[String],
        },
    },
    {
        timestamps:true,
    });

const User = mongoose.model("User", userSchema);
export default User;
