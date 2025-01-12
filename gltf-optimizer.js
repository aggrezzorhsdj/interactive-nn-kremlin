const fs = require("fs"),
	minimist = require("minimist"),
	{ execSync } = require('child_process');

const args = minimist(process.argv.slice(2)),
	input = args["input"],
	output = args["output"];

// считывание содержимого папки
fs.readdir(input, function(err, filenames) {
	if (err) {
		console.error(err);
		return;
	}
	filenames.forEach(function(filename) {
		// вызов команды для оптимизации файла
		execSync(`gltf-transform draco ${input}${filename} ${output}${filename} --method edgebreaker`, {stdio: "inherit"})
	});
});
