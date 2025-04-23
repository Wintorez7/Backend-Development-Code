import { Todo } from "../models/todo.js"

export const createTodo = async (req,res) => {
    try {
        const {title,description} = req.body;
        if(!title || !description){
            return res.status(400).json({
                success: false,
                message: "All Fields are Required"
            });   
        }
        const todo = new Todo({title , description})
        todo.save();

        return res.status(201).json({
            success:true,
            message:"Todo Task Created",
            todo, 
        })

    } catch (error) {
        console.log(error)
        return res.status(403).json({
            success:false,
            message:"Something went wrong"
        })
    }
}