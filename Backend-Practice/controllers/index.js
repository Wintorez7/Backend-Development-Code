export const register = (req,res) => {
    const {name,email,password} = req.body;
    console.log(name,email,password)
    // save data in database

    res.status(200)
       .json({success:true, message:"Account Created"})
}

export const login = (req,res) => {
    const {name,email,password} = req.body;
    console.log(name,email,password)

    // save data in database

    res.status(200)
       .json({success:true, message:"Login Successfully"})
}