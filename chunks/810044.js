"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("759843"),
  o = n("171210"),
  u = n("446674"),
  d = n("77078"),
  c = n("716241"),
  f = n("428958"),
  E = n("442379"),
  _ = n("537325"),
  T = n("305961"),
  I = n("476263"),
  m = n("191814"),
  N = n("898260"),
  p = n("599110"),
  S = n("741515"),
  A = n("3081"),
  C = n("907038"),
  h = n("49111"),
  g = n("782340"),
  M = n("431607");

function O(e) {
  var t;
  let {
    guildId: n
  } = e, a = (0, u.useStateFromStores)([T.default], () => T.default.getGuild(n)), {
    loading: O,
    subscriptionsSettings: R
  } = (0, S.useMonetizationSettings)(n), {
    listingsLoaded: L
  } = (0, E.useFetchGuildProductListingsForGuild)(n), v = (0, E.useGuildProductsForGuild)(n, {
    publishedOnly: !0
  }), P = l.useCallback(async () => {
    p.default.track(h.AnalyticEvents.GUILD_SHOP_EMBED_CLICKED, {
      ...(0, c.collectGuildAnalyticsMetadata)(n)
    }), await (0, _.default)(h.Routes.SERVER_SHOP(n))
  }, [n]);
  (0, f.default)({
    type: r.ImpressionTypes.VIEW,
    name: r.ImpressionNames.GUILD_SHOP_EMBED
  }, {
    disableTrack: null == a
  });
  let D = v.length > 0 ? new Date(Math.min(...v.map(e => Date.parse(e.published_at)))) : void 0;
  return O || !L ? (0, s.jsx)("div", {
    className: i(M.guildShopEmbed, M.spinnerContainer),
    children: (0, s.jsx)(d.Spinner, {})
  }) : null == a || null == R ? null : (0, s.jsxs)("div", {
    className: M.guildShopEmbed,
    children: [(0, s.jsx)(A.HeroImage, {
      coverImageAsset: null !== (t = R.cover_image_asset) && void 0 !== t ? t : null
    }), (0, s.jsx)(m.default, {
      size: 16
    }), (0, s.jsxs)("div", {
      className: M.serverShopLabel,
      children: [(0, s.jsx)(C.default, {
        height: "16px",
        width: "16px",
        color: o.default.INTERACTIVE_NORMAL
      }), (0, s.jsx)(d.Heading, {
        variant: "heading-sm/semibold",
        color: "interactive-normal",
        className: M.serverShopLabelText,
        children: g.default.Messages.GUILD_SHOP_CHANNEL_LABEL
      })]
    }), (0, s.jsx)(m.default, {
      size: 16
    }), (0, s.jsx)(d.Heading, {
      variant: "heading-md/semibold",
      color: "text-normal",
      children: g.default.Messages.GUILD_STORE_HERO_TITLE.format({
        guildName: a.name
      })
    }), (0, s.jsx)(m.default, {
      size: 4
    }), (0, s.jsx)(d.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      lineClamp: 2,
      children: R.description
    }), (0, s.jsx)(m.default, {
      size: 16
    }), (0, s.jsx)(N.default, {}), (0, s.jsx)(m.default, {
      size: 16
    }), (0, s.jsxs)("div", {
      className: M.guildShopEmbedFooter,
      children: [(0, s.jsx)(I.default, {
        guild: a
      }), (0, s.jsxs)("ul", {
        className: M.guildShopSummary,
        children: [(0, s.jsx)("li", {
          children: (0, s.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: g.default.Messages.GUILD_SHOP_EMBED_LISTINGS_AVAILABLE.format({
              listingCount: v.length
            })
          })
        }), null != D && (0, s.jsx)("li", {
          children: (0, s.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: g.default.Messages.GUILD_SHOP_EMBED_SHOP_AGE.format({
              createdYear: D.getFullYear()
            })
          })
        })]
      }), (0, s.jsx)(d.Button, {
        className: M.guildShopEmbedCta,
        onClick: P,
        children: (0, s.jsxs)("div", {
          className: M.guildShopEmbedCtaContent,
          children: [(0, s.jsx)(C.default, {
            height: "18px",
            width: "18px"
          }), (0, s.jsx)(d.Text, {
            variant: "text-sm/medium",
            color: "always-white",
            children: g.default.Messages.GUILD_SHOP_EMBED_CTA
          })]
        })
      })]
    })]
  })
}