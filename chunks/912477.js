"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("37983");
s("884691");
var n = s("446674"),
  l = s("102985"),
  i = s("900938"),
  r = s("758085");

function o() {
  let e = (0, n.useStateFromStores)([l.default], () => l.default.hideInstantInvites),
    {
      invites: t,
      guild: s
    } = (0, n.useStateFromStoresObject)([i.default], () => i.default.getProps(), []);
  return (0, a.jsx)(r.default, {
    invites: t,
    guild: s,
    showChannel: !0,
    hide: e
  })
}