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
        // const newUser = await User.create({
        //     name:'jon Doe',
        //     email:'jonDoe@gmail.com',
        //     age:'35',
        //     isActive:true,
        //     tags:['Developer','designer'],
        // })

        // const newUser = new User({
        //     name:'Raj Kumhar',
        //     email:'Raj@gmail.com',
        //     age:'24',
        //     isActive:true,
        //     tags:['Developer','designer'],
        // })

        // await newUser.save()

        // console.log('Created new user', newUser);

        // const allUser = await User.find({})
        // console.log(allUser)

        // const getUserActiveFalse = await User.find({isActive:true});
        // console.log(getUserActiveFalse);

        // const getNittishUser = await User.findOne({name:'Nittish Kumhar'})
        // console.log(getNittishUser);

        // const getLastCreatedUser = await User.findById(newUser._id)
        // console.log(getLastCreatedUser,"getLastCreatedUser")

        // const selectFields = await User.find().select('name email -_id');
        // console.log(selectFields);

        // const limitedUser = await User.find().limit(3).skip(1);
        // console.log(limitedUser)

        // const sortedUsers = await User.find().sort({age: 1});
        // console.log(sortedUsers)

    } catch (error) {
        console.log("error -> ",error)
    }finally{
        await mongoose.connection.close();
    }
}

runQueriesExamples();