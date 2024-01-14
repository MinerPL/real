"use strict";
l.r(t), l.d(t, {
  default: function() {
    return o
  }
}), l("222007");
var n = l("884691"),
  a = l("446674"),
  s = l("817963"),
  r = l("923959"),
  i = l("305961"),
  u = l("957255"),
  d = l("49111"),
  o = (e, t) => {
    let l = (0, a.useStateFromStores)([i.default], () => i.default.getGuild(e), [e]),
      {
        canCreateGuildEvent: o
      } = (0, s.useManageResourcePermissions)(l),
      c = (0, a.useStateFromStores)([r.default], () => r.default.getChannels(e)[r.GUILD_VOCAL_CHANNELS_KEY], [e]),
      E = n.useMemo(() => null != t ? c.filter(e => {
        let {
          channel: l
        } = e;
        return l.type === t
      }) : c, [c, t]),
      f = (0, a.useStateFromStores)([u.default], () => {
        if (u.default.can(d.Permissions.ADMINISTRATOR, l) || o) return !0;
        for (let {
            channel: e
          }
          of E) {
          let {
            canCreateGuildEvent: t
          } = (0, s.getManageResourcePermissions)(e);
          if (t) return !0
        }
        return !1
      }, [E, l, o]);
    return f
  }