            "use strict";
            n.r(t), n.d(t, {
                getMuteTimes: function() {
                    return p
                },
                default: function() {
                    return C
                }
            }), n("222007");
            var i = n("37983");
            n("884691");
            var l = n("866227"),
                a = n.n(l),
                r = n("446674"),
                s = n("77078"),
                o = n("820542"),
                u = n("519705"),
                d = n("319165"),
                c = n("282109"),
                f = n("34676"),
                h = n("679653"),
                E = n("49111"),
                _ = n("468200"),
                I = n("782340");
            let p = () => [{
                    value: _.MuteUntilSeconds.MINUTES_15,
                    label: I.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: _.MuteUntilSeconds.HOURS_1,
                    label: I.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: _.MuteUntilSeconds.HOURS_3,
                    label: I.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: _.MuteUntilSeconds.HOURS_8,
                    label: I.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: _.MuteUntilSeconds.HOURS_24,
                    label: I.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: _.MuteUntilSeconds.ALWAYS,
                    label: I.default.Messages.MUTE_DURATION_ALWAYS
                }],
                T = e => {
                    let t = e > 0 ? a().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function C(e, t) {
                let [n, l] = (0, r.useStateFromStoresArray)([c.default], () => [c.default.isChannelMuted(e.guild_id, e.id), c.default.getChannelMuteConfig(e.guild_id, e.id)]), a = (0, d.useMutedUntilText)(l), _ = (0, h.default)(e, !0);

                function C(t) {
                    t && e.type === E.ChannelTypes.GUILD_CATEGORY && (0, o.categoryCollapse)(e.id), u.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    }, f.NotificationLabel.muted(t))
                }
                let S = I.default.Messages.MUTE_CHANNEL_GENERIC,
                    N = I.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case E.ChannelTypes.GUILD_CATEGORY:
                        S = I.default.Messages.MUTE_CATEGORY, N = I.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case E.ChannelTypes.GROUP_DM:
                        S = I.default.Messages.MUTE_CONVERSATION, N = I.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case E.ChannelTypes.DM:
                        S = I.default.Messages.MUTE_CHANNEL.format({
                            name: _
                        }), N = I.default.Messages.UNMUTE_CHANNEL.format({
                            name: _
                        });
                        break;
                    default:
                        S = I.default.Messages.MUTE_CHANNEL_GENERIC, N = I.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, i.jsx)(s.MenuItem, {
                    id: "unmute-channel",
                    label: N,
                    subtext: a,
                    action: () => C(!1)
                }) : (0, i.jsx)(s.MenuItem, {
                    id: "mute-channel",
                    label: S,
                    action: () => C(!0),
                    children: p().map(n => {
                        let {
                            value: l,
                            label: a
                        } = n;
                        return (0, i.jsx)(s.MenuItem, {
                            id: "".concat(l),
                            label: a,
                            action: () => (function(n) {
                                e.type === E.ChannelTypes.GUILD_CATEGORY && (0, o.categoryCollapse)(e.id);
                                let i = T(n);
                                u.default.updateChannelOverrideSettings(e.guild_id, e.id, i, f.NotificationLabels.Muted, t)
                            })(l)
                        }, l)
                    })
                })
            }