"use strict";
n.r(t), n.d(t, {
  isTablet: function() {
    return m
  },
  isMobile: function() {
    return T
  },
  isIOSWeb: function() {
    return g
  }
}), n("222007");
var i, r, s, a, o, l, u, c, d, f, E = n("383536"),
  h = n.n(E);
let p = new Set(["iPad", "Kindle", "Kindle Fire", "Nook", "PlayBook"]),
  _ = new Set(["Android", "iOS", "Windows Phone"]),
  S = (null === (r = window) || void 0 === r ? void 0 : null === (i = r.navigator) || void 0 === i ? void 0 : i.platform) === "MacIntel" && void 0 !== (null === (a = window) || void 0 === a ? void 0 : null === (s = a.navigator) || void 0 === s ? void 0 : s.standalone) && (null === (l = window) || void 0 === l ? void 0 : null === (o = l.navigator) || void 0 === o ? void 0 : o.maxTouchPoints) > 1,
  m = p.has(null !== (d = h.product) && void 0 !== d ? d : "") || S,
  T = !m && _.has(null !== (f = null == h ? void 0 : null === (u = h.os) || void 0 === u ? void 0 : u.family) && void 0 !== f ? f : ""),
  g = (null == h ? void 0 : null === (c = h.os) || void 0 === c ? void 0 : c.family) === "iOS"