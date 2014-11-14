var spawn = require ('child_process').spawn;

child = spawn ('./main');
child.stdout.on('data', function (data) {
	console.log ("Data: " + data);
});
child.stdout.on('end', function (data) {
	console.log ("Data: " + data);
});

process.stdin.on('data', function (data) {
	child.stdin.write (data);
});

child.stdin.on ('end', function() { 
	process.exit(0);
});

