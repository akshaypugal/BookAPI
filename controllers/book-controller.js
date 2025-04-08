const book = require('../models/book')



const getBook = async(req , res) =>{
   try {
     const allbook = await book.find({})
     if(allbook.length > 0){
        res.status(200).json({
            success : true,
            message : 'Success',
            data : allbook
        })
     }
   } catch (error) {
       console.log('unable to get all the book ' , error);
       res.status(404).json({
          sucess : false , 
          message : 'No book found to fetch'
       })
   }
};
const getSingleBook = async(req , res) =>{
     try {
            const id = req.params.id ;
            const bookByID = await book.findById(id);
            if(!bookByID){
                 res.status(404).json({
                    success : false ,
                    message : 'Book with this id is not available , try with some other id'
                 })
            }else{
                res.status(200).json({
                    success : true , 
                    message : 'this is the book with the given id ',
                    data : bookByID
                })
            }
     } catch (error) {
        console.log("Unable to the get the book" , error)
        res.status(404).json({
            sucess : false , 
            message : 'No book found to fetch'
         })
     }
};
const addBook = async(req , res) =>{
    try {
        const newFormData = {
            title : req.body.title , 
            author : req.body.author , 
            year : req.body.year 
        };
        const bookdata = book.create(newFormData);
        if(bookdata){
            res.status(200).json({
                sucess : true , 
                message : 'New book added',
                data : newFormData,
            });
            console.log('added new book ')
        }
    } catch (error) {
        console.log("Error in adding the book" , error)
    }
};
const updateBook = async(req , res) =>{
    try {
        const content = req.body ;
        const id = req.params.id;
        const bookUP = await book.findByIdAndUpdate(id , content,{
            new : true ,
        })
        if(!bookUP){
            res.status(404).json({
                success : false , 
                message : 'book not found'
            })
        }else{
            res.status(200).json({
                success : true,
                message : 'Updated successfully',
                data : bookUP
            })
        }
    } catch (error) {
        console.log("Unable to the get the book" , error)
        res.status(404).json({
            sucess : false , 
            message : 'No book found to fetch'
         }) 
    }
};
const deleteBook = async(req , res)=>{
  try {
    const id = req.params.id
    const Dbook = await book.findByIdAndDelete(id)
    if(!Dbook){
        res.status(404).json({
            success : false , 
            message : 'book not found'
        })
    }else{
        res.status(200).json({
            success : true,
            message : 'Deleted successfully',
            data : Dbook 
        })
    }
  } catch (error) {
    console.log("Error in deleting the book" , error)
  }
}

module.exports = {getBook , getSingleBook , addBook , updateBook , deleteBook};