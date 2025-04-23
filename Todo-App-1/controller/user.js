import { User } from "../models/user.js";
import bcrypt from "bcrypt"

export const register = async (req,res) => {
    try {
       const {fullName,email,password} = req.body;
       if(!fullName || !email || !password){
        return res.status(400).json({
            success: false,
            message: "All Fields are Required"
        });        
       }
      
       // finding user are already Register or not   
      const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(403).json({
                success: false,
                message: "This email ID is already registered"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
                fullName,
                email,
                password:hashedPassword
        })

        return res.status(201).json({
            success:true,
            message:"Account Created successfully"
        })

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

export const login = async (req,res) => {
    try {
        const {email , password} = req.body; 
        if(!email || !password){
            return res.status(403).json({
                success:false,
                message:"All fileds are required"
            })
        }

        const LoginUser = await User.findOne({ email });
        if (!LoginUser) {
            return res.status(403).json({
                success: false,
                message: "incorrect email password"
            });
        }

        const isPasswordIsMatched = await bcrypt.compare(password , LoginUser.password)
        if(!isPasswordIsMatched){
            return res.status(403).json({
                success: false,
                message: "incorrect email password"
            });
        }

        return res.status(201).json({
            success:true,
            message:`Welcome Back ${LoginUser.fullName}`
        })
        
    } catch (error) {
        console.log(error);
        return res.json({
            success:false,
            message:"Something Went Wrong try agin later"
        });
    }
}