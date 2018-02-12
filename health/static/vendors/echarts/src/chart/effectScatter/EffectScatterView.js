<<<<<<< HEAD
define(function (require) {

    var SymbolDraw = require('../helper/SymbolDraw');
    var EffectSymbol = require('../helper/EffectSymbol');

    require('../../echarts').extendChartView({

        type: 'effectScatter',

        init: function () {
            this._symbolDraw = new SymbolDraw(EffectSymbol);
        },

        render: function (seriesModel, ecModel, api) {
            var data = seriesModel.getData();
            var effectSymbolDraw = this._symbolDraw;
            effectSymbolDraw.updateData(data);
            this.group.add(effectSymbolDraw.group);
        },

        updateLayout: function () {
            this._symbolDraw.updateLayout();
        },

        remove: function (ecModel, api) {
            this._symbolDraw && this._symbolDraw.remove(api);
        }
    });
=======
define(function (require) {

    var SymbolDraw = require('../helper/SymbolDraw');
    var EffectSymbol = require('../helper/EffectSymbol');

    require('../../echarts').extendChartView({

        type: 'effectScatter',

        init: function () {
            this._symbolDraw = new SymbolDraw(EffectSymbol);
        },

        render: function (seriesModel, ecModel, api) {
            var data = seriesModel.getData();
            var effectSymbolDraw = this._symbolDraw;
            effectSymbolDraw.updateData(data);
            this.group.add(effectSymbolDraw.group);
        },

        updateLayout: function () {
            this._symbolDraw.updateLayout();
        },

        remove: function (ecModel, api) {
            this._symbolDraw && this._symbolDraw.remove(api);
        }
    });
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});