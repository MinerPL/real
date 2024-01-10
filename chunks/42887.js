            "use strict";
            let i, r, s, a;
            n.r(t), n.d(t, {
                default: function() {
                    return t_
                }
            }), n("222007"), n("808653"), n("506083"), n("424973"), n("256955");
            var o, l, u, c, d = n("627445"),
                f = n.n(d),
                E = n("917351"),
                h = n.n(E),
                p = n("570277"),
                _ = n.n(p),
                S = n("446674"),
                m = n("773364"),
                T = n("95410"),
                g = n("862337"),
                I = n("913144"),
                C = n("49671"),
                v = n("6193"),
                A = n("386045"),
                R = n("18346"),
                N = n("605250"),
                O = n("808122"),
                D = n("733589"),
                y = n("933034"),
                P = n("746800"),
                L = n("584687");
            n("334280");
            var b = n("705500");
            n("715440");
            var M = n("238847"),
                U = n("981699"),
                G = n("352705"),
                w = n("140622"),
                k = n("16001"),
                x = n("631508"),
                F = n("368765"),
                V = n("403770"),
                B = n("940146"),
                H = n("353500"),
                j = n("103979"),
                Y = n("665862"),
                W = n("122530"),
                K = n("928609"),
                z = n("891760"),
                q = n("374363"),
                X = n("599110"),
                Q = n("922932"),
                Z = n("773336"),
                J = n("286235"),
                $ = n("50885"),
                ee = n("13798"),
                et = n("271938"),
                en = n("366679"),
                ei = n("533222"),
                er = n("42203"),
                es = n("760190"),
                ea = n("855867"),
                eo = n("945956"),
                el = n("568307"),
                eu = n("123647"),
                ec = n("49111"),
                ed = n("706530"),
                ef = n("180524"),
                eE = n("397336"),
                eh = n("353927"),
                ep = n("782340");
            let e_ = new N.default("MediaEngineStore");
            (u = o || (o = {}))[u.DETACHED = 0] = "DETACHED", u[u.WAITING = 1] = "WAITING", u[u.ATTACHED = 2] = "ATTACHED", u[u.STARTED = 3] = "STARTED", u[u.PLAYING = 4] = "PLAYING", u[u.SILENCE = 5] = "SILENCE", (c = l || (l = {}))[c.FAILED = -1] = "FAILED", c[c.OK = 0] = "OK", c[c.ACE_INSTALL_FAILED = 4] = "ACE_INSTALL_FAILED", c[c.ACE_NOT_AUTHORIZED = 5] = "ACE_NOT_AUTHORIZED";
            let eS = "MediaEngineStore",
                em = {
                    left: 1,
                    right: 1
                };

            function eT() {
                let e = {
                    mode: ec.InputModes.VOICE_ACTIVITY,
                    modeOptions: {
                        threshold: -60,
                        autoThreshold: Z.isPlatformEmbedded || __OVERLAY__,
                        vadUseKrisp: !0,
                        vadLeading: 5,
                        vadTrailing: 25,
                        delay: 20,
                        shortcut: []
                    },
                    vadUseKrispSettingVersion: 0,
                    ncUseKrispSettingVersion: 0,
                    ncUseKrispjsSettingVersion: 0,
                    av1EnabledSettingVersion: 0,
                    mute: !1,
                    deaf: !1,
                    echoCancellation: !0,
                    noiseSuppression: !1,
                    automaticGainControl: !0,
                    noiseCancellation: !0,
                    experimentalEncoders: !1,
                    hardwareH264: !0,
                    silenceWarning: !0,
                    attenuation: 0,
                    attenuateWhileSpeakingSelf: !1,
                    attenuateWhileSpeakingOthers: !0,
                    localMutes: {},
                    disabledLocalVideos: {},
                    videoToggleStateMap: {},
                    localVolumes: {},
                    localPans: {},
                    inputVolume: eh.DEFAULT_VOLUME,
                    outputVolume: eh.DEFAULT_VOLUME,
                    inputDeviceId: eh.DEFAULT_DEVICE_ID,
                    outputDeviceId: eh.DEFAULT_DEVICE_ID,
                    videoDeviceId: eh.DEFAULT_DEVICE_ID,
                    qos: !1,
                    qosMigrated: !1,
                    videoHook: eg.supports(eh.Features.VIDEO_HOOK),
                    experimentalSoundshare2: null,
                    openH264: !0,
                    av1Enabled: !0,
                    h265Enabled: !0,
                    vadThrehsoldMigrated: !1,
                    aecDumpEnabled: !1
                };
                return e
            }
            let eg = (0, m.initializeMediaEngine)((0, m.determineMediaEngine)()),
                eI = {},
                eC = new Set([eh.MediaEngineContextTypes.DEFAULT]),
                ev = eg.supports(eh.Features.AUTO_ENABLE),
                eA = !1,
                eR = eh.MediaEngineContextTypes.STREAM,
                eN = {
                    [eh.DEFAULT_DEVICE_ID]: tn(ep.default.Messages.NO_INPUT_DEVICES)
                },
                eO = {
                    [eh.DEFAULT_DEVICE_ID]: tn(ep.default.Messages.NO_OUTPUT_DEVICES)
                },
                eD = {
                    [eh.DEFAULT_DEVICE_ID]: tn(ep.default.Messages.NO_VIDEO_DEVICES)
                },
                ey = !1,
                eP = !1,
                eL = !1,
                eb = !1,
                eM = !1,
                eU = eh.DISABLED_DEVICE_ID,
                eG = !1,
                ew = !1,
                ek = !1,
                ex = null,
                eF = !1,
                eV = !1,
                eB = !1,
                eH = !1,
                ej = !1,
                eY = null,
                eW = !1,
                eK = ec.SoundshareEnableState.NOT_ENABLED,
                ez = !1,
                eq = !1;
            K.default.hasPermission(ef.NativePermissionTypes.AUDIO, {
                showAuthorizationError: !1
            }), K.default.hasPermission(ef.NativePermissionTypes.CAMERA, {
                showAuthorizationError: !1
            });
            let eX = new Set,
                eQ = !1,
                eZ = !1,
                eJ = {},
                e$ = {};

            function e0() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.DEFAULT,
                    t = eI[e];
                return null == t && (t = eT(), eI[e] = t), t
            }

            function e1(e) {
                let t = e0(e.context);
                e.setInputMode(t.mode, {
                    vadThreshold: t.modeOptions.threshold,
                    vadAutoThreshold: t.modeOptions.autoThreshold,
                    vadUseKrisp: t.modeOptions.vadUseKrisp && function() {
                        return ej || !1
                    }(),
                    vadLeading: t.modeOptions.vadLeading,
                    vadTrailing: t.modeOptions.vadTrailing,
                    pttReleaseDelay: t.modeOptions.delay
                })
            }

            function e2(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.DEFAULT_VOLUME;
                return h.clamp(e, 0, t)
            }

            function e4(e) {
                let t = e0(e.context),
                    n = !ev || t.mute || t.deaf;
                e.context === eh.MediaEngineContextTypes.DEFAULT && (n = n || ey || eP || eL || !K.default.didHavePermission(ef.NativePermissionTypes.AUDIO)), e.setSelfMute(n), e.setSelfDeaf(t.deaf)
            }

            function e3() {
                var e, t, n;
                let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eM,
                    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
                    o = s;
                if ((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == a ? void 0 : null === (e = a.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, Z.isWindows)() && v.cancelAttachToProcess(o.desktopSource.soundshareId), eg.setGoLiveSource(null, eR)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == a ? void 0 : null === (t = a.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == a ? void 0 : null === (n = a.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eg.setGoLiveSource(null, eR), (eM || r) && (eU = (eM = r) ? tr(eD, e0().videoDeviceId) : eh.DISABLED_DEVICE_ID, eg.setVideoInputDevice(eU)), s = a, null != a) {
                    let e = {
                        resolution: a.quality.resolution,
                        frameRate: a.quality.frameRate
                    };
                    if (null != a.desktopSource) {
                        let {
                            useQuartzCapturer: t
                        } = x.default.getCurrentConfig({
                            location: "f627ab_1"
                        }, {
                            autoTrackExposure: !1
                        }), {
                            hdrCaptureMode: n
                        } = U.default.getCurrentConfig({
                            location: "f627ab_2"
                        }, {
                            autoTrackExposure: !1
                        }), r = e0().videoHook, s = eg.supports(eh.Features.CAPTURE_TIMEOUT_EXPERIMENTS), {
                            videoHookStaleFrameTimeoutMs: o
                        } = B.default.getConfig(s && r, "e225cfdf5_vh1", !0), {
                            graphicsCaptureStaleFrameTimeoutMs: l
                        } = Y.default.getConfig(s && e7(), "e225cfdf5_wgc2", !0);
                        eg.setGoLiveSource({
                            desktopDescription: {
                                id: a.desktopSource.id,
                                soundshareId: a.desktopSource.soundshareId,
                                useVideoHook: r,
                                useGraphicsCapture: e7(),
                                useLoopback: i.getExperimentalSoundshare(),
                                useQuartzCapturer: t,
                                allowScreenCaptureKit: e8(!0),
                                videoHookStaleFrameTimeoutMs: o,
                                graphicsCaptureStaleFrameTimeoutMs: l,
                                hdrCaptureMode: n
                            },
                            quality: e
                        }, eR)
                    }
                    null != a.cameraSource && eg.setGoLiveSource({
                        cameraDescription: {
                            videoDeviceGuid: a.cameraSource.videoDeviceGuid,
                            audioDeviceGuid: a.cameraSource.audioDeviceGuid
                        },
                        quality: e
                    }, eR)
                }
            }

            function e6(e, t, n, i) {
                var r;
                let s = null !== (r = null == e ? void 0 : e.soundshareSession) && void 0 !== r ? r : "";
                null == e$[s] && (e$[s] = new Set);
                let a = null != t && !e$[s].has(t);
                a && e$[s].add(t), (null == t || a) && X.default.track(ec.AnalyticEvents.SOUNDSHARE_FAILED, {
                    soundshare_failure_code: t,
                    soundshare_failure_reason: n,
                    soundshare_failure_will_retry: i,
                    ...(0, y.default)(e)
                })
            }

            function e5(e) {
                let t = e0(),
                    n = t.inputDeviceId;
                if (e.setEchoCancellation(ei.default.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(ei.default.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(ei.default.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, Z.isWeb)()) {
                    let n = t.noiseCancellation ? -150 : -100;
                    e.setSilenceThreshold(n)
                }
            }

            function e7() {
                return (0, Z.isWindows)() && _.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, ed.WINDOWS_GRAPHICS_CAPTURE_VERSION)
            }

            function e8(e) {
                return !!((0, Z.isMac)() && eg.supports(eh.Features.SCREEN_CAPTURE_KIT) && _.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, ed.DARWIN_SCKIT_VERSION)) && F.default.getCurrentConfig({
                    location: "screenCaptureKitEnabled"
                }, {
                    autoTrackExposure: e
                }).allowScreenCaptureKit
            }
            let e9 = new class {
                start() {
                    !this.started && (this.started = !0, eg.on(m.MediaEngineEvent.Silence, this.handleSilence))
                }
                stop() {
                    this.started && (this.started = !1, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), eg.removeListener(m.MediaEngineEvent.Silence, this.handleSilence), I.default.dispatch({
                        type: "AUDIO_INPUT_DETECTED",
                        inputDetected: null
                    }))
                }
                update() {
                    let e = e0();
                    !eF && eo.default.getState() === ec.RTCConnectionStates.RTC_CONNECTED && e.mode === ec.InputModes.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop()
                }
                reset() {
                    this.stop(), this.update()
                }
                constructor() {
                    this.noVoiceTimeout = 5e3, this.voiceTimeout = 1500, this.started = !1, this.handleSilence = e => {
                        let t = !e;
                        null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = setTimeout(() => {
                            this.stateChangeTimeout = null, this.started && (I.default.dispatch({
                                type: "AUDIO_INPUT_DETECTED",
                                inputDetected: t
                            }), e && (eV = !0))
                        }, t ? this.voiceTimeout : this.noVoiceTimeout)
                    }
                }
            };

            function te(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.MediaEngineContextTypes.DEFAULT,
                    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    i = e0(t);
                return Object.assign(i, e), !__OVERLAY__ && n && T.default.set(eS, eI), i
            }

            function tt() {
                !ev && eg.enable().then(() => I.default.dispatch({
                    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                    enabled: !0,
                    unmute: !1
                }))
            }

            function tn(e) {
                return {
                    id: eh.DEFAULT_DEVICE_ID,
                    index: 0,
                    name: e,
                    disabled: !0
                }
            }

            function ti(e, t) {
                if (0 === e.length) {
                    let e = tn(t);
                    return {
                        [e.id]: e
                    }
                }
                return h(e).map(e => ({
                    id: e.id,
                    index: e.index,
                    name: e.name,
                    disabled: !1
                })).keyBy("id").value()
            }

            function tr(e, t) {
                var n;
                let i = null !== (n = e[t]) && void 0 !== n ? n : h(e).values().first();
                return null != i ? i.id : t
            }

            function ts() {
                var e, t;
                let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    i = null !== (e = q.default.settings.audioContextSettings) && void 0 !== e ? e : {
                        user: {},
                        stream: {}
                    };
                for (let e of Object.keys(i)) {
                    let r = e === eE.ProtoAudioSettingsContextTypes.USER ? eh.MediaEngineContextTypes.DEFAULT : eh.MediaEngineContextTypes.STREAM,
                        s = r === eh.MediaEngineContextTypes.STREAM ? eh.DEFAULT_STREAM_VOLUME : eh.DEFAULT_VOLUME,
                        a = null !== (t = i[e]) && void 0 !== t ? t : {},
                        {
                            localMutes: o,
                            localVolumes: l
                        } = e0(r);
                    for (let [e, t] of Object.entries(a)) t.muted ? o[e] = !0 : delete o[e], t.volume !== s ? l[e] = t.volume : delete l[e], eg.eachConnection(n => {
                        n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
                    }, r);
                    if (n) {
                        let e = new Set([...Object.keys(o), ...Object.keys(l)]);
                        for (let t of e) null == a[t] && (delete o[t], delete l[t], eg.eachConnection(e => {
                            e.setLocalVolume(t, s), e.setLocalMute(t, !1)
                        }, r))
                    }
                    te({
                        localMutes: o,
                        localVolumes: l
                    }, r)
                }
            }

            function ta(e) {
                if (null == i) return e_.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
                    soundshareId: null,
                    soundshareSession: ""
                };
                {
                    let t = i.getExperimentalSoundshare() ? e : Q.default.getAudioPid(e),
                        n = "";
                    return null != t && (n = Q.default.generateSessionFromPid(t)), {
                        soundshareId: t,
                        soundshareSession: n
                    }
                }
            }

            function to(e, t) {
                (0, Z.isWindows)() && v.attachToProcess(e, {
                    soundshare_session: t
                }).then(t => {
                    null != t && !el.default.shouldContinueWithoutElevatedProcessForPID(e) && I.default.wait(() => {
                        I.default.dispatch({
                            type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                            errorMessage: t
                        })
                    })
                })
            }

            function tl(e) {
                let t = e0();
                X.default.track(ec.AnalyticEvents.VOICE_PROCESSING, {
                    echo_cancellation: t.echoCancellation,
                    noise_cancellation: t.noiseCancellation,
                    noise_suppression: t.noiseSuppression,
                    automatic_gain_control: t.automaticGainControl,
                    location: e
                })
            }

            function tu() {
                let e = e0(),
                    t = e.inputDeviceId,
                    n = ei.default.hasEchoCancellation(t) || e.echoCancellation,
                    i = ei.default.hasNoiseSuppression(t) || e.noiseSuppression,
                    r = ei.default.hasAutomaticGainControl(t) || e.automaticGainControl,
                    s = e.noiseCancellation;
                eg.setLoopback(eZ, {
                    echoCancellation: n,
                    noiseSuppression: i,
                    automaticGainControl: r,
                    noiseCancellation: s
                })
            }

            function tc() {
                return ej || !1
            }
            async function td() {
                try {
                    await $.default.ensureModule("discord_krisp"), $.default.requireModule("discord_krisp"), ej = !0, i.emitChange()
                } catch (t) {
                    e_.warn("Failed to load Krisp module: ".concat(t.message)), J.default.captureException(t);
                    let e = eh.NoiseCancellerError.INITIALIZED;
                    if (t.message.includes(": ")) {
                        let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
                        e = isNaN(n) || 0 === n ? eh.NoiseCancellerError.INITIALIZED : n
                    }
                    X.default.track(ec.AnalyticEvents.VOICE_PROCESSING, {
                        noise_canceller_error: e
                    }), te({
                        noiseCancellation: !1
                    })
                } finally {
                    eH = !1
                }
            }

            function tf(e) {
                let {
                    section: t
                } = e;
                return t === ec.UserSettingsSections.VOICE && tt(), !1
            }

            function tE(e) {
                eK = 0 === e ? ec.SoundshareEnableState.ENABLED : 5 === e ? ec.SoundshareEnableState.ENABLING : -1 === e || 4 === e ? ec.SoundshareEnableState.FAILED_TO_ENABLE : ec.SoundshareEnableState.NOT_ENABLED
            }
            async function th() {
                if (eK === ec.SoundshareEnableState.ENABLING) return;
                eK = ec.SoundshareEnableState.ENABLING;
                let e = {};
                try {
                    let t = await eg.enableSoundshare();
                    tE(t.code), e = {
                        status_code: t.code,
                        message: t.message
                    }
                } catch (t) {
                    e_.warn("Failed to enable macOS soundshare: ".concat(t)), tE(-1), e = {
                        status_code: -1,
                        message: "".concat(t)
                    }
                } finally {
                    i.emitChange(), X.default.track(ec.AnalyticEvents.SOUNDSHARE_ENABLE, e)
                }
            }
            class tp extends S.default.Store {
                initialize() {
                    eg.on(m.MediaEngineEvent.Connection, e => {
                        let {
                            maxSyncDelayOverride: t
                        } = k.default.getCurrentConfig({
                            location: "f627ab_3"
                        }, {
                            autoTrackExposure: !1
                        });
                        t > 0 && eg.setMaxSyncDelayOverride(t), e1(e), e4(e), e5(e);
                        let n = e0();
                        e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers), e.setQoS(n.qos), e.setExperimentalEncoders(n.experimentalEncoders), e.setHardwareH264(n.hardwareH264);
                        let {
                            useExperimentalRateControl: r
                        } = H.default.getCurrentConfig({
                            location: "f627ab_4"
                        }, {
                            autoTrackExposure: !1
                        });
                        r && e.setExperimentFlag(eh.ExperimentFlags.VIDEOTOOLBOX_RATE_CONTROL, !0);
                        {
                            let {
                                signalH265SupportMacOS: t
                            } = b.default.getCurrentConfig({
                                location: "f627ab_8"
                            }, {
                                autoTrackExposure: !0
                            });
                            t && e.setExperimentFlag(eh.ExperimentFlags.SIGNAL_H265_SUPPORT, !0);
                            let {
                                signalH265SupportNvenc: n
                            } = M.default.getCurrentConfig({
                                location: "f627ab_9"
                            }, {
                                autoTrackExposure: !0
                            });
                            n && e.setExperimentFlag(eh.ExperimentFlags.SIGNAL_H265_SUPPORT, !0)
                        }
                        let {
                            signalAV1Support: a
                        } = P.default.getCurrentConfig({
                            location: "f627ab_10"
                        }, {
                            autoTrackExposure: !0
                        });
                        a && e.setExperimentFlag(eh.ExperimentFlags.SIGNAL_AV1_SUPPORT, !0);
                        let {
                            allowSettingFullbandAndroid: o
                        } = w.default.getCurrentConfig({
                            location: "f627ab_14"
                        }, {
                            autoTrackExposure: !0
                        });
                        if (o && eg.setHasFullbandPerformance((0, O.hasPerformanceForKrispFullband)()), (0, R.default)(i)) {
                            let t = A.default.getSettings();
                            e.setExperimentFlag(eh.ExperimentFlags.STREAMER_CLIP, t.clipsEnabled);
                            let {
                                enableViewerClipping: n
                            } = j.default.getCurrentConfig({
                                location: "f627ab_15"
                            }, {
                                autoTrackExposure: !1
                            });
                            e.setViewerSideClip(n);
                            let i = eo.default.getGuildId(),
                                r = 0;
                            null != i && e.context === eh.MediaEngineContextTypes.STREAM && (r = G.default.getCurrentConfig({
                                guildId: i,
                                location: "MediaEngineStore_SetupMediaEngine"
                            }, {
                                autoTrackExposure: !0
                            }).keyFrameIntervalMs), e.setClipsKeyFrameInterval(n && t.viewerClipsEnabled ? eh.VIEWERSIDE_CLIP_KFI_MS : r)
                        }
                        for (let t of (n = e0(e.context), e.setPostponeDecodeLevel(100), Object.keys(n.localMutes))) t !== et.default.getId() && e.setLocalMute(t, n.localMutes[t]);
                        for (let t of Object.keys(n.localVolumes)) t !== et.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
                        for (let t of Object.keys(n.localPans)) {
                            let i = n.localPans[t];
                            e.setLocalPan(t, i.left, i.right)
                        }
                        for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
                        e.on(m.BaseConnectionEvent.Speaking, (t, n) => {
                            I.default.dispatch({
                                type: "SPEAKING",
                                context: e.context,
                                userId: t,
                                speakingFlags: n
                            })
                        }), e.context === eh.MediaEngineContextTypes.DEFAULT && (eG = !1, e.on(m.BaseConnectionEvent.SpeakingWhileMuted, () => {
                            eG = !0, i.emitChange()
                        })), e.on(m.BaseConnectionEvent.DesktopSourceEnd, () => {
                            I.default.dispatch({
                                type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                                settings: {
                                    context: e.context
                                }
                            })
                        }), e.on(m.BaseConnectionEvent.SoundshareAttached, () => {
                            (null == s ? void 0 : s.desktopSource) != null && X.default.track(ec.AnalyticEvents.SOUNDSHARE_ATTACHED, (0, y.default)(null == s ? void 0 : s.desktopSource))
                        }), e.on(m.BaseConnectionEvent.SoundshareFailed, e => {
                            let {
                                failureCode: t,
                                failureReason: n,
                                willRetry: i
                            } = e;
                            e6(null == s ? void 0 : s.desktopSource, t, n, i)
                        }), e.on(m.BaseConnectionEvent.SoundshareSpeaking, () => {
                            (null == s ? void 0 : s.desktopSource) != null && (X.default.track(ec.AnalyticEvents.SOUNDSHARE_TRANSMITTING, (0, y.default)(null == s ? void 0 : s.desktopSource)), null != ea.default.getHookError(ec.MediaEngineHookTypes.SOUND) && I.default.wait(() => I.default.dispatch({
                                type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
                            })))
                        });
                        let l = new g.Timeout;
                        e.on(m.BaseConnectionEvent.SoundshareTrace, e => {
                            switch (e.type) {
                                case "soundshare_attach_requested":
                                    l.start(5e3, () => {
                                        I.default.dispatch({
                                            type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                                            errorMessage: "Sound Hook Failed"
                                        })
                                    });
                                    break;
                                case "soundshare_recv_failed":
                                    let t = e.reason,
                                        n = e.code,
                                        i = e.retry;
                                    (null == s ? void 0 : s.desktopSource) != null && (e6(null == s ? void 0 : s.desktopSource, n, t, i), !i && (l.stop(), I.default.wait(() => I.default.dispatch({
                                        type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                                        errorMessage: t,
                                        errorCode: n
                                    }))));
                                    break;
                                case "soundshare_state_transition":
                                    4 === e.newState && (l.stop(), I.default.wait(() => I.default.dispatch({
                                        type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
                                    })))
                            }
                        }), e.on(m.BaseConnectionEvent.InteractionRequired, e => {
                            I.default.dispatch({
                                type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
                                required: e
                            })
                        }), e.on(m.BaseConnectionEvent.VideoHookInitialize, (e, t, n, i, r, a) => {
                            (null == s ? void 0 : s.desktopSource) != null && X.default.track(ec.AnalyticEvents.VIDEOHOOK_INITIALIZED, {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: i,
                                success: r,
                                reinitialization: a,
                                ...(0, y.default)(null == s ? void 0 : s.desktopSource)
                            })
                        }), e.on(m.BaseConnectionEvent.NoiseCancellationError, e => {
                            e_.warn("noisecancellererror event: ".concat(e)), eW = !0, X.default.track(ec.AnalyticEvents.VOICE_PROCESSING, {
                                noise_canceller_error: e
                            }), I.default.dispatch({
                                type: "AUDIO_SET_NOISE_SUPPRESSION",
                                enabled: !0
                            }), I.default.dispatch({
                                type: "AUDIO_SET_NOISE_CANCELLATION",
                                enabled: !1
                            }), I.default.dispatch({
                                type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR",
                                code: e
                            })
                        }), e.on(m.BaseConnectionEvent.VoiceActivityDetectorError, e => {
                            e_.warn("voiceactivitydetectorerror event: ".concat(e)), X.default.track(ec.AnalyticEvents.VOICE_PROCESSING, {
                                noise_canceller_error: e
                            }), I.default.dispatch({
                                type: "AUDIO_SET_MODE",
                                context: eh.MediaEngineContextTypes.DEFAULT,
                                mode: ec.InputModes.VOICE_ACTIVITY,
                                options: {
                                    ...e0(eh.MediaEngineContextTypes.DEFAULT).modeOptions,
                                    vadUseKrisp: !1
                                }
                            }), I.default.dispatch({
                                type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
                                code: e
                            })
                        }), e.on(m.BaseConnectionEvent.VideoState, t => {
                            I.default.dispatch({
                                type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED",
                                videoState: t,
                                context: e.context
                            })
                        }), e.on(m.BaseConnectionEvent.Destroy, () => {
                            l.stop()
                        }), e.setBitRate(en.default.bitrate), e.applyVideoQualityMode(eu.default.mode)
                    }), eg.on(m.MediaEngineEvent.DeviceChange, (e, t, n) => {
                        I.default.dispatch({
                            type: "MEDIA_ENGINE_DEVICES",
                            inputDevices: e,
                            outputDevices: t,
                            videoDevices: n
                        })
                    }), eg.on(m.MediaEngineEvent.VolumeChange, (e, t) => {
                        I.default.dispatch({
                            type: "AUDIO_VOLUME_CHANGE",
                            inputVolume: e,
                            outputVolume: t
                        })
                    }), eg.on(m.MediaEngineEvent.DesktopSourceEnd, () => {
                        I.default.dispatch({
                            type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                            settings: null
                        })
                    }), eg.on(m.MediaEngineEvent.AudioPermission, e => {
                        eq = !0, I.default.dispatch({
                            type: "MEDIA_ENGINE_PERMISSION",
                            kind: "audio",
                            granted: e
                        })
                    }), eg.on(m.MediaEngineEvent.VideoPermission, e => {
                        I.default.dispatch({
                            type: "MEDIA_ENGINE_PERMISSION",
                            kind: "video",
                            granted: e
                        })
                    }), eg.on(m.MediaEngineEvent.WatchdogTimeout, async () => {
                        let e;
                        try {
                            await Q.default.submitLiveCrashReport({
                                message: {
                                    message: "Voice Watchdog Timeout"
                                }
                            })
                        } catch (t) {
                            "number" == typeof t.status && (e = t.status)
                        }
                        e_.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)), X.default.track(ec.AnalyticEvents.VOICE_WATCHDOG_TIMEOUT, {
                            minidump_submission_error: e
                        })
                    }), eg.on(m.MediaEngineEvent.VideoInputInitialized, e => {
                        X.default.track(ec.AnalyticEvents.VIDEO_INPUT_INITIALIZED, {
                            device_name: e.description.name,
                            time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(1e3 * e.timeToFirstFrame),
                            timed_out: e.initializationTimerExpired,
                            activity: e.entropy
                        })
                    }), eg.on(m.MediaEngineEvent.ClipsRecordingRestartNeeded, () => {
                        I.default.dispatch({
                            type: "CLIPS_RESTART"
                        })
                    }), eg.on(m.MediaEngineEvent.ClipsInitFailure, (e, t) => {
                        I.default.wait(() => {
                            I.default.dispatch({
                                type: "CLIPS_INIT_FAILURE",
                                errMsg: e,
                                applicationName: t
                            })
                        })
                    }), eg.on(m.MediaEngineEvent.ClipsRecordingEnded, (e, t) => {
                        var n, i;
                        (null == a ? void 0 : null === (n = a.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == s ? void 0 : null === (i = s.desktopSource) || void 0 === i ? void 0 : i.soundshareId) !== t && v.cancelAttachToProcess(t), a = null)
                    }), e9.reset(), ! function() {
                        var e;
                        let t = T.default.get("audio");
                        null != t && (T.default.set(eS, {
                                [eh.MediaEngineContextTypes.DEFAULT]: t
                            }), T.default.remove("audio")), eI = null !== (e = T.default.get(eS)) && void 0 !== e ? e : {}, h.each(eI, e => {
                                if (h.defaultsDeep(e, eT()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, ee.toCombo)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && (e.vadUseKrispSettingVersion = 4, e.modeOptions.vadUseKrisp = !0), !e.qosMigrated && (e.qosMigrated = !0, e.qos = !1), !e.vadThrehsoldMigrated) {
                                    var t;
                                    e.vadThrehsoldMigrated = !0, (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60)
                                }(0, Z.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && (e.ncUseKrispjsSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0): 1 !== e.ncUseKrispSettingVersion && (e.ncUseKrispSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0), 1 !== e.av1EnabledSettingVersion && (e.av1EnabledSettingVersion = 1, e.av1Enabled = !0)
                            }),
                            function() {
                                let e = e0();
                                eg.setAudioInputDevice(e.inputDeviceId), eg.setAudioOutputDevice(e.outputDeviceId), e3(), eg.setInputVolume(e.inputVolume), eg.setOutputVolume(e.outputVolume), eg.setH264Enabled(e.openH264), eg.setAv1Enabled(e.av1Enabled), eg.setAecDump(e.aecDumpEnabled)
                            }()
                    }(), !(0, Z.isDesktop)() || __OVERLAY__ || eH || ej ? (0, Z.isWeb)() && eg.supports(eh.Features.NOISE_CANCELLATION) ? (ej = !0, i.emitChange()) : (0, Z.isWeb)() && te({
                        noiseCancellation: !1
                    }) : (eH = !0, td()), (0, Z.isMac)() && eg.supports(eh.Features.SOUNDSHARE) ? eg.getSoundshareStatus().then(e => {
                        tE(e)
                    }).catch(e => {
                        e_.warn("Failed to check if soundshare is enabled: ".concat(e))
                    }) : eK = ec.SoundshareEnableState.ENABLED, eJ = {
                        [eh.Features.VIDEO]: eg.supports(eh.Features.VIDEO),
                        [eh.Features.DESKTOP_CAPTURE]: eg.supports(eh.Features.DESKTOP_CAPTURE),
                        [eh.Features.HYBRID_VIDEO]: eg.supports(eh.Features.HYBRID_VIDEO)
                    }, this.waitFor(et.default, ei.default, er.default, ea.default, eo.default, el.default, K.default.storage, q.default, es.default, A.default)
                }
                supports(e) {
                    return eg.supports(e)
                }
                supportsInApp(e) {
                    return eJ[e] || eg.supports(e)
                }
                isSupported() {
                    return eg.supported()
                }
                isExperimentalEncodersSupported() {
                    return eg.supports(eh.Features.EXPERIMENTAL_ENCODERS)
                }
                isNoiseSuppressionSupported() {
                    return eg.supports(eh.Features.NOISE_SUPPRESSION)
                }
                isNoiseCancellationSupported() {
                    return ej || !1
                }
                isNoiseCancellationError() {
                    return eW
                }
                isAutomaticGainControlSupported() {
                    return eg.supports(eh.Features.AUTOMATIC_GAIN_CONTROL)
                }
                isAdvancedVoiceActivitySupported() {
                    return ej || !1
                }
                isAecDumpSupported() {
                    return eg.supports(eh.Features.AEC_DUMP)
                }
                isSimulcastSupported() {
                    return eg.supports(eh.Features.VIDEO) && eg.supports(eh.Features.SIMULCAST)
                }
                getAecDump() {
                    return e0().aecDumpEnabled
                }
                getMediaEngine() {
                    return eg
                }
                getVideoComponent() {
                    return eg.supports(eh.Features.DIRECT_VIDEO) && eg.setUseDirectVideo(!0), eg.Video
                }
                getCameraComponent() {
                    return eg.supports(eh.Features.DIRECT_VIDEO) && eg.setUseDirectVideo(!0), eg.Camera
                }
                isEnabled() {
                    return ev
                }
                isMute() {
                    return this.isSelfMute() || ey
                }
                isDeaf() {
                    return this.isSelfDeaf() || eb
                }
                hasContext(e) {
                    return null != eI[e]
                }
                isSelfMutedTemporarily() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.DEFAULT;
                    return e === eh.MediaEngineContextTypes.DEFAULT && eP
                }
                isSelfMute() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.DEFAULT;
                    return !this.isEnabled() || e0(e).mute || !K.default.didHavePermission(ef.NativePermissionTypes.AUDIO) || this.isSelfDeaf(e) || e === eh.MediaEngineContextTypes.DEFAULT && eL
                }
                isHardwareMute() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.DEFAULT;
                    return !this.isMute() && !this.isSelfMutedTemporarily(e) && ei.default.isHardwareMute(this.getInputDeviceId())
                }
                isSelfDeaf() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.DEFAULT;
                    return !this.isSupported() || e0(e).deaf
                }
                isVideoEnabled() {
                    return eM && ek
                }
                isVideoAvailable() {
                    return Object.values(eD).some(e => {
                        let {
                            disabled: t
                        } = e;
                        return !t
                    })
                }
                isScreenSharing() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.STREAM;
                    return eR === e && null != s
                }
                isSoundSharing() {
                    var e;
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.STREAM;
                    return eR === t && null != s && (null === (e = s.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null
                }
                isLocalMute(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.MediaEngineContextTypes.DEFAULT;
                    return e !== et.default.getId() && (e0(t).localMutes[e] || !1)
                }
                supportsDisableLocalVideo() {
                    return eg.supports(eh.Features.DISABLE_VIDEO)
                }
                isLocalVideoDisabled(e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.MediaEngineContextTypes.DEFAULT;
                    return null !== (t = e0(n).disabledLocalVideos[e]) && void 0 !== t && t
                }
                getVideoToggleState(e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.MediaEngineContextTypes.DEFAULT;
                    return null !== (t = e0(n).videoToggleStateMap[e]) && void 0 !== t ? t : ec.VideoToggleState.NONE
                }
                isLocalVideoAutoDisabled(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.MediaEngineContextTypes.DEFAULT;
                    return t === eh.MediaEngineContextTypes.DEFAULT && eX.has(e)
                }
                isAnyLocalVideoAutoDisabled() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.DEFAULT;
                    return e === eh.MediaEngineContextTypes.DEFAULT && eX.size > 0
                }
                isMediaFilterSettingLoading() {
                    return ez
                }
                isNativeAudioPermissionReady() {
                    return eq
                }
                getGoLiveSource() {
                    return s
                }
                getGoLiveContext() {
                    return eR
                }
                getLocalPan(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.MediaEngineContextTypes.DEFAULT,
                        n = e0(t).localPans[e];
                    return null != n ? n : em
                }
                getLocalVolume(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.MediaEngineContextTypes.DEFAULT,
                        n = t === eh.MediaEngineContextTypes.STREAM,
                        i = n ? eh.DEFAULT_STREAM_VOLUME : eh.DEFAULT_VOLUME,
                        r = e0(t).localVolumes[e];
                    return null != r ? r : i
                }
                getInputVolume() {
                    return e0().inputVolume
                }
                getOutputVolume() {
                    return e0().outputVolume
                }
                getMode() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.DEFAULT;
                    return e0(e).mode
                }
                getModeOptions() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.DEFAULT;
                    return e0(e).modeOptions
                }
                getShortcuts() {
                    let e = {};
                    return h.each(eI, (t, n) => {
                        let {
                            mode: i,
                            modeOptions: {
                                shortcut: r
                            }
                        } = t;
                        i === ec.InputModes.PUSH_TO_TALK && eC.has(n) && (e[n] = r)
                    }), e
                }
                getInputDeviceId() {
                    return tr(eN, e0().inputDeviceId)
                }
                getOutputDeviceId() {
                    return tr(eO, e0().outputDeviceId)
                }
                getVideoDeviceId() {
                    return tr(eD, e0().videoDeviceId)
                }
                getInputDevices() {
                    return eN
                }
                getOutputDevices() {
                    return eO
                }
                getVideoDevices() {
                    return eD
                }
                getEchoCancellation() {
                    let e = e0();
                    return ei.default.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation
                }
                getH265Enabled() {
                    return e0().h265Enabled
                }
                getLoopback() {
                    return eg.getLoopback()
                }
                getNoiseSuppression() {
                    let e = e0();
                    return ei.default.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression
                }
                getAutomaticGainControl() {
                    let e = e0();
                    return ei.default.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl
                }
                getNoiseCancellation() {
                    return e0().noiseCancellation
                }
                getExperimentalEncoders() {
                    return e0().experimentalEncoders
                }
                getHardwareH264() {
                    return e0().hardwareH264
                }
                getEnableSilenceWarning() {
                    return e0().silenceWarning
                }
                getDebugLogging() {
                    return eg.getDebugLogging()
                }
                getQoS() {
                    return e0().qos
                }
                getAttenuation() {
                    return e0().attenuation
                }
                getAttenuateWhileSpeakingSelf() {
                    return e0().attenuateWhileSpeakingSelf
                }
                getAttenuateWhileSpeakingOthers() {
                    return e0().attenuateWhileSpeakingOthers
                }
                getAudioSubsystem() {
                    return eg.getAudioSubsystem()
                }
                getSettings() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.DEFAULT;
                    return e0(e)
                }
                getState() {
                    return {
                        settingsByContext: eI,
                        inputDevices: eN,
                        outputDevices: eO,
                        appSupported: eJ,
                        krispModuleLoaded: ej,
                        goLiveSource: s,
                        goLiveContext: eR
                    }
                }
                getInputDetected() {
                    return ex
                }
                getNoInputDetectedNotice() {
                    return eV
                }
                getPacketDelay() {
                    return Z.isPlatformEmbedded || this.getMode() !== ec.InputModes.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
                }
                setCanHavePriority(e, t) {
                    eg.eachConnection(n => n.setCanHavePriority(e, t))
                }
                isInteractionRequired() {
                    return eA
                }
                getVideoHook() {
                    return e0().videoHook
                }
                supportsVideoHook() {
                    return eg.supports(eh.Features.VIDEO_HOOK)
                }
                getExperimentalSoundshare() {
                    let e = e0().experimentalSoundshare2;
                    return this.supportsExperimentalSoundshare() && (null == e || e)
                }
                supportsExperimentalSoundshare() {
                    return eg.supports(eh.Features.EXPERIMENTAL_SOUNDSHARE) && _.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, ed.WINDOWS_SOUNDSHARE_VERSION)
                }
                getOpenH264() {
                    return e0().openH264
                }
                getAv1Enabled() {
                    return e0().av1Enabled
                }
                getEverSpeakingWhileMuted() {
                    return eG
                }
                getSoundshareEnabled() {
                    return eK
                }
                supportsEnableSoundshare() {
                    return (0, Z.isMac)() && eg.supports(eh.Features.SOUNDSHARE) && _.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, ed.DARWIN_SOUNDSHARE_VERSION) && !(_.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, ed.DARWIN_SCKIT_AUDIO_VERSION) && e8(!1))
                }
                supportsScreenSoundshare() {
                    return (0, Z.isMac)() && eg.supports(eh.Features.SOUNDSHARE) && _.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, ed.DARWIN_SCKIT_AUDIO_VERSION) && e8(!1) || (0, Z.isWindows)() && eg.supports(eh.Features.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
                }
                getVideoStreamParameters() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.DEFAULT,
                        t = this.supports(eh.Features.VIDEO) ? [{
                            rid: "100",
                            type: e === eh.MediaEngineContextTypes.DEFAULT ? eh.MediaTypes.VIDEO : eh.MediaTypes.SCREEN,
                            quality: 100
                        }] : [];
                    return this.isSimulcastSupported() && e === eh.MediaEngineContextTypes.DEFAULT && t.push({
                        rid: "50",
                        type: eh.MediaTypes.VIDEO,
                        quality: 50
                    }), t
                }
                getSupportedSecureFramesProtocolVersion(e) {
                    let t = eg.getSupportedSecureFramesProtocolVersion(),
                        n = V.SecureFramesUserExperiment.getCurrentConfig({
                            location: "MediaEngineStore"
                        }),
                        i = null != e ? V.SecureFramesGuildExperiment.getCurrentConfig({
                            guildId: e,
                            location: "MediaEngineStore"
                        }) : null,
                        r = n.canSupportSecureFrames || (null == i ? void 0 : i.canSupportSecureFrames),
                        s = !(0, Z.isIOS)() && !(0, Z.isAndroid)() && (n.canSupportMls || (null == i ? void 0 : i.canSupportMls));
                    return r ? s ? t : t % 100 : 0
                }
                hasClipsSource() {
                    return null != a
                }
            }
            tp.displayName = "MediaEngineStore";
            var t_ = i = new tp(I.default, {
                VOICE_CHANNEL_SELECT: function(e) {
                    let {
                        guildId: t,
                        channelId: n,
                        currentVoiceChannelId: i,
                        video: r
                    } = e;
                    if (i !== n && e3(r, null), null != t || null == n) {
                        eB = !1;
                        return
                    }
                    if (eB) return;
                    eB = !0;
                    let s = e0();
                    (s.mute || s.deaf) && (te({
                        deaf: !1,
                        mute: !1
                    }), eg.eachConnection(e4))
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return t.reduce((e, t) => {
                        if (r === t.sessionId) {
                            ey = t.mute || t.suppress, eb = t.deaf, eg.eachConnection(e4);
                            let e = null != t.guildId && null != t.channelId && null != eY && eY !== t.channelId,
                                n = !e && eM;
                            return e3(n), eY = t.channelId, !0
                        }
                        return !__OVERLAY__ && t.userId === et.default.getId() && null == eo.default.getChannelId() && e3(!1, null), e
                    }, !1)
                },
                CONNECTION_OPEN: function(e) {
                    r = e.sessionId, ey = !1, eb = !1, (0, z.shouldReadWriteAudioSettings)() && ts()
                },
                CONNECTION_CLOSED: function() {
                    r = null
                },
                RTC_CONNECTION_STATE: function(e) {
                    switch (e.state) {
                        case ec.RTCConnectionStates.CONNECTING:
                            tt();
                            break;
                        case ec.RTCConnectionStates.RTC_CONNECTING:
                            eF = !1, eV = !1;
                            break;
                        case ec.RTCConnectionStates.RTC_CONNECTED:
                            e3();
                            break;
                        case ec.RTCConnectionStates.DISCONNECTED:
                            (function() {
                                if (0 === eX.size) return;
                                let e = eh.MediaEngineContextTypes.DEFAULT,
                                    {
                                        disabledLocalVideos: t
                                    } = e0(e);
                                eX.forEach(n => {
                                    f(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], eg.eachConnection(e => e.setLocalVideoDisabled(n, !1), e)
                                }), eX.clear(), te({
                                    disabledLocalVideos: t
                                }, e, !1)
                            })()
                    }
                    e9.update()
                },
                AUDIO_SET_TEMPORARY_SELF_MUTE: function(e) {
                    let {
                        mute: t
                    } = e;
                    eP = t, eg.eachConnection(e4)
                },
                AUDIO_TOGGLE_SELF_MUTE: function(e) {
                    let {
                        context: t
                    } = e, {
                        mute: n,
                        deaf: i
                    } = e0(t);
                    if (t === eh.MediaEngineContextTypes.DEFAULT && (K.default.requestPermission(ef.NativePermissionTypes.AUDIO), eL)) return !1;
                    !(n = !i && !n) && (i = !1), te({
                        mute: n,
                        deaf: i
                    }, t), eg.eachConnection(e4)
                },
                AUDIO_TOGGLE_SELF_DEAF: function(e) {
                    let {
                        context: t
                    } = e, n = e0(t);
                    te({
                        deaf: !n.deaf
                    }, t), eg.eachConnection(e4)
                },
                AUDIO_TOGGLE_LOCAL_MUTE: function(e) {
                    let {
                        context: t,
                        userId: n
                    } = e;
                    if (n === et.default.getId()) return;
                    let {
                        localMutes: i
                    } = e0(t);
                    i[n] ? delete i[n] : i[n] = !0, te({
                        localMutes: i
                    }, t), eg.eachConnection(e => e.setLocalMute(n, i[n] || !1), t)
                },
                AUDIO_SET_LOCAL_VIDEO_DISABLED: function(e) {
                    var t, n, i, r, s, a, o;
                    let {
                        context: l,
                        userId: u,
                        videoToggleState: c,
                        persist: d,
                        isAutomatic: E
                    } = e;
                    f(!(d && E), "These are not allowed to both be true.");
                    let h = c === ec.VideoToggleState.DISABLED,
                        {
                            disabledLocalVideos: p
                        } = e0(l),
                        _ = null !== (t = p[u]) && void 0 !== t && t,
                        S = eX.has(u),
                        m = c === ec.VideoToggleState.AUTO_ENABLED || c === ec.VideoToggleState.MANUAL_ENABLED;
                    e_.info("disableVideo=".concat(h, " currentlyDisabled=").concat(_, " currentlyAutoDisabled=").concat(S, ", isVideoShown=").concat(m)), f(!(S && !_), "If you are auto-disabled, then you are also disabled.");
                    let T = h !== _,
                        g = l === eh.MediaEngineContextTypes.DEFAULT,
                        I = E && T && g,
                        C = d && T && g;
                    e_.info("changed=".concat(T, " isDefaultContext=").concat(g, " isUpdateCausedByVideoHealthManager=").concat(I, " isManualToggleByUser=").concat(C));
                    let {
                        videoToggleStateMap: v
                    } = e0(l);
                    if (v[u] === ec.VideoToggleState.AUTO_PROBING && c === ec.VideoToggleState.AUTO_ENABLED && (0, W.default)(u, h ? eh.VideoToggleReason.AUTO_DISABLE : eh.VideoToggleReason.AUTO_ENABLE, m), v[u] = c, te({
                            videoToggleStateMap: v
                        }, l, d), c === ec.VideoToggleState.AUTO_PROBING ? null === (n = eo.default.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (i = eo.default.getRTCConnection()) || void 0 === i || i.pauseStatsCollectionForUser(u, !1), !eQ && (e_.info("isAutoDisableAllowed=".concat(eQ, " - disabling VideoHealthManager")), null === (s = eo.default.getRTCConnection()) || void 0 === s || null === (r = s.getVideoHealthManager()) || void 0 === r || r.disable()), I) {
                        if (!h && !S || h && !eQ) return;
                        (0, W.default)(u, h ? eh.VideoToggleReason.AUTO_DISABLE : eh.VideoToggleReason.AUTO_ENABLE, m), h ? eX.add(u) : eX.delete(u)
                    } else C && (S && !h ? (e_.info("disallowing auto-disable for this session because of manual override by user"), eQ = !1, null === (o = eo.default.getRTCConnection()) || void 0 === o || null === (a = o.getVideoHealthManager()) || void 0 === a || a.disable(), (0, W.default)(u, eh.VideoToggleReason.MANUAL_REENABLE, m)) : (0, W.default)(u, h ? eh.VideoToggleReason.MANUAL_DISABLE : eh.VideoToggleReason.MANUAL_ENABLE, m));
                    g && !h && eX.delete(u), h ? p[u] = !0 : delete p[u], te({
                        disabledLocalVideos: p
                    }, l, d), eg.eachConnection(e => {
                        var t;
                        return e.setLocalVideoDisabled(u, null !== (t = p[u]) && void 0 !== t && t)
                    }, l)
                },
                AUDIO_SET_LOCAL_VOLUME: function(e) {
                    let {
                        context: t,
                        userId: n,
                        volume: i
                    } = e;
                    if (n === et.default.getId()) return;
                    let r = t === eh.MediaEngineContextTypes.STREAM,
                        s = r ? eh.DEFAULT_STREAM_VOLUME : eh.DEFAULT_VOLUME,
                        {
                            localVolumes: a
                        } = e0(t);
                    i === s ? delete a[n] : a[n] = i, te({
                        localVolumes: a
                    }, t), eg.eachConnection(e => e.setLocalVolume(n, i), t)
                },
                AUDIO_SET_LOCAL_PAN: function(e) {
                    let {
                        context: t,
                        userId: n,
                        left: i,
                        right: r
                    } = e, {
                        localPans: s
                    } = e0(t);
                    s[n] = {
                        left: i,
                        right: r
                    }, te({
                        localPans: s
                    }, t), eg.eachConnection(e => e.setLocalPan(n, i, r), t)
                },
                AUDIO_SET_MODE: function(e) {
                    let {
                        context: t,
                        mode: n,
                        options: i
                    } = e;
                    te({
                        mode: n,
                        modeOptions: i
                    }, t), eg.eachConnection(e1), e9.update()
                },
                AUDIO_SET_INPUT_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    te({
                        inputVolume: e2(t)
                    }), eg.setInputVolume(t)
                },
                AUDIO_SET_OUTPUT_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    te({
                        outputVolume: t
                    }), eg.setOutputVolume(t)
                },
                AUDIO_SET_INPUT_DEVICE: function(e) {
                    let {
                        id: t
                    } = e;
                    te({
                        inputDeviceId: t = tr(eN, t)
                    }), eg.setAudioInputDevice(t)
                },
                AUDIO_SET_OUTPUT_DEVICE: function(e) {
                    let {
                        id: t
                    } = e;
                    te({
                        outputDeviceId: t = tr(eO, t)
                    }), eg.setAudioOutputDevice(t)
                },
                AUDIO_SET_ECHO_CANCELLATION: function(e) {
                    let t = te({
                        echoCancellation: e.enabled
                    });
                    eg.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), tu(), tl(e.location)
                },
                MEDIA_ENGINE_SET_H265: function(e) {
                    let t = te({
                        h265Enabled: e.enabled
                    });
                    eg.setH265Enabled(t.h265Enabled)
                },
                AUDIO_SET_LOOPBACK: function(e) {
                    let {
                        enabled: t
                    } = e;
                    return eZ = t, tu()
                },
                AUDIO_SET_NOISE_SUPPRESSION: function(e) {
                    let t = te({
                        noiseSuppression: e.enabled
                    });
                    eg.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), tu(), tl(e.location)
                },
                AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function(e) {
                    let t = te({
                        automaticGainControl: e.enabled
                    });
                    eg.eachConnection(e => e.setAutomaticGainControl(t.automaticGainControl)), tu(), tl(e.location)
                },
                AUDIO_SET_NOISE_CANCELLATION: function(e) {
                    let t = te({
                        noiseCancellation: e.enabled
                    });
                    eg.eachConnection(e => e.setNoiseCancellation(t.noiseCancellation)), tu(), tl(e.location)
                },
                AUDIO_SET_DISPLAY_SILENCE_WARNING: function(e) {
                    te({
                        silenceWarning: e.enabled
                    }), e9.update()
                },
                AUDIO_SET_DEBUG_LOGGING: function(e) {
                    eg.setDebugLogging(e.enabled)
                },
                MEDIA_ENGINE_SET_VIDEO_HOOK: function(e) {
                    te({
                        videoHook: e.enabled
                    })
                },
                MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function(e) {
                    te({
                        experimentalSoundshare2: e.enabled
                    })
                },
                AUDIO_SET_ATTENUATION: function(e) {
                    let {
                        attenuation: t,
                        attenuateWhileSpeakingSelf: n,
                        attenuateWhileSpeakingOthers: i
                    } = e, r = te({
                        attenuation: t,
                        attenuateWhileSpeakingSelf: n,
                        attenuateWhileSpeakingOthers: i
                    });
                    eg.eachConnection(e => e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers))
                },
                AUDIO_SET_QOS: function(e) {
                    let {
                        enabled: t
                    } = e;
                    te({
                        qos: t
                    }), eg.eachConnection(e => e.setQoS(t))
                },
                MEDIA_ENGINE_DEVICES: function(e) {
                    let {
                        inputDevices: t,
                        outputDevices: n,
                        videoDevices: i
                    } = e;
                    ! function(e) {
                        let t = eN;
                        if (eN = ti(e, ep.default.Messages.NO_INPUT_DEVICES), !h.isEqual(eN, t)) {
                            let e = e0(),
                                t = tr(eN, e.inputDeviceId);
                            eg.setAudioInputDevice(t)
                        }
                    }(t), ! function(e) {
                        let t = eO;
                        if (eO = ti(e, ep.default.Messages.NO_OUTPUT_DEVICES), !h.isEqual(eO, t)) {
                            let e = e0(),
                                t = tr(eO, e.outputDeviceId);
                            eg.setAudioOutputDevice(t)
                        }
                    }(n), ! function(e) {
                        ek = e.length > 0;
                        let t = eD;
                        if (eD = ti(e, ep.default.Messages.NO_VIDEO_DEVICES), eM && !h.isEqual(eD, t)) {
                            var n;
                            let e = void 0 !== eD[eU],
                                i = eU === eh.DEFAULT_DEVICE_ID && (null === (n = t[eh.DEFAULT_DEVICE_ID]) || void 0 === n ? void 0 : n.disabled);
                            e3(e || i)
                        }
                    }(i)
                },
                AUDIO_VOLUME_CHANGE: function(e) {
                    let {
                        inputVolume: t,
                        outputVolume: n
                    } = e;
                    te({
                        inputVolume: e2(t),
                        outputVolume: n
                    })
                },
                AUDIO_RESET: function() {
                    T.default.remove(eS), location.reload()
                },
                AUDIO_INPUT_DETECTED: function(e) {
                    let {
                        inputDetected: t
                    } = e;
                    ex = t, !eF && ex && (eF = !0, e9.update())
                },
                AUDIO_SET_SUBSYSTEM: function(e) {
                    eg.setAudioSubsystem(e.subsystem)
                },
                MEDIA_ENGINE_SET_AUDIO_ENABLED: function(e) {
                    ev = e.enabled, e.unmute && te({
                        mute: !1,
                        deaf: !1
                    }), eg.eachConnection(e4)
                },
                MEDIA_ENGINE_SET_VIDEO_ENABLED: function(e) {
                    let {
                        enabled: t
                    } = e;
                    K.default.requestPermission(ef.NativePermissionTypes.CAMERA), e3(t)
                },
                MEDIA_ENGINE_PERMISSION: function(e) {
                    let {
                        kind: t,
                        granted: n
                    } = e;
                    if (!n) switch (t) {
                        case "audio":
                            ev = !1, eg.eachConnection(e4);
                            break;
                        case "video":
                            e3(!1)
                    }
                },
                MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
                    var t, n, i, r, a;
                    let {
                        settings: o
                    } = e;
                    if ((null == o ? void 0 : o.desktopSettings) != null) {
                        ;
                        let e = null,
                            i = null,
                            {
                                sourceId: r,
                                sound: l
                            } = o.desktopSettings,
                            u = null !== (t = o.context) && void 0 !== t ? t : eh.MediaEngineContextTypes.DEFAULT,
                            c = null !== (n = o.qualityOptions) && void 0 !== n ? n : {
                                resolution: 720,
                                frameRate: 30
                            },
                            d = Q.default.getPidFromDesktopSource(r);
                        Z.isPlatformEmbedded && !0 === l && ({
                            soundshareId: e,
                            soundshareSession: i
                        } = ta(d), null != e && to(e, i)), (a = u) !== eR && (null != s && eg.setGoLiveSource(null, eR), eR = a);
                        let f = u === eh.MediaEngineContextTypes.STREAM && eM;
                        e3(f, {
                            desktopSource: {
                                id: r,
                                sourcePid: d,
                                soundshareId: e,
                                soundshareSession: i
                            },
                            quality: {
                                resolution: c.resolution,
                                frameRate: c.frameRate
                            }
                        })
                    } else if ((null == o ? void 0 : o.cameraSettings) != null) {
                        let e = null !== (i = o.context) && void 0 !== i ? i : eh.MediaEngineContextTypes.DEFAULT,
                            {
                                videoDeviceGuid: t,
                                audioDeviceGuid: n
                            } = o.cameraSettings,
                            s = e === eh.MediaEngineContextTypes.STREAM && eM,
                            a = null !== (r = o.qualityOptions) && void 0 !== r ? r : {
                                resolution: 720,
                                frameRate: 30
                            };
                        e3(s, {
                            cameraSource: {
                                videoDeviceGuid: t,
                                audioDeviceGuid: n
                            },
                            quality: {
                                resolution: a.resolution,
                                frameRate: a.frameRate
                            }
                        })
                    } else e3(eM, null)
                },
                MEDIA_ENGINE_SET_VIDEO_DEVICE: function(e) {
                    let {
                        id: t
                    } = e;
                    te({
                        videoDeviceId: t = tr(eD, t)
                    }), e3()
                },
                MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function(e) {
                    let t = te({
                        experimentalEncoders: e.enabled
                    });
                    eg.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
                },
                MEDIA_ENGINE_INTERACTION_REQUIRED: function(e) {
                    return eA !== e.required && (eA = e.required, !e.required && eg.interact(), !0)
                },
                USER_SETTINGS_MODAL_INIT: tf,
                USER_SETTINGS_MODAL_SET_SECTION: tf,
                CERTIFIED_DEVICES_SET: function() {
                    return eg.eachConnection(e5), !1
                },
                RPC_APP_CONNECTED: function(e) {
                    let {
                        application: t
                    } = e;
                    eC.add(t.id)
                },
                RPC_APP_DISCONNECTED: function(e) {
                    let {
                        application: t
                    } = e;
                    eC.delete(t.id)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        mediaEngineState: t
                    } = e;
                    eI = t.settingsByContext, eN = t.inputDevices, eO = t.outputDevices, eJ = t.appSupported, ej = t.krispModuleLoaded, eR = t.goLiveContext
                },
                MEDIA_ENGINE_SET_OPEN_H264: function(e) {
                    let {
                        enabled: t
                    } = e, n = te({
                        openH264: t
                    });
                    eg.setH264Enabled(n.openH264)
                },
                MEDIA_ENGINE_SET_HARDWARE_H264: function(e) {
                    let {
                        enabled: t
                    } = e, n = te({
                        hardwareH264: t
                    });
                    eg.eachConnection(e => e.setHardwareH264(n.hardwareH264))
                },
                MEDIA_ENGINE_SET_AV1: function(e) {
                    let {
                        enabled: t
                    } = e, n = te({
                        av1Enabled: t
                    });
                    eg.setAv1Enabled(n.av1Enabled)
                },
                APP_STATE_UPDATE: function(e) {
                    let {
                        state: t
                    } = e, n = D.default.isEnabled();
                    if (t === ec.AppStates.BACKGROUND && eM && !n) ew = !0, e3(!1);
                    else {
                        if (t !== ec.AppStates.ACTIVE || !ew) return !1;
                        ew = !1, e3(!0)
                    }
                    return !0
                },
                SET_CHANNEL_BITRATE: function(e) {
                    eg.eachConnection(t => t.setBitRate(e.bitrate))
                },
                SET_VAD_PERMISSION: function(e) {
                    let {
                        hasPermission: t
                    } = e, n = !t;
                    if (n === eL) return !1;
                    eL = n, eg.eachConnection(e4)
                },
                SET_NATIVE_PERMISSION: function(e) {
                    let {
                        state: t,
                        permissionType: n
                    } = e, i = t === ef.NativePermissionStates.ACCEPTED;
                    switch (n) {
                        case ef.NativePermissionTypes.AUDIO:
                            eq = !0, eg.eachConnection(e4);
                            break;
                        case ef.NativePermissionTypes.CAMERA:
                            !i && eM && e3(!1);
                            break;
                        default:
                            return !1
                    }
                },
                SET_CHANNEL_VIDEO_QUALITY_MODE: function(e) {
                    eg.eachConnection(t => t.applyVideoQualityMode(e.mode))
                },
                MEDIA_ENGINE_SET_AEC_DUMP: function(e) {
                    let {
                        enabled: t
                    } = e, n = te({
                        aecDumpEnabled: t
                    });
                    eg.setAecDump(n.aecDumpEnabled)
                },
                CHANNEL_DELETE: function() {
                    if (!eM && null == s || null != eo.default.getRTCConnectionId()) return !1;
                    e3(!1, null)
                },
                MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function() {
                    return !!eW && (eW = !1, !0)
                },
                MEDIA_ENGINE_ENABLE_SOUNDSHARE: function() {
                    th(), ! function() {
                        var e, t;
                        let n = i.isSoundSharing(),
                            r = null === (e = i.getGoLiveSource()) || void 0 === e ? void 0 : e.desktopSource;
                        if (null != r) {
                            let e = null !== (t = r.soundshareId) && void 0 !== t ? t : 0,
                                s = i.getExperimentalSoundshare();
                            n && eg.setSoundshareSource(e, s, eR)
                        }
                    }()
                },
                MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(e) {
                    let {
                        settings: t
                    } = e;
                    eg.applyMediaFilterSettings(t).finally(() => {
                        ez = !1, i.emitChange()
                    })
                },
                MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function() {
                    ez = !0
                },
                MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function() {
                    ez = !1
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        local: n,
                        wasSaved: i
                    } = e;
                    if (!(0, z.shouldReadWriteAudioSettings)() || t !== eE.UserSettingsTypes.PRELOADED_USER_SETTINGS || n || null != i) return !1;
                    ts(!0)
                },
                CLIPS_INIT: function(e) {
                    let {
                        sourceId: t,
                        applicationName: n,
                        quality: r
                    } = e, {
                        enableDecoupledGameClipping: s
                    } = L.default.getCurrentConfig({
                        location: "handleClipsInit"
                    }, {
                        autoTrackExposure: !0
                    }), o = A.default.getSettings().decoupledClipsEnabled;
                    if (!s || !o || null == C.default) return;
                    let l = null,
                        u = null,
                        c = Q.default.getPidFromDesktopSource(t);
                    ({
                        soundshareId: l,
                        soundshareSession: u
                    } = ta(c));
                    let d = {
                        desktopSource: {
                            id: t,
                            sourcePid: c,
                            soundshareId: l,
                            soundshareSession: u
                        },
                        quality: r
                    };
                    null != a && a.desktopSource.id !== d.desktopSource.id && (eg.setClipsSource(null), (0, Z.isWindows)() && null != a.desktopSource.soundshareId && v.cancelAttachToProcess(a.desktopSource.soundshareId)), null != l && to(l, u), a = d;
                    let {
                        useQuartzCapturer: f
                    } = x.default.getCurrentConfig({
                        location: "f627ab_11"
                    }, {
                        autoTrackExposure: !1
                    }), {
                        hdrCaptureMode: E
                    } = U.default.getCurrentConfig({
                        location: "f627ab_12"
                    }, {
                        autoTrackExposure: !1
                    }), h = e0().videoHook, p = eg.supports(eh.Features.CAPTURE_TIMEOUT_EXPERIMENTS), {
                        videoHookStaleFrameTimeoutMs: _
                    } = B.default.getConfig(p && h, "e225cfdf5_vh2", !1), {
                        graphicsCaptureStaleFrameTimeoutMs: S
                    } = Y.default.getConfig(p && e7(), "e225cfdf5_wgc2", !1);
                    eg.setClipsSource({
                        desktopDescription: {
                            id: a.desktopSource.id,
                            soundshareId: a.desktopSource.soundshareId,
                            useVideoHook: h,
                            useGraphicsCapture: e7(),
                            useLoopback: i.getExperimentalSoundshare(),
                            useQuartzCapturer: f,
                            allowScreenCaptureKit: e8(!1),
                            videoHookStaleFrameTimeoutMs: _,
                            graphicsCaptureStaleFrameTimeoutMs: S,
                            hdrCaptureMode: E
                        },
                        quality: r,
                        applicationName: n
                    })
                },
                CLIPS_SETTINGS_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e;
                    void 0 !== t.viewerClipsEnabled && eg.eachConnection(e => e.setClipsKeyFrameInterval(A.default.getSettings().viewerClipsEnabled ? eh.VIEWERSIDE_CLIP_KFI_MS : 0), eh.MediaEngineContextTypes.STREAM)
                }
            })