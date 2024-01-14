var r, a;
e = n.nmd(e), n("781738"), r = this, a = function(e) {
  "use strict";
  var t = {
      1: "១",
      2: "២",
      3: "៣",
      4: "៤",
      5: "៥",
      6: "៦",
      7: "៧",
      8: "៨",
      9: "៩",
      0: "០"
    },
    n = {
      "១": "1",
      "២": "2",
      "៣": "3",
      "៤": "4",
      "៥": "5",
      "៦": "6",
      "៧": "7",
      "៨": "8",
      "៩": "9",
      "០": "0"
    };
  return e.defineLocale("km", {
    months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
    monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
    weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
    weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
    weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    meridiemParse: /ព្រឹក|ល្ងាច/,
    isPM: function(e) {
      return "ល្ងាច" === e
    },
    meridiem: function(e, t, n) {
      return e < 12 ? "ព្រឹក" : "ល្ងាច"
    },
    calendar: {
      sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
      nextDay: "[ស្អែក ម៉ោង] LT",
      nextWeek: "dddd [ម៉ោង] LT",
      lastDay: "[ម្សិលមិញ ម៉ោង] LT",
      lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%sទៀត",
      past: "%sមុន",
      s: "ប៉ុន្មានវិនាទី",
      ss: "%d វិនាទី",
      m: "មួយនាទី",
      mm: "%d នាទី",
      h: "មួយម៉ោង",
      hh: "%d ម៉ោង",
      d: "មួយថ្ងៃ",
      dd: "%d ថ្ងៃ",
      M: "មួយខែ",
      MM: "%d ខែ",
      y: "មួយឆ្នាំ",
      yy: "%d ឆ្នាំ"
    },
    dayOfMonthOrdinalParse: /ទី\d{1,2}/,
    ordinal: "ទី%d",
    preparse: function(e) {
      return e.replace(/[១២៣៤៥៦៧៨៩០]/g, function(e) {
        return n[e]
      })
    },
    postformat: function(e) {
      return e.replace(/\d/g, function(e) {
        return t[e]
      })
    },
    week: {
      dow: 1,
      doy: 4
    }
  })
}, "object" == typeof t && void 0 !== e ? a(n("866227")) : "function" == typeof define && define.amd ? define(["../moment"], a) : a(r.moment)