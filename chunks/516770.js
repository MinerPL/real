"use strict";
n.r(t), n.d(t, {
  PublishedBadge: function() {
    return S
  },
  DraftBadge: function() {
    return E
  }
});
var i = n("37983");
n("884691");
var r = n("77078"),
  l = n("449918"),
  u = n("20606"),
  o = n("832132"),
  s = n("952479"),
  a = n("49111"),
  d = n("782340"),
  c = n("495323");

function f(e) {
  let {
    label: t,
    backgroundColor: n = u.default.BUTTON_SECONDARY_BACKGROUND,
    icon: l,
    iconColor: o
  } = e;
  return (0, i.jsxs)("div", {
    className: c.badge,
    style: {
      backgroundColor: n
    },
    children: [(0, i.jsx)(r.Text, {
      variant: "text-sm/normal",
      color: "always-white",
      className: c.badgeText,
      children: t
    }), (0, i.jsx)(l, {
      className: c.badgeIcon,
      color: null != o ? o : "currentColor",
      "aria-hidden": !0
    })]
  })
}

function S() {
  return (0, i.jsx)(f, {
    label: d.default.Messages.GUILD_PRODUCT_STATUS_BADGE_PUBLISHED,
    backgroundColor: "#207B8D",
    icon: s.default
  })
}

function E() {
  return (0, i.jsx)(f, {
    label: d.default.Messages.GUILD_PRODUCT_STATUS_BADGE_DRAFT,
    icon: o.default,
    iconColor: (0, l.getColor)(a.Color.PRIMARY_330)
  })
}