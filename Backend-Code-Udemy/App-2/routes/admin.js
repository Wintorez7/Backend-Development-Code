const express = require('express')

const router = express.Router();

router.post("/add-product",(req,res,next) => { 
    console.log("Admin Router")
    console.log(req.body)
    res.send('<h1>mehtod: POST , path /add-product</h1>')
})  

router.delete("/admin/delete-product",(req , res, next) => {
    console.log('always run')
    next();
})

module.exports = router;