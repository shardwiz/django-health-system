<<<<<<< HEAD
var PROD = process.argv.indexOf('-p') >= 0;

module.exports = {
    entry: {
        'bmap': __dirname + '/../extension/bmap/bmap.js',
        'dataTool': __dirname + '/../extension/dataTool'
    },
    output: {
        libraryTarget: 'umd',
        library: ['echarts', '[name]'],
        path: __dirname + '/../dist/extension',
        filename: PROD ? '[name].min.js' : '[name].js'
    },
    externals: {
        'echarts': 'echarts'
    }
=======
var PROD = process.argv.indexOf('-p') >= 0;

module.exports = {
    entry: {
        'bmap': __dirname + '/../extension/bmap/bmap.js',
        'dataTool': __dirname + '/../extension/dataTool'
    },
    output: {
        libraryTarget: 'umd',
        library: ['echarts', '[name]'],
        path: __dirname + '/../dist/extension',
        filename: PROD ? '[name].min.js' : '[name].js'
    },
    externals: {
        'echarts': 'echarts'
    }
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
};