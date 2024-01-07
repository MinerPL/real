            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("446674"),
                a = n("819855"),
                s = n("841098"),
                i = n("191145"),
                r = n("18494"),
                o = n("49111");

            function u(e, t) {
                let n = (0, l.useStateFromStores)([r.default], () => r.default.getVoiceChannelId()),
                    u = (0, l.useStateFromStores)([i.default], () => null != n ? i.default.getMode(n) : null),
                    d = (0, s.default)();
                return null != e ? e : u === o.ChannelModes.VOICE && (0, a.isThemeLight)(d) ? t ? "activeLight" : "primaryLight" : t ? "white" : "primaryDark"
            }