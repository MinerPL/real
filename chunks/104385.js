"use strict";
s.r(t), s.d(t, {
  default: function() {
    return O
  }
}), s("794252");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("506838"),
  o = s("65597"),
  d = s("77078"),
  u = s("812204"),
  c = s("685665"),
  S = s("697218"),
  E = s("599110"),
  f = s("719923"),
  T = s("21526"),
  m = s("411691"),
  _ = s("49111"),
  g = s("646718"),
  h = s("782340"),
  I = s("439985");
let N = () => (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: I.artContainer,
      "aria-hidden": !0,
      role: "presentation",
      children: (0, a.jsx)("img", {
        src: s("280414"),
        className: I.art,
        alt: " "
      })
    }), (0, a.jsxs)("div", {
      className: I.mainColumn,
      children: [(0, a.jsx)(d.Heading, {
        variant: "heading-lg/bold",
        color: "always-white",
        className: I.title,
        children: h.default.Messages.PROFILE_EFFECTS_HERO_BANNER_TITLE
      }), (0, a.jsx)(d.Text, {
        className: I.textBody,
        variant: "text-sm/normal",
        color: "always-white",
        children: h.default.Messages.PROFILE_EFFECTS_HERO_BANNER_SUBTITLE
      })]
    })]
  }),
  p = () => (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: I.artContainer,
      "aria-hidden": !0,
      role: "presentation",
      children: (0, a.jsx)("img", {
        src: s("872702"),
        className: i([I.art, I.artJan2024]),
        alt: " ",
        width: "143"
      })
    }), (0, a.jsxs)("div", {
      className: I.mainColumn,
      children: [(0, a.jsx)(d.Heading, {
        variant: "heading-lg/bold",
        color: "always-white",
        className: I.title,
        children: h.default.Messages.COLLECTIBLES_SFA_TITLE
      }), (0, a.jsx)(d.Text, {
        className: I.textBody,
        variant: "text-sm/normal",
        color: "always-white",
        children: h.default.Messages.COLLECTIBLES_SFA_BANNER_DESCRIPTION
      })]
    })]
  }),
  C = () => (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: I.artContainer,
      "aria-hidden": !0,
      role: "presentation",
      children: (0, a.jsx)("img", {
        src: s("525109"),
        className: I.art,
        alt: " "
      })
    }), (0, a.jsxs)("div", {
      className: I.mainColumn,
      children: [(0, a.jsx)(d.Heading, {
        variant: "heading-lg/extrabold",
        color: "always-white",
        className: I.title,
        children: h.default.Messages.USER_PROFILE_SETTINGS_SHOP_FOR_ALL_BANNER_HEADER
      }), (0, a.jsx)(d.Text, {
        className: I.textBody,
        variant: "text-sm/normal",
        color: "always-white",
        children: h.default.Messages.USER_PROFILE_SETTINGS_SHOP_FOR_ALL_BANNER_SUBHEADER
      })]
    })]
  }),
  A = e => {
    let {
      variation: t
    } = e;
    return (0, r.match)(t).with(m.CollectiblesShopMarketingVariants.WINTER_2023_DROP, () => (0, a.jsx)(C, {})).with(m.CollectiblesShopMarketingVariants.MONSTER_DROP, () => (0, a.jsx)(p, {})).otherwise(() => (0, a.jsx)(N, {}))
  };
var O = () => {
  let {
    analyticsLocations: e
  } = (0, c.default)(u.default.COLLECTIBLES_PROFILE_SETTINGS_UPSELL), t = n.useRef(null), s = (0, m.default)("CollectiblesUpsellBanner"), l = (0, o.default)([S.default], () => S.default.getCurrentUser()), N = !f.default.canUseCollectibles(l);
  return n.useEffect(() => {
    E.default.track(_.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: g.PremiumUpsellTypes.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
      location_stack: e
    })
  }, [e]), (0, a.jsxs)("div", {
    ref: t,
    className: i(I.container, (0, r.match)(s).with(m.CollectiblesShopMarketingVariants.WINTER_2023_DROP, () => I.shopForAllWinterBackground).with(m.CollectiblesShopMarketingVariants.MONSTER_DROP, () => I.shopForAllBackgroundImage).otherwise(() => N ? I.shopForAllBackgroundImage : void 0)),
    children: [(0, a.jsx)(A, {
      variation: s
    }), (0, a.jsx)(d.Button, {
      onClick: () => {
        (0, T.openCollectiblesShop)({
          analyticsLocations: e,
          analyticsSource: u.default.COLLECTIBLES_PROFILE_SETTINGS_UPSELL
        })
      },
      className: I.ctaButton,
      look: d.Button.Looks.INVERTED,
      children: (0, r.match)(s).with(m.CollectiblesShopMarketingVariants.WINTER_2023_DROP, () => h.default.Messages.CHECK_IT_OUT).otherwise(() => h.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP)
    })]
  })
}