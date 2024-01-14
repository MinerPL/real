"use strict";
r.r(t), r.d(t, {
  default: function() {
    return u
  }
});
var l = r("884691"),
  i = r("656280"),
  o = r.n(i),
  n = r("509043"),
  s = r("446674"),
  a = r("206230"),
  u = e => {
    let t = (0, s.useStateFromStores)([a.default], () => a.default.desaturateUserColors ? a.default.saturation : 1),
      r = (0, l.useMemo)(() => {
        let {
          h: r,
          s: l,
          l: i
        } = o((0, n.int2hex)(e)).toHsl(), s = o({
          h: r,
          s: l * t,
          l: i
        });
        return {
          hex: s.toHexString(),
          hsl: s.toHslString()
        }
      }, [e, t]);
    return r
  }