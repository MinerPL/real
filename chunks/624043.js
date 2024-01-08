            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            }), n("222007"), n("424973");
            var a = n("913144"),
                s = n("316272"),
                i = n("870696"),
                l = n("271938"),
                r = n("945956"),
                o = n("18494"),
                u = n("191542"),
                d = n("709681"),
                c = n("880731"),
                E = n("943551"),
                f = n("49111");
            let _ = (0, d.createSoundForPack)("poggermode_applause", i.default.getSoundpack()),
                h = !1,
                C = !1,
                I = [],
                T = null,
                S = () => {
                    !h && (_.loop(), h = !0)
                },
                N = () => {
                    _.stop(), h = !1
                },
                A = () => {
                    let e = c.default.isEnabled(),
                        t = c.default.comboSoundsEnabled;
                    if (!e || !t) return !1;
                    let n = o.default.getChannelId();
                    return null != n && !0
                },
                m = () => {
                    if (0 === I.length || !A() || C) return;
                    C = !0;
                    let [e, t] = I[I.length - 1];
                    (0, d.playSound)(e, t), T = setTimeout(p, 1e3)
                },
                p = () => {
                    I.pop(), C = !1, m()
                },
                g = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        n = r.default.isConnected();
                    I.push([e, t * (n ? .1 : 1)]), m()
                };
            class R extends s.default {
                _initialize() {
                    E.default.addChangeListener(this.startAudio), a.default.subscribe("RTC_CONNECTION_STATE", this.setVolume), a.default.subscribe("TYPING_STOP", this.stopAudio), a.default.subscribe("TYPING_STOP_LOCAL", this.stopAudio), a.default.subscribe("CHANNEL_SELECT", this.stopAudio), a.default.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
                }
                _terminate() {
                    E.default.removeChangeListener(this.startAudio), a.default.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), a.default.unsubscribe("TYPING_STOP", this.stopAudio), a.default.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), a.default.unsubscribe("CHANNEL_SELECT", this.stopAudio), a.default.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(T)
                }
                setVolume(e) {
                    let {
                        state: t
                    } = e;
                    t === f.RTCConnectionStates.RTC_CONNECTED ? _.volume = .1 : _.volume = 1
                }
                handleTypingStop(e) {
                    let {
                        userId: t
                    } = e, n = l.default.getId();
                    n === t && N()
                }
                stopAudio() {
                    N()
                }
                startAudio() {
                    var e;
                    if (!A()) return;
                    let t = o.default.getChannelId();
                    if (null == t) return;
                    let n = l.default.getId(),
                        a = u.default.isTyping(t, n),
                        s = E.default.getUserCombo(n, t),
                        i = null !== (e = null == s ? void 0 : s.multiplier) && void 0 !== e ? e : 1;
                    a && i >= 7 ? S() : N()
                }
                playAchievementUnlockSound() {
                    A() && g("poggermode_achievement_unlock")
                }
            }
            var O = new R