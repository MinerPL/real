"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
});
var a = s("37983");
s("884691");
var n = s("446674"),
  l = s("77078"),
  i = s("819689"),
  d = s("249561"),
  r = s("300322"),
  u = s("957255"),
  o = s("697218"),
  c = s("228220"),
  f = s("49111"),
  E = s("782340");

function g(e, t) {
  let s = (0, n.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
    g = (0, r.useIsActiveChannelOrUnarchivableThread)(t),
    M = (0, n.useStateFromStores)([u.default], () => u.default.can(f.Permissions.MANAGE_MESSAGES, t), [t]);
  return e.state !== f.MessageStates.SENDING && (e.author.id === (null == s ? void 0 : s.id) || M) && e.type in f.MessageTypesDeletable && g ? (0, a.jsx)(l.MenuItem, {
    id: "delete",
    label: E.default.Messages.DELETE_MESSAGE,
    action: function(s) {
      e.state === f.MessageStates.SEND_FAILED ? i.default.deleteMessage(t.id, e.id, !0) : s.shiftKey ? i.default.deleteMessage(t.id, e.id) : d.default.confirmDelete(t, e, !0)
    },
    color: "danger",
    icon: c.default
  }) : null
}