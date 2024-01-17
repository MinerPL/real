"use strict";
let i, l, r, a, s, o, u, d, c;
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var f = n("446674"),
  h = n("913144"),
  E = n("49111");
let _ = E.FormStates.CLOSED,
  p = {},
  I = !1;

function C() {
  _ = E.FormStates.CLOSED, p = {}, u = null, d = void 0, c = []
}

function T() {
  S(), v(), p = {}, _ = E.FormStates.OPEN
}

function S() {
  i = void 0, s = void 0
}

function v() {
  l = void 0, r = void 0, a = void 0, o = void 0
}
class N extends f.default.Store {
  getFormState() {
    return _
  }
  getErrors() {
    return p
  }
  showNotice() {
    return void 0 !== i || void 0 !== l || void 0 !== r || void 0 !== a || void 0 !== s || void 0 !== o
  }
  getPendingAvatar() {
    return i
  }
  getPendingBanner() {
    return l
  }
  getPendingBio() {
    return r
  }
  getPendingNickname() {
    return s
  }
  getPendingPronouns() {
    return a
  }
  getPendingAccentColor() {
    return s
  }
  getPendingThemeColors() {
    return o
  }
  getAllPending() {
    return {
      pendingAvatar: i,
      pendingBanner: l,
      pendingBio: r,
      pendingPronouns: a,
      pendingNickname: s,
      pendingThemeColors: o
    }
  }
  getGuild() {
    return u
  }
  getSource() {
    return d
  }
  getAnalyticsLocations() {
    return c
  }
  getIsDisableSubmit() {
    return I
  }
}
N.displayName = "GuildIdentitySettingsStore";
var g = new N(h.default, {
  GUILD_IDENTITY_SETTINGS_INIT: function(e) {
    u = e.guild, _ = E.FormStates.OPEN, p = {}, d = e.source, c = e.analyticsLocations
  },
  GUILD_IDENTITY_SETTINGS_CLOSE: C,
  GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
    T(), C()
  },
  GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
    u = e.guild, p = {}
  },
  GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
    _ = E.FormStates.SUBMITTING, p = {}
  },
  GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
    var t;
    if (_ !== E.FormStates.SUBMITTING) return !1;
    _ = E.FormStates.OPEN, p = null !== (t = e.errors) && void 0 !== t ? t : {}
  },
  USER_PROFILE_UPDATE_FAILURE: function(e) {
    _ = E.FormStates.OPEN, p = e.errors
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(e) {
    let {
      avatar: t
    } = e;
    i = t
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
    let {
      banner: t
    } = e;
    l = t
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
    let {
      bio: t
    } = e;
    r = t
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
    let {
      pronouns: t
    } = e;
    a = t
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
    let {
      nickname: t
    } = e;
    s = t
  },
  GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
    let {
      themeColors: t
    } = e;
    o = t
  },
  GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: S,
  GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: v,
  GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: T,
  GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: T,
  GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
    p = {}
  },
  GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
    let {
      disable: t
    } = e;
    I = t
  }
})