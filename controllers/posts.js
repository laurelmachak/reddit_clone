const Post = require('../models/post');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/redditclone', { useMongoClient: true});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection Error:'));
mongoose.set('debug', true)

module.exports = (app) => {
    //CREATE
    app.post('/posts', (req,res) =>{
        var post = new Post(req.body);
        
    //SAVE INSTANCE OF POSt MODEL TO DB
    post.save((err,post) => {
        return res.redirect('/');
    })
    });
};