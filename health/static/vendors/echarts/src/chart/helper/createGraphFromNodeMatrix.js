<<<<<<< HEAD
define(function (require) {

    var List = require('../../data/List');
    var Graph = require('../../data/Graph');
    var linkList = require('../../data/helper/linkList');
    var completeDimensions = require('../../data/helper/completeDimensions');
    var CoordinateSystem = require('../../CoordinateSystem');
    var zrUtil = require('zrender/core/util');
    var createListFromArray = require('./createListFromArray');

    /**
     * 从邻接矩阵生成
     * ```
     *        TARGET
     *    -1--2--3--4--5-
     *  1| x  x  x  x  x
     *  2| x  x  x  x  x
     *  3| x  x  x  x  x  SOURCE
     *  4| x  x  x  x  x
     *  5| x  x  x  x  x
     * ```
     *
     * @param {Array.<Object>} nodes 节点信息
     * @param {Array} matrix 邻接矩阵
     * @param {module:echarts/model/Series}
     * @param {boolean} directed 是否是有向图
     * @return {module:echarts/data/Graph}
     */
    return function (nodes, matrix, hostModel, directed) {
        var graph = new Graph(directed);
        for (var i = 0; i < nodes.length; i++) {
            graph.addNode(zrUtil.retrieve(
                // Id, name, dataIndex
                nodes[i].id, nodes[i].name, i
            ), i);
        }

        var size = matrix.length;
        var links = [];
        var linkCount = 0;
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                var val = matrix[i][j];
                if (val === 0) {
                    continue;
                }
                var n1 = graph.nodes[i];
                var n2 = graph.nodes[j];
                var edge = graph.addEdge(n1, n2, linkCount);
                if (edge) {
                    linkCount++;
                    links.push({
                        value: val
                    });
                }
            }
        }

        var coordSys = hostModel.get('coordinateSystem');
        var nodeData;
        if (coordSys === 'cartesian2d' || coordSys === 'polar') {
            nodeData = createListFromArray(nodes, hostModel, hostModel.ecModel);
        }
        else {
            // FIXME
            var coordSysCtor = CoordinateSystem.get(coordSys);
            // FIXME
            var dimensionNames = completeDimensions(
                ((coordSysCtor && coordSysCtor.type !== 'view') ? (coordSysCtor.dimensions || []) : []).concat(['value']),
                nodes
            );
            nodeData = new List(dimensionNames, hostModel);
            nodeData.initData(nodes);
        }
        var edgeData = new List(['value'], hostModel);

        edgeData.initData(links);

        linkList({
            mainData: nodeData,
            struct: graph,
            structAttr: 'graph',
            datas: {node: nodeData, edge: edgeData},
            datasAttr: {node: 'data', edge: 'edgeData'}
        });

        // Update dataIndex of nodes and edges because invalid edge may be removed
        graph.update();

        return graph;
    };
=======
define(function (require) {

    var List = require('../../data/List');
    var Graph = require('../../data/Graph');
    var linkList = require('../../data/helper/linkList');
    var completeDimensions = require('../../data/helper/completeDimensions');
    var CoordinateSystem = require('../../CoordinateSystem');
    var zrUtil = require('zrender/core/util');
    var createListFromArray = require('./createListFromArray');

    /**
     * 从邻接矩阵生成
     * ```
     *        TARGET
     *    -1--2--3--4--5-
     *  1| x  x  x  x  x
     *  2| x  x  x  x  x
     *  3| x  x  x  x  x  SOURCE
     *  4| x  x  x  x  x
     *  5| x  x  x  x  x
     * ```
     *
     * @param {Array.<Object>} nodes 节点信息
     * @param {Array} matrix 邻接矩阵
     * @param {module:echarts/model/Series}
     * @param {boolean} directed 是否是有向图
     * @return {module:echarts/data/Graph}
     */
    return function (nodes, matrix, hostModel, directed) {
        var graph = new Graph(directed);
        for (var i = 0; i < nodes.length; i++) {
            graph.addNode(zrUtil.retrieve(
                // Id, name, dataIndex
                nodes[i].id, nodes[i].name, i
            ), i);
        }

        var size = matrix.length;
        var links = [];
        var linkCount = 0;
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                var val = matrix[i][j];
                if (val === 0) {
                    continue;
                }
                var n1 = graph.nodes[i];
                var n2 = graph.nodes[j];
                var edge = graph.addEdge(n1, n2, linkCount);
                if (edge) {
                    linkCount++;
                    links.push({
                        value: val
                    });
                }
            }
        }

        var coordSys = hostModel.get('coordinateSystem');
        var nodeData;
        if (coordSys === 'cartesian2d' || coordSys === 'polar') {
            nodeData = createListFromArray(nodes, hostModel, hostModel.ecModel);
        }
        else {
            // FIXME
            var coordSysCtor = CoordinateSystem.get(coordSys);
            // FIXME
            var dimensionNames = completeDimensions(
                ((coordSysCtor && coordSysCtor.type !== 'view') ? (coordSysCtor.dimensions || []) : []).concat(['value']),
                nodes
            );
            nodeData = new List(dimensionNames, hostModel);
            nodeData.initData(nodes);
        }
        var edgeData = new List(['value'], hostModel);

        edgeData.initData(links);

        linkList({
            mainData: nodeData,
            struct: graph,
            structAttr: 'graph',
            datas: {node: nodeData, edge: edgeData},
            datasAttr: {node: 'data', edge: 'edgeData'}
        });

        // Update dataIndex of nodes and edges because invalid edge may be removed
        graph.update();

        return graph;
    };
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});