"use strict";
l.r(t), l.d(t, {
  default: function() {
    return g
  }
}), l("70102"), l("222007");
var a = l("37983"),
  s = l("884691"),
  n = l("414456"),
  i = l.n(n),
  r = l("627445"),
  c = l.n(r),
  u = l("446674"),
  o = l("77078"),
  d = l("971427"),
  h = l("701909"),
  p = l("719923"),
  f = l("49111"),
  I = l("646718"),
  A = l("782340"),
  L = l("461503");
class m extends s.Component {
  componentDidMount() {
    this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state))
  }
  componentDidUpdate(e, t) {
    let l = this.hasAcceptedNeccessaryTerms(e, t),
      a = this.hasAcceptedNeccessaryTerms(this.props, this.state);
    a !== l && this.props.onChange(a)
  }
  hasAcceptedNeccessaryTerms(e, t) {
    return (null == e.eulaId || t.hasAcceptedEULA) && (!e.showWithdrawalWaiver || t.hasAcceptedWithdrawalWaiver)
  }
  formatInterval(e) {
    if (e === I.SubscriptionIntervalTypes.YEAR) return A.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
    if (e === I.SubscriptionIntervalTypes.MONTH) return A.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
    throw Error("Invalid interval type: ".concat(e))
  }
  render() {
    let {
      eulaId: e,
      applicationName: t,
      hasPreviouslyAcceptedEULA: s,
      forceShow: n,
      disabled: r,
      className: u,
      checkboxClassname: d,
      checkboxLabelClassname: I,
      finePrint: m,
      showPricingLink: g,
      showWithdrawalWaiver: S,
      isTrial: T,
      isDiscount: E,
      subscriptionPlan: N,
      finePrintClassname: v
    } = this.props, {
      hasAcceptedEULA: C,
      hasAcceptedWithdrawalWaiver: M
    } = this.state;
    return (c(!T || null != N, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true"), n || null != e && !s || S) ? (0, a.jsxs)("div", {
      className: u,
      children: [S && (0, a.jsx)(o.FormTitle, {
        className: L.formTitle,
        children: A.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER
      }), null != e && (n || !s) ? (0, a.jsx)(o.Checkbox, {
        type: o.Checkbox.Types.INVERTED,
        value: C,
        onChange: this.handleToggleEULAAcceptance,
        disabled: r,
        className: L.checkbox,
        children: (0, a.jsx)("div", {
          className: L.checkboxLabel,
          children: A.default.Messages.BILLING_THIRD_PARTY_EULA_LABEL.format({
            applicationName: t,
            onClick: t => {
              (0, o.openModalLazy)(async () => {
                let {
                  default: t
                } = await l.el("523360").then(l.bind(l, "523360"));
                return l => (0, a.jsx)(t, {
                  eulaId: e,
                  ...l
                })
              }), t.preventDefault()
            }
          })
        })
      }) : null, null == m ? null : (0, a.jsx)("div", {
        className: i(L.finePrint, v),
        children: m
      }), S ? (0, a.jsxs)("div", {
        className: u,
        children: [(0, a.jsx)(o.Checkbox, {
          type: o.Checkbox.Types.INVERTED,
          value: M,
          onChange: this.handleToggleEUWithdralWaiverAcceptance,
          disabled: r,
          className: i(L.checkbox, d),
          children: (0, a.jsx)("div", {
            className: i(L.checkboxLabel, I),
            children: A.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER_CHECKBOX
          })
        }), (0, a.jsx)("div", {
          className: L.finePrint,
          children: A.default.Messages.BILLING_ONLINE_PURCHASE_WAIVER_DISCLAIMER
        })]
      }) : null, g && (0, a.jsxs)("div", {
        className: L.finePrint,
        children: ["*", A.default.Messages.BILLING_HOW_PRICING_WORKS.format({
          documentationLink: h.default.getArticleURL(f.HelpdeskArticles.LOCALIZED_PRICING)
        })]
      }), T && null != N && (0, a.jsx)(o.Text, {
        variant: "text-xs/medium",
        color: "interactive-normal",
        children: A.default.Messages.BILLING_TRIAL_LEGAL_COPY_V2.format({
          buttonText: (0, p.getBillingReviewSubheader)(null, N),
          interval: this.formatInterval(null == N ? void 0 : N.interval),
          cancelSubscriptionArticle: h.default.getArticleURL(f.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB),
          paidServiceTermsArticle: h.default.getArticleURL(f.HelpdeskArticles.PAID_TERMS)
        })
      }), E && null != N && (0, a.jsx)(o.Text, {
        variant: "text-xs/medium",
        color: "interactive-normal",
        children: A.default.Messages.BILLING_DISCOUNT_LEGAL_COPY.format({
          buttonText: (0, p.getBillingReviewSubheader)(null, N),
          interval: this.formatInterval(null == N ? void 0 : N.interval),
          cancelSubscriptionArticle: h.default.getArticleURL(f.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB),
          paidServiceTermsArticle: h.default.getArticleURL(f.HelpdeskArticles.PAID_TERMS)
        })
      })]
    }) : null
  }
  constructor(...e) {
    super(...e), this.state = {
      hasAcceptedEULA: !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
      hasAcceptedWithdrawalWaiver: !1
    }, this.handleToggleEUWithdralWaiverAcceptance = (e, t) => {
      this.setState({
        hasAcceptedWithdrawalWaiver: t
      })
    }, this.handleToggleEULAAcceptance = (e, t) => {
      this.setState({
        hasAcceptedEULA: t
      })
    }
  }
}
var g = u.default.connectStores([d.default], e => {
  let {
    eulaId: t
  } = e;
  return {
    hasPreviouslyAcceptedEULA: null != t && d.default.hasAcceptedEULA(t)
  }
})(m)