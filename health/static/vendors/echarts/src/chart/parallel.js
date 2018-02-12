<<<<<<< HEAD
define(function (require) {

    var echarts = require('../echarts');

    require('../component/parallel');

    require('./parallel/ParallelSeries');
    require('./parallel/ParallelView');

    echarts.registerVisualCoding('chart', require('./parallel/parallelVisual'));

=======
define(function (require) {

    var echarts = require('../echarts');

    require('../component/parallel');

    require('./parallel/ParallelSeries');
    require('./parallel/ParallelView');

    echarts.registerVisualCoding('chart', require('./parallel/parallelVisual'));

>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});