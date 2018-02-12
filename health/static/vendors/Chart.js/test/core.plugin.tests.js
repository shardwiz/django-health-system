<<<<<<< HEAD
// Plugin tests
describe('Test the plugin system', function() {
	beforeEach(function() {
		Chart.plugins = [];
	});

	it ('Should register plugins', function() {
		var myplugin = {};
		Chart.pluginService.register(myplugin);
		expect(Chart.plugins.length).toBe(1);

		// Should only add plugin once
		Chart.pluginService.register(myplugin);
		expect(Chart.plugins.length).toBe(1);		
	});

	it ('Should allow unregistering plugins', function() {
		var myplugin = {};
		Chart.pluginService.register(myplugin);
		expect(Chart.plugins.length).toBe(1);

		// Should only add plugin once
		Chart.pluginService.remove(myplugin);
		expect(Chart.plugins.length).toBe(0);		

		// Removing a plugin that doesn't exist should not error
		Chart.pluginService.remove(myplugin);
	});

	it ('Should allow notifying plugins', function() {
		var myplugin = {
			count: 0,
			trigger: function(chart) {
				myplugin.count = chart.count;
			}
		};
		Chart.pluginService.register(myplugin);
		
		Chart.pluginService.notifyPlugins('trigger', [{ count: 10 }]);

		expect(myplugin.count).toBe(10);
	});
});
=======
// Plugin tests
describe('Test the plugin system', function() {
	beforeEach(function() {
		Chart.plugins = [];
	});

	it ('Should register plugins', function() {
		var myplugin = {};
		Chart.pluginService.register(myplugin);
		expect(Chart.plugins.length).toBe(1);

		// Should only add plugin once
		Chart.pluginService.register(myplugin);
		expect(Chart.plugins.length).toBe(1);		
	});

	it ('Should allow unregistering plugins', function() {
		var myplugin = {};
		Chart.pluginService.register(myplugin);
		expect(Chart.plugins.length).toBe(1);

		// Should only add plugin once
		Chart.pluginService.remove(myplugin);
		expect(Chart.plugins.length).toBe(0);		

		// Removing a plugin that doesn't exist should not error
		Chart.pluginService.remove(myplugin);
	});

	it ('Should allow notifying plugins', function() {
		var myplugin = {
			count: 0,
			trigger: function(chart) {
				myplugin.count = chart.count;
			}
		};
		Chart.pluginService.register(myplugin);
		
		Chart.pluginService.notifyPlugins('trigger', [{ count: 10 }]);

		expect(myplugin.count).toBe(10);
	});
});
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
