            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("803182"),
                a = n("308503"),
                i = n("49111");

            function l(e) {
                let t = (0, r.matchPath)(null != e ? e : "", {
                    path: i.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
                });
                if (null != t) {
                    let {
                        guildId: e,
                        channelId: n
                    } = t.params;
                    return {
                        guildId: e === i.ME ? null : e,
                        channelId: null != n ? n : null
                    }
                }
                let n = (0, r.matchPath)(null != e ? e : "", {
                    path: i.Routes.GUILD_BOOSTING_MARKETING(":guildId")
                });
                return null != n ? {
                    guildId: n.params.guildId,
                    channelId: null
                } : {
                    guildId: null,
                    channelId: null
                }
            }
            var o = (0, a.default)(e => ({
                path: null,
                basePath: "/",
                guildId: null,
                channelId: null,
                updatePath(t) {
                    let {
                        guildId: n,
                        channelId: r
                    } = l(t);
                    e({
                        path: t,
                        guildId: n,
                        channelId: r
                    })
                },
                resetPath(t) {
                    let {
                        guildId: n,
                        channelId: r
                    } = l(t);
                    e({
                        path: null,
                        guildId: n,
                        channelId: r,
                        basePath: t
                    })
                }
            }))