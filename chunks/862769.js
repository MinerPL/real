var r, a;
e = n.nmd(e), r = this, a = function(e) {
  return e.defineLocale("zh-hk", {
    months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
    weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
    weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
    weekdaysMin: "日_一_二_三_四_五_六".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "YYYY/MM/DD",
      LL: "YYYY年M月D日",
      LLL: "YYYY年M月D日 HH:mm",
      LLLL: "YYYY年M月D日dddd HH:mm",
      l: "YYYY/M/D",
      ll: "YYYY年M月D日",
      lll: "YYYY年M月D日 HH:mm",
      llll: "YYYY年M月D日dddd HH:mm"
    },
    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour: function(e, t) {
      if (12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t) return e;
      if ("中午" === t) return e >= 11 ? e : e + 12;
      if ("下午" === t || "晚上" === t) return e + 12
    },
    meridiem: function(e, t, n) {
      var r = 100 * e + t;
      if (r < 600) return "凌晨";
      if (r < 900) return "早上";
      if (r < 1130) return "上午";
      else if (r < 1230) return "中午";
      else if (r < 1800) return "下午";
      else return "晚上"
    },
    calendar: {
      sameDay: "[今天]LT",
      nextDay: "[明天]LT",
      nextWeek: "[下]ddddLT",
      lastDay: "[昨天]LT",
      lastWeek: "[上]ddddLT",
      sameElse: "L"
    },
    dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
    ordinal: function(e, t) {
      switch (t) {
        case "d":
        case "D":
        case "DDD":
          return e + "日";
        case "M":
          return e + "月";
        case "w":
        case "W":
          return e + "週";
        default:
          return e
      }
    },
    relativeTime: {
      future: "%s內",
      past: "%s前",
      s: "幾秒",
      ss: "%d 秒",
      m: "1 分鐘",
      mm: "%d 分鐘",
      h: "1 小時",
      hh: "%d 小時",
      d: "1 天",
      dd: "%d 天",
      M: "1 個月",
      MM: "%d 個月",
      y: "1 年",
      yy: "%d 年"
    }
  })
}, "object" == typeof t && void 0 !== e ? a(n("866227")) : "function" == typeof define && define.amd ? define(["../moment"], a) : a(r.moment)