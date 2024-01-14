"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("37983");
n("884691");
var a = n("272030"),
  s = n("459736"),
  i = n("393414"),
  r = n("708402"),
  o = n("49111"),
  u = n("724210"),
  d = n("782340");

function c(e) {
  let {
    guild: t,
    selected: c
  } = e;
  return (0, l.jsx)(r.default, {
    renderIcon: e => (0, l.jsx)(s.default, {
      className: e
    }),
    text: d.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
    selected: c,
    onClick: () => {
      (0, i.transitionTo)(o.Routes.CHANNEL(t.id, u.StaticChannelRoute.ROLE_SUBSCRIPTIONS))
    },
    onContextMenu: e => {
      null != t && (0, a.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("867195").then(n.bind(n, "867195"));
        return n => (0, l.jsx)(e, {
          ...n,
          guild: t
        })
      })
    }
  })
}