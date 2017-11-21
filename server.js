const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/post');
const mongoose = require('mongoose');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/redditclone', { useMongoClient: true});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection Error:'));
mongoose.set('debug', true)


// set up handlebars with express:

app.engine('.hbs', exphbs({
    extname: '.hbs', // set file extension
    defaultLayout: 'main', //set default template
}));

app.set('view engine', '.hbs');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('public'));



// ----- Routes below this line -------

app.get('/', (req,res) =>{
 Post.find({}).then((posts) => {
    res.render('home', { posts })
  }).catch((err) => {
    console.log(err.message);
  })
})

app.get('/posts/:id', (req, res) => {
  Post.findById(req.params.id).then((post) =>{
    res.render('post-show', { post })
  }).catch((err) => {
    console.log(err.message)
  })
})

//SUBREDDIT
app.get('/r/:subReddit', (req, res) => {
    Post.find({subReddit: req.params.subReddit}).then((posts) => {
        res.render('home', { posts })
    }).catch((err) => {
        console.log(err)
    })
})

require('./controllers/posts.js')(app);
require('./controllers/comments-controller.js')(app);

app.listen(3000, function () {
  console.log('listening on port 3000!');
});
