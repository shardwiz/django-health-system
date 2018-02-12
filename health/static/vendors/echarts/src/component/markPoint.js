<<<<<<< HEAD
// HINT Markpoint can't be used too much
define(function (require) {

    require('./marker/MarkPointModel');
    require('./marker/MarkPointView');

    require('../echarts').registerPreprocessor(function (opt) {
        // Make sure markPoint component is enabled
        opt.markPoint = opt.markPoint || {};
    });
=======
// HINT Markpoint can't be used too much
define(function (require) {

    require('./marker/MarkPointModel');
    require('./marker/MarkPointView');

    require('../echarts').registerPreprocessor(function (opt) {
        // Make sure markPoint component is enabled
        opt.markPoint = opt.markPoint || {};
    });
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});