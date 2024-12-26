// import the model
const Todo = require("../models/Todo");


exports.getTodo = async(req,res) => {
    try{
        
        const todos = await Todo.find({})
        
        // response
        res.status(200).json(
            {
                success:true,
                data:todos,
                message:" Todo Data Arrived successfully"
            }
        );
    }
    catch(error){
        res.status(500).json(
            {
                success:false,
                data:"internal server error",
                message:error.message,
            }
        )
    }
}

exports.getTodoById = async(req,res) => {
    try {
     
        const id = req.params.id;
        const todo = await Todo.findById(id);
             
        if(!todo){
            return res.status(404).json({success:false,data:"No Data Found on this Id"})
        }
      
        res.status(200).json({success:true,data:todo,message:`Todo ${id} data successfully fetched`})


    } catch (error) {
        res.status(500).json({success:false,data:"Internal error",message:error.message})
    }
}