
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const {DATABASE_URL, PORT} = require('./config.js');
const userinfo = require('./schema.js');
const planecharter = require('./schema.js');

const app = express();



mongoose.Promise = global.Promise;



app.get('/getFlightData', (req, res) => {
  // console.log(req);
planecharter
	.findOne()
	.exec()
	.then(planes =>  {
		console.log(planes);
		res.status(200).send(planes);
	});
	
});








let server;

// this function connects to our database, then starts the server
function runServer() {
  return new Promise((resolve, reject) => {
    mongoose.connect(DATABASE_URL, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(PORT, () => {
        console.log(`Your app is listening on port ${PORT}`);
        resolve();
      })
      .on('error', err => {
        mongoose.disconnect();
        reject(err);
      });
    });
  });
}

// this function closes the server, and returns a promise. we'll
// use it in our integration tests later.
function closeServer() {
  return mongoose.disconnect().then(() => {
     return new Promise((resolve, reject) => {
       console.log('Closing server');
       server.close(err => {
           if (err) {
               return reject(err);
           }
           resolve();
       });
     });
  });
}

// if server.js is called directly (aka, with `node server.js`), this block
// runs. but we also export the runServer command so other code (for instance, test code) can start the server as needed.
if (require.main === module) {
  runServer().catch(err => console.error(err));
}

module.exports = {runServer, app, closeServer};

