import express from 'express'
import 'dotenv/config';
import connectToDb from "./database/database.js"
import userRoute from "./routes/user.js"
import bodyParser from 'body-parser';
import todoRouter from './routes/todo.js'
const app = express()

connectToDb()

// Middlewares
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use("/api/v1/user", userRoute); 
app.use("/api/vi/todo", todoRouter)

const PORT = process.env.PORT || 4000

app.listen(PORT ,() => {
    console.log("server started")
})