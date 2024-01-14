"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var a = n("37983"),
  s = n("884691"),
  i = n("77078"),
  l = n("340626"),
  r = n("393414"),
  o = n("239380"),
  u = n("305961"),
  d = n("627490"),
  c = n("599110"),
  E = n("315102"),
  f = n("853004"),
  _ = n("49111"),
  h = n("782340"),
  C = n("443");

function T(e, t, n) {
  return (0, a.jsxs)("button", {
    className: C.container,
    onClick: n,
    children: ["function" == typeof e ? (0, a.jsx)("div", {
      className: C.icon,
      children: (0, a.jsx)(e, {
        className: C.iconInner,
        color: i.tokens.colors.WHITE.css
      })
    }) : (0, a.jsx)("img", {
      className: C.icon,
      alt: "",
      src: e
    }), (0, a.jsx)(i.Text, {
      className: C.text,
      variant: "text-md/medium",
      children: t
    }), (0, a.jsx)(f.default, {
      className: C.arrow
    })]
  }, t)
}

function I() {
  let e = Object.values(u.default.getGuilds()),
    t = e.filter(e => e.hasFeature(_.GuildFeatures.HUB)),
    n = e => {
      c.default.track(_.AnalyticEvents.ADD_FRIEND_OTHER_PLACES_HUB_CLICKED, {
        guild_id: e
      }), (0, o.transitionToGuild)(e)
    };
  return (0, a.jsxs)(s.Fragment, {
    children: [(0, a.jsx)("header", {
      className: C.header,
      children: (0, a.jsx)(i.FormTitle, {
        tag: "h2",
        className: C.title,
        children: h.default.Messages.ADD_FRIEND_MAKE_FRIENDS
      })
    }), (0, a.jsxs)("div", {
      className: C.grid,
      children: [t.map(e => T(E.default.getGuildIconURL({
        id: e.id,
        icon: e.icon,
        size: 240
      }), e.name, () => {
        n(e.id)
      })), T(d.default, h.default.Messages.ADD_FRIEND_EXPLORE_PUBLIC_SERVERS, () => {
        (0, l.clearSearch)(), c.default.track(_.AnalyticEvents.ADD_FRIEND_OTHER_PLACES_DISCOVERY_CLICKED), (0, r.transitionTo)(_.Routes.GUILD_DISCOVERY)
      })]
    })]
  })
}