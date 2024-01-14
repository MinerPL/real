"use strict";
s.r(t), s.d(t, {
  fetchWebAuthnCredentials: function() {
    return i
  },
  deleteWebAuthnCredential: function() {
    return r
  },
  editWebAuthnCredential: function() {
    return o
  },
  startRegisterWebAuthnCredential: function() {
    return d
  },
  finishRegisterWebAuthnCredential: function() {
    return u
  }
});
var a = s("872717"),
  n = s("913144"),
  l = s("49111");

function i() {
  n.default.dispatch({
    type: "MFA_WEBAUTHN_CREDENTIALS_LOADING"
  }), a.default.get(l.Endpoints.MFA_WEBAUTHN_CREDENTIALS).then(e => {
    n.default.dispatch({
      type: "MFA_WEBAUTHN_CREDENTIALS_LOADED",
      credentials: e.body
    })
  })
}

function r(e) {
  a.default.delete(l.Endpoints.MFA_WEBAUTHN_CREDENTIAL(e.id)).then(() => {
    n.default.dispatch({
      type: "AUTHENTICATOR_DELETE",
      credential: e
    })
  })
}
async function o(e, t) {
  let s = await a.default.patch({
    url: l.Endpoints.MFA_WEBAUTHN_CREDENTIAL(e),
    body: {
      name: t
    }
  });
  n.default.dispatch({
    type: "AUTHENTICATOR_UPDATE",
    credential: s.body
  })
}
async function d() {
  let {
    body: {
      ticket: e,
      challenge: t
    }
  } = await a.default.post({
    url: l.Endpoints.MFA_WEBAUTHN_CREDENTIALS,
    body: {}
  });
  return {
    ticket: e,
    challenge: t
  }
}
async function u(e, t, s) {
  let i = await a.default.post({
    url: l.Endpoints.MFA_WEBAUTHN_CREDENTIALS,
    body: {
      name: e,
      ticket: t,
      credential: s
    }
  });
  n.default.dispatch({
    type: "AUTHENTICATOR_CREATE",
    credential: i.body
  }), n.default.dispatch({
    type: "MFA_ENABLE_SUCCESS",
    codes: i.body.backup_codes
  })
}