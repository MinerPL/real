"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("794252");
var s = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  i = n("506838"),
  a = n("77078"),
  u = n("85336"),
  o = n("782340"),
  d = n("432883");

function c(e) {
  let {
    step: t,
    onClose: n
  } = e, r = (0, i.match)(t).with(u.Step.REVIEW, () => o.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_REVIEW_HEADER).with(u.Step.ADD_PAYMENT_STEPS, () => o.default.Messages.BILLING_STANDALONE_ADD_PAYMENT_TITLE).with(u.Step.GIFT_CUSTOMIZATION, () => o.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER).with(u.Step.CONFIRM, () => "").otherwise(() => null);
  return null == r ? null : (0, s.jsxs)(a.ModalHeader, {
    className: l(d.headerContainerGift),
    separator: t !== u.Step.CONFIRM,
    children: [(0, s.jsx)(a.Heading, {
      variant: "heading-lg/semibold",
      children: r
    }), (0, s.jsx)(a.ModalCloseButton, {
      onClick: n,
      className: d.closeButtonGift
    })]
  })
}