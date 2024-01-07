            "use strict";
            n.r(t), n.d(t, {
                userNeedsAgeGate: function() {
                    return l
                }
            });
            var a = n("697218"),
                s = n("299039");
            let i = new Date("06/16/2020");

            function l() {
                let e = a.default.getCurrentUser();
                return null != e && s.default.extractTimestamp(e.id) > i.getTime() && !e.isClaimed() && null == e.nsfwAllowed
            }