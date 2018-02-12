<<<<<<< HEAD
define(function () {
  // Galician
  return {
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Elimine ';

      if (overChars === 1) {
        message += 'un carácter';
      } else {
        message += overChars + ' caracteres';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Engada ';

      if (remainingChars === 1) {
        message += 'un carácter';
      } else {
        message += remainingChars + ' caracteres';
      }

      return message;
    },
    loadingMore: function () {
      return 'Cargando máis resultados…';
    },
    maximumSelected: function (args) {
      var message = 'Só pode ';

      if (args.maximum === 1) {
        message += 'un elemento';
      } else {
        message += args.maximum + ' elementos';
      }

      return message;
    },
    noResults: function () {
      return 'Non se atoparon resultados';
    },
    searching: function () {
      return 'Buscando…';
    }
  };
});
=======
define(function () {
  // Galician
  return {
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Elimine ';

      if (overChars === 1) {
        message += 'un carácter';
      } else {
        message += overChars + ' caracteres';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Engada ';

      if (remainingChars === 1) {
        message += 'un carácter';
      } else {
        message += remainingChars + ' caracteres';
      }

      return message;
    },
    loadingMore: function () {
      return 'Cargando máis resultados…';
    },
    maximumSelected: function (args) {
      var message = 'Só pode ';

      if (args.maximum === 1) {
        message += 'un elemento';
      } else {
        message += args.maximum + ' elementos';
      }

      return message;
    },
    noResults: function () {
      return 'Non se atoparon resultados';
    },
    searching: function () {
      return 'Buscando…';
    }
  };
});
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
