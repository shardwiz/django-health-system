<<<<<<< HEAD
define(function () {
  // Korean
  return {
    errorLoading: function () {
      return '결과를 불러올 수 없습니다.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = '너무 깁니다. ' + overChars + ' 글자 지워주세요.';

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = '너무 짧습니다. ' + remainingChars + ' 글자 더 입력해주세요.';

      return message;
    },
    loadingMore: function () {
      return '불러오는 중…';
    },
    maximumSelected: function (args) {
      var message = '최대 ' + args.maximum + '개까지만 선택 가능합니다.';

      return message;
    },
    noResults: function () {
      return '결과가 없습니다.';
    },
    searching: function () {
      return '검색 중…';
    }
  };
});
=======
define(function () {
  // Korean
  return {
    errorLoading: function () {
      return '결과를 불러올 수 없습니다.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = '너무 깁니다. ' + overChars + ' 글자 지워주세요.';

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = '너무 짧습니다. ' + remainingChars + ' 글자 더 입력해주세요.';

      return message;
    },
    loadingMore: function () {
      return '불러오는 중…';
    },
    maximumSelected: function (args) {
      var message = '최대 ' + args.maximum + '개까지만 선택 가능합니다.';

      return message;
    },
    noResults: function () {
      return '결과가 없습니다.';
    },
    searching: function () {
      return '검색 중…';
    }
  };
});
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
