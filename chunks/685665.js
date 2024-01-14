"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  s = n("714617"),
  a = n.n(s),
  o = n("917351"),
  l = n.n(o);
let u = r.createContext([]);

function c(e) {
  let {
    children: t,
    currentContext: n
  } = e;
  return (0, i.jsx)(u.Provider, {
    value: n,
    children: t
  })
}

function d(e, t) {
  if (0 === t.length) return e;
  let n = l.flatten(t);
  return [...e, ...n]
}

function f() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  let [s, o] = r.useState(t), l = r.useContext(u), f = r.useMemo(() => d(l, s), [s, l]), E = r.useMemo(() => d(l, s.slice(0, s.length - 1)), [s, l]);
  r.useEffect(() => {
    !a(t, s) && o(t)
  }, [t]);
  let h = r.useCallback(e => {
    let {
      children: t
    } = e;
    return (0, i.jsx)(c, {
      currentContext: f,
      children: t
    })
  }, [f]);
  return {
    AnalyticsLocationProvider: h,
    analyticsLocations: f,
    sourceAnalyticsLocations: E
  }
}