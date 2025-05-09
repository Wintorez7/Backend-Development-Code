const Book = require('../models/book.js')

const getAllBooks = async (req, res) => {

};

const getSingleBookById = async (req, res) => {

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
    }
};

const updateSingleBook = async (req, res) => {

};

const deleteBook = async (req, res) => {

};

module.exports = {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateSingleBook,
  deleteBook,
};
