            "use strict";
            n.r(t), n.d(t, {
                isPublicSystemMessage: function() {
                    return u
                },
                getPublicSystemMessageAvatar: function() {
                    return c
                },
                trackEnableCommunityFlow: function() {
                    return d
                }
            });
            var a = n("716241"),
                i = n("25116"),
                s = n("599110"),
                r = n("69741"),
                l = n("49111"),
                o = n("929887");

            function u(e) {
                return (0, i.default)(e) && e.messageReference.guild_id === r.PUBLIC_GUILD_ANNOUNCEMENTS_GUILD_ID || null != e.author && e.author.id === r.PUBLIC_GUILD_UPDATES_WEBHOOK_USER_ID
            }

            function c() {
                return o
            }
            let d = e => {
                s.default.track(l.AnalyticEvents.USER_FLOW_TRANSITION, {
                    flow_type: r.ENABLE_COMMUNITY_FLOW_MODAL_KEY,
                    from_step: e.fromStep,
                    to_step: e.toStep,
                    ...(0, a.collectGuildAnalyticsMetadata)(e.guildId)
                })
            }