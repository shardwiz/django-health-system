<<<<<<< HEAD
define(function (require) {
    'use strict';

    var zrUtil = require('zrender/core/util');
    var Axis = require('../Axis');

    function RadiusAxis(scale, radiusExtent) {

        Axis.call(this, 'radius', scale, radiusExtent);

        /**
         * Axis type
         *  - 'category'
         *  - 'value'
         *  - 'time'
         *  - 'log'
         * @type {string}
         */
        this.type = 'category';
    }

    RadiusAxis.prototype = {

        constructor: RadiusAxis,

        dataToRadius: Axis.prototype.dataToCoord,

        radiusToData: Axis.prototype.coordToData
    };

    zrUtil.inherits(RadiusAxis, Axis);

    return RadiusAxis;
=======
define(function (require) {
    'use strict';

    var zrUtil = require('zrender/core/util');
    var Axis = require('../Axis');

    function RadiusAxis(scale, radiusExtent) {

        Axis.call(this, 'radius', scale, radiusExtent);

        /**
         * Axis type
         *  - 'category'
         *  - 'value'
         *  - 'time'
         *  - 'log'
         * @type {string}
         */
        this.type = 'category';
    }

    RadiusAxis.prototype = {

        constructor: RadiusAxis,

        dataToRadius: Axis.prototype.dataToCoord,

        radiusToData: Axis.prototype.coordToData
    };

    zrUtil.inherits(RadiusAxis, Axis);

    return RadiusAxis;
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});