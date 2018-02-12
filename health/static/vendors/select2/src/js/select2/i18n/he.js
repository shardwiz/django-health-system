<<<<<<< HEAD
define(function () {
  // Hebrew
  return {
    errorLoading: function () {
      return 'שגיאה בטעינת התוצאות';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'נא למחוק ';

      if (overChars === 1) {
        message += 'תו אחד';
      } else {
        message += overChars + ' תווים';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'נא להכניס ';

      if (remainingChars === 1) {
        message += 'תו אחד';
      } else {
        message += remainingChars + ' תווים';
      }

      message += ' או יותר';

      return message;
    },
    loadingMore: function () {
      return 'טוען תוצאות נוספות…';
    },
    maximumSelected: function (args) {
      var message = 'באפשרותך לבחור עד ';

      if (args.maximum === 1) {
        message += 'פריט אחד';
      } else {
        message += args.maximum + ' פריטים';
      }

      return message;
    },
    noResults: function () {
      return 'לא נמצאו תוצאות';
    },
    searching: function () {
      return 'מחפש…';
    }
  };
});
=======
define(function () {
  // Hebrew
  return {
    errorLoading: function () {
      return 'שגיאה בטעינת התוצאות';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'נא למחוק ';

      if (overChars === 1) {
        message += 'תו אחד';
      } else {
        message += overChars + ' תווים';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'נא להכניס ';

      if (remainingChars === 1) {
        message += 'תו אחד';
      } else {
        message += remainingChars + ' תווים';
      }

      message += ' או יותר';

      return message;
    },
    loadingMore: function () {
      return 'טוען תוצאות נוספות…';
    },
    maximumSelected: function (args) {
      var message = 'באפשרותך לבחור עד ';

      if (args.maximum === 1) {
        message += 'פריט אחד';
      } else {
        message += args.maximum + ' פריטים';
      }

      return message;
    },
    noResults: function () {
      return 'לא נמצאו תוצאות';
    },
    searching: function () {
      return 'מחפש…';
    }
  };
});
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
