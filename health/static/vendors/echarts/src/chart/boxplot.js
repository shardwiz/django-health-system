<<<<<<< HEAD
define(function (require) {

    var echarts = require('../echarts');

    require('./boxplot/BoxplotSeries');
    require('./boxplot/BoxplotView');

    echarts.registerVisualCoding('chart', require('./boxplot/boxplotVisual'));
    echarts.registerLayout(require('./boxplot/boxplotLayout'));

=======
define(function (require) {

    var echarts = require('../echarts');

    require('./boxplot/BoxplotSeries');
    require('./boxplot/BoxplotView');

    echarts.registerVisualCoding('chart', require('./boxplot/boxplotVisual'));
    echarts.registerLayout(require('./boxplot/boxplotLayout'));

>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});