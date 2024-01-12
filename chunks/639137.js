            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            }), s("794252");
            var n = s("37983");
            s("884691");
            var r = s("414456"),
                l = s.n(r),
                i = s("506838"),
                a = s("77078"),
                u = s("85336"),
                o = s("782340"),
                d = s("432883");

            function c(e) {
                let {
                    step: t,
                    onClose: s
                } = e, r = (0, i.match)(t).with(u.Step.REVIEW, () => o.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_REVIEW_HEADER).with(u.Step.ADD_PAYMENT_STEPS, () => o.default.Messages.BILLING_STANDALONE_ADD_PAYMENT_TITLE).with(u.Step.GIFT_CUSTOMIZATION, () => o.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER).with(u.Step.CONFIRM, () => "").otherwise(() => null);
                return null == r ? null : (0, n.jsxs)(a.ModalHeader, {
                    className: l(d.headerContainerGift),
                    separator: t !== u.Step.CONFIRM,
                    children: [(0, n.jsx)(a.Heading, {
                        variant: "heading-lg/semibold",
                        children: r
                    }), (0, n.jsx)(a.ModalCloseButton, {
                        onClick: s,
                        className: d.closeButtonGift
                    })]
                })
            }