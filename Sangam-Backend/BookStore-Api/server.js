require('dotenv').config()
const exppress = require('express')
const app = exppress()
const PORT = process.env.PORT || 3000;
const connectToDb = require('./database/db.js')

// connect to DB
connectToDb();

// middleware
app.use(exppress.json())

app.listen(PORT,() => {
    console.log(`server running on port ${PORT}`);
})