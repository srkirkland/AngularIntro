var express = require('express'),
    exphbs  = require('express3-handlebars'),

    app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use(express.favicon());
  
app.get('/', function (req, res) {
    res.render('home');
});

app.listen(process.env.PORT || 3000);