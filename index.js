const express = require('express');
const exphbs  = require('express3-handlebars');

const app = express();

app.engine('.hbs', exphbs({extname: '.hbs', defaultLayout: 'main'}));

app.set('view engine', '.hbs');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/home', function(req, res) {
    res.render('home');
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.get('/contact', function(req, res) {
    res.render('contact');
});

app.get('/product', function(req, res) {
    res.render('product');
});

app.get('/single', function(req, res) {
    res.render('single');
});

app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});

app.use(function(err, req, res, next){
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(req, res) {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl + C  to terminate.');
});

