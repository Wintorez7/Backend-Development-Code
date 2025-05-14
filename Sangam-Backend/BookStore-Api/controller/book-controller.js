const Book = require('../models/book.js')

const getAllBooks = async (req, res) => {
    try {
        const allBooks = await Book.find({});
        if(allBooks?.length > 0){
            res.status(200).json({
                success:true,
                message:'List of Books fetched Succesfully',
                data:allBooks
            })
        }else{
            res.status(404).json({
                success:false,
                message:'Books Not Found'
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"Something went wrong! Please try again",
        })
    }
};

const getSingleBookById = async (req, res) => {
    try {
        const getCurrentBookId = req.params.id;
        const bookDetailsbyId = await Book.findById(getCurrentBookId);
        
        if(!bookDetailsbyId){
            return res.status(404).json({
                success:false,
                message:"Book with current id not found! please try agin with different ID"
            })
        }
        res.status(200).json({
            success:true,
            data:bookDetailsbyId
        })


    } catch (error) {
        console.log(error)
         res.status(500).json({
            success:false,
            message:"Something went wrong! Please try again",
        })
    }
};

const addNewBook = async (req, res) => {
    try {
        const newBookFormData = req.body;
        const newlyCreatedBook = await Book.create(newBookFormData);

        if(newlyCreatedBook){
            res.status(201).json({
                success:true,
                message:'Book Added Succesfully',
                data: newlyCreatedBook
            })
        }

    } catch (error) {
        console.log(error)
         res.status(500).json({
            success:false,
            message:"Something went wrong! Please try again",
        })
    }
};

const updateSingleBook = async (req, res) => {
    try {
        const updatedBookFromData = req.body;
        const getCurretnBookId = req.params.id;
        const updatedBook = await Book.findByIdAndUpdate(getCurretnBookId,updatedBookFromData,{
            new:true,

        })
        if(!updatedBook){
            res.status(404).json({
                success:false,
                message:"Book Id not found"
            })
        }else{
            res.status(200).json({
                success:true,
                message:"Book Updated Succesfully",
                data:updatedBook
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Something went wrong! Please try again",
        })
    }
};

const deleteBook = async (req, res) => {
    try {
        const getCurrentBookId = req.params.id;
        const bookDetailsbyId = await Book.findByIdAndDelete(getCurrentBookId);
        if(!bookDetailsbyId){
            res.status(401).json({
                success:false,
                message:"Book not found with this Id! try some different Id"
            })
        }else{
            res.status(200).json({
                success:true,
                data:bookDetailsbyId,
                message:"Book Deleted Successfully" 
            })
        }

    } catch (error) {
         console.log(error)
         res.status(500).json({
            success:false,
            message:"Something went wrong! Please try again",
        })
    }
};

module.exports = {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateSingleBook,
  deleteBook,
};
