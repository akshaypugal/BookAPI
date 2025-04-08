const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title:{
        type : String , 
        require : [true , 'The book is required '],
        max : [100 , "title cannot be more than 100 character"],
    },
    author:{
        type : String,
        require : [true , 'The author name is required'],
        max : [100 , 'Name cannot be more than 100 charachter'],
    },
    year: {
        type: Number,
        max: new Date().getFullYear(),
        message: "Year canot be in future"
      }
      ,
    createdAt : {
        type : Date , 
        default : Date.now,
    }
})

module.exports = mongoose.model("book" , bookSchema);