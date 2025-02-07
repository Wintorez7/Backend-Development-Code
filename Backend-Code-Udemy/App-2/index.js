const express = require('express')
const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended:true }))

app.get("/",(req,res,next) => {
    console.log("Root Route ")
    res.send('<h1>Root (/)</h1>')
})

app.use('/admin', adminRoutes);
app.use('/shop',shopRoutes);


app.listen(PORT,() => {
    console.log(`Server running at ${PORT}`);
})