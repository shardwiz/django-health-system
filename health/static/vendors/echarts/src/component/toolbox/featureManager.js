<<<<<<< HEAD
define(function(require) {
    'use strict';

    var features = {};

    return {
        register: function (name, ctor) {
            features[name] = ctor;
        },

        get: function (name) {
            return features[name];
        }
    };
=======
define(function(require) {
    'use strict';

    var features = {};

    return {
        register: function (name, ctor) {
            features[name] = ctor;
        },

        get: function (name) {
            return features[name];
        }
    };
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});