            "use strict";
            n.r(t), n.d(t, {
                useStrangerDangerWarning: function() {
                    return u
                }
            });
            var a = n("674015"),
                s = n("228430"),
                l = n("764828"),
                i = n("533855"),
                r = n("908041"),
                o = n("13427");

            function u(e, t) {
                let n = (0, s.useIsSpamMessageRequest)(e),
                    u = (0, a.useIsMessageRequest)(e),
                    d = (0, i.useChannelSafetyWarning)(e, l.SafetyWarningTypes.STRANGER_DANGER, t),
                    c = (0, r.useUserIsTeen)(t),
                    f = (0, o.useIsEligibleForStrangerDangerTeens)(t);
                if (f && c && !n && !u) return d
            }