"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("37983");
s("884691");
var n = s("77078"),
  l = s("300322"),
  i = s("993477"),
  d = s("456936"),
  r = s("782340");

function u(e, t) {
  let s = (0, l.useIsActiveChannelOrUnarchivableThread)(t);
  return s ? (0, a.jsx)(n.MenuItem, {
    id: "mark-unread",
    label: r.default.Messages.MARK_UNREAD,
    action: () => (0, d.default)(t.id, e.id),
    icon: i.default
  }) : null
}