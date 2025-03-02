import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }
})

export const TodoSchema = mongoose.model('User', todoSchema)