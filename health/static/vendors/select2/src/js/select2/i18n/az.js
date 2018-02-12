<<<<<<< HEAD
define(function () {
  // Azerbaijani
  return {
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      return overChars + ' simvol silin';
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      return remainingChars + ' simvol daxil edin';
    },
    loadingMore: function () {
      return 'Daha çox nəticə yüklənir…';
    },
    maximumSelected: function (args) {
      return 'Sadəcə ' + args.maximum + ' element seçə bilərsiniz';
    },
    noResults: function () {
      return 'Nəticə tapılmadı';
    },
    searching: function () {
      return 'Axtarılır…';
    }
  };
});
=======
define(function () {
  // Azerbaijani
  return {
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      return overChars + ' simvol silin';
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      return remainingChars + ' simvol daxil edin';
    },
    loadingMore: function () {
      return 'Daha çox nəticə yüklənir…';
    },
    maximumSelected: function (args) {
      return 'Sadəcə ' + args.maximum + ' element seçə bilərsiniz';
    },
    noResults: function () {
      return 'Nəticə tapılmadı';
    },
    searching: function () {
      return 'Axtarılır…';
    }
  };
});
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
