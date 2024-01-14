"use strict";
n.r(t), n.d(t, {
  useHereMentionCallback: function() {
    return f
  }
}), n("222007");
var l = n("884691"),
  i = n("917351"),
  r = n.n(i),
  o = n("666020"),
  s = n("696605"),
  a = n("217535"),
  u = n("19766");
let d = "@here";

function c(e) {
  return !!(e.length > 1) || !(1 === e.length && "GROUP" === e[0].type && "unknown" === e[0].id)
}

function f(e, t, n) {
  let i = (0, a.default)(),
    [f, p] = l.useState(!1),
    m = l.useMemo(() => r.debounce(e => {
      (function(e, t, n, l) {
        let i = u.default.getProps(n, l).groups;
        return !!c(i) || !(e.length < d.length) && !(e.length > t) && -1 !== e.indexOf(d) && ((0, o.subscribeChannel)(n, l, s.DEFAULT_RANGES), !0)
      })(e, i, t, n) && p(!0)
    }, 200, {
      maxWait: 500
    }), [i, t, n]);
  l.useEffect(() => {
    let l = u.default.getProps(t, n).groups;
    if (null != t && !c(l) && !f) return e.addListener("text-changed", m), () => {
      e.removeListener("text-changed", m), m.cancel()
    }
  }, [f, m, e, t, n])
}