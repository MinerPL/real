            "use strict";
            n.r(t), n.d(t, {
                getMuteTimes: function() {
                    return _
                },
                default: function() {
                    return E
                }
            }), n("222007");
            var s = n("37983");
            n("884691");
            var r = n("866227"),
                i = n.n(r),
                l = n("446674"),
                a = n("77078"),
                u = n("820542"),
                o = n("519705"),
                c = n("319165"),
                d = n("282109"),
                f = n("34676"),
                p = n("679653"),
                h = n("49111"),
                v = n("468200"),
                m = n("782340");
            let _ = () => [{
                    value: v.MuteUntilSeconds.MINUTES_15,
                    label: m.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: v.MuteUntilSeconds.HOURS_1,
                    label: m.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: v.MuteUntilSeconds.HOURS_3,
                    label: m.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: v.MuteUntilSeconds.HOURS_8,
                    label: m.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: v.MuteUntilSeconds.HOURS_24,
                    label: m.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: v.MuteUntilSeconds.ALWAYS,
                    label: m.default.Messages.MUTE_DURATION_ALWAYS
                }],
                g = e => {
                    let t = e > 0 ? i().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function E(e, t) {
                let [n, r] = (0, l.useStateFromStoresArray)([d.default], () => [d.default.isChannelMuted(e.guild_id, e.id), d.default.getChannelMuteConfig(e.guild_id, e.id)]), i = (0, c.useMutedUntilText)(r), v = (0, p.default)(e, !0);

                function E(t) {
                    t && e.type === h.ChannelTypes.GUILD_CATEGORY && (0, u.categoryCollapse)(e.id), o.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    }, f.NotificationLabel.muted(t))
                }
                let x = m.default.Messages.MUTE_CHANNEL_GENERIC,
                    b = m.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case h.ChannelTypes.GUILD_CATEGORY:
                        x = m.default.Messages.MUTE_CATEGORY, b = m.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case h.ChannelTypes.GROUP_DM:
                        x = m.default.Messages.MUTE_CONVERSATION, b = m.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case h.ChannelTypes.DM:
                        x = m.default.Messages.MUTE_CHANNEL.format({
                            name: v
                        }), b = m.default.Messages.UNMUTE_CHANNEL.format({
                            name: v
                        });
                        break;
                    default:
                        x = m.default.Messages.MUTE_CHANNEL_GENERIC, b = m.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, s.jsx)(a.MenuItem, {
                    id: "unmute-channel",
                    label: b,
                    subtext: i,
                    action: () => E(!1)
                }) : (0, s.jsx)(a.MenuItem, {
                    id: "mute-channel",
                    label: x,
                    action: () => E(!0),
                    children: _().map(n => {
                        let {
                            value: r,
                            label: i
                        } = n;
                        return (0, s.jsx)(a.MenuItem, {
                            id: "".concat(r),
                            label: i,
                            action: () => (function(n) {
                                e.type === h.ChannelTypes.GUILD_CATEGORY && (0, u.categoryCollapse)(e.id);
                                let s = g(n);
                                o.default.updateChannelOverrideSettings(e.guild_id, e.id, s, f.NotificationLabels.Muted, t)
                            })(r)
                        }, r)
                    })
                })
            }