"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var a = n("37983");
n("884691");
var l = n("446674"),
  s = n("669491"),
  i = n("77078"),
  r = n("915639"),
  o = n("697218"),
  u = n("834179"),
  d = n("664336"),
  c = n("599110"),
  f = n("701909"),
  h = n("158998"),
  E = n("49111"),
  m = n("782340");
let p = new Set(["ko", "ja"]);

function g() {
  let e = (0, l.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
    t = (0, l.useStateFromStores)([r.default], () => r.default.locale),
    n = (0, h.isNewUser)(e);
  return (0, a.jsx)(i.Anchor, {
    href: f.SUPPORT_LOCATION,
    target: "_blank",
    tabIndex: -1,
    children: (0, a.jsx)(d.Icon, {
      color: n ? s.default.unsafe_rawColors.GREEN_360.css : "currentColor",
      onClick: () => c.default.track(E.AnalyticEvents.HELP_CLICKED, {
        highlighted: n
      }),
      icon: u.default,
      tooltipPosition: p.has(t) ? "left" : void 0,
      tooltip: m.default.Messages.HELP
    })
  })
}