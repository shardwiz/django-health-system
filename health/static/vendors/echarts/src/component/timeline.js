<<<<<<< HEAD
/**
 * DataZoom component entry
 */
define(function (require) {

    var echarts = require('../echarts');

    echarts.registerPreprocessor(require('./timeline/preprocessor'));

    require('./timeline/typeDefaulter');
    require('./timeline/timelineAction');
    require('./timeline/SliderTimelineModel');
    require('./timeline/SliderTimelineView');

=======
/**
 * DataZoom component entry
 */
define(function (require) {

    var echarts = require('../echarts');

    echarts.registerPreprocessor(require('./timeline/preprocessor'));

    require('./timeline/typeDefaulter');
    require('./timeline/timelineAction');
    require('./timeline/SliderTimelineModel');
    require('./timeline/SliderTimelineView');

>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});