<<<<<<< HEAD
define(function (require) {

    var zrUtil = require('zrender/core/util');

    var geoCoordMap = {
        'Russia': [100, 60],
        'United States of America': [-99, 38]
    };

    return function (geo) {
        zrUtil.each(geo.regions, function (region) {
            var geoCoord = geoCoordMap[region.name];
            if (geoCoord) {
                var cp = region.center;
                cp[0] = geoCoord[0];
                cp[1] = geoCoord[1];
            }
        });
    };
=======
define(function (require) {

    var zrUtil = require('zrender/core/util');

    var geoCoordMap = {
        'Russia': [100, 60],
        'United States of America': [-99, 38]
    };

    return function (geo) {
        zrUtil.each(geo.regions, function (region) {
            var geoCoord = geoCoordMap[region.name];
            if (geoCoord) {
                var cp = region.center;
                cp[0] = geoCoord[0];
                cp[1] = geoCoord[1];
            }
        });
    };
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});