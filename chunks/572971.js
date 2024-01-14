"use strict";
t.r(a), t.d(a, {
  default: function() {
    return i
  }
}), t("781738");
var n = {
    lessThanXSeconds: {
      one: "menos de um segundo",
      other: "menos de {{count}} segundos"
    },
    xSeconds: {
      one: "1 segundo",
      other: "{{count}} segundos"
    },
    halfAMinute: "meio minuto",
    lessThanXMinutes: {
      one: "menos de um minuto",
      other: "menos de {{count}} minutos"
    },
    xMinutes: {
      one: "1 minuto",
      other: "{{count}} minutos"
    },
    aboutXHours: {
      one: "cerca de 1 hora",
      other: "cerca de {{count}} horas"
    },
    xHours: {
      one: "1 hora",
      other: "{{count}} horas"
    },
    xDays: {
      one: "1 dia",
      other: "{{count}} dias"
    },
    aboutXWeeks: {
      one: "cerca de 1 semana",
      other: "cerca de {{count}} semanas"
    },
    xWeeks: {
      one: "1 semana",
      other: "{{count}} semanas"
    },
    aboutXMonths: {
      one: "cerca de 1 m\xeas",
      other: "cerca de {{count}} meses"
    },
    xMonths: {
      one: "1 m\xeas",
      other: "{{count}} meses"
    },
    aboutXYears: {
      one: "cerca de 1 ano",
      other: "cerca de {{count}} anos"
    },
    xYears: {
      one: "1 ano",
      other: "{{count}} anos"
    },
    overXYears: {
      one: "mais de 1 ano",
      other: "mais de {{count}} anos"
    },
    almostXYears: {
      one: "quase 1 ano",
      other: "quase {{count}} anos"
    }
  },
  i = function(e, a, t) {
    var i, o = n[e];
    if (i = "string" == typeof o ? o : 1 === a ? o.one : o.other.replace("{{count}}", String(a)), null != t && t.addSuffix) return t.comparison && t.comparison > 0 ? "em " + i : "h\xe1 " + i;
    return i
  }