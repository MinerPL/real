            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var a = n("913144"),
                s = n("629109"),
                i = n("539405"),
                l = n("987317"),
                r = n("990766"),
                o = n("52289"),
                u = n("316272"),
                d = n("56947"),
                c = n("803725"),
                E = n("374014"),
                f = n("712258"),
                _ = n("393414"),
                h = n("245463"),
                C = n("570413"),
                T = n("373469"),
                I = n("42887"),
                S = n("102985"),
                N = n("860957"),
                A = n("901165"),
                m = n("599110"),
                p = n("360782"),
                g = n("49111"),
                R = n("353927");
            let O = {
                [g.GlobalKeybindActions.TOGGLE_PRIORITY_SPEAKER]: {
                    onTrigger() {},
                    keyEvents: {}
                },
                [g.GlobalKeybindActions.UNASSIGNED]: {
                    onTrigger() {},
                    keyEvents: {}
                },
                [g.GlobalKeybindActions.PUSH_TO_TALK]: {
                    onTrigger(e, t) {
                        I.default.getMode(t.context) === g.InputModes.PUSH_TO_TALK && (O[g.GlobalKeybindActions.PUSH_TO_TALK].isPressed = e, I.default.getMediaEngine().eachConnection(t => t.setForceAudioInput(e, !1), t.context))
                    },
                    keyEvents: {
                        keyup: !0,
                        keydown: !0
                    },
                    isPressed: !1
                },
                [g.GlobalKeybindActions.PUSH_TO_TALK_PRIORITY]: {
                    onTrigger(e) {
                        I.default.getMode() === g.InputModes.PUSH_TO_TALK && (O[g.GlobalKeybindActions.PUSH_TO_TALK_PRIORITY].isPressed = e, I.default.getMediaEngine().eachConnection(t => t.setForceAudioInput(e, !0), R.MediaEngineContextTypes.DEFAULT))
                    },
                    keyEvents: {
                        keyup: !0,
                        keydown: !0
                    },
                    isPressed: !1
                },
                [g.GlobalKeybindActions.PUSH_TO_MUTE]: {
                    onTrigger(e) {
                        if (I.default.getMode() === g.InputModes.VOICE_ACTIVITY) !I.default.isSelfDeaf() && (O[g.GlobalKeybindActions.PUSH_TO_MUTE].isPressed = e, s.default.setTemporarySelfMute(e))
                    },
                    keyEvents: {
                        keyup: !0,
                        keydown: !0
                    },
                    isPressed: !1
                },
                [g.GlobalKeybindActions.TOGGLE_MUTE]: {
                    onTrigger: () => s.default.toggleSelfMute(),
                    keyEvents: {
                        keyup: !0,
                        keydown: !1
                    }
                },
                [g.GlobalKeybindActions.TOGGLE_DEAFEN]: {
                    onTrigger() {
                        s.default.toggleSelfDeaf()
                    },
                    keyEvents: {
                        keyup: !0,
                        keydown: !1
                    }
                },
                [g.GlobalKeybindActions.TOGGLE_VOICE_MODE]: {
                    onTrigger() {
                        let e = I.default.getMode() === g.InputModes.PUSH_TO_TALK ? g.InputModes.VOICE_ACTIVITY : g.InputModes.PUSH_TO_TALK;
                        s.default.setMode(e)
                    },
                    keyEvents: {
                        keyup: !0,
                        keydown: !1
                    }
                },
                [g.GlobalKeybindActions.TOGGLE_OVERLAY]: {
                    onTrigger() {
                        let e = N.default.enabled;
                        i.default.setEnabled(!e)
                    },
                    keyEvents: {
                        keyup: !0,
                        keydown: !1
                    }
                },
                [g.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK]: {
                    onTrigger(e) {
                        let t = (0, p.default)();
                        null != t && (e ? i.default.setUILocked(!A.default.isUILocked(t), t) : i.default.setInputLocked(!N.default.isInputLocked(t), t))
                    },
                    keyEvents: {
                        keyup: !0,
                        keydown: !0
                    }
                },
                [g.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET]: {
                    onTrigger() {
                        let e = N.default.getFocusedPID(),
                            t = null != e;
                        null != e && t && A.default.isPinned(g.OverlayWidgets.TEXT) && N.default.isReady(e) && N.default.isInputLocked(e) && i.default.activateRegion(g.OverlayActiveRegions.TEXT_WIDGET)
                    },
                    keyEvents: {
                        keyup: !0,
                        keydown: !1
                    }
                },
                [g.GlobalKeybindActions.TOGGLE_GO_LIVE_STREAMING]: {
                    onTrigger() {
                        let e = T.default.getCurrentUserActiveStream();
                        if (null != e) return (0, r.stopStream)((0, E.encodeStreamKey)(e));
                        (0, f.default)()
                    },
                    keyEvents: {
                        keyup: !0,
                        keydown: !1
                    }
                },
                [g.GlobalKeybindActions.TOGGLE_STREAMER_MODE]: {
                    onTrigger() {
                        o.default.setEnabled(!S.default.enabled)
                    },
                    keyEvents: {
                        keyup: !0,
                        keydown: !1
                    }
                },
                [g.GlobalKeybindActions.NAVIGATE_BACK]: {
                    onTrigger: () => (0, _.back)(),
                    keyEvents: {
                        keyup: !0,
                        keydown: !1,
                        focused: !0,
                        blurred: !1
                    }
                },
                [g.GlobalKeybindActions.NAVIGATE_FORWARD]: {
                    onTrigger: () => (0, _.forward)(),
                    keyEvents: {
                        keyup: !0,
                        keydown: !1,
                        focused: !0,
                        blurred: !1
                    }
                },
                [g.GlobalKeybindActions.SOUNDBOARD]: {
                    onTrigger: () => {
                        if (!(0, h.canSelectedVoiceChannelUseSoundboard)()) return;
                        let e = (0, p.default)();
                        null != e && (A.default.isUILocked(e) ? (0, C.openSoundboardInOverlay)(!0, e) : (0, C.closeSoundboardInOverlay)(e))
                    },
                    keyEvents: {
                        keyup: !0,
                        keydown: !1
                    }
                },
                [g.GlobalKeybindActions.SOUNDBOARD_HOLD]: {
                    onTrigger: e => {
                        if (!(0, h.canSelectedVoiceChannelUseSoundboard)()) return;
                        let t = (0, p.default)();
                        if (null != t) {
                            e ? (0, C.openSoundboardInOverlay)(!1, t) : (0, C.closeSoundboardInOverlay)(t);
                            return
                        }
                    },
                    keyEvents: {
                        keyup: !0,
                        keydown: !0
                    }
                },
                [g.GlobalKeybindActions.SAVE_CLIP]: {
                    onTrigger: () => {
                        let e = (0, d.areClipsEnabled)();
                        e && (m.default.track(g.AnalyticEvents.CLIP_SAVE_KEYBIND_PRESSED), (0, c.saveClip)())
                    },
                    keyEvents: {
                        keyup: !1,
                        keydown: !0
                    }
                },
                [g.GlobalKeybindActions.SWITCH_TO_VOICE_CHANNEL]: {
                    onTrigger(e, t) {
                        let {
                            params: {
                                channelId: n
                            }
                        } = t;
                        null != n && l.default.selectVoiceChannel(n)
                    },
                    keyEvents: {
                        keyup: !0,
                        keydown: !1,
                        blurred: !0,
                        focused: !0
                    }
                },
                [g.GlobalKeybindActions.DISCONNECT_FROM_VOICE_CHANNEL]: {
                    onTrigger() {
                        l.default.selectVoiceChannel(null)
                    },
                    keyEvents: {
                        keyup: !0,
                        keydown: !1,
                        blurred: !0,
                        focused: !0
                    }
                }
            };
            class L extends u.default {
                _initialize() {
                    a.default.wait(() => a.default.dispatch({
                        type: "KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS",
                        keybinds: O
                    }))
                }
                _terminate() {}
            }
            var v = new L