require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const connectToDb = require('./database/db.js')
const bookRoutes = require('./routes/book-route.js')

// connect to DB
connectToDb();

// middleware
app.use(express.json())

// routes here
app.use('/api/books',bookRoutes)

app.listen(PORT,() => {
    console.log(`server running on port ${PORT}`);
})