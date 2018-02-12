<<<<<<< HEAD
define(function (require) {

    return function (ecModel, api) {
        ecModel.eachSeriesByType('radar', function (seriesModel) {
            var data = seriesModel.getData();
            var points = [];
            var coordSys = seriesModel.coordinateSystem;
            if (!coordSys) {
                return;
            }

            function pointsConverter(val, idx) {
                points[idx] = points[idx] || [];
                points[idx][i] = coordSys.dataToPoint(val, i);
            }
            for (var i = 0; i < coordSys.getIndicatorAxes().length; i++) {
                var dim = data.dimensions[i];
                data.each(dim, pointsConverter);
            }

            data.each(function (idx) {
                // Close polygon
                points[idx][0] && points[idx].push(points[idx][0].slice());
                data.setItemLayout(idx, points[idx]);
            });
        });
    };
=======
define(function (require) {

    return function (ecModel, api) {
        ecModel.eachSeriesByType('radar', function (seriesModel) {
            var data = seriesModel.getData();
            var points = [];
            var coordSys = seriesModel.coordinateSystem;
            if (!coordSys) {
                return;
            }

            function pointsConverter(val, idx) {
                points[idx] = points[idx] || [];
                points[idx][i] = coordSys.dataToPoint(val, i);
            }
            for (var i = 0; i < coordSys.getIndicatorAxes().length; i++) {
                var dim = data.dimensions[i];
                data.each(dim, pointsConverter);
            }

            data.each(function (idx) {
                // Close polygon
                points[idx][0] && points[idx].push(points[idx][0].slice());
                data.setItemLayout(idx, points[idx]);
            });
        });
    };
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});