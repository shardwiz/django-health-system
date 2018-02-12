<<<<<<< HEAD
module.exports = function(config) {
	config.set({
		browsers: ['Chrome', 'Firefox'],
		frameworks: ['browserify', 'jasmine'],
		reporters: ['progress', 'html'],

		preprocessors: {
			'src/**/*.js': ['browserify']
		},
		browserify: {
			debug: true
		}
	});
=======
module.exports = function(config) {
	config.set({
		browsers: ['Chrome', 'Firefox'],
		frameworks: ['browserify', 'jasmine'],
		reporters: ['progress', 'html'],

		preprocessors: {
			'src/**/*.js': ['browserify']
		},
		browserify: {
			debug: true
		}
	});
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
};