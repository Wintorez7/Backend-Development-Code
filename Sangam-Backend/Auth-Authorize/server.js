require('dotenv').config();
const express = require('express')
const connectToDb = require('./database/index.js');
const authRoutes = require('./routes/auth-routes.js')
connectToDb();

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api/auth', authRoutes)

app.listen(PORT,() => {
    console.log(`server running at ${PORT}`);
})

