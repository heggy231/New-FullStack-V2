//This exports all of the cityposts
const 
  db = require('../models')

module.exports = {
    index: (req,res)=>{
        db.Post.find({}, (err,cityposts)=>{
            res.json(cityposts)
        })
        
    },



//This is the Create Function 
    create: (req, res) =>{
        console.log("making post")
        let newPost = new db.Post({
            city: req.body.city,
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            user: req.userId
        })
        console.log(newPost)
        db.Post.create(newPost,(err, newPostCreated) =>{
            if (err) return console.log(err);
            console.log(newPostCreated)
            res.json(newPostCreated)
        });
    }
//This is the Get Function 


//This is the Update Function 


//This is the Delete Function 



}
