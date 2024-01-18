"use strict";
a.r(t), a.d(t, {
  default: function() {
    return N
  }
});
var l = a("37983"),
  s = a("884691"),
  r = a("414456"),
  n = a.n(r),
  i = a("635058"),
  o = a("65597"),
  c = a("77078"),
  u = a("685665"),
  d = a("649844"),
  f = a("697218"),
  m = a("153769"),
  C = a("270227"),
  p = a("719923"),
  g = a("491232"),
  E = a("716120"),
  h = a("342676"),
  T = a("408381"),
  b = a("177586"),
  x = a("646718"),
  L = a("782340"),
  S = a("927694");
let v = (0, T.getLogoSize)(96),
  I = e => {
    let {
      category: t
    } = e, {
      analyticsLocations: a
    } = (0, u.default)(), r = s.useRef(null), n = (0, o.default)([f.default], () => f.default.getCurrentUser());
    return p.default.canUseCollectibles(n) ? (0, l.jsx)(l.Fragment, {
      children: t.summary
    }) : (0, l.jsx)(l.Fragment, {
      children: L.default.Messages.COLLECTIBLES_SFA_STARTER_BANNER_DESCRIPTION.format({
        getPremium: e => (0, l.jsx)(c.Clickable, {
          innerRef: r,
          className: S.getPremiumHook,
          onClick: () => {
            (0, d.default)({
              subscriptionTier: x.PremiumSubscriptionSKUs.TIER_2,
              analyticsLocations: a,
              returnRef: r
            })
          },
          tag: "span",
          children: (0, l.jsx)(c.Text, {
            variant: "text-md/normal",
            color: "always-white",
            tag: "span",
            children: e
          })
        })
      })
    })
  };

function N(e) {
  let {
    category: t,
    className: a
  } = e, {
    backgroundColors: s
  } = (0, b.default)(t.styles);
  return (0, l.jsxs)(E.default, {
    asset: t.banner,
    className: n(S.shopBanner, a),
    style: null != s ? {
      background: "".concat((0, T.getBackgroundGradient)(s), " border-box border-box"),
      outlineColor: s.border.toHslString()
    } : void 0,
    children: [(0, l.jsxs)("div", {
      className: S.discordLogo,
      children: [(0, l.jsx)(m.default, {
        className: S.discordIcon
      }), (0, l.jsx)(C.default, {
        className: S.discordWordmark
      })]
    }), (0, l.jsx)("img", {
      className: S.categoryLogo,
      src: (0, g.getCollectiblesAssetURL)(t.logo, {
        size: v
      }),
      alt: t.name
    }), (0, l.jsx)(c.Text, {
      className: S.summary,
      variant: "text-md/normal",
      color: "always-white",
      children: t.skuId === i.CollectiblesCategorySkuId.DISXCORE ? (0, l.jsx)(I, {
        category: t
      }) : t.summary
    }), (0, l.jsx)(h.default, {
      category: t,
      className: S.limitedTimeBadge,
      display: "banner"
    })]
  })
}