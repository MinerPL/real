"use strict";
n.r(e), n.d(e, {
  BAGGAGE_HEADER_NAME: function() {
    return a
  },
  baggageHeaderToDynamicSamplingContext: function() {
    return c
  },
  dynamicSamplingContextToSentryBaggageHeader: function() {
    return l
  }
}), n("808653"), n("222007");
var r = n("106145"),
  i = n("587254");
let a = "baggage",
  s = "sentry-",
  o = /^sentry-/;

function c(t) {
  if (!(0, r.isString)(t) && !Array.isArray(t)) return;
  let e = {};
  if (Array.isArray(t)) e = t.reduce((t, e) => {
    let n = u(e);
    return {
      ...t,
      ...n
    }
  }, {});
  else {
    if (!t) return;
    e = u(t)
  }
  let n = Object.entries(e).reduce((t, e) => {
    let [n, r] = e;
    if (n.match(o)) {
      let e = n.slice(s.length);
      t[e] = r
    }
    return t
  }, {});
  return Object.keys(n).length > 0 ? n : void 0
}

function l(t) {
  if (!t) return;
  let e = Object.entries(t).reduce((t, e) => {
    let [n, r] = e;
    return r && (t["".concat(s).concat(n)] = r), t
  }, {});
  return function(t) {
    if (0 !== Object.keys(t).length) return Object.entries(t).reduce((t, e, n) => {
      let [r, a] = e, s = "".concat(encodeURIComponent(r), "=").concat(encodeURIComponent(a)), o = 0 === n ? s : "".concat(t, ",").concat(s);
      return o.length > 8192 ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("Not adding key: ".concat(r, " with val: ").concat(a, " to baggage header due to exceeding baggage size limits.")), t) : o
    }, "")
  }(e)
}

function u(t) {
  return t.split(",").map(t => t.split("=").map(t => decodeURIComponent(t.trim()))).reduce((t, e) => {
    let [n, r] = e;
    return t[n] = r, t
  }, {})
}