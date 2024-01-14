"use strict";
t.r(i), t.d(i, {
  default: function() {
    return n
  }
}), t("781738");
var a = {
    lessThanXSeconds: {
      one: "moins d’une seconde",
      other: "moins de {{count}} secondes"
    },
    xSeconds: {
      one: "1 seconde",
      other: "{{count}} secondes"
    },
    halfAMinute: "30 secondes",
    lessThanXMinutes: {
      one: "moins d’une minute",
      other: "moins de {{count}} minutes"
    },
    xMinutes: {
      one: "1 minute",
      other: "{{count}} minutes"
    },
    aboutXHours: {
      one: "environ 1 heure",
      other: "environ {{count}} heures"
    },
    xHours: {
      one: "1 heure",
      other: "{{count}} heures"
    },
    xDays: {
      one: "1 jour",
      other: "{{count}} jours"
    },
    aboutXWeeks: {
      one: "environ 1 semaine",
      other: "environ {{count}} semaines"
    },
    xWeeks: {
      one: "1 semaine",
      other: "{{count}} semaines"
    },
    aboutXMonths: {
      one: "environ 1 mois",
      other: "environ {{count}} mois"
    },
    xMonths: {
      one: "1 mois",
      other: "{{count}} mois"
    },
    aboutXYears: {
      one: "environ 1 an",
      other: "environ {{count}} ans"
    },
    xYears: {
      one: "1 an",
      other: "{{count}} ans"
    },
    overXYears: {
      one: "plus d’un an",
      other: "plus de {{count}} ans"
    },
    almostXYears: {
      one: "presqu’un an",
      other: "presque {{count}} ans"
    }
  },
  n = function(e, i, t) {
    var n, r = a[e];
    if (n = "string" == typeof r ? r : 1 === i ? r.one : r.other.replace("{{count}}", String(i)), null != t && t.addSuffix) return t.comparison && t.comparison > 0 ? "dans " + n : "il y a " + n;
    return n
  }