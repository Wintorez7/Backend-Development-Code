const Recipe = require('../models')

const getAllRecipes = async (req,res) => {
    try {
        const allRecipe = await Recipe.find({})
        if(allRecipe){
            res.status(200).json({
                success:true,
                message:"All Recipe Data Recived",
                data:allRecipe
            })
        }else{
            res.status(404).json({
                success:false,
                message:"Somethin went wrong! Please try again"
            })
        }
    } catch (error) {
        console.log(error);
        res.status(404).json({
            success:false,
            message:"Something went wrong"
        })
    }
}

const getSingleRecipe = async (req,res) => {
    try {
        const singlerecipeById = req.params.id;
        const recipeDetailsById = await Recipe.findById(singlerecipeById);
        if(recipeDetailsById){
            res.status(200).json({
                success:true,
                message:"Recipe Data Recived Succesfully",
                data:recipeDetailsById
            })
        }else{
            res.status(404).json({
                success:false,
                message:"Somethin went wrong! Please try again"
            })
        }
        
    } catch (error) {
        console.log(error);
        res.status(404).json({
            success:false,
            message:"Something went wrong"
        })
    }
}

const createRecipe = async (req,res) => {
    try {
        const newRecipeData = req.body;
        const newlyCreatedRecipe = await Recipe.create(newRecipeData)
        if(newlyCreatedRecipe){
            res.status(201).json({
                success:true,
                message:"New recipe created",
                data:newlyCreatedRecipe
            })
        }else{
            res.status(404).json({
                success:false,
                message:"Somethin went wrong! Please try again"
            })
        }

    } catch (error) {
        console.log(error);
        res.status(404).json({
            success:false,
            message:"Something went wrong"
        })
    }
}

const updateSingleRecipe = async (req,res) => {
    try {
        const updatedRecipeData = req.body;
        const getCurrentRecipeId = req.params.id
        const updatedRecipe = await Recipe.findByIdAndUpdate(getCurrentRecipeId,updatedRecipeData,{
            new:true
        })
        if(updatedRecipe){
            res.status(200).json({
                success:true,
                message:"Recipe Data update succesfuuly",
                data:updatedRecipe
            })
        }else{
            res.status(404).json({
                success:false,
                message:"Somethin went wrong! Please try again"
            })
        }

    } catch (error) {
        console.log(error);
        res.status(404).json({
            success:false,
            message:"Something went wrong"
        })
    }
}

const deleteSingleRecipe = async (req,res) => {
    try {
        const singleRecipeDataById = req.params.id;
        const deleteSingleRecipeData = await Recipe.findByIdAndDelete(singleRecipeDataById);
        if(deleteSingleRecipeData){
            res.status(200).json({
                success:true,
                message:"Recipe Data Delete Succsfully",
                data:deleteSingleRecipeData
            })
        }else{
            res.status(404).json({
                success:false,
                message:"Recipe Data Or ID Not Exist! or May be Data already Deleted"
            })
        }

    } catch (error) {
        console.log(error);
        res.status(404).json({
            success:false,
            message:"Something went wrong"
        })
    }
}

module.exports = {getAllRecipes,getSingleRecipe,createRecipe,updateSingleRecipe,deleteSingleRecipe}