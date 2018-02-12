<<<<<<< HEAD
var PROD = process.argv.indexOf('-p') >= 0;

module.exports = {
    entry: {
        'echarts': __dirname + '/index.js',
        'echarts.simple': __dirname + '/index.simple.js',
        'echarts.common': __dirname + '/index.common.js'
    },
    output: {
        libraryTarget: 'umd',
        library: 'echarts',
        path: __dirname + '/dist',
        filename: PROD ? '[name].min.js' : '[name].js'
    }
=======
var PROD = process.argv.indexOf('-p') >= 0;

module.exports = {
    entry: {
        'echarts': __dirname + '/index.js',
        'echarts.simple': __dirname + '/index.simple.js',
        'echarts.common': __dirname + '/index.common.js'
    },
    output: {
        libraryTarget: 'umd',
        library: 'echarts',
        path: __dirname + '/dist',
        filename: PROD ? '[name].min.js' : '[name].js'
    }
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
};