<<<<<<< HEAD
define(function (require) {

    var echarts = require('../echarts');

    require('./candlestick/CandlestickSeries');
    require('./candlestick/CandlestickView');

    echarts.registerPreprocessor(
        require('./candlestick/preprocessor')
    );

    echarts.registerVisualCoding('chart', require('./candlestick/candlestickVisual'));
    echarts.registerLayout(require('./candlestick/candlestickLayout'));

=======
define(function (require) {

    var echarts = require('../echarts');

    require('./candlestick/CandlestickSeries');
    require('./candlestick/CandlestickView');

    echarts.registerPreprocessor(
        require('./candlestick/preprocessor')
    );

    echarts.registerVisualCoding('chart', require('./candlestick/candlestickVisual'));
    echarts.registerLayout(require('./candlestick/candlestickLayout'));

>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});