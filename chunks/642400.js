"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("394846"),
  o = n("77078"),
  u = n("892313"),
  d = n("701909"),
  c = n("145131"),
  E = n("109507"),
  f = n("49111"),
  _ = n("782340"),
  h = n("291273"),
  C = n("926622");
let T = d.default.getArticleURL(f.HelpdeskArticles.VERIFICATION_FAQ);
class I extends s.PureComponent {
  renderFields() {
    let {
      types: e,
      captchaKey: t,
      theme: n,
      onCaptchaVerify: s
    } = this.props;
    return (0, a.jsx)(a.Fragment, {
      children: e.map(e => e === f.VerificationTypes.CAPTCHA ? (0, a.jsx)(E.default, {
        onVerify: s,
        theme: n
      }, t) : (0, a.jsx)(o.Button, {
        className: l(C.marginBottom20),
        onClick: () => this.handleClick(e),
        children: u.default.getButtonTitle(e)
      }, e))
    })
  }
  render() {
    return (0, a.jsxs)(c.default, {
      className: h.verification,
      align: c.default.Align.CENTER,
      direction: c.default.Direction.VERTICAL,
      children: [(0, a.jsxs)(c.default, {
        className: l(h.container, {
          [h.isMobile]: r.isMobile
        }),
        direction: c.default.Direction.VERTICAL,
        align: c.default.Align.CENTER,
        justify: c.default.Justify.CENTER,
        children: [(0, a.jsx)("div", {
          className: h.image
        }), (0, a.jsx)("div", {
          className: l(h.title, C.marginTop20),
          children: _.default.Messages.VERIFICATION_TITLE
        }), (0, a.jsx)("div", {
          className: l(h.body, C.marginTop4, C.marginBottom20),
          children: _.default.Messages.VERIFICATION_BODY_WITH_HELP_LINK.format({
            helpCenterURL: T
          })
        }), (0, a.jsx)(c.default, {
          grow: 0,
          direction: c.default.Direction.VERTICAL,
          justify: c.default.Justify.CENTER,
          children: this.renderFields()
        })]
      }), (0, a.jsx)("div", {
        className: l(h.footer, C.marginTop20),
        children: _.default.Messages.VERIFICATION_FOOTER
      }), (0, a.jsxs)(c.default, {
        className: l(C.marginTop4, C.marginBottom20),
        grow: 0,
        children: [(0, a.jsx)("div", {
          className: l(h.footer, h.footerAction),
          children: _.default.Messages.VERIFICATION_FOOTER_SUPPORT.format({
            supportURL: d.default.getSubmitRequestURL()
          })
        }), (0, a.jsx)("div", {
          className: l(h.footer, h.footerBullet),
          children: "•"
        }), (0, a.jsx)("div", {
          className: l(h.footer, h.footerAction),
          children: _.default.Messages.VERIFICATION_FOOTER_LOGOUT.format({
            logoutOnClick: this.props.onLogout
          })
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), this.handleClick = e => {
      let {
        onClick: t
      } = this.props;
      null == t || t(e)
    }
  }
}
I.defaultProps = {
  types: [f.VerificationTypes.CAPTCHA],
  onCaptchaVerify: f.NOOP,
  onLogout: f.NOOP
};
var S = I