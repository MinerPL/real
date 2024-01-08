            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var u = l("446674"),
                a = l("42203"),
                n = l("18494");

            function r() {
                return (0, u.useStateFromStores)([n.default, a.default], () => {
                    let e = n.default.getVoiceChannelId();
                    if (null != e) {
                        let t = a.default.getChannel(e);
                        if (null == t ? void 0 : t.isGuildStageVoice()) return t
                    }
                    return null
                })
            }