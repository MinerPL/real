            "use strict";
            n.r(t), n.d(t, {
                getMuteTimeOptions: function() {
                    return f
                },
                filterOverrides: function() {
                    return g
                },
                useShouldUseNewNotificationSystem: function() {
                    return E
                }
            }), n("702976");
            var i = n("446674"),
                s = n("668597"),
                a = n("282109"),
                l = n("568734"),
                u = n("640497"),
                d = n("49111"),
                o = n("468200"),
                r = n("397336"),
                c = n("782340");

            function f() {
                return [{
                    label: c.default.Messages.MUTE_DURATION_15_MINUTES,
                    value: o.MuteUntilSeconds.MINUTES_15
                }, {
                    label: c.default.Messages.MUTE_DURATION_1_HOUR,
                    value: o.MuteUntilSeconds.HOURS_1
                }, {
                    label: c.default.Messages.MUTE_DURATION_3_HOURS,
                    value: o.MuteUntilSeconds.HOURS_3
                }, {
                    label: c.default.Messages.MUTE_DURATION_8_HOURS,
                    value: o.MuteUntilSeconds.HOURS_8
                }, {
                    label: c.default.Messages.MUTE_DURATION_24_HOURS,
                    value: o.MuteUntilSeconds.HOURS_24
                }, {
                    label: c.default.Messages.MUTE_DURATION_ALWAYS,
                    value: o.MuteUntilSeconds.ALWAYS
                }]
            }
            let S = {
                ignoreMute: !1,
                ignoreUnreadSetting: !0,
                ignoreNotificationSetting: !1
            };

            function g(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S;
                return Object.keys(e).filter(n => {
                    var i, a;
                    let u = e[n].message_notifications !== d.UserNotificationSettings.NULL,
                        o = l.hasFlag(null !== (i = e[n].flags) && void 0 !== i ? i : 0, r.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES) || l.hasFlag(null !== (a = e[n].flags) && void 0 !== a ? a : 0, r.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);
                    return !t.ignoreUnreadSetting && o || !t.ignoreNotificationSetting && u || !t.ignoreMute && (0, s.computeIsMuted)(e[n])
                })
            }

            function E(e) {
                let t = (0, i.useStateFromStores)([a.default], () => a.default.useNewNotifications);
                return u.NotificationsExperiment.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !1
                }).enabled && t
            }