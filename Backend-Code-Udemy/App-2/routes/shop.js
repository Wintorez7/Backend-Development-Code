const express = require('express')

const router = express.Router();

router.get("/shop/product",(req,res,next) => {
    console.log("Shop Router")
    res.send('<h1>response from the second Middleware</h1>')
}) 

module.exports = router;