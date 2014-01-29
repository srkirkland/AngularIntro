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

app.get('/api/members', function (req, res) {
    res.send([{ name: 'adam', email: 'adam@ucdavis.edu' }
        , { name: 'bob', email: 'bob@ucdavis.edu' }
        , { name: 'carl', email: 'zcarl@ucdavis.edu' }
        , { name: 'cathy', email: 'cathy@ucdavis.edu' }
        , { name: 'dean', email: 'dean@ucdavis.edu'}
        , { name: 'elias', email: 'elias@ucdavis.edu'}]);
});

app.listen(process.env.PORT || 3000);