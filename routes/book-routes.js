const express = require('express');
const {getBook , getSingleBook , addBook , updateBook , deleteBook} = require('../controllers/book-controller')
const router = express.Router();


router.get('/get', getBook );
router.get('/get/:id', getSingleBook );
router.post('/add' , addBook);
router.put('/update/:id' , updateBook );
router.delete('/delete/:id', deleteBook);


module.exports = router



