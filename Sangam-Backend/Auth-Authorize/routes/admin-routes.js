const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/auth-middleware.js')

router.get('/welcome',authMiddleware,(req,res) => {
    res.status(200).json({
        message:"Welcome to Admin Page"
    })
})

module.exports = router;