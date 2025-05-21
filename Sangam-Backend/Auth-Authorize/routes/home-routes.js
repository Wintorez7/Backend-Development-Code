const express = require('express');
const router = require('./auth-routes');

router.get('/welcome',(req,res) => {
    res.status(201).json({
        message:"welcome to Home page"
    })
})

module.exports = router