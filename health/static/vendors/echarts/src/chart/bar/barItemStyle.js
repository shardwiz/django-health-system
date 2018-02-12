<<<<<<< HEAD
define(function (require) {
    return {
        getBarItemStyle: require('../../model/mixin/makeStyleMapper')(
            [
                ['fill', 'color'],
                ['stroke', 'borderColor'],
                ['lineWidth', 'borderWidth'],
                // Compatitable with 2
                ['stroke', 'barBorderColor'],
                ['lineWidth', 'barBorderWidth'],
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
        getBarItemStyle: require('../../model/mixin/makeStyleMapper')(
            [
                ['fill', 'color'],
                ['stroke', 'borderColor'],
                ['lineWidth', 'borderWidth'],
                // Compatitable with 2
                ['stroke', 'barBorderColor'],
                ['lineWidth', 'barBorderWidth'],
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