<<<<<<< HEAD
module.exports = {
	options: {
		files: [
			"package.json",
			"bower.json"
		],
		updateConfigs: [
			"package"
		],
		commit: true,
		commitMessage: "Release v%VERSION%",
		commitFiles: [
			"-a"
		],
		createTag: true,
		tagName: "v%VERSION%",
		tagMessage: "Version %VERSION%",
		push: true,
		pushTo: "origin",
		gitDescribeOptions: "--tags --always --abbrev=1 --dirty=-d"
	}
};
=======
module.exports = {
	options: {
		files: [
			"package.json",
			"bower.json"
		],
		updateConfigs: [
			"package"
		],
		commit: true,
		commitMessage: "Release v%VERSION%",
		commitFiles: [
			"-a"
		],
		createTag: true,
		tagName: "v%VERSION%",
		tagMessage: "Version %VERSION%",
		push: true,
		pushTo: "origin",
		gitDescribeOptions: "--tags --always --abbrev=1 --dirty=-d"
	}
};
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
