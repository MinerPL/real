"use strict";
let s, o, r, l, a, i, u, d, E, _, c, T, S, N;
n.r(t), n.d(t, {
  default: function() {
    return G
  }
});
var C = n("265586"),
  f = n("446674"),
  A = n("913144"),
  I = n("49111");
let R = I.FormStates.CLOSED,
  h = {},
  p = !1;

function U() {
  R = I.FormStates.OPEN, h = {}
}

function O() {
  R = I.FormStates.CLOSED, h = {}
}

function m() {
  v(), g(), h = {}
}

function v() {
  s = void 0, o = void 0, r = void 0, l = void 0
}

function g() {
  a = void 0, i = void 0, u = void 0, d = void 0, E = void 0, l = void 0
}

function M() {
  c = void 0, T = void 0, S = void 0, N = void 0, _ = void 0
}
class D extends f.default.Store {
  getFormState() {
    return R
  }
  getErrors() {
    return h
  }
  showNotice() {
    return void 0 !== s || void 0 !== a || void 0 !== i || void 0 !== u || void 0 !== d || void 0 !== E || void 0 !== r || void 0 !== l || void 0 !== o
  }
  getPendingAvatar() {
    return s
  }
  getPendingGlobalName() {
    return o
  }
  getPendingBanner() {
    return a
  }
  getPendingBio() {
    return i
  }
  getPendingPronouns() {
    return u
  }
  getPendingAccentColor() {
    return d
  }
  getPendingThemeColors() {
    return E
  }
  getPendingAvatarDecoration() {
    return r
  }
  getPendingProfileEffectId() {
    return l
  }
  getAllPending() {
    return {
      pendingAvatar: s,
      pendingBanner: a,
      pendingBio: i,
      pendingPronouns: u,
      pendingAccentColor: d,
      pendingThemeColors: E,
      pendingAvatarDecoration: r,
      pendingProfileEffectId: l,
      pendingGlobalName: o
    }
  }
  getTryItOutThemeColors() {
    return _
  }
  getTryItOutAvatar() {
    return c
  }
  getTryItOutAvatarDecoration() {
    return T
  }
  getTryItOutProfileEffectId() {
    return S
  }
  getTryItOutBanner() {
    return N
  }
  getAllTryItOut() {
    return {
      tryItOutThemeColors: _,
      tryItOutAvatar: c,
      tryItOutAvatarDecoration: T,
      tryItOutProfileEffectId: S,
      tryItOutBanner: N
    }
  }
  getIsDisableSubmit() {
    return p
  }
}
D.displayName = "UserSettingsAccountStore";
var G = new D(A.default, {
  USER_SETTINGS_ACCOUNT_INIT: U,
  USER_SETTINGS_MODAL_INIT: U,
  USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: U,
  USER_SETTINGS_MODAL_SET_SECTION: function(e) {
    let {
      section: t
    } = e;
    return t === I.UserSettingsSections.ACCOUNT && U()
  },
  USER_SETTINGS_ACCOUNT_CLOSE: O,
  USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: function() {
    m(), M(), O()
  },
  USER_SETTINGS_ACCOUNT_SUBMIT: function() {
    R = I.FormStates.SUBMITTING, h = {}
  },
  USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: function(e) {
    var t;
    if (R !== I.FormStates.SUBMITTING) return !1;
    R = I.FormStates.OPEN, h = null !== (t = e.errors) && void 0 !== t ? t : {}
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: function(e) {
    let {
      avatar: t
    } = e;
    s = t, c = void 0
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: function(e) {
    let {
      globalName: t
    } = e;
    o = t
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: function(e) {
    let {
      avatarDecoration: t
    } = e;
    r = t
  },
  USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM: function(e) {
    let {
      item: t
    } = e;
    (null == t ? void 0 : t.type) === C.CollectiblesItemType.PROFILE_EFFECT ? (T = null, S = null == t ? void 0 : t.id) : (S = null, T = t)
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: function(e) {
    let {
      profileEffectId: t
    } = e;
    l = t
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: function(e) {
    let {
      banner: t
    } = e;
    a = t
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: function(e) {
    let {
      bio: t
    } = e;
    i = t
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: function(e) {
    let {
      pronouns: t
    } = e;
    u = t
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: function(e) {
    let {
      color: t
    } = e;
    d = t
  },
  USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: function(e) {
    let {
      themeColors: t
    } = e;
    E = t
  },
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: function(e) {
    let {
      avatar: t
    } = e;
    c = t
  },
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: function(e) {
    let {
      avatarDecoration: t
    } = e;
    T = t
  },
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: function(e) {
    let {
      profileEffectId: t
    } = e;
    S = t
  },
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: function(e) {
    let {
      banner: t
    } = e;
    N = t
  },
  USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: function(e) {
    let {
      themeColors: t
    } = e;
    _ = t
  },
  USER_SETTINGS_CLEAR_ERRORS: function() {
    h = {}
  },
  USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: v,
  USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: g,
  USER_SETTINGS_RESET_ALL_PENDING: m,
  USER_SETTINGS_RESET_ALL_TRY_IT_OUT: M,
  USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: function() {
    r = void 0
  },
  LOGOUT: function() {
    s = void 0
  },
  USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT: function(e) {
    let {
      disable: t
    } = e;
    p = t
  }
})