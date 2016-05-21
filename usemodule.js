var mod = require('./module')

var dir = process.argv[2]

var str = process.argv[3]

mod(dir, str, function (error, list) {

	if (error) 
		return conole.log('Error:', error)

  for (var i = 0; i < list.length; i++) {

	console.log(list[i]);

	}
})