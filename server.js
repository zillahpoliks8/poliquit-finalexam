
var express = require('express');
var path = require('path');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'movies/index.html'));
});
app.get('/1999', function(req, res){
  res.sendFile(path.join(__dirname, 'movies/1999.html'));
});
app.get('/2004', function(req, res){
  res.sendFile(path.join(__dirname, 'movies/2004.html'));
});
app.get('/2007', function(req, res){
  res.sendFile(path.join(__dirname, 'movies/2007.html'));
});
app.get('/2011', function(req, res){
  res.sendFile(path.join(__dirname, 'movies/2011.html'));
});
app.get('/2013', function(req, res){
  res.sendFile(path.join(__dirname, 'movies/2013.html'));
});
app.get('*', function(req, res){
  res.status(404).sendFile(path.join(__dirname, 'views/404.html'));
});

var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});