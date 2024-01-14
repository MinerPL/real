"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
}), s("222007");
var a = s("446674"),
  n = s("913144"),
  l = s("798609");
let i = !1,
  r = [];
class o extends a.default.Store {
  hasFetchedCredentials() {
    return i
  }
  getCredentials() {
    return r
  }
}
o.displayName = "WebAuthnStore";
var d = new o(n.default, {
  LOGOUT: function() {
    r = [], i = !1
  },
  MFA_WEBAUTHN_CREDENTIALS_LOADING: () => (i = !0, !0),
  MFA_WEBAUTHN_CREDENTIALS_LOADED: e => (r = e.credentials, !0),
  AUTHENTICATOR_CREATE(e) {
    let {
      credential: t
    } = e;
    t.type === l.AuthenticatorType.WEBAUTHN && void 0 === r.find(e => e.id === t.id) && (r = [...r, t])
  },
  AUTHENTICATOR_UPDATE(e) {
    let {
      credential: t
    } = e;
    t.type === l.AuthenticatorType.WEBAUTHN && (r = r.map(e => e.id === t.id ? t : e))
  },
  AUTHENTICATOR_DELETE(e) {
    let {
      credential: t
    } = e;
    t.type === l.AuthenticatorType.WEBAUTHN && (r = r.filter(e => e.id !== t.id))
  }
})