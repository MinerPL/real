"use strict";
n.r(e), n.d(e, {
  safeJoin: function() {
    return a
  },
  stringMatchesSomePattern: function() {
    return s
  },
  truncate: function() {
    return i
  }
}), n("424973");
var r = n("106145");

function i(t) {
  let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  return "string" != typeof t || 0 === e ? t : t.length <= e ? t : "".concat(t.slice(0, e), "...")
}

function a(t, e) {
  if (!Array.isArray(t)) return "";
  let n = [];
  for (let e = 0; e < t.length; e++) {
    let r = t[e];
    try {
      n.push(String(r))
    } catch (t) {
      n.push("[value cannot be serialized]")
    }
  }
  return n.join(e)
}

function s(t) {
  let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return e.some(e => (function(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return !!(0, r.isString)(t) && ((0, r.isRegExp)(e) ? e.test(t) : !!(0, r.isString)(e) && (n ? t === e : t.includes(e)))
  })(t, e, n))
}