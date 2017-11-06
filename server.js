express = require('express');
exphbs = require('express-handlebars');
app = express();
require('./controllers/posts.js')(app);
var bodyParser = require('body-parser');

// set up handlebars with express:

app.engine('.hbs', exphbs({
    extname: '.hbs', // set file extension
    defaultLayout: 'main', //set default template
}))

app.set('view engine', '.hbs');

app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static('public'));

app.get('/', (req,res) =>{
  res.render('home')
})

app.get('/posts/new', (req,res) =>{
    res.render('posts-new')
})

app.listen(3000, function () {
  console.log('listening on port 3000!');
});