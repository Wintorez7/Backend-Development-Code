
  const fs = require("fs")

//fs.writeFileSync("./text.txt","hey there it's Mohan")//synchronous 

// fs.writeFile("./text.txt","hello Rohan Async",(error) => {

// })

// const result =  fs.readFileSync("./contact.txt","utf-8")
// console.log(result)

// fs.appendFileSync("./text.txt", new Date().toLocaleString());   
// console.log("1")
 fs.readFile('contact.txt','utf-8', (err,result) => {
    // console.log(result)
 });
// console.log("2")