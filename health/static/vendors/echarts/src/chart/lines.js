<<<<<<< HEAD
define(function (require) {

    require('./lines/LinesSeries');
    require('./lines/LinesView');

    var zrUtil = require('zrender/core/util');
    var echarts = require('../echarts');
    echarts.registerLayout(
        require('./lines/linesLayout')
    );

    echarts.registerVisualCoding(
        'chart', zrUtil.curry(require('../visual/seriesColor'), 'lines', 'lineStyle')
    );
=======
define(function (require) {

    require('./lines/LinesSeries');
    require('./lines/LinesView');

    var zrUtil = require('zrender/core/util');
    var echarts = require('../echarts');
    echarts.registerLayout(
        require('./lines/linesLayout')
    );

    echarts.registerVisualCoding(
        'chart', zrUtil.curry(require('../visual/seriesColor'), 'lines', 'lineStyle')
    );
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});