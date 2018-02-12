<<<<<<< HEAD
define(function (require) {

    var zrUtil = require('zrender/core/util');
    var echarts = require('../echarts');

    // Must use radar component
    require('../component/radar');

    require('./radar/RadarSeries');
    require('./radar/RadarView');

    echarts.registerVisualCoding(
        'chart',  zrUtil.curry(require('../visual/dataColor'), 'radar')
    );
    echarts.registerVisualCoding('chart', zrUtil.curry(
        require('../visual/symbol'), 'radar', 'circle', null
    ));
    echarts.registerLayout(require('./radar/radarLayout'));

    echarts.registerProcessor(
        'filter', zrUtil.curry(require('../processor/dataFilter'), 'radar')
    );

    echarts.registerPreprocessor(require('./radar/backwardCompat'));
=======
define(function (require) {

    var zrUtil = require('zrender/core/util');
    var echarts = require('../echarts');

    // Must use radar component
    require('../component/radar');

    require('./radar/RadarSeries');
    require('./radar/RadarView');

    echarts.registerVisualCoding(
        'chart',  zrUtil.curry(require('../visual/dataColor'), 'radar')
    );
    echarts.registerVisualCoding('chart', zrUtil.curry(
        require('../visual/symbol'), 'radar', 'circle', null
    ));
    echarts.registerLayout(require('./radar/radarLayout'));

    echarts.registerProcessor(
        'filter', zrUtil.curry(require('../processor/dataFilter'), 'radar')
    );

    echarts.registerPreprocessor(require('./radar/backwardCompat'));
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});