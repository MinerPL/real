"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("808653");
var r = n("195548"),
  a = n("697309"),
  o = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function(e) {
      var t = e.state,
        n = e.options,
        o = e.name,
        i = n.offset,
        s = void 0 === i ? [0, 0] : i,
        u = a.placements.reduce(function(e, n) {
          var o, i, u, l, c, d, f, p;
          return e[n] = (o = n, i = t.rects, u = s, l = (0, r.default)(o), c = [(0, a.left), (0, a.top)].indexOf(l) >= 0 ? -1 : 1, f = (d = "function" == typeof u ? u(Object.assign({}, i, {
            placement: o
          })) : u)[0], p = d[1], f = f || 0, p = (p || 0) * c, [(0, a.left), (0, a.right)].indexOf(l) >= 0 ? {
            x: p,
            y: f
          } : {
            x: f,
            y: p
          }), e
        }, {}),
        l = u[t.placement],
        c = l.x,
        d = l.y;
      null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += d), t.modifiersData[o] = u
    }
  }