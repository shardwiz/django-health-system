<<<<<<< HEAD
define(function (require) {
    return {
        getItemStyle: require('./makeStyleMapper')(
            [
                ['fill', 'color'],
                ['stroke', 'borderColor'],
                ['lineWidth', 'borderWidth'],
                ['opacity'],
                ['shadowBlur'],
                ['shadowOffsetX'],
                ['shadowOffsetY'],
                ['shadowColor']
            ]
        )
    };
=======
define(function (require) {
    return {
        getItemStyle: require('./makeStyleMapper')(
            [
                ['fill', 'color'],
                ['stroke', 'borderColor'],
                ['lineWidth', 'borderWidth'],
                ['opacity'],
                ['shadowBlur'],
                ['shadowOffsetX'],
                ['shadowOffsetY'],
                ['shadowColor']
            ]
        )
    };
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});