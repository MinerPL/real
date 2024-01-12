            "use strict";
            s.r(t), s.d(t, {
                CollectiblesPaymentModalConfirmStep: function() {
                    return h
                }
            });
            var n = s("37983"),
                r = s("884691"),
                l = s("627445"),
                i = s.n(l),
                a = s("65597"),
                u = s("206230"),
                o = s("853987"),
                d = s("923702"),
                c = s("658756"),
                f = s("57940"),
                S = s("635357"),
                E = s("642906"),
                I = s("891865"),
                p = s("650484"),
                _ = s("367767");

            function T(e) {
                let {
                    handleClose: t,
                    confettiCanvas: s,
                    analyticsLocations: r
                } = e, {
                    skusById: l,
                    selectedSkuId: u,
                    application: d
                } = (0, E.usePaymentContext)(), f = (0, a.default)([o.default], () => o.default.getProduct(u));
                i(null != u, "Expected selectedSkuId"), i(null != d, "Expected application");
                let S = l[u];
                return (i(null != S, "Expected sku"), null == f) ? null : (0, n.jsxs)(p.PaymentPortalBody, {
                    children: [(0, n.jsx)(_.default, {}), (0, n.jsx)(c.CollectiblesCollectedModalInner, {
                        product: f,
                        onClose: t,
                        confettiCanvas: s,
                        analyticsLocations: r
                    })]
                })
            }

            function h(e) {
                let {
                    isGift: t,
                    giftCode: s,
                    selectedGiftStyle: l,
                    hasSentMessage: i,
                    giftRecipient: c,
                    giftMessageError: p,
                    isSendingMessage: _
                } = (0, S.useGiftContext)(), h = (0, a.default)([u.default], () => u.default.useReducedMotion), C = r.useRef(null), {
                    selectedSkuId: m
                } = (0, E.usePaymentContext)(), A = (0, a.default)([o.default], () => o.default.getProduct(m)), {
                    confettiColors: N,
                    confettiSprites: g
                } = (0, f.default)(null == A ? void 0 : A.categorySkuId);
                return t ? (0, n.jsxs)("div", {
                    ref: C,
                    children: [(0, n.jsx)(I.default, {
                        giftCode: s,
                        onClose: e.handleClose,
                        selectedGiftStyle: l,
                        hasSentMessage: i,
                        giftRecipient: c,
                        giftMessageError: p,
                        isSendingMessage: _
                    }), !h && (0, n.jsx)(d.default, {
                        confettiTarget: C.current,
                        confettiCanvas: e.confettiCanvas,
                        sprites: null != g ? g : f.DEFAULT_CONFETTI_SPRITES,
                        colors: null != N ? N : f.DEFAULT_CONFETTI_COLORS
                    })]
                }) : (0, n.jsx)(T, {
                    ...e
                })
            }