<<<<<<< HEAD
define(function (require) {

    var zrUtil = require('zrender/core/util');
    var echarts = require('../echarts');

    require('./line/LineSeries');
    require('./line/LineView');

    echarts.registerVisualCoding('chart', zrUtil.curry(
        require('../visual/symbol'), 'line', 'circle', 'line'
    ));
    echarts.registerLayout(zrUtil.curry(
        require('../layout/points'), 'line'
    ));

    // Down sample after filter
    echarts.registerProcessor('statistic', zrUtil.curry(
        require('../processor/dataSample'), 'line'
    ));

    // In case developer forget to include grid component
    require('../component/grid');
=======
define(function (require) {

    var zrUtil = require('zrender/core/util');
    var echarts = require('../echarts');

    require('./line/LineSeries');
    require('./line/LineView');

    echarts.registerVisualCoding('chart', zrUtil.curry(
        require('../visual/symbol'), 'line', 'circle', 'line'
    ));
    echarts.registerLayout(zrUtil.curry(
        require('../layout/points'), 'line'
    ));

    // Down sample after filter
    echarts.registerProcessor('statistic', zrUtil.curry(
        require('../processor/dataSample'), 'line'
    ));

    // In case developer forget to include grid component
    require('../component/grid');
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});