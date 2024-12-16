const mongoose = require('mongoose');

// Schema
const userSchema  = new mongoose.Schema({   
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    JobTitle:{
        type:String,
    },
    Gender:{
        type:String,
    }
  },
  {timestamps:true}
);

const User = mongoose.model("user", userSchema);

module.exports = User;