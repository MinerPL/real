"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("37983");
n("884691");
var u = n("446674"),
  r = n("77078"),
  i = n("450911"),
  l = n("42203"),
  s = n("697218"),
  d = n("782340");

function o(e, t) {
  let n = (0, u.useStateFromStores)([s.default], () => s.default.getCurrentUser(), []),
    o = (0, u.useStateFromStores)([l.default], () => l.default.getChannel(t), [t]);
  return null == o || o.isOwner(e) || null == n || !o.isOwner(n.id) ? null : (0, a.jsx)(r.MenuItem, {
    id: "remove",
    label: d.default.Messages.REMOVE_FROM_GROUP,
    action: () => i.default.removeRecipient(t, e),
    color: "danger"
  })
}