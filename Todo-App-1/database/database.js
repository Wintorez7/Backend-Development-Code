import mongoose  from 'mongoose'

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database Connected")
    } catch (error) {
        console.log(error,"Database Connection failed")
    }
}

export default connectToDb