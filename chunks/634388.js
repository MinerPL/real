"use strict";
n.r(t), n.d(t, {
  useGuildShopDisplayContext: function() {
    return N
  },
  default: function() {
    return M
  }
}), n("424973"), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("627445"),
  i = n.n(l),
  r = n("65597"),
  o = n("151426"),
  u = n("716241"),
  d = n("10641"),
  c = n("837008"),
  f = n("903724"),
  m = n("393414"),
  E = n("923959"),
  _ = n("305961"),
  h = n("599110"),
  p = n("551254"),
  I = n("991148"),
  T = n("893399"),
  g = n("874146"),
  C = n("500307"),
  S = n("49111");
let A = s.createContext(void 0);

function N() {
  let e = s.useContext(A);
  return i(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e
}

function M(e) {
  var t;
  let {
    children: n,
    initialTab: l,
    guildId: i
  } = e, N = (0, r.default)([_.default], () => _.default.getGuild(i)), M = (0, I.useGuildShopPreviewVisible)(N, "guild_shop_page"), v = (0, p.useIsEligibleForSubscriptionsInGuildShop)(i, "guild_shop_page"), x = (null == N ? void 0 : N.hasFeature(S.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0, O = (0, f.useRoleSubscriptionsVisibleInGuild)(null == N ? void 0 : N.id), L = null === (t = (0, c.useSubscriptionsSettings)(i)) || void 0 === t ? void 0 : t.server_shop_tab_order, R = [], P = T.GuildShopTab.GUILD_SHOP_FULL_PREVIEW;
  x && O ? (R.push(L === g.ServerShopTabOrder.PRODUCTS_FIRST ? T.GuildShopTab.GUILD_PRODUCTS : T.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS), R.push(L === g.ServerShopTabOrder.PRODUCTS_FIRST ? T.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS : T.GuildShopTab.GUILD_PRODUCTS), P = R[0]) : x && !O ? (R.push(T.GuildShopTab.GUILD_PRODUCTS), P = T.GuildShopTab.GUILD_PRODUCTS) : !x && O && (R.push(T.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS), P = T.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS, M && R.push(T.GuildShopTab.GUILD_PRODUCTS_PREVIEW)), l = null != l ? l : P;
  let [y, D] = s.useState(l), j = M && !(O && v) || y === T.GuildShopTab.GUILD_PRODUCTS_PREVIEW;
  return s.useEffect(() => {
    D(l)
  }, [l]), (0, a.jsx)(A.Provider, {
    value: {
      selectedTab: y,
      setSelectedTab: D,
      categoryTabs: R,
      isPhantomPreview: j,
      handlePreviewDismiss: e => {
        (0, d.markDismissibleContentAsDismissed)(o.DismissibleContent.SERVER_SHOP_PHANTOM_PREVIEW);
        let t = {
          ...(0, u.collectGuildAnalyticsMetadata)(i)
        };
        if (y === T.GuildShopTab.GUILD_PRODUCTS_PREVIEW) e.stopPropagation(), D(T.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS), t.action_taken = C.GuildShopPreviewClickActions.DISMISS_TAB_PREVIEW;
        else {
          var n;
          (0, m.replaceWith)(S.Routes.CHANNEL(i, null === (n = E.default.getDefaultChannel(i)) || void 0 === n ? void 0 : n.id)), t.action_taken = C.GuildShopPreviewClickActions.DISMISS_FULL_PREVIEW
        }
        h.default.track(S.AnalyticEvents.GUILD_SHOP_PREVIEW_CLICK, t)
      }
    },
    children: n
  })
}