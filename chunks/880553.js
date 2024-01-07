            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return o
                }
            });
            var l = t("271938"),
                u = t("42203"),
                i = t("800762");

            function o() {
                let e = i.default.getVoiceStateForSession(l.default.getId(), l.default.getSessionId()),
                    n = null == e ? void 0 : e.channelId;
                return u.default.getChannel(n)
            }