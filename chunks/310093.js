            "use strict";
            n.r(t), n.d(t, {
                GiftNote: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("812952"),
                r = n("978679"),
                l = n("659632"),
                s = n("635357"),
                u = n("782340"),
                o = n("588937");

            function c(e) {
                let {
                    giftMessage: t = u.default.Messages.PREMIUM_PAYMENT_IS_GIFT
                } = e, {
                    isGift: n,
                    giftRecipient: c
                } = (0, s.useGiftContext)();
                return !n || (0, l.shouldShowCustomGiftExperience)(c, !0, "GiftNote") ? null : (0, i.jsx)(a.default, {
                    className: o.paymentNote,
                    iconSize: a.default.Sizes.SMALL,
                    icon: r.default,
                    color: null == t ? a.default.Colors.PRIMARY : a.default.Colors.SECONDARY,
                    children: t
                })
            }