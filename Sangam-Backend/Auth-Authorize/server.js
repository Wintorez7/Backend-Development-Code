require('dotenv').config();
const express = require('express')
const connectToDb = require('./database/index.js');
const authRoutes = require('./routes/auth-routes.js')
const homeRoutes = require('./routes/home-routes.js')

connectToDb();

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/home', homeRoutes)


app.listen(PORT,() => {
    console.log(`server running at ${PORT}`);
})

