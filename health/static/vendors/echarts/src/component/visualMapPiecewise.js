<<<<<<< HEAD
/**
 * DataZoom component entry
 */
define(function (require) {

    require('../echarts').registerPreprocessor(
        require('./visualMap/preprocessor')
    );

    require('./visualMap/typeDefaulter');
    require('./visualMap/visualCoding');
    require('./visualMap/PiecewiseModel');
    require('./visualMap/PiecewiseView');
    require('./visualMap/visualMapAction');

=======
/**
 * DataZoom component entry
 */
define(function (require) {

    require('../echarts').registerPreprocessor(
        require('./visualMap/preprocessor')
    );

    require('./visualMap/typeDefaulter');
    require('./visualMap/visualCoding');
    require('./visualMap/PiecewiseModel');
    require('./visualMap/PiecewiseView');
    require('./visualMap/visualMapAction');

>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});