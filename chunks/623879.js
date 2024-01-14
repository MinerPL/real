"use strict";
a.r(t), a.d(t, {
  default: function() {
    return r
  }
});
var i = a("37983");
a("884691");
var n = a("446674"),
  l = a("77078"),
  d = a("287585"),
  u = a("824563"),
  s = a("49111"),
  o = a("782340");

function r(e) {
  let t = (0, n.useStateFromStores)([u.default], () => (0, d.default)(u.default.findActivity(e, e => e.type === s.ActivityTypes.STREAMING)), [e]);
  return null == t ? null : (0, i.jsx)(l.MenuItem, {
    id: "watch-stream",
    label: o.default.Messages.WATCH_STREAM,
    action: () => window.open(t, "_blank")
  })
}