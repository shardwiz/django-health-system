<<<<<<< HEAD
define(function () {
  // Thai
  return {
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'โปรดลบออก ' + overChars + ' ตัวอักษร';

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'โปรดพิมพ์เพิ่มอีก ' + remainingChars + ' ตัวอักษร';

      return message;
    },
    loadingMore: function () {
      return 'กำลังค้นข้อมูลเพิ่ม…';
    },
    maximumSelected: function (args) {
      var message = 'คุณสามารถเลือกได้ไม่เกิน ' + args.maximum + ' รายการ';

      return message;
    },
    noResults: function () {
      return 'ไม่พบข้อมูล';
    },
    searching: function () {
      return 'กำลังค้นข้อมูล…';
    }
  };
});
=======
define(function () {
  // Thai
  return {
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'โปรดลบออก ' + overChars + ' ตัวอักษร';

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'โปรดพิมพ์เพิ่มอีก ' + remainingChars + ' ตัวอักษร';

      return message;
    },
    loadingMore: function () {
      return 'กำลังค้นข้อมูลเพิ่ม…';
    },
    maximumSelected: function (args) {
      var message = 'คุณสามารถเลือกได้ไม่เกิน ' + args.maximum + ' รายการ';

      return message;
    },
    noResults: function () {
      return 'ไม่พบข้อมูล';
    },
    searching: function () {
      return 'กำลังค้นข้อมูล…';
    }
  };
});
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
