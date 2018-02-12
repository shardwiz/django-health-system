<<<<<<< HEAD
import { isValid as _isValid } from '../create/valid';
import extend from '../utils/extend';
import getParsingFlags from '../create/parsing-flags';

export function isValid () {
    return _isValid(this);
}

export function parsingFlags () {
    return extend({}, getParsingFlags(this));
}

export function invalidAt () {
    return getParsingFlags(this).overflow;
}
=======
import { isValid as _isValid } from '../create/valid';
import extend from '../utils/extend';
import getParsingFlags from '../create/parsing-flags';

export function isValid () {
    return _isValid(this);
}

export function parsingFlags () {
    return extend({}, getParsingFlags(this));
}

export function invalidAt () {
    return getParsingFlags(this).overflow;
}
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
