"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("872717"),
  n = s("913144"),
  l = s("650893"),
  i = s("49111");

function r(e, t) {
  return n.default.dispatch({
    type: "MFA_SMS_TOGGLE"
  }), a.default.post({
    url: e,
    body: {
      password: t
    },
    oldFormErrors: !0
  }).then(e => (n.default.dispatch({
    type: "MFA_SMS_TOGGLE_COMPLETE"
  }), e), e => {
    throw n.default.dispatch({
      type: "MFA_SMS_TOGGLE_COMPLETE"
    }), e
  })
}
var o = {
  async enableMFAStart(e) {
    let t = await a.default.post({
      url: i.Endpoints.MFA_TOTP_ENABLE,
      body: {
        password: e
      },
      oldFormErrors: !0
    });
    return t.body
  },
  async verifyEmailCode(e) {
    let t = await a.default.post({
      url: i.Endpoints.MFA_TOTP_ENABLE_VERIFY,
      body: {
        code: e
      }
    });
    return t.body
  },
  resendEmailCode: e => a.default.post({
    url: i.Endpoints.MFA_TOTP_ENABLE_RESEND,
    body: {
      password: e
    }
  }),
  setEmailToken(e) {
    n.default.dispatch({
      type: "MFA_ENABLE_EMAIL_TOKEN",
      token: e
    })
  },
  enable(e) {
    let {
      password: t,
      code: s,
      secret: l,
      emailToken: r
    } = e;
    return a.default.post({
      url: i.Endpoints.MFA_TOTP_ENABLE,
      body: {
        code: s,
        secret: l,
        password: t,
        email_token: r
      },
      oldFormErrors: !0
    }).then(e => n.default.dispatch({
      type: "MFA_ENABLE_SUCCESS",
      token: e.body.token,
      codes: e.body.backup_codes
    }))
  },
  disable() {
    a.default.post({
      url: i.Endpoints.MFA_TOTP_DISABLE,
      oldFormErrors: !0
    }).then(e => {
      let {
        body: {
          token: t
        }
      } = e;
      return n.default.dispatch({
        type: "MFA_DISABLE_SUCCESS",
        token: t
      })
    })
  },
  enableSMS: e => r(i.Endpoints.MFA_SMS_ENABLE, e),
  disableSMS: e => r(i.Endpoints.MFA_SMS_DISABLE, e),
  sendMFABackupCodesVerificationKeyEmail: e => a.default.post({
    url: i.Endpoints.MFA_SEND_VERIFICATION_KEY,
    body: {
      password: e
    },
    oldFormErrors: !0
  }).then(e => n.default.dispatch({
    type: "MFA_SEND_VERIFICATION_KEY",
    nonces: {
      viewNonce: e.body.nonce,
      regenerateNonce: e.body.regenerate_nonce
    }
  }), e => {
    throw e
  }),
  confirmViewBackupCodes(e, t) {
    let {
      viewNonce: s,
      regenerateNonce: r
    } = l.default.getNonces();
    return a.default.post({
      url: i.Endpoints.MFA_CODES_VERIFICATION,
      body: {
        key: e,
        nonce: t ? r : s,
        regenerate: t
      },
      oldFormErrors: !0
    }).then(t => n.default.dispatch({
      type: "MFA_VIEW_BACKUP_CODES",
      codes: t.body.backup_codes,
      key: e
    }), e => {
      throw e
    })
  },
  clearBackupCodes() {
    n.default.dispatch({
      type: "MFA_CLEAR_BACKUP_CODES"
    })
  }
}