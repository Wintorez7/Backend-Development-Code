const express = require('express')

const router = express.Router();

router.post("/admin/add-product",(req,res,next) => {
    // console.log("body-object: ",req.body)
    // const product = req.body.product;
    // const price = req.body.price;
    // console.log("product :",product)
    // console.log("price :", price)  
    console.log("Admin Router")
    console.log(req.body)
    res.send('<h1>mehtod: POST , path /add-product</h1>')
})  

module.exports = router;