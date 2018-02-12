<<<<<<< HEAD
define(function (require) {

    require('./marker/MarkLineModel');
    require('./marker/MarkLineView');

    require('../echarts').registerPreprocessor(function (opt) {
        // Make sure markLine component is enabled
        opt.markLine = opt.markLine || {};
    });
=======
define(function (require) {

    require('./marker/MarkLineModel');
    require('./marker/MarkLineView');

    require('../echarts').registerPreprocessor(function (opt) {
        // Make sure markLine component is enabled
        opt.markLine = opt.markLine || {};
    });
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});