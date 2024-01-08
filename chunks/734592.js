            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007");
            var a = n("913144"),
                s = n("629109"),
                i = n("316272"),
                l = n("292687"),
                r = n("42887"),
                o = n("568307"),
                u = n("471671"),
                d = n("49111"),
                c = n("353927");
            let E = new Set,
                f = new Set,
                _ = null;

            function h() {
                for (let e of E) s.default.setDisableLocalVideo(e, d.VideoToggleState.MANUAL_ENABLED, c.MediaEngineContextTypes.DEFAULT, !1);
                f.clear(), E.clear()
            }
            class C extends i.default {
                _initialize() {
                    a.default.subscribe("RTC_CONNECTION_VIDEO", this.handleIncomingVideo), a.default.subscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleManualLocalVideoToggle), a.default.subscribe("WINDOW_FOCUS", this.handleWindowFocus), a.default.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), l.default.addChangeListener(this.handlePopoutChange)
                }
                _terminate() {
                    a.default.unsubscribe("RTC_CONNECTION_VIDEO", this.handleIncomingVideo), a.default.unsubscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleManualLocalVideoToggle), a.default.unsubscribe("WINDOW_FOCUS", this.handleWindowFocus), a.default.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), l.default.removeChangeListener(this.handlePopoutChange), h(), _ = null
                }
                handleIncomingVideo(e) {
                    let {
                        userId: t,
                        context: n,
                        streamId: a
                    } = e;
                    if (n !== c.MediaEngineContextTypes.DEFAULT || null == a) return;
                    let i = null != o.default.getVisibleGame(),
                        _ = u.default.isFocused(),
                        h = l.default.getWindowFocused(d.PopoutWindowKeys.CHANNEL_CALL_POPOUT),
                        C = r.default.isLocalVideoDisabled(t, n),
                        I = f.has(t);
                    i && !_ && !h && !C && !I && (E.add(t), s.default.setDisableLocalVideo(t, d.VideoToggleState.DISABLED, n, !1))
                }
                handleManualLocalVideoToggle(e) {
                    let {
                        userId: t,
                        persist: n
                    } = e;
                    n && (f.add(t), E.delete(t))
                }
                constructor(...e) {
                    super(...e), this.handleWindowFocus = e => {
                        let {
                            focused: t
                        } = e;
                        t && h()
                    }, this.handleVoiceChannelSelect = e => {
                        let {
                            channelId: t
                        } = e;
                        t !== _ && (h(), _ = t)
                    }, this.handlePopoutChange = () => {
                        l.default.getWindowFocused(d.PopoutWindowKeys.CHANNEL_CALL_POPOUT) && h()
                    }
                }
            }
            var I = new C