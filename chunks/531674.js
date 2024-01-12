            "use strict";
            n.r(t), n.d(t, {
                getMuteTimes: function() {
                    return N
                },
                default: function() {
                    return h
                }
            }), n("222007");
            var i = n("37983");
            n("884691");
            var s = n("866227"),
                a = n.n(s),
                l = n("446674"),
                u = n("77078"),
                o = n("820542"),
                d = n("519705"),
                r = n("319165"),
                c = n("282109"),
                S = n("34676"),
                f = n("679653"),
                g = n("49111"),
                E = n("468200"),
                _ = n("782340");
            let N = () => [{
                    value: E.MuteUntilSeconds.MINUTES_15,
                    label: _.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: E.MuteUntilSeconds.HOURS_1,
                    label: _.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: E.MuteUntilSeconds.HOURS_3,
                    label: _.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: E.MuteUntilSeconds.HOURS_8,
                    label: _.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: E.MuteUntilSeconds.HOURS_24,
                    label: _.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: E.MuteUntilSeconds.ALWAYS,
                    label: _.default.Messages.MUTE_DURATION_ALWAYS
                }],
                M = e => {
                    let t = e > 0 ? a().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function h(e, t) {
                let [n, s] = (0, l.useStateFromStoresArray)([c.default], () => [c.default.isChannelMuted(e.guild_id, e.id), c.default.getChannelMuteConfig(e.guild_id, e.id)]), a = (0, r.useMutedUntilText)(s), E = (0, f.default)(e, !0);

                function h(t) {
                    t && e.type === g.ChannelTypes.GUILD_CATEGORY && (0, o.categoryCollapse)(e.id), d.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    }, S.NotificationLabel.muted(t))
                }
                let I = _.default.Messages.MUTE_CHANNEL_GENERIC,
                    T = _.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case g.ChannelTypes.GUILD_CATEGORY:
                        I = _.default.Messages.MUTE_CATEGORY, T = _.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case g.ChannelTypes.GROUP_DM:
                        I = _.default.Messages.MUTE_CONVERSATION, T = _.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case g.ChannelTypes.DM:
                        I = _.default.Messages.MUTE_CHANNEL.format({
                            name: E
                        }), T = _.default.Messages.UNMUTE_CHANNEL.format({
                            name: E
                        });
                        break;
                    default:
                        I = _.default.Messages.MUTE_CHANNEL_GENERIC, T = _.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, i.jsx)(u.MenuItem, {
                    id: "unmute-channel",
                    label: T,
                    subtext: a,
                    action: () => h(!1)
                }) : (0, i.jsx)(u.MenuItem, {
                    id: "mute-channel",
                    label: I,
                    action: () => h(!0),
                    children: N().map(n => {
                        let {
                            value: s,
                            label: a
                        } = n;
                        return (0, i.jsx)(u.MenuItem, {
                            id: "".concat(s),
                            label: a,
                            action: () => (function(n) {
                                e.type === g.ChannelTypes.GUILD_CATEGORY && (0, o.categoryCollapse)(e.id);
                                let i = M(n);
                                d.default.updateChannelOverrideSettings(e.guild_id, e.id, i, S.NotificationLabels.Muted, t)
                            })(s)
                        }, s)
                    })
                })
            }