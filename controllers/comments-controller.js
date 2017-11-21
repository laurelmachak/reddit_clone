const Comment = require('../models/comment.js');
const mongoose = require('mongoose');
module.exports = (app) => {
    app.post('/post/:postId/comments', (req, res) =>{
        
        const comment = new Comment(req.body);
        
        comment.save().then((comment) =>{
            return res.redirect('/')
        }).catch((err) => {
            console.log(err)
        })
    })
}