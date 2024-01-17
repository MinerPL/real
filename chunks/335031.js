"use strict";
l.r(r), l.d(r, {
  default: function() {
    return u
  }
});
var t = l("884691"),
  o = l("656280"),
  i = l.n(o),
  n = l("509043"),
  a = l("446674"),
  s = l("206230"),
  u = e => {
    let r = (0, a.useStateFromStores)([s.default], () => s.default.desaturateUserColors ? s.default.saturation : 1),
      l = (0, t.useMemo)(() => {
        let {
          h: l,
          s: t,
          l: o
        } = i((0, n.int2hex)(e)).toHsl(), a = i({
          h: l,
          s: t * r,
          l: o
        });
        return {
          hex: a.toHexString(),
          hsl: a.toHslString()
        }
      }, [e, r]);
    return l
  }