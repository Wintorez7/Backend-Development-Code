const User = require('../controller/user')
const express = require('express')
const router = express.Router();

async function handelgetAlluser() {
    const allDbUser = await User.find({})
    // console.log("I am in Get Route", req.myUserName)
    res.setHeader("X-MyName","Mohan Kumhar")
    // always add X to custom header
    return res.json(allDbUser)
}
async function handelgetUserId(req,res) {
    const user = await User.findById(req.params.id) 
    if(!user){
        return res.status(404).json({msg:"user not Found"})
    }
    return res.json(user);
}

async function handelUpdateUserById(req,res) {
    await User.findByIdAndUpdate(req.params.id,{lastName:'changed'})
    if (User === -1) {
        return res.status(404).json({ status: "error", message: "User not found" });
    }
}

async function handelDeleteUserById(req,res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({status:"success"})
}

async function handelCreateUser(req,res) {
    const body = req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({msg:"All Field Required"})
    }
    const result = await User.create({
        firstName:body.first_name,
        lastName:body.last_name,
        Email:body.email,
        gender:body.gender,
        job_title:body.job_title
    })
    console.log(result)
 return res.status(201).json({msg:"success",id: result._id})
}


module.exports = {
    handelgetAlluser,
    handelgetUserId,
    handelUpdateUserById,
    handelDeleteUserById,
    handelCreateUser
}