<<<<<<< HEAD
define(function(require) {

    'use strict';

    var zrUtil = require('zrender/core/util');

    var echartsAPIList = [
        'getDom', 'getZr', 'getWidth', 'getHeight', 'dispatchAction',
        'on', 'off', 'getDataURL', 'getConnectedDataURL', 'getModel', 'getOption'
    ];

    function ExtensionAPI(chartInstance) {
        zrUtil.each(echartsAPIList, function (name) {
            this[name] = zrUtil.bind(chartInstance[name], chartInstance);
        }, this);
    }

    return ExtensionAPI;
=======
define(function(require) {

    'use strict';

    var zrUtil = require('zrender/core/util');

    var echartsAPIList = [
        'getDom', 'getZr', 'getWidth', 'getHeight', 'dispatchAction',
        'on', 'off', 'getDataURL', 'getConnectedDataURL', 'getModel', 'getOption'
    ];

    function ExtensionAPI(chartInstance) {
        zrUtil.each(echartsAPIList, function (name) {
            this[name] = zrUtil.bind(chartInstance[name], chartInstance);
        }, this);
    }

    return ExtensionAPI;
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});