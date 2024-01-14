"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("748820"),
  o = n("862337"),
  u = n("77078"),
  d = n("49111"),
  c = n("782340"),
  E = n("361473"),
  f = n("173791"),
  _ = n("926622");
class h extends s.PureComponent {
  async componentDidMount() {
    let [e, {
      default: t
    }] = await Promise.all([n.el("280201").then(n.t.bind(n, "280201", 19)), n.el("245749").then(n.t.bind(n, "245749", 23))]);
    this._animItem = t.loadAnimation({
      container: this._lottieRef,
      renderer: "svg",
      loop: !0,
      autoplay: !0,
      animationData: e
    })
  }
  componentWillUnmount() {
    this._timeout.stop(), null != this._animItem && (this._animItem.destroy(), this._animItem = void 0)
  }
  renderInputs() {
    let {
      emailError: e,
      passwordError: t,
      submitting: n
    } = this.props, {
      email: s,
      password: i
    } = this.state;
    return (0, a.jsxs)("div", {
      className: E.container,
      children: [(0, a.jsx)(u.FormItem, {
        title: c.default.Messages.FORM_LABEL_EMAIL,
        className: _.marginBottom20,
        children: (0, a.jsx)(u.TextInput, {
          value: s,
          error: e,
          onChange: this.handleEmailChange,
          onKeyPress: this.handleKeyPress,
          autoFocus: !0
        })
      }), (0, a.jsx)(u.FormItem, {
        title: c.default.Messages.FORM_LABEL_PASSWORD,
        className: _.marginBottom40,
        children: (0, a.jsx)(u.TextInput, {
          type: "password",
          value: i,
          error: t,
          onChange: this.handlePasswordChange,
          onKeyPress: this.handleKeyPress
        })
      }), (0, a.jsx)(u.Button, {
        fullWidth: !0,
        size: u.Button.Sizes.LARGE,
        onClick: this.handleVerify,
        submitting: n,
        disabled: 0 === s.length || 0 === i.length,
        children: c.default.Messages.VERIFY_ACCOUNT
      })]
    })
  }
  renderActions() {
    let {
      canChange: e
    } = this.props;
    return (0, a.jsxs)("div", {
      className: E.container,
      children: [(0, a.jsx)(u.Button, {
        className: _.marginTop20,
        fullWidth: !0,
        size: u.Button.Sizes.LARGE,
        look: u.ButtonLooks.INVERTED,
        color: u.ButtonColors.PRIMARY,
        onClick: this.handleResendEmail,
        children: c.default.Messages.RESEND_EMAIL
      }), e && (0, a.jsx)(u.Button, {
        className: _.marginTop20,
        fullWidth: !0,
        size: u.Button.Sizes.MEDIUM,
        look: u.ButtonLooks.LINK,
        color: u.ButtonColors.PRIMARY,
        onClick: this.handleChangeEmailClick,
        children: c.default.Messages.CHANGE_EMAIL
      })]
    })
  }
  render() {
    let e;
    let {
      resent: t
    } = this.state, {
      email: n,
      canResend: s,
      transitionState: i
    } = this.props;
    return e = t && null != n ? c.default.Messages.VERIFY_EMAIL_BODY_RESENT.format({
      email: n
    }) : s ? c.default.Messages.VERIFY_EMAIL_BODY : c.default.Messages.ENTER_EMAIL_BODY, (0, a.jsxs)(u.ModalRoot, {
      transitionState: i,
      "aria-labelledby": this._headerId,
      className: l(E.emailVerificationModal, f.vertical, f.alignCenter, f.justifyCenter, _.marginTop60),
      children: [(0, a.jsx)("div", {
        className: E.animationContainer,
        ref: this.setLottieRef
      }), (0, a.jsx)("div", {
        id: this._headerId,
        className: l(E.title, _.marginBottom8),
        children: c.default.Messages.VERIFY_BY_EMAIL
      }), (0, a.jsx)("div", {
        className: l(E.body, _.marginBottom20),
        children: e
      }), s ? this.renderActions() : this.renderInputs()]
    })
  }
  constructor(...e) {
    super(...e), this._animItem = null, this._timeout = new o.Timeout, this._headerId = (0, r.v4)(), this.state = {
      resent: !1,
      shouldClose: !1,
      email: "",
      password: ""
    }, this.setLottieRef = e => {
      this._lottieRef = e
    }, this.handleVerify = () => {
      let {
        onVerify: e
      } = this.props;
      e(this.state.email, this.state.password)
    }, this.handleResendEmail = () => {
      let {
        onResend: e,
        onClose: t
      } = this.props;
      e(), !this.state.resent && (this.setState({
        resent: !0,
        shouldClose: !0
      }), this._timeout.start(3e3, () => {
        this.state.shouldClose && t()
      }))
    }, this.handleChangeEmailClick = () => {
      let {
        onChangeEmailClick: e
      } = this.props;
      this.setState({
        resent: !1,
        shouldClose: !1
      }), e()
    }, this.handleEmailChange = e => {
      this.setState({
        email: e
      })
    }, this.handlePasswordChange = e => {
      this.setState({
        password: e
      })
    }, this.handleKeyPress = e => {
      let {
        email: t,
        password: n
      } = this.state;
      13 === e.which && t.length > 0 && n.length > 0 && (e.preventDefault(), this.handleVerify())
    }
  }
}
h.defaultProps = {
  canResend: !1,
  canChange: !0,
  onChangeEmailClick: d.NOOP,
  onVerify: (e, t) => {},
  onResend: d.NOOP,
  onClose: d.NOOP
};
var C = h