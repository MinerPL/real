var r, a;
e = n.nmd(e), r = this, a = function(e) {
  "use strict";
  var t = "leden_\xfanor_březen_duben_květen_červen_červenec_srpen_z\xe1ř\xed_ř\xedjen_listopad_prosinec".split("_"),
    n = "led_\xfano_bře_dub_kvě_čvn_čvc_srp_z\xe1ř_ř\xedj_lis_pro".split("_");

  function r(e) {
    return e > 1 && e < 5 && 1 != ~~(e / 10)
  }

  function a(e, t, n, a) {
    var o = e + " ";
    switch (n) {
      case "s":
        return t || a ? "p\xe1r sekund" : "p\xe1r sekundami";
      case "ss":
        if (t || a) return o + (r(e) ? "sekundy" : "sekund");
        return o + "sekundami";
      case "m":
        return t ? "minuta" : a ? "minutu" : "minutou";
      case "mm":
        if (t || a) return o + (r(e) ? "minuty" : "minut");
        return o + "minutami";
      case "h":
        return t ? "hodina" : a ? "hodinu" : "hodinou";
      case "hh":
        if (t || a) return o + (r(e) ? "hodiny" : "hodin");
        return o + "hodinami";
      case "d":
        return t || a ? "den" : "dnem";
      case "dd":
        if (t || a) return o + (r(e) ? "dny" : "dn\xed");
        return o + "dny";
      case "M":
        return t || a ? "měs\xedc" : "měs\xedcem";
      case "MM":
        if (t || a) return o + (r(e) ? "měs\xedce" : "měs\xedců");
        return o + "měs\xedci";
      case "y":
        return t || a ? "rok" : "rokem";
      case "yy":
        if (t || a) return o + (r(e) ? "roky" : "let");
        return o + "lety"
    }
  }
  return e.defineLocale("cs", {
    months: t,
    monthsShort: n,
    monthsParse: function(e, t) {
      var n, r = [];
      for (n = 0; n < 12; n++) r[n] = RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
      return r
    }(t, n),
    shortMonthsParse: function(e) {
      var t, n = [];
      for (t = 0; t < 12; t++) n[t] = RegExp("^" + e[t] + "$", "i");
      return n
    }(n),
    longMonthsParse: function(e) {
      var t, n = [];
      for (t = 0; t < 12; t++) n[t] = RegExp("^" + e[t] + "$", "i");
      return n
    }(t),
    weekdays: "neděle_ponděl\xed_\xfater\xfd_středa_čtvrtek_p\xe1tek_sobota".split("_"),
    weekdaysShort: "ne_po_\xfat_st_čt_p\xe1_so".split("_"),
    weekdaysMin: "ne_po_\xfat_st_čt_p\xe1_so".split("_"),
    longDateFormat: {
      LT: "H:mm",
      LTS: "H:mm:ss",
      L: "DD.MM.YYYY",
      LL: "D. MMMM YYYY",
      LLL: "D. MMMM YYYY H:mm",
      LLLL: "dddd D. MMMM YYYY H:mm",
      l: "D. M. YYYY"
    },
    calendar: {
      sameDay: "[dnes v] LT",
      nextDay: "[z\xedtra v] LT",
      nextWeek: function() {
        switch (this.day()) {
          case 0:
            return "[v neděli v] LT";
          case 1:
          case 2:
            return "[v] dddd [v] LT";
          case 3:
            return "[ve středu v] LT";
          case 4:
            return "[ve čtvrtek v] LT";
          case 5:
            return "[v p\xe1tek v] LT";
          case 6:
            return "[v sobotu v] LT"
        }
      },
      lastDay: "[včera v] LT",
      lastWeek: function() {
        switch (this.day()) {
          case 0:
            return "[minulou neděli v] LT";
          case 1:
          case 2:
            return "[minul\xe9] dddd [v] LT";
          case 3:
            return "[minulou středu v] LT";
          case 4:
          case 5:
            return "[minul\xfd] dddd [v] LT";
          case 6:
            return "[minulou sobotu v] LT"
        }
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "za %s",
      past: "před %s",
      s: a,
      ss: a,
      m: a,
      mm: a,
      h: a,
      hh: a,
      d: a,
      dd: a,
      M: a,
      MM: a,
      y: a,
      yy: a
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  })
}, "object" == typeof t && void 0 !== e ? a(n("866227")) : "function" == typeof define && define.amd ? define(["../moment"], a) : a(r.moment)