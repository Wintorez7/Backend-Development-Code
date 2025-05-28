const mongoose = require('mongoose')

const connectTodb = async () => {
    try {
        await mongoose.connect('mongodb+srv://mohanKumhar:MK2025@cluster0.4elxb6i.mongodb.net/')
        console.log("MongoDB Connected Successfully")
    } catch (error) {
        console.log('Database connection Failed',error)
    }
}

module.exports = connectTodb;