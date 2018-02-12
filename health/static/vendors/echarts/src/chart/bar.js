<<<<<<< HEAD
define(function (require) {

    var zrUtil = require('zrender/core/util');

    require('../coord/cartesian/Grid');

    require('./bar/BarSeries');
    require('./bar/BarView');

    var barLayoutGrid = require('../layout/barGrid');
    var echarts = require('../echarts');

    echarts.registerLayout(zrUtil.curry(barLayoutGrid, 'bar'));
    // Visual coding for legend
    echarts.registerVisualCoding('chart', function (ecModel) {
        ecModel.eachSeriesByType('bar', function (seriesModel) {
            var data = seriesModel.getData();
            data.setVisual('legendSymbol', 'roundRect');
        });
    });

    // In case developer forget to include grid component
    require('../component/grid');
=======
define(function (require) {

    var zrUtil = require('zrender/core/util');

    require('../coord/cartesian/Grid');

    require('./bar/BarSeries');
    require('./bar/BarView');

    var barLayoutGrid = require('../layout/barGrid');
    var echarts = require('../echarts');

    echarts.registerLayout(zrUtil.curry(barLayoutGrid, 'bar'));
    // Visual coding for legend
    echarts.registerVisualCoding('chart', function (ecModel) {
        ecModel.eachSeriesByType('bar', function (seriesModel) {
            var data = seriesModel.getData();
            data.setVisual('legendSymbol', 'roundRect');
        });
    });

    // In case developer forget to include grid component
    require('../component/grid');
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});