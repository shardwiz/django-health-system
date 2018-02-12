<<<<<<< HEAD
/**
 * Parallel coordinate system creater.
 */
define(function(require) {

    var Parallel = require('./Parallel');

    function create(ecModel, api) {
        var coordSysList = [];

        ecModel.eachComponent('parallel', function (parallelModel, idx) {
            var coordSys = new Parallel(parallelModel, ecModel, api);

            coordSys.name = 'parallel_' + idx;
            coordSys.resize(parallelModel, api);

            parallelModel.coordinateSystem = coordSys;
            coordSys.model = parallelModel;

            coordSysList.push(coordSys);
        });

        // Inject the coordinateSystems into seriesModel
        ecModel.eachSeries(function (seriesModel) {
            if (seriesModel.get('coordinateSystem') === 'parallel') {
                var parallelIndex = seriesModel.get('parallelIndex');
                seriesModel.coordinateSystem = coordSysList[parallelIndex];
            }
        });

        return coordSysList;
    }

    require('../../CoordinateSystem').register('parallel', {create: create});

=======
/**
 * Parallel coordinate system creater.
 */
define(function(require) {

    var Parallel = require('./Parallel');

    function create(ecModel, api) {
        var coordSysList = [];

        ecModel.eachComponent('parallel', function (parallelModel, idx) {
            var coordSys = new Parallel(parallelModel, ecModel, api);

            coordSys.name = 'parallel_' + idx;
            coordSys.resize(parallelModel, api);

            parallelModel.coordinateSystem = coordSys;
            coordSys.model = parallelModel;

            coordSysList.push(coordSys);
        });

        // Inject the coordinateSystems into seriesModel
        ecModel.eachSeries(function (seriesModel) {
            if (seriesModel.get('coordinateSystem') === 'parallel') {
                var parallelIndex = seriesModel.get('parallelIndex');
                seriesModel.coordinateSystem = coordSysList[parallelIndex];
            }
        });

        return coordSysList;
    }

    require('../../CoordinateSystem').register('parallel', {create: create});

>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});