<<<<<<< HEAD
/**
 * Helper function for axisLabelInterval calculation
 */

define(function(require) {
    'use strict';

    var zrUtil = require('zrender/core/util');
    var axisHelper = require('../axisHelper');

    return function (axis) {
        var axisModel = axis.model;
        var labelModel = axisModel.getModel('axisLabel');
        var labelInterval = labelModel.get('interval');
        if (!(axis.type === 'category' && labelInterval === 'auto')) {
            return labelInterval === 'auto' ? 0 : labelInterval;
        }

        return axisHelper.getAxisLabelInterval(
            zrUtil.map(axis.scale.getTicks(), axis.dataToCoord, axis),
            axisModel.getFormattedLabels(),
            labelModel.getModel('textStyle').getFont(),
            axis.isHorizontal()
        );
    };
=======
/**
 * Helper function for axisLabelInterval calculation
 */

define(function(require) {
    'use strict';

    var zrUtil = require('zrender/core/util');
    var axisHelper = require('../axisHelper');

    return function (axis) {
        var axisModel = axis.model;
        var labelModel = axisModel.getModel('axisLabel');
        var labelInterval = labelModel.get('interval');
        if (!(axis.type === 'category' && labelInterval === 'auto')) {
            return labelInterval === 'auto' ? 0 : labelInterval;
        }

        return axisHelper.getAxisLabelInterval(
            zrUtil.map(axis.scale.getTicks(), axis.dataToCoord, axis),
            axisModel.getFormattedLabels(),
            labelModel.getModel('textStyle').getFont(),
            axis.isHorizontal()
        );
    };
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});