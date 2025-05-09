const express = require("express");
const {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateSingleBook,
  deleteBook,
} = require("../controller/book-controller.js");

//create express router
const router = express.Router();

// all the routes tha are related to books only
router.get("/get", getAllBooks);
router.get("/get/:id", getSingleBookById);
router.post("/add", addNewBook);
router.put("/update/:id", updateSingleBook);
router.delete("/delete/:id", deleteBook);

module.exports = router;