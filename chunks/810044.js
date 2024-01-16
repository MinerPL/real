"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("759843"),
  o = n("171210"),
  u = n("446674"),
  d = n("77078"),
  c = n("716241"),
  f = n("428958"),
  m = n("442379"),
  E = n("537325"),
  _ = n("305961"),
  h = n("476263"),
  p = n("191814"),
  I = n("898260"),
  T = n("599110"),
  g = n("741515"),
  C = n("3081"),
  S = n("907038"),
  A = n("49111"),
  N = n("782340"),
  M = n("431607");

function v(e) {
  var t;
  let {
    guildId: n
  } = e, l = (0, u.useStateFromStores)([_.default], () => _.default.getGuild(n)), {
    loading: v,
    subscriptionsSettings: x
  } = (0, g.useMonetizationSettings)(n), {
    listingsLoaded: O
  } = (0, m.useFetchGuildProductListingsForGuild)(n), L = (0, m.useGuildProductsForGuild)(n, {
    publishedOnly: !0
  }), R = s.useCallback(async () => {
    T.default.track(A.AnalyticEvents.GUILD_SHOP_EMBED_CLICKED, {
      ...(0, c.collectGuildAnalyticsMetadata)(n)
    }), await (0, E.default)(A.Routes.SERVER_SHOP(n))
  }, [n]);
  (0, f.default)({
    type: r.ImpressionTypes.VIEW,
    name: r.ImpressionNames.GUILD_SHOP_EMBED
  }, {
    disableTrack: null == l
  });
  let P = L.length > 0 ? new Date(Math.min(...L.map(e => Date.parse(e.published_at)))) : void 0;
  return v || !O ? (0, a.jsx)("div", {
    className: i(M.guildShopEmbed, M.spinnerContainer),
    children: (0, a.jsx)(d.Spinner, {})
  }) : null == l || null == x ? null : (0, a.jsxs)("div", {
    className: M.guildShopEmbed,
    children: [(0, a.jsx)(C.HeroImage, {
      coverImageAsset: null !== (t = x.cover_image_asset) && void 0 !== t ? t : null
    }), (0, a.jsx)(p.default, {
      size: 16
    }), (0, a.jsxs)("div", {
      className: M.serverShopLabel,
      children: [(0, a.jsx)(S.default, {
        height: "16px",
        width: "16px",
        color: o.default.INTERACTIVE_NORMAL
      }), (0, a.jsx)(d.Heading, {
        variant: "heading-sm/semibold",
        color: "interactive-normal",
        className: M.serverShopLabelText,
        children: N.default.Messages.GUILD_SHOP_CHANNEL_LABEL
      })]
    }), (0, a.jsx)(p.default, {
      size: 16
    }), (0, a.jsx)(d.Heading, {
      variant: "heading-md/semibold",
      color: "text-normal",
      children: N.default.Messages.GUILD_STORE_HERO_TITLE.format({
        guildName: l.name
      })
    }), (0, a.jsx)(p.default, {
      size: 4
    }), (0, a.jsx)(d.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      lineClamp: 2,
      children: x.description
    }), (0, a.jsx)(p.default, {
      size: 16
    }), (0, a.jsx)(I.default, {}), (0, a.jsx)(p.default, {
      size: 16
    }), (0, a.jsxs)("div", {
      className: M.guildShopEmbedFooter,
      children: [(0, a.jsx)(h.default, {
        guild: l
      }), (0, a.jsxs)("ul", {
        className: M.guildShopSummary,
        children: [(0, a.jsx)("li", {
          children: (0, a.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: N.default.Messages.GUILD_SHOP_EMBED_LISTINGS_AVAILABLE.format({
              listingCount: L.length
            })
          })
        }), null != P && (0, a.jsx)("li", {
          children: (0, a.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: N.default.Messages.GUILD_SHOP_EMBED_SHOP_AGE.format({
              createdYear: P.getFullYear()
            })
          })
        })]
      }), (0, a.jsx)(d.Button, {
        className: M.guildShopEmbedCta,
        onClick: R,
        children: (0, a.jsxs)("div", {
          className: M.guildShopEmbedCtaContent,
          children: [(0, a.jsx)(S.default, {
            height: "18px",
            width: "18px"
          }), (0, a.jsx)(d.Text, {
            variant: "text-sm/medium",
            color: "always-white",
            children: N.default.Messages.GUILD_SHOP_EMBED_CTA
          })]
        })
      })]
    })]
  })
}