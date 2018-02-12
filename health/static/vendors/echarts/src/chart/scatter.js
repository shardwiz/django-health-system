<<<<<<< HEAD
define(function (require) {

    var zrUtil = require('zrender/core/util');
    var echarts = require('../echarts');

    require('./scatter/ScatterSeries');
    require('./scatter/ScatterView');

    echarts.registerVisualCoding('chart', zrUtil.curry(
        require('../visual/symbol'), 'scatter', 'circle', null
    ));
    echarts.registerLayout(zrUtil.curry(
        require('../layout/points'), 'scatter'
    ));

    // In case developer forget to include grid component
    require('../component/grid');
=======
define(function (require) {

    var zrUtil = require('zrender/core/util');
    var echarts = require('../echarts');

    require('./scatter/ScatterSeries');
    require('./scatter/ScatterView');

    echarts.registerVisualCoding('chart', zrUtil.curry(
        require('../visual/symbol'), 'scatter', 'circle', null
    ));
    echarts.registerLayout(zrUtil.curry(
        require('../layout/points'), 'scatter'
    ));

    // In case developer forget to include grid component
    require('../component/grid');
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});