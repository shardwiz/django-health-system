<<<<<<< HEAD
define(function () {
  // Greek (el)
  return {
    errorLoading: function () {
      return 'Τα αποτελέσματα δεν μπόρεσαν να φορτώσουν.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Παρακαλώ διαγράψτε ' + overChars + ' χαρακτήρ';

      if (overChars == 1) {
        message += 'α';
      }
      if (overChars != 1) {
        message += 'ες';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Παρακαλώ συμπληρώστε ' + remainingChars +
        ' ή περισσότερους χαρακτήρες';

      return message;
    },
    loadingMore: function () {
      return 'Φόρτωση περισσότερων αποτελεσμάτων…';
    },
    maximumSelected: function (args) {
      var message = 'Μπορείτε να επιλέξετε μόνο ' + args.maximum + ' επιλογ';

      if (args.maximum == 1) {
        message += 'ή';
      }

      if (args.maximum != 1) {
        message += 'ές';
      }

      return message;
    },
    noResults: function () {
      return 'Δεν βρέθηκαν αποτελέσματα';
    },
    searching: function () {
      return 'Αναζήτηση…';
    }
  };
=======
define(function () {
  // Greek (el)
  return {
    errorLoading: function () {
      return 'Τα αποτελέσματα δεν μπόρεσαν να φορτώσουν.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Παρακαλώ διαγράψτε ' + overChars + ' χαρακτήρ';

      if (overChars == 1) {
        message += 'α';
      }
      if (overChars != 1) {
        message += 'ες';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Παρακαλώ συμπληρώστε ' + remainingChars +
        ' ή περισσότερους χαρακτήρες';

      return message;
    },
    loadingMore: function () {
      return 'Φόρτωση περισσότερων αποτελεσμάτων…';
    },
    maximumSelected: function (args) {
      var message = 'Μπορείτε να επιλέξετε μόνο ' + args.maximum + ' επιλογ';

      if (args.maximum == 1) {
        message += 'ή';
      }

      if (args.maximum != 1) {
        message += 'ές';
      }

      return message;
    },
    noResults: function () {
      return 'Δεν βρέθηκαν αποτελέσματα';
    },
    searching: function () {
      return 'Αναζήτηση…';
    }
  };
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
});