<<<<<<< HEAD
export { hooks, setHookCallback };

var hookCallback;

function hooks () {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback (callback) {
    hookCallback = callback;
}
=======
export { hooks, setHookCallback };

var hookCallback;

function hooks () {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback (callback) {
    hookCallback = callback;
}
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
