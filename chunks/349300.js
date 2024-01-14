var r, a;
e = n.nmd(e), r = this, a = function(e) {
  "use strict";
  var t = {
    ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
    m: "minūtes_minūtēm_minūte_minūtes".split("_"),
    mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
    h: "stundas_stundām_stunda_stundas".split("_"),
    hh: "stundas_stundām_stunda_stundas".split("_"),
    d: "dienas_dienām_diena_dienas".split("_"),
    dd: "dienas_dienām_diena_dienas".split("_"),
    M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
    MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
    y: "gada_gadiem_gads_gadi".split("_"),
    yy: "gada_gadiem_gads_gadi".split("_")
  };

  function n(e, t, n) {
    return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
  }

  function r(e, r, a) {
    return e + " " + n(t[a], e, r)
  }

  function a(e, r, a) {
    return n(t[a], e, r)
  }
  return e.defineLocale("lv", {
    months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
    monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
    weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
    weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
    weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD.MM.YYYY.",
      LL: "YYYY. [gada] D. MMMM",
      LLL: "YYYY. [gada] D. MMMM, HH:mm",
      LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
    },
    calendar: {
      sameDay: "[Šodien pulksten] LT",
      nextDay: "[Rīt pulksten] LT",
      nextWeek: "dddd [pulksten] LT",
      lastDay: "[Vakar pulksten] LT",
      lastWeek: "[Pagājušā] dddd [pulksten] LT",
      sameElse: "L"
    },
    relativeTime: {
      future: "pēc %s",
      past: "pirms %s",
      s: function(e, t) {
        return t ? "dažas sekundes" : "dažām sekundēm"
      },
      ss: r,
      m: a,
      mm: r,
      h: a,
      hh: r,
      d: a,
      dd: r,
      M: a,
      MM: r,
      y: a,
      yy: r
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: "%d.",
    week: {
      dow: 1,
      doy: 4
    }
  })
}, "object" == typeof t && void 0 !== e ? a(n("866227")) : "function" == typeof define && define.amd ? define(["../moment"], a) : a(r.moment)