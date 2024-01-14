"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var l = n("37983");
n("884691");
var i = n("627445"),
  r = n.n(i),
  s = n("446674"),
  a = n("184900"),
  o = n("11899"),
  u = n("447645"),
  c = n("569460"),
  d = n("52704"),
  f = n("121370"),
  h = n("26989"),
  E = n("305961"),
  C = n("697218"),
  p = n("335189"),
  _ = n("473591"),
  v = n("680894"),
  m = n("782340"),
  R = n("618641");

function I(e) {
  let {
    guildId: t,
    clydeUser: n
  } = e, {
    pendingNick: i,
    pendingThemeColors: r
  } = (0, s.useStateFromStoresObject)([_.default], () => _.default.getPendingUpdates()), a = (0, s.useStateFromStores)([h.default], () => h.default.getMember(t, v.CLYDE_AI_USER_ID));
  return (0, l.jsxs)("div", {
    className: R.editProfileSections,
    children: [(0, l.jsx)(c.default, {
      placeholder: m.default.Messages.CLYDE_NAME,
      errors: [],
      currentGlobalName: null == a ? void 0 : a.nick,
      pendingGlobalName: i,
      onGlobalNameChange: p.setPendingNick
    }), (0, l.jsx)(u.default, {
      guildId: t,
      onAvatarChange: p.setPendingAvatar,
      showRemoveAvatarButton: !0,
      sectionTitle: m.default.Messages.CLYDE_SETTINGS_AVATAR_HEADER,
      isClyde: !0
    }), (0, l.jsx)(d.default, {
      guildId: t,
      onBannerChange: p.setPendingBanner,
      showRemoveBannerButton: !0,
      showPremiumIcon: !1
    }), (0, l.jsx)(f.default, {
      user: n,
      guildId: t,
      showPremiumIcon: !1,
      preventDisabled: !0,
      pendingColors: null != r ? r : void 0,
      onThemeColorsChange: p.setPendingThemeColors
    })]
  })
}

function g(e) {
  let {
    guildId: t
  } = e, {
    pendingNick: n,
    pendingAvatar: i,
    pendingBanner: u,
    pendingThemeColors: c
  } = (0, s.useStateFromStoresObject)([_.default], () => _.default.getPendingUpdates()), d = (0, s.useStateFromStores)([C.default], () => C.default.getUser(v.CLYDE_AI_USER_ID));
  r(null != d, "Clyde User must exist");
  let f = (0, s.useStateFromStores)([E.default], () => E.default.getGuild(t));
  return (0, l.jsx)(o.default, {
    className: R.profileCustomizationTab,
    previewTitle: "Clyde",
    profilePreview: (0, l.jsx)(a.default, {
      user: d,
      guild: f,
      canUsePremiumCustomization: !0,
      onAvatarChange: p.setPendingAvatar,
      onBannerChange: p.setPendingBanner,
      pendingNickname: null != n ? n : void 0,
      pendingAvatar: i,
      pendingBanner: u,
      pendingThemeColors: null != c ? c : void 0,
      pendingBio: void 0,
      pendingPronouns: void 0,
      hideFakeActivity: !0
    }),
    children: (0, l.jsx)(I, {
      guildId: t,
      clydeUser: d
    })
  })
}