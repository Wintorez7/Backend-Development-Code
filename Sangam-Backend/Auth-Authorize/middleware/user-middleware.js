const isClientUser = (req,res,next) => {
    if(req.userInfo.role !== 'user'){
        return res.status(403).json({
            success:false,
            message:"Access denied only Client or User Can Access this Page"
        })
    }
    next();
}

module.exports = isClientUser;