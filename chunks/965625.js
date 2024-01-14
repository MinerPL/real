var r, a;
e = n.nmd(e), r = this, a = function(e) {
  return e.defineLocale("pt-br", {
    months: "janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
    monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
    weekdays: "Domingo_Segunda-feira_Ter\xe7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xe1bado".split("_"),
    weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S\xe1b".split("_"),
    weekdaysMin: "Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"),
    weekdaysParseExact: !0,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D [de] MMMM [de] YYYY",
      LLL: "D [de] MMMM [de] YYYY [\xe0s] HH:mm",
      LLLL: "dddd, D [de] MMMM [de] YYYY [\xe0s] HH:mm"
    },
    calendar: {
      sameDay: "[Hoje \xe0s] LT",
      nextDay: "[Amanh\xe3 \xe0s] LT",
      nextWeek: "dddd [\xe0s] LT",
      lastDay: "[Ontem \xe0s] LT",
      lastWeek: function() {
        return 0 === this.day() || 6 === this.day() ? "[\xdaltimo] dddd [\xe0s] LT" : "[\xdaltima] dddd [\xe0s] LT"
      },
      sameElse: "L"
    },
    relativeTime: {
      future: "em %s",
      past: "h\xe1 %s",
      s: "poucos segundos",
      ss: "%d segundos",
      m: "um minuto",
      mm: "%d minutos",
      h: "uma hora",
      hh: "%d horas",
      d: "um dia",
      dd: "%d dias",
      M: "um m\xeas",
      MM: "%d meses",
      y: "um ano",
      yy: "%d anos"
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: "%d\xba"
  })
}, "object" == typeof t && void 0 !== e ? a(n("866227")) : "function" == typeof define && define.amd ? define(["../moment"], a) : a(r.moment)