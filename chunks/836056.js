"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("222007");
var l = n("37983");
n("884691");
var a = n("446674"),
  s = n("669491"),
  i = n("77078"),
  r = n("915639"),
  o = n("697218"),
  u = n("834179"),
  d = n("664336"),
  c = n("599110"),
  f = n("701909"),
  E = n("158998"),
  h = n("49111"),
  _ = n("782340");
let S = new Set(["ko", "ja"]);

function T() {
  let e = (0, a.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
    t = (0, a.useStateFromStores)([r.default], () => r.default.locale),
    n = (0, E.isNewUser)(e);
  return (0, l.jsx)(i.Anchor, {
    href: f.SUPPORT_LOCATION,
    target: "_blank",
    tabIndex: -1,
    children: (0, l.jsx)(d.Icon, {
      color: n ? s.default.unsafe_rawColors.GREEN_360.css : "currentColor",
      onClick: () => c.default.track(h.AnalyticEvents.HELP_CLICKED, {
        highlighted: n
      }),
      icon: u.default,
      tooltipPosition: S.has(t) ? "left" : void 0,
      tooltip: _.default.Messages.HELP
    })
  })
}