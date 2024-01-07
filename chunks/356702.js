            "use strict";
            n.r(t), n.d(t, {
                unlockAchievement: function() {
                    return u
                },
                showAchievementToast: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                i = n("913144"),
                l = n("106413"),
                r = n("745690"),
                o = n("782340");

            function u(e) {
                i.default.dispatch({
                    type: "POGGERMODE_ACHIEVEMENT_UNLOCK",
                    achievementId: e
                })
            }

            function d(e, t) {
                let n = (0, l.getPoggermodeAchievementData)(e);
                null != n && (0, s.showToast)((0, s.createToast)(o.default.Messages.POGGERMODE_ACHIEVEMENTS, s.ToastType.CUSTOM, {
                    position: s.ToastPosition.BOTTOM,
                    component: (0, a.jsx)(r.default, {
                        achievement: n,
                        unlocked: t
                    }),
                    duration: 6e3
                }))
            }