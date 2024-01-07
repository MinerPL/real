            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983"),
                s = n("884691"),
                i = n("446674"),
                l = n("77078"),
                r = n("987317"),
                o = n("716241"),
                u = n("239380"),
                d = n("957255"),
                c = n("456353"),
                E = n("599110"),
                f = n("49111"),
                _ = n("782340");

            function h(e) {
                let t = s.useContext(E.AnalyticsContext),
                    n = e.voiceChannels[0],
                    h = (0, i.useStateFromStores)([d.default], () => null != n && d.default.can(f.Permissions.CONNECT, n.channel));
                return null == n ? null : [(0, a.jsx)(l.MenuItem, {
                    id: "join-voice",
                    action: function() {
                        (0, u.transitionToGuild)(n.guild.id), r.default.selectVoiceChannel(n.channel.id), o.default.trackWithMetadata(f.AnalyticEvents.ACTIVITY_FEED_VOICE_CHANNEL_VISITED, {
                            source: {
                                ...t.location,
                                object: f.AnalyticsObjects.LIST_ITEM
                            },
                            guild_id: n.guild.id,
                            channel_id: n.channel.id,
                            ...(0, c.getPartyMetadata)(e)
                        })
                    },
                    label: _.default.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_JOIN_CHANNEL,
                    disabled: !h
                }, "join-voice"), (0, a.jsx)(l.MenuItem, {
                    id: "goto-server",
                    action: function() {
                        (0, u.transitionToGuild)(n.guild.id), o.default.trackWithMetadata(f.AnalyticEvents.ACTIVITY_FEED_GUILD_VISITED, {
                            source: {
                                ...t.location,
                                object: f.AnalyticsObjects.LIST_ITEM
                            },
                            guild_id: n.guild.id,
                            af_recently_played: !1,
                            ...(0, c.getPartyMetadata)(e)
                        })
                    },
                    label: _.default.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_GO_TO_SERVER
                }, "goto-server")]
            }