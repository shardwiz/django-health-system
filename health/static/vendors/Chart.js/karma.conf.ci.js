<<<<<<< HEAD
module.exports = function(config) {
	var configuration = {
		browsers: ['Firefox'],
		customLaunchers: {
			Chrome_travis_ci: {
				base: 'Chrome',
				flags: ['--no-sandbox']
			}
		},
		frameworks: ['browserify', 'jasmine'],
		reporters: ['progress', 'html'],
		preprocessors: {
			'src/**/*.js': ['browserify']
		},
		browserify: {
			debug: true
		}
	};

	if (process.env.TRAVIS) {
		configuration.browsers.push('Chrome_travis_ci');
	}

	config.set(configuration);
=======
module.exports = function(config) {
	var configuration = {
		browsers: ['Firefox'],
		customLaunchers: {
			Chrome_travis_ci: {
				base: 'Chrome',
				flags: ['--no-sandbox']
			}
		},
		frameworks: ['browserify', 'jasmine'],
		reporters: ['progress', 'html'],
		preprocessors: {
			'src/**/*.js': ['browserify']
		},
		browserify: {
			debug: true
		}
	};

	if (process.env.TRAVIS) {
		configuration.browsers.push('Chrome_travis_ci');
	}

	config.set(configuration);
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
};