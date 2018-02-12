<<<<<<< HEAD
define(function (require) {

    var echarts = require('../../echarts');

    var actionInfo = {
        type: 'axisAreaSelect',
        event: 'axisAreaSelected',
        update: 'updateVisual'
    };

    /**
     * @payload
     * @property {string} parallelAxisId
     * @property {Array.<Array.<number>>} intervals
     */
    echarts.registerAction(actionInfo, function (payload, ecModel) {
        ecModel.eachComponent(
            {mainType: 'parallelAxis', query: payload},
            function (parallelAxisModel) {
                parallelAxisModel.axis.model.setActiveIntervals(payload.intervals);
            }
        );

    });
=======
define(function (require) {

    var echarts = require('../../echarts');

    var actionInfo = {
        type: 'axisAreaSelect',
        event: 'axisAreaSelected',
        update: 'updateVisual'
    };

    /**
     * @payload
     * @property {string} parallelAxisId
     * @property {Array.<Array.<number>>} intervals
     */
    echarts.registerAction(actionInfo, function (payload, ecModel) {
        ecModel.eachComponent(
            {mainType: 'parallelAxis', query: payload},
            function (parallelAxisModel) {
                parallelAxisModel.axis.model.setActiveIntervals(payload.intervals);
            }
        );

    });
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});