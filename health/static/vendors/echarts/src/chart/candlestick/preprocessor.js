<<<<<<< HEAD
define(function (require) {

    var zrUtil = require('zrender/core/util');

    return function (option) {
        if (!option || !zrUtil.isArray(option.series)) {
            return;
        }

        // Translate 'k' to 'candlestick'.
        zrUtil.each(option.series, function (seriesItem) {
            if (zrUtil.isObject(seriesItem) && seriesItem.type === 'k') {
                seriesItem.type = 'candlestick';
            }
        });
    };

=======
define(function (require) {

    var zrUtil = require('zrender/core/util');

    return function (option) {
        if (!option || !zrUtil.isArray(option.series)) {
            return;
        }

        // Translate 'k' to 'candlestick'.
        zrUtil.each(option.series, function (seriesItem) {
            if (zrUtil.isObject(seriesItem) && seriesItem.type === 'k') {
                seriesItem.type = 'candlestick';
            }
        });
    };

>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});