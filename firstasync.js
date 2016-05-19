var fs = require('fs');

fs.readFile(process.argv[2], function finishedReading(error, data) {

	var splitarray = data.toString().split('\n');

	var count = splitarray.length -1;

	console.log(count);

});


 
