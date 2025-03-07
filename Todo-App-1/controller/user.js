import { User } from "../models/user";
import bcrypt from "bcrypt"

export const register = async (req,res) => {
    try {
       const {fullName,email,password} = req.body;
       if(!fullName || !email || !password){
        return res.status(430).json({
            success:false,
            message:"All Fields are Required"
        })
       }
      
       // finding user are already Register or not   
       const User = await User.findOne(email);
       if(User){
        return res.status(403).json({
            success: false,
            message: "this email Id already register"
        })
       }

       const hashedPassowrd = await bcrypt.hash(password,10);

       await User.create({
            fullName,
            email,
            password:hashedPassowrd
       })

       return res.status(201).json({
        success:true,
        message:"Account Created successfully"
       })

    } catch (error) {
        console.log(error)
    }
}