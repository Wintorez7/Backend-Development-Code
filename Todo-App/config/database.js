const mongoose = require('mongoose');
require('dotenv').config();

const dbconnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
       
    })
    .then(() => console.log("Database Connection is succesfull"))
    .catch((error) => {
        console.log("Issue in Database Connection");
        console.log(error.message);
        process.exit(1);
    });
}

module.exports = dbconnect;