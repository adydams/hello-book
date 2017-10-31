const User = require('../models/index').User;


module.exports = {
    signin(req, res){
        return User.findOne({
            where: {
                username: req.body.username,
                password : req.body.password
            }
        }).then ((User)=>{
            if(!User){
              return  res.send('invalid username/password');
            }
            res.send(username +',you are logged in')

        })
    },
    signup(req, res) {
        return User//.count({ where:{username: req.body.username}})
          .findOne({
            where: {
                username: req.body.username,
                 },      
                
         })
         .then(user => { 
            
            if(user) { 
              
             return res.status(400).send({message:'email/password already exist'});
             
                } 
            
             return User
                .create({ 
                  name: req.body.name,    
                  username: req.body.username,
                  password: req.body.password,
                  email: req.body.email,
                  firstName:req.body.firstName,
                  lastName: req.body.lastName,
                  roleId: 1,
                  mobileNumber: req.body.mobileNumber
                            
                  })
                  .then((user) =>
                 // console.log(User)
                  res.status(200).send(user.username+ ' Successfully sign up'))  // create a new user if not existing
                  .catch((error) => res.status(400).send(error)); 
                })
                    .catch((error)=> res.status(400).send(error))

          }
}