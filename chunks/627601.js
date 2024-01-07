            "use strict";
            l.r(t), l.d(t, {
                UserPopoutUpsellSource: function() {
                    return a
                },
                useUserPopoutCollectiblesUpsellStore: function() {
                    return r
                }
            });
            var n, a, s = l("308503");
            (n = a || (a = {})).PROFILE_PANEL = "profile panel", n.USER_POPOUT = "user popout";
            let i = {
                    upsellSource: null
                },
                r = (0, s.default)(e => ({
                    ...i,
                    setUpsellSource: t => e({
                        upsellSource: t
                    }),
                    reset: () => {
                        e({
                            ...i
                        })
                    }
                }))