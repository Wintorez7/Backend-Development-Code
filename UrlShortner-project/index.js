import express from 'express';
import urlRoute from './Routes/url.js';
import connectToMongoDB from './connect.js'
import URL from './model/url.js';

const app = express();

app.use(express.json())

app.get('/test',(req,res) => {
    return res.end('<h1>Hey from server</h1>')
});

app.use("/url", urlRoute);
app.get('/:shortId', async(req,res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId,
    },{
        $push:{
        visitHistory:{
            timestamp:Date.now(),
        }
    },
   }
  )
  res.redirect(entry.redirectUrl);
})

connectToMongoDB(   'mongodb://127.0.0.1:27017/short-url')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

app.listen(3000, () => {
    console.log("Server running at PORT 3000");
});
