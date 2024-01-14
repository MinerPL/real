"use strict";
n.r(t), n.d(t, {
  LoginSpinner: function() {
    return W
  },
  default: function() {
    return K
  }
});
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  r = n.n(l),
  i = n("730290"),
  o = n("394846"),
  u = n("446674"),
  d = n("77078"),
  c = n("913144"),
  f = n("437822"),
  E = n("697796"),
  h = n("524824"),
  _ = n("21572"),
  m = n("791160"),
  g = n("434824"),
  p = n("24287"),
  A = n("382236"),
  T = n("770032"),
  R = n("724554"),
  I = n("878720"),
  N = n("25033"),
  S = n("589252"),
  C = n("970366"),
  L = n("271938"),
  M = n("72177"),
  O = n("476108"),
  x = n("145131"),
  v = n("124969"),
  D = n("980428"),
  U = n("599110"),
  y = n("659500"),
  G = n("773336"),
  b = n("404432"),
  j = n("719451"),
  P = n("331085"),
  B = n("598489"),
  F = n("49111"),
  w = n("579033"),
  k = n("782340"),
  H = n("741532"),
  V = n("926622");

function W() {
  return (0, s.jsx)(v.default, {
    children: (0, s.jsx)(d.Spinner, {})
  })
}
class Y extends a.PureComponent {
  static getDerivedStateFromProps(e) {
    let {
      handoffAvailable: t,
      authenticated: n
    } = e;
    return t || n ? null : {
      checkingHandoff: !1
    }
  }
  componentDidMount() {
    let {
      handoffAvailable: e,
      authenticated: t,
      giftCodeSKU: n,
      invite: s,
      location: a
    } = this.props;
    e && !t ? (0, E.handoffBegin)() : t && this.loginOrSSO(t, a, !0), U.default.track(F.AnalyticEvents.LOGIN_VIEWED, {
      location: null != s ? "Invite Login Page" : "Non-Invite Login Page",
      login_source: this.loginSource,
      authenticated: t,
      ...null != n ? (0, m.default)(n, !1, !1) : {}
    }, {
      flush: !0
    }), f.default.getLocationMetadata(), (0, C.trackAppUIViewed)("login")
  }
  componentDidUpdate(e) {
    let {
      authenticated: t,
      location: n
    } = this.props, {
      checkingHandoff: s
    } = this.state;
    if (t && !e.authenticated && !s && this.loginOrSSO(t, n), e.errors !== this.props.errors) {
      var a, l, r;
      this.hasError("password") ? null === (a = this.passwordRef) || void 0 === a || a.focus() : this.hasError("email") || this.hasError("login") ? null === (l = this.loginRef) || void 0 === l || l.focus() : this.hasError("code") && (null === (r = this.codeRef) || void 0 === r || r.focus())
    }
  }
  get loginSource() {
    let {
      giftCode: e,
      guildTemplate: t,
      invite: n,
      loginSource: s,
      redirectTo: a
    } = this.props;
    if (null != s) return s;
    if (null != e) return "gift";
    if (null != t) return "guild_template";
    else if (null != n) {
      if (null != n.guild) return "guild_invite";
      if (null != n.channel) return "dm_invite";
      else if (null != n.inviter) return "friend_invite"
    }
    return null != a ? (0, h.getLoginHandoffSourceFromRedirectTo)(a) : null
  }
  get giftCodeSKUId() {
    let {
      giftCode: e
    } = this.props;
    return null != e ? e.skuId : null
  }
  get canShowChooseAccount() {
    return this.props.hasLoggedInAccounts
  }
  loginOrSSO(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    e && null != t && (this.setState({
      redirecting: !0
    }), n ? f.default.verifySSOToken().then(() => this.transitionSSO(t)) : this.transitionSSO(t))
  }
  transitionSSO(e) {
    let {
      transitionTo: t,
      redirectTo: n,
      replaceWith: s
    } = this.props, a = null != e ? (0, i.parse)(e.search) : {};
    if (delete a.redirect_to, null != n) null != s ? s(n) : t(n);
    else if (null == a.service) t(F.Routes.APP);
    else {
      let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + F.Endpoints.SSO,
        t = {
          ...a,
          token: L.default.getToken()
        };
      window.location = "".concat(e, "?").concat((0, i.stringify)(t))
    }
  }
  hasError(e) {
    return null != this.props.errors[e]
  }
  renderHandOffAvailable() {
    let {
      authBoxClassName: e
    } = this.props;
    return (0, s.jsxs)(v.default, {
      className: e,
      children: [(0, s.jsx)(v.AuthSpinner, {}), (0, s.jsx)(v.Title, {
        className: V.marginBottom8,
        children: k.default.Messages.BROWSER_HANDOFF_DETECTING_TITLE
      }), (0, s.jsx)(v.SubTitle, {
        children: k.default.Messages.AUTH_BROWSER_HANDOFF_DETECTING_DESCRIPTION
      })]
    })
  }
  renderHandOffContinue() {
    let {
      user: e,
      transitionTo: t,
      authBoxClassName: n
    } = this.props;
    return null == e ? null : (0, s.jsxs)(v.default, {
      className: n,
      children: [(0, s.jsx)(v.Avatar, {
        src: e.getAvatarURL(void 0, 100),
        size: d.AvatarSizes.DEPRECATED_SIZE_100,
        className: V.marginBottom20
      }), (0, s.jsx)(v.Title, {
        className: V.marginBottom8,
        children: k.default.Messages.BROWSER_HANDOFF_SUCCESS_TITLE.format({
          name: e.toString()
        })
      }), (0, s.jsx)(v.SubTitle, {
        className: V.marginBottom40,
        children: k.default.Messages._BROWSER_HANDOFF_SUCCESS_BODY
      }), (0, s.jsxs)(v.Block, {
        children: [(0, s.jsx)(v.Button, {
          onClick: () => t(F.Routes.APP),
          className: V.marginBottom8,
          children: k.default.Messages.BROWSER_HANDOFF_SUCCESS_ACTION.format({
            name: e.toString()
          })
        }), (0, s.jsx)(v.Button, {
          look: v.Button.Looks.LINK,
          color: v.Button.Colors.LINK,
          onClick: this.handleReset,
          children: k.default.Messages.BROWSER_HANDOFF_SUCCESS_CANCEL
        })]
      })]
    })
  }
  renderDisabledAccount() {
    let {
      authBoxClassName: e
    } = this.props, t = this.props.loginStatus === F.LoginStates.ACCOUNT_DISABLED, n = t ? k.default.Messages.ACCOUNT_DISABLED_TITLE : k.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_TITLE, a = t ? k.default.Messages.ACCOUNT_DISABLED_DESCRIPTION : k.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_DESCRIPTION;
    return (0, s.jsx)(v.default, {
      tag: "form",
      onSubmit: this.handleReset,
      className: e,
      children: (0, s.jsxs)(d.HeadingLevel, {
        component: (0, s.jsx)(v.Title, {
          className: V.marginBottom8,
          children: n
        }),
        children: [(0, s.jsx)(v.SubTitle, {
          className: V.marginBottom20,
          children: a
        }), (0, s.jsxs)(v.Block, {
          children: [(0, s.jsx)(v.Button, {
            color: v.Button.Colors.BRAND,
            type: "submit",
            children: k.default.Messages._RETURN_TO_LOGIN
          }), (0, s.jsx)("div", {
            className: r(V.marginTop8, H.needAccount),
            children: k.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_CANCEL.format({
              onClick: this.handleCancelAccountDeletion
            })
          })]
        })]
      })
    })
  }
  renderResolving() {
    let {
      authBoxClassName: e,
      country: t
    } = this.props;
    return (0, s.jsxs)(v.default, {
      className: e,
      children: [(0, s.jsx)(j.InviteResolvingHeader, {}), (0, s.jsxs)(v.Block, {
        className: V.marginTop20,
        children: [(0, s.jsx)(S.default, {
          className: V.marginBottom20,
          alpha2: t.alpha2,
          countryCode: t.code.split(" ")[0],
          label: k.default.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
          onChange: (e, t) => this.setState({
            login: e,
            loginPrefix: t
          }),
          setRef: this.setLoginRef,
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          spellCheck: "false",
          value: this.state.login,
          autoFocus: !0,
          required: !0
        }), (0, s.jsx)(v.Input, {
          className: V.marginBottom20,
          label: k.default.Messages.FORM_LABEL_PASSWORD,
          onChange: e => this.setState({
            password: e
          }),
          type: "password",
          setRef: this.setPasswordRef,
          autoComplete: "off",
          spellCheck: "false",
          value: this.state.password,
          required: !0
        }), (0, s.jsx)(v.Button, {
          className: V.marginBottom8,
          type: "submit",
          disabled: !0,
          children: k.default.Messages._LOGIN
        }), (0, s.jsx)(v.Button, {
          disabled: !0,
          look: v.Button.Looks.LINK,
          color: v.Button.Colors.LINK,
          children: k.default.Messages.FORGOT_PASSWORD
        }), (0, s.jsx)(v.Button, {
          disabled: !0,
          className: V.marginTop4,
          look: v.Button.Looks.LINK,
          color: v.Button.Colors.LINK,
          children: k.default.Messages.NEED_ACCOUNT
        })]
      })]
    })
  }
  renderDefaultForm(e) {
    var t;
    let n;
    let {
      invite: a,
      giftCode: l,
      loginStatus: i,
      country: o,
      showMobileWebHandoff: u,
      disableAutofocusOnDefaultForm: c
    } = this.props, f = !this.hasError("email") && this.hasError("password"), E = (null == a ? void 0 : a.stage_instance) != null;
    return n = null == a || E ? null != l ? (0, s.jsx)(b.default, {
      giftCode: l
    }) : (0, s.jsxs)("div", {
      className: H.header,
      children: [(0, s.jsx)(v.Title, {
        className: V.marginBottom8,
        children: k.default.Messages.LOGIN_TITLE
      }, "title"), !1 === (0, G.isAndroidWeb)() ? (0, s.jsx)(v.SubTitle, {
        children: k.default.Messages.AUTH_LOGIN_BODY
      }, "subtitle") : null]
    }) : (0, s.jsx)(j.default, {
      invite: a
    }), (0, s.jsxs)(x.default, {
      direction: x.default.Direction.HORIZONTAL,
      align: x.default.Align.CENTER,
      children: [(0, s.jsxs)("div", {
        className: H.mainLoginContainer,
        children: [this.canShowChooseAccount && this.state.dismissedChooseAccount && (0, s.jsx)(v.Button, {
          onClick: () => {
            this.setState(e => ({
              ...e,
              dismissedChooseAccount: !1
            }))
          },
          look: v.Button.Looks.LINK,
          color: v.Button.Colors.PRIMARY,
          className: H.goBackButton,
          children: (0, s.jsxs)("div", {
            className: H.content,
            children: [(0, s.jsx)(D.default, {
              width: 16,
              height: 16,
              className: H.caret
            }), (0, s.jsx)(d.Text, {
              variant: "text-md/normal",
              children: k.default.Messages.AGE_GATE_GO_BACK
            })]
          })
        }), n, (0, s.jsx)(d.HeadingLevel, {
          children: (0, s.jsxs)(v.Block, {
            className: V.marginTop20,
            children: [(0, s.jsx)(S.default, {
              alpha2: o.alpha2,
              countryCode: o.code.split(" ")[0],
              className: V.marginBottom20,
              label: k.default.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
              error: null !== (t = this.renderError("login")) && void 0 !== t ? t : this.renderError("email"),
              onChange: (e, t) => this.setState({
                login: e,
                loginPrefix: t
              }),
              setRef: this.setLoginRef,
              autoCapitalize: "none",
              autoComplete: "off",
              autoCorrect: "off",
              spellCheck: "false",
              value: this.state.login,
              autoFocus: !f && !u && !c,
              required: !0
            }), (0, s.jsx)(v.Input, {
              label: k.default.Messages.FORM_LABEL_PASSWORD,
              error: this.renderError("password"),
              onChange: e => this.setState({
                password: e
              }),
              name: "password",
              type: "password",
              setRef: this.setPasswordRef,
              autoComplete: "off",
              spellCheck: "false",
              autoFocus: f && !u && !c,
              value: this.state.password,
              required: !0
            }), (0, s.jsx)(v.Button, {
              onClick: this.handleForgotPassword,
              look: v.Button.Looks.LINK,
              color: v.Button.Colors.LINK,
              className: r(V.marginBottom20, V.marginTop4),
              children: k.default.Messages.FORGOT_PASSWORD
            }), (0, s.jsx)(v.Button, {
              type: "submit",
              submitting: i === F.LoginStates.LOGGING_IN,
              color: E ? v.Button.Colors.GREEN : v.Button.Colors.BRAND,
              className: V.marginBottom8,
              children: E ? k.default.Messages._LOGIN_STAGE : k.default.Messages._LOGIN
            }), (0, s.jsxs)("div", {
              className: V.marginTop4,
              children: [(0, s.jsx)("span", {
                className: H.needAccount,
                children: k.default.Messages.NEED_ACCOUNT
              }), (0, s.jsx)(v.Button, {
                onClick: this.handleGotoRegister,
                look: v.Button.Looks.LINK,
                color: v.Button.Colors.LINK,
                className: H.smallRegisterLink,
                children: k.default.Messages.REGISTER
              })]
            })]
          })
        })]
      }), (0, s.jsx)(d.HeadingLevel, {
        children: e ? (0, s.jsx)(P.default, {
          authTokenCallback: this.handleAuthToken
        }) : null
      })]
    }, "form-wrapper")
  }
  renderDefault() {
    let {
      authBoxClassName: e,
      showMobileWebHandoff: t
    } = this.props;
    return (0, s.jsxs)("div", {
      className: H.pageContainer,
      children: [(0, s.jsx)(v.default, {
        onSubmit: this.handleLogin,
        tag: "form",
        className: e,
        expanded: !0,
        children: this.renderDefaultForm(!0)
      }), t && (0, s.jsx)(A.default, {})]
    })
  }
  renderGuildTemplate(e) {
    return (0, s.jsx)(B.default, {
      onSubmit: this.handleLogin,
      tag: "form",
      className: r(this.props.authBoxClassName, H.horizontalAuthBox),
      children: () => [(0, s.jsx)(g.default, {
        guildTemplate: e
      }, "template"), this.renderDefaultForm(!1)]
    })
  }
  renderMFA() {
    let e = {
      ticket: this.props.mfaTicket,
      methods: this.props.mfaMethods
    };
    return (0, s.jsx)(v.default, {
      style: {
        padding: 0
      },
      children: (0, s.jsx)(p.MFASlides, {
        mfaFinish: this.handleTokenSubmitMFA,
        request: e,
        onEarlyClose: () => {
          c.default.dispatch({
            type: "LOGIN_RESET"
          })
        },
        width: 480
      })
    })
  }
  renderIPAuthorization() {
    let {
      authBoxClassName: e
    } = this.props, {
      phoneVerifyError: t
    } = this.state;
    return (0, s.jsx)(v.default, {
      tag: "form",
      className: e,
      children: (0, s.jsx)(_.default, {
        title: k.default.Messages.PHONE_IP_AUTHORIZATION_TITLE,
        subtitle: k.default.Messages.PHONE_IP_AUTHORIZATION_SUBTITLE_RESEND.format({
          onResendClick: this.handleResendCode
        }),
        error: t,
        onSubmit: this.handleIPAuthorize,
        onCancel: f.default.loginReset
      })
    })
  }
  renderPasswordRecovery() {
    let {
      authBoxClassName: e
    } = this.props, {
      phoneVerifyError: t
    } = this.state;
    return (0, s.jsx)(v.default, {
      tag: "form",
      className: e,
      children: (0, s.jsx)(_.default, {
        title: k.default.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_TITLE,
        subtitle: k.default.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_SUBTITLE_RESEND.format({
          onResendClick: this.handleResendCode
        }),
        error: t,
        onSubmit: this.handlePasswordReset,
        onCancel: f.default.loginReset
      })
    })
  }
  renderChooseAccount() {
    return (0, s.jsx)(R.default, {
      onDismiss: () => {
        this.setState(e => ({
          ...e,
          dismissedChooseAccount: !0
        }))
      }
    })
  }
  render() {
    let {
      authenticated: e,
      invite: t,
      guildTemplate: n,
      loginStatus: a,
      handoffAvailable: l
    } = this.props, {
      checkingHandoff: r,
      redirecting: i
    } = this.state;
    if (i || r) return (0, s.jsx)(W, {});
    if (l) return this.renderHandOffAvailable();
    if (e && r) return this.renderHandOffContinue();
    switch (a) {
      case F.LoginStates.LOGGING_IN_MFA_SMS:
      case F.LoginStates.MFA_SMS_STEP:
      case F.LoginStates.LOGGING_IN_MFA:
      case F.LoginStates.MFA_STEP:
        return this.renderMFA();
      case F.LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION:
      case F.LoginStates.ACCOUNT_DISABLED:
        return this.renderDisabledAccount();
      case F.LoginStates.PHONE_IP_AUTHORIZATION:
        return this.renderIPAuthorization();
      case F.LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION:
        return this.renderPasswordRecovery();
      case F.LoginStates.LOGGING_IN:
      case F.LoginStates.NONE:
      default:
        if (null != t && t.state === F.InviteStates.RESOLVING) return this.renderResolving();
        if (null != n) {
          if (n.state === w.GuildTemplateStates.RESOLVING) return this.renderResolving();
          return this.renderGuildTemplate(n)
        }
        if (this.canShowChooseAccount && !this.state.dismissedChooseAccount) return this.renderChooseAccount();
        return this.renderDefault()
    }
  }
  constructor(e) {
    var t, n;
    super(e), this.handleAuthToken = async e => {
      await f.default.loginToken(e, !1), U.default.track(F.AnalyticEvents.LOGIN_SUCCESSFUL, {
        source: F.LoginSuccessfulSources.QR_CODE,
        login_source: this.loginSource,
        gift_code_sku_id: this.giftCodeSKUId,
        is_new_user: !1
      })
    }, this.setLoginRef = e => {
      this.loginRef = e
    }, this.setPasswordRef = e => {
      this.passwordRef = e
    }, this.setCodeRef = e => {
      this.codeRef = e
    }, this.getFullLogin = () => {
      let {
        loginPrefix: e,
        login: t
      } = this.state;
      return e + t
    }, this.renderError = e => {
      let {
        errors: t
      } = this.props;
      if (this.hasError(e)) {
        let n = t[e];
        return Array.isArray(n) ? n[0] : n
      }
      return null
    }, this.handleLogin = e => {
      let {
        password: t,
        undelete: n
      } = this.state;
      null != e && e.preventDefault(), f.default.login({
        login: this.getFullLogin(),
        password: t,
        undelete: n,
        source: this.loginSource,
        giftCodeSKUId: this.giftCodeSKUId,
        invite: this.props.invite
      }), y.ComponentDispatch.dispatch(F.ComponentActions.WAVE_EMPHASIZE)
    }, this.handleIPAuthorize = async e => {
      let {
        password: t,
        undelete: n
      } = this.state, s = this.getFullLogin();
      try {
        let {
          token: a
        } = await I.default.verifyPhone(s, e, !1);
        await f.default.authorizeIPAddress(a), f.default.login({
          login: s,
          password: t,
          undelete: n,
          source: this.loginSource,
          giftCodeSKUId: this.giftCodeSKUId
        }), y.ComponentDispatch.dispatch(F.ComponentActions.WAVE_EMPHASIZE)
      } catch (e) {
        null != e.body && null != e.body.message && this.setState({
          phoneVerifyError: e.body.message
        })
      }
    }, this.handlePasswordReset = async e => {
      let {
        transitionTo: t
      } = this.props;
      this.setState({
        phoneVerifyError: null
      });
      try {
        let {
          token: n
        } = await I.default.verifyPhone(this.getFullLogin(), e, !1);
        t(F.Routes.RESET, {
          search: (0, i.stringify)({
            token: n,
            from_login: "true"
          })
        })
      } catch (e) {
        null != e.body && null != e.body.message && this.setState({
          phoneVerifyError: e.body.message
        })
      }
    }, this.handleTokenSubmitMFA = e => {
      let {
        mfaType: t,
        data: n,
        ticket: s
      } = e;
      return y.ComponentDispatch.dispatch(F.ComponentActions.WAVE_EMPHASIZE), f.default.loginMFAv2({
        code: n,
        ticket: s,
        mfaType: t,
        source: this.loginSource,
        giftCodeSKUId: this.giftCodeSKUId
      })
    }, this.handleForgotPassword = async e => {
      null != e && e.preventDefault(), null != this.loginRef && this.loginRef.focus();
      let t = this.getFullLogin();
      try {
        y.ComponentDispatch.dispatch(F.ComponentActions.WAVE_EMPHASIZE), await f.default.forgotPassword(t), (0, d.openModal)(e => (0, s.jsx)(d.ConfirmModal, {
          header: k.default.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_HEADER,
          confirmText: k.default.Messages.OKAY,
          confirmButtonColor: v.Button.Colors.BRAND,
          className: o.isMobile ? H.mobile : "",
          ...e,
          children: (0, s.jsx)(d.Text, {
            variant: "text-md/normal",
            children: k.default.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_BODY.format({
              email: t
            })
          })
        }))
      } catch {}
    }, this.handleResendCode = () => {
      I.default.resendCode(this.getFullLogin())
    }, this.handleReset = e => {
      null != e && e.preventDefault(), f.default.loginReset(), this.setState({
        password: "",
        loginPrefix: "",
        login: "",
        code: "",
        smsCode: "",
        undelete: !1,
        checkingHandoff: !1,
        redirecting: !1
      })
    }, this.handleCancelAccountDeletion = () => {
      this.setState({
        undelete: !0
      }, this.handleLogin)
    }, this.handleGotoRegister = () => {
      let e;
      let {
        login: t
      } = this.state, {
        invite: n,
        giftCode: s,
        guildTemplate: a,
        location: l,
        transitionTo: r,
        redirectTo: o
      } = this.props, u = null != l ? (0, i.parse)(l.search) : {};
      "" !== t && (u.email = t), null != n ? (u.mode = "register", e = F.Routes.INVITE(n.code)) : null != s ? (u.mode = "register", e = F.Routes.GIFT_CODE(s.code)) : null != a ? e = F.Routes.GUILD_TEMPLATE(a.code) : null != o ? (e = F.Routes.REGISTER, u.redirect_to = o) : e = F.Routes.REGISTER, f.default.loginReset(), r(e, {
        search: (0, i.stringify)(u)
      }), y.ComponentDispatch.dispatch(F.ComponentActions.WAVE_EMPHASIZE)
    };
    let a = null != e.location ? (0, i.parse)(e.location.search) : {};
    this.state = {
      redirecting: e.authenticated,
      checkingHandoff: e.handoffAvailable,
      loginPrefix: "",
      login: null !== (n = null !== (t = a.email) && void 0 !== t ? t : a.login) && void 0 !== n ? n : "",
      password: "",
      code: "",
      smsCode: "",
      undelete: !1,
      phoneVerifyError: null,
      dismissedChooseAccount: !1
    }
  }
}
Y.defaultProps = {
  transitionTo: e => n.g.location.assign(e)
};
var K = function(e) {
  let t = (0, u.useStateFromStoresObject)([M.default, O.default, L.default, T.default, N.default], () => ({
    authenticated: L.default.isAuthenticated(),
    handoffAvailable: M.default.isHandoffAvailable(),
    user: M.default.user,
    loginStatus: L.default.getLoginStatus(),
    mfaTicket: L.default.getMFATicket(),
    mfaSMS: L.default.getMFASMS(),
    mfaMethods: L.default.getMFAMethods(),
    maskedPhone: L.default.getMaskedPhone(),
    errors: L.default.getErrors(),
    defaultRoute: O.default.defaultRoute,
    country: N.default.getCountryCode(),
    hasLoggedInAccounts: T.default.getHasLoggedInAccounts()
  }));
  return (0, s.jsx)(Y, {
    ...e,
    ...t
  })
}