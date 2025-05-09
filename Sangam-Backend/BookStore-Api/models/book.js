const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    title:{
        type : String,
        required:[true,'Book Title is required'],
        trim:true,
        maxlength:[100,'Book title can not be more than 100 Characters']
    },
    author:{
        type : String,
        required:[true,'Auther Name is required'],
        trim:true,
    },
    year:{
        type:Number,
        required:[true,'Publications Year is Required'],
        min:[1000,'Year must be atleast 1000'],
        max:[new Date().getFullYear(),'Year cannot be in the future']
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('Book' , BookSchema)
