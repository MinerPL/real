"use strict";
n.r(t), n.d(t, {
  saveProfileChanges: function() {
    return E
  },
  handleProfileAccessibilityTooltipViewed: function() {
    return _
  },
  resetPendingProfileChanges: function() {
    return S
  },
  setPendingBanner: function() {
    return T
  },
  setPendingBio: function() {
    return p
  },
  setPendingPronouns: function() {
    return A
  },
  setPendingAccentColor: function() {
    return g
  },
  setPendingThemeColors: function() {
    return C
  },
  setTryItOutAvatar: function() {
    return I
  },
  setTryItOutAvatarDecoration: function() {
    return N
  },
  setTryItOutBanner: function() {
    return U
  },
  setTryItOutThemeColors: function() {
    return O
  }
});
var i = n("872717"),
  l = n("913144"),
  u = n("448993"),
  o = n("884351"),
  a = n("845579"),
  r = n("697218"),
  d = n("599110"),
  s = n("49111"),
  c = n("646718");

function f(e) {
  d.default.track(s.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
    feature_name: e,
    feature_tier: c.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
  })
}
async function E(e, t) {
  var n, d;
  let c = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
  if (null == c) return;
  let f = a.UseLegacyChatInput.getSetting();
  null != e.bio && f && (e.bio = o.default.parse(void 0, e.bio).content);
  try {
    l.default.dispatch({
      type: "USER_PROFILE_UPDATE_START",
      userId: c
    });
    let n = await i.default.patch({
      url: null != t ? s.Endpoints.GUILD_PROFILE(t, s.ME) : s.Endpoints.USER_PROFILE(s.ME),
      body: e
    });
    if (n.ok) {
      let e = null === (d = n.body.profile_effect) || void 0 === d ? void 0 : d.id;
      l.default.dispatch({
        type: "USER_PROFILE_UPDATE_SUCCESS",
        userId: c,
        profileEffectId: e,
        ...n.body
      })
    } else {
      let e = new u.APIError(n);
      l.default.dispatch({
        type: "USER_PROFILE_UPDATE_FAILURE",
        errors: n.body,
        apiError: e
      })
    }
    return n
  } catch (t) {
    let e = new u.APIError(t);
    l.default.dispatch({
      type: "USER_PROFILE_UPDATE_FAILURE",
      errors: {},
      apiError: e
    })
  }
}

function _() {
  l.default.dispatch({
    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
  })
}

function S() {
  l.default.dispatch({
    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
  })
}

function T(e) {
  l.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
    banner: e
  })
}

function p(e) {
  l.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
    bio: e
  })
}

function A(e) {
  l.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
    pronouns: e
  })
}

function g(e) {
  l.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
    color: e
  })
}

function C(e) {
  l.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
    themeColors: e
  })
}

function I(e) {
  l.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
    avatar: e
  }), f(c.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
}

function N(e) {
  l.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
    avatarDecoration: e
  }), f(c.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
}

function U(e) {
  l.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
    banner: e
  }), f(c.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
}

function O(e) {
  l.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
    themeColors: e
  }), f(c.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
}