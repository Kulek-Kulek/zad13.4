var fs = require('fs');
var colors = require("colors");

fs.readdir('./test', function(err, file) {
    console.log("Dane przed zapisem".blue);
    console.log("file");
    fs.writeFile("./tekst.txt", file, function(err) {
    	if (err) throw err;
    	console.log("Zapisano!".blue);
    	fs.readdir('./test', function(err, file) {
            console.log('Dane po zapisie'.blue)
            console.log(file);
        });
    });
});


