const express = require("express");
const app = express();

// load config from env
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());

// import routes for Todo API
const todoRoutes = require("./routes/todo"); 

// Mount the todo API Routes
app.use("/api/v1",todoRoutes);

// start server
app.listen(PORT,() => {
    console.log(`server started successfully at ${PORT}`);
})

// connect with database
const dbconnect = require("./config/database")
dbconnect();

// default router
app.get("/",(req,res) => {
    res.send(`<h1>This is Homepage</h1>`)
})