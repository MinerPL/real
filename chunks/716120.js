"use strict";
a.r(t), a.d(t, {
  default: function() {
    return C
  }
});
var l = a("37983");
a("884691");
var s = a("414456"),
  r = a.n(s),
  n = a("65597"),
  o = a("854588"),
  i = a("206230"),
  u = a("284679"),
  c = a("491232"),
  d = a("408381"),
  f = a("268779"),
  C = e => {
    let {
      asset: t,
      size: a = d.MAX_CONTENT_WIDTH,
      className: s,
      style: C,
      children: E
    } = e, m = (0, n.default)([i.default], () => i.default.saturation);
    return (0, l.jsx)("div", {
      className: r(f.banner, s),
      style: (() => {
        if (null == t) return C;
        let e = (0, c.getCollectiblesAssetURL)(t, {
          size: a,
          format: "jpg"
        });
        if (1 === m) return {
          ...C,
          backgroundImage: "url(".concat(e, ")"),
          backgroundSize: "cover"
        };
        let l = (0, u.hexOpacityToRgba)(o.default.unsafe_rawColors.BLACK_500, 1 - m);
        return {
          ...C,
          backgroundImage: "linear-gradient(".concat(l, ", ").concat(l, "), url(").concat(e, ")"),
          backgroundBlendMode: "saturation",
          backgroundSize: "cover"
        }
      })(),
      children: E
    })
  }