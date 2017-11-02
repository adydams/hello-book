const User = require('../models/index').User;
const userBorrowedBooks = require('../models/index').UserBorrowedBooks;
const Book = require('../models/index').Book;

module.exports = {
    // routes for signed in user to borrow books
    returnBorrowedBook (req, res){
        let userId = req.params.userId
        let bookId = req.params.bookId
        //ensured user exist   
        return User
                .find({where:{id: userId}})
                     .then((user)=>{
                         console.log('**********',user)
                            if(!user){
                                return res.status(404).send({message: 'You have not borrowed a book' })
                            }
                           
                                return userBorrowedBooks
                                    .find({
                                        where:{
                                        userId: req.params.userId,
                                        bookId: req.params.bookId
                                        }
                                    }).then( userborrowedbooks=>{
                                        if(userborrowedbooks){
                                            return res.status(200).send({message: 'You have successfully returned a book ' })
                                            return userborrowedbooks    
                                                 .destroy({
                                                     where:{
                                                     userId: req.params.userId,
                                                    bookId: req.params.bookId
                                                }
                                            })
                                           
                                        }
                                        return res.status(404).send({message: 'You have not borrowed this book you want to return ' })
                                    })
                                                          
                        }).catch((error)=>{res.status(404).send({error})})
        }        
}