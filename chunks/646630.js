"use strict";
n.r(t), n.d(t, {
  TIMESTAMP_FORMATS: function() {
    return o
  },
  DEFAULT_TIMESTAMP_FORMAT: function() {
    return d
  },
  TIMESTAMP_REGEX: function() {
    return l
  },
  parseTimestamp: function() {
    return f
  },
  unparseTimestamp: function() {
    return _
  }
});
var s = n("866227"),
  i = n.n(s),
  r = n("888400"),
  a = n("718517");
let o = {
    t: e => (0, r.dateFormat)(e, "LT"),
    T: e => (0, r.dateFormat)(e, "LTS"),
    d: e => (0, r.dateFormat)(e, "L"),
    D: e => (0, r.dateFormat)(e, "LL"),
    f: e => (0, r.dateFormat)(e, "LLL"),
    F: e => (0, r.dateFormat)(e, "LLLL"),
    R: e => {
      let t = i.relativeTimeThreshold("s");
      i.relativeTimeThreshold("s", 60);
      let n = i.relativeTimeThreshold("ss");
      i.relativeTimeThreshold("ss", -1);
      let s = i.relativeTimeThreshold("m");
      i.relativeTimeThreshold("m", 60);
      let r = null;
      try {
        r = i(e.toDate()).fromNow()
      } catch (e) {}
      return i.relativeTimeThreshold("s", t), i.relativeTimeThreshold("ss", n), i.relativeTimeThreshold("m", s), null != r ? r : i(e.toDate()).fromNow()
    }
  },
  d = "f";
Object.setPrototypeOf(o, null);
let u = Object.keys(o).join("|"),
  l = new RegExp("^<t:(-?\\d{1,17})(?::(".concat(u, "))?>"));

function f(e, t) {
  let n = i(Number(e) * a.default.Millis.SECOND);
  if (!n.isValid()) return null;
  let s = null != t ? o[t] : void 0;
  return null == s && (s = o[d]), {
    timestamp: e,
    format: t,
    parsed: n,
    full: o.F(n),
    formatted: s(n)
  }
}

function _(e, t) {
  return null != t ? "<t:".concat(e, ":").concat(t, ">") : "<t:".concat(e, ">")
}