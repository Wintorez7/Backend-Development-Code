const express = require('express')
const { handelgetAlluser, handelgetUserId ,handelUpdateUserById,handelDeleteUserById,handelCreateUser} = require('../controller/user');
const router = express.Router();


// Routes // REST APIs
// router.get("/user", async(req,res) => {
//     const allDbUser = await User.find({})
//     const html = `
//     <ul>
//         ${allDbUser.map(user => `<li>${user.firstName} - ${user.Email}</li>`).join("")}
//     </ul>
//     `
//     res.send(html)
// })

// REST API
router.get("/",handelgetAlluser)

router.get("/:id",handelgetUserId)


router.post("/",handelCreateUser)

router.patch(handelUpdateUserById)
    

router.delete(handelDeleteUserById)

module.exports = router;