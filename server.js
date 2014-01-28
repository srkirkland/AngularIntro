var express = require('express'),
    exphbs  = require('express3-handlebars'),

    app = express();

app.set('views', __dirname + '/views');
app.engine('.html', exphbs({defaultLayout: 'main', extname: '.html'}));
app.set('view engine', '.html');

//app.use(express.favicon());
  
app.get('/', function (req, res) {
    res.render('home');
});

app.listen(process.env.PORT || 3000);