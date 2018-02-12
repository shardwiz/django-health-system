<<<<<<< HEAD
import { addFormatToken } from '../format/format';
import { addUnitAlias } from './aliases';
import { addRegexToken, match1 } from '../parse/regex';
import { addParseToken } from '../parse/token';
import { MONTH } from './constants';
import toInt from '../utils/to-int';

// FORMATTING

addFormatToken('Q', 0, 'Qo', 'quarter');

// ALIASES

addUnitAlias('quarter', 'Q');

// PARSING

addRegexToken('Q', match1);
addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
});

// MOMENTS

export function getSetQuarter (input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}
=======
import { addFormatToken } from '../format/format';
import { addUnitAlias } from './aliases';
import { addRegexToken, match1 } from '../parse/regex';
import { addParseToken } from '../parse/token';
import { MONTH } from './constants';
import toInt from '../utils/to-int';

// FORMATTING

addFormatToken('Q', 0, 'Qo', 'quarter');

// ALIASES

addUnitAlias('quarter', 'Q');

// PARSING

addRegexToken('Q', match1);
addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
});

// MOMENTS

export function getSetQuarter (input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
