const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
   title:{
    type:String,
    required:true,
    trim:true,
    maxLength:[100,'Recipe Title can not be more than 100'],
   },
   Cheif_Name:{
    type:String,
    required:true,
    trim:true,
   },
   recipe:{
    type:String,
    required:true,
    trim:true,
   },
   createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('Recipe',RecipeSchema);