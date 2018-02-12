<<<<<<< HEAD
'use strict';

Tinytest.add('Switchery integration', function (test) {

    var checkbox = document.createElement('input');
    checkbox.className = 'js-switch';
    var switchy = new Switchery(checkbox);

    test.instanceOf(switchy, Switchery, 'instantiation OK');
=======
'use strict';

Tinytest.add('Switchery integration', function (test) {

    var checkbox = document.createElement('input');
    checkbox.className = 'js-switch';
    var switchy = new Switchery(checkbox);

    test.instanceOf(switchy, Switchery, 'instantiation OK');
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});