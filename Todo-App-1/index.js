import express from 'express'
import 'dotenv/config';
import connectToDb from "./database/database.js"
const app = express()

connectToDb()

const PORT = process.env.PORT || 4000

app.listen(PORT ,() => {
    console.log("server started")
})