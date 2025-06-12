const express = require('express');
const router = require('./auth-routes');
const authMiddleware = require('../middleware/auth-middleware.js')
const userMiddleware = require('../middleware/user-middleware.js')

router.get('/welcome', authMiddleware, userMiddleware ,(req,res) => {

    const {username,userId,role} = req.userInfo

    res.status(200).json({
        message:"welcome to Home page",
        user:{
            _id:userId,
            username,
            role
        }
    })
})

module.exports = router