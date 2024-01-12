            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                },
                getChannelVideoLimit: function() {
                    return u
                }
            });
            var r = n("446674"),
                i = n("305961"),
                a = n("316133"),
                o = n("49111");

            function l(e) {
                return (0, r.useStateFromStoresObject)([a.default, i.default], () => {
                    let t = a.default.countVoiceStatesForChannel(e.id),
                        n = i.default.getGuild(e.getGuildId());
                    return null == n ? {
                        reachedLimit: !1,
                        limit: -1
                    } : e.type === o.ChannelTypes.GUILD_STAGE_VOICE ? {
                        reachedLimit: t > n.maxStageVideoChannelUsers,
                        limit: n.maxStageVideoChannelUsers
                    } : {
                        reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
                        limit: n.maxVideoChannelUsers
                    }
                }, [e])
            }

            function u(e) {
                let t = a.default.countVoiceStatesForChannel(e.id),
                    n = i.default.getGuild(e.getGuildId());
                return null == n ? {
                    reachedLimit: !1,
                    limit: -1
                } : e.type === o.ChannelTypes.GUILD_STAGE_VOICE ? {
                    reachedLimit: t > n.maxStageVideoChannelUsers,
                    limit: n.maxStageVideoChannelUsers
                } : {
                    reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
                    limit: n.maxVideoChannelUsers
                }
            }