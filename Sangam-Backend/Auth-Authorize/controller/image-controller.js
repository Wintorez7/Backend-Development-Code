const Image = require('../models/Image.js')
const {uploadToCloudinary} = require('../helper/cloudinaryHelper.js')

const uploadImage = async(req,res) => {
    try {
        // check if file is missing in request object
        if(!req.file){
            return res.status(400).json({
                success:false,
                message:"File is Required! Please upload an Image"
            })
        }
        // upload to cloudinary
        const {url,publicId} = await uploadToCloudinary(req.file.path)
        
        // store the image url and public id along with the uploaded user id in database
        const newlyuploadedImage = new Image({
            url,
            publicId,
            uploadedby:req.userInfo.userId
        })

        await newlyuploadedImage.save();

        res.status(201).json({
            success:true,
            message:"Image Uploaded successfully ",
            image:newlyuploadedImage,
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Something went wrong please try again"
        })
    }
}

module.exports = {
    uploadImage,
}