const mongoose = require('mongoose')
const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDb Connected Succesfully")
    } catch (error) {
        console.log("MongoDB Connection Failed",error)
        process.exit(1)
    }
}

module.exports = connectToDb