const express = require('express');
const router = require('./auth-routes');
const authMiddleware = require('../middleware/auth-middleware.js')

router.get('/welcome', authMiddleware ,(req,res) => {
    res.status(200).json({
        message:"welcome to Home page"
    })
})

module.exports = router