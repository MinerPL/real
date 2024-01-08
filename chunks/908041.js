            "use strict";
            n.r(t), n.d(t, {
                useUserIsTeen: function() {
                    return i
                }
            });
            var s = n("446674"),
                a = n("697218"),
                l = n("499799");

            function i(e) {
                let t = (0, s.useStateFromStores)([a.default], () => {
                        var e;
                        return null === (e = a.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed
                    }),
                    n = (0, l.useStaffTeenSafetyAssistAgeBypass)(e);
                return !1 === t || n
            }