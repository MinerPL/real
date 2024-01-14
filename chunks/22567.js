"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("446674"),
  i = n("393027"),
  r = n("305961"),
  o = n("471671"),
  u = n("674644"),
  d = n("21841"),
  c = n("198442");

function f(e) {
  let {
    guildId: t
  } = e, n = a.useMemo(() => (0, u.createGuildNode)(t), [t]), f = (0, s.useStateFromStores)([r.default], () => r.default.getGuild(t)), h = (0, s.useStateFromStores)([o.default], () => o.default.isFocused()), C = t === (0, i.default)(e => {
    let {
      guildId: t
    } = e;
    return t
  }), p = (0, d.default)(t);
  return null == f ? null : (0, l.jsx)(c.default, {
    guildNode: n,
    guild: f,
    animatable: h,
    selected: C,
    draggable: !1,
    mediaState: p
  })
}