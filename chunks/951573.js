            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                i = n("77078"),
                s = n("206230"),
                r = n("22368"),
                u = n("145131"),
                o = n("467831"),
                c = n("113400");

            function d(e) {
                let {
                    purchaseState: t,
                    currentStep: n,
                    onClose: d
                } = e, [I, m] = (0, r.usePaymentModalAnimationScene)({
                    purchaseState: t,
                    currentStep: n,
                    initialScene: o.PremiumPaymentGuildAnimation.Scenes.ENTRY,
                    purchaseScene: o.PremiumPaymentGuildAnimation.Scenes.STARS,
                    errorScene: o.PremiumPaymentGuildAnimation.Scenes.ERROR,
                    successScene: o.PremiumPaymentGuildAnimation.Scenes.SUCCESS
                }), f = (0, l.useStateFromStores)([s.default], () => s.default.useReducedMotion);
                return (0, a.jsxs)(i.ModalHeader, {
                    align: u.default.Align.START,
                    className: c.header,
                    separator: !1,
                    children: [(0, a.jsx)(o.PremiumPaymentGuildAnimation, {
                        className: c.animation,
                        nextScene: I,
                        onScenePlay: e => m(o.PremiumPaymentGuildAnimation.getNextScene(e)),
                        pauseWhileUnfocused: !1,
                        pause: f
                    }), (0, a.jsx)("div", {
                        className: c.headerTitle
                    }), (0, a.jsx)(i.ModalCloseButton, {
                        onClick: d,
                        className: c.closeButton
                    })]
                })
            }