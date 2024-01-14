"use strict";
n.r(t), n.d(t, {
  useControlledState: function() {
    return o
  },
  clamp: function() {
    return a
  },
  snapValueToStep: function() {
    return i
  }
}), n("222007");
var r = n("884691");

function o(e, t, n) {
  let [o, a] = (0, r.useState)(e || t), i = (0, r.useRef)(void 0 !== e), s = void 0 !== e;
  (0, r.useEffect)(() => {
    let e = i.current;
    e !== s && console.warn("WARN: A component changed from ".concat(e ? "controlled" : "uncontrolled", " to ").concat(s ? "controlled" : "uncontrolled", ".")), i.current = s
  }, [s]);
  let c = s ? e : o,
    l = (0, r.useCallback)(function(e) {
      for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
      let i = function(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
        n && !Object.is(c, e) && n(e, ...r), !s && (c = e)
      };
      if ("function" == typeof e) {
        console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320");
        a(function(t) {
          for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
          let l = e(s ? c : t, ...o);
          return (i(l, ...r), s) ? t : l
        })
      } else !s && a(e), i(e, ...r)
    }, [s, c, n]);
  return [c, l]
}

function a(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0;
  return Math.min(Math.max(e, t), n)
}

function i(e, t, n, r) {
  let o = (e - (isNaN(t) ? 0 : t)) % r,
    a = 2 * Math.abs(o) >= r ? e + Math.sign(o) * (r - Math.abs(o)) : e - o;
  isNaN(t) ? !isNaN(n) && a > n && (a = Math.floor(n / r) * r) : a < t ? a = t : !isNaN(n) && a > n && (a = t + Math.floor((n - t) / r) * r);
  let i = r.toString(),
    s = i.indexOf("."),
    c = s >= 0 ? i.length - s : 0;
  if (c > 0) {
    let e = Math.pow(10, c);
    a = Math.round(a * e) / e
  }
  return a
}