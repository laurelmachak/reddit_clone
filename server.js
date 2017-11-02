express = require('express');
app = express();
exphbs = require('express-handlebars');

// set up handlebars with express:

app.engine('.hbs', exphbs({
    extname: '.hbs', // set file extension
    defaultLayout: 'main', //set default template
}))


app.get('/', (req,res) =>{
  res.render('home.hbs')  
})

app.listen(3000, function () {
  console.log('listening on port 3000!');
});