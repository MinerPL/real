            "use strict";
            n.r(t), n.d(t, {
                isForumActivityExperimentEnabled: function() {
                    return l
                }
            });
            var i = n("943314"),
                a = n("531869");

            function l(e) {
                let t = a.default.getCurrentConfig({
                        guildId: null != e ? e : "",
                        location: "3fde52_1"
                    }),
                    n = i.default.getCurrentConfig({
                        location: "3fde52_2"
                    });
                return !!(t.enabled || n.enabled)
            }