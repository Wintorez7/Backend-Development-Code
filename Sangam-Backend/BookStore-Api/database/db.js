const mongoose = require('mongoose')
const connectToDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://mohanKumhar:MK2025@cluster0.4elxb6i.mongodb.net/')
        console.log("MongoDb Connected Succesfully")
    } catch (error) {
        console.log("MongoDB Connection Failed",error)
        process.exit(1)
    }
}

module.exports = connectToDb