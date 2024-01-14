"use strict";
a.r(e), a.d(e, {
  default: function() {
    return r
  }
}), a("781738");
var n = {
    lessThanXSeconds: {
      one: "по-малко от секунда",
      other: "по-малко от {{count}} секунди"
    },
    xSeconds: {
      one: "1 секунда",
      other: "{{count}} секунди"
    },
    halfAMinute: "половин минута",
    lessThanXMinutes: {
      one: "по-малко от минута",
      other: "по-малко от {{count}} минути"
    },
    xMinutes: {
      one: "1 минута",
      other: "{{count}} минути"
    },
    aboutXHours: {
      one: "около час",
      other: "около {{count}} часа"
    },
    xHours: {
      one: "1 час",
      other: "{{count}} часа"
    },
    xDays: {
      one: "1 ден",
      other: "{{count}} дни"
    },
    aboutXWeeks: {
      one: "около седмица",
      other: "около {{count}} седмици"
    },
    xWeeks: {
      one: "1 седмица",
      other: "{{count}} седмици"
    },
    aboutXMonths: {
      one: "около месец",
      other: "около {{count}} месеца"
    },
    xMonths: {
      one: "1 месец",
      other: "{{count}} месеца"
    },
    aboutXYears: {
      one: "около година",
      other: "около {{count}} години"
    },
    xYears: {
      one: "1 година",
      other: "{{count}} години"
    },
    overXYears: {
      one: "над година",
      other: "над {{count}} години"
    },
    almostXYears: {
      one: "почти година",
      other: "почти {{count}} години"
    }
  },
  r = function(t, e, a) {
    var r, i = n[t];
    if (r = "string" == typeof i ? i : 1 === e ? i.one : i.other.replace("{{count}}", String(e)), null != a && a.addSuffix) return a.comparison && a.comparison > 0 ? "след " + r : "преди " + r;
    return r
  }