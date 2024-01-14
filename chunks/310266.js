"use strict";
s.r(t), s.d(t, {
  GuildProductsSettingsOverview: function() {
    return O
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
  _ = s("258984"),
  T = s("305961"),
  I = s("697218"),
  S = s("701909"),
  N = s("442379"),
  g = s("533161"),
  f = s("166364"),
  A = s("691659"),
  L = s("49111"),
  m = s("782340"),
  C = s("80920");

function O(e) {
  let {
    guildId: t,
    hasValidApplication: s
  } = e, {
    listingsLoaded: a
  } = (0, N.useFetchGuildProductListingsForGuild)(t), n = (0, o.default)([T.default], () => T.default.getGuild(t)), O = (0, o.default)([I.default], () => I.default.getCurrentUser()), h = null == n ? void 0 : n.isOwner(O), {
    loading: R
  } = (0, u.useMonetizationSettings)(t), [D, M] = i.useState(s ? "manage_listings" : "payment");
  if (!a || R) return (0, l.jsx)(d.Spinner, {});
  if (null == n) return null;
  let G = (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(d.FormTitle, {
        tag: d.FormTitleTags.H1,
        children: m.default.Messages.GUILD_PRODUCTS_TITLE
      }), (0, l.jsx)(d.FormText, {
        type: d.FormText.Types.DESCRIPTION,
        children: m.default.Messages.GUILD_PRODUCTS_SETTINGS_DESCRIPTION.format({
          monetizationPolicyLink: S.default.getArticleURL(L.HelpdeskArticles.CREATOR_POLICY),
          serverProductsSupportLink: S.default.getCreatorSupportArticleURL(L.HelpdeskArticles.SERVER_PRODUCTS)
        })
      })]
    }),
    x = (0, l.jsxs)(d.TabBar, {
      type: "top",
      look: "brand",
      className: C.tabBar,
      "aria-label": m.default.Messages.GUILD_PRODUCTS_TITLE,
      selectedItem: D,
      onItemSelect: M,
      children: [(0, l.jsx)(E.default, {
        id: "basic_info",
        disabledTooltip: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO_NEEDS_APPLICATION,
        disabled: !s,
        children: m.default.Messages.GUILD_PRODUCTS_BASIC_INFO_SECTION
      }), (0, l.jsx)(E.default, {
        id: "manage_listings",
        disabledTooltip: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO_NEEDS_APPLICATION,
        disabled: !s,
        children: m.default.Messages.GUILD_PRODUCTS_LISTINGS_SECTION
      }), h ? (0, l.jsx)(d.TabBar.Item, {
        id: "payment",
        className: C.tabBarItem,
        children: m.default.Messages.GUILD_PRODUCTS_PAYMENT_SECTION
      }) : null]
    }),
    p = (0, r.match)(D).with("basic_info", () => (0, l.jsx)(g.default, {
      guildId: t
    })).with("manage_listings", () => (0, l.jsx)(f.default, {
      guildId: t
    })).with("payment", () => (0, l.jsx)(A.default, {
      guildId: t
    })).exhaustive(),
    U = a ? (0, l.jsx)(d.TabBar.Panel, {
      id: D,
      children: p
    }) : (0, l.jsx)(d.Spinner, {});
  return (0, l.jsxs)(c.CreatorMonetizationSettingsDisabledContextProvider, {
    guildId: t,
    children: [G, (0, l.jsx)(_.default, {
      guild: n
    }), x, U]
  })
}(n = a || (a = {})).MANAGE_LISTINGS = "manage_listings", n.PAYMENT = "payment", n.BASIC_INFO = "basic_info"