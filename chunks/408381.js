"use strict";
a.r(t), a.d(t, {
  MAX_CONTENT_WIDTH: function() {
    return n
  },
  getAssetSizeByHeight: function() {
    return i
  },
  getLogoSize: function() {
    return o
  },
  getBackgroundGradient: function() {
    return c
  },
  getConfettiSprites: function() {
    return f
  }
});
var l = a("635058"),
  s = a("547630"),
  r = a("172858");
let n = 1060,
  i = e => e * (0, s.default)(),
  o = e => 3.8 * e,
  c = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
      {
        primary: a,
        secondary: l
      } = e;
    return "linear-gradient(".concat(t, "deg, ").concat(a.toHslString(), ", ").concat(l.toHslString(), ")")
  },
  u = r.COMMON_CONFETTI_SPRITES.filter((e, t) => 1 !== t && 7 !== t),
  d = {
    ["".concat(l.CollectiblesCategorySkuId.FANTASY)]: [a("655029"), a("290216")],
    ["".concat(l.CollectiblesCategorySkuId.ANIME)]: [a("597704"), a("714293")],
    ["".concat(l.CollectiblesCategorySkuId.BREAKFAST)]: [a("286642"), a("94646")],
    ["".concat(l.CollectiblesCategorySkuId.HALLOWEEN)]: [a("638538"), a("861485")],
    ["".concat(l.CollectiblesCategorySkuId.FALL)]: [a("740683"), a("489847")],
    ["".concat(l.CollectiblesCategorySkuId.WINTER)]: [a("770704"), a("165057")],
    ["".concat(l.CollectiblesCategorySkuId.MONSTERS)]: [a("330825"), a("125221")]
  },
  f = e => {
    var t;
    return null == e ? u : null !== (t = d[e]) && void 0 !== t ? t : u
  }