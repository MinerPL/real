"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
}), s("222007"), s("70102");
var a = s("37983"),
  n = s("884691"),
  l = s("446674"),
  i = s("77078"),
  r = s("569272"),
  o = s("583711"),
  d = s("102985"),
  u = s("145131"),
  c = s("599110"),
  S = s("659632"),
  E = s("49111"),
  f = s("782340"),
  T = s("882553");
class m extends n.Component {
  get analyticsLocation() {
    let {
      analyticsContext: {
        location: e
      }
    } = this.props;
    return {
      ...e,
      object: E.AnalyticsObjects.BUTTON_CTA
    }
  }
  render() {
    let {
      obscureInput: e
    } = this.props, {
      codeInput: t,
      submitting: s,
      hasError: n,
      isPromoCode: l
    } = this.state;
    return (0, a.jsxs)(i.FormSection, {
      tag: i.FormTitleTags.H1,
      title: f.default.Messages.GIFT_INVENTORY_REDEEM_CODES,
      children: [(0, a.jsx)(i.FormTitle, {
        children: f.default.Messages.APPLICATION_ENTITLEMENT_CODE_REDEMPTION_PROMPT
      }), (0, a.jsx)("form", {
        onSubmit: this.handleSubmit,
        children: (0, a.jsxs)(u.default, {
          children: [(0, a.jsx)(i.TextInput, {
            type: e ? "password" : "text",
            value: t,
            onChange: this.handleChange,
            placeholder: "WUMP-AAAAA-BBBBB-CCCCC",
            error: !l && n ? f.default.Messages.APPLICATION_ENTITLEMENT_CODE_REDEMPTION_INVALID : null,
            className: T.codeRedemptionInput
          }), (0, a.jsx)(i.Button, {
            type: "submit",
            submitting: s,
            children: f.default.Messages.APPLICATION_ENTITLEMENT_CODE_REDEMPTION_REDEEM
          })]
        })
      }), l ? (0, a.jsx)(i.Text, {
        className: T.errorMessage,
        variant: "text-sm/normal",
        children: f.default.Messages.APPLICATION_ENTITLEMENT_CODE_REDEMPTION_PROMOTION.format({
          promoLink: () => {
            window.open("https://discord.com/billing/promotions/".concat(t))
          }
        })
      }) : null]
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      codeInput: "",
      submitting: !1,
      hasError: !1,
      isPromoCode: !1
    }, this.handleChange = e => {
      this.setState({
        codeInput: e,
        hasError: !1
      })
    }, this.handleSubmit = async e => {
      e.preventDefault();
      let {
        codeInput: t
      } = this.state;
      if ("" === t) return;
      let s = (0, S.processGiftCodeInput)(t);
      if (null == s) {
        this.setState({
          hasError: !0
        });
        return
      }
      this.setState({
        submitting: !0
      });
      try {
        let e = await r.default.resolveGiftCode(s);
        if (null != e && null != e.giftCode.promotion) throw this.setState({
          isPromoCode: !0
        }), Error("Cannnot redeem promotion code as gift");
        c.default.track(E.AnalyticEvents.OPEN_MODAL, {
          type: "gift_accept",
          location: {
            ...this.analyticsLocation,
            object: E.AnalyticsObjects.BUTTON_CTA
          }
        }), (0, o.openGiftCodeAcceptModal)({
          processedCode: s
        }), this.setState({
          codeInput: ""
        })
      } catch (e) {
        this.setState({
          hasError: !0
        })
      } finally {
        this.setState({
          submitting: !1
        })
      }
    }
  }
}

function _() {
  let e = n.useContext(c.AnalyticsContext),
    t = (0, l.useStateFromStores)([d.default], () => d.default.enabled);
  return (0, a.jsx)(m, {
    analyticsContext: e,
    obscureInput: t
  })
}