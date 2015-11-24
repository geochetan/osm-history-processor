var sys = require('sys');
var exec = require('child_process').exec;
var crontab = require('node-crontab');
crontab.scheduleJob("00 21 * * *", function() {
	console.log("running");
	function puts(error, stdout, stderr) {
		sys.puts(stdout)
	}
	exec("/home/penny/osm-history-processor/buildosm.sh > log_buildosm.log", puts);
});