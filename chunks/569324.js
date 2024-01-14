var r, a;
e = n.nmd(e), n("781738"), r = this, a = function(e) {
  return e.defineLocale("el", {
    monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
    monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
    months: function(e, t) {
      return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
    },
    monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
    weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
    weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
    weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
    meridiem: function(e, t, n) {
      return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
    },
    isPM: function(e) {
      return "μ" === (e + "").toLowerCase()[0]
    },
    meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
    longDateFormat: {
      LT: "h:mm A",
      LTS: "h:mm:ss A",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY h:mm A",
      LLLL: "dddd, D MMMM YYYY h:mm A"
    },
    calendarEl: {
      sameDay: "[Σήμερα {}] LT",
      nextDay: "[Αύριο {}] LT",
      nextWeek: "dddd [{}] LT",
      lastDay: "[Χθες {}] LT",
      lastWeek: function() {
        if (6 === this.day()) return "[το προηγούμενο] dddd [{}] LT";
        return "[την προηγούμενη] dddd [{}] LT"
      },
      sameElse: "L"
    },
    calendar: function(e, t) {
      var n, r = this._calendarEl[e],
        a = t && t.hours();
      if ((n = r) instanceof Function || "[object Function]" === Object.prototype.toString.call(n)) r = r.apply(t);
      return r.replace("{}", a % 12 == 1 ? "στη" : "στις")
    },
    relativeTime: {
      future: "σε %s",
      past: "%s πριν",
      s: "λίγα δευτερόλεπτα",
      ss: "%d δευτερόλεπτα",
      m: "ένα λεπτό",
      mm: "%d λεπτά",
      h: "μία ώρα",
      hh: "%d ώρες",
      d: "μία μέρα",
      dd: "%d μέρες",
      M: "ένας μήνας",
      MM: "%d μήνες",
      y: "ένας χρόνος",
      yy: "%d χρόνια"
    },
    dayOfMonthOrdinalParse: /\d{1,2}η/,
    ordinal: "%dη",
    week: {
      dow: 1,
      doy: 4
    }
  })
}, "object" == typeof t && void 0 !== e ? a(n("866227")) : "function" == typeof define && define.amd ? define(["../moment"], a) : a(r.moment)