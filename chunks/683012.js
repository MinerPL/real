"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007");
var l = n("884691"),
  a = n("866227"),
  s = n.n(a),
  i = n("775560"),
  r = n("718517"),
  o = n("646630");
let u = [
    [2 * r.default.Seconds.MINUTE, r.default.Seconds.SECOND],
    [5 * r.default.Seconds.MINUTE, r.default.Seconds.MINUTE],
    [45 * r.default.Seconds.MINUTE, 2 * r.default.Seconds.MINUTE],
    [21 * r.default.Seconds.HOUR, 5 * r.default.Seconds.MINUTE]
  ],
  d = 2 * r.default.Seconds.HOUR;

function c(e) {
  let t = (0, i.useForceUpdate)();
  return (l.useEffect(() => {
    if ("R" !== e.format) return;
    let n = 1e3 * d,
      l = Math.abs(e.parsed.diff(s()));
    for (let [e, t] of u)
      if (l < 1e3 * e) {
        n = 1e3 * t;
        break
      } let a = setInterval(() => {
      t()
    }, n);
    return () => clearInterval(a)
  }, [t, e.format, e.parsed]), "R" === e.format) ? o.TIMESTAMP_FORMATS.R(e.parsed) : e.formatted
}