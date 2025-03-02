
export const register = async (req,res) => {
    try {
       const {fullName,email,password} = req.body;
       if(!fullName || !email || !password){
        return res.status(430).json({
            success:false,
            message:"All Fields are Required"
        })
       }
         
    } catch (error) {
        console.log(error)
    }
}