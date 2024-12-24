import express from 'express';
import urlRoute from './Routes/url.js';

const app = express();

app.use("/url", urlRoute);

app.listen(3000, () => {
    console.log("Server running at PORT 3000");
});
