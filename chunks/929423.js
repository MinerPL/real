"use strict";
n.r(t), n.d(t, {
  saveGuildIdentityChanges: function() {
    return s
  },
  setCurrentGuild: function() {
    return o
  },
  initGuildIdentitySettings: function() {
    return u
  },
  closeGuildIdentitySettings: function() {
    return d
  },
  resetAndCloseGuildIdentityForm: function() {
    return c
  },
  setPendingAvatar: function() {
    return f
  },
  setPendingBanner: function() {
    return h
  },
  setPendingBio: function() {
    return E
  },
  setPendingPronouns: function() {
    return _
  },
  setPendingNickname: function() {
    return p
  },
  setPendingThemeColors: function() {
    return I
  },
  resetPendingMemberChanges: function() {
    return C
  },
  resetPendingProfileChanges: function() {
    return T
  },
  resetAllPending: function() {
    return S
  },
  clearErrors: function() {
    return v
  },
  setDisableSubmit: function() {
    return N
  }
}), n("70102");
var i = n("872717"),
  l = n("913144"),
  r = n("54239"),
  a = n("49111");
async function s(e, t) {
  let {
    nick: n,
    avatar: r
  } = t;
  if (null == e) throw Error("Need guildId");
  l.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
  });
  try {
    let t = await i.default.patch({
      url: a.Endpoints.SET_GUILD_MEMBER(e),
      body: {
        nick: n,
        avatar: r
      },
      oldFormErrors: !0
    });
    return l.default.dispatch({
      type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
    }), l.default.dispatch({
      type: "GUILD_MEMBER_PROFILE_UPDATE",
      guildMember: t.body,
      guildId: e
    }), t
  } catch (t) {
    let e = t.body;
    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), l.default.dispatch({
      type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
      errors: t.body
    })
  }
}

function o(e) {
  l.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
    guild: e
  })
}

function u(e, t) {
  l.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_INIT",
    guild: e,
    analyticsLocations: t
  })
}

function d() {
  l.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
  }), (0, r.popLayer)()
}

function c() {
  l.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
  })
}

function f(e) {
  l.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
    avatar: e
  })
}

function h(e) {
  l.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
    banner: e
  })
}

function E(e) {
  l.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
    bio: e
  })
}

function _(e) {
  l.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
    pronouns: e
  })
}

function p(e) {
  l.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
    nickname: e
  })
}

function I(e) {
  l.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
    themeColors: e
  })
}

function C() {
  l.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
  })
}

function T() {
  l.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
  })
}

function S() {
  l.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
  })
}

function v() {
  l.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
  })
}

function N(e) {
  l.default.dispatch({
    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
    disable: e
  })
}