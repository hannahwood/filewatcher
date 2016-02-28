var fs = require('fs');
var express = require('express');
var logger = require('morgan');
var async = require('async');
var ejs = require('ejs');

// take a list of files from the command line.
// now we can watch three files using:
// node app.js file1.js file2.js file3.js
var filenames = Array.prototype.slice.call(process.argv, 2);
console.log(filenames);

// create the express app
var app = express();

// connect the Morgan logging middleware to our app
app.use( logger('dev') );

// start a server listening on port 1234
app.listen( 1234 );

// when someone requests http://localhost:1234/, run the callback
// function listed here and respond with the data
// we call this the "/" (or "Root") route.
// app.get("/", function(request, response) {
//   fs.readFile(filenames[0], function(err, data) {
//     response.send('<pre>' + data.toString() + '</pre>');
//   });
// });


app.get('/', function (request, response) {
  var mapFilenamesToContent = function(file, doneCallback) {
  		fs.readFile(file, function(err, data) { 
     		return doneCallback(null, file);
		});
  };

  async.map(filenames, mapFilenamesToContent, function (err, results) {
    if (err) console.log('async.map error:', err);
    response.render( 'mainView', { files: results} );
  });
});

app.set('view engine', 'ejs');

