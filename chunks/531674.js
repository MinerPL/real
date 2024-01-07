            "use strict";
            n.r(t), n.d(t, {
                getMuteTimes: function() {
                    return h
                },
                default: function() {
                    return g
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var l = n("866227"),
                i = n.n(l),
                u = n("446674"),
                r = n("77078"),
                s = n("820542"),
                d = n("519705"),
                o = n("319165"),
                f = n("282109"),
                c = n("34676"),
                _ = n("679653"),
                E = n("49111"),
                T = n("468200"),
                S = n("782340");
            let h = () => [{
                    value: T.MuteUntilSeconds.MINUTES_15,
                    label: S.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: T.MuteUntilSeconds.HOURS_1,
                    label: S.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: T.MuteUntilSeconds.HOURS_3,
                    label: S.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: T.MuteUntilSeconds.HOURS_8,
                    label: S.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: T.MuteUntilSeconds.HOURS_24,
                    label: S.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: T.MuteUntilSeconds.ALWAYS,
                    label: S.default.Messages.MUTE_DURATION_ALWAYS
                }],
                C = e => {
                    let t = e > 0 ? i().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function g(e, t) {
                let [n, l] = (0, u.useStateFromStoresArray)([f.default], () => [f.default.isChannelMuted(e.guild_id, e.id), f.default.getChannelMuteConfig(e.guild_id, e.id)]), i = (0, o.useMutedUntilText)(l), T = (0, _.default)(e, !0);

                function g(t) {
                    t && e.type === E.ChannelTypes.GUILD_CATEGORY && (0, s.categoryCollapse)(e.id), d.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    }, c.NotificationLabel.muted(t))
                }
                let N = S.default.Messages.MUTE_CHANNEL_GENERIC,
                    m = S.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case E.ChannelTypes.GUILD_CATEGORY:
                        N = S.default.Messages.MUTE_CATEGORY, m = S.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case E.ChannelTypes.GROUP_DM:
                        N = S.default.Messages.MUTE_CONVERSATION, m = S.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case E.ChannelTypes.DM:
                        N = S.default.Messages.MUTE_CHANNEL.format({
                            name: T
                        }), m = S.default.Messages.UNMUTE_CHANNEL.format({
                            name: T
                        });
                        break;
                    default:
                        N = S.default.Messages.MUTE_CHANNEL_GENERIC, m = S.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, a.jsx)(r.MenuItem, {
                    id: "unmute-channel",
                    label: m,
                    subtext: i,
                    action: () => g(!1)
                }) : (0, a.jsx)(r.MenuItem, {
                    id: "mute-channel",
                    label: N,
                    action: () => g(!0),
                    children: h().map(n => {
                        let {
                            value: l,
                            label: i
                        } = n;
                        return (0, a.jsx)(r.MenuItem, {
                            id: "".concat(l),
                            label: i,
                            action: () => (function(n) {
                                e.type === E.ChannelTypes.GUILD_CATEGORY && (0, s.categoryCollapse)(e.id);
                                let a = C(n);
                                d.default.updateChannelOverrideSettings(e.guild_id, e.id, a, c.NotificationLabels.Muted, t)
                            })(l)
                        }, l)
                    })
                })
            }