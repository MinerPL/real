"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
}), s("70102");
var a = s("37983");
s("884691");
var n = s("868869"),
  r = s("745279"),
  l = s("701909"),
  i = s("719923"),
  u = s("153160"),
  c = s("380186"),
  o = s("49111"),
  d = s("646718"),
  E = s("782340"),
  _ = s("314502"),
  I = function(e) {
    let t, s, I;
    let {
      subscriptionPlan: p,
      isGift: T,
      isEmbeddedIAP: L,
      renewalInvoice: A,
      paymentSourceType: M,
      hide: f,
      purchaseType: N,
      productLine: S,
      basePrice: R,
      currentSubscription: h
    } = e;
    if (f) return null;
    let P = null == e.planGroup ? [] : e.planGroup;
    if (null != A) {
      let e = i.default.getIntervalForInvoice(A);
      t = e.intervalType, s = e.intervalCount, I = (0, u.formatRate)((0, u.formatPrice)(A.total, A.currency), t, s)
    } else null != p && (t = p.interval, s = p.intervalCount);
    let C = (0, n.getReviewConfirmButtonLabel)({
        purchaseType: N || o.PurchaseTypes.SUBSCRIPTION,
        plan: p,
        premiumSubscription: null == h ? null : h,
        isGift: !!T,
        planGroup: P,
        isPrepaidPaymentSource: !1
      }),
      U = "",
      g = "";
    if (L) {
      if (null != I && (null == A ? void 0 : A.subscriptionPeriodEnd) != null) U = E.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_RATE_AND_RENEWAL.format({
        rate: I,
        renewalDate: A.subscriptionPeriodEnd
      });
      else switch (t) {
        case d.SubscriptionIntervalTypes.MONTH:
          U = 1 === s ? E.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MONTHLY : E.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MULTI_MONTH.format({
            intervalCount: s
          });
          break;
        case d.SubscriptionIntervalTypes.YEAR:
          U = E.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_YEARLY;
          break;
        case void 0:
          g = E.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
            primaryText: C,
            paidURL: o.MarketingURLs.PAID_TERMS
          }), U = E.default.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE.format({});
          break;
        default:
          throw Error("Unexpected interval: ".concat(t))
      }
    } else if (N === o.PurchaseTypes.ONE_TIME) g = E.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
      primaryText: C,
      paidURL: o.MarketingURLs.PAID_TERMS
    }), U = S === o.SKUProductLines.COLLECTIBLES ? T ? E.default.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_GIFT_PAYMENT : E.default.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_PAYMENT : E.default.Messages.ONE_TIME_PURCHASE_FINE_PRINT;
    else if (null == p || T) switch (T && (g = E.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
        primaryText: C,
        paidURL: o.MarketingURLs.PAID_TERMS
      })), t) {
      case d.SubscriptionIntervalTypes.MONTH:
        U = T ? E.default.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY, U = T ? E.default.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : 1 === s ? E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY : E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MULTI_MONTH.format({
          intervalCount: s
        });
        break;
      case d.SubscriptionIntervalTypes.YEAR:
        U = T ? E.default.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_YEARLY : E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_YEARLY;
        break;
      case void 0:
        U = "";
        break;
      default:
        throw Error("Unexpected interval: ".concat(t))
    } else {
      let e;
      let a = (0, n.getReviewConfirmButtonLabel)({
        purchaseType: o.PurchaseTypes.SUBSCRIPTION,
        plan: p,
        premiumSubscription: null == h ? null : h,
        isGift: !1,
        planGroup: P,
        isPrepaidPaymentSource: !1
      });
      if (null != R && null != t && null != s && (e = (0, u.formatRate)((0, u.formatPrice)(R.amount, R.currency), t, s)), null == e) {
        let e = Error("Missing base rate for legal fine print");
        (0, r.captureBillingException)(e, {
          tags: {
            planId: p.id
          }
        })
      }
      U = null != h && (0, c.subscriptionCanDowngrade)(h, p.id, P) ? E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PLAN_CHANGE_V2.format({
        primaryText: a,
        rate: e,
        paidURL: o.MarketingURLs.PAID_TERMS,
        contactLink: o.MarketingURLs.CONTACT,
        helpdeskArticle: l.default.getArticleURL(o.HelpdeskArticles.BILLING)
      }) : E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_V2.format({
        primaryText: a,
        rate: e,
        paidURL: o.MarketingURLs.PAID_TERMS,
        contactLink: o.MarketingURLs.CONTACT,
        helpdeskArticle: l.default.getArticleURL(o.HelpdeskArticles.BILLING)
      })
    }
    return (0, a.jsxs)(a.Fragment, {
      children: ["" !== g && (0, a.jsxs)("div", {
        children: [(0, a.jsx)("div", {
          children: g
        }), (0, a.jsx)("div", {
          className: _.divider
        })]
      }), "" !== U && (0, a.jsx)("div", {
        children: U
      }), M === o.PaymentSourceTypes.PAYSAFE_CARD && (0, a.jsx)("div", {
        className: _.paymentSourceNoticeCopy,
        children: E.default.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PAYSAFECARD
      }), M === o.PaymentSourceTypes.SOFORT && (0, a.jsxs)("div", {
        className: _.paymentSourceNoticeCopy,
        children: [E.default.Messages.SOFORT_MANDATE_AGREEMENT, " "]
      })]
    })
  }