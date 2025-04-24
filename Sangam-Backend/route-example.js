const express = require('express')
const app = express();
const PORT = 3000;

// root layout 
app.get('/',(req,res) => {
    res.send("welcome to our Home Page")
});

app.listen(PORT,() => {
    console.log(`Server is now Running at ${PORT}`)
})

app.get('/products',(req,res) => {
    const products = [
        {
            id:1,
            label:'Product 1'
        },
        {
            id:2,
            label:'Product 2'
        },
        {
            id:3,
            label:'Product 3'
        },
    ]
     res.json(products);
   
})

// get a single products
app.get('/products/:id',(req,res) => {
    const productId = parseInt(req.params.id)
    console.log(req.params);
    const products = [
        {
            id:1,
            label:'Product 1'
        },
        {
            id:2,
            label:'Product 2'
        },
        {
            id:3,
            label:'Product 3'
        },
    ]
    const getSingleProducts = products.find(product => product.id === productId)
    if(getSingleProducts){
        res.json(getSingleProducts)
    }
    else{
        res.status(404).send('Product Not Found! please try with different Id')
    }
})