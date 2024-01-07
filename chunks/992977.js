            "use strict";
            a.r(n), a.d(n, {
                PremiumModalHeaderAnimationTier0: function() {
                    return s
                },
                PremiumModalHeaderAnimationTier1: function() {
                    return u
                },
                PremiumModalHeaderAnimationTier2: function() {
                    return m
                }
            }), a("222007");
            var i = a("37983");
            a("884691");
            var t = a("467831"),
                r = a("22368");

            function s(e) {
                let {
                    currentStep: n,
                    purchaseState: a,
                    className: s,
                    pause: u
                } = e, [m, l] = (0, r.usePaymentModalAnimationScene)({
                    purchaseState: a,
                    currentStep: n,
                    initialScene: t.PremiumPaymentAnimationTier0.Scenes.NORMAL,
                    purchaseScene: t.PremiumPaymentAnimationTier0.Scenes.SPEED_START,
                    errorScene: t.PremiumPaymentAnimationTier0.Scenes.NORMAL,
                    successScene: t.PremiumPaymentAnimationTier0.Scenes.FINISH
                });
                return (0, i.jsx)(t.PremiumPaymentAnimationTier0, {
                    className: s,
                    nextScene: m,
                    onScenePlay: e => l(t.PremiumPaymentAnimationTier0.getNextScene(e)),
                    pauseWhileUnfocused: !1,
                    pause: u
                })
            }

            function u(e) {
                let {
                    currentStep: n,
                    purchaseState: a,
                    className: s,
                    pause: u
                } = e, [m, l] = (0, r.usePaymentModalAnimationScene)({
                    purchaseState: a,
                    currentStep: n,
                    initialScene: t.PremiumPaymentAnimationTier1.Scenes.NORMAL,
                    purchaseScene: t.PremiumPaymentAnimationTier1.Scenes.SPEED_START,
                    errorScene: t.PremiumPaymentAnimationTier1.Scenes.NORMAL,
                    successScene: t.PremiumPaymentAnimationTier1.Scenes.FINISH
                });
                return (0, i.jsx)(t.PremiumPaymentAnimationTier1, {
                    className: s,
                    nextScene: m,
                    onScenePlay: e => l(t.PremiumPaymentAnimationTier1.getNextScene(e)),
                    pauseWhileUnfocused: !1,
                    pause: u
                })
            }

            function m(e) {
                let {
                    currentStep: n,
                    purchaseState: a,
                    className: s,
                    pause: u
                } = e, [m, l] = (0, r.usePaymentModalAnimationScene)({
                    purchaseState: a,
                    currentStep: n,
                    initialScene: t.PremiumPaymentAnimationTier2.Scenes.IDLE_ENTRY,
                    purchaseScene: t.PremiumPaymentAnimationTier2.Scenes.BOOST_START,
                    errorScene: t.PremiumPaymentAnimationTier2.Scenes.ERROR,
                    successScene: t.PremiumPaymentAnimationTier2.Scenes.BOOST_END
                });
                return (0, i.jsx)(t.PremiumPaymentAnimationTier2, {
                    className: s,
                    nextScene: m,
                    onScenePlay: e => l(t.PremiumPaymentAnimationTier2.getNextScene(e)),
                    pauseWhileUnfocused: !1,
                    pause: u
                })
            }