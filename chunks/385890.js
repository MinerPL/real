"use strict";
n.r(t), n.d(t, {
  COLLECTIBLES_GIFT_CUSTOMIZATION_STEP: function() {
    return _
  }
});
var s = n("37983");
n("884691");
var r = n("77078"),
  l = n("446674"),
  i = n("162848"),
  a = n("349133"),
  u = n("705820"),
  o = n("889554"),
  d = n("177998"),
  c = n("697218"),
  f = n("145131"),
  p = n("635357"),
  E = n("642906"),
  S = n("85336"),
  h = n("650484"),
  m = n("782340"),
  I = n("578956");
let _ = {
  key: S.Step.GIFT_CUSTOMIZATION,
  renderStep: e => (0, s.jsx)(C, {
    ...e
  }),
  options: {
    isLargeModal: !0
  }
};

function T(e) {
  let {
    onStepChange: t,
    onBackClick: n,
    showBackButton: l = !1,
    disabled: i = !1,
    loading: a = !1
  } = e, {
    hasPaymentSources: u
  } = (0, E.usePaymentContext)(), o = u ? S.Step.REVIEW : S.Step.ADD_PAYMENT_STEPS;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(r.Button, {
      onClick: () => t(o),
      disabled: i,
      submitting: a,
      children: m.default.Messages.PAGINATION_NEXT
    }), l ? (0, s.jsx)(d.default, {
      onClick: n
    }) : null]
  })
}

function C(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    customGiftMessage: d = "",
    setCustomGiftMessage: S,
    giftRecipientError: _,
    validatingGiftRecipient: C,
    giftRecipient: x
  } = (0, p.useGiftContext)(), {
    selectedSkuId: g,
    selectedSkuPricePreview: v
  } = (0, E.usePaymentContext)(), A = (0, l.useStateFromStores)([c.default], () => c.default.getCurrentUser());
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(h.PaymentPortalBody, {
      children: (0, s.jsxs)("div", {
        className: I.stepBody,
        children: [(0, s.jsx)("div", {
          className: I.bodyColumnMiddle,
          children: (0, s.jsx)(o.GiftAnimationOptions, {})
        }), (0, s.jsxs)("div", {
          className: I.bodyColumnRight,
          children: [(0, s.jsx)(a.default, {
            selectedSkuId: g,
            className: I.sendTo
          }), (0, s.jsx)(u.default, {
            sectionTitle: m.default.Messages.GIFT_OPTIONAL_MESSAGE,
            onTextChange: e => null == S ? void 0 : S(e),
            pendingText: d,
            currentText: d,
            disableThemedBackground: !0,
            className: I.customGiftMessageWrapper,
            innerClassName: I.customGiftMessage
          }), (0, s.jsx)(i.default, {
            selectedSkuId: g,
            selectedSkuPricePreview: v,
            className: I.giftPreview
          })]
        })]
      })
    }), (0, s.jsx)(h.PaymentPortalFooter, {
      children: (0, s.jsx)(r.ModalFooter, {
        justify: f.default.Justify.BETWEEN,
        align: f.default.Align.CENTER,
        children: (0, s.jsx)(T, {
          onStepChange: t,
          onBackClick: n,
          disabled: null != _ || null == x || x.id === (null == A ? void 0 : A.id) || d.length > u.CUSTOM_GIFT_MESSAGE_MAX_LENGTH,
          loading: C
        })
      })
    })]
  })
}