            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var s = n("913144"),
                i = n("504385"),
                a = n("439141"),
                u = n("533222"),
                o = n("42887"),
                d = n("227602"),
                r = n("471671"),
                l = n("599110"),
                c = n("709681"),
                p = n("12307"),
                f = n("49111"),
                _ = n("353927");

            function m() {
                (0, c.playSound)("mention3")
            }

            function h(e, t, n, s, i) {
                if (t === n) return;
                let a = e[t],
                    o = e[n];
                l.default.track(f.AnalyticEvents.MEDIA_DEVICE_CHANGED, {
                    device_from_name: u.default.getCertifiedDeviceName(t, null != a ? a.name : ""),
                    device_to_name: u.default.getCertifiedDeviceName(n, null != o ? o.name : ""),
                    device_type: s,
                    device_is_certified: u.default.isCertified(n),
                    location: i
                })
            }
            let E = {
                isNotSupported: () => !1,
                enable: e => Promise.resolve(!0)
            };
            E = n("412905");
            let {
                enable: g,
                isNotSupported: D
            } = E;
            var S = {
                enable: g,
                toggleSelfMute() {
                    let {
                        context: e = _.MediaEngineContextTypes.DEFAULT,
                        syncRemote: t = !0,
                        usedKeybind: n = !1
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (D()) return Promise.resolve();
                    let i = d.default.getKeybindForAction(f.GlobalKeybindActions.TOGGLE_MUTE, !1, !0);
                    return (l.default.track(f.AnalyticEvents.INPUT_MUTE_TOGGLED, {
                        enabled: !o.default.isSelfMute(),
                        custom_keybind_assigned: null != i && i.id !== d.DEFAULT_MUTE_KEYBIND.id,
                        used_keybind: n,
                        app_in_focus: r.default.isFocused(),
                        overlay_activated: __OVERLAY__
                    }), o.default.isEnabled()) ? s.default.dispatch({
                        type: "AUDIO_TOGGLE_SELF_MUTE",
                        context: e,
                        syncRemote: t
                    }) : this.enable(!0)
                },
                setTemporarySelfMute(e) {
                    !D() && s.default.dispatch({
                        type: "AUDIO_SET_TEMPORARY_SELF_MUTE",
                        mute: e
                    })
                },
                toggleSelfDeaf() {
                    let {
                        context: e = _.MediaEngineContextTypes.DEFAULT,
                        syncRemote: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    !D() && s.default.dispatch({
                        type: "AUDIO_TOGGLE_SELF_DEAF",
                        context: e,
                        syncRemote: t
                    })
                },
                toggleLocalMute(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.MediaEngineContextTypes.DEFAULT;
                    !D() && s.default.dispatch({
                        type: "AUDIO_TOGGLE_LOCAL_MUTE",
                        context: t,
                        userId: e
                    })
                },
                toggleLocalSoundboardMute(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.MediaEngineContextTypes.DEFAULT;
                    s.default.dispatch({
                        type: "AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE",
                        context: t,
                        userId: e
                    })
                },
                setDisableLocalVideo(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.MediaEngineContextTypes.DEFAULT,
                        i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                        a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    !D() && s.default.dispatch({
                        type: "AUDIO_SET_LOCAL_VIDEO_DISABLED",
                        context: n,
                        userId: e,
                        videoToggleState: t,
                        persist: i,
                        isAutomatic: a
                    })
                },
                setLocalVolume(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.MediaEngineContextTypes.DEFAULT;
                    s.default.dispatch({
                        type: "AUDIO_SET_LOCAL_VOLUME",
                        context: n,
                        userId: e,
                        volume: (0, i.snapVolumeToDefault)(t, n)
                    })
                },
                setLocalPan(e, t, n) {
                    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : _.MediaEngineContextTypes.DEFAULT;
                    s.default.dispatch({
                        type: "AUDIO_SET_LOCAL_PAN",
                        context: i,
                        userId: e,
                        left: t,
                        right: n
                    })
                },
                setMode(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.MediaEngineContextTypes.DEFAULT;
                    !D() && s.default.dispatch({
                        type: "AUDIO_SET_MODE",
                        context: n,
                        mode: e,
                        options: {
                            ...o.default.getModeOptions(n),
                            ...t
                        }
                    })
                },
                setInputVolume(e) {
                    !D() && s.default.dispatch({
                        type: "AUDIO_SET_INPUT_VOLUME",
                        volume: e
                    })
                },
                setOutputVolume(e) {
                    !D() && s.default.dispatch({
                        type: "AUDIO_SET_OUTPUT_VOLUME",
                        volume: e
                    })
                },
                setInputDevice(e, t) {
                    if (!D()) {
                        if (null != t) {
                            let n = o.default.getInputDevices(),
                                s = o.default.getInputDeviceId();
                            h(n, s, e, "Audio Input", t)
                        }
                        s.default.dispatch({
                            type: "AUDIO_SET_INPUT_DEVICE",
                            id: e
                        }), m()
                    }
                },
                setOutputDevice(e, t) {
                    if (!D()) {
                        if (null != t) {
                            let n = o.default.getOutputDevices(),
                                s = o.default.getOutputDeviceId();
                            h(n, s, e, "Audio Output", t)
                        }
                        s.default.dispatch({
                            type: "AUDIO_SET_OUTPUT_DEVICE",
                            id: e
                        }), m()
                    }
                },
                setVideoDevice(e, t) {
                    if (!D()) {
                        if (null != t) {
                            let n = o.default.getVideoDevices(),
                                s = o.default.getVideoDeviceId();
                            h(n, s, e, "Video", t)
                        }
                        s.default.dispatch({
                            type: "MEDIA_ENGINE_SET_VIDEO_DEVICE",
                            id: e
                        })
                    }
                },
                setEchoCancellation(e, t) {
                    !D() && s.default.dispatch({
                        type: "AUDIO_SET_ECHO_CANCELLATION",
                        enabled: e,
                        location: t
                    })
                },
                setLoopback(e) {
                    !D() && s.default.dispatch({
                        type: "AUDIO_SET_LOOPBACK",
                        enabled: e
                    })
                },
                setNoiseSuppression(e, t) {
                    !D() && s.default.dispatch({
                        type: "AUDIO_SET_NOISE_SUPPRESSION",
                        enabled: e,
                        location: t
                    })
                },
                setNoiseCancellation(e, t) {
                    !D() && (s.default.dispatch({
                        type: "AUDIO_SET_NOISE_CANCELLATION",
                        enabled: e,
                        location: t
                    }), s.default.dispatch({
                        type: "AUDIO_SET_NOISE_SUPPRESSION",
                        enabled: !e,
                        location: t
                    }))
                },
                setAutomaticGainControl(e, t) {
                    !D() && s.default.dispatch({
                        type: "AUDIO_SET_AUTOMATIC_GAIN_CONTROL",
                        enabled: e,
                        location: t
                    })
                },
                setExperimentalEncoders(e) {
                    !D() && s.default.dispatch({
                        type: "MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS",
                        enabled: e
                    })
                },
                setHardwareH264(e) {
                    !D() && s.default.dispatch({
                        type: "MEDIA_ENGINE_SET_HARDWARE_H264",
                        enabled: e
                    })
                },
                setAttenuation(e, t, n) {
                    !D() && s.default.dispatch({
                        type: "AUDIO_SET_ATTENUATION",
                        attenuation: e,
                        attenuateWhileSpeakingSelf: t,
                        attenuateWhileSpeakingOthers: n
                    })
                },
                setQoS(e) {
                    !D() && s.default.dispatch({
                        type: "AUDIO_SET_QOS",
                        enabled: e
                    })
                },
                reset() {
                    !D() && s.default.dispatch({
                        type: "AUDIO_RESET"
                    })
                },
                setSilenceWarning(e) {
                    !D() && s.default.dispatch({
                        type: "AUDIO_SET_DISPLAY_SILENCE_WARNING",
                        enabled: e
                    })
                },
                setDebugLogging(e) {
                    !D() && s.default.dispatch({
                        type: "AUDIO_SET_DEBUG_LOGGING",
                        enabled: e
                    })
                },
                setVideoHook(e) {
                    !D() && s.default.dispatch({
                        type: "MEDIA_ENGINE_SET_VIDEO_HOOK",
                        enabled: e
                    })
                },
                setExperimentalSoundshare(e) {
                    !D() && s.default.dispatch({
                        type: "MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE",
                        enabled: e
                    })
                },
                setAudioSubsystem(e) {
                    !D() && s.default.dispatch({
                        type: "AUDIO_SET_SUBSYSTEM",
                        subsystem: e
                    })
                },
                setVideoEnabled(e) {
                    (0, a.applyInitialVideoBackgroundOption)(), s.default.dispatch({
                        type: "MEDIA_ENGINE_SET_VIDEO_ENABLED",
                        enabled: e
                    })
                },
                setGoLiveSource(e) {
                    (null == e ? void 0 : e.qualityOptions) != null && (0, p.trackStreamSettingsUpdate)(e.qualityOptions.preset, e.qualityOptions.resolution, e.qualityOptions.frameRate), s.default.dispatch({
                        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                        settings: e
                    })
                },
                setOpenH264(e) {
                    !D() && s.default.dispatch({
                        type: "MEDIA_ENGINE_SET_OPEN_H264",
                        enabled: e
                    })
                },
                setAV1Enabled(e) {
                    !D() && s.default.dispatch({
                        type: "MEDIA_ENGINE_SET_AV1",
                        enabled: e
                    })
                },
                setH265Enabled(e) {
                    !D() && s.default.dispatch({
                        type: "MEDIA_ENGINE_SET_H265",
                        enabled: e
                    })
                },
                setAecDump(e) {
                    !D() && s.default.dispatch({
                        type: "MEDIA_ENGINE_SET_AEC_DUMP",
                        enabled: e
                    })
                },
                interact() {
                    !D() && s.default.dispatch({
                        type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
                        required: !1
                    })
                },
                enableSoundshare() {
                    !D() && s.default.dispatch({
                        type: "MEDIA_ENGINE_ENABLE_SOUNDSHARE"
                    })
                }
            }