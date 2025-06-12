const isAdminUser = (req,res,next) => {
    if(req.userInfo.role !== 'admin'){
        return res.status(403).json({
            success:false,
            message:"Access denied only Admin Can Access this Page"
        })
    }
    next();
}

module.exports = isAdminUser;