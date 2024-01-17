"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("222007");
var i = n("884691"),
  s = n("446674"),
  a = n("817963"),
  l = n("923959"),
  u = n("305961"),
  d = n("957255"),
  o = n("49111"),
  r = (e, t) => {
    let n = (0, s.useStateFromStores)([u.default], () => u.default.getGuild(e), [e]),
      {
        canCreateGuildEvent: r
      } = (0, a.useManageResourcePermissions)(n),
      c = (0, s.useStateFromStores)([l.default], () => l.default.getChannels(e)[l.GUILD_VOCAL_CHANNELS_KEY], [e]),
      f = i.useMemo(() => null != t ? c.filter(e => {
        let {
          channel: n
        } = e;
        return n.type === t
      }) : c, [c, t]),
      S = (0, s.useStateFromStores)([d.default], () => {
        if (d.default.can(o.Permissions.ADMINISTRATOR, n) || r) return !0;
        for (let {
            channel: e
          }
          of f) {
          let {
            canCreateGuildEvent: t
          } = (0, a.getManageResourcePermissions)(e);
          if (t) return !0
        }
        return !1
      }, [f, n, r]);
    return S
  }