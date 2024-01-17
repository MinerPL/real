"use strict";
n.r(t), n.d(t, {
  saveProfileChanges: function() {
    return E
  },
  handleProfileAccessibilityTooltipViewed: function() {
    return _
  },
  resetPendingProfileChanges: function() {
    return p
  },
  setPendingBanner: function() {
    return C
  },
  setPendingBio: function() {
    return I
  },
  setPendingPronouns: function() {
    return A
  },
  setPendingAccentColor: function() {
    return T
  },
  setPendingThemeColors: function() {
    return R
  },
  setTryItOutAvatar: function() {
    return h
  },
  setTryItOutAvatarDecoration: function() {
    return S
  },
  setTryItOutBanner: function() {
    return N
  },
  setTryItOutThemeColors: function() {
    return m
  }
});
var r = n("872717"),
  i = n("913144"),
  l = n("448993"),
  o = n("884351"),
  s = n("845579"),
  a = n("697218"),
  u = n("599110"),
  c = n("49111"),
  d = n("646718");

function f(e) {
  u.default.track(c.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
    feature_name: e,
    feature_tier: d.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
  })
}
async function E(e, t) {
  var n, u;
  let d = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
  if (null == d) return;
  let f = s.UseLegacyChatInput.getSetting();
  null != e.bio && f && (e.bio = o.default.parse(void 0, e.bio).content);
  try {
    i.default.dispatch({
      type: "USER_PROFILE_UPDATE_START",
      userId: d
    });
    let n = await r.default.patch({
      url: null != t ? c.Endpoints.GUILD_PROFILE(t, c.ME) : c.Endpoints.USER_PROFILE(c.ME),
      body: e
    });
    if (n.ok) {
      let e = null === (u = n.body.profile_effect) || void 0 === u ? void 0 : u.id;
      i.default.dispatch({
        type: "USER_PROFILE_UPDATE_SUCCESS",
        userId: d,
        profileEffectId: e,
        ...n.body
      })
    } else {
      let e = new l.APIError(n);
      i.default.dispatch({
        type: "USER_PROFILE_UPDATE_FAILURE",
        errors: n.body,
        apiError: e
      })
    }
    return n
  } catch (t) {
    let e = new l.APIError(t);
    i.default.dispatch({
      type: "USER_PROFILE_UPDATE_FAILURE",
      errors: {},
      apiError: e
    })
  }
}

function _() {
  i.default.dispatch({
    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
  })
}

function p() {
  i.default.dispatch({
    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
  })
}

function C(e) {
  i.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
    banner: e
  })
}

function I(e) {
  i.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
    bio: e
  })
}

function A(e) {
  i.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
    pronouns: e
  })
}

function T(e) {
  i.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
    color: e
  })
}

function R(e) {
  i.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
    themeColors: e
  })
}

function h(e) {
  i.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
    avatar: e
  }), f(d.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
}

function S(e) {
  i.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
    avatarDecoration: e
  }), f(d.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
}

function N(e) {
  i.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
    banner: e
  }), f(d.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
}

function m(e) {
  i.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
    themeColors: e
  }), f(d.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
}