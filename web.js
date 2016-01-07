var express = require('express');
var jade = require('jade');
var http = require('http');
var compress = require('compression');
var app = express();

var options = {cache: true};
jade.compileFile('./views/index.jade', options);

app.set('view cache', true);
app.use(compress());
app.set('views', './views');
app.set('view engine', 'jade');

app.use(express.static('public', {maxAge: "365 days"}));

app.get('/', function(req, res) {
  res.render('index');
});

setInterval(function() {
  http.get("http://www.brandongonzalez.me");
}, 300000); // every 5 minutes (300000)

app.listen(process.env.PORT || 3000)
