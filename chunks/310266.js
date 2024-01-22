"use strict";
s.r(t), s.d(t, {
  GuildProductsSettingsOverview: function() {
    return x
  }
}), s("222007"), s("794252");
var a, n, l = s("37983"),
  i = s("884691"),
  r = s("506838"),
  o = s("65597"),
  d = s("77078"),
  u = s("741515"),
  c = s("218567"),
  E = s("97031"),
  _ = s("283962"),
  T = s("258984"),
  I = s("592407"),
  S = s("479756"),
  N = s("507950"),
  g = s("393414"),
  f = s("305961"),
  A = s("697218"),
  L = s("701909"),
  m = s("442379"),
  C = s("533161"),
  O = s("166364"),
  h = s("691659"),
  R = s("49111"),
  D = s("724210"),
  M = s("782340"),
  G = s("80920");

function x(e) {
  let {
    guildId: t,
    hasValidApplication: s
  } = e, {
    listingsLoaded: a
  } = (0, m.useFetchGuildProductListingsForGuild)(t), n = (0, o.default)([f.default], () => f.default.getGuild(t)), x = (0, o.default)([A.default], () => A.default.getCurrentUser()), p = (null == n ? void 0 : n.isOwner(x)) === !0, {
    loading: U
  } = (0, u.useMonetizationSettings)(t), [v, j] = i.useState(s ? "manage_listings" : "payment");
  (0, _.useNewOwnerOnboardingRequired)(n);
  let P = i.useCallback(() => {
    if (null == n) return;
    let e = n.roles[n.id];
    I.default.close();
    let t = {
      [e.id]: e
    };
    (0, S.startImpersonating)(n.id, {
      type: N.ImpersonateType.SERVER_SHOP,
      roles: t,
      initialTab: "guild_products",
      returnToSection: R.GuildSettingsSections.GUILD_PRODUCTS
    }), (0, g.transitionTo)(R.Routes.CHANNEL(n.id, D.StaticChannelRoute.GUILD_SHOP))
  }, [n]);
  if (!a || U) return (0, l.jsx)(d.Spinner, {});
  if (null == n) return null;
  let y = (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(d.FormTitle, {
        tag: d.FormTitleTags.H1,
        children: M.default.Messages.GUILD_PRODUCTS_TITLE
      }), (0, l.jsx)(d.FormText, {
        type: d.FormText.Types.DESCRIPTION,
        children: M.default.Messages.GUILD_PRODUCTS_SETTINGS_DESCRIPTION.format({
          monetizationPolicyLink: L.default.getArticleURL(R.HelpdeskArticles.CREATOR_POLICY),
          serverProductsSupportLink: L.default.getCreatorSupportArticleURL(R.HelpdeskArticles.SERVER_PRODUCTS)
        })
      })]
    }),
    b = (0, l.jsxs)(d.TabBar, {
      type: "top",
      look: "brand",
      className: G.tabBar,
      "aria-label": M.default.Messages.GUILD_PRODUCTS_TITLE,
      selectedItem: v,
      onItemSelect: j,
      children: [(0, l.jsx)(E.default, {
        id: "basic_info",
        disabledTooltip: M.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO_NEEDS_APPLICATION,
        disabled: !s,
        children: M.default.Messages.GUILD_PRODUCTS_BASIC_INFO_SECTION
      }), (0, l.jsx)(E.default, {
        id: "manage_listings",
        disabledTooltip: M.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO_NEEDS_APPLICATION,
        disabled: !s,
        children: M.default.Messages.GUILD_PRODUCTS_LISTINGS_SECTION
      }), p ? (0, l.jsx)(d.TabBar.Item, {
        id: "payment",
        className: G.tabBarItem,
        children: M.default.Messages.GUILD_PRODUCTS_PAYMENT_SECTION
      }) : null, s ? (0, l.jsx)("div", {
        className: G.previewButton,
        children: (0, l.jsx)(d.Button, {
          onClick: P,
          color: d.Button.Colors.PRIMARY,
          size: d.Button.Sizes.SMALL,
          look: d.Button.Looks.OUTLINED,
          children: M.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_PREVIEW
        })
      }) : null]
    }),
    B = (0, r.match)(v).with("basic_info", () => (0, l.jsx)(C.default, {
      guildId: t
    })).with("manage_listings", () => (0, l.jsx)(O.default, {
      guildId: t
    })).with("payment", () => (0, l.jsx)(h.default, {
      guildId: t
    })).exhaustive(),
    F = a ? (0, l.jsx)(d.TabBar.Panel, {
      id: v,
      children: B
    }) : (0, l.jsx)(d.Spinner, {});
  return (0, l.jsxs)(c.CreatorMonetizationSettingsDisabledContextProvider, {
    guildId: t,
    children: [y, (0, l.jsx)(T.default, {
      guild: n
    }), (0, l.jsx)("div", {
      className: G.tabBarContainer,
      children: b
    }), F]
  })
}(n = a || (a = {})).MANAGE_LISTINGS = "manage_listings", n.PAYMENT = "payment", n.BASIC_INFO = "basic_info"