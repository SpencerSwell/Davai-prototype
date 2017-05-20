var mongoose = require('mongoose');
var connect = mongoose.connect('mongodb://Admin:dev@ds013414.mlab.com:13414/davai');

console.log(connect);


const express = require('express');

const app = express();

app.get('/', function(req, res){
  res.send("Werking");
});

app.listen(8080);