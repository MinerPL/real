            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("298386"),
                a = n("42203"),
                l = n("427953");

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.default,
                    n = t.getChannel(e),
                    s = (0, l.isActivitiesInTextEnabled)(n, "isVoiceActivityChannel");
                return null != n && (n.type === i.ChannelTypes.GUILD_VOICE || n.isPrivate() && !s)
            }