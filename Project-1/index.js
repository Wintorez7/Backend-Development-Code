const express = require('express');
const users = require("./MOCK_DATA.json");
const fs = require('fs');

const app = express();
const PORT = 4000;

// Middleware - plugin
app.use(express.urlencoded({extended: false}))

app.use((req,res,next) => {
    fs.appendFile('log.txt',
         `\n${ Date.now()}:${req.method}:${req.path}`
         ,(err,data) => {
          next();
    })
})

app.use((req,res,next) => {
    console.log("hello from middleware 1")
    req.myUserName = "M.K.DeV"
    next();
})

app.use((req,res,next) => {
    console.log("hello from middleware 2",req.myUserName)
    next();
})

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
    // console.log("I am in Get Route", req.myUserName)
    res.setHeader("X-MyName","Mohan Kumhar")
    // always add X to custom header
    return res.json(users)
})


app.get("/api/user/:id", (req,res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if(!user){
        return res.status(404).json({msg:"user not Found"})
    }
    return res.json(user);
})


app.post("/api/user",(req,res) => {
    // to create user
    const body = req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({msg:"All Field Required"})
    }
    users.push({...body, id: users.length + 1});
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(error) => {
        if(error){
            return res.status(500).json({status:error,message:"Faild to save Data"})
        }
        res.json({status:"success",id:users.length});
    })
   
})


    // Todo: Edit the user id
    app.patch("/api/user/:id", (req, res) => {   
        const id = Number(req.params.id);
        const userIndex = users.findIndex(user => user.id === id);
        if (userIndex === -1) {
            return res.status(404).json({ status: "error", message: "User not found" });
        }
        users[userIndex] = { ...users[userIndex], ...req.body };
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (error) => {
            if (error) {
                return res.status(500).json({ status: "error", message: "Failed to update user" });
            }
            res.json({ status: "success", user: users[userIndex] });
        });
    });
    

app.delete("/api/user/:id",(req,res) => {
    const body = req.body;
    users.delete({...body, id: users.length + 1});
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(error,data) => {
        return  res.json({status:"success",id:users.length});
    })
})

app.listen(PORT, () => { console.log(`Server started at PORT: ${PORT}`) })



