require('dotenv').config();
const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000;
const connectToDb = require('./database/index.js');
connectToDb();

app.listen(PORT,() => {
    console.log(`server running at ${PORT}`);
})

