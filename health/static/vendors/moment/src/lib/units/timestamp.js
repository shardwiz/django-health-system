<<<<<<< HEAD
import { addFormatToken } from '../format/format';
import { addRegexToken, matchTimestamp, matchSigned } from '../parse/regex';
import { addParseToken } from '../parse/token';
import toInt from '../utils/to-int';

// FORMATTING

addFormatToken('X', 0, 0, 'unix');
addFormatToken('x', 0, 0, 'valueOf');

// PARSING

addRegexToken('x', matchSigned);
addRegexToken('X', matchTimestamp);
addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
});
addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
});
=======
import { addFormatToken } from '../format/format';
import { addRegexToken, matchTimestamp, matchSigned } from '../parse/regex';
import { addParseToken } from '../parse/token';
import toInt from '../utils/to-int';

// FORMATTING

addFormatToken('X', 0, 0, 'unix');
addFormatToken('x', 0, 0, 'valueOf');

// PARSING

addRegexToken('x', matchSigned);
addRegexToken('X', matchTimestamp);
addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
});
addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
});
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
