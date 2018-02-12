<<<<<<< HEAD
define(function (require) {

    return function (ecModel) {
        ecModel.eachSeriesByType('themeRiver', function (seriesModel) {
            var data = seriesModel.getData();
            var rawData = seriesModel.getRawData();
            var colorList = seriesModel.get('color');

            data.each(function (index) {
                var name = data.getName(index);
                var rawIndex = data.getRawIndex(index);
                // use rawData just for drawing legend
                rawData.setItemVisual(
                    rawIndex,
                    'color',
                    colorList[(seriesModel.nameMap[name] - 1) % colorList.length]
                );
            });
        });
   };
=======
define(function (require) {

    return function (ecModel) {
        ecModel.eachSeriesByType('themeRiver', function (seriesModel) {
            var data = seriesModel.getData();
            var rawData = seriesModel.getRawData();
            var colorList = seriesModel.get('color');

            data.each(function (index) {
                var name = data.getName(index);
                var rawIndex = data.getRawIndex(index);
                // use rawData just for drawing legend
                rawData.setItemVisual(
                    rawIndex,
                    'color',
                    colorList[(seriesModel.nameMap[name] - 1) % colorList.length]
                );
            });
        });
   };
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});