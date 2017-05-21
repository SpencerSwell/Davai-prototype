
const express = require('express');
var mongoose = require('mongoose');

const planecharter = require('./schema.js');

const app = express();
var DATABASE_URL ="mongodb://Admin:dev@ds013414.mlab.com:13414/davai";
console.log("WORK")

mongoose.Promise = global.Promise;

var connection = mongoose.connect('mongodb://Admin:dev@ds013414.mlab.com:13414/davai');

// app.get('/getFlightData', (req, res) => {
//   // console.log(req);
// planecharter
// 	.findOne()
// 	.exec()
// 	.then(planes =>  {
// 		console.log(planes);
// 		res.status(200).send(planes);
// 	});
	
// });








// let server
   

    mongoose.connect(DATABASE_URL);



