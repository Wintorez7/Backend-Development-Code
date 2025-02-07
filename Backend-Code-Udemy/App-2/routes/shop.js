const express = require('express')

const router = express.Router();

router.get("/product",(req,res,next) => {
    console.log("Shop Router")
    console.log(req.body)
    res.send('<h1>response from the second Middleware</h1>')
}) 

module.exports = router;