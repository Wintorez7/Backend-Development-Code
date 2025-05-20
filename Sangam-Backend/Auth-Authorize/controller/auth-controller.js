const User = require('../models/index.js')
const bcrypt = require('bcryptjs')

// register controller
const registerUser = async(req,res) => {
    try {
        const {username,email,password,role} = req.body
        // check user is already exist in database or not 
        const checkExistingUser = await User.findOne({$or : [{username},{email}]});
        if(checkExistingUser){
            return res.status(404).json({
                success:false,
                message:'User Already Register either with same username or email! Please try with different username or email'
            })
        }
    //hash user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    // create a new user
    const newelyCreatedUser = new User({
        username,
        email,
        password:hashedPassword,
        role: role || 'user'
    })
    await newelyCreatedUser.save()
    if(newelyCreatedUser){
        res.status(201).json({
            success:true,
            message:"User Register successfully"
        })
    }else{
        res.status(404).json({
            success:false,
            message:"Unable to register User! please Try again"
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
        const {username,password} = req.body;

        //find if the current user is exist in databse or not
        const user = await User.findOne({username});
        if(!user){
            return res.status(404).json({
                success:false,
                message:"Invaild username or password"
            })
        }
        // if the passoword is correct or not 
        const ispasswordMatch = await bcrypt.compare(password,user.password)
        if(!ispasswordMatch){
             return res.status(404).json({
                success:false,
                message:"Invaild username or password"
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

module.exports = {registerUser,loginUser}