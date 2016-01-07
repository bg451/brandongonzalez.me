var express = require('express');
var jade = require('jade');
var app = express();

var options = {cache: true};
jade.compileFile('./views/index.jade', options);

app.set('view cache', true);
app.set('views', './views');
app.set('view engine', 'jade');

app.use(express.static('public'));
app.get('/', function(req, res) {
  res.render('index');
});

app.listen(process.env.PORT || 3000)
