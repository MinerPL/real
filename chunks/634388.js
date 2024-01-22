"use strict";
n.r(t), n.d(t, {
  useGuildShopDisplayContext: function() {
    return M
  },
  default: function() {
    return O
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
  E = n("38654"),
  _ = n("393414"),
  T = n("923959"),
  I = n("305961"),
  m = n("599110"),
  N = n("551254"),
  p = n("991148"),
  S = n("893399"),
  A = n("874146"),
  C = n("500307"),
  h = n("49111");
let g = l.createContext(void 0);

function M() {
  let e = l.useContext(g);
  return i(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e
}

function O(e) {
  var t;
  let {
    children: n,
    initialTab: a,
    guildId: i
  } = e, M = (0, r.default)([I.default], () => I.default.getGuild(i)), O = (0, r.default)([E.default], () => E.default.isViewingServerShop(i)), R = (0, p.useGuildShopPreviewVisible)(M, "guild_shop_page"), L = (0, N.useIsEligibleForSubscriptionsInGuildShop)(i, "guild_shop_page"), v = (null == M ? void 0 : M.hasFeature(h.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0, P = (0, f.useRoleSubscriptionsVisibleInGuild)(null == M ? void 0 : M.id), D = null === (t = (0, c.useSubscriptionsSettings)(i)) || void 0 === t ? void 0 : t.server_shop_tab_order, x = [], y = S.GuildShopTab.GUILD_SHOP_FULL_PREVIEW;
  O || v && P ? (x.push(D === A.ServerShopTabOrder.PRODUCTS_FIRST ? S.GuildShopTab.GUILD_PRODUCTS : S.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS), x.push(D === A.ServerShopTabOrder.PRODUCTS_FIRST ? S.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS : S.GuildShopTab.GUILD_PRODUCTS), y = x[0]) : v && !P ? (x.push(S.GuildShopTab.GUILD_PRODUCTS), y = S.GuildShopTab.GUILD_PRODUCTS) : !v && P && (x.push(S.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS), y = S.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS, R && x.push(S.GuildShopTab.GUILD_PRODUCTS_PREVIEW)), a = null != a ? a : y;
  let [U, j] = l.useState(a), b = R && !(P && L) || U === S.GuildShopTab.GUILD_PRODUCTS_PREVIEW;
  return l.useEffect(() => {
    j(a)
  }, [a]), (0, s.jsx)(g.Provider, {
    value: {
      selectedTab: U,
      setSelectedTab: j,
      categoryTabs: x,
      isPhantomPreview: b,
      handlePreviewDismiss: e => {
        (0, d.markDismissibleContentAsDismissed)(o.DismissibleContent.SERVER_SHOP_PHANTOM_PREVIEW);
        let t = {
          ...(0, u.collectGuildAnalyticsMetadata)(i)
        };
        if (U === S.GuildShopTab.GUILD_PRODUCTS_PREVIEW) e.stopPropagation(), j(S.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS), t.action_taken = C.GuildShopPreviewClickActions.DISMISS_TAB_PREVIEW;
        else {
          var n;
          (0, _.replaceWith)(h.Routes.CHANNEL(i, null === (n = T.default.getDefaultChannel(i)) || void 0 === n ? void 0 : n.id)), t.action_taken = C.GuildShopPreviewClickActions.DISMISS_FULL_PREVIEW
        }
        m.default.track(h.AnalyticEvents.GUILD_SHOP_PREVIEW_CLICK, t)
      }
    },
    children: n
  })
}