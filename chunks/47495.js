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
                r = n("49111"),
                S = n("468200"),
                u = n("397336"),
                d = n("782340");

            function g() {
                return [{
                    label: d.default.Messages.MUTE_DURATION_15_MINUTES,
                    value: S.MuteUntilSeconds.MINUTES_15
                }, {
                    label: d.default.Messages.MUTE_DURATION_1_HOUR,
                    value: S.MuteUntilSeconds.HOURS_1
                }, {
                    label: d.default.Messages.MUTE_DURATION_3_HOURS,
                    value: S.MuteUntilSeconds.HOURS_3
                }, {
                    label: d.default.Messages.MUTE_DURATION_8_HOURS,
                    value: S.MuteUntilSeconds.HOURS_8
                }, {
                    label: d.default.Messages.MUTE_DURATION_24_HOURS,
                    value: S.MuteUntilSeconds.HOURS_24
                }, {
                    label: d.default.Messages.MUTE_DURATION_ALWAYS,
                    value: S.MuteUntilSeconds.ALWAYS
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
                    let l = e[n].message_notifications !== r.UserNotificationSettings.NULL,
                        S = o.hasFlag(null !== (i = e[n].flags) && void 0 !== i ? i : 0, u.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES) || o.hasFlag(null !== (a = e[n].flags) && void 0 !== a ? a : 0, u.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);
                    return !t.ignoreUnreadSetting && S || !t.ignoreNotificationSetting && l || !t.ignoreMute && (0, s.computeIsMuted)(e[n])
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