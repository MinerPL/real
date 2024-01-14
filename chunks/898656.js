"use strict";
l.r(t), l.d(t, {
  default: function() {
    return g
  }
});
var i = l("37983"),
  a = l("884691"),
  n = l("414456"),
  s = l.n(n),
  r = l("355262"),
  c = l("77078"),
  o = l("650509"),
  d = l("8161"),
  u = l("315102"),
  p = l("146691"),
  m = l("998944"),
  _ = l("412707"),
  f = l("721908"),
  h = l("782340"),
  C = l("884704");

function g(e) {
  var t, l, n;
  let {
    application: g,
    className: I,
    childrenClassName: A,
    showAdd: E,
    showMutualGuilds: v,
    showPrimaryCategory: x,
    children: R,
    onView: T,
    guildCountPosition: N = "top",
    subheaderTextVariant: P = "text-sm/normal",
    mutualGuildShownMax: y,
    guildIconSize: j,
    source: O
  } = e, S = (0, _.useApplicationDirectoryHistory)(e => e.guildId), L = (0, r.useListItem)(g.id), D = u.default.getApplicationIconURL({
    id: g.id,
    icon: g.icon,
    size: 48
  }), {
    canInstall: M,
    install: b
  } = (0, p.useInstallApplication)(g), Y = (0, f.default)({
    application: g,
    showMutualGuilds: v
  }), k = a.useCallback(e => {
    e.stopPropagation(), b(O)
  }, [b, O]), H = null === (t = g.categories) || void 0 === t ? void 0 : t[0], G = (null !== (n = null === (l = g.directory_entry) || void 0 === l ? void 0 : l.guild_count) && void 0 !== n ? n : 0) > 0 || Y.length > 0, F = (0, i.jsx)(m.default, {
    application: g,
    textVariant: P,
    mutualGuilds: Y,
    mutualGuildShownMax: y,
    guildIconSize: j,
    compact: !0
  }), w = x && null != H, U = G && "top" === N, B = G && "bottom" === N, {
    applicationSubscriptionListingsShown: V
  } = (0, o.default)({
    applicationId: g.id,
    groupListingId: g.primary_sku_id,
    guildId: S
  }), W = (0, i.jsxs)("article", {
    children: [(0, i.jsxs)("div", {
      className: C.topWrapper,
      children: [(0, i.jsx)("img", {
        className: C.icon,
        alt: "",
        "aria-hidden": !0,
        src: D,
        width: 48,
        height: 48
      }), (0, i.jsxs)("div", {
        className: C.info,
        children: [(0, i.jsx)(c.Heading, {
          variant: "heading-md/medium",
          children: g.name
        }), (w || U) && (0, i.jsxs)("div", {
          className: C.details,
          children: [w ? (0, i.jsx)(c.Text, {
            tag: "span",
            color: "header-secondary",
            variant: P,
            children: H.name
          }) : null, U ? (0, i.jsxs)(i.Fragment, {
            children: [w ? (0, i.jsx)("span", {
              className: C.bullet,
              children: "•"
            }) : null, F, V ? (0, i.jsxs)("div", {
              className: C.premiumContainer,
              children: [(0, i.jsx)("span", {
                className: C.bullet,
                children: "•"
              }), (0, i.jsx)(d.default, {
                width: 16,
                height: 16
              }), (0, i.jsx)(c.Text, {
                variant: "text-sm/medium",
                className: C.premiumText,
                children: h.default.Messages.APPLICATION_DIRECTORY_LISTING_TOOLTIP_PREMIUM
              })]
            }) : null]
          }) : null]
        })]
      }), E ? (0, i.jsx)(c.Button, {
        size: c.Button.Sizes.SMALL,
        onClick: k,
        disabled: !M,
        children: h.default.Messages.APP_DIRECTORY_LISTING_ADD_BUTTON
      }) : null]
    }), null != R || null != A ? (0, i.jsx)("div", {
      className: s(A, C.children),
      children: R
    }) : null, B ? (0, i.jsx)("div", {
      className: C.bottomGuildCountContainer,
      children: F
    }) : null]
  });
  return null != T ? (0, i.jsx)(c.Clickable, {
    tag: "li",
    onClick: () => T({
      mutualGuilds: Y
    }),
    className: s(I, C.listing, C.clickable),
    ...L,
    children: W
  }) : (0, i.jsx)(c.FocusRing, {
    children: (0, i.jsx)("li", {
      className: s(I, C.listing),
      ...L,
      children: W
    })
  })
}