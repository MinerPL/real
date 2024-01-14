"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
});
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  r = n.n(l),
  i = n("394846"),
  o = n("77078"),
  u = n("2021"),
  d = n("393414"),
  c = n("725484"),
  f = n("554054"),
  E = n("159885"),
  h = n("528502"),
  _ = n("49111"),
  m = n("71041");
let g = (0, E.cssValueToNumber)(m.responsiveWidthMobile),
  p = [_.Routes.LOGIN, _.Routes.LOGIN_HANDOFF, _.Routes.REGISTER, _.Routes.INVITE(""), _.Routes.GIFT_CODE(""), _.Routes.GUILD_TEMPLATE_LOGIN(""), _.Routes.GUILD_TEMPLATE(""), _.Routes.DISABLE_EMAIL_NOTIFICATIONS, _.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, _.Routes.BILLING_PREMIUM_SUBSCRIBE, _.Routes.BILLING_PAYMENT_SOURCES_CREATE, _.Routes.BILLING_PAYMENTS, _.Routes.BILLING_PREMIUM_SWITCH_PLAN, _.Routes.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, _.Routes.VERIFY, _.Routes.VERIFY_HUB_EMAIL, _.Routes.REJECT_IP, _.Routes.REJECT_MFA, _.Routes.AUTHORIZE_IP, _.Routes.AUTHORIZE_PAYMENT, _.Routes.RESET, _.Routes.HANDOFF, _.Routes.REPORT, _.Routes.REPORT_SECOND_LOOK];

function A(e) {
  return p.some(t => e.startsWith(t))
}
class T extends a.Component {
  componentDidMount() {
    window.addEventListener("resize", this.handleResize)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }
  mobileTransitionTo(e, t) {
    if (A(e))(0, d.transitionTo)(e, t);
    else {
      let n = null != t && null != t.search ? t.search : null;
      window.location = null == n ? e : "".concat(e, "?").concat(n)
    }
  }
  mobileReplaceWith(e) {
    A(e) ? (0, d.replaceWith)(e) : window.location = e
  }
  renderDefault() {
    let {
      splash: e
    } = this.props, t = (0, s.jsx)(u.default, {
      component: a.Fragment,
      children: a.Children.map(this.props.children, e => a.cloneElement(e, {
        transitionTo: d.transitionTo,
        replaceWith: d.replaceWith
      }))
    });
    return (0, s.jsx)("div", {
      className: m.characterBackground,
      children: (0, s.jsx)(o.HeadingLevel, {
        forceLevel: 1,
        children: null != e ? (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(c.default, {
            show: !0,
            className: r(m.logo)
          }), (0, s.jsx)(f.Splash, {
            splash: e,
            children: t
          })]
        }) : (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(h.default, {
            className: m.artwork,
            preserveAspectRatio: "xMinYMin slice"
          }), t]
        })
      })
    })
  }
  renderMobile() {
    return (0, s.jsx)(u.default, {
      component: a.Fragment,
      children: a.Children.map(this.props.children, e => a.cloneElement(e, {
        transitionTo: this.mobileTransitionTo,
        replaceWith: this.mobileReplaceWith
      }))
    })
  }
  render() {
    let {
      isMobileWidth: e
    } = this.state, t = navigator.userAgent.includes("GameLauncher");
    return e || i.isMobile || i.isTablet || t ? this.renderMobile() : this.renderDefault()
  }
  constructor(e) {
    super(e), this.handleResize = () => {
      this.setState({
        isMobileWidth: window.innerWidth <= g
      })
    }, this.state = {
      isMobileWidth: window.innerWidth <= g
    }
  }
}
var R = T