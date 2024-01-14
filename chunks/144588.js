"use strict";
s.r(t), s.d(t, {
  default: function() {
    return H
  }
});
var l = s("37983"),
  i = s("884691"),
  r = s("414456"),
  a = s.n(r),
  n = s("759843"),
  d = s("446674"),
  o = s("77078"),
  u = s("428958"),
  c = s("20606"),
  C = s("465869"),
  _ = s("619443"),
  f = s("38112"),
  h = s("602818"),
  L = s("539938"),
  S = s("305961"),
  x = s("191814"),
  I = s("741515"),
  p = s("657199"),
  E = s("387678"),
  g = s("634388"),
  T = s("893399"),
  P = s("10589"),
  R = s("208713"),
  m = s("803692"),
  O = s("90324"),
  j = s("624416"),
  v = s("3081"),
  G = s("907038"),
  D = s("874146"),
  U = s("724210"),
  N = s("660516"),
  M = s("782340"),
  w = s("261974"),
  A = s("305794");

function V(e) {
  var t;
  let {
    guildId: s,
    productId: i
  } = e, {
    loaded: r,
    subscriptionsSettings: a
  } = (0, I.useMonetizationSettings)(s), n = (0, d.useStateFromStores)([S.default], () => S.default.getGuild(s)), {
    selectedTab: u,
    isPhantomPreview: c,
    categoryTabs: C
  } = (0, g.useGuildShopDisplayContext)(), _ = !r || null == a, f = null == n || !c && _;
  return f ? (0, l.jsx)(o.Spinner, {}) : (0, l.jsx)(E.default, {
    defaultSortOption: null !== (t = null == a ? void 0 : a.store_page_guild_products_default_sort) && void 0 !== t ? t : D.GuildProductSortOptions.NAME,
    children: (0, l.jsxs)("div", {
      className: w.contentContainer,
      children: [(0, l.jsx)(v.default, {
        guild: n,
        subscriptionsSettings: a
      }), (0, l.jsx)(x.default, {
        size: 32
      }), C.length > 0 && (0, l.jsx)(m.GuildShopCategorySelector, {
        guild: n
      }), (0, l.jsxs)("div", {
        className: w.tabContainer,
        children: [(0, l.jsx)(x.default, {
          size: 32
        }), c && (0, l.jsx)(O.default, {
          guildId: s
        }), u === T.GuildShopTab.GUILD_PRODUCTS && (0, l.jsx)(P.GuildProductCardGrid, {
          guildId: s,
          productId: i
        }), u === T.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS && (0, l.jsx)(R.default, {
          guildId: s
        })]
      })]
    })
  })
}

function b(e) {
  let {
    guildId: t,
    productId: s
  } = e, r = (0, d.useStateFromStores)([_.default], () => _.default.isConnected()), x = (0, d.useStateFromStores)([S.default], () => S.default.getGuild(t)), {
    shouldHideGuildPurchaseEntryPoints: I,
    restrictionsLoading: E
  } = (0, C.useShouldHideGuildPurchaseEntryPoints)(t), {
    selectedTab: T,
    isPhantomPreview: P,
    categoryTabs: R
  } = (0, g.useGuildShopDisplayContext)(), m = r && (null == x || 0 === R.length && !P || I && !E);
  return i.useEffect(() => {
    m && (0, p.handleInaccessiblePage)(t, U.StaticChannelRoute.GUILD_SHOP)
  }, [t, m]), (0, u.default)({
    type: N.ImpressionTypes.PAGE,
    name: n.ImpressionNames.GUILD_SHOP_PAGE,
    properties: {
      product_id: s,
      tab: T
    }
  }, {
    disableTrack: m
  }), (0, l.jsxs)("div", {
    className: a(A.chat, w.container),
    children: [(0, l.jsxs)(L.default, {
      children: [(0, l.jsx)(L.default.Icon, {
        icon: G.default,
        "aria-hidden": !0,
        color: c.default.INTERACTIVE_ACTIVE
      }), (0, l.jsx)(L.default.Title, {
        children: M.default.Messages.GUILD_SHOP_CHANNEL_LABEL
      }), (0, l.jsx)(j.default, {})]
    }), (0, l.jsx)(o.ScrollerNone, {
      className: w.content,
      children: r ? (0, l.jsx)(V, {
        guildId: t,
        productId: s
      }) : (0, l.jsx)(o.Spinner, {})
    }), (0, l.jsx)(h.default, {
      className: w.sparkleCloudTop
    }), (0, l.jsx)(f.default, {
      className: w.sparkleCloudBottom
    })]
  })
}

function H(e) {
  let {
    guildId: t,
    productId: s,
    initialTab: i
  } = e;
  return null == i && null != s && (i = T.GuildShopTab.GUILD_PRODUCTS), (0, l.jsx)(g.default, {
    initialTab: i,
    guildId: t,
    children: (0, l.jsx)(b, {
      initialTab: i,
      productId: s,
      guildId: t
    })
  })
}