var r, a;
e = n.nmd(e), r = this, a = function(e) {
  "use strict";

  function t(e, t, n, r) {
    var a = {
      s: ["viensas secunds", "'iensas secunds"],
      ss: [e + " secunds", "" + e + " secunds"],
      m: ["'n m\xedut", "'iens m\xedut"],
      mm: [e + " m\xeduts", "" + e + " m\xeduts"],
      h: ["'n \xfeora", "'iensa \xfeora"],
      hh: [e + " \xfeoras", "" + e + " \xfeoras"],
      d: ["'n ziua", "'iensa ziua"],
      dd: [e + " ziuas", "" + e + " ziuas"],
      M: ["'n mes", "'iens mes"],
      MM: [e + " mesen", "" + e + " mesen"],
      y: ["'n ar", "'iens ar"],
      yy: [e + " ars", "" + e + " ars"]
    };
    return r ? a[n][0] : t ? a[n][0] : a[n][1]
  }
  return e.defineLocale("tzl", {
    months: "Januar_Fevraglh_Mar\xe7_Avr\xefu_Mai_G\xfcn_Julia_Guscht_Setemvar_Listop\xe4ts_Noemvar_Zecemvar".split("_"),
    monthsShort: "Jan_Fev_Mar_Avr_Mai_G\xfcn_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
    weekdays: "S\xfaladi_L\xfane\xe7i_Maitzi_M\xe1rcuri_Xh\xfaadi_Vi\xe9ner\xe7i_S\xe1turi".split("_"),
    weekdaysShort: "S\xfal_L\xfan_Mai_M\xe1r_Xh\xfa_Vi\xe9_S\xe1t".split("_"),
    weekdaysMin: "S\xfa_L\xfa_Ma_M\xe1_Xh_Vi_S\xe1".split("_"),
    longDateFormat: {
      LT: "HH.mm",
      LTS: "HH.mm.ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM [dallas] YYYY",
      LLL: "D. MMMM [dallas] YYYY HH.mm",
      LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
    },
    meridiemParse: /d\'o|d\'a/i,
    isPM: function(e) {
      return "d'o" === e.toLowerCase()
    },
    meridiem: function(e, t, n) {
      return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
    },
    calendar: {
      sameDay: "[oxhi \xe0] LT",
      nextDay: "[dem\xe0 \xe0] LT",
      nextWeek: "dddd [\xe0] LT",
      lastDay: "[ieiri \xe0] LT",
      lastWeek: "[s\xfcr el] dddd [lasteu \xe0] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "osprei %s",
      past: "ja%s",
      s: t,
      ss: t,
      m: t,
      mm: t,
      h: t,
      hh: t,
      d: t,
      dd: t,
      M: t,
      MM: t,
      y: t,
      yy: t
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  })
}, "object" == typeof t && void 0 !== e ? a(n("866227")) : "function" == typeof define && define.amd ? define(["../moment"], a) : a(r.moment)