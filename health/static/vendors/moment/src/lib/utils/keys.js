<<<<<<< HEAD
import hasOwnProp from './has-own-prop';

var keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        var i, res = [];
        for (i in obj) {
            if (hasOwnProp(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}

export { keys as default };
=======
import hasOwnProp from './has-own-prop';

var keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        var i, res = [];
        for (i in obj) {
            if (hasOwnProp(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}

export { keys as default };
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
