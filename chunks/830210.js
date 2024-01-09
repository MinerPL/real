            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                },
                getChannelVideoLimit: function() {
                    return u
                }
            });
            var r = n("446674"),
                a = n("305961"),
                i = n("316133"),
                l = n("49111");

            function o(e) {
                return (0, r.useStateFromStoresObject)([i.default, a.default], () => {
                    let t = i.default.countVoiceStatesForChannel(e.id),
                        n = a.default.getGuild(e.getGuildId());
                    return null == n ? {
                        reachedLimit: !1,
                        limit: -1
                    } : e.type === l.ChannelTypes.GUILD_STAGE_VOICE ? {
                        reachedLimit: t > n.maxStageVideoChannelUsers,
                        limit: n.maxStageVideoChannelUsers
                    } : {
                        reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
                        limit: n.maxVideoChannelUsers
                    }
                }, [e])
            }

            function u(e) {
                let t = i.default.countVoiceStatesForChannel(e.id),
                    n = a.default.getGuild(e.getGuildId());
                return null == n ? {
                    reachedLimit: !1,
                    limit: -1
                } : e.type === l.ChannelTypes.GUILD_STAGE_VOICE ? {
                    reachedLimit: t > n.maxStageVideoChannelUsers,
                    limit: n.maxStageVideoChannelUsers
                } : {
                    reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
                    limit: n.maxVideoChannelUsers
                }
            }