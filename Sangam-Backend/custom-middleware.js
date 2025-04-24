const express = require('express')
const app = express();
const PORT = 3000;

app.listen(PORT,() => {
    console.log('Server running at port 3000')
})

const requestTimeStampLogger = (req,res,next) => {
    const timeStamp = new Date().toISOString();
    console.log(`${timeStamp} from ${req.method} to ${req.url}`);
    next();
}

app.use(requestTimeStampLogger);

app.get('/',(req,res) => {
    res.send('Home page')
})

app.get('/about',(req,res) => {
    res.send('About page')
})
