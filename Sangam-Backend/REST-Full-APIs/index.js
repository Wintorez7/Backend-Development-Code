const express = require('express')
const app = express()
const PORT = 4000
app.listen(PORT,() => {
    console.log(`Server Running at ${PORT}`)
})

// middleware
app.use(express.json());

let books = [
    {
        id:"1",
        title:"Book 1",
    },
    {
        id:"2",
        title:"Book 2",
    },
    {
        id:"3",
        title:"Book 3",
    },
];

// get all books

// intro route
app.get('/',(req,res) => {
    res.json({
        message:"Welcome to our BookStore API"
    });
});

//get a single boook
app.get('/books/:id',(req,res) => {
    const book = books.find(item => item.id === req.params.id);
    if(book){
        res.status(200).json(book);
    }else{
        res.status(404).json({
            message:"Book not found! please try with different Id"
        });
    }
});

// get all books
app.get('/books',(req,res) => {
    res.json(books)
})

// add a new book
app.post('/add',(req,res) => {
    const newBook = {
        id : (books.length + 1).toString(),
        title : `Book ${books.length + 1}`
    }
    books.push(newBook);
    res.status(200).json({
        data : newBook,
        message : 'New Book Added Succesfully'
    })
})

// update a book
app.put('/update/:id',(req,res) => {
    const findCurrentBook = books.find(bookItem => bookItem.id === req.params.id);
    if(findCurrentBook){
        findCurrentBook.title = req.body.title || findCurrentBook.title

        res.status(200).json({
            message:`Book with ID ${req.params.id} updated succesfully`,
            data : findCurrentBook
        })
    }else{
        res.status(404).json({
            message:'Book Not Found',
        })
    }
})

app.delete('/delete/:id',(req,res) => {
    const findIndexOfCurrentBooks = books.findIndex(item => item.id === req.params.id);
    if(findIndexOfCurrentBooks !== -1){
        const deletedBook = books.splice(findIndexOfCurrentBooks,1);
        res.status(200).json({
            message:'Book Deleted successfully',
            data: deletedBook[0]
        })
    }else{
        res.status(404).json({
            message:'Book Not Found',
        })
    }
})

