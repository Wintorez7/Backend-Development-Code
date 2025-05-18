const User = require('../models/index.js')

// register controller
const registerUser = async(req,res) => {
    try {
        const {username,email,password,role} = req.body
        // check user is already exist in database or not 
        const checkExistingUser = await User.findOne({$or : [{username},{email}]});
        if(checkExistingUser){
            return res.status(404).json({
                success:false,
                message:'User Already Register either with same username or email'
            })
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Some error occured! please try agin"
        })
    }
}

// login controller
const loginUser = async(req,res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Some error occured! please try agin"
        })
    }
}

module.exports = {registerUser,loginUser}