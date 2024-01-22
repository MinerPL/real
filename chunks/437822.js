"use strict";
let i;
n.r(t), n.d(t, {
  PasswordResetResult: function() {
    return s
  },
  default: function() {
    return R
  }
}), n("70102"), n("860677"), n("506083");
var s, r, a = n("759843"),
  o = n("171718"),
  l = n("872717"),
  u = n("95410"),
  d = n("913144"),
  c = n("448993"),
  f = n("307439"),
  _ = n("605250"),
  h = n("21121"),
  g = n("776502"),
  m = n("393414"),
  E = n("271938"),
  p = n("350522"),
  v = n("840707"),
  S = n("772017"),
  T = n("49111"),
  I = n("191349");
let C = new _.default("AuthenticationActionCreators"),
  A = null;

function y(e) {
  let t = {
    type: "LOGOUT",
    ...e
  };
  d.default.dispatch(t).catch(e => {
    var t;
    throw C.error("Error while dispatching LOGOUT", e), null === (t = window.DiscordErrors) || void 0 === t || t.softCrash(e), e
  })
}

function N() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.Routes.DEFAULT_LOGGED_OUT;
  y();
  let t = (0, h.getRootNavigationRefIfInExperiment)();
  null != e && (null != t ? (S.default.popAll(), t.navigate("auth")) : (0, m.transitionTo)(e))
}(r = s || (s = {})).MFA = "MFA", r.SUCCESS = "SUCCESS";
var R = {
  startSession(e) {
    d.default.wait(() => {
      d.default.dispatch({
        type: "START_SESSION",
        token: e
      })
    })
  },
  setLoginCredentials(e, t) {
    d.default.dispatch({
      type: "SET_LOGIN_CREDENTIALS",
      login: e,
      password: t
    })
  },
  login(e) {
    var t;
    let {
      login: n,
      password: i,
      loginCode: s,
      undelete: r,
      source: o,
      giftCodeSKUId: l,
      invite: u,
      isMultiAccount: f
    } = e;
    d.default.dispatch({
      type: "LOGIN",
      login: n,
      loginMethod: null != s && "" !== s ? T.LoginMethods.LOGIN_CODE : T.LoginMethods.PASSWORD
    }), this.setLoginCredentials(n, null !== (t = null != i ? i : s) && void 0 !== t ? t : void 0), v.default.post({
      url: T.Endpoints.LOGIN,
      body: {
        login: n,
        password: i,
        undelete: r,
        login_code: s,
        login_source: o,
        gift_code_sku_id: l
      },
      retries: 2,
      oldFormErrors: !0,
      trackedActionData: {
        event: a.NetworkActionNames.USER_LOGIN,
        properties: {
          invite_code: null == u ? void 0 : u.code,
          is_multi_account: f
        }
      },
      ...f ? {
        headers: {
          authorization: ""
        }
      } : {}
    }).then(e => {
      let {
        body: {
          mfa: t,
          sms: n,
          webauthn: i,
          ticket: s,
          token: r,
          backup: a,
          user_id: o,
          required_actions: l,
          totp: u
        }
      } = e;
      d.default.dispatch({
        type: "LOGIN_ATTEMPTED",
        user_id: o,
        required_actions: l
      }), t ? d.default.dispatch({
        type: "LOGIN_MFA_STEP",
        ticket: s,
        sms: n,
        webauthn: i,
        totp: u,
        backup: a
      }) : f ? this.switchAccountToken(r) : d.default.dispatch({
        type: "LOGIN_SUCCESS",
        token: r
      })
    }, e => {
      var t;
      let s = null === (t = e.body) || void 0 === t ? void 0 : t.code;
      s === T.AbortCodes.ACCOUNT_SCHEDULED_FOR_DELETION && null != i && "" !== i ? d.default.dispatch({
        type: "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION",
        credentials: {
          login: n,
          password: i
        }
      }) : s === T.AbortCodes.ACCOUNT_DISABLED && null != i && "" !== i ? d.default.dispatch({
        type: "LOGIN_ACCOUNT_DISABLED",
        credentials: {
          login: n,
          password: i
        }
      }) : s === T.AbortCodes.PHONE_VERIFICATION_REQUIRED ? d.default.dispatch({
        type: "LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED"
      }) : d.default.dispatch({
        type: "LOGIN_FAILURE",
        error: new c.V6OrEarlierAPIError(e)
      })
    })
  },
  loginMFAv2(e) {
    let t, {
      code: n,
      ticket: i,
      source: s,
      giftCodeSKUId: r,
      isMultiAccount: o,
      mfaType: l
    } = e;
    return t = "webauthn" === l ? T.Endpoints.LOGIN_WEBAUTHN : "sms" === l ? T.Endpoints.LOGIN_SMS : T.Endpoints.LOGIN_MFA, v.default.post({
      url: t,
      body: {
        code: n,
        ticket: i,
        login_source: s,
        gift_code_sku_id: r
      },
      retries: 2,
      oldFormErrors: !0,
      trackedActionData: {
        event: a.NetworkActionNames.USER_LOGIN_MFA
      }
    }).then(e => {
      o ? this.switchAccountToken(e.body.token) : d.default.dispatch({
        type: "LOGIN_SUCCESS",
        token: e.body.token
      })
    }).catch(e => {
      var t;
      if ((null === (t = e.body) || void 0 === t ? void 0 : t.code) === T.AbortCodes.MFA_INVALID_CODE) throw Error((0, g.getInvalidMFACodeError)(l));
      throw e
    })
  },
  loginToken(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return d.default.dispatch({
      type: "LOGIN"
    }), new Promise(n => {
      setImmediate(() => {
        d.default.dispatch({
          type: "LOGIN_SUCCESS",
          token: e
        }), t && this.startSession(e), n()
      })
    })
  },
  loginReset(e) {
    d.default.dispatch({
      type: "LOGIN_RESET",
      isMultiAccount: e
    })
  },
  loginStatusReset() {
    d.default.dispatch({
      type: "LOGIN_STATUS_RESET"
    })
  },
  logoutInternal(e) {
    y(e)
  },
  logout() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.Routes.DEFAULT_LOGGED_OUT,
      n = arguments.length > 1 ? arguments[1] : void 0;
    return v.default.post({
      url: T.Endpoints.LOGOUT,
      body: {
        provider: (0, I.getDevicePushProvider)(),
        token: u.default.get(T.DEVICE_TOKEN),
        voip_provider: I.DEVICE_PUSH_VOIP_PROVIDER,
        voip_token: u.default.get(T.DEVICE_VOIP_TOKEN)
      },
      oldFormErrors: !0,
      trackedActionData: {
        event: a.NetworkActionNames.USER_LOGOUT
      },
      ...null != n && {
        headers: {
          authorization: null !== (e = o.default.getToken(n)) && void 0 !== e ? e : ""
        }
      }
    }).finally(() => {
      (null == n || n === E.default.getId()) && N(t)
    })
  },
  switchAccountToken(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      n = E.default.getToken();
    C.log("Switching accounts", {
      wasLoggedIn: null != n,
      tokenHasChanged: e !== n
    }), y({
      isSwitchingAccount: !0
    });
    let i = this.loginToken(e, !0).then(() => {
      let t = E.default.getToken();
      C.log("Switched accounts finished", {
        isCorrectToken: e === t
      })
    });
    return t && (0, m.transitionTo)(T.Routes.ME), i
  },
  verifySSOToken() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.Routes.DEFAULT_LOGGED_OUT;
    return l.default.get({
      url: T.Endpoints.ME,
      oldFormErrors: !0
    }).catch(() => N(e))
  },
  verify(e) {
    null != e ? v.default.post({
      url: T.Endpoints.VERIFY,
      body: {
        token: e
      },
      oldFormErrors: !0,
      trackedActionData: {
        event: a.NetworkActionNames.USER_VERIFY
      }
    }).then(e => {
      d.default.dispatch({
        type: "LOGIN_SUCCESS",
        token: e.body.token
      }), d.default.dispatch({
        type: "VERIFY_SUCCESS",
        verifyingUserId: e.body.user_id
      })
    }, e => d.default.dispatch({
      type: "VERIFY_FAILURE",
      errors: e.body
    })) : d.default.dispatch({
      type: "VERIFY_FAILURE",
      errors: {}
    })
  },
  async authorizePayment(e) {
    try {
      await v.default.post({
        url: T.Endpoints.AUTHORIZE_PAYMENT,
        body: {
          token: e
        },
        oldFormErrors: !0,
        trackedActionData: {
          event: a.NetworkActionNames.AUTHORIZE_PAYMENT
        }
      }), d.default.dispatch({
        type: "VERIFY_SUCCESS"
      })
    } catch (e) {
      d.default.dispatch({
        type: "VERIFY_FAILURE",
        errors: {}
      })
    }
  },
  async authorizeIPAddress(e) {
    if (null == e) {
      d.default.dispatch({
        type: "VERIFY_FAILURE",
        errors: {}
      });
      return
    }
    try {
      await v.default.post({
        url: T.Endpoints.AUTHORIZE_IP,
        body: {
          token: e
        },
        oldFormErrors: !0,
        trackedActionData: {
          event: a.NetworkActionNames.AUTHORIZE_IP
        }
      }), d.default.dispatch({
        type: "VERIFY_SUCCESS"
      })
    } catch (e) {
      d.default.dispatch({
        type: "VERIFY_FAILURE",
        errors: {}
      })
    }
  },
  verifyResend: () => v.default.post({
    url: T.Endpoints.VERIFY_RESEND,
    oldFormErrors: !0,
    trackedActionData: {
      event: a.NetworkActionNames.USER_VERIFY_RESEND
    }
  }),
  async resetPassword(e, t, n) {
    d.default.dispatch({
      type: "LOGIN"
    });
    let i = {
        token: e,
        password: t,
        source: n
      },
      s = u.default.get(T.DEVICE_TOKEN),
      r = (0, I.getDevicePushProvider)();
    null != r && null != s && (i.push_provider = r, i.push_token = s);
    let o = u.default.get(T.DEVICE_VOIP_TOKEN);
    null != I.DEVICE_PUSH_VOIP_PROVIDER && null != o && (i.push_voip_provider = I.DEVICE_PUSH_VOIP_PROVIDER, i.push_voip_token = o);
    try {
      let {
        body: {
          mfa: e,
          sms: t,
          webauthn: n,
          ticket: s,
          token: r,
          backup: o,
          totp: l
        }
      } = await v.default.post({
        url: T.Endpoints.RESET_PASSWORD,
        body: i,
        oldFormErrors: !0,
        trackedActionData: {
          event: a.NetworkActionNames.USER_RESET_PASSWORD
        }
      });
      return {
        result: e ? "MFA" : "SUCCESS",
        sms: t,
        webauthn: n,
        ticket: s,
        token: r,
        backup: o,
        totp: l
      }
    } catch (e) {
      throw d.default.dispatch({
        type: "LOGIN_FAILURE",
        error: new c.V6OrEarlierAPIError(e)
      }), e
    }
  },
  async resetPasswordMFAv2(e) {
    let {
      method: t,
      code: n,
      ticket: i,
      password: s,
      token: r,
      source: o
    } = e;
    d.default.dispatch({
      type: "LOGIN_MFA"
    });
    let l = await v.default.post({
      url: T.Endpoints.RESET_PASSWORD,
      body: {
        code: n,
        ticket: i,
        password: s,
        token: r,
        source: o,
        method: t
      },
      oldFormErrors: !0,
      trackedActionData: {
        event: a.NetworkActionNames.USER_RESET_PASSWORD,
        properties: {
          mfa: !0
        }
      }
    });
    return l.body.token
  },
  async forgotPassword(e) {
    this.setLoginCredentials(e), d.default.dispatch({
      type: "FORGOT_PASSWORD_REQUEST"
    });
    try {
      await v.default.post({
        url: T.Endpoints.FORGOT_PASSWORD,
        body: {
          login: e
        },
        oldFormErrors: !0,
        trackedActionData: {
          event: a.NetworkActionNames.FORGOT_PASSWORD
        }
      }), d.default.dispatch({
        type: "FORGOT_PASSWORD_SENT"
      })
    } catch (n) {
      let e = new c.V6OrEarlierAPIError(n),
        t = e.code;
      throw t === T.AbortCodes.PHONE_VERIFICATION_REQUIRED ? d.default.dispatch({
        type: "LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION"
      }) : d.default.dispatch({
        type: "LOGIN_FAILURE",
        error: e
      }), n
    }
  },
  setFingerprint(e) {
    d.default.dispatch({
      type: "FINGERPRINT",
      fingerprint: e
    })
  },
  getExperiments(e) {
    d.default.dispatch({
      type: "EXPERIMENTS_FETCH",
      withGuildExperiments: e
    })
  },
  getLocationMetadata: () => null != A ? A : (clearTimeout(i), i = setTimeout(() => {
    d.default.dispatch({
      type: "SET_CONSENT_REQUIRED",
      consentRequired: !0
    })
  }, 5e3), A = l.default.get({
    url: T.Endpoints.AUTH_LOCATION_METADATA,
    retries: 2,
    oldFormErrors: !0
  }).then(e => {
    var t, n, s, r, a;
    if (clearTimeout(i), null == p.default.getAuthenticationConsentRequired()) {
      let t = null === (r = null == e ? void 0 : null === (s = e.body) || void 0 === s ? void 0 : s.consent_required) || void 0 === r || r;
      d.default.dispatch({
        type: "SET_CONSENT_REQUIRED",
        consentRequired: t
      })
    }
    if (d.default.dispatch({
        type: "SET_LOCATION_METADATA",
        countryCode: null !== (a = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.country_code) && void 0 !== a ? a : void 0
      }), A = null, (null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.promotional_email_opt_in) != null) {
      let t = e.body.promotional_email_opt_in;
      (0, f.setPromoEmailConsentState)({
        required: t.required,
        checked: t.pre_checked,
        preChecked: t.pre_checked
      })
    }
  }, () => {
    clearTimeout(i), d.default.dispatch({
      type: "SET_CONSENT_REQUIRED",
      consentRequired: !0
    }), A = null
  }))
}