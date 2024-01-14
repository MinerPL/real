"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var l = n("37983");
n("884691");
var a = n("77078"),
  r = n("945330"),
  i = n("959097"),
  s = n("557872"),
  u = n("967241"),
  o = n("648564"),
  d = n("782340"),
  c = n("728360");

function f(e) {
  let {
    guildId: t,
    onClose: n,
    transitionState: f
  } = e;
  return (0, l.jsx)(a.ModalRoot, {
    className: c.modal,
    transitionState: f,
    "aria-label": d.default.Messages.THREADS,
    size: a.ModalSize.DYNAMIC,
    children: (0, l.jsxs)("div", {
      className: c.container,
      children: [(0, l.jsxs)("div", {
        className: c.header,
        children: [(0, l.jsx)(i.default, {
          className: c.threadIcon
        }), (0, l.jsx)(a.Heading, {
          variant: "heading-md/semibold",
          className: c.title,
          children: d.default.Messages.ALL_ACTIVE_THREADS
        }), (0, l.jsx)("div", {
          className: c.spacer
        }), (0, l.jsx)(a.Clickable, {
          className: c.closeIcon,
          onClick: n,
          "aria-label": d.default.Messages.CLOSE,
          children: (0, l.jsx)(r.default, {})
        })]
      }), (0, l.jsx)(s.default, {
        guildId: t,
        goToThread: (e, t) => {
          n(), (0, u.openThreadSidebarForViewing)(e, !t, o.OpenThreadAnalyticsLocations.GUILD_ACTIVE_THREADS_MODAL)
        }
      })]
    })
  })
}