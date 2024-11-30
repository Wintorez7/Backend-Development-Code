const express = require('express');
const users = require("./MOCK_DATA.json");
const fs = require('fs');

const app = express();
const PORT = 4000;

// Middleware - plugin
app.use(express.urlencoded({extended: false}))

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


app.post("/api/user",(req,res) => {
    // to create user
    const body = req.body;
    users.push({...body, id: users.length + 1});
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(error,data) => {
        return  res.json({status:"success",id:users.length});
    })
   
})


app.patch("/api/user/:id",(req,res) => {
    // Todo: Edit the user id
    // app.patch("/api/user/:id", (req, res) => {   
    //     const id = Number(req.params.id);
    //     const userIndex = users.findIndex(user => user.id === id);
    //     if (userIndex === -1) {
    //         return res.status(404).json({ status: "error", message: "User not found" });
    //     }
    //     users[userIndex] = { ...users[userIndex], ...req.body };
    //     fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (error) => {
    //         if (error) {
    //             return res.status(500).json({ status: "error", message: "Failed to update user" });
    //         }
    //         res.json({ status: "success", user: users[userIndex] });
    //     });
    // });
    
})


app.delete("/api/user/:id",(req,res) => {
    const body = req.body;
    users.delete({...body, id: users.length + 1});
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(error,data) => {
        return  res.json({status:"success",id:users.length});
    })
})

app.listen(PORT, () => { console.log(`Server started at PORT: ${PORT}`) })

