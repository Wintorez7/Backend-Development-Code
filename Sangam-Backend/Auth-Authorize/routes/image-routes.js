const express = require('express')
const authMiddleware = require('../middleware/auth-middleware.js')
const adminMiddleware = require('../middleware/admin-middleware.js')


const router = express.Router()

// upload the image
router.post('/upload', authMiddleware,adminMiddleware)


// to get all the image


module.exports = router;