const express = require('express')
const router = express.Router();
const {loginUser,registerUser} = require('../controller/auth-controller.js')

// all routes are realted to authentcation and authorization
router.post('/register', registerUser)
router.post('/login', loginUser)



module.exports = router;