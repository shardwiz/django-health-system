<<<<<<< HEAD
define(function () {
  // Swedish
  return {
    errorLoading: function () {
      return 'Resultat kunde inte laddas.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Vänligen sudda ut ' + overChars + ' tecken';

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Vänligen skriv in ' + remainingChars +
                    ' eller fler tecken';

      return message;
    },
    loadingMore: function () {
      return 'Laddar fler resultat…';
    },
    maximumSelected: function (args) {
      var message = 'Du kan max välja ' + args.maximum + ' element';

      return message;
    },
    noResults: function () {
      return 'Inga träffar';
    },
    searching: function () {
      return 'Söker…';
    }
  };
});
=======
define(function () {
  // Swedish
  return {
    errorLoading: function () {
      return 'Resultat kunde inte laddas.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Vänligen sudda ut ' + overChars + ' tecken';

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Vänligen skriv in ' + remainingChars +
                    ' eller fler tecken';

      return message;
    },
    loadingMore: function () {
      return 'Laddar fler resultat…';
    },
    maximumSelected: function (args) {
      var message = 'Du kan max välja ' + args.maximum + ' element';

      return message;
    },
    noResults: function () {
      return 'Inga träffar';
    },
    searching: function () {
      return 'Söker…';
    }
  };
});
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
