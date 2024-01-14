"use strict";
let i, r;
n.r(t), n.d(t, {
  default: function() {
    return eu
  }
}), n("222007"), n("860677"), n("424973"), n("70102");
var s = n("627445"),
  a = n.n(s),
  o = n("171718"),
  l = n("391679"),
  u = n("446674"),
  c = n("872717"),
  d = n("95410"),
  f = n("913144"),
  E = n("798609"),
  h = n("821316"),
  p = n("605250"),
  _ = n("393414"),
  S = n("705873"),
  m = n("599110"),
  T = n("831588"),
  g = n("286235"),
  I = n("72177"),
  C = n("455079"),
  v = n("49111"),
  A = n("586391");
let R = n("551042").hasModalOpen,
  N = new p.default("AuthenticationStore"),
  O = "fingerprint",
  D = "email_cache",
  y = "user_id_cache",
  P = null,
  L = null,
  b = null,
  M = null,
  U = null,
  G = null,
  w = null,
  k = v.LoginStates.NONE,
  x = v.RegistrationStates.NONE,
  F = !1,
  V = [],
  B = "",
  H = !1,
  j = null,
  Y = !1,
  W = !1,
  K = "",
  z = !1,
  q = !1,
  X = {},
  Q = {},
  Z = null,
  J = null,
  $ = null;

function ee(e) {
  let t = null != o.default.getToken(),
    n = null != d.default.get(v.TOKEN_KEY);
  N.verbose(e, {
    tokenManagerHasToken: t,
    storageHasToken: n
  })
}

function et() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  if (U = d.default.get(O), null != J) return J;
  let t = null != U ? U : o.default.getToken();
  !(!(0, _.isValidFingerprintRoute)() || !e && null != t || I.default.isHandoffAvailable()) && en({
    withGuildExperiments: !0
  })
}

function en(e) {
  let {
    withGuildExperiments: t
  } = e, n = {}, i = m.default.getSuperPropertiesBase64();
  null != i && (n["X-Super-Properties"] = i), null != U && (n["X-Fingerprint"] = U), J = c.default.get({
    url: v.Endpoints.EXPERIMENTS,
    query: {
      with_guild_experiments: t
    },
    headers: n,
    context: {
      location: (0, _.getFingerprintLocation)()
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

function ei() {
  G = U, U = null, d.default.remove(O)
}

function er(e, t) {
  ee("setAuthToken called."), o.default.setToken(e, t)
}

function es() {
  ee("removeAuthToken called."), o.default.removeToken()
}

function ea() {
  F = !0, eo(), f.default.wait(() => {
    (0, _.transitionTo)(v.Routes.REGISTER)
  })
}

function eo(e) {
  ee("handleLogout called."), es(), ei(), !(null == e ? void 0 : e.isSwitchingAccount) && et(), u.default.PersistedStore.clearAll({
    omit: ["InstallationManagerStore", "AgeGateStore", "NativePermissionsStore", "MultiAccountStore", "DraftStore", "OverlayStoreV2", "StreamerModeStore", "LoginRequiredActionStore"],
    type: (null == e ? void 0 : e.isSwitchingAccount) ? "user-data-only" : "all"
  }), C.default.clearAll(), h.clear(), g.default.clearUser(), d.default.remove(y), P = null, k = (null == e ? void 0 : e.isSwitchingAccount) ? v.LoginStates.LOGGING_IN : v.LoginStates.NONE, x = v.RegistrationStates.NONE, B = "", K = "", j = null, H = !1, z = !1, q = !1, X = {}, Q = {}
}
class el extends u.default.Store {
  initialize() {
    P = d.default.get(y), L = d.default.get(D), $ = d.default.get("login_cache"), null == o.default.getToken() && et()
  }
  getEmail() {
    return L
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
    return k
  }
  getRegisterStatus() {
    return x
  }
  getId() {
    return P
  }
  getSessionId() {
    return b
  }
  getAuthSessionIdHash() {
    return M
  }
  getToken() {
    return (0, T.getToken)()
  }
  isAuthenticated() {
    return (0, T.isAuthenticated)()
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
    return Y
  }
  getMFABackup() {
    return W
  }
  getMFAWebAuthn() {
    return j
  }
  getMFAMethods() {
    let e = [];
    return null != j && e.push({
      type: "webauthn",
      challenge: j
    }), Y && e.push({
      type: "totp",
      backup_codes_allowed: W
    }), W && e.push({
      type: "backup"
    }), H && e.push({
      type: "sms"
    }), e
  }
  hasTOTPEnabled() {
    return V.includes(E.AuthenticatorType.TOTP)
  }
  hasSMSEnabled() {
    return V.includes(E.AuthenticatorType.SMS)
  }
  hasWebAuthnEnabled() {
    return V.includes(E.AuthenticatorType.WEBAUTHN)
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
    return r
  }
  allowLogoutRedirect() {
    return !F
  }
  getWebAuthnChallenge() {
    return j
  }
}
el.displayName = "AuthenticationStore";
var eu = new el(f.default, {
  CONNECTION_OPEN: function(e) {
    var t;
    let {
      user: n,
      sessionId: i,
      authSessionIdHash: r,
      analyticsToken: s,
      auth: a
    } = e;
    ee("handleConnectionOpen called"), g.default.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, S.default)(n)), b = i, M = r, w = s, P = n.id, L = n.email, void 0 !== a && (V = a.authenticator_types), d.default.set(D, n.email), d.default.set(y, n.id)
  },
  OVERLAY_INITIALIZE: function(e) {
    var t;
    let {
      user: n,
      sessionId: i,
      analyticsToken: r,
      token: s
    } = e;
    g.default.setUser(n.id, n.username, null !== (t = n.email) && void 0 !== t ? t : void 0, (0, S.default)(n)), b = i, w = r, er(s), ei(), P = n.id, d.default.set(y, n.id)
  },
  CONNECTION_CLOSED: function(e) {
    let {
      code: t
    } = e;
    if (ee("handleConnectionClosed called with code ".concat(t, ".")), 4004 === t) {
      if (F || R(A.NEW_USER_AGE_GATE_MODAL_KEY) || R(A.EXISTING_USER_AGE_GATE_MODAL_KEY)) {
        ea();
        return
      }
      m.default.track(v.AnalyticEvents.APP_USER_DEAUTHENTICATED, {
        user_id: d.default.get(y)
      }), eo(), setImmediate(() => (0, _.transitionTo)(v.Routes.DEFAULT_LOGGED_OUT))
    }
  },
  AUTH_SESSION_CHANGE: function(e) {
    let {
      authSessionIdHash: t
    } = e;
    null != t && (M = t)
  },
  LOGIN: function(e) {
    Q = {}, k = v.LoginStates.LOGGING_IN, K = "", r = null, null != e.login && ($ = e.login)
  },
  LOGIN_SUCCESS: function(e) {
    let {
      token: t
    } = e;
    k = v.LoginStates.NONE, er(t), ei(), B = "", H = !1, j = null, K = ""
  },
  LOGIN_FAILURE: function(e) {
    let {
      error: t
    } = e;
    B = "", H = !1, j = null, k = null != (Q = function(e) {
      if (Object.keys(e.fields).length > 0) return e.fields;
      let t = {
        message: e.message
      };
      return null != e.retryAfter && (t.retry_after = e.retryAfter), t
    }(t)).date_of_birth ? v.LoginStates.LOGIN_AGE_GATE : v.LoginStates.NONE
  },
  LOGIN_MFA_STEP: function(e) {
    let {
      ticket: t,
      sms: n,
      webauthn: i,
      backup: r,
      totp: s
    } = e;
    null != t && (B = t, H = n, K = "", j = null != i ? i : null, W = r, Y = s), Q = {}, k = v.LoginStates.MFA_STEP
  },
  LOGIN_MFA: function() {
    k = v.LoginStates.LOGGING_IN_MFA
  },
  LOGIN_MFA_FAILURE: function(e) {
    let {
      message: t
    } = e;
    k = v.LoginStates.MFA_STEP, Q = {
      code: t
    }
  },
  LOGIN_MFA_SMS: function() {
    k = v.LoginStates.LOGGING_IN_MFA_SMS
  },
  LOGIN_MFA_SMS_REQUEST_SUCCESS: function(e) {
    let {
      phone: t
    } = e;
    k = v.LoginStates.MFA_SMS_STEP, K = t
  },
  LOGIN_MFA_SMS_FAILURE: function(e) {
    let {
      message: t
    } = e;
    k = v.LoginStates.MFA_SMS_STEP, Q = {
      code: t
    }
  },
  LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: function(e) {
    k = v.LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION, i = e.credentials
  },
  LOGIN_ACCOUNT_DISABLED: function(e) {
    k = v.LoginStates.ACCOUNT_DISABLED, i = e.credentials
  },
  LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: function() {
    k = v.LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION
  },
  LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: function() {
    k = v.LoginStates.PHONE_IP_AUTHORIZATION
  },
  LOGIN_RESET: function(e) {
    let {
      isMultiAccount: t
    } = e;
    Q = {}, k = v.LoginStates.NONE, B = "", H = !1, j = null, r = null, i = null, !t && (es(), et(!1))
  },
  LOGIN_STATUS_RESET: function() {
    k = v.LoginStates.NONE
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
  LOGOUT: eo,
  FINGERPRINT: function(e) {
    let t = e.fingerprint;
    null == U ? null != t ? (m.default.track(v.AnalyticEvents.USER_FINGERPRINT_CHANGED, {
      old_fingerprint: null != G ? (0, l.extractId)(G) : null,
      new_fingerprint: (0, l.extractId)(t)
    }), U = t, G = t, d.default.set(O, U)) : et() : null != t && U !== t && m.default.track(v.AnalyticEvents.EXTERNAL_FINGERPRINT_DROPPED, {
      fingerprint: (0, l.extractId)(U),
      dropped_fingerprint: (0, l.extractId)(t)
    })
  },
  REGISTER_SAVE_FORM: function(e) {
    let {
      form: t
    } = e;
    r = t, x = v.RegistrationStates.REGISTER_AGE_GATE
  },
  REGISTER: function(e) {
    let {
      birthday: t
    } = e;
    Q = {}, null != t && (a(null != r, "Got birthday in multistep registration without existing form"), r = {
      ...r,
      birthday: t
    }), x = v.RegistrationStates.REGISTERING
  },
  REGISTER_SUCCESS: function(e) {
    let {
      token: t
    } = e;
    x = v.RegistrationStates.NONE, r = null, er(t), ei()
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
    }(t), x = null != t.getFieldErrors("date_of_birth") ? v.RegistrationStates.REGISTER_AGE_GATE : v.RegistrationStates.REGISTER_WITH_ERROR
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
    k = v.LoginStates.FORGOT_PASSWORD, Q = {}
  },
  FORGOT_PASSWORD_SENT: function() {
    k = v.LoginStates.NONE, Q = {}
  },
  UPDATE_TOKEN: function(e) {
    let {
      token: t,
      userId: n
    } = e;
    ee("handleUpdateToken called"), er(t, n), ei()
  },
  EXPERIMENTS_FETCH: en,
  CURRENT_USER_UPDATE: function(e) {
    let {
      user: t
    } = e;
    P = t.id, L = t.email, void 0 !== t.authenticator_types && (V = t.authenticator_types), d.default.set(D, t.email), d.default.set(y, t.id)
  },
  AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: ea,
  CLEAR_AUTHENTICATION_ERRORS: function() {
    Q = {}
  }
}, f.DispatchBand.Early)