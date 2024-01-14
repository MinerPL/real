"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
}), s("781738");
var a = s("37983"),
  n = s("884691"),
  r = s("414456"),
  o = s.n(r),
  l = s("730290"),
  i = s("394846"),
  u = s("446674"),
  d = s("913144"),
  c = s("437822"),
  h = s("457108"),
  f = s("724038"),
  m = s("24287"),
  p = s("970366"),
  C = s("271938"),
  S = s("124969"),
  g = s("659500"),
  T = s("49111"),
  A = s("782340"),
  N = s("926622");
u.default.initialize();
class E extends n.PureComponent {
  componentDidMount() {
    (0, p.trackAppUIViewed)("reset_password")
  }
  renderPasswordReset() {
    let {
      password: e,
      error: t,
      hasCancel: n
    } = this.state, r = this.isSubmitting(), o = null != t ? t : this.renderError("password");
    return (0, a.jsxs)(S.default, {
      onSubmit: this.handleSubmit,
      tag: "form",
      children: [(0, a.jsx)("img", {
        alt: "",
        src: null == o ? s("245288") : s("314837"),
        className: N.marginBottom20
      }), (0, a.jsx)(S.Title, {
        children: A.default.Messages.RESET_PASSWORD_TITLE
      }), (0, a.jsxs)(S.Block, {
        className: N.marginTop20,
        children: [(0, a.jsx)(S.Input, {
          label: A.default.Messages.FORM_LABEL_NEW_PASSWORD,
          className: N.marginBottom20,
          name: "password",
          value: e,
          onChange: e => this.setState({
            password: e
          }),
          error: o,
          type: "password"
        }), (0, a.jsx)(S.Button, {
          type: "submit",
          submitting: r,
          children: A.default.Messages.CHANGE_PASSWORD
        }), n ? (0, a.jsx)(S.Button, {
          className: N.marginTop8,
          onClick: this.handleGoToLogin,
          submitting: r,
          color: S.Button.Colors.PRIMARY,
          children: A.default.Messages.CANCEL
        }) : null]
      })]
    })
  }
  renderMFA() {
    let e = {
      ticket: this.props.mfaTicket,
      methods: this.props.mfaMethods
    };
    return (0, a.jsx)(S.default, {
      style: {
        padding: 0
      },
      children: (0, a.jsx)(m.MFASlides, {
        mfaFinish: e => {
          let {
            mfaType: t,
            data: s
          } = e;
          return this.handleTokenSubmitMFAv2(t, s)
        },
        request: e,
        onEarlyClose: () => {
          d.default.dispatch({
            type: "LOGIN_RESET"
          })
        },
        width: 480
      })
    })
  }
  renderSucceeded() {
    return (0, a.jsxs)(S.default, {
      children: [(0, a.jsx)("img", {
        alt: "",
        src: s("245288"),
        className: o(N.marginBottom20, i.isMobile ? N.marginTop20 : "")
      }), (0, a.jsx)(S.Title, {
        className: N.marginBottom40,
        children: A.default.Messages.RESET_PASSWORD_SUCCESS_TITLE
      }), (0, a.jsx)(S.Button, {
        onClick: this.handleOpenApp,
        children: A.default.Messages.VERIFICATION_OPEN_DISCORD
      })]
    })
  }
  render() {
    return this.state.success ? this.renderSucceeded() : null != this.props.mfaTicket && "" !== this.props.mfaTicket ? this.renderMFA() : this.renderPasswordReset()
  }
  constructor(e) {
    var t;
    super(e), this.handleSubmit = async e => {
      let {
        location: t,
        onLoginSuccess: s,
        source: a,
        resetToken: n
      } = this.props, {
        password: r,
        error: o
      } = this.state;
      if (null != e && e.preventDefault(), 0 === r.length) {
        this.setState({
          error: A.default.Messages.PASSWORD_REQUIRED
        }), g.ComponentDispatch.dispatch(T.ComponentActions.WAVE_EMPHASIZE);
        return
      }
      null != o && this.setState({
        error: null
      });
      let l = n;
      if (null != t && (l = (0, h.default)(t)), null != l) {
        this.setState({
          working: !0
        });
        try {
          let {
            result: e,
            sms: t,
            webauthn: n,
            ticket: o,
            token: i,
            totp: u,
            backup: h
          } = await c.default.resetPassword(l, r, a);
          e === c.PasswordResetResult.MFA ? d.default.dispatch({
            type: "LOGIN_MFA_STEP",
            ticket: o,
            sms: t,
            webauthn: n,
            totp: u,
            backup: h
          }) : null != s ? s(i) : (d.default.dispatch({
            type: "LOGIN_SUCCESS",
            token: i
          }), this.handlePasswordChangeSuccess())
        } catch (e) {}
        this.setState({
          working: !1
        })
      }
    }, this.handleTokenSubmitMFAv2 = (e, t) => {
      let {
        location: s,
        mfaTicket: a,
        onLoginSuccess: n,
        resetToken: r,
        source: o
      } = this.props, {
        password: l
      } = this.state;
      if (0 === l.length) return d.default.dispatch({
        type: "LOGIN_RESET"
      }), Promise.reject();
      let i = r;
      return (null != s && (i = (0, h.default)(s)), null == i) ? (d.default.dispatch({
        type: "LOGIN_RESET"
      }), Promise.reject()) : c.default.resetPasswordMFAv2({
        method: e,
        code: t,
        ticket: a,
        password: l,
        token: i,
        source: o
      }).then(e => {
        null != n ? n(e) : (d.default.dispatch({
          type: "LOGIN_SUCCESS",
          token: e
        }), this.handlePasswordChangeSuccess())
      })
    }, this.handlePasswordChangeSuccess = () => {
      let {
        replaceWith: e
      } = this.props;
      if (i.isTablet || i.isMobile) {
        this.setState({
          success: !0
        });
        return
      }
      e(T.Routes.APP)
    }, this.handleGoToLogin = () => {
      let {
        transitionTo: e
      } = this.props;
      c.default.loginReset(), e(T.Routes.LOGIN)
    }, this.isSubmitting = () => {
      let {
        loginStatus: e
      } = this.props, {
        working: t
      } = this.state;
      return t || e === T.LoginStates.LOGGING_IN_MFA
    }, this.handleOpenApp = () => {
      (0, f.default)("password_reset")
    }, this.hasError = e => null != this.props.errors[e] || null != this.state.error, this.renderError = e => {
      let {
        errors: t
      } = this.props;
      if (this.hasError(e)) {
        let s = t[e];
        return Array.isArray(s) ? s[0] : s
      }
      return null
    };
    let s = (null === (t = this.props.location) || void 0 === t ? void 0 : t.search) != null && "" !== this.props.location.search ? (0, l.parse)(this.props.location.search) : null;
    this.state = {
      method: "",
      password: "",
      code: "",
      error: null,
      hasCancel: null != s && null != s.from_login,
      working: !1,
      success: !1
    }
  }
}
E.defaultProps = {
  transitionTo: e => s.g.location.assign(e),
  replaceWith: e => s.g.location.replace(e)
};
var _ = function(e) {
  let t = (0, u.useStateFromStoresObject)([C.default], () => ({
    loginStatus: C.default.getLoginStatus(),
    mfaTicket: C.default.getMFATicket(),
    errors: C.default.getErrors(),
    mfaMethods: C.default.getMFAMethods()
  }));
  return (0, a.jsx)(E, {
    ...e,
    ...t
  })
}