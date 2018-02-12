<<<<<<< HEAD
define(function (require) {
    var circularLayoutHelper = require('./circularLayoutHelper');
    return function (ecModel, api) {
        ecModel.eachSeriesByType('graph', function (seriesModel) {
            if (seriesModel.get('layout') === 'circular') {
                circularLayoutHelper(seriesModel);
            }
        });
    };
=======
define(function (require) {
    var circularLayoutHelper = require('./circularLayoutHelper');
    return function (ecModel, api) {
        ecModel.eachSeriesByType('graph', function (seriesModel) {
            if (seriesModel.get('layout') === 'circular') {
                circularLayoutHelper(seriesModel);
            }
        });
    };
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});