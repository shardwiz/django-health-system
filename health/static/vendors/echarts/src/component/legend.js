<<<<<<< HEAD
/**
 * Legend component entry file8
 */
define(function (require) {

    require('./legend/LegendModel');
    require('./legend/legendAction');
    require('./legend/LegendView');

    var echarts = require('../echarts');
    // Series Filter
    echarts.registerProcessor('filter', require('./legend/legendFilter'));
=======
/**
 * Legend component entry file8
 */
define(function (require) {

    require('./legend/LegendModel');
    require('./legend/legendAction');
    require('./legend/LegendView');

    var echarts = require('../echarts');
    // Series Filter
    echarts.registerProcessor('filter', require('./legend/legendFilter'));
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});