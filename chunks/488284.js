            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return f
                }
            }), s("424973");
            var a = s("446674"),
                n = s("193990"),
                l = s("845579"),
                i = s("385649"),
                r = s("599110"),
                u = s("684581"),
                d = s("49111"),
                o = s("782340");

            function c() {
                return _() && u.default.experiment.getCurrentConfig({
                    location: "holiday_events_is_eligible"
                }, {
                    autoTrackExposure: !1
                }).enabled
            }

            function E() {
                let {
                    enabled: e
                } = u.default.experiment.useExperiment({
                    location: "holiday_events_use_eligible"
                }, {
                    autoTrackExposure: !1
                });
                return _() && e
            }

            function T() {
                return null != u.default.ringtone && null != u.default.getRingtoneSettingsLabel
            }

            function _() {
                let e = Date.now();
                return e >= u.default.startTimeMs && e <= u.default.endTimeMs
            }
            var f = {
                subscribe: function(e) {
                    return u.default.experiment.subscribe({
                        location: "holiday_events_subscribe"
                    }, e)
                },
                isEligible: c,
                isRingtoneDisabled: function() {
                    return null == u.default.ringtone || i.default.isSoundDisabled(u.default.ringtone)
                },
                isRingtoneEligible: function() {
                    let e = c();
                    return e && T()
                },
                onRingtoneSettingValueChange: function(e) {
                    let t = i.default.getDisabledSounds();
                    if (null == u.default.ringtone) return;
                    let s = t.filter(e => e !== u.default.ringtone);
                    !e && s.push(u.default.ringtone), n.default.setDisabledSounds(s), r.default.track(d.AnalyticEvents.EVENT_RINGTONE_TOGGLED, {
                        toggled_on: e,
                        sound_name: u.default.ringtone
                    })
                },
                useIsEligible: E,
                useIsRingtoneDisabled: function() {
                    return (0, a.useStateFromStores)([i.default], () => null == u.default.ringtone || i.default.isSoundDisabled(u.default.ringtone))
                },
                useIsRingtoneEligible: function() {
                    let e = E();
                    return e && T()
                },
                useRingtoneSettingDescription: function() {
                    let e = l.NativePhoneIntegrationEnabled.useSetting();
                    return e ? void 0 : o.default.Messages.ENABLE_PHONE_INTEGRATION
                },
                useRingtoneSettingValue: function() {
                    let e = (0, a.useStateFromStores)([i.default], () => i.default.getDisabledSounds()),
                        t = l.NativePhoneIntegrationEnabled.useSetting();
                    return null != u.default.ringtone && t && !e.includes(u.default.ringtone)
                },
                getAppSpinnerSources: function() {
                    return _() ? u.default.appSpinnerSources : null
                },
                getLoadingTips: function() {
                    var e;
                    return _() ? null === (e = u.default.getLoadingTips) || void 0 === e ? void 0 : e.call(u.default) : null
                }
            }