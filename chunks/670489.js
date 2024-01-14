var r, a;
e = n.nmd(e), r = this, a = function(e) {
  return e.defineLocale("mt", {
    months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),
    monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
    weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),
    weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
    weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY HH:mm",
      LLLL: "dddd, D MMMM YYYY HH:mm"
    },
    calendar: {
      sameDay: "[Illum fil-]LT",
      nextDay: "[Għada fil-]LT",
      nextWeek: "dddd [fil-]LT",
      lastDay: "[Il-bieraħ fil-]LT",
      lastWeek: "dddd [li għadda] [fil-]LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "f’ %s",
      past: "%s ilu",
      s: "ftit sekondi",
      ss: "%d sekondi",
      m: "minuta",
      mm: "%d minuti",
      h: "siegħa",
      hh: "%d siegħat",
      d: "ġurnata",
      dd: "%d ġranet",
      M: "xahar",
      MM: "%d xhur",
      y: "sena",
      yy: "%d sni"
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: "%d\xba",
    week: {
      dow: 1,
      doy: 4
    }
  })
}, "object" == typeof t && void 0 !== e ? a(n("866227")) : "function" == typeof define && define.amd ? define(["../moment"], a) : a(r.moment)