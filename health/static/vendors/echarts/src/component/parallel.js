<<<<<<< HEAD
define(function(require) {

    require('../coord/parallel/parallelCreator');
    require('../coord/parallel/ParallelModel');
    require('./parallelAxis');

    var echarts = require('../echarts');

    // Parallel view
    echarts.extendComponentView({
        type: 'parallel'
    });

    echarts.registerPreprocessor(
        require('../coord/parallel/parallelPreprocessor')
    );

=======
define(function(require) {

    require('../coord/parallel/parallelCreator');
    require('../coord/parallel/ParallelModel');
    require('./parallelAxis');

    var echarts = require('../echarts');

    // Parallel view
    echarts.extendComponentView({
        type: 'parallel'
    });

    echarts.registerPreprocessor(
        require('../coord/parallel/parallelPreprocessor')
    );

>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});