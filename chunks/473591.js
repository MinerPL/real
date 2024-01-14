"use strict";
let i, r, l, s, a, o;
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var u = n("446674"),
  d = n("913144");
let c = !1,
  m = !1,
  f = null,
  _ = {},
  E = {},
  T = {},
  I = {};

function p() {
  i = void 0, r = void 0, l = void 0, s = void 0, a = void 0, f = null
}
class P extends u.default.Store {
  getSettings(e) {
    if (null != e) return T[e]
  }
  getProfile(e) {
    return null == e ? null : _[e]
  }
  getGeneratedPersonality() {
    return o
  }
  getPendingPersonality() {
    return i
  }
  getPendingNick() {
    return r
  }
  getErrors() {
    return f
  }
  hasPendingChanges() {
    return void 0 !== i || void 0 !== r || void 0 !== l || void 0 !== s || void 0 !== a
  }
  getPendingUpdates() {
    return {
      pendingAvatar: l,
      pendingNick: r,
      pendingPersonality: i,
      pendingBanner: s,
      pendingThemeColors: a
    }
  }
  isSavingSettings() {
    return c
  }
  isFetchingSettings(e) {
    var t;
    return null === (t = I[e]) || void 0 === t ? void 0 : t.isFetching
  }
  shouldFetchSettings(e) {
    var t, n;
    let i = null !== (t = I[e]) && void 0 !== t ? t : {
        isFetching: !1
      },
      r = Date.now(),
      l = r - (null !== (n = i.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 36e5;
    return !(null == i ? void 0 : i.isFetching) && l
  }
  isFetchingProfile(e) {
    var t;
    return null === (t = E[e]) || void 0 === t ? void 0 : t.isFetching
  }
  isEditingClydeProfile() {
    return m
  }
}
P.displayName = "ClydeStore";
var S = new P(d.default, {
  CLYDE_GUILD_SETTINGS_FETCH_START: function(e) {
    let {
      guildId: t
    } = e, n = I[t];
    I[t] = {
      isFetching: !0,
      lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
    }
  },
  CLYDE_GUILD_SETTINGS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      settings: n
    } = e;
    I[t] = {
      isFetching: !1,
      lastFetchTimestampMs: Date.now()
    }, T[t] = n
  },
  CLYDE_GUILD_SETTINGS_FETCH_FAIL: function(e) {
    let {
      guildId: t
    } = e, n = I[t];
    I[t] = {
      isFetching: !1,
      lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
    }
  },
  CLYDE_SET_PENDING_PERSONALITY: function(e) {
    let {
      personality: t,
      isGenerated: n
    } = e;
    i = t, n && (o = t)
  },
  CLYDE_SET_PENDING_NICK: function(e) {
    let {
      nick: t
    } = e;
    r = t
  },
  CLYDE_SET_PENDING_AVATAR: function(e) {
    let {
      avatar: t
    } = e;
    l = t
  },
  CLYDE_SET_PENDING_BANNER: function(e) {
    let {
      banner: t
    } = e;
    s = t
  },
  CLYDE_SET_PENDING_THEME_COLORS: function(e) {
    let {
      themeColors: t
    } = e;
    a = t
  },
  CLYDE_GUILD_SETTINGS_SAVE_START: function() {
    f = null, c = !0
  },
  CLYDE_GUILD_SETTINGS_SAVE_SUCCESS: function(e) {
    let {
      settings: t
    } = e;
    c = !1, T[t.guild_id] = t, p()
  },
  CLYDE_GUILD_SETTINGS_SAVE_FAIL: function(e) {
    c = !1, f = e.errors
  },
  CLYDE_RESET_PENDING_CHANGES: p,
  CLYDE_PROFILE_FETCH_START: function(e) {
    let {
      clydeProfileId: t
    } = e, n = E[t];
    E[t] = {
      isFetching: !0,
      lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
    }
  },
  CLYDE_PROFILE_FETCH_SUCCESS: function(e) {
    let {
      profile: t
    } = e;
    E[t.clyde_profile_id] = {
      isFetching: !1,
      lastFetchTimestampMs: Date.now()
    }, _[t.clyde_profile_id] = t
  },
  CLYDE_PROFILE_FETCH_FAIL: function(e) {
    let {
      clydeProfileId: t
    } = e, n = E[t];
    E[t] = {
      isFetching: !1,
      lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
    }
  },
  CLYDE_PROFILE_CREATE_SUCCESS: function(e) {
    let {
      profile: t
    } = e;
    _[t.clyde_profile_id] = t
  },
  CLYDE_PROFILE_EDITING_START: function() {
    m = !0
  },
  CLYDE_PROFILE_EDITING_END: function() {
    m = !1
  }
})