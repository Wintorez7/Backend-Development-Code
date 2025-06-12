const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/auth-middleware.js')
const adminMiddleware = require('../middleware/admin-middleware.js')

router.get('/welcome',authMiddleware,adminMiddleware,(req,res) => {
    res.status(200).json({
        message:"Welcome to Admin Page"
    })
})

module.exports = router;