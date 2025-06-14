const mongoose = requrie('mongoose')


const ImageSchema = new mongoose.Schema({
    url:{
        type:String,
        required:true,
    },
    publicId:{
        type:String,
        required:true
    }
})