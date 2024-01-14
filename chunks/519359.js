"use strict";
l.r(t), l.d(t, {
  default: function() {
    return A
  }
});
var i = l("37983");
l("884691");
var a = l("414456"),
  n = l.n(a),
  s = l("77078"),
  r = l("841098"),
  c = l("407063"),
  o = l("813006"),
  d = l("580357"),
  u = l("476263"),
  p = l("781896"),
  m = l("587974"),
  _ = l("315102"),
  f = l("49111"),
  h = l("782340"),
  C = l("722142"),
  g = l("68422"),
  I = l("578817");

function A(e) {
  let {
    guild: t,
    className: l,
    onClick: a
  } = e, A = (0, r.default)(), E = new o.default({
    name: t.name,
    icon: t.icon
  }), v = _.default.getGuildDiscoverySplashURL({
    id: t.id,
    splash: t.discovery_splash,
    size: 192 * (0, c.getDevicePixelRatio)()
  }), x = null != v ? v : function(e) {
    switch (e) {
      case f.ThemeTypes.DARK:
        return g;
      case f.ThemeTypes.LIGHT:
        return I
    }
  }(A), R = _.default.getGuildIconURL({
    id: t.id,
    icon: t.icon,
    size: 50
  });
  return (0, i.jsxs)(s.Clickable, {
    className: n(C.card, l),
    onClick: a,
    "aria-label": h.default.Messages.APP_DIRECTORY_JOIN_SERVER_LABEL,
    children: [(0, i.jsxs)("div", {
      className: C.cardHeader,
      children: [(0, i.jsx)("img", {
        src: x,
        alt: "",
        className: C.splashImage
      }), (0, i.jsx)("div", {
        className: C.guildIcon,
        children: (0, i.jsx)(m.default, {
          mask: m.default.Masks.AVATAR_DEFAULT,
          width: 58,
          height: 58,
          children: (0, i.jsx)("div", {
            className: C.iconMask,
            children: (0, i.jsx)(u.default, {
              className: C.icon,
              iconSrc: R,
              guild: E,
              size: u.default.Sizes.LARGE
            })
          })
        })
      })]
    }), (0, i.jsxs)("div", {
      className: C.cardDetails,
      children: [(0, i.jsxs)("div", {
        className: C.guildNameWrapper,
        children: [(0, i.jsx)(d.default, {
          className: C.guildBadge,
          guild: t,
          tooltipColor: s.Tooltip.Colors.PRIMARY
        }), (0, i.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          className: C.guildName,
          children: t.name
        })]
      }), (0, i.jsx)(s.Text, {
        className: C.guildDescription,
        variant: "text-sm/normal",
        color: "header-secondary",
        lineClamp: 2,
        children: t.description
      }), (0, i.jsx)("div", {
        className: C.memberInfo,
        children: (0, i.jsxs)("div", {
          className: C.memberCountWrapper,
          children: [(0, i.jsx)(p.default, {
            className: C.memberCountIcon,
            width: "16",
            height: "16"
          }), (0, i.jsx)(s.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            children: h.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
              count: t.approximate_member_count
            })
          })]
        })
      })]
    })]
  })
}