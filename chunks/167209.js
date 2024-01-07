            "use strict";
            n.r(t), n.d(t, {
                isEligibleForPomelo: function() {
                    return i
                },
                useIsEligibleForPomelo: function() {
                    return r
                }
            });
            var l = n("65597"),
                a = n("697218"),
                s = n("553257");
            let i = () => o(a.default.getCurrentUser(), (0, s.getPomeloEligibility)()),
                r = () => o((0, l.default)([a.default], () => a.default.getCurrentUser()), (0, s.usePomeloEligibility)());

            function o(e, t) {
                return !(null == e || e.isPomelo()) && !!e.hasVerifiedEmailOrPhone() && !!t && !0
            }