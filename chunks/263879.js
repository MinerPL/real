"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("37983");
n("884691");
var i = n("446674"),
  l = n("77078"),
  s = n("404118"),
  u = n("562228"),
  r = n("166257"),
  d = n("300322"),
  o = n("957255"),
  c = n("49111"),
  f = n("782340");

function E(e, t) {
  let n = (0, d.useIsActiveChannelOrUnarchivableThread)(t),
    E = (0, i.useStateFromStores)([o.default], () => o.default.can(c.Permissions.MANAGE_MESSAGES, t) && n, [t, n]);
  return !E || null == e.reactions || 0 === e.reactions.length || e.isPoll() && !(0, u.hasNonVoteReactions)(e) ? null : (0, a.jsx)(l.MenuItem, {
    id: "remove-reactions",
    label: f.default.Messages.REMOVE_ALL_REACTIONS,
    action: function(n) {
      n.shiftKey ? (0, r.removeAllReactions)(t.id, e.id) : s.default.show({
        title: f.default.Messages.REMOVE_ALL_REACTIONS_CONFIRM_TITLE,
        body: f.default.Messages.REMOVE_ALL_REACTIONS_CONFIRM_BODY,
        confirmText: f.default.Messages.YES_TEXT,
        cancelText: f.default.Messages.NO_TEXT,
        onConfirm: () => {
          (0, r.removeAllReactions)(t.id, e.id)
        }
      })
    },
    color: "danger"
  })
}