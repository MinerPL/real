var r, a;
e = n.nmd(e), r = this, a = function(e) {
  "use strict";

  function t(e, t, n, r) {
    var a = e + " ";
    switch (n) {
      case "s":
        return t || r ? "nekaj sekund" : "nekaj sekundami";
      case "ss":
        return 1 === e ? a += t ? "sekundo" : "sekundi" : 2 === e ? a += t || r ? "sekundi" : "sekundah" : e < 5 ? a += t || r ? "sekunde" : "sekundah" : a += (t, "sekund"), a;
      case "m":
        return t ? "ena minuta" : "eno minuto";
      case "mm":
        return 1 === e ? a += t ? "minuta" : "minuto" : 2 === e ? a += t || r ? "minuti" : "minutama" : e < 5 ? a += t || r ? "minute" : "minutami" : a += t || r ? "minut" : "minutami", a;
      case "h":
        return t ? "ena ura" : "eno uro";
      case "hh":
        return 1 === e ? a += t ? "ura" : "uro" : 2 === e ? a += t || r ? "uri" : "urama" : e < 5 ? a += t || r ? "ure" : "urami" : a += t || r ? "ur" : "urami", a;
      case "d":
        return t || r ? "en dan" : "enim dnem";
      case "dd":
        return 1 === e ? a += t || r ? "dan" : "dnem" : 2 === e ? a += t || r ? "dni" : "dnevoma" : a += t || r ? "dni" : "dnevi", a;
      case "M":
        return t || r ? "en mesec" : "enim mesecem";
      case "MM":
        return 1 === e ? a += t || r ? "mesec" : "mesecem" : 2 === e ? a += t || r ? "meseca" : "mesecema" : e < 5 ? a += t || r ? "mesece" : "meseci" : a += t || r ? "mesecev" : "meseci", a;
      case "y":
        return t || r ? "eno leto" : "enim letom";
      case "yy":
        return 1 === e ? a += t || r ? "leto" : "letom" : 2 === e ? a += t || r ? "leti" : "letoma" : e < 5 ? a += t || r ? "leta" : "leti" : a += t || r ? "let" : "leti", a
    }
  }
  return e.defineLocale("sl", {
    months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
    monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
    monthsParseExact: !0,
    weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
    weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
    weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY H:mm",
      LLLL: "dddd, D. MMMM YYYY H:mm"
    },
    calendar: {
      sameDay: "[danes ob] LT",
      nextDay: "[jutri ob] LT",
      nextWeek: function() {
        switch (this.day()) {
          case 0:
            return "[v] [nedeljo] [ob] LT";
          case 3:
            return "[v] [sredo] [ob] LT";
          case 6:
            return "[v] [soboto] [ob] LT";
          case 1:
          case 2:
          case 4:
          case 5:
            return "[v] dddd [ob] LT"
        }
      },
      lastDay: "[včeraj ob] LT",
      lastWeek: function() {
        switch (this.day()) {
          case 0:
            return "[prejšnjo] [nedeljo] [ob] LT";
          case 3:
            return "[prejšnjo] [sredo] [ob] LT";
          case 6:
            return "[prejšnjo] [soboto] [ob] LT";
          case 1:
          case 2:
          case 4:
          case 5:
            return "[prejšnji] dddd [ob] LT"
        }
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "čez %s",
      past: "pred %s",
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
      doy: 7
    }
  })
}, "object" == typeof t && void 0 !== e ? a(n("866227")) : "function" == typeof define && define.amd ? define(["../moment"], a) : a(r.moment)