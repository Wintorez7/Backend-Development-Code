const express = require("express");
const router = express.Router();
const {
  getAllRecipes,
  getSingleRecipe,
  createRecipe,
  updateSingleRecipe,
  deleteSingleRecipe,
} = require("../controller/index.js");

router.get('/get', getAllRecipes);
router.get('/get/:id', getSingleRecipe)
router.post('/add', createRecipe);
router.put('/update/:id', updateSingleRecipe)
router.delete('/delete/:id', deleteSingleRecipe)

module.exports = router;