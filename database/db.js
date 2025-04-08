const mongoose = require('mongoose');
require('dotenv').config()
const db = process.env.DB_URL



const connection = async() =>{
      try {
         await mongoose.connect(db)
         console.log('Database Connected')
      } catch (error) {
         console.log('Failed to connect the database',error);
         console.log(db);
      }
}

module.exports = connection;