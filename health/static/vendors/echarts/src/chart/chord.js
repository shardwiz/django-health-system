<<<<<<< HEAD
define(function (require) {

    require('./chord/ChordSeries');
    require('./chord/ChordView');

    var echarts = require('../echarts');
    var zrUtil = require('zrender/core/util');
    echarts.registerLayout(require('./chord/chordCircularLayout'));

    echarts.registerVisualCoding(
        'chart',  zrUtil.curry(require('../visual/dataColor'), 'chord')
    );

    echarts.registerProcessor(
        'filter', zrUtil.curry(require('../processor/dataFilter'), 'pie')
    );
=======
define(function (require) {

    require('./chord/ChordSeries');
    require('./chord/ChordView');

    var echarts = require('../echarts');
    var zrUtil = require('zrender/core/util');
    echarts.registerLayout(require('./chord/chordCircularLayout'));

    echarts.registerVisualCoding(
        'chart',  zrUtil.curry(require('../visual/dataColor'), 'chord')
    );

    echarts.registerProcessor(
        'filter', zrUtil.curry(require('../processor/dataFilter'), 'pie')
    );
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});