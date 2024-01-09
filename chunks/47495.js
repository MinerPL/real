            "use strict";
            n.r(t), n.d(t, {
                getMuteTimeOptions: function() {
                    return f
                },
                filterOverrides: function() {
                    return p
                },
                useShouldUseNewNotificationSystem: function() {
                    return E
                }
            }), n("702976");
            var a = n("446674"),
                i = n("668597"),
                s = n("282109"),
                u = n("568734"),
                l = n("640497"),
                o = n("49111"),
                r = n("468200"),
                d = n("397336"),
                c = n("782340");

            function f() {
                return [{
                    label: c.default.Messages.MUTE_DURATION_15_MINUTES,
                    value: r.MuteUntilSeconds.MINUTES_15
                }, {
                    label: c.default.Messages.MUTE_DURATION_1_HOUR,
                    value: r.MuteUntilSeconds.HOURS_1
                }, {
                    label: c.default.Messages.MUTE_DURATION_3_HOURS,
                    value: r.MuteUntilSeconds.HOURS_3
                }, {
                    label: c.default.Messages.MUTE_DURATION_8_HOURS,
                    value: r.MuteUntilSeconds.HOURS_8
                }, {
                    label: c.default.Messages.MUTE_DURATION_24_HOURS,
                    value: r.MuteUntilSeconds.HOURS_24
                }, {
                    label: c.default.Messages.MUTE_DURATION_ALWAYS,
                    value: r.MuteUntilSeconds.ALWAYS
                }]
            }
            let _ = {
                ignoreMute: !1,
                ignoreUnreadSetting: !0,
                ignoreNotificationSetting: !1
            };

            function p(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _;
                return Object.keys(e).filter(n => {
                    var a, s;
                    let l = e[n].message_notifications !== o.UserNotificationSettings.NULL,
                        r = u.hasFlag(null !== (a = e[n].flags) && void 0 !== a ? a : 0, d.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES) || u.hasFlag(null !== (s = e[n].flags) && void 0 !== s ? s : 0, d.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);
                    return !t.ignoreUnreadSetting && r || !t.ignoreNotificationSetting && l || !t.ignoreMute && (0, i.computeIsMuted)(e[n])
                })
            }

            function E(e) {
                let t = (0, a.useStateFromStores)([s.default], () => s.default.useNewNotifications);
                return l.default.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !1
                }).enabled && t
            }