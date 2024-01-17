"use strict";
n.r(t), n.d(t, {
  useGuildShopDisplayContext: function() {
    return g
  },
  default: function() {
    return M
  }
}), n("424973"), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("627445"),
  i = n.n(a),
  r = n("65597"),
  o = n("151426"),
  u = n("716241"),
  d = n("10641"),
  c = n("837008"),
  f = n("903724"),
  E = n("393414"),
  _ = n("923959"),
  T = n("305961"),
  I = n("599110"),
  m = n("551254"),
  N = n("991148"),
  p = n("893399"),
  S = n("874146"),
  A = n("500307"),
  C = n("49111");
let h = l.createContext(void 0);

function g() {
  let e = l.useContext(h);
  return i(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e
}

function M(e) {
  var t;
  let {
    children: n,
    initialTab: a,
    guildId: i
  } = e, g = (0, r.default)([T.default], () => T.default.getGuild(i)), M = (0, N.useGuildShopPreviewVisible)(g, "guild_shop_page"), O = (0, m.useIsEligibleForSubscriptionsInGuildShop)(i, "guild_shop_page"), R = (null == g ? void 0 : g.hasFeature(C.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0, L = (0, f.useRoleSubscriptionsVisibleInGuild)(null == g ? void 0 : g.id), v = null === (t = (0, c.useSubscriptionsSettings)(i)) || void 0 === t ? void 0 : t.server_shop_tab_order, P = [], D = p.GuildShopTab.GUILD_SHOP_FULL_PREVIEW;
  R && L ? (P.push(v === S.ServerShopTabOrder.PRODUCTS_FIRST ? p.GuildShopTab.GUILD_PRODUCTS : p.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS), P.push(v === S.ServerShopTabOrder.PRODUCTS_FIRST ? p.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS : p.GuildShopTab.GUILD_PRODUCTS), D = P[0]) : R && !L ? (P.push(p.GuildShopTab.GUILD_PRODUCTS), D = p.GuildShopTab.GUILD_PRODUCTS) : !R && L && (P.push(p.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS), D = p.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS, M && P.push(p.GuildShopTab.GUILD_PRODUCTS_PREVIEW)), a = null != a ? a : D;
  let [x, y] = l.useState(a), U = M && !(L && O) || x === p.GuildShopTab.GUILD_PRODUCTS_PREVIEW;
  return l.useEffect(() => {
    y(a)
  }, [a]), (0, s.jsx)(h.Provider, {
    value: {
      selectedTab: x,
      setSelectedTab: y,
      categoryTabs: P,
      isPhantomPreview: U,
      handlePreviewDismiss: e => {
        (0, d.markDismissibleContentAsDismissed)(o.DismissibleContent.SERVER_SHOP_PHANTOM_PREVIEW);
        let t = {
          ...(0, u.collectGuildAnalyticsMetadata)(i)
        };
        if (x === p.GuildShopTab.GUILD_PRODUCTS_PREVIEW) e.stopPropagation(), y(p.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS), t.action_taken = A.GuildShopPreviewClickActions.DISMISS_TAB_PREVIEW;
        else {
          var n;
          (0, E.replaceWith)(C.Routes.CHANNEL(i, null === (n = _.default.getDefaultChannel(i)) || void 0 === n ? void 0 : n.id)), t.action_taken = A.GuildShopPreviewClickActions.DISMISS_FULL_PREVIEW
        }
        I.default.track(C.AnalyticEvents.GUILD_SHOP_PREVIEW_CLICK, t)
      }
    },
    children: n
  })
}