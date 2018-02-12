<<<<<<< HEAD
define(function (require) {

    var echarts = require('../echarts');

    require('./sankey/SankeySeries');
    require('./sankey/SankeyView');
    echarts.registerLayout(require('./sankey/sankeyLayout'));
    echarts.registerVisualCoding('chart', require('./sankey/sankeyVisual'));
=======
define(function (require) {

    var echarts = require('../echarts');

    require('./sankey/SankeySeries');
    require('./sankey/SankeyView');
    echarts.registerLayout(require('./sankey/sankeyLayout'));
    echarts.registerVisualCoding('chart', require('./sankey/sankeyVisual'));
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});