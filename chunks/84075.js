"use strict";
n.r(t), n.d(t, {
  unwrapArray: function() {
    return a
  },
  safeInvoke: function() {
    return o
  },
  setRef: function() {
    return i
  },
  fromEntries: function() {
    return s
  },
  useIsomorphicLayoutEffect: function() {
    return u
  }
}), n("808653");
var r = n("884691"),
  a = function(e) {
    return Array.isArray(e) ? e[0] : e
  },
  o = function(e) {
    if ("function" == typeof e) {
      for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
      return e.apply(void 0, n)
    }
  },
  i = function(e, t) {
    if ("function" == typeof e) return o(e, t);
    null != e && (e.current = t)
  },
  s = function(e) {
    return e.reduce(function(e, t) {
      var n = t[0],
        r = t[1];
      return e[n] = r, e
    }, {})
  },
  u = "undefined" != typeof window && window.document && window.document.createElement ? r.useLayoutEffect : r.useEffect