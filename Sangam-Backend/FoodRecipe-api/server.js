require('dotenv').config()
const express = require('express');
const connectTodb = require('./database/db');
const app = express();
const PORT = process.env.PORT || 3000
const RecipeRoutes = require('./routes/route.js')

// connect to Database
connectTodb();

// middleware
app.use(express.json());

// all routes
app.use('/api/recipe',RecipeRoutes)

app.listen(PORT,() => {
    console.log(`server running at ${PORT}`)
})