<<<<<<< HEAD
define(function (require) {
    return function (ecModel) {
        ecModel.eachSeriesByType('map', function (seriesModel) {
            var colorList = seriesModel.get('color');
            var itemStyleModel = seriesModel.getModel('itemStyle.normal');

            var areaColor = itemStyleModel.get('areaColor');
            var color = itemStyleModel.get('color')
                || colorList[seriesModel.seriesIndex % colorList.length];

            seriesModel.getData().setVisual({
                'areaColor': areaColor,
                'color': color
            });
        });
    };
=======
define(function (require) {
    return function (ecModel) {
        ecModel.eachSeriesByType('map', function (seriesModel) {
            var colorList = seriesModel.get('color');
            var itemStyleModel = seriesModel.getModel('itemStyle.normal');

            var areaColor = itemStyleModel.get('areaColor');
            var color = itemStyleModel.get('color')
                || colorList[seriesModel.seriesIndex % colorList.length];

            seriesModel.getData().setVisual({
                'areaColor': areaColor,
                'color': color
            });
        });
    };
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});