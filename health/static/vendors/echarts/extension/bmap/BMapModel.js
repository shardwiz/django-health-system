<<<<<<< HEAD
define(function (require) {

    function v2Equal(a, b) {
        return a && b && a[0] === b[0] && a[1] === b[1];
    }

    return require('echarts').extendComponentModel({
        type: 'bmap',

        getBMap: function () {
            // __bmap is injected when creating BMapCoordSys
            return this.__bmap;
        },

        setCenterAndZoom: function (center, zoom) {
            this.option.center = center;
            this.option.zoom = zoom;
        },

        centerOrZoomChanged: function (center, zoom) {
            var option = this.option;
            return !(v2Equal(center, option.center) && zoom === option.zoom);
        },

        defaultOption: {
            center: null,

            zoom: 1,

            mapStyle: {},

            roam: false
        }
    });
=======
define(function (require) {

    function v2Equal(a, b) {
        return a && b && a[0] === b[0] && a[1] === b[1];
    }

    return require('echarts').extendComponentModel({
        type: 'bmap',

        getBMap: function () {
            // __bmap is injected when creating BMapCoordSys
            return this.__bmap;
        },

        setCenterAndZoom: function (center, zoom) {
            this.option.center = center;
            this.option.zoom = zoom;
        },

        centerOrZoomChanged: function (center, zoom) {
            var option = this.option;
            return !(v2Equal(center, option.center) && zoom === option.zoom);
        },

        defaultOption: {
            center: null,

            zoom: 1,

            mapStyle: {},

            roam: false
        }
    });
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});