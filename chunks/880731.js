            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("917351"),
                l = n("446674"),
                s = n("913144"),
                i = n("39141");
            let r = !1,
                d = {
                    settingsVisible: !1,
                    enabled: !1,
                    combosEnabled: !0,
                    combosRequiredCount: 5,
                    comboSoundsEnabled: !0,
                    screenshakeEnabled: !0,
                    screenshakeEnabledLocations: {
                        [i.ShakeLocation.CHAT_INPUT]: !0,
                        [i.ShakeLocation.VOICE_USER]: !1,
                        [i.ShakeLocation.MENTION]: !1
                    },
                    shakeIntensity: 1,
                    confettiEnabled: !0,
                    confettiEnabledLocations: {
                        [i.ConfettiLocation.CHAT_INPUT]: !0,
                        [i.ConfettiLocation.REACTION]: !0,
                        [i.ConfettiLocation.MEMBER_USER]: !0,
                        [i.ConfettiLocation.CALL_TILE]: !0
                    },
                    confettiSize: 16,
                    confettiCount: 5,
                    warningSeen: !1
                },
                u = (0, a.cloneDeep)(d);
            class o extends l.default.DeviceSettingsStore {
                initialize(e) {
                    u = {
                        ...u,
                        ...e
                    }
                }
                getUserAgnosticState() {
                    return u
                }
                get settingsVisible() {
                    return u.settingsVisible
                }
                isEnabled() {
                    let {
                        confettiLocation: e,
                        shakeLocation: t
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = null == e || u.confettiEnabled && u.confettiEnabledLocations[e], a = null == t || u.screenshakeEnabled && u.screenshakeEnabledLocations[t];
                    return this.settingsVisible && !r && u.enabled && n && a
                }
                get shakeIntensity() {
                    return this.isEnabled() ? u.shakeIntensity : 0
                }
                get combosRequiredCount() {
                    return this.isEnabled() ? u.combosRequiredCount : 0
                }
                get screenshakeEnabled() {
                    return u.screenshakeEnabled
                }
                get screenshakeEnabledLocations() {
                    return u.screenshakeEnabledLocations
                }
                get combosEnabled() {
                    return u.combosEnabled
                }
                get comboSoundsEnabled() {
                    return u.comboSoundsEnabled
                }
            }
            o.displayName = "PoggermodeSettingsStore", o.persistKey = "PoggermodeSettingsStore";
            var c = new o(s.default, {
                POGGERMODE_SETTINGS_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e;
                    u = {
                        ...u,
                        ...t
                    }
                },
                POGGERMODE_TEMPORARILY_DISABLED: function() {
                    r = !0
                }
            })