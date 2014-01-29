var express = require('express'),
    path = require('path');

    app = express();
  
app.use(express.static( path.join(__dirname, 'public'), { maxAge: 864000000 } ));

app.get('/', function (req, res) {
    res.render('home.ejs');
});

app.get('/basic', function (req, res) {
    res.render('basic.ejs');
});

app.get('/list', function (req, res) {
    res.render('list.ejs');
});

app.get('/controller', function (req, res) {
    res.render('controller.ejs');
});

app.get('/interactive', function (req, res) {
    res.render('interactive.ejs');
});

app.get('/factory', function (req, res) {
    res.render('factory.ejs');
});

app.get('/spa', function (req, res) {
    res.render('spa.ejs');
});

app.listen(process.env.PORT || 3000);