            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                i = n("206230"),
                u = n("22368"),
                o = n("145131"),
                r = n("467831"),
                c = n("113400");

            function d(e) {
                let {
                    purchaseState: t,
                    currentStep: n,
                    onClose: d
                } = e, [S, p] = (0, u.usePaymentModalAnimationScene)({
                    purchaseState: t,
                    currentStep: n,
                    initialScene: r.PremiumPaymentGuildAnimation.Scenes.ENTRY,
                    purchaseScene: r.PremiumPaymentGuildAnimation.Scenes.STARS,
                    errorScene: r.PremiumPaymentGuildAnimation.Scenes.ERROR,
                    successScene: r.PremiumPaymentGuildAnimation.Scenes.SUCCESS
                }), m = (0, a.useStateFromStores)([i.default], () => i.default.useReducedMotion);
                return (0, l.jsxs)(s.ModalHeader, {
                    align: o.default.Align.START,
                    className: c.header,
                    separator: !1,
                    children: [(0, l.jsx)(r.PremiumPaymentGuildAnimation, {
                        className: c.animation,
                        nextScene: S,
                        onScenePlay: e => p(r.PremiumPaymentGuildAnimation.getNextScene(e)),
                        pauseWhileUnfocused: !1,
                        pause: m
                    }), (0, l.jsx)("div", {
                        className: c.headerTitle
                    }), (0, l.jsx)(s.ModalCloseButton, {
                        onClick: d,
                        className: c.closeButton
                    })]
                })
            }