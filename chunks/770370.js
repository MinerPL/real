"use strict";
l.r(t), l.d(t, {
  default: function() {
    return d
  }
});
var n = l("37983");
l("884691");
var a = l("446674"),
  s = l("926994"),
  i = l("47319"),
  r = l("295999"),
  o = l("782340"),
  u = l("52638");

function d(e) {
  let {
    color: t,
    look: l,
    platform: d
  } = e, c = (0, a.useStateFromStores)([i.default], () => i.default.getAccounts().some(e => e.type === d.type));
  return c ? null : (0, n.jsx)(r.default, {
    onClick: () => (0, s.default)(d.type, "Activity Action"),
    color: t,
    look: l,
    fullWidth: !0,
    children: (0, n.jsxs)("div", {
      className: u.flex,
      children: [(0, n.jsx)("img", {
        alt: "",
        className: u.platformIcon,
        src: d.icon.whiteSVG
      }), o.default.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
        platform: d.name
      })]
    })
  }, "connect-platform-activity")
}