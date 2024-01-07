            "use strict";
            n.r(t), n.d(t, {
                getMuteTimeOptions: function() {
                    return g
                },
                filterOverrides: function() {
                    return _
                },
                useShouldUseNewNotificationSystem: function() {
                    return c
                }
            }), n("702976");
            var i = n("446674"),
                s = n("668597"),
                a = n("282109"),
                o = n("568734"),
                l = n("640497"),
                S = n("49111"),
                r = n("468200"),
                d = n("397336"),
                u = n("782340");

            function g() {
                return [{
                    label: u.default.Messages.MUTE_DURATION_15_MINUTES,
                    value: r.MuteUntilSeconds.MINUTES_15
                }, {
                    label: u.default.Messages.MUTE_DURATION_1_HOUR,
                    value: r.MuteUntilSeconds.HOURS_1
                }, {
                    label: u.default.Messages.MUTE_DURATION_3_HOURS,
                    value: r.MuteUntilSeconds.HOURS_3
                }, {
                    label: u.default.Messages.MUTE_DURATION_8_HOURS,
                    value: r.MuteUntilSeconds.HOURS_8
                }, {
                    label: u.default.Messages.MUTE_DURATION_24_HOURS,
                    value: r.MuteUntilSeconds.HOURS_24
                }, {
                    label: u.default.Messages.MUTE_DURATION_ALWAYS,
                    value: r.MuteUntilSeconds.ALWAYS
                }]
            }
            let N = {
                ignoreMute: !1,
                ignoreUnreadSetting: !0,
                ignoreNotificationSetting: !1
            };

            function _(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N;
                return Object.keys(e).filter(n => {
                    var i, a;
                    let l = e[n].message_notifications !== S.UserNotificationSettings.NULL,
                        r = o.hasFlag(null !== (i = e[n].flags) && void 0 !== i ? i : 0, d.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES) || o.hasFlag(null !== (a = e[n].flags) && void 0 !== a ? a : 0, d.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);
                    return !t.ignoreUnreadSetting && r || !t.ignoreNotificationSetting && l || !t.ignoreMute && (0, s.computeIsMuted)(e[n])
                })
            }

            function c(e) {
                let t = (0, i.useStateFromStores)([a.default], () => a.default.useNewNotifications);
                return l.default.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !1
                }).enabled && t
            }