"use strict";
n.r(t), n.d(t, {
  PublishedBadge: function() {
    return h
  },
  DraftBadge: function() {
    return _
  }
});
var r = n("37983");
n("884691");
var i = n("77078"),
  u = n("449918"),
  l = n("20606"),
  o = n("832132"),
  s = n("952479"),
  a = n("49111"),
  d = n("782340"),
  c = n("495323");

function f(e) {
  let {
    label: t,
    backgroundColor: n = l.default.BUTTON_SECONDARY_BACKGROUND,
    icon: u,
    iconColor: o
  } = e;
  return (0, r.jsxs)("div", {
    className: c.badge,
    style: {
      backgroundColor: n
    },
    children: [(0, r.jsx)(i.Text, {
      variant: "text-sm/normal",
      color: "always-white",
      className: c.badgeText,
      children: t
    }), (0, r.jsx)(u, {
      className: c.badgeIcon,
      color: null != o ? o : "currentColor",
      "aria-hidden": !0
    })]
  })
}

function h() {
  return (0, r.jsx)(f, {
    label: d.default.Messages.GUILD_PRODUCT_STATUS_BADGE_PUBLISHED,
    backgroundColor: "#207B8D",
    icon: s.default
  })
}

function _() {
  return (0, r.jsx)(f, {
    label: d.default.Messages.GUILD_PRODUCT_STATUS_BADGE_DRAFT,
    icon: o.default,
    iconColor: (0, u.getColor)(a.Color.PRIMARY_330)
  })
}