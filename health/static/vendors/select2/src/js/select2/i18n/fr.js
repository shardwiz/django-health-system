<<<<<<< HEAD
define(function () {
  // French
  return {
    errorLoading: function () {
      return 'Les résultats ne peuvent pas être chargés.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Supprimez ' + overChars + ' caractère';

      if (overChars !== 1) {
        message += 's';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Saisissez ' + remainingChars + ' caractère';

      if (remainingChars !== 1) {
        message += 's';
      }

      return message;
    },
    loadingMore: function () {
      return 'Chargement de résultats supplémentaires…';
    },
    maximumSelected: function (args) {
      var message = 'Vous pouvez seulement sélectionner ' +
        args.maximum + ' élément';

      if (args.maximum !== 1) {
        message += 's';
      }

      return message;
    },
    noResults: function () {
      return 'Aucun résultat trouvé';
    },
    searching: function () {
      return 'Recherche en cours…';
    }
  };
});
=======
define(function () {
  // French
  return {
    errorLoading: function () {
      return 'Les résultats ne peuvent pas être chargés.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Supprimez ' + overChars + ' caractère';

      if (overChars !== 1) {
        message += 's';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Saisissez ' + remainingChars + ' caractère';

      if (remainingChars !== 1) {
        message += 's';
      }

      return message;
    },
    loadingMore: function () {
      return 'Chargement de résultats supplémentaires…';
    },
    maximumSelected: function (args) {
      var message = 'Vous pouvez seulement sélectionner ' +
        args.maximum + ' élément';

      if (args.maximum !== 1) {
        message += 's';
      }

      return message;
    },
    noResults: function () {
      return 'Aucun résultat trouvé';
    },
    searching: function () {
      return 'Recherche en cours…';
    }
  };
});
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
