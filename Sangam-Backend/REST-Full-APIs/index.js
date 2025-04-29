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
        id:'1',
        title:'Book 1',
    },
    {
        id:'2',
        title:'Book 2',
    },
    {
        id:'3',
        title:'Book 3',
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
        res.status(200).json(book)
    }else{
        res.status(404).json({
            message:"Book not found! please try with different Id"
        });
    };
})

// get all books
app.get('/books',(req,res) => {
    res.json(books)
})