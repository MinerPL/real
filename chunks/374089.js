            "use strict";
            n.r(t), n.d(t, {
                useCanSeeSafetyEducationReportingCoachmark: function() {
                    return o
                }
            });
            var a = n("65597"),
                s = n("127205"),
                i = n("697218"),
                l = n("158998"),
                r = n("332164");
            let o = () => {
                let e = (0, s.useIsSafetyConsumerEducationReportingEnabled)(),
                    t = (0, a.default)([i.default], () => i.default.getCurrentUser()),
                    n = (0, r.useUserIsInLargeGuilds)();
                return e && !(0, l.isNewUser)(t) && n
            }