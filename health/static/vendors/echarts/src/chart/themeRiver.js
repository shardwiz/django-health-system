<<<<<<< HEAD
define(function (require) {

    var echarts = require('../echarts');
    var zrUtil = require('zrender/core/util');


    require('./themeRiver/ThemeRiverSeries');
    
    require('./themeRiver/ThemeRiverView');

    echarts.registerLayout(require('./themeRiver/themeRiverLayout'));

    echarts.registerVisualCoding('chart', require('./themeRiver/themeRiverVisual'));

    echarts.registerProcessor(
        'filter', zrUtil.curry(require('../processor/dataFilter'), 'themeRiver')
    );    
=======
define(function (require) {

    var echarts = require('../echarts');
    var zrUtil = require('zrender/core/util');


    require('./themeRiver/ThemeRiverSeries');
    
    require('./themeRiver/ThemeRiverView');

    echarts.registerLayout(require('./themeRiver/themeRiverLayout'));

    echarts.registerVisualCoding('chart', require('./themeRiver/themeRiverVisual'));

    echarts.registerProcessor(
        'filter', zrUtil.curry(require('../processor/dataFilter'), 'themeRiver')
    );    
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});