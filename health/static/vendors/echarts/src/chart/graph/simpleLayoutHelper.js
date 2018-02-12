<<<<<<< HEAD
define(function (require) {

    var simpleLayoutEdge = require('./simpleLayoutEdge');

    return function (seriesModel) {
        var coordSys = seriesModel.coordinateSystem;
        if (coordSys && coordSys.type !== 'view') {
            return;
        }
        var graph = seriesModel.getGraph();

        graph.eachNode(function (node) {
            var model = node.getModel();
            node.setLayout([+model.get('x'), +model.get('y')]);
        });

        simpleLayoutEdge(graph);
    };
=======
define(function (require) {

    var simpleLayoutEdge = require('./simpleLayoutEdge');

    return function (seriesModel) {
        var coordSys = seriesModel.coordinateSystem;
        if (coordSys && coordSys.type !== 'view') {
            return;
        }
        var graph = seriesModel.getGraph();

        graph.eachNode(function (node) {
            var model = node.getModel();
            node.setLayout([+model.get('x'), +model.get('y')]);
        });

        simpleLayoutEdge(graph);
    };
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});