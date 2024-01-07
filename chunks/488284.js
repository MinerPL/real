            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("424973");
            var s = n("446674"),
                a = n("193990"),
                i = n("845579"),
                r = n("385649"),
                l = n("599110"),
                u = n("684581"),
                o = n("49111"),
                d = n("782340");

            function c() {
                return m() && u.default.experiment.getCurrentConfig({
                    location: "holiday_events_is_eligible"
                }, {
                    autoTrackExposure: !1
                }).enabled
            }

            function f() {
                let {
                    enabled: e
                } = u.default.experiment.useExperiment({
                    location: "holiday_events_use_eligible"
                }, {
                    autoTrackExposure: !1
                });
                return m() && e
            }

            function p() {
                return null != u.default.ringtone && null != u.default.getRingtoneSettingsLabel
            }

            function m() {
                let e = Date.now();
                return e >= u.default.startTimeMs && e <= u.default.endTimeMs
            }
            var g = {
                subscribe: function(e) {
                    return u.default.experiment.subscribe({
                        location: "holiday_events_subscribe"
                    }, e)
                },
                isEligible: c,
                isRingtoneDisabled: function() {
                    return null == u.default.ringtone || r.default.isSoundDisabled(u.default.ringtone)
                },
                isRingtoneEligible: function() {
                    let e = c();
                    return e && p()
                },
                onRingtoneSettingValueChange: function(e) {
                    let t = r.default.getDisabledSounds();
                    if (null == u.default.ringtone) return;
                    let n = t.filter(e => e !== u.default.ringtone);
                    !e && n.push(u.default.ringtone), a.default.setDisabledSounds(n), l.default.track(o.AnalyticEvents.EVENT_RINGTONE_TOGGLED, {
                        toggled_on: e,
                        sound_name: u.default.ringtone
                    })
                },
                useIsEligible: f,
                useIsRingtoneDisabled: function() {
                    return (0, s.useStateFromStores)([r.default], () => null == u.default.ringtone || r.default.isSoundDisabled(u.default.ringtone))
                },
                useIsRingtoneEligible: function() {
                    let e = f();
                    return e && p()
                },
                useRingtoneSettingDescription: function() {
                    let e = i.NativePhoneIntegrationEnabled.useSetting();
                    return e ? void 0 : d.default.Messages.ENABLE_PHONE_INTEGRATION
                },
                useRingtoneSettingValue: function() {
                    let e = (0, s.useStateFromStores)([r.default], () => r.default.getDisabledSounds()),
                        t = i.NativePhoneIntegrationEnabled.useSetting();
                    return null != u.default.ringtone && t && !e.includes(u.default.ringtone)
                },
                getAppSpinnerSources: function() {
                    return m() ? u.default.appSpinnerSources : null
                },
                getLoadingTips: function() {
                    var e;
                    return m() ? null === (e = u.default.getLoadingTips) || void 0 === e ? void 0 : e.call(u.default) : null
                }
            }