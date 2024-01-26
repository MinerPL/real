"use strict";
n.r(t), n.d(t, {
  PurchaseHeader: function() {
    return m
  },
  BenefitsConfirmation: function() {
    return _
  },
  PurchaseConfirmation: function() {
    return I
  }
});
var i = n("37983");
n("884691");
var r = n("77078"),
  l = n("834897"),
  a = n("85336"),
  s = n("159149"),
  u = n("650484"),
  o = n("945330"),
  c = n("829805"),
  d = n("425480"),
  f = n("782340"),
  p = n("370184"),
  h = n("137852"),
  S = n("511117");
let m = e => {
    let {
      step: t,
      onClose: n
    } = e, s = (0, l.default)(d.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY);
    return t === a.Step.CONFIRM || t === a.Step.BENEFITS ? (0, i.jsx)("div", {}) : (0, i.jsxs)("div", {
      className: p.headerContainer,
      children: [!s && (0, i.jsx)("div", {
        className: p.headerImageContainer,
        "aria-hidden": "true",
        children: (0, i.jsx)("img", {
          src: S,
          alt: "",
          className: p.headerImage
        })
      }), (0, i.jsx)(r.Clickable, {
        className: p.closeContainer,
        onClick: () => n(),
        "aria-label": f.default.Messages.CLOSE,
        children: (0, i.jsx)(o.default, {
          className: p.closeIcon
        })
      })]
    })
  },
  _ = e => {
    let {
      icon: t,
      storeListingBenefits: n,
      skuBenefits: r,
      application: l,
      title: a,
      subtitle: s,
      description: u
    } = e;
    return null == l ? null : (0, i.jsx)("div", {
      className: p.confirmationContainer,
      children: (0, i.jsxs)(c.ApplicationBenefitsModalContent, {
        children: [(0, i.jsx)(c.ApplicationBenefitsModalIcon, {
          application: l,
          asset: t
        }), (0, i.jsx)(c.ApplicationBenefitsModalHeading, {
          children: a
        }), (0, i.jsx)(c.ApplicationBenefitsModalDivider, {}), (0, i.jsx)(c.ApplicationBenefitsModalDescription, {
          title: s,
          description: u
        }), (0, i.jsx)(c.ApplicationBenefitsModalBenefits, {
          applicationId: l.id,
          storeListingBenefits: n,
          skuBenefits: r
        })]
      })
    })
  };

function I(e) {
  let {
    tierName: t,
    onConfirm: n,
    subscription: l
  } = e;
  return (0, i.jsxs)("div", {
    className: p.purchaseConfirmation,
    children: [(0, i.jsx)("img", {
      src: h,
      alt: "",
      width: 300,
      height: 126
    }), (0, i.jsx)(r.Heading, {
      className: p.confirmationTitle,
      variant: "heading-xl/extrabold",
      color: "header-primary",
      children: f.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({
        tier: t
      })
    }), (0, i.jsx)(r.Text, {
      className: p.confirmationSubtitle,
      variant: "text-md/medium",
      color: "header-secondary",
      children: f.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({
        timestamp: null == l ? void 0 : l.currentPeriodEnd
      })
    }), (0, i.jsx)(u.PaymentPortalFooter, {
      children: (0, i.jsx)(s.default, {
        onPrimary: n,
        primaryCTA: s.CTAType.CONTINUE,
        primaryText: f.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
      })
    })]
  })
}