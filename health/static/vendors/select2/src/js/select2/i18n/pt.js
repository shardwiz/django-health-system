<<<<<<< HEAD
define(function () {
  // European Portuguese
  return {
    errorLoading: function () {
      return 'Os resultados não puderam ser carregados.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Por favor apague ' + overChars + ' ';

      message += overChars != 1 ? 'caracteres' : 'carácter';

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Introduza ' + remainingChars + ' ou mais caracteres';

      return message;
    },
    loadingMore: function () {
      return 'A carregar mais resultados…';
    },
    maximumSelected: function (args) {
      var message = 'Apenas pode seleccionar ' + args.maximum + ' ';

      message += args.maximum != 1 ? 'itens' : 'item';

      return message;
    },
    noResults: function () {
      return 'Sem resultados';
    },
    searching: function () {
      return 'A procurar…';
    }
  };
});
=======
define(function () {
  // European Portuguese
  return {
    errorLoading: function () {
      return 'Os resultados não puderam ser carregados.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Por favor apague ' + overChars + ' ';

      message += overChars != 1 ? 'caracteres' : 'carácter';

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Introduza ' + remainingChars + ' ou mais caracteres';

      return message;
    },
    loadingMore: function () {
      return 'A carregar mais resultados…';
    },
    maximumSelected: function (args) {
      var message = 'Apenas pode seleccionar ' + args.maximum + ' ';

      message += args.maximum != 1 ? 'itens' : 'item';

      return message;
    },
    noResults: function () {
      return 'Sem resultados';
    },
    searching: function () {
      return 'A procurar…';
    }
  };
});
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
