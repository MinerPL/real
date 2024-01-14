"use strict";
s.r(t), s.d(t, {
  default: function() {
    return j
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("627445"),
  i = s.n(l),
  r = s("446674"),
  o = s("77078"),
  d = s("913144"),
  u = s("79112"),
  c = s("642950"),
  S = s("812204"),
  E = s("716241"),
  f = s("685665"),
  T = s("360871"),
  m = s("184900"),
  _ = s("11899"),
  g = s("713135"),
  h = s("102985"),
  I = s("697218"),
  N = s("599110"),
  p = s("701909"),
  C = s("719923"),
  A = s("929423"),
  O = s("424562"),
  x = s("872306"),
  R = s("527274"),
  M = s("185153"),
  v = s("49111"),
  D = s("782340");

function L() {
  N.default.track(v.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
    location_page: v.AnalyticsPages.GUILD_MEMBER_PROFILE_SETTINGS,
    location_object: v.AnalyticsObjects.BADGE
  }), (0, A.closeGuildIdentitySettings)(), u.default.open(v.UserSettingsSections.PREMIUM)
}

function P(e) {
  (0, o.openModalLazy)(async () => {
    let {
      default: t
    } = await s.el("414242").then(s.bind(s, "414242"));
    return s => (0, a.jsx)(t, {
      source: {
        ...e,
        page: v.AnalyticsPages.GUILD_MEMBER_PROFILE_SETTINGS
      },
      ...s
    })
  })
}

function j(e) {
  let {
    selectedGuild: t
  } = e, {
    AnalyticsLocationProvider: s
  } = (0, f.default)(S.default.GUILD_PROFILE), l = (0, r.useStateFromStores)([I.default], () => {
    let e = I.default.getCurrentUser();
    return i(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
  }), u = (0, r.useStateFromStores)([g.default], () => !g.default.isFetchingProfile(l.id)), N = (0, r.useStateFromStores)([h.default], () => h.default.hidePersonalInformation), {
    pendingAvatar: j,
    pendingNickname: b,
    pendingBanner: U,
    pendingBio: B,
    pendingPronouns: y,
    pendingThemeColors: F,
    source: G
  } = (0, r.useStateFromStoresObject)([O.default], () => {
    let {
      pendingAvatar: e,
      pendingNickname: t,
      pendingBio: s,
      pendingPronouns: a,
      pendingBanner: n,
      pendingThemeColors: l
    } = O.default.getAllPending();
    return {
      pendingAvatar: e,
      pendingNickname: t,
      pendingBanner: n,
      pendingBio: s,
      pendingPronouns: a,
      pendingThemeColors: l,
      source: O.default.getSource()
    }
  });
  if (n.useEffect(() => () => d.default.wait(A.resetAllPending), []), n.useEffect(() => {
      null != G && E.default.trackWithMetadata(v.AnalyticEvents.SETTINGS_PANE_VIEWED, {
        settings_type: "guild",
        destination_pane: v.AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE,
        source: G
      })
    }, [G]), N) return (0, a.jsx)(c.default, {});
  if (!u) return (0, a.jsx)(o.Spinner, {});
  let k = C.default.canUsePremiumProfileCustomization(l),
    H = {
      user: l,
      guild: t,
      canUsePremiumCustomization: k,
      onAvatarChange: A.setPendingAvatar,
      onBannerChange: A.setPendingBanner,
      onUpsellClick: P,
      pendingAvatar: j,
      pendingBanner: U,
      pendingBio: B,
      pendingPronouns: y,
      pendingNickname: b,
      activityName: D.default.Messages.CHANGE_IDENTITY_SERVER_PROFILE,
      activityCharacter: T.FakeActivityCharacter.PHIBI,
      openPremiumSettings: L
    };
  return (0, a.jsxs)(s, {
    children: [(0, a.jsx)(o.Text, {
      variant: "text-sm/normal",
      children: D.default.Messages.PROFILE_CUSTOMIZATION_GUILD_HINT.format({
        helpCenterLink: p.default.getArticleURL(v.HelpdeskArticles.GUILD_PROFILES)
      })
    }), null != t ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(M.default, {
        guildId: t.id,
        onChange: e => {
          null != e && (0, A.setCurrentGuild)(e)
        }
      }), (0, a.jsx)(_.default, {
        previewTitle: D.default.Messages.CHANGE_IDENTITY_PREVIEW_WITH_GUILD_NAME.format({
          guildName: null == t ? void 0 : t.name
        }),
        profilePreview: (0, a.jsx)(m.default, {
          ...H,
          pendingThemeColors: F
        }),
        children: (0, a.jsx)(R.default, {})
      })]
    }) : (0, a.jsx)(x.default, {})]
  })
}