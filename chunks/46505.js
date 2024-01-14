"use strict";
r.r(e), r.d(e, {
  iter: function() {
    return h
  }
});
var n = r("868892"),
  i = r("737912"),
  a = r("98967"),
  o = r("191899"),
  s = r("984153"),
  u = r("871111"),
  d = r("544524"),
  y = r("594223"),
  c = r("823135");

function h(t, e) {
  var r = e.dtstart,
    d = e.freq,
    h = e.interval,
    p = e.until,
    m = e.bysetpos,
    b = e.count;
  if (0 === b || 0 === h) return f(t);
  var v = c.DateTime.fromDate(r),
    w = new a.default(e);
  w.rebuild(v.year, v.month);
  for (var g = function(t, e, r) {
      var i = r.freq,
        a = r.byhour,
        d = r.byminute,
        y = r.bysecond;
      return (0, n.freqIsDailyOrGreater)(i) ? (0, s.buildTimeset)(r) : i >= o.RRule.HOURLY && (0, u.notEmpty)(a) && !(0, u.includes)(a, e.hour) || i >= o.RRule.MINUTELY && (0, u.notEmpty)(d) && !(0, u.includes)(d, e.minute) || i >= o.RRule.SECONDLY && (0, u.notEmpty)(y) && !(0, u.includes)(y, e.second) ? [] : t.gettimeset(i)(e.hour, e.minute, e.second, e.millisecond)
    }(w, v, e);;) {
    var k = w.getdayset(d)(v.year, v.month, v.day),
      _ = k[0],
      E = k[1],
      T = k[2],
      A = function(t, e, r, n, i) {
        for (var a = !1, o = e; o < r; o++) {
          var s = t[o];
          (a = function(t, e, r) {
            var n = r.bymonth,
              i = r.byweekno,
              a = r.byweekday,
              o = r.byeaster,
              s = r.bymonthday,
              d = r.bynmonthday,
              y = r.byyearday;
            return (0, u.notEmpty)(n) && !(0, u.includes)(n, t.mmask[e]) || (0, u.notEmpty)(i) && !t.wnomask[e] || (0, u.notEmpty)(a) && !(0, u.includes)(a, t.wdaymask[e]) || (0, u.notEmpty)(t.nwdaymask) && !t.nwdaymask[e] || null !== o && !(0, u.includes)(t.eastermask, e) || ((0, u.notEmpty)(s) || (0, u.notEmpty)(d)) && !(0, u.includes)(s, t.mdaymask[e]) && !(0, u.includes)(d, t.nmdaymask[e]) || (0, u.notEmpty)(y) && (e < t.yearlen && !(0, u.includes)(y, e + 1) && !(0, u.includes)(y, -t.yearlen + e) || e >= t.yearlen && !(0, u.includes)(y, e + 1 - t.yearlen) && !(0, u.includes)(y, -t.nextyearlen + e - t.yearlen))
          }(n, s, i)) && (t[s] = null)
        }
        return a
      }(_, E, T, w, e);
    if ((0, u.notEmpty)(m)) {
      for (var R = (0, y.buildPoslist)(m, g, E, T, w, _), D = 0; D < R.length; D++) {
        var S = R[D];
        if (p && S > p) return f(t);
        if (S >= r) {
          var x = l(S, e);
          if (!t.accept(x) || b && !--b) return f(t)
        }
      }
    } else
      for (var D = E; D < T; D++) {
        var Y = _[D];
        if ((0, u.isPresent)(Y)) {
          for (var O = (0, i.fromOrdinal)(w.yearordinal + Y), M = 0; M < g.length; M++) {
            var U = g[M],
              S = (0, i.combine)(O, U);
            if (p && S > p) return f(t);
            if (S >= r) {
              var x = l(S, e);
              if (!t.accept(x) || b && !--b) return f(t)
            }
          }
        }
      }
    if (0 === e.interval) return f(t);
    if (v.add(e, A), v.year > i.MAXYEAR) return f(t);
    !(0, n.freqIsDailyOrGreater)(d) && (g = w.gettimeset(d)(v.hour, v.minute, v.second, 0)), w.rebuild(v.year, v.month)
  }
}

function l(t, e) {
  return new(0, d.DateWithZone)(t, e.tzid).rezonedDate()
}

function f(t) {
  return t.getValue()
}