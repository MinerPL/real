            "use strict";
            n.r(t), n.d(t, {
                getMuteTimeOptions: function() {
                    return S
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
                o = n("49111"),
                d = n("468200"),
                r = n("397336"),
                c = n("782340");

            function S() {
                return [{
                    label: c.default.Messages.MUTE_DURATION_15_MINUTES,
                    value: d.MuteUntilSeconds.MINUTES_15
                }, {
                    label: c.default.Messages.MUTE_DURATION_1_HOUR,
                    value: d.MuteUntilSeconds.HOURS_1
                }, {
                    label: c.default.Messages.MUTE_DURATION_3_HOURS,
                    value: d.MuteUntilSeconds.HOURS_3
                }, {
                    label: c.default.Messages.MUTE_DURATION_8_HOURS,
                    value: d.MuteUntilSeconds.HOURS_8
                }, {
                    label: c.default.Messages.MUTE_DURATION_24_HOURS,
                    value: d.MuteUntilSeconds.HOURS_24
                }, {
                    label: c.default.Messages.MUTE_DURATION_ALWAYS,
                    value: d.MuteUntilSeconds.ALWAYS
                }]
            }
            let f = {
                ignoreMute: !1,
                ignoreUnreadSetting: !0,
                ignoreNotificationSetting: !1
            };

            function g(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f;
                return Object.keys(e).filter(n => {
                    var i, a;
                    let u = e[n].message_notifications !== o.UserNotificationSettings.NULL,
                        d = l.hasFlag(null !== (i = e[n].flags) && void 0 !== i ? i : 0, r.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES) || l.hasFlag(null !== (a = e[n].flags) && void 0 !== a ? a : 0, r.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);
                    return !t.ignoreUnreadSetting && d || !t.ignoreNotificationSetting && u || !t.ignoreMute && (0, s.computeIsMuted)(e[n])
                })
            }

            function E(e) {
                let t = (0, i.useStateFromStores)([a.default], () => a.default.useNewNotifications);
                return u.default.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !1
                }).enabled && t
            }