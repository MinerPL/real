"use strict";
n.r(t), n.d(t, {
  mapValue: function() {
    return o
  },
  parseNumericPattern: function() {
    return i
  },
  parseTimezonePattern: function() {
    return s
  },
  parseAnyDigitsSigned: function() {
    return u
  },
  parseNDigits: function() {
    return l
  },
  parseNDigitsSigned: function() {
    return c
  },
  dayPeriodEnumToHours: function() {
    return d
  },
  normalizeTwoDigitYear: function() {
    return f
  },
  isLeapYearIndex: function() {
    return p
  }
});
var r = n("987482"),
  a = n("272347");

function o(e, t) {
  return e ? {
    value: t(e.value),
    rest: e.rest
  } : e
}

function i(e, t) {
  var n = t.match(e);
  return n ? {
    value: parseInt(n[0], 10),
    rest: t.slice(n[0].length)
  } : null
}

function s(e, t) {
  var n = t.match(e);
  if (!n) return null;
  if ("Z" === n[0]) return {
    value: 0,
    rest: t.slice(1)
  };
  var a = "+" === n[1] ? 1 : -1,
    o = n[2] ? parseInt(n[2], 10) : 0,
    i = n[3] ? parseInt(n[3], 10) : 0,
    s = n[5] ? parseInt(n[5], 10) : 0;
  return {
    value: a * (o * r.millisecondsInHour + i * r.millisecondsInMinute + s * r.millisecondsInSecond),
    rest: t.slice(n[0].length)
  }
}

function u(e) {
  return i(a.numericPatterns.anyDigitsSigned, e)
}

function l(e, t) {
  switch (e) {
    case 1:
      return i(a.numericPatterns.singleDigit, t);
    case 2:
      return i(a.numericPatterns.twoDigits, t);
    case 3:
      return i(a.numericPatterns.threeDigits, t);
    case 4:
      return i(a.numericPatterns.fourDigits, t);
    default:
      return i(RegExp("^\\d{1," + e + "}"), t)
  }
}

function c(e, t) {
  switch (e) {
    case 1:
      return i(a.numericPatterns.singleDigitSigned, t);
    case 2:
      return i(a.numericPatterns.twoDigitsSigned, t);
    case 3:
      return i(a.numericPatterns.threeDigitsSigned, t);
    case 4:
      return i(a.numericPatterns.fourDigitsSigned, t);
    default:
      return i(RegExp("^-?\\d{1," + e + "}"), t)
  }
}

function d(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    default:
      return 0
  }
}

function f(e, t) {
  var n, r = t > 0,
    a = r ? t : 1 - t;
  if (a <= 50) n = e || 100;
  else {
    var o = a + 50;
    n = e + 100 * Math.floor(o / 100) - (e >= o % 100 ? 100 : 0)
  }
  return r ? n : 1 - n
}

function p(e) {
  return e % 400 == 0 || e % 4 == 0 && e % 100 != 0
}