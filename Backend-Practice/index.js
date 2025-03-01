import express from 'express'
import dotenv from "dotenv"
import bodyParser from 'body-parser';
import userRoute from './Routes/index.js';
dotenv.config();

const app = express()
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use("/api/v3/user/",userRoute)


app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
})