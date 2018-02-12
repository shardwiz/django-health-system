<<<<<<< HEAD
define(function () {
  // German
  return {
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      return 'Bitte ' + overChars + ' Zeichen weniger eingeben';
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      return 'Bitte ' + remainingChars + ' Zeichen mehr eingeben';
    },
    loadingMore: function () {
      return 'Lade mehr Ergebnisse…';
    },
    maximumSelected: function (args) {
      var message = 'Sie können nur ' + args.maximum + ' Eintr';

      if (args.maximum === 1) {
        message += 'ag';
      } else {
        message += 'äge';
      }

      message += ' auswählen';

      return message;
    },
    noResults: function () {
      return 'Keine Übereinstimmungen gefunden';
    },
    searching: function () {
      return 'Suche…';
    }
  };
});
=======
define(function () {
  // German
  return {
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      return 'Bitte ' + overChars + ' Zeichen weniger eingeben';
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      return 'Bitte ' + remainingChars + ' Zeichen mehr eingeben';
    },
    loadingMore: function () {
      return 'Lade mehr Ergebnisse…';
    },
    maximumSelected: function (args) {
      var message = 'Sie können nur ' + args.maximum + ' Eintr';

      if (args.maximum === 1) {
        message += 'ag';
      } else {
        message += 'äge';
      }

      message += ' auswählen';

      return message;
    },
    noResults: function () {
      return 'Keine Übereinstimmungen gefunden';
    },
    searching: function () {
      return 'Suche…';
    }
  };
});
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
