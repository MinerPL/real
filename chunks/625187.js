"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var i = n("37983");
n("884691");
var l = n("446674"),
  u = n("77078"),
  o = n("305961"),
  r = n("697218"),
  a = n("782340");

function s(e, t) {
  let s = (0, l.useStateFromStores)([r.default], () => r.default.getCurrentUser()),
    d = (0, l.useStateFromStores)([o.default], () => o.default.getGuild(t));
  return null == d || null == s || e.id === d.ownerId || e.bot || !d.isOwnerWithRequiredMfaLevel(s) ? null : (0, i.jsx)(u.MenuItem, {
    id: "transfer-ownership",
    color: "danger",
    label: a.default.Messages.TRANSFER_OWNERSHIP,
    action: () => (0, u.openModalLazy)(async () => {
      let {
        default: t
      } = await n.el("878551").then(n.bind(n, "878551"));
      return n => (0, i.jsx)(t, {
        ...n,
        guild: d,
        fromUser: s,
        toUser: e
      })
    })
  })
}