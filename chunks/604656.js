"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("37983");
n("884691");
var l = n("77078"),
  i = n("263024"),
  u = n("300322"),
  r = n("49111"),
  s = n("782340");

function d(e) {
  var t, n;
  let d = (0, u.useIsThreadModerator)(e);
  if (!d || e.type !== r.ChannelTypes.PRIVATE_THREAD) return null;
  let o = null === (n = null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.invitable) || void 0 === n || n;
  return (0, a.jsx)(l.MenuCheckboxItem, {
    id: "toggle-thread-invitable",
    label: s.default.Messages.THREAD_INVITABLE_TOGGLE_LABEL,
    checked: o,
    action: () => i.default.setInvitable(e, !o)
  })
}