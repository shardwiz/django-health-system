<<<<<<< HEAD
define(function (require) {

    'use strict';

    var MapDraw = require('../helper/MapDraw');

    return require('../../echarts').extendComponentView({

        type: 'geo',

        init: function (ecModel, api) {
            var mapDraw = new MapDraw(api, true);
            this._mapDraw = mapDraw;

            this.group.add(mapDraw.group);
        },

        render: function (geoModel, ecModel, api, payload) {
            // Not render if it is an toggleSelect action from self
            if (payload && payload.type === 'geoToggleSelect'
                && payload.from === this.uid
            ) {
                return;
            }

            var mapDraw = this._mapDraw;
            if (geoModel.get('show')) {
                mapDraw.draw(geoModel, ecModel, api, this, payload);
            }
            else {
                this._mapDraw.group.removeAll();
            }
        }
    });
=======
define(function (require) {

    'use strict';

    var MapDraw = require('../helper/MapDraw');

    return require('../../echarts').extendComponentView({

        type: 'geo',

        init: function (ecModel, api) {
            var mapDraw = new MapDraw(api, true);
            this._mapDraw = mapDraw;

            this.group.add(mapDraw.group);
        },

        render: function (geoModel, ecModel, api, payload) {
            // Not render if it is an toggleSelect action from self
            if (payload && payload.type === 'geoToggleSelect'
                && payload.from === this.uid
            ) {
                return;
            }

            var mapDraw = this._mapDraw;
            if (geoModel.get('show')) {
                mapDraw.draw(geoModel, ecModel, api, this, payload);
            }
            else {
                this._mapDraw.group.removeAll();
            }
        }
    });
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});