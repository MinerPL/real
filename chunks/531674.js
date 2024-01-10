            "use strict";
            n.r(t), n.d(t, {
                getMuteTimes: function() {
                    return m
                },
                default: function() {
                    return N
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var i = n("866227"),
                s = n.n(i),
                u = n("446674"),
                l = n("77078"),
                o = n("820542"),
                r = n("519705"),
                d = n("319165"),
                c = n("282109"),
                f = n("34676"),
                _ = n("679653"),
                p = n("49111"),
                E = n("468200"),
                S = n("782340");
            let m = () => [{
                    value: E.MuteUntilSeconds.MINUTES_15,
                    label: S.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: E.MuteUntilSeconds.HOURS_1,
                    label: S.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: E.MuteUntilSeconds.HOURS_3,
                    label: S.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: E.MuteUntilSeconds.HOURS_8,
                    label: S.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: E.MuteUntilSeconds.HOURS_24,
                    label: S.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: E.MuteUntilSeconds.ALWAYS,
                    label: S.default.Messages.MUTE_DURATION_ALWAYS
                }],
                g = e => {
                    let t = e > 0 ? s().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function N(e, t) {
                let [n, i] = (0, u.useStateFromStoresArray)([c.default], () => [c.default.isChannelMuted(e.guild_id, e.id), c.default.getChannelMuteConfig(e.guild_id, e.id)]), s = (0, d.useMutedUntilText)(i), E = (0, _.default)(e, !0);

                function N(t) {
                    t && e.type === p.ChannelTypes.GUILD_CATEGORY && (0, o.categoryCollapse)(e.id), r.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    }, f.NotificationLabel.muted(t))
                }
                let v = S.default.Messages.MUTE_CHANNEL_GENERIC,
                    A = S.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case p.ChannelTypes.GUILD_CATEGORY:
                        v = S.default.Messages.MUTE_CATEGORY, A = S.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case p.ChannelTypes.GROUP_DM:
                        v = S.default.Messages.MUTE_CONVERSATION, A = S.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case p.ChannelTypes.DM:
                        v = S.default.Messages.MUTE_CHANNEL.format({
                            name: E
                        }), A = S.default.Messages.UNMUTE_CHANNEL.format({
                            name: E
                        });
                        break;
                    default:
                        v = S.default.Messages.MUTE_CHANNEL_GENERIC, A = S.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, a.jsx)(l.MenuItem, {
                    id: "unmute-channel",
                    label: A,
                    subtext: s,
                    action: () => N(!1)
                }) : (0, a.jsx)(l.MenuItem, {
                    id: "mute-channel",
                    label: v,
                    action: () => N(!0),
                    children: m().map(n => {
                        let {
                            value: i,
                            label: s
                        } = n;
                        return (0, a.jsx)(l.MenuItem, {
                            id: "".concat(i),
                            label: s,
                            action: () => (function(n) {
                                e.type === p.ChannelTypes.GUILD_CATEGORY && (0, o.categoryCollapse)(e.id);
                                let a = g(n);
                                r.default.updateChannelOverrideSettings(e.guild_id, e.id, a, f.NotificationLabels.Muted, t)
                            })(i)
                        }, i)
                    })
                })
            }