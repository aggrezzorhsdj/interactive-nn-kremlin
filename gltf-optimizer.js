const fs = require("fs"),
	minimist = require("minimist"),
	{ execSync } = require('child_process');

const args = minimist(process.argv.slice(2)),
	input = args["input"],
	output = args["output"];

fs.readdir(input, function(err, filenames) {
	if (err) {
		console.error(err);
		return;
	}
	filenames.forEach(function(filename) {
		execSync(`gltf-transform draco ${input}${filename} ${output}${filename} --method edgebreaker`, {stdio: "inherit"})
	});
});
