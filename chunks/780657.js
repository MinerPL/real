"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var u = n("37983");
n("884691");
var a = n("446674"),
  r = n("77078"),
  s = n("828986"),
  l = n("249561"),
  i = n("957255"),
  c = n("566998"),
  d = n("327054"),
  o = n("49111"),
  f = n("782340");

function h(e, t) {
  let n = (0, a.useStateFromStores)([i.default], () => i.default.can(o.Permissions.MANAGE_MESSAGES, t), [t]);
  return e.state !== o.MessageStates.SEND_FAILED && (0, d.default)(e, t, n) ? !1 === e.pinned ? (0, u.jsx)(r.MenuItem, {
    id: "pin",
    action: function(n) {
      n.shiftKey ? s.default.pinMessage(t, e.id) : l.default.confirmPin(t, e)
    },
    label: f.default.Messages.PIN_MESSAGE,
    icon: c.default
  }) : (0, u.jsx)(r.MenuItem, {
    id: "unpin",
    action: function(n) {
      n.shiftKey ? s.default.unpinMessage(t, e.id) : l.default.confirmUnpin(t, e)
    },
    label: f.default.Messages.UNPIN_MESSAGE,
    icon: c.default
  }) : null
}