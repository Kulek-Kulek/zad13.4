var os = require("os");
var colors = require('colors');

function getOSinfo() {
	var type = os.type();		
		if(type === 'Darwin') {
    		type = 'OSX';
		} else if(type === 'Windows_NT') {
    		type = 'Windows';
		}
		var release = os.release();
		var cpu = os.cpus()[0].model;
		var uptime = os.uptime();
		var userInfo = os.userInfo(); 
		console.log('System:'.grey, type);
		console.log('Release:'.red, release);
		console.log('CPU model:'.blue, cpu);
    	console.log('Uptime: ~'.green, (uptime / 60).toFixed(0), 'min');
    	console.log('User name:'.yellow, userInfo.username);
    	console.log('Home dir:'.white, userInfo.homedir);

}

function time() {
	var uptime = os.uptime();
	var hour = uptime / 3600;
	var minute = (hour - Math.floor(hour)) * 60;
	var second = (minute - Math.floor(minute)) * 60;


	if (uptime >= 60 && uptime < 3600) {
		console.log('Uptime:', Math.floor(minute), 'min', Math.floor(second), "sek.");
	} if (uptime >= 3600)  {
		console.log('Uptime:', Math.floor(hour),'godz.', Math.floor(minute), 'min.', Math.floor(second), "sek.");	
	} if (uptime < 60) {
		console.log('Uptime:', Math.floor(uptime), "sek.");
	}
}

exports.print = getOSinfo;
exports.time = time;


