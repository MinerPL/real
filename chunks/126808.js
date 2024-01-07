            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return a
                }
            });
            var n = l("800762");

            function a(e) {
                var t;
                let {
                    channelId: l,
                    userId: a,
                    activity: s
                } = e, i = (null == s ? void 0 : s.session_id) == null ? l : null === (t = n.default.getVoiceStateForSession(a, null == s ? void 0 : s.session_id)) || void 0 === t ? void 0 : t.channelId;
                return null != i ? i : void 0
            }