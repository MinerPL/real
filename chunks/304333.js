"use strict";
r.r(e), r.d(e, {
  parseString: function() {
    return u
  },
  parseDtstart: function() {
    return d
  }
}), r("781738"), r("70102");
var n = r("676730"),
  i = r("868892"),
  a = r("466739"),
  o = r("737912"),
  s = r("191899");

function u(t) {
  var e = t.split("\n").map(y).filter(function(t) {
    return null !== t
  });
  return (0, n.__assign)((0, n.__assign)({}, e[0]), e[1])
}

function d(t) {
  var e = {},
    r = /DTSTART(?:;TZID=([^:=]+?))?(?::|=)([^;\s]+)/i.exec(t);
  if (!r) return e;
  var n = r[1],
    i = r[2];
  return n && (e.tzid = n), e.dtstart = (0, o.untilStringToDate)(i), e
}

function y(t) {
  if (!(t = t.replace(/^\s+|\s+$/, "")).length) return null;
  var e = /^([A-Z]+?)[:;]/.exec(t.toUpperCase());
  if (!e) return c(t);
  var r = e[1];
  switch (r.toUpperCase()) {
    case "RRULE":
    case "EXRULE":
      return c(t);
    case "DTSTART":
      return d(t);
    default:
      throw Error("Unsupported RFC prop ".concat(r, " in ").concat(t))
  }
}

function c(t) {
  var e = d(t.replace(/^RRULE:/i, ""));
  return t.replace(/^(?:RRULE|EXRULE):/i, "").split(";").forEach(function(r) {
    var n = r.split("="),
      u = n[0],
      y = n[1];
    switch (u.toUpperCase()) {
      case "FREQ":
        e.freq = i.Frequency[y.toUpperCase()];
        break;
      case "WKST":
        e.wkst = s.Days[y.toUpperCase()];
        break;
      case "COUNT":
      case "INTERVAL":
      case "BYSETPOS":
      case "BYMONTH":
      case "BYMONTHDAY":
      case "BYYEARDAY":
      case "BYWEEKNO":
      case "BYHOUR":
      case "BYMINUTE":
      case "BYSECOND":
        var c = function(t) {
          return -1 !== t.indexOf(",") ? t.split(",").map(h) : h(t)
        }(y);
        e[u.toLowerCase()] = c;
        break;
      case "BYWEEKDAY":
      case "BYDAY":
        e.byweekday = function(t) {
          return t.split(",").map(function(t) {
            if (2 === t.length) return s.Days[t];
            var e = t.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
            if (!e || e.length < 3) throw SyntaxError("Invalid weekday string: ".concat(t));
            var r = Number(e[1]),
              n = e[2],
              i = s.Days[n].weekday;
            return new a.Weekday(i, r)
          })
        }(y);
        break;
      case "DTSTART":
      case "TZID":
        var l = d(t);
        e.tzid = l.tzid, e.dtstart = l.dtstart;
        break;
      case "UNTIL":
        e.until = (0, o.untilStringToDate)(y);
        break;
      case "BYEASTER":
        e.byeaster = Number(y);
        break;
      default:
        throw Error("Unknown RRULE property '" + u + "'")
    }
  }), e
}

function h(t) {
  return /^[+-]?\d+$/.test(t) ? Number(t) : t
}