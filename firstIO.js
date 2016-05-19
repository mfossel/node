var fs= require('fs');

var file = fs.readFileSync(process.argv[2]);

var splitarray = file.toString().split('\n');

var count = splitarray.length -1;

console.log(count);