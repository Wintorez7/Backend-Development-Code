const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://mohanKumhar:MK2025@cluster0.4elxb6i.mongodb.net/')
        .then(() => console.log('Database Connected successfully'))
        .catch((e) => console.log(e))

// User Schema
const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    isActive:Boolean,
    tags:[String],
    createdAt : {type : Date, default : Date.now}
})        

//Create User Model
const User = mongoose.model('User',UserSchema);

async function runQueriesExamples() {
    try {
        // create a new Document
        const newUser = await User.create({
            name:'Mohan Kumhar',
            email:'mohan@gmail.com',
            age:'24',
            isActive:true,
            tags:['Developer','designer'],
        })
        console.log('Created new user', newUser);
    } catch (error) {
        console.log("error -> ",error)
    }finally{
        await mongoose.connection.close();
    }
}

runQueriesExamples();