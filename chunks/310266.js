"use strict";
s.r(t), s.d(t, {
  GuildProductsSettingsOverview: function() {
    return h
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
  I = s("305961"),
  S = s("697218"),
  N = s("701909"),
  g = s("442379"),
  f = s("533161"),
  A = s("166364"),
  L = s("691659"),
  m = s("49111"),
  C = s("782340"),
  O = s("80920");

function h(e) {
  let {
    guildId: t,
    hasValidApplication: s
  } = e, {
    listingsLoaded: a
  } = (0, g.useFetchGuildProductListingsForGuild)(t), n = (0, o.default)([I.default], () => I.default.getGuild(t)), h = (0, o.default)([S.default], () => S.default.getCurrentUser()), R = (null == n ? void 0 : n.isOwner(h)) === !0, {
    loading: D
  } = (0, u.useMonetizationSettings)(t), [M, G] = i.useState(s ? "manage_listings" : "payment");
  if ((0, _.useNewOwnerOnboardingRequired)(n), !a || D) return (0, l.jsx)(d.Spinner, {});
  if (null == n) return null;
  let x = (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(d.FormTitle, {
        tag: d.FormTitleTags.H1,
        children: C.default.Messages.GUILD_PRODUCTS_TITLE
      }), (0, l.jsx)(d.FormText, {
        type: d.FormText.Types.DESCRIPTION,
        children: C.default.Messages.GUILD_PRODUCTS_SETTINGS_DESCRIPTION.format({
          monetizationPolicyLink: N.default.getArticleURL(m.HelpdeskArticles.CREATOR_POLICY),
          serverProductsSupportLink: N.default.getCreatorSupportArticleURL(m.HelpdeskArticles.SERVER_PRODUCTS)
        })
      })]
    }),
    p = (0, l.jsxs)(d.TabBar, {
      type: "top",
      look: "brand",
      className: O.tabBar,
      "aria-label": C.default.Messages.GUILD_PRODUCTS_TITLE,
      selectedItem: M,
      onItemSelect: G,
      children: [(0, l.jsx)(E.default, {
        id: "basic_info",
        disabledTooltip: C.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO_NEEDS_APPLICATION,
        disabled: !s,
        children: C.default.Messages.GUILD_PRODUCTS_BASIC_INFO_SECTION
      }), (0, l.jsx)(E.default, {
        id: "manage_listings",
        disabledTooltip: C.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO_NEEDS_APPLICATION,
        disabled: !s,
        children: C.default.Messages.GUILD_PRODUCTS_LISTINGS_SECTION
      }), R ? (0, l.jsx)(d.TabBar.Item, {
        id: "payment",
        className: O.tabBarItem,
        children: C.default.Messages.GUILD_PRODUCTS_PAYMENT_SECTION
      }) : null]
    }),
    U = (0, r.match)(M).with("basic_info", () => (0, l.jsx)(f.default, {
      guildId: t
    })).with("manage_listings", () => (0, l.jsx)(A.default, {
      guildId: t
    })).with("payment", () => (0, l.jsx)(L.default, {
      guildId: t
    })).exhaustive(),
    v = a ? (0, l.jsx)(d.TabBar.Panel, {
      id: M,
      children: U
    }) : (0, l.jsx)(d.Spinner, {});
  return (0, l.jsxs)(c.CreatorMonetizationSettingsDisabledContextProvider, {
    guildId: t,
    children: [x, (0, l.jsx)(T.default, {
      guild: n
    }), p, v]
  })
}(n = a || (a = {})).MANAGE_LISTINGS = "manage_listings", n.PAYMENT = "payment", n.BASIC_INFO = "basic_info"