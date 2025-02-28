import express from 'express'
import dotenv from "dotenv"
import bodyParser from 'body-parser';
dotenv.config();

const app = express()
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.post("/api/v3/user/register" , (req,res) => {
    const {name,email,password} = req.body;
    console.log(name,email,password)
    // save data in database

    res.status(200)
       .json({success:true, message:"Account Created"})
})

app.post("/api/v3/user/login" , (req,res) => {
    const {name,email,password} = req.body;
    console.log(name,email,password)

    // save data in database

    res.status(200)
       .json({success:true, message:"Login Successfully"})
})

app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
})