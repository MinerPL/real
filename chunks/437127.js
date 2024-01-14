var r, a;
e = n.nmd(e), n("781738"), r = this, a = function(e) {
  "use strict";
  var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
    n = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
  return e.defineLocale("sd", {
    months: t,
    monthsShort: t,
    weekdays: n,
    weekdaysShort: n,
    weekdaysMin: n,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd، D MMMM YYYY HH:mm"
    },
    meridiemParse: /صبح|شام/,
    isPM: function(e) {
      return "شام" === e
    },
    meridiem: function(e, t, n) {
      return e < 12 ? "صبح" : "شام"
    },
    calendar: {
      sameDay: "[اڄ] LT",
      nextDay: "[سڀاڻي] LT",
      nextWeek: "dddd [اڳين هفتي تي] LT",
      lastDay: "[ڪالهه] LT",
      lastWeek: "[گزريل هفتي] dddd [تي] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s پوء",
      past: "%s اڳ",
      s: "چند سيڪنڊ",
      ss: "%d سيڪنڊ",
      m: "هڪ منٽ",
      mm: "%d منٽ",
      h: "هڪ ڪلاڪ",
      hh: "%d ڪلاڪ",
      d: "هڪ ڏينهن",
      dd: "%d ڏينهن",
      M: "هڪ مهينو",
      MM: "%d مهينا",
      y: "هڪ سال",
      yy: "%d سال"
    },
    preparse: function(e) {
      return e.replace(/،/g, ",")
    },
    postformat: function(e) {
      return e.replace(/,/g, "،")
    },
    week: {
      dow: 1,
      doy: 4
    }
  })
}, "object" == typeof t && void 0 !== e ? a(n("866227")) : "function" == typeof define && define.amd ? define(["../moment"], a) : a(r.moment)