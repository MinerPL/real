var r, a;
e = n.nmd(e), r = this, a = function(e) {
  return e.defineLocale("hy-am", {
    months: {
      format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
      standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
    },
    monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
    weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
    weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
    weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D MMMM YYYY թ.",
      LLL: "D MMMM YYYY թ., HH:mm",
      LLLL: "dddd, D MMMM YYYY թ., HH:mm"
    },
    calendar: {
      sameDay: "[այսօր] LT",
      nextDay: "[վաղը] LT",
      lastDay: "[երեկ] LT",
      nextWeek: function() {
        return "dddd [օրը ժամը] LT"
      },
      lastWeek: function() {
        return "[անցած] dddd [օրը ժամը] LT"
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "%s հետո",
      past: "%s առաջ",
      s: "մի քանի վայրկյան",
      ss: "%d վայրկյան",
      m: "րոպե",
      mm: "%d րոպե",
      h: "ժամ",
      hh: "%d ժամ",
      d: "օր",
      dd: "%d օր",
      M: "ամիս",
      MM: "%d ամիս",
      y: "տարի",
      yy: "%d տարի"
    },
    meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
    isPM: function(e) {
      return /^(ցերեկվա|երեկոյան)$/.test(e)
    },
    meridiem: function(e) {
      if (e < 4) return "գիշերվա";
      if (e < 12) return "առավոտվա";
      if (e < 17) return "ցերեկվա";
      else return "երեկոյան"
    },
    dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
    ordinal: function(e, t) {
      switch (t) {
        case "DDD":
        case "w":
        case "W":
        case "DDDo":
          if (1 === e) return e + "-ին";
          return e + "-րդ";
        default:
          return e
      }
    },
    week: {
      dow: 1,
      doy: 7
    }
  })
}, "object" == typeof t && void 0 !== e ? a(n("866227")) : "function" == typeof define && define.amd ? define(["../moment"], a) : a(r.moment)