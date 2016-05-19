fs = require('fs');

fs.readdir(process.argv[2], function (error, list){

var result = [];

	for (var i = 0; i < list.length; i++) {

		if (list[i].search('.' + process.argv[3]) > 0) {

			result.push(list[i]);

		}
	}


for (var i = 0; i < result.length; i++) {

	console.log(result[i]);

	}

});