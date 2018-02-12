<<<<<<< HEAD
/**
 * Single coordinate system creator.
 */
define(function (require) {

    var Single = require('./Single');

    /**
     * Create single coordinate system and inject it into seriesModel.
     *
     * @param {module:echarts/model/Global} ecModel
     * @param {module:echarts/ExtensionAPI} api
     * @return {Array.<module:echarts/coord/single/Single>}
     */
    function create(ecModel, api) {
        var singles = [];

        ecModel.eachComponent('singleAxis', function(axisModel, idx) {

            var single = new Single(axisModel, ecModel, api);
            single.name = 'single_' + idx;
            single.resize(axisModel, api);
            axisModel.coordinateSystem = single;
            singles.push(single);

        });

        ecModel.eachSeries(function (seriesModel) {

            if (seriesModel.get('coordinateSystem') === 'single') {
                var singleAxisIndex = seriesModel.get('singleAxisIndex');
                var axisModel = ecModel.getComponent('singleAxis', singleAxisIndex);
                seriesModel.coordinateSystem = axisModel.coordinateSystem;
            }
        });

        return singles;
    }

    require('../../CoordinateSystem').register('single', {create: create});
=======
/**
 * Single coordinate system creator.
 */
define(function (require) {

    var Single = require('./Single');

    /**
     * Create single coordinate system and inject it into seriesModel.
     *
     * @param {module:echarts/model/Global} ecModel
     * @param {module:echarts/ExtensionAPI} api
     * @return {Array.<module:echarts/coord/single/Single>}
     */
    function create(ecModel, api) {
        var singles = [];

        ecModel.eachComponent('singleAxis', function(axisModel, idx) {

            var single = new Single(axisModel, ecModel, api);
            single.name = 'single_' + idx;
            single.resize(axisModel, api);
            axisModel.coordinateSystem = single;
            singles.push(single);

        });

        ecModel.eachSeries(function (seriesModel) {

            if (seriesModel.get('coordinateSystem') === 'single') {
                var singleAxisIndex = seriesModel.get('singleAxisIndex');
                var axisModel = ecModel.getComponent('singleAxis', singleAxisIndex);
                seriesModel.coordinateSystem = axisModel.coordinateSystem;
            }
        });

        return singles;
    }

    require('../../CoordinateSystem').register('single', {create: create});
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});