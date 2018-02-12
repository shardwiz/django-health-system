<<<<<<< HEAD
define(function (require) {

    var echarts = require('../echarts');

    require('./treemap/TreemapSeries');
    require('./treemap/TreemapView');
    require('./treemap/treemapAction');

    echarts.registerVisualCoding('chart', require('./treemap/treemapVisual'));

    echarts.registerLayout(require('./treemap/treemapLayout'));
=======
define(function (require) {

    var echarts = require('../echarts');

    require('./treemap/TreemapSeries');
    require('./treemap/TreemapView');
    require('./treemap/treemapAction');

    echarts.registerVisualCoding('chart', require('./treemap/treemapVisual'));

    echarts.registerLayout(require('./treemap/treemapLayout'));
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});