"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var l = n("37983");
n("884691");
var r = n("627445"),
  i = n.n(r),
  s = n("446674"),
  a = n("184900"),
  o = n("11899"),
  u = n("447645"),
  c = n("569460"),
  d = n("52704"),
  f = n("121370"),
  h = n("26989"),
  E = n("305961"),
  p = n("697218"),
  C = n("335189"),
  _ = n("473591"),
  m = n("680894"),
  v = n("782340"),
  I = n("618641");

function g(e) {
  let {
    guildId: t,
    clydeUser: n
  } = e, {
    pendingNick: r,
    pendingThemeColors: i
  } = (0, s.useStateFromStoresObject)([_.default], () => _.default.getPendingUpdates()), a = (0, s.useStateFromStores)([h.default], () => h.default.getMember(t, m.CLYDE_AI_USER_ID));
  return (0, l.jsxs)("div", {
    className: I.editProfileSections,
    children: [(0, l.jsx)(c.default, {
      placeholder: v.default.Messages.CLYDE_NAME,
      errors: [],
      currentGlobalName: null == a ? void 0 : a.nick,
      pendingGlobalName: r,
      onGlobalNameChange: C.setPendingNick
    }), (0, l.jsx)(u.default, {
      guildId: t,
      onAvatarChange: C.setPendingAvatar,
      showRemoveAvatarButton: !0,
      sectionTitle: v.default.Messages.CLYDE_SETTINGS_AVATAR_HEADER,
      isClyde: !0
    }), (0, l.jsx)(d.default, {
      guildId: t,
      onBannerChange: C.setPendingBanner,
      showRemoveBannerButton: !0,
      showPremiumIcon: !1
    }), (0, l.jsx)(f.default, {
      user: n,
      guildId: t,
      showPremiumIcon: !1,
      preventDisabled: !0,
      pendingColors: null != i ? i : void 0,
      onThemeColorsChange: C.setPendingThemeColors
    })]
  })
}

function S(e) {
  let {
    guildId: t
  } = e, {
    pendingNick: n,
    pendingAvatar: r,
    pendingBanner: u,
    pendingThemeColors: c
  } = (0, s.useStateFromStoresObject)([_.default], () => _.default.getPendingUpdates()), d = (0, s.useStateFromStores)([p.default], () => p.default.getUser(m.CLYDE_AI_USER_ID));
  i(null != d, "Clyde User must exist");
  let f = (0, s.useStateFromStores)([E.default], () => E.default.getGuild(t));
  return (0, l.jsx)(o.default, {
    className: I.profileCustomizationTab,
    previewTitle: "Clyde",
    profilePreview: (0, l.jsx)(a.default, {
      user: d,
      guild: f,
      canUsePremiumCustomization: !0,
      onAvatarChange: C.setPendingAvatar,
      onBannerChange: C.setPendingBanner,
      pendingNickname: null != n ? n : void 0,
      pendingAvatar: r,
      pendingBanner: u,
      pendingThemeColors: null != c ? c : void 0,
      pendingBio: void 0,
      pendingPronouns: void 0,
      hideFakeActivity: !0
    }),
    children: (0, l.jsx)(g, {
      guildId: t,
      clydeUser: d
    })
  })
}