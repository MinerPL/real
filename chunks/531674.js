            "use strict";
            n.r(t), n.d(t, {
                getMuteTimes: function() {
                    return A
                },
                default: function() {
                    return S
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var i = n("866227"),
                r = n.n(i),
                u = n("446674"),
                s = n("77078"),
                l = n("820542"),
                o = n("519705"),
                d = n("319165"),
                f = n("282109"),
                E = n("34676"),
                c = n("679653"),
                C = n("49111"),
                N = n("468200"),
                _ = n("782340");
            let A = () => [{
                    value: N.MuteUntilSeconds.MINUTES_15,
                    label: _.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: N.MuteUntilSeconds.HOURS_1,
                    label: _.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: N.MuteUntilSeconds.HOURS_3,
                    label: _.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: N.MuteUntilSeconds.HOURS_8,
                    label: _.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: N.MuteUntilSeconds.HOURS_24,
                    label: _.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: N.MuteUntilSeconds.ALWAYS,
                    label: _.default.Messages.MUTE_DURATION_ALWAYS
                }],
                T = e => {
                    let t = e > 0 ? r().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function S(e, t) {
                let [n, i] = (0, u.useStateFromStoresArray)([f.default], () => [f.default.isChannelMuted(e.guild_id, e.id), f.default.getChannelMuteConfig(e.guild_id, e.id)]), r = (0, d.useMutedUntilText)(i), N = (0, c.default)(e, !0);

                function S(t) {
                    t && e.type === C.ChannelTypes.GUILD_CATEGORY && (0, l.categoryCollapse)(e.id), o.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    }, E.NotificationLabel.muted(t))
                }
                let v = _.default.Messages.MUTE_CHANNEL_GENERIC,
                    p = _.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case C.ChannelTypes.GUILD_CATEGORY:
                        v = _.default.Messages.MUTE_CATEGORY, p = _.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case C.ChannelTypes.GROUP_DM:
                        v = _.default.Messages.MUTE_CONVERSATION, p = _.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case C.ChannelTypes.DM:
                        v = _.default.Messages.MUTE_CHANNEL.format({
                            name: N
                        }), p = _.default.Messages.UNMUTE_CHANNEL.format({
                            name: N
                        });
                        break;
                    default:
                        v = _.default.Messages.MUTE_CHANNEL_GENERIC, p = _.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, a.jsx)(s.MenuItem, {
                    id: "unmute-channel",
                    label: p,
                    subtext: r,
                    action: () => S(!1)
                }) : (0, a.jsx)(s.MenuItem, {
                    id: "mute-channel",
                    label: v,
                    action: () => S(!0),
                    children: A().map(n => {
                        let {
                            value: i,
                            label: r
                        } = n;
                        return (0, a.jsx)(s.MenuItem, {
                            id: "".concat(i),
                            label: r,
                            action: () => (function(n) {
                                e.type === C.ChannelTypes.GUILD_CATEGORY && (0, l.categoryCollapse)(e.id);
                                let a = T(n);
                                o.default.updateChannelOverrideSettings(e.guild_id, e.id, a, E.NotificationLabels.Muted, t)
                            })(i)
                        }, i)
                    })
                })
            }