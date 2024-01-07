            "use strict";
            n.r(t), n.d(t, {
                isOnboardingDismissed: function() {
                    return i
                }
            });
            var a = n("866227"),
                l = n.n(a),
                s = n("249654");
            let i = e => {
                let t = s.default.extractTimestamp(e),
                    n = l().isBefore(l(t).add(l.duration(15, "days")));
                return !n
            }