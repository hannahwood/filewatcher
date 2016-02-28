//console.log("Node starting...");
// var fs = require('fs');
// console.log(fs);
// // console.log(fs.readFileSync('./file1.txt'));
// var greeter = require('./greeter');
// greeter.greet('Hannah');
// greeter.shout('Hannah');
// //console.log(greeter);

// var fs = require('fs');
// //file.toString('utf-8');
// var file = fs.readFileSync('./file1.txt');
// file = file.toString('utf-8')
// console.log(file);

var buffer = '';
var fs = require('fs');
fs.readFile('./file1.txt', function(err, data) {
     buffer = data.toString();  // buffer object
     console.log(buffer);
});