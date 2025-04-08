const express = require('express');
const connection = require('./database/db');
require('dotenv').config()
const bookRoutes = require('./routes/book-routes')
const port = process.env.PORT


const app = express ();
app.use(express.json())
app.use('/api/books' , bookRoutes);
connection();
app.listen(port , () =>{
    console.log(`Server listening on port ${port}`)
})