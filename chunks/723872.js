            "use strict";
            n.r(t), n.d(t, {
                isRTCConnectedInHub: function() {
                    return u
                },
                useConnectedInCurrentHub: function() {
                    return o
                }
            });
            var a = n("446674"),
                s = n("42203"),
                r = n("305961"),
                i = n("18494"),
                l = n("49111");
            let u = () => {
                    let e = i.default.getVoiceChannelId();
                    if (null == e) return !1;
                    let t = s.default.getChannel(e);
                    if (null == t) return !1;
                    let n = r.default.getGuild(t.getGuildId());
                    return null != n && n.hasFeature(l.GuildFeatures.HUB)
                },
                o = e => (0, a.useStateFromStores)([i.default, s.default, r.default], () => {
                    let t = i.default.getVoiceChannelId();
                    if (null == t) return !1;
                    let n = s.default.getChannel(t);
                    if (null == n) return !1;
                    let a = r.default.getGuild(n.getGuildId());
                    return null != a && a.id === e
                })