"use strict";
let r, o;
n.r(t), n.d(t, {
  CalendarDate: function() {
    return ey
  },
  Time: function() {
    return ex
  },
  GregorianCalendar: function() {
    return p
  },
  createCalendar: function() {
    return tr
  },
  toCalendarDate: function() {
    return G
  },
  toCalendarDateTime: function() {
    return W
  },
  toTime: function() {
    return q
  },
  toCalendar: function() {
    return Z
  },
  toZoned: function() {
    return Y
  },
  isSameDay: function() {
    return m
  },
  isSameMonth: function() {
    return h
  },
  isEqualDay: function() {
    return g
  },
  isToday: function() {
    return v
  },
  getDayOfWeek: function() {
    return y
  },
  now: function() {
    return b
  },
  today: function() {
    return x
  },
  getLocalTimeZone: function() {
    return P
  },
  startOfMonth: function() {
    return k
  },
  startOfWeek: function() {
    return O
  },
  startOfYear: function() {
    return T
  },
  endOfMonth: function() {
    return E
  },
  endOfWeek: function() {
    return I
  },
  getMinimumMonthInYear: function() {
    return R
  },
  getMinimumDayInMonth: function() {
    return M
  },
  getWeeksInMonth: function() {
    return N
  },
  minDate: function() {
    return L
  },
  maxDate: function() {
    return j
  },
  DateFormatter: function() {
    return ta
  }
}), n("222007"), n("70102"), n("781738"), n("659510"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("311790"), n("492311"), n("101997"), n("990131");
var a = n("599514");

function i(e, t) {
  return e - t * Math.floor(e / t)
}

function s(e, t, n, r) {
  let o = (t = l(e, t)) - 1,
    a = -2;
  return n <= 2 ? a = 0 : c(t) && (a = -1), 1721425 + 365 * o + Math.floor(o / 4) - Math.floor(o / 100) + Math.floor(o / 400) + Math.floor((367 * n - 362) / 12 + a + r)
}

function c(e) {
  return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
}

function l(e, t) {
  return "BC" === e ? 1 - t : t
}

function u(e) {
  let t = "AD";
  return e <= 0 && (t = "BC", e = 1 - e), [t, e]
}
let d = {
  standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
};
class p {
  fromJulianDay(e) {
    let t = e - 1721426,
      n = Math.floor(t / 146097),
      r = i(t, 146097),
      o = Math.floor(r / 36524),
      a = i(r, 36524),
      l = Math.floor(a / 1461),
      d = Math.floor(i(a, 1461) / 365),
      [p, f] = u(400 * n + 100 * o + 4 * l + d + (4 !== o && 4 !== d ? 1 : 0)),
      m = e - s(p, f, 1, 1),
      h = 2;
    e < s(p, f, 3, 1) ? h = 0 : c(f) && (h = 1);
    let g = Math.floor(((m + h) * 12 + 373) / 367),
      v = e - s(p, f, g, 1) + 1;
    return new ey(p, f, g, v)
  }
  toJulianDay(e) {
    return s(e.era, e.year, e.month, e.day)
  }
  getDaysInMonth(e) {
    return d[c(e.year) ? "leapyear" : "standard"][e.month - 1]
  }
  getMonthsInYear(e) {
    return 12
  }
  getDaysInYear(e) {
    return c(e.year) ? 366 : 365
  }
  getYearsInEra(e) {
    return 9999
  }
  getEras() {
    return ["BC", "AD"]
  }
  isInverseEra(e) {
    return "BC" === e.era
  }
  balanceDate(e) {
    e.year <= 0 && (e.era = "BC" === e.era ? "AD" : "BC", e.year = 1 - e.year)
  }
  constructor() {
    this.identifier = "gregory"
  }
}
let f = {
  "001": 1,
  AD: 1,
  AE: 6,
  AF: 6,
  AI: 1,
  AL: 1,
  AM: 1,
  AN: 1,
  AR: 1,
  AT: 1,
  AU: 1,
  AX: 1,
  AZ: 1,
  BA: 1,
  BE: 1,
  BG: 1,
  BH: 6,
  BM: 1,
  BN: 1,
  BY: 1,
  CH: 1,
  CL: 1,
  CM: 1,
  CN: 1,
  CR: 1,
  CY: 1,
  CZ: 1,
  DE: 1,
  DJ: 6,
  DK: 1,
  DZ: 6,
  EC: 1,
  EE: 1,
  EG: 6,
  ES: 1,
  FI: 1,
  FJ: 1,
  FO: 1,
  FR: 1,
  GB: 1,
  GE: 1,
  GF: 1,
  GP: 1,
  GR: 1,
  HR: 1,
  HU: 1,
  IE: 1,
  IQ: 6,
  IR: 6,
  IS: 1,
  IT: 1,
  JO: 6,
  KG: 1,
  KW: 6,
  KZ: 1,
  LB: 1,
  LI: 1,
  LK: 1,
  LT: 1,
  LU: 1,
  LV: 1,
  LY: 6,
  MC: 1,
  MD: 1,
  ME: 1,
  MK: 1,
  MN: 1,
  MQ: 1,
  MV: 5,
  MY: 1,
  NL: 1,
  NO: 1,
  NZ: 1,
  OM: 6,
  PL: 1,
  QA: 6,
  RE: 1,
  RO: 1,
  RS: 1,
  RU: 1,
  SD: 6,
  SE: 1,
  SI: 1,
  SK: 1,
  SM: 1,
  SY: 6,
  TJ: 1,
  TM: 1,
  TR: 1,
  UA: 1,
  UY: 1,
  UZ: 1,
  VA: 1,
  VN: 1,
  XK: 1
};

function m(e, t) {
  return t = Z(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day
}

function h(e, t) {
  return t = Z(t, e.calendar), e = k(e), t = k(t), e.era === t.era && e.year === t.year && e.month === t.month
}

function g(e, t) {
  return e.calendar.identifier === t.calendar.identifier && e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day
}

function v(e, t) {
  return m(e, x(t))
}

function y(e, t) {
  let n = Math.ceil(e.calendar.toJulianDay(e) + 1 - function(e) {
    return f[function(e) {
      if (Intl.Locale) {
        let t = A.get(e);
        return !t && (t = new Intl.Locale(e).maximize().region, A.set(e, t)), t
      }
      let t = e.split("-")[1];
      return "u" === t ? null : t
    }(e)] || 0
  }(t)) % 7;
  return n < 0 && (n += 7), n
}

function b(e) {
  return H(Date.now(), e)
}

function x(e) {
  return G(b(e))
}

function S(e, t) {
  return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t)
}

function w(e, t) {
  return D(e) - D(t)
}

function D(e) {
  return 36e5 * e.hour + 6e4 * e.minute + 1e3 * e.second + e.millisecond
}
let C = null;

function P() {
  return null == C && (C = new Intl.DateTimeFormat().resolvedOptions().timeZone), C
}

function k(e) {
  return e.subtract({
    days: e.day - 1
  })
}

function E(e) {
  return e.add({
    days: e.calendar.getDaysInMonth(e) - e.day
  })
}

function T(e) {
  return k(e.subtract({
    months: e.month - 1
  }))
}

function R(e) {
  return e.calendar.getMinimumMonthInYear ? e.calendar.getMinimumMonthInYear(e) : 1
}

function M(e) {
  return e.calendar.getMinimumDayInMonth ? e.calendar.getMinimumDayInMonth(e) : 1
}

function O(e, t) {
  let n = y(e, t);
  return e.subtract({
    days: n
  })
}

function I(e, t) {
  return O(e, t).add({
    days: 6
  })
}
let A = new Map;

function N(e, t) {
  let n = e.calendar.getDaysInMonth(e);
  return Math.ceil((y(k(e), t) + n) / 7)
}

function L(e, t) {
  return e && t ? 0 >= e.compare(t) ? e : t : e || t
}

function j(e, t) {
  return e && t ? e.compare(t) >= 0 ? e : t : e || t
}

function F(e) {
  return K(l((e = Z(e, new p)).era, e.year), e.month, e.day, e.hour, e.minute, e.second, e.millisecond)
}

function K(e, t, n, r, o, a, i) {
  let s = new Date;
  return s.setUTCHours(r, o, a, i), s.setUTCFullYear(e, t - 1, n), s.getTime()
}

function _(e, t) {
  if ("UTC" === t) return 0;
  if (e > 0 && t === P()) return -6e4 * new Date(e).getTimezoneOffset();
  let {
    year: n,
    month: r,
    day: o,
    hour: a,
    minute: i,
    second: s
  } = V(e, t);
  return K(n, r, o, a, i, s, 0) - 1e3 * Math.floor(e / 1e3)
}
let z = new Map;

function V(e, t) {
  let n = z.get(t);
  !n && (n = new Intl.DateTimeFormat("en-US", {
    timeZone: t,
    hour12: !1,
    era: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  }), z.set(t, n));
  let r = n.formatToParts(new Date(e)),
    o = {};
  for (let e of r) "literal" !== e.type && (o[e.type] = e.value);
  return {
    year: "BC" === o.era || "B" === o.era ? -o.year + 1 : +o.year,
    month: +o.month,
    day: +o.day,
    hour: "24" === o.hour ? 0 : +o.hour,
    minute: +o.minute,
    second: +o.second
  }
}

function B(e, t) {
  var n, r, o, a;
  let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "compatible",
    s = W(e);
  if ("UTC" === t) return F(s);
  if (t === P() && "compatible" === i) {
    s = Z(s, new p);
    let e = new Date,
      t = l(s.era, s.year);
    return e.setFullYear(t, s.month - 1, s.day), e.setHours(s.hour, s.minute, s.second, s.millisecond), e.getTime()
  }
  let c = F(s),
    u = _(c - 864e5, t),
    d = _(c + 864e5, t);
  let f = (n = s, r = t, ((o = c - u) == (a = c - d) ? [o] : [o, a]).filter(e => (function(e, t, n) {
    let r = V(n, t);
    return e.year === r.year && e.month === r.month && e.day === r.day && e.hour === r.hour && e.minute === r.minute && e.second === r.second
  })(n, r, e)));
  if (1 === f.length) return f[0];
  if (f.length > 1) switch (i) {
    case "compatible":
    case "earlier":
      return f[0];
    case "later":
      return f[f.length - 1];
    case "reject":
      throw RangeError("Multiple possible absolute times found")
  }
  switch (i) {
    case "earlier":
      return Math.min(c - u, c - d);
    case "compatible":
    case "later":
      return Math.max(c - u, c - d);
    case "reject":
      throw RangeError("No such absolute time found")
  }
}

function U(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "compatible";
  return new Date(B(e, t, n))
}

function H(e, t) {
  let n = _(e, t),
    r = new Date(e + n);
  return new eC(r.getUTCFullYear(), r.getUTCMonth() + 1, r.getUTCDate(), t, n, r.getUTCHours(), r.getUTCMinutes(), r.getUTCSeconds(), r.getUTCMilliseconds())
}

function G(e) {
  return new ey(e.calendar, e.era, e.year, e.month, e.day)
}

function W(e, t) {
  let n = 0,
    r = 0,
    o = 0,
    a = 0;
  if ("timeZone" in e)({
    hour: n,
    minute: r,
    second: o,
    millisecond: a
  } = e);
  else if ("hour" in e && !t) return e;
  return t && ({
    hour: n,
    minute: r,
    second: o,
    millisecond: a
  } = t), new ew(e.calendar, e.era, e.year, e.month, e.day, n, r, o, a)
}

function q(e) {
  return new ex(e.hour, e.minute, e.second, e.millisecond)
}

function Z(e, t) {
  if (e.calendar.identifier === t.identifier) return e;
  let n = t.fromJulianDay(e.calendar.toJulianDay(e)),
    r = e.copy();
  return r.calendar = t, r.era = n.era, r.year = n.year, r.month = n.month, r.day = n.day, ee(r), r
}

function Y(e, t, n) {
  if (e instanceof eC) return e.timeZone === t ? e : function(e, t) {
    return Z(H(F(e) - e.offset, t), e.calendar)
  }(e, t);
  return H(B(e, t, n), t)
}

function X(e, t) {
  let n = e.copy(),
    r = "hour" in n ? es(n, t) : 0;
  J(n, t.years || 0), n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e), n.month += t.months || 0, $(n), Q(n), n.day += 7 * (t.weeks || 0), n.day += t.days || 0, n.day += r,
    function(e) {
      for (; e.day < 1;) e.month--, $(e), e.day += e.calendar.getDaysInMonth(e);
      for (; e.day > e.calendar.getDaysInMonth(e);) e.day -= e.calendar.getDaysInMonth(e), e.month++, $(e)
    }(n), n.calendar.balanceDate && n.calendar.balanceDate(n), n.year < 1 && (n.year = 1, n.month = 1, n.day = 1);
  let o = n.calendar.getYearsInEra(n);
  if (n.year > o) {
    var a, i;
    let e = null === (i = (a = n.calendar).isInverseEra) || void 0 === i ? void 0 : i.call(a, n);
    n.year = o, n.month = e ? 1 : n.calendar.getMonthsInYear(n), n.day = e ? 1 : n.calendar.getDaysInMonth(n)
  }
  n.month < 1 && (n.month = 1, n.day = 1);
  let s = n.calendar.getMonthsInYear(n);
  return n.month > s && (n.month = s, n.day = n.calendar.getDaysInMonth(n)), n.day = Math.max(1, Math.min(n.calendar.getDaysInMonth(n), n.day)), n
}

function J(e, t) {
  var n, r;
  (null === (r = (n = e.calendar).isInverseEra) || void 0 === r ? void 0 : r.call(n, e)) && (t = -t), e.year += t
}

function $(e) {
  for (; e.month < 1;) J(e, -1), e.month += e.calendar.getMonthsInYear(e);
  let t = 0;
  for (; e.month > (t = e.calendar.getMonthsInYear(e));) e.month -= t, J(e, 1)
}

function Q(e) {
  e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day))
}

function ee(e) {
  e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), Q(e)
}

function et(e) {
  let t = {};
  for (let n in e) "number" == typeof e[n] && (t[n] = -e[n]);
  return t
}

function en(e, t) {
  return X(e, et(t))
}

function er(e, t) {
  let n = e.copy();
  return null != t.era && (n.era = t.era), null != t.year && (n.year = t.year), null != t.month && (n.month = t.month), null != t.day && (n.day = t.day), ee(n), n
}

function eo(e, t) {
  let n = e.copy();
  return null != t.hour && (n.hour = t.hour), null != t.minute && (n.minute = t.minute), null != t.second && (n.second = t.second), null != t.millisecond && (n.millisecond = t.millisecond), ea(n), n
}

function ea(e) {
  e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23))
}

function ei(e, t) {
  let n = e % t;
  return n < 0 && (n += t), n
}

function es(e, t) {
  var n;
  let r;
  e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0;
  return n = e, n.second += Math.floor(n.millisecond / 1e3), n.millisecond = ei(n.millisecond, 1e3), n.minute += Math.floor(n.second / 60), n.second = ei(n.second, 60), n.hour += Math.floor(n.minute / 60), n.minute = ei(n.minute, 60), r = Math.floor(n.hour / 24), n.hour = ei(n.hour, 24), r
}

function ec(e, t) {
  let n = e.copy();
  return es(n, t), n
}

function el(e, t, n, r) {
  let o = e.copy();
  switch (t) {
    case "era": {
      let t = e.calendar.getEras(),
        a = t.indexOf(e.era);
      if (a < 0) throw Error("Invalid era: " + e.era);
      a = ed(a, n, 0, t.length - 1, null == r ? void 0 : r.round), o.era = t[a], ee(o);
      break
    }
    case "year":
      var a, i;
      (null === (i = (a = o.calendar).isInverseEra) || void 0 === i ? void 0 : i.call(a, o)) && (n = -n), o.year = ed(e.year, n, -1 / 0, 9999, null == r ? void 0 : r.round), o.year === -1 / 0 && (o.year = 1), o.calendar.balanceYearMonth && o.calendar.balanceYearMonth(o, e);
      break;
    case "month":
      o.month = ed(e.month, n, 1, e.calendar.getMonthsInYear(e), null == r ? void 0 : r.round);
      break;
    case "day":
      o.day = ed(e.day, n, 1, e.calendar.getDaysInMonth(e), null == r ? void 0 : r.round);
      break;
    default:
      throw Error("Unsupported field " + t)
  }
  return e.calendar.balanceDate && e.calendar.balanceDate(o), ee(o), o
}

function eu(e, t, n, r) {
  let o = e.copy();
  switch (t) {
    case "hour": {
      let t = e.hour,
        a = 0,
        i = 23;
      if ((null == r ? void 0 : r.hourCycle) === 12) {
        let e = t >= 12;
        a = e ? 12 : 0, i = e ? 23 : 11
      }
      o.hour = ed(t, n, a, i, null == r ? void 0 : r.round);
      break
    }
    case "minute":
      o.minute = ed(e.minute, n, 0, 59, null == r ? void 0 : r.round);
      break;
    case "second":
      o.second = ed(e.second, n, 0, 59, null == r ? void 0 : r.round);
      break;
    case "millisecond":
      o.millisecond = ed(e.millisecond, n, 0, 999, null == r ? void 0 : r.round);
      break;
    default:
      throw Error("Unsupported field " + t)
  }
  return o
}

function ed(e, t, n, r) {
  let o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
  if (o) {
    (e += Math.sign(t)) < n && (e = r);
    let o = Math.abs(t);
    (e = t > 0 ? Math.ceil(e / o) * o : Math.floor(e / o) * o) > r && (e = n)
  } else(e += t) < n ? e = r - (n - e - 1) : e > r && (e = n + (e - r - 1));
  return e
}

function ep(e, t) {
  let n;
  if (null != t.years && 0 !== t.years || null != t.months && 0 !== t.months || null != t.weeks && 0 !== t.weeks || null != t.days && 0 !== t.days) {
    let r;
    n = B(X(W(e), {
      years: t.years,
      months: t.months,
      weeks: t.weeks,
      days: t.days
    }), e.timeZone)
  } else n = F(e) - e.offset;
  return Z(H(n += (t.milliseconds || 0) + 1e3 * (t.seconds || 0) + 6e4 * (t.minutes || 0) + 36e5 * (t.hours || 0), e.timeZone), e.calendar)
}

function ef(e) {
  return "".concat(String(e.hour).padStart(2, "0"), ":").concat(String(e.minute).padStart(2, "0"), ":").concat(String(e.second).padStart(2, "0")).concat(e.millisecond ? String(e.millisecond / 1e3).slice(1) : "")
}

function em(e) {
  let t = Z(e, new p);
  return "".concat(String(t.year).padStart(4, "0"), "-").concat(String(t.month).padStart(2, "0"), "-").concat(String(t.day).padStart(2, "0"))
}

function eh(e) {
  return "".concat(em(e), "T").concat(ef(e))
}

function eg(e) {
  let t, n = "object" == typeof e[0] ? e.shift() : new p;
  if ("string" == typeof e[0]) t = e.shift();
  else {
    let e = n.getEras();
    t = e[e.length - 1]
  }
  return [n, t, e.shift(), e.shift(), e.shift()]
}
var ev = new WeakMap;
class ey {
  copy() {
    return this.era ? new ey(this.calendar, this.era, this.year, this.month, this.day) : new ey(this.calendar, this.year, this.month, this.day)
  }
  add(e) {
    return X(this, e)
  }
  subtract(e) {
    var t;
    return t = this, X(t, et(e))
  }
  set(e) {
    return er(this, e)
  }
  cycle(e, t, n) {
    return el(this, e, t, n)
  }
  toDate(e) {
    return U(this, e)
  }
  toString() {
    return em(this)
  }
  compare(e) {
    return S(this, e)
  }
  constructor(...e) {
    (0, a._)(this, ev, {
      writable: !0,
      value: void 0
    });
    let [t, n, r, o, i] = eg(e);
    this.calendar = t, this.era = n, this.year = r, this.month = o, this.day = i, ee(this)
  }
}
var eb = new WeakMap;
class ex {
  copy() {
    return new ex(this.hour, this.minute, this.second, this.millisecond)
  }
  add(e) {
    return ec(this, e)
  }
  subtract(e) {
    var t;
    return t = this, ec(t, et(e))
  }
  set(e) {
    return eo(this, e)
  }
  cycle(e, t, n) {
    return eu(this, e, t, n)
  }
  toString() {
    return ef(this)
  }
  compare(e) {
    var t, n;
    return t = this, n = e, D(t) - D(n)
  }
  constructor(e = 0, t = 0, n = 0, r = 0) {
    (0, a._)(this, eb, {
      writable: !0,
      value: void 0
    }), this.hour = e, this.minute = t, this.second = n, this.millisecond = r, ea(this)
  }
}
var eS = new WeakMap;
class ew {
  copy() {
    return this.era ? new ew(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new ew(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond)
  }
  add(e) {
    return X(this, e)
  }
  subtract(e) {
    var t;
    return t = this, X(t, et(e))
  }
  set(e) {
    return er(eo(this, e), e)
  }
  cycle(e, t, n) {
    switch (e) {
      case "era":
      case "year":
      case "month":
      case "day":
        return el(this, e, t, n);
      default:
        return eu(this, e, t, n)
    }
  }
  toDate(e, t) {
    return U(this, e, t)
  }
  toString() {
    return eh(this)
  }
  compare(e) {
    let t = S(this, e);
    if (0 === t) {
      var n, r;
      return n = this, r = W(e), D(n) - D(r)
    }
    return t
  }
  constructor(...e) {
    (0, a._)(this, eS, {
      writable: !0,
      value: void 0
    });
    let [t, n, r, o, i] = eg(e);
    this.calendar = t, this.era = n, this.year = r, this.month = o, this.day = i, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, ee(this)
  }
}
var eD = new WeakMap;
class eC {
  copy() {
    return this.era ? new eC(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new eC(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond)
  }
  add(e) {
    return ep(this, e)
  }
  subtract(e) {
    var t;
    return t = this, ep(t, et(e))
  }
  set(e, t) {
    var n, r, o;
    let a, i;
    return n = this, r = e, o = t, 0 === (i = eo(er(a = W(n), r), r)).compare(a) ? n : Z(H(B(i, n.timeZone, o), n.timeZone), n.calendar)
  }
  cycle(e, t, n) {
    return function(e, t, n, r) {
      switch (t) {
        case "hour": {
          let t = 0,
            o = 23;
          if ((null == r ? void 0 : r.hourCycle) === 12) {
            let n = e.hour >= 12;
            t = n ? 12 : 0, o = n ? 23 : 11
          }
          let a = W(e),
            i = Z(eo(a, {
              hour: t
            }), new p),
            s = [B(i, e.timeZone, "earlier"), B(i, e.timeZone, "later")].filter(t => H(t, e.timeZone).day === i.day)[0],
            c = Z(eo(a, {
              hour: o
            }), new p),
            l = [B(c, e.timeZone, "earlier"), B(c, e.timeZone, "later")].filter(t => H(t, e.timeZone).day === c.day).pop(),
            u = F(e) - e.offset,
            d = Math.floor(u / 36e5),
            f = u % 36e5;
          return Z(H(u = 36e5 * ed(d, n, Math.floor(s / 36e5), Math.floor(l / 36e5), null == r ? void 0 : r.round) + f, e.timeZone), e.calendar)
        }
        case "minute":
        case "second":
        case "millisecond":
          return eu(e, t, n, r);
        case "era":
        case "year":
        case "month":
        case "day":
          return Z(H(B(el(W(e), t, n, r), e.timeZone), e.timeZone), e.calendar);
        default:
          throw Error("Unsupported field " + t)
      }
    }(this, e, t, n)
  }
  toDate() {
    var e;
    return e = this, new Date(F(e) - e.offset)
  }
  toString() {
    var e, t;
    let n, r, o;
    return e = this, "".concat(eh(e)).concat((n = 0 > Math.sign(t = e.offset) ? "-" : "+", r = Math.floor((t = Math.abs(t)) / 36e5), o = t % 36e5 / 6e4, "".concat(n).concat(String(r).padStart(2, "0"), ":").concat(String(o).padStart(2, "0"))), "[").concat(e.timeZone, "]")
  }
  toAbsoluteString() {
    return this.toDate().toISOString()
  }
  compare(e) {
    return this.toDate().getTime() - Y(e, this.timeZone).toDate().getTime()
  }
  constructor(...e) {
    (0, a._)(this, eD, {
      writable: !0,
      value: void 0
    });
    let [t, n, r, o, i] = eg(e), s = e.shift(), c = e.shift();
    this.calendar = t, this.era = n, this.year = r, this.month = o, this.day = i, this.timeZone = s, this.offset = c, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, ee(this)
  }
}
let eP = [
    [1868, 9, 8],
    [1912, 7, 30],
    [1926, 12, 25],
    [1989, 1, 8],
    [2019, 5, 1]
  ],
  ek = [
    [1912, 7, 29],
    [1926, 12, 24],
    [1989, 1, 7],
    [2019, 4, 30]
  ],
  eE = [1867, 1911, 1925, 1988, 2018],
  eT = ["meiji", "taisho", "showa", "heisei", "reiwa"];

function eR(e) {
  let t = eP.findIndex(t => {
    let [n, r, o] = t;
    return !!(e.year < n) || e.year === n && !!(e.month < r) || e.year === n && e.month === r && !!(e.day < o) || !1
  });
  return -1 === t ? eP.length - 1 : 0 === t ? 0 : t - 1
}

function eM(e) {
  let t = eE[eT.indexOf(e.era)];
  if (!t) throw Error("Unknown era: " + e.era);
  return new ey(e.year + t, e.month, e.day)
}
class eO extends p {
  fromJulianDay(e) {
    let t = super.fromJulianDay(e),
      n = eR(t);
    return new ey(this, eT[n], t.year - eE[n], t.month, t.day)
  }
  toJulianDay(e) {
    return super.toJulianDay(eM(e))
  }
  balanceDate(e) {
    let t = eM(e),
      n = eR(t);
    eT[n] !== e.era && (e.era = eT[n], e.year = t.year - eE[n]), this.constrainDate(e)
  }
  constrainDate(e) {
    let t = eT.indexOf(e.era),
      n = ek[t];
    if (null != n) {
      let [r, o, a] = n, i = r - eE[t];
      e.year = Math.max(1, Math.min(i, e.year)), e.year === i && (e.month = Math.min(o, e.month), e.month === o && (e.day = Math.min(a, e.day)))
    }
    if (1 === e.year && t >= 0) {
      let [, n, r] = eP[t];
      e.month = Math.max(n, e.month), e.month === n && (e.day = Math.max(r, e.day))
    }
  }
  getEras() {
    return eT
  }
  getYearsInEra(e) {
    let t = eT.indexOf(e.era),
      n = eP[t],
      r = eP[t + 1];
    if (null == r) return 9999 - n[0] + 1;
    let o = r[0] - n[0];
    return (e.month < r[1] || e.month === r[1] && e.day < r[2]) && o++, o
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(eM(e))
  }
  getMinimumMonthInYear(e) {
    let t = eI(e);
    return t ? t[1] : 1
  }
  getMinimumDayInMonth(e) {
    let t = eI(e);
    return t && e.month === t[1] ? t[2] : 1
  }
  constructor(...e) {
    super(...e), this.identifier = "japanese"
  }
}

function eI(e) {
  if (1 === e.year) return eP[eT.indexOf(e.era)]
}
class eA extends p {
  fromJulianDay(e) {
    let t = super.fromJulianDay(e);
    return new ey(this, l(t.era, t.year) - -543, t.month, t.day)
  }
  toJulianDay(e) {
    return super.toJulianDay(eN(e))
  }
  getEras() {
    return ["BE"]
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(eN(e))
  }
  balanceDate() {}
  constructor(...e) {
    super(...e), this.identifier = "buddhist"
  }
}

function eN(e) {
  let [t, n] = u(e.year + -543);
  return new ey(t, n, e.month, e.day)
}

function eL(e) {
  return "minguo" === e.era ? e.year + 1911 : 1 - e.year + 1911
}

function ej(e) {
  let t = e - 1911;
  return t > 0 ? ["minguo", t] : ["before_minguo", 1 - t]
}
class eF extends p {
  fromJulianDay(e) {
    let t = super.fromJulianDay(e),
      [n, r] = ej(l(t.era, t.year));
    return new ey(this, n, r, t.month, t.day)
  }
  toJulianDay(e) {
    return super.toJulianDay(eK(e))
  }
  getEras() {
    return ["before_minguo", "minguo"]
  }
  balanceDate(e) {
    let [t, n] = ej(eL(e));
    e.era = t, e.year = n
  }
  isInverseEra(e) {
    return "before_minguo" === e.era
  }
  getDaysInMonth(e) {
    return super.getDaysInMonth(eK(e))
  }
  getYearsInEra(e) {
    return "before_minguo" === e.era ? 9999 : 8088
  }
  constructor(...e) {
    super(...e), this.identifier = "roc"
  }
}

function eK(e) {
  let [t, n] = u(eL(e));
  return new ey(t, n, e.month, e.day)
}

function e_(e, t, n) {
  let r = e > 0 ? e - 474 : e - 473,
    o = i(r, 2820) + 474;
  return 1948320 + 1029983 * Math.floor(r / 2820) + 365 * (o - 1) + Math.floor((31 * o - 5) / 128) + (t <= 7 ? 31 * (t - 1) : 30 * (t - 1) + 6) + n
}
class ez {
  fromJulianDay(e) {
    let t = e - e_(475, 1, 1),
      n = Math.floor(t / 1029983),
      r = i(t, 1029983),
      o = 474 + 2820 * n + (1029982 === r ? 2820 : Math.floor((128 * r + 46878) / 46751));
    o <= 0 && o--;
    let a = e - e_(o, 1, 1) + 1,
      s = a <= 186 ? Math.ceil(a / 31) : Math.ceil((a - 6) / 31),
      c = e - e_(o, s, 1) + 1;
    return new ey(this, o, s, c)
  }
  toJulianDay(e) {
    return e_(e.year, e.month, e.day)
  }
  getMonthsInYear() {
    return 12
  }
  getDaysInMonth(e) {
    var t;
    let n;
    if (e.month <= 6) return 31;
    if (e.month <= 11) return 30;
    return (n = i((t = e.year) > 0 ? t - 474 : t - 473, 2820) + 474, 31 > i((n + 38) * 31, 128)) ? 30 : 29
  }
  getEras() {
    return ["AP"]
  }
  getYearsInEra() {
    return 9377
  }
  constructor() {
    this.identifier = "persian"
  }
}
class eV extends p {
  fromJulianDay(e) {
    let t, n, r, o = super.fromJulianDay(e),
      a = o.year - 78,
      i = e - s(o.era, o.year, 1, 1);
    if (i < 80 ? (a--, i += (t = c(o.year - 1) ? 31 : 30) + 155 + 90 + 10) : (t = c(o.year) ? 31 : 30, i -= 80), i < t) n = 1, r = i + 1;
    else {
      let e = i - t;
      e < 155 ? (n = Math.floor(e / 31) + 2, r = e % 31 + 1) : (e -= 155, n = Math.floor(e / 30) + 7, r = e % 30 + 1)
    }
    return new ey(this, a, n, r)
  }
  toJulianDay(e) {
    let t, n;
    let [r, o] = u(e.year + 78);
    return (c(o) ? (t = 31, n = s(r, o, 3, 21)) : (t = 30, n = s(r, o, 3, 22)), 1 === e.month) ? n + e.day - 1 : (n += t + 31 * Math.min(e.month - 2, 5), e.month >= 8 && (n += (e.month - 7) * 30), n += e.day - 1)
  }
  getDaysInMonth(e) {
    return 1 === e.month && c(e.year + 78) || e.month >= 2 && e.month <= 6 ? 31 : 30
  }
  getYearsInEra() {
    return 9919
  }
  getEras() {
    return ["saka"]
  }
  balanceDate() {}
  constructor(...e) {
    super(...e), this.identifier = "indian"
  }
}

function eB(e, t, n, r) {
  return r + Math.ceil(29.5 * (n - 1)) + (t - 1) * 354 + Math.floor((3 + 11 * t) / 30) + e - 1
}

function eU(e, t, n) {
  let r = Math.floor((30 * (n - t) + 10646) / 10631),
    o = Math.min(12, Math.ceil((n - (29 + eB(t, r, 1, 1))) / 29.5) + 1),
    a = n - eB(t, r, o, 1) + 1;
  return new ey(e, r, o, a)
}

function eH(e) {
  return (14 + 11 * e) % 30 < 11
}
class eG {
  fromJulianDay(e) {
    return eU(this, 1948440, e)
  }
  toJulianDay(e) {
    return eB(1948440, e.year, e.month, e.day)
  }
  getDaysInMonth(e) {
    let t = 29 + e.month % 2;
    return 12 === e.month && eH(e.year) && t++, t
  }
  getMonthsInYear() {
    return 12
  }
  getDaysInYear(e) {
    return eH(e.year) ? 355 : 354
  }
  getYearsInEra() {
    return 9665
  }
  getEras() {
    return ["AH"]
  }
  constructor() {
    this.identifier = "islamic-civil"
  }
}
class eW extends eG {
  fromJulianDay(e) {
    return eU(this, 1948439, e)
  }
  toJulianDay(e) {
    return eB(1948439, e.year, e.month, e.day)
  }
  constructor(...e) {
    super(...e), this.identifier = "islamic-tbla"
  }
}

function eq(e) {
  return 460322 + o[e - 1300]
}

function eZ(e, t) {
  return (r[e - 1300] & 1 << 11 - (t - 1)) == 0 ? 29 : 30
}

function eY(e, t) {
  let n = eq(e);
  for (let r = 1; r < t; r++) n += eZ(e, r);
  return n
}

function eX(e) {
  return o[e + 1 - 1300] - o[e - 1300]
}
class eJ extends eG {
  fromJulianDay(e) {
    let t = e - 1948440,
      n = eq(1300),
      r = eq(1600);
    if (t < n || t > r) return super.fromJulianDay(e);
    {
      let e = 1299,
        n = 1,
        r = 1;
      for (; r > 0;) {
        r = t - eq(++e) + 1;
        let o = eX(e);
        if (r === o) {
          n = 12;
          break
        }
        if (r < o) {
          let t = eZ(e, n);
          for (n = 1; r > t;) r -= t, t = eZ(e, ++n);
          break
        }
      }
      return new ey(this, e, n, t - eY(e, n) + 1)
    }
  }
  toJulianDay(e) {
    return e.year < 1300 || e.year > 1600 ? super.toJulianDay(e) : 1948440 + eY(e.year, e.month) + (e.day - 1)
  }
  getDaysInMonth(e) {
    return e.year < 1300 || e.year > 1600 ? super.getDaysInMonth(e) : eZ(e.year, e.month)
  }
  getDaysInYear(e) {
    return e.year < 1300 || e.year > 1600 ? super.getDaysInYear(e) : eX(e.year)
  }
  constructor() {
    if (super(), this.identifier = "islamic-umalqura", !r && (r = new Uint16Array(Uint8Array.from(atob("qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI="), e => e.charCodeAt(0)).buffer)), !o) {
      o = new Uint32Array(301);
      let e = 0;
      for (let t = 1300; t <= 1600; t++) {
        o[t - 1300] = e;
        for (let n = 1; n <= 12; n++) e += eZ(t, n)
      }
    }
  }
}
let e$ = 25920,
  eQ = 29 * e$ + 13753;

function e0(e) {
  return 7 > i(7 * e + 1, 19)
}

function e1(e) {
  let t = Math.floor((235 * e - 234) / 19),
    n = 29 * t + Math.floor((12084 + 13753 * t) / 25920);
  return 3 > i(3 * (n + 1), 7) && (n += 1), n
}

function e2(e) {
  var t;
  let n, r;
  return e1(e) + (n = e1((t = e) - 1), r = e1(t), e1(t + 1) - r == 356 ? 2 : r - n == 382 ? 1 : 0)
}

function e3(e) {
  return e2(e + 1) - e2(e)
}

function e4(e, t) {
  if (t >= 6 && !e0(e) && t++, 4 === t || 7 === t || 9 === t || 11 === t || 13 === t) return 29;
  let n = function(e) {
    let t = e3(e);
    switch (t > 380 && (t -= 30), t) {
      case 353:
        return 0;
      case 354:
        return 1;
      case 355:
        return 2
    }
  }(e);
  return 2 === t ? 2 === n ? 30 : 29 : 3 === t ? 0 === n ? 29 : 30 : 6 === t ? e0(e) ? 30 : 0 : 30
}
class e8 {
  fromJulianDay(e) {
    let t = e - 347997,
      n = Math.floor((19 * (t * e$ / eQ) + 234) / 235) + 1,
      r = e2(n),
      o = Math.floor(t - r);
    for (; o < 1;) o = Math.floor(t - (r = e2(--n)));
    let a = 1,
      i = 0;
    for (; i < o;) i += e4(n, a), a++;
    let s = o - (i -= e4(n, --a));
    return new ey(this, n, a, s)
  }
  toJulianDay(e) {
    let t = e2(e.year);
    for (let n = 1; n < e.month; n++) t += e4(e.year, n);
    return t + e.day + 347997
  }
  getDaysInMonth(e) {
    return e4(e.year, e.month)
  }
  getMonthsInYear(e) {
    return e0(e.year) ? 13 : 12
  }
  getDaysInYear(e) {
    return e3(e.year)
  }
  getYearsInEra() {
    return 9999
  }
  getEras() {
    return ["AM"]
  }
  balanceYearMonth(e, t) {
    t.year !== e.year && (e0(t.year) && !e0(e.year) && t.month > 6 ? e.month-- : !e0(t.year) && e0(e.year) && t.month > 6 && e.month++)
  }
  constructor() {
    this.identifier = "hebrew"
  }
}

function e5(e, t, n, r) {
  return e + 365 * t + Math.floor(t / 4) + 30 * (n - 1) + r - 1
}

function e6(e, t) {
  let n = Math.floor(4 * (t - e) / 1461),
    r = 1 + Math.floor((t - e5(e, n, 1, 1)) / 30),
    o = t + 1 - e5(e, n, r, 1);
  return [n, r, o]
}

function e7(e) {
  return Math.floor(e % 4 / 3)
}

function e9(e, t) {
  return t % 13 != 0 ? 30 : e7(e) + 5
}
class te {
  fromJulianDay(e) {
    let [t, n, r] = e6(1723856, e), o = "AM";
    return t <= 0 && (o = "AA", t += 5500), new ey(this, o, t, n, r)
  }
  toJulianDay(e) {
    let t = e.year;
    return "AA" === e.era && (t -= 5500), e5(1723856, t, e.month, e.day)
  }
  getDaysInMonth(e) {
    return e9(e.year, e.month)
  }
  getMonthsInYear() {
    return 13
  }
  getDaysInYear(e) {
    return 365 + e7(e.year)
  }
  getYearsInEra(e) {
    return "AA" === e.era ? 9999 : 9991
  }
  getEras() {
    return ["AA", "AM"]
  }
  constructor() {
    this.identifier = "ethiopic"
  }
}
class tt extends te {
  fromJulianDay(e) {
    let [t, n, r] = e6(1723856, e);
    return new ey(this, "AA", t += 5500, n, r)
  }
  getEras() {
    return ["AA"]
  }
  getYearsInEra() {
    return 9999
  }
  constructor(...e) {
    super(...e), this.identifier = "ethioaa"
  }
}
class tn extends te {
  fromJulianDay(e) {
    let [t, n, r] = e6(1824665, e), o = "CE";
    return t <= 0 && (o = "BCE", t = 1 - t), new ey(this, o, t, n, r)
  }
  toJulianDay(e) {
    let t = e.year;
    return "BCE" === e.era && (t = 1 - t), e5(1824665, t, e.month, e.day)
  }
  getDaysInMonth(e) {
    let t = e.year;
    return "BCE" === e.era && (t = 1 - t), e9(t, e.month)
  }
  isInverseEra(e) {
    return "BCE" === e.era
  }
  balanceDate(e) {
    e.year <= 0 && (e.era = "BCE" === e.era ? "CE" : "BCE", e.year = 1 - e.year)
  }
  getEras() {
    return ["BCE", "CE"]
  }
  getYearsInEra(e) {
    return "BCE" === e.era ? 9999 : 9715
  }
  constructor(...e) {
    super(...e), this.identifier = "coptic"
  }
}

function tr(e) {
  switch (e) {
    case "buddhist":
      return new eA;
    case "ethiopic":
      return new te;
    case "ethioaa":
      return new tt;
    case "coptic":
      return new tn;
    case "hebrew":
      return new e8;
    case "indian":
      return new eV;
    case "islamic-civil":
      return new eG;
    case "islamic-tbla":
      return new eW;
    case "islamic-umalqura":
      return new eJ;
    case "japanese":
      return new eO;
    case "persian":
      return new ez;
    case "roc":
      return new eF;
    default:
      return new p
  }
}
let to = new Map;
class ta {
  format(e) {
    return this.formatter.format(e)
  }
  formatToParts(e) {
    return this.formatter.formatToParts(e)
  }
  formatRange(e, t) {
    if ("function" == typeof this.formatter.formatRange) return this.formatter.formatRange(e, t);
    if (t < e) throw RangeError("End date must be >= start date");
    return "".concat(this.formatter.format(e), " – ").concat(this.formatter.format(t))
  }
  formatRangeToParts(e, t) {
    if ("function" == typeof this.formatter.formatRangeToParts) return this.formatter.formatRangeToParts(e, t);
    if (t < e) throw RangeError("End date must be >= start date");
    let n = this.formatter.formatToParts(e),
      r = this.formatter.formatToParts(t);
    return [...n.map(e => ({
      ...e,
      source: "startRange"
    })), {
      type: "literal",
      value: " – ",
      source: "shared"
    }, ...r.map(e => ({
      ...e,
      source: "endRange"
    }))]
  }
  resolvedOptions() {
    let e = this.formatter.resolvedOptions();
    return function() {
      return null == tl && (tl = "h12" === new Intl.DateTimeFormat("fr", {
        hour: "numeric",
        hour12: !1
      }).resolvedOptions().hourCycle), tl
    }() && (!this.resolvedHourCycle && (this.resolvedHourCycle = function(e, t) {
      if (!t.timeStyle && !t.hour) return;
      e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, "");
      let n = ts(e += (e.includes("-u-") ? "" : "-u") + "-nu-latn", {
          ...t,
          timeZone: void 0
        }),
        r = parseInt(n.formatToParts(new Date(2020, 2, 3, 0)).find(e => "hour" === e.type).value, 10),
        o = parseInt(n.formatToParts(new Date(2020, 2, 3, 23)).find(e => "hour" === e.type).value, 10);
      if (0 === r && 23 === o) return "h23";
      if (24 === r && 23 === o) return "h24";
      if (0 === r && 11 === o) return "h11";
      if (12 === r && 11 === o) return "h12";
      throw Error("Unexpected hour cycle result")
    }(e.locale, this.options)), e.hourCycle = this.resolvedHourCycle, e.hour12 = "h11" === this.resolvedHourCycle || "h12" === this.resolvedHourCycle), "ethiopic-amete-alem" === e.calendar && (e.calendar = "ethioaa"), e
  }
  constructor(e, t = {}) {
    this.formatter = ts(e, t), this.options = t
  }
}
let ti = {
  true: {
    ja: "h11"
  },
  false: {}
};

function ts(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  if ("boolean" == typeof t.hour12 && function() {
      return null == tc && (tc = "24" === new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        hour12: !1
      }).format(new Date(2020, 2, 3, 0))), tc
    }()) {
    let n = ti[String((t = {
        ...t
      }).hour12)][e.split("-")[0]],
      r = t.hour12 ? "h12" : "h23";
    t.hourCycle = null != n ? n : r, delete t.hour12
  }
  let n = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
  if (to.has(n)) return to.get(n);
  let r = new Intl.DateTimeFormat(e, t);
  return to.set(n, r), r
}
let tc = null,
  tl = null