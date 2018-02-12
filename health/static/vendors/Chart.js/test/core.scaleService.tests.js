<<<<<<< HEAD
// Tests of the scale service
describe('Test the scale service', function() {

	it('should update scale defaults', function() {
		var defaults = {
			testProp: true
		};
		var type = 'my_test_type';
		var Constructor = function() {
			this.initialized = true;
		};
		Chart.scaleService.registerScaleType(type, Constructor, defaults);

		// Should equal defaults but not be an identical object
		expect(Chart.scaleService.getScaleDefaults(type)).toEqual(jasmine.objectContaining({
			testProp: true
		}));
		
		Chart.scaleService.updateScaleDefaults(type, {
			testProp: 'red',
			newProp: 42
		});

		expect(Chart.scaleService.getScaleDefaults(type)).toEqual(jasmine.objectContaining({
			testProp: 'red',
			newProp: 42
		}));
	});
});
=======
// Tests of the scale service
describe('Test the scale service', function() {

	it('should update scale defaults', function() {
		var defaults = {
			testProp: true
		};
		var type = 'my_test_type';
		var Constructor = function() {
			this.initialized = true;
		};
		Chart.scaleService.registerScaleType(type, Constructor, defaults);

		// Should equal defaults but not be an identical object
		expect(Chart.scaleService.getScaleDefaults(type)).toEqual(jasmine.objectContaining({
			testProp: true
		}));
		
		Chart.scaleService.updateScaleDefaults(type, {
			testProp: 'red',
			newProp: 42
		});

		expect(Chart.scaleService.getScaleDefaults(type)).toEqual(jasmine.objectContaining({
			testProp: 'red',
			newProp: 42
		}));
	});
});
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
