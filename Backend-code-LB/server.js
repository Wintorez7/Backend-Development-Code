
// const express = require('express');
// const app = express();

// //used to parse req.body in express -> PUT or POST
// const bodyParser = require('body-parser');

// //specidically parse JSON data & add it to the request.body object 
// app.use(bodyParser.json());

// app.listen(3000, () => {
//     console.log("server is Started at port number 3000");
// })

// app.get('/',(request,respons) => {
//     respons .send("hello ji kese ho M.K");
// })

// app.post('/api/cars',(request,respons) => {
//     const{name,brand} = request.body;
//     console.log(name);
//     console.log(brand);
//     respons.send("Car submitted succesfully");    
// })

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/myDatabase',{
//     useNewUrlParser:true,
//     useUnifiedTopology:true    
// })
// .then(()=>{console.log("connection successful")})
// .catch((error) => {console.log("Recieve an Error")});

const express = require('express');
const app = express();

const bodyParser = require('body-parser');//used to parse req.body in express -> PUT or POST
app.use(bodyParser.json());// specifically parse JSON Data & add it to request body object

// activate server in port number 3000
app.listen(3000, () => {
    console.log("server is started at Ports No. 3000");
})
// Routes 
app.get('/', (request,respons) => {
    respons.send("hello ji")
})
app.post('/api/cars',(request,response) => {
    const {name,Brand} = request.body;
    console.log(name)
    console.log(Brand)
    response.send("Car submited successfully")
})

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewurlParser:true,
    useUnifiedTopology:true
})
.then(() => {console.log("Connection succesfull")})
.catch((error) => {console.log("error recieve")})