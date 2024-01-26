"use strict";
let i, s;
n.r(t), n.d(t, {
  default: function() {
    return ed
  }
}), n("222007"), n("860677"), n("424973"), n("70102");
var r = n("627445"),
  a = n.n(r),
  o = n("171718"),
  l = n("391679"),
  u = n("446674"),
  d = n("872717"),
  c = n("95410"),
  f = n("913144"),
  _ = n("798609"),
  h = n("821316"),
  g = n("605250"),
  m = n("393414"),
  E = n("705873"),
  p = n("599110"),
  v = n("831588"),
  S = n("286235"),
  T = n("72177"),
  I = n("455079"),
  C = n("49111"),
  A = n("586391");
let y = n("551042").hasModalOpen,
  N = new g.default("AuthenticationStore"),
  R = "fingerprint",
  O = "email_cache",
  D = "user_id_cache",
  P = null,
  b = null,
  L = null,
  M = null,
  U = null,
  k = null,
  w = null,
  V = C.LoginStates.NONE,
  G = C.RegistrationStates.NONE,
  F = !1,
  x = [],
  B = "",
  H = !1,
  Y = null,
  j = !1,
  W = !1,
  K = "",
  z = !1,
  q = !1,
  X = {},
  Q = {},
  Z = null,
  J = null,
  $ = null,
  ee = null;

function et(e) {
  let t = null != o.default.getToken(),
    n = null != c.default.get(C.TOKEN_KEY);
  N.verbose(e, {
    tokenManagerHasToken: t,
    storageHasToken: n
  })
}

function en() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  if (U = c.default.get(R), null != J) return J;
  let t = null != U ? U : o.default.getToken();
  !(!(0, m.isValidFingerprintRoute)() || !e && null != t || T.default.isHandoffAvailable()) && ei({
    withGuildExperiments: !0
  })
}

function ei(e) {
  let {
    withGuildExperiments: t
  } = e, n = {}, i = p.default.getSuperPropertiesBase64();
  null != i && (n["X-Super-Properties"] = i), null != U && (n["X-Fingerprint"] = U), J = d.default.get({
    url: C.Endpoints.EXPERIMENTS,
    query: {
      with_guild_experiments: t
    },
    headers: n,
    context: {
      location: (0, m.getFingerprintLocation)()
    },
    retries: 3,
    oldFormErrors: !0
  }).then(e => {
    let {
      fingerprint: t,
      assignments: n,
      guild_experiments: i
    } = e.body;
    t && f.default.dispatch({
      type: "FINGERPRINT",
      fingerprint: t
    }), f.default.dispatch({
      type: "EXPERIMENTS_FETCH_SUCCESS",
      fingerprint: t,
      experiments: n,
      guildExperiments: i
    }), J = null
  }, () => {
    J = null, f.default.dispatch({
      type: "EXPERIMENTS_FETCH_FAILURE"
    })
  })
}

function es() {
  k = U, U = null, c.default.remove(R)
}

function er(e, t) {
  et("setAuthToken called."), o.default.setToken(e, t)
}

function ea() {
  et("removeAuthToken called."), o.default.removeToken()
}

function eo() {
  F = !0, el(), f.default.wait(() => {
    (0, m.transitionTo)(C.Routes.REGISTER)
  })
}

function el(e) {
  et("handleLogout called."), ea(), es(), !(null == e ? void 0 : e.isSwitchingAccount) && en(), u.default.PersistedStore.clearAll({
    omit: ["InstallationManagerStore", "AgeGateStore", "NativePermissionsStore", "MultiAccountStore", "DraftStore", "OverlayStoreV2", "StreamerModeStore", "LoginRequiredActionStore"],
    type: (null == e ? void 0 : e.isSwitchingAccount) ? "user-data-only" : "all"
  }), I.default.clearAll(), h.clear(), S.default.clearUser(), c.default.remove(D), P = null, V = (null == e ? void 0 : e.isSwitchingAccount) ? C.LoginStates.LOGGING_IN : C.LoginStates.NONE, G = C.RegistrationStates.NONE, B = "", K = "", Y = null, H = !1, z = !1, q = !1, X = {}, Q = {}
}
class eu extends u.default.Store {
  initialize() {
    P = c.default.get(D), b = c.default.get(O), $ = c.default.get("login_cache"), null == o.default.getToken() && en()
  }
  getEmail() {
    return b
  }
  getLogin() {
    return $
  }
  didVerifyFail() {
    return z
  }
  getVerifyErrors() {
    return X
  }
  didVerifySucceed() {
    return q
  }
  getLoginStatus() {
    return V
  }
  getRegisterStatus() {
    return G
  }
  getId() {
    return P
  }
  getSessionId() {
    return L
  }
  getAuthSessionIdHash() {
    return M
  }
  getToken() {
    return (0, v.getToken)()
  }
  isAuthenticated() {
    return (0, v.isAuthenticated)()
  }
  getFingerprint() {
    return U
  }
  getAnalyticsToken() {
    return w
  }
  getErrors() {
    return Q
  }
  getMFATicket() {
    return B
  }
  getMFASMS() {
    return H
  }
  getMFATotp() {
    return j
  }
  getMFABackup() {
    return W
  }
  getMFAWebAuthn() {
    return Y
  }
  getMFAMethods() {
    let e = [];
    return null != Y && e.push({
      type: "webauthn",
      challenge: Y
    }), j && e.push({
      type: "totp",
      backup_codes_allowed: W
    }), W && e.push({
      type: "backup"
    }), H && e.push({
      type: "sms"
    }), e
  }
  hasTOTPEnabled() {
    return x.includes(_.AuthenticatorType.TOTP)
  }
  hasSMSEnabled() {
    return x.includes(_.AuthenticatorType.SMS)
  }
  hasWebAuthnEnabled() {
    return x.includes(_.AuthenticatorType.WEBAUTHN)
  }
  getMaskedPhone() {
    return K
  }
  getCredentials() {
    if (null == i) throw Error("no credentials");
    return i
  }
  getVerifyingUserId() {
    return Z
  }
  getCurrentRegistrationOptions() {
    return s
  }
  allowLogoutRedirect() {
    return !F
  }
  getWebAuthnChallenge() {
    return Y
  }
  getSuspendedUserToken() {
    return ee
  }
}
eu.displayName = "AuthenticationStore";
var ed = new eu(f.default, {
  CONNECTION_OPEN: function(e) {
    var t;
    let {
      user: n,
      sessionId: i,
      authSessionIdHash: s,
      analyticsToken: r,
      auth: a
    } = e;
    et("handleConnectionOpen called"), S.default.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, E.default)(n)), L = i, M = s, w = r, P = n.id, b = n.email, void 0 !== a && (x = a.authenticator_types), c.default.set(O, n.email), c.default.set(D, n.id)
  },
  OVERLAY_INITIALIZE: function(e) {
    var t;
    let {
      user: n,
      sessionId: i,
      analyticsToken: s,
      token: r
    } = e;
    S.default.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, E.default)(n)), L = i, w = s, er(r), es(), P = n.id, c.default.set(D, n.id)
  },
  CONNECTION_CLOSED: function(e) {
    let {
      code: t
    } = e;
    if (et("handleConnectionClosed called with code ".concat(t, ".")), 4004 === t) {
      if (F || y(A.NEW_USER_AGE_GATE_MODAL_KEY) || y(A.EXISTING_USER_AGE_GATE_MODAL_KEY)) {
        eo();
        return
      }
      p.default.track(C.AnalyticEvents.APP_USER_DEAUTHENTICATED, {
        user_id: c.default.get(D)
      }), el(), setImmediate(() => (0, m.transitionTo)(C.Routes.DEFAULT_LOGGED_OUT))
    }
  },
  AUTH_SESSION_CHANGE: function(e) {
    let {
      authSessionIdHash: t
    } = e;
    null != t && (M = t)
  },
  LOGIN: function(e) {
    Q = {}, V = C.LoginStates.LOGGING_IN, K = "", s = null, null != e.login && ($ = e.login)
  },
  LOGIN_SUCCESS: function(e) {
    let {
      token: t
    } = e;
    V = C.LoginStates.NONE, er(t), es(), B = "", H = !1, Y = null, K = ""
  },
  LOGIN_FAILURE: function(e) {
    let {
      error: t
    } = e;
    B = "", H = !1, Y = null, V = null != (Q = function(e) {
      if (Object.keys(e.fields).length > 0) return e.fields;
      let t = {
        message: e.message
      };
      return null != e.retryAfter && (t.retry_after = e.retryAfter), t
    }(t)).date_of_birth ? C.LoginStates.LOGIN_AGE_GATE : C.LoginStates.NONE
  },
  LOGIN_MFA_STEP: function(e) {
    let {
      ticket: t,
      sms: n,
      webauthn: i,
      backup: s,
      totp: r
    } = e;
    null != t && (B = t, H = n, K = "", Y = null != i ? i : null, W = s, j = r), Q = {}, V = C.LoginStates.MFA_STEP
  },
  LOGIN_MFA: function() {
    V = C.LoginStates.LOGGING_IN_MFA
  },
  LOGIN_MFA_FAILURE: function(e) {
    let {
      message: t
    } = e;
    V = C.LoginStates.MFA_STEP, Q = {
      code: t
    }
  },
  LOGIN_MFA_SMS: function() {
    V = C.LoginStates.LOGGING_IN_MFA_SMS
  },
  LOGIN_MFA_SMS_REQUEST_SUCCESS: function(e) {
    let {
      phone: t
    } = e;
    V = C.LoginStates.MFA_SMS_STEP, K = t
  },
  LOGIN_MFA_SMS_FAILURE: function(e) {
    let {
      message: t
    } = e;
    V = C.LoginStates.MFA_SMS_STEP, Q = {
      code: t
    }
  },
  LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: function(e) {
    V = C.LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION, i = e.credentials
  },
  LOGIN_ACCOUNT_DISABLED: function(e) {
    V = C.LoginStates.ACCOUNT_DISABLED, i = e.credentials
  },
  LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: function() {
    V = C.LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION
  },
  LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: function() {
    V = C.LoginStates.PHONE_IP_AUTHORIZATION
  },
  LOGIN_RESET: function(e) {
    let {
      isMultiAccount: t
    } = e;
    Q = {}, V = C.LoginStates.NONE, B = "", H = !1, Y = null, s = null, i = null, !t && (ea(), en(!1))
  },
  LOGIN_STATUS_RESET: function() {
    V = C.LoginStates.NONE
  },
  LOGIN_SUSPENDED_USER: function(e) {
    let {
      suspendedUserToken: t
    } = e;
    ee = t, setImmediate(() => (0, m.transitionTo)(C.Routes.ACCOUNT_STANDING))
  },
  SET_LOGIN_CREDENTIALS: function(e) {
    let {
      login: t,
      password: n
    } = e;
    i = {
      login: t,
      password: n
    }
  },
  LOGOUT: el,
  FINGERPRINT: function(e) {
    let t = e.fingerprint;
    null == U ? null != t ? (p.default.track(C.AnalyticEvents.USER_FINGERPRINT_CHANGED, {
      old_fingerprint: null != k ? (0, l.extractId)(k) : null,
      new_fingerprint: (0, l.extractId)(t)
    }), U = t, k = t, c.default.set(R, U)) : en() : null != t && U !== t && p.default.track(C.AnalyticEvents.EXTERNAL_FINGERPRINT_DROPPED, {
      fingerprint: (0, l.extractId)(U),
      dropped_fingerprint: (0, l.extractId)(t)
    })
  },
  REGISTER_SAVE_FORM: function(e) {
    let {
      form: t
    } = e;
    s = t, G = C.RegistrationStates.REGISTER_AGE_GATE
  },
  REGISTER: function(e) {
    let {
      birthday: t
    } = e;
    Q = {}, null != t && (a(null != s, "Got birthday in multistep registration without existing form"), s = {
      ...s,
      birthday: t
    }), G = C.RegistrationStates.REGISTERING
  },
  REGISTER_SUCCESS: function(e) {
    let {
      token: t
    } = e;
    G = C.RegistrationStates.NONE, s = null, er(t), es()
  },
  REGISTER_FAILURE: function(e) {
    let {
      error: t
    } = e;
    Q = function(e) {
      let t = {};
      if (t.error_code = e.code, null != e.errors) {
        for (let n of Object.keys(e.errors)) t[n] = [e.getFirstFieldErrorMessage(n)];
        return t
      }
      return t.message = e.message, null != e.retryAfter && (t.retry_after = e.retryAfter), t
    }(t), G = null != t.getFieldErrors("date_of_birth") ? C.RegistrationStates.REGISTER_AGE_GATE : C.RegistrationStates.REGISTER_WITH_ERROR
  },
  VERIFY_FAILURE: function(e) {
    let {
      errors: t
    } = e;
    z = !0, q = !1, X = null != t ? t : {}
  },
  VERIFY_SUCCESS: function(e) {
    q = !0, z = !1, X = {}, Z = e.verifyingUserId
  },
  START_SESSION: function() {
    if (0 === Object.keys(Q).length) return !1;
    Q = {}
  },
  FORGOT_PASSWORD_REQUEST: function() {
    V = C.LoginStates.FORGOT_PASSWORD, Q = {}
  },
  FORGOT_PASSWORD_SENT: function() {
    V = C.LoginStates.NONE, Q = {}
  },
  UPDATE_TOKEN: function(e) {
    let {
      token: t,
      userId: n
    } = e;
    et("handleUpdateToken called"), er(t, n), es()
  },
  EXPERIMENTS_FETCH: ei,
  CURRENT_USER_UPDATE: function(e) {
    let {
      user: t
    } = e;
    P = t.id, b = t.email, void 0 !== t.authenticator_types && (x = t.authenticator_types), c.default.set(O, t.email), c.default.set(D, t.id)
  },
  AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: eo,
  CLEAR_AUTHENTICATION_ERRORS: function() {
    Q = {}
  },
  CLOSE_SUSPENDED_USER: function() {
    ee = null, V = C.LoginStates.NONE, el(), setImmediate(() => (0, m.transitionTo)(C.Routes.DEFAULT_LOGGED_OUT))
  }
}, f.DispatchBand.Early)