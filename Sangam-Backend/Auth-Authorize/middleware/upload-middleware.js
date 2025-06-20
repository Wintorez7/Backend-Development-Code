const multer = require('multer')
const path = require('path')

// set our multer storage
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,
            file.fiedname + "-" + Date.now() + path.extname(file.originalname)
        )
    }
})

// file filter function
const checkFilefilter = (req,file,cb) => {
    if(file.mimetype.startWith('image')){
        cb(null,true)
    }else{
        cb(new Error('Not an Image Please upload only images'))
    }
}

//multer middleware
module.exports = multer({
   
})