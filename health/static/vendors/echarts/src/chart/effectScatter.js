<<<<<<< HEAD
define(function (require) {

    var zrUtil = require('zrender/core/util');
    var echarts = require('../echarts');

    require('./effectScatter/EffectScatterSeries');
    require('./effectScatter/EffectScatterView');

    echarts.registerVisualCoding('chart', zrUtil.curry(
        require('../visual/symbol'), 'effectScatter', 'circle', null
    ));
    echarts.registerLayout(zrUtil.curry(
        require('../layout/points'), 'effectScatter'
    ));
=======
define(function (require) {

    var zrUtil = require('zrender/core/util');
    var echarts = require('../echarts');

    require('./effectScatter/EffectScatterSeries');
    require('./effectScatter/EffectScatterView');

    echarts.registerVisualCoding('chart', zrUtil.curry(
        require('../visual/symbol'), 'effectScatter', 'circle', null
    ));
    echarts.registerLayout(zrUtil.curry(
        require('../layout/points'), 'effectScatter'
    ));
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});