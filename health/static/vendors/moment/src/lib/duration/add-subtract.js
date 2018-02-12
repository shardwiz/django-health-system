<<<<<<< HEAD
import { createDuration } from './create';

function addSubtract (duration, input, value, direction) {
    var other = createDuration(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days         += direction * other._days;
    duration._months       += direction * other._months;

    return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
export function add (input, value) {
    return addSubtract(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
export function subtract (input, value) {
    return addSubtract(this, input, value, -1);
}
=======
import { createDuration } from './create';

function addSubtract (duration, input, value, direction) {
    var other = createDuration(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days         += direction * other._days;
    duration._months       += direction * other._months;

    return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
export function add (input, value) {
    return addSubtract(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
export function subtract (input, value) {
    return addSubtract(this, input, value, -1);
}
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
