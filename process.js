
printStats();
while (true) {
}

function printStats() {
	console.log ('\n==========');
	console.log ('PID: ' + process.pid);
	console.log (process.memoryUsage());
	console.log ('==========');
}
