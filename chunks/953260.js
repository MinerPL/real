"use strict";
n.r(t), n.d(t, {
  JUMP_TO_GUILD: function() {
    return f
  }
}), n("424973");
var i = n("379881"),
  r = n("15131"),
  s = n("393414"),
  a = n("239380"),
  o = n("42203"),
  l = n("957255"),
  u = n("162771"),
  c = n("677099"),
  d = n("49111");
let f = {
  binds: (() => {
    let e = [];
    for (let t = 1; t < 10; t++) e.push("mod+".concat(t));
    return e
  })(),
  comboKeysBindGlobal: !0,
  action(e, t) {
    let n, f = parseInt(t.split("+")[1], 10);
    if (0 === f && (f = 10), !isNaN(f) && 0 !== f) {
      if (null != (n = 1 === f ? d.ME : (0, r.isFavoritesGuildVisible)(i.default, o.default, l.default) ? 2 === f ? d.FAVORITES : c.default.getFlattenedGuildIds()[f - 3] : c.default.getFlattenedGuildIds()[f - 2])) return n === d.ME && null == u.default.getGuildId() ? ((0, s.transitionTo)(d.Routes.CHANNEL(n)), !1) : ((0, a.transitionToGuild)(n), !1)
    }
  }
}