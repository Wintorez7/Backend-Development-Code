const express = require('express');
const users = require("./MOCK_DATA.json")

const app = express();
const PORT = 4000;

// Routes
app.get("/user",(req,res) => {
    const html = `
    <ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html)
})

// REST API
app.get("/api/user", (req,res) => {
    return res.json(users)
})

app.get("/api/user/:id", (req,res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
})



app.listen(PORT, () => { console.log(`Server started at PORT: ${PORT}`) })

