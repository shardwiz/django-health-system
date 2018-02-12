<<<<<<< HEAD
define(function(require) {
    'use strict';

    require('../coord/polar/polarCreator');
    require('./angleAxis');
    require('./radiusAxis');

    // Polar view
    require('../echarts').extendComponentView({
        type: 'polar'
    });
=======
define(function(require) {
    'use strict';

    require('../coord/polar/polarCreator');
    require('./angleAxis');
    require('./radiusAxis');

    // Polar view
    require('../echarts').extendComponentView({
        type: 'polar'
    });
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});