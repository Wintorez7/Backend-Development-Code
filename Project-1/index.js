const express = require('express');
const { logReqRes } = require('./middleware/index')
const app = express();
const PORT = 4000;
const useRouter = require('./Routes/user')

const { connectMongoDb } = require('./connection')

connectMongoDb('mongodb://127.0.0.1:27017/youtube-app-1'    )

// Middleware - plugin
app.use(express.urlencoded({extended: false}))

app.use(logReqRes("log.txt"));

// app.use((req,res,next) => {
//     console.log("hello from middleware 1")
//     req.myUserName = "M.K.DeV"
//     next();
// })

// app.use((req,res,next) => {
//     console.log("hello from middleware 2",req.myUserName)
//     next();
// })

app.use('/user',useRouter);


app.listen(PORT, () => { console.log(`Server started at PORT: ${PORT}`) })



