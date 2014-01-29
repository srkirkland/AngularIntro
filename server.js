var express = require('express'),

    app = express();
  
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

app.listen(process.env.PORT || 3000);