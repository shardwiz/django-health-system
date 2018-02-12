<<<<<<< HEAD
/**
 * @file VisualMap preprocessor
 */
define(function(require) {

    var zrUtil = require('zrender/core/util');
    var each = zrUtil.each;

    return function (option) {
        var visualMap = option && option.visualMap;

        if (!zrUtil.isArray(visualMap)) {
            visualMap = visualMap ? [visualMap] : [];
        }

        each(visualMap, function (opt) {
            if (!opt) {
                return;
            }

            // rename splitList to pieces
            if (has(opt, 'splitList') && !has(opt, 'pieces')) {
                opt.pieces = opt.splitList;
                delete opt.splitList;
            }

            var pieces = opt.pieces;
            if (pieces && zrUtil.isArray(pieces)) {
                each(pieces, function (piece) {
                    if (zrUtil.isObject(piece)) {
                        if (has(piece, 'start') && !has(piece, 'min')) {
                            piece.min = piece.start;
                        }
                        if (has(piece, 'end') && !has(piece, 'max')) {
                            piece.max = piece.end;
                        }
                    }
                });
            }
        });
    };

    function has(obj, name) {
        return obj && obj.hasOwnProperty && obj.hasOwnProperty(name);
    }

=======
/**
 * @file VisualMap preprocessor
 */
define(function(require) {

    var zrUtil = require('zrender/core/util');
    var each = zrUtil.each;

    return function (option) {
        var visualMap = option && option.visualMap;

        if (!zrUtil.isArray(visualMap)) {
            visualMap = visualMap ? [visualMap] : [];
        }

        each(visualMap, function (opt) {
            if (!opt) {
                return;
            }

            // rename splitList to pieces
            if (has(opt, 'splitList') && !has(opt, 'pieces')) {
                opt.pieces = opt.splitList;
                delete opt.splitList;
            }

            var pieces = opt.pieces;
            if (pieces && zrUtil.isArray(pieces)) {
                each(pieces, function (piece) {
                    if (zrUtil.isObject(piece)) {
                        if (has(piece, 'start') && !has(piece, 'min')) {
                            piece.min = piece.start;
                        }
                        if (has(piece, 'end') && !has(piece, 'max')) {
                            piece.max = piece.end;
                        }
                    }
                });
            }
        });
    };

    function has(obj, name) {
        return obj && obj.hasOwnProperty && obj.hasOwnProperty(name);
    }

>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});