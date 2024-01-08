            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("446674"),
                a = n("42203"),
                s = n("18494");

            function i() {
                return (0, l.useStateFromStores)([s.default, a.default], () => {
                    let e = s.default.getVoiceChannelId();
                    if (null != e) {
                        let t = a.default.getChannel(e);
                        if (null == t ? void 0 : t.isGuildStageVoice()) return t
                    }
                    return null
                })
            }