"use strict";
l.r(t), l.d(t, {
  getRoleIconProps: function() {
    return r
  },
  useRoleIcon: function() {
    return o
  },
  useRoleIconForPreview: function() {
    return u
  }
});
var n = l("884691"),
  a = l("446674"),
  s = l("305961"),
  i = l("689226");

function r(e, t) {
  var l;
  let {
    customIconSrc: n,
    unicodeEmoji: a
  } = null !== (l = (0, i.getRoleIconData)(e, t)) && void 0 !== l ? l : {};
  if (null != n || null != a) return {
    src: n,
    name: e.name,
    roleId: e.id,
    size: t,
    unicodeEmoji: a
  }
}
let o = e => {
    let {
      guildId: t,
      roleId: l,
      size: o = 20
    } = e, u = (0, a.useStateFromStores)([s.default], () => s.default.getGuild(t));
    return n.useMemo(() => {
      if (null == u || null == l) return;
      let e = u.roles[l];
      if ((0, i.canGuildUseRoleIcons)(u, e)) return r(e, o)
    }, [u, l, o])
  },
  u = (e, t) => {
    let l = (0, a.useStateFromStores)([s.default], () => s.default.getGuild(e));
    if (null != l && (0, i.canGuildUseRoleIcons)(l, t)) return r(t)
  }