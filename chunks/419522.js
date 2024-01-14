"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
}), s("222007");
var n = s("37983"),
  i = s("884691"),
  a = s("414456"),
  o = s.n(a),
  l = s("748820"),
  r = s("759843"),
  u = s("77078"),
  d = s("794538"),
  h = s("145131"),
  c = s("794851"),
  E = s("782340"),
  R = s("922833"),
  f = s("173791"),
  p = s("926622");
class I extends i.PureComponent {
  async componentDidMount() {
    let [e, {
      default: t
    }] = await Promise.all([s.el("432201").then(s.t.bind(s, "432201", 19)), s.el("245749").then(s.t.bind(s, "245749", 23))]);
    this._animItem = t.loadAnimation({
      container: this._lottieRef,
      renderer: "svg",
      loop: !0,
      autoplay: !1,
      animationData: e
    })
  }
  componentWillUnmount() {
    null != this._animItem && (this._animItem.destroy(), this._animItem = void 0)
  }
  render() {
    let e, t, s;
    let {
      error: i,
      working: a,
      transitionState: l,
      validPhone: I
    } = this.props;
    return e = null != i && "" !== i ? (0, n.jsx)("div", {
      className: o(R.description, R.error, p.marginBottom20),
      children: i
    }) : I ? (0, n.jsx)("div", {
      className: o(R.description, p.marginBottom20),
      children: E.default.Messages.VERIFICATION_PHONE_DESCRIPTION
    }) : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: o(R.description, p.marginBottom20),
        children: E.default.Messages.ENTER_PHONE_DESCRIPTION
      }), (0, n.jsx)("div", {
        className: o(R.description, p.marginBottom20),
        children: E.default.Messages.ENTER_PHONE_DESCRIPTION_NOTE.format()
      })]
    }), t = I ? (0, n.jsxs)(h.default, {
      className: R.field,
      direction: h.default.Direction.VERTICAL,
      align: h.default.Align.CENTER,
      children: [(0, n.jsx)(d.default, {
        onSubmit: this.handleVerifyPhone
      }), (0, n.jsx)(u.Button, {
        className: p.marginTop8,
        size: u.ButtonSizes.SMALL,
        look: u.ButtonLooks.LINK,
        color: u.ButtonColors.PRIMARY,
        onClick: this.handleResendCode,
        children: E.default.Messages.RESEND_CODE
      })]
    }) : (0, n.jsx)(c.default, {
      className: R.field,
      onSubmit: this.handleAddPhone,
      submitting: a
    }), s = I ? E.default.Messages.VERIFICATION_PHONE_TITLE : E.default.Messages.ENTER_PHONE_TITLE, (0, n.jsxs)(u.ModalRoot, {
      impression: {
        impressionName: r.ImpressionNames.USER_VERIFY_PHONE
      },
      transitionState: l,
      className: o(R.phoneVerificationModal, f.vertical, f.alignCenter, f.justifyCenter, p.marginTop60),
      "aria-labelledby": this.headerId,
      children: [(0, n.jsx)("div", {
        className: R.animationContainer,
        ref: this.setLottieRef
      }), (0, n.jsx)("div", {
        className: o(R.title, p.marginBottom8),
        id: this.headerId,
        children: s
      }), e, t]
    })
  }
  constructor(e) {
    super(e), this._animItem = null, this.headerId = (0, l.v4)(), this.setLottieRef = e => {
      this._lottieRef = e
    }, this.handleAddPhone = e => {
      this.state.animated || null == this._animItem ? this.setState({
        phone: e
      }) : (this._animItem.play(), this.setState({
        animated: !0,
        phone: e
      }));
      let {
        onAddPhone: t
      } = this.props;
      null == t || t(e)
    }, this.handleVerifyPhone = e => {
      let {
        onVerifyPhone: t
      } = this.props;
      null == t || t(e)
    }, this.handleResendCode = () => {
      let {
        onAddPhone: e
      } = this.props;
      null == e || e(this.state.phone)
    }, this.state = {
      animated: !1,
      phone: ""
    }
  }
}
var m = I