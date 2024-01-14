"use strict";
n.r(t), n.d(t, {
  useSoundButtonContextMenu: function() {
    return u
  }
});
var l = n("37983"),
  i = n("884691"),
  r = n("272030"),
  o = n("305961"),
  s = n("697218"),
  a = n("719923");

function u(e, t) {
  return i.useCallback(i => {
    i.stopPropagation();
    let u = o.default.getGuild(e.guildId),
      d = s.default.getCurrentUser();
    (null != u || a.default.canUseCustomCallSounds(d)) && ! function(e, t, i, o) {
      let u = s.default.getCurrentUser();
      (null != t || a.default.canUseCustomCallSounds(u)) && (0, r.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("632507").then(n.bind(n, "632507"));
        return n => (0, l.jsx)(e, {
          ...n,
          soundGuild: t,
          activeCallGuildId: o,
          sound: i
        })
      })
    }(i, u, e, t)
  }, [e, t])
}