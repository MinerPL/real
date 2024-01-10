            "use strict";
            n.r(t), n.d(t, {
                getMuteTimeOptions: function() {
                    return f
                },
                filterOverrides: function() {
                    return C
                },
                useShouldUseNewNotificationSystem: function() {
                    return p
                }
            }), n("702976");
            var s = n("446674"),
                a = n("668597"),
                l = n("282109"),
                i = n("568734"),
                r = n("640497"),
                o = n("49111"),
                u = n("468200"),
                d = n("397336"),
                c = n("782340");

            function f() {
                return [{
                    label: c.default.Messages.MUTE_DURATION_15_MINUTES,
                    value: u.MuteUntilSeconds.MINUTES_15
                }, {
                    label: c.default.Messages.MUTE_DURATION_1_HOUR,
                    value: u.MuteUntilSeconds.HOURS_1
                }, {
                    label: c.default.Messages.MUTE_DURATION_3_HOURS,
                    value: u.MuteUntilSeconds.HOURS_3
                }, {
                    label: c.default.Messages.MUTE_DURATION_8_HOURS,
                    value: u.MuteUntilSeconds.HOURS_8
                }, {
                    label: c.default.Messages.MUTE_DURATION_24_HOURS,
                    value: u.MuteUntilSeconds.HOURS_24
                }, {
                    label: c.default.Messages.MUTE_DURATION_ALWAYS,
                    value: u.MuteUntilSeconds.ALWAYS
                }]
            }
            let h = {
                ignoreMute: !1,
                ignoreUnreadSetting: !0,
                ignoreNotificationSetting: !1
            };

            function C(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
                return Object.keys(e).filter(n => {
                    var s, l;
                    let r = e[n].message_notifications !== o.UserNotificationSettings.NULL,
                        u = i.hasFlag(null !== (s = e[n].flags) && void 0 !== s ? s : 0, d.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES) || i.hasFlag(null !== (l = e[n].flags) && void 0 !== l ? l : 0, d.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);
                    return !t.ignoreUnreadSetting && u || !t.ignoreNotificationSetting && r || !t.ignoreMute && (0, a.computeIsMuted)(e[n])
                })
            }

            function p(e) {
                let t = (0, s.useStateFromStores)([l.default], () => l.default.useNewNotifications);
                return r.default.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !1
                }).enabled && t
            }