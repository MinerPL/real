            "use strict";
            n.r(t), n.d(t, {
                useShowApplicationInGDM: function() {
                    return s
                }
            });
            var l = n("65597"),
                i = n("42203"),
                r = n("337026");

            function s(e) {
                let t = (0, l.default)([i.default], () => i.default.getChannel(e)),
                    {
                        enabled: n
                    } = r.default.useExperiment({
                        location: "baec9c_1"
                    });
                return n && function(e) {
                    return null != e && (!!e.isMultiUserDM() || !!e.isDM() && !e.isSystemDM() && null == e.rawRecipients.find(e => e.bot))
                }(t)
            }