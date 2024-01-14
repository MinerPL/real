"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("37983");
n("884691");
var i = n("446674"),
  l = n("77078"),
  s = n("819689"),
  u = n("300322"),
  r = n("271938"),
  d = n("987772"),
  o = n("61400"),
  c = n("782340");

function f(e, t) {
  let n = (0, i.useStateFromStores)([r.default], () => r.default.getId()),
    f = (0, u.useIsActiveChannelOrUnarchivableThread)(t),
    E = (0, u.useIsNonModInLockedThread)(t);
  return (0, o.default)(e, n) && f && !E ? (0, a.jsx)(l.MenuItem, {
    id: "edit",
    label: c.default.Messages.EDIT_MESSAGE,
    action: () => s.default.startEditMessage(t.id, e.id, e.content),
    icon: d.default
  }) : null
}