var r, a;
e = n.nmd(e), r = this, a = function(e) {
  return e.defineLocale("ko", {
    months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
    monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
    weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
    weekdaysShort: "일_월_화_수_목_금_토".split("_"),
    weekdaysMin: "일_월_화_수_목_금_토".split("_"),
    longDateFormat: {
      LT: "A h:mm",
      LTS: "A h:mm:ss",
      L: "YYYY.MM.DD.",
      LL: "YYYY년 MMMM D일",
      LLL: "YYYY년 MMMM D일 A h:mm",
      LLLL: "YYYY년 MMMM D일 dddd A h:mm",
      l: "YYYY.MM.DD.",
      ll: "YYYY년 MMMM D일",
      lll: "YYYY년 MMMM D일 A h:mm",
      llll: "YYYY년 MMMM D일 dddd A h:mm"
    },
    calendar: {
      sameDay: "오늘 LT",
      nextDay: "내일 LT",
      nextWeek: "dddd LT",
      lastDay: "어제 LT",
      lastWeek: "지난주 dddd LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "%s 후",
      past: "%s 전",
      s: "몇 초",
      ss: "%d초",
      m: "1분",
      mm: "%d분",
      h: "한 시간",
      hh: "%d시간",
      d: "하루",
      dd: "%d일",
      M: "한 달",
      MM: "%d달",
      y: "일 년",
      yy: "%d년"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
    ordinal: function(e, t) {
      switch (t) {
        case "d":
        case "D":
        case "DDD":
          return e + "일";
        case "M":
          return e + "월";
        case "w":
        case "W":
          return e + "주";
        default:
          return e
      }
    },
    meridiemParse: /오전|오후/,
    isPM: function(e) {
      return "오후" === e
    },
    meridiem: function(e, t, n) {
      return e < 12 ? "오전" : "오후"
    }
  })
}, "object" == typeof t && void 0 !== e ? a(n("866227")) : "function" == typeof define && define.amd ? define(["../moment"], a) : a(r.moment)