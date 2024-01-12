            "use strict";
            n.r(t), n.d(t, {
                getMuteTimes: function() {
                    return m
                },
                default: function() {
                    return g
                }
            }), n("222007");
            var i = n("37983");
            n("884691");
            var r = n("866227"),
                s = n.n(r),
                l = n("446674"),
                a = n("77078"),
                u = n("820542"),
                o = n("519705"),
                c = n("319165"),
                d = n("282109"),
                f = n("34676"),
                p = n("679653"),
                h = n("49111"),
                _ = n("468200"),
                v = n("782340");
            let m = () => [{
                    value: _.MuteUntilSeconds.MINUTES_15,
                    label: v.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: _.MuteUntilSeconds.HOURS_1,
                    label: v.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: _.MuteUntilSeconds.HOURS_3,
                    label: v.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: _.MuteUntilSeconds.HOURS_8,
                    label: v.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: _.MuteUntilSeconds.HOURS_24,
                    label: v.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: _.MuteUntilSeconds.ALWAYS,
                    label: v.default.Messages.MUTE_DURATION_ALWAYS
                }],
                E = e => {
                    let t = e > 0 ? s().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function g(e, t) {
                let [n, r] = (0, l.useStateFromStoresArray)([d.default], () => [d.default.isChannelMuted(e.guild_id, e.id), d.default.getChannelMuteConfig(e.guild_id, e.id)]), s = (0, c.useMutedUntilText)(r), _ = (0, p.default)(e, !0);

                function g(t) {
                    t && e.type === h.ChannelTypes.GUILD_CATEGORY && (0, u.categoryCollapse)(e.id), o.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    }, f.NotificationLabel.muted(t))
                }
                let C = v.default.Messages.MUTE_CHANNEL_GENERIC,
                    b = v.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case h.ChannelTypes.GUILD_CATEGORY:
                        C = v.default.Messages.MUTE_CATEGORY, b = v.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case h.ChannelTypes.GROUP_DM:
                        C = v.default.Messages.MUTE_CONVERSATION, b = v.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case h.ChannelTypes.DM:
                        C = v.default.Messages.MUTE_CHANNEL.format({
                            name: _
                        }), b = v.default.Messages.UNMUTE_CHANNEL.format({
                            name: _
                        });
                        break;
                    default:
                        C = v.default.Messages.MUTE_CHANNEL_GENERIC, b = v.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, i.jsx)(a.MenuItem, {
                    id: "unmute-channel",
                    label: b,
                    subtext: s,
                    action: () => g(!1)
                }) : (0, i.jsx)(a.MenuItem, {
                    id: "mute-channel",
                    label: C,
                    action: () => g(!0),
                    children: m().map(n => {
                        let {
                            value: r,
                            label: s
                        } = n;
                        return (0, i.jsx)(a.MenuItem, {
                            id: "".concat(r),
                            label: s,
                            action: () => (function(n) {
                                e.type === h.ChannelTypes.GUILD_CATEGORY && (0, u.categoryCollapse)(e.id);
                                let i = E(n);
                                o.default.updateChannelOverrideSettings(e.guild_id, e.id, i, f.NotificationLabels.Muted, t)
                            })(r)
                        }, r)
                    })
                })
            }