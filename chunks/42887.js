            "use strict";
            let i, r, s, a;
            n.r(t), n.d(t, {
                default: function() {
                    return tp
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
                w = n("140622"),
                G = n("16001"),
                k = n("631508"),
                x = n("368765"),
                F = n("403770"),
                V = n("940146"),
                B = n("353500"),
                H = n("103979"),
                j = n("665862"),
                Y = n("122530"),
                W = n("928609"),
                K = n("891760"),
                z = n("374363"),
                q = n("599110"),
                X = n("922932"),
                Q = n("773336"),
                Z = n("286235"),
                J = n("50885"),
                $ = n("13798"),
                ee = n("271938"),
                et = n("366679"),
                en = n("533222"),
                ei = n("42203"),
                er = n("760190"),
                es = n("855867"),
                ea = n("945956"),
                eo = n("568307"),
                el = n("123647"),
                eu = n("49111"),
                ec = n("706530"),
                ed = n("180524"),
                ef = n("397336"),
                eE = n("353927"),
                eh = n("782340");
            let ep = new N.default("MediaEngineStore");
            (u = o || (o = {}))[u.DETACHED = 0] = "DETACHED", u[u.WAITING = 1] = "WAITING", u[u.ATTACHED = 2] = "ATTACHED", u[u.STARTED = 3] = "STARTED", u[u.PLAYING = 4] = "PLAYING", u[u.SILENCE = 5] = "SILENCE", (c = l || (l = {}))[c.FAILED = -1] = "FAILED", c[c.OK = 0] = "OK", c[c.ACE_INSTALL_FAILED = 4] = "ACE_INSTALL_FAILED", c[c.ACE_NOT_AUTHORIZED = 5] = "ACE_NOT_AUTHORIZED";
            let e_ = "MediaEngineStore",
                eS = {
                    left: 1,
                    right: 1
                };

            function em() {
                let e = {
                    mode: eu.InputModes.VOICE_ACTIVITY,
                    modeOptions: {
                        threshold: -60,
                        autoThreshold: Q.isPlatformEmbedded || __OVERLAY__,
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
                    inputVolume: eE.DEFAULT_VOLUME,
                    outputVolume: eE.DEFAULT_VOLUME,
                    inputDeviceId: eE.DEFAULT_DEVICE_ID,
                    outputDeviceId: eE.DEFAULT_DEVICE_ID,
                    videoDeviceId: eE.DEFAULT_DEVICE_ID,
                    qos: !1,
                    qosMigrated: !1,
                    videoHook: eT.supports(eE.Features.VIDEO_HOOK),
                    experimentalSoundshare2: null,
                    openH264: !0,
                    av1Enabled: !0,
                    h265Enabled: !0,
                    vadThrehsoldMigrated: !1,
                    aecDumpEnabled: !1
                };
                return e
            }
            let eT = (0, m.initializeMediaEngine)((0, m.determineMediaEngine)()),
                eg = {},
                eI = new Set([eE.MediaEngineContextTypes.DEFAULT]),
                eC = eT.supports(eE.Features.AUTO_ENABLE),
                ev = !1,
                eA = eE.MediaEngineContextTypes.STREAM,
                eR = {
                    [eE.DEFAULT_DEVICE_ID]: tt(eh.default.Messages.NO_INPUT_DEVICES)
                },
                eN = {
                    [eE.DEFAULT_DEVICE_ID]: tt(eh.default.Messages.NO_OUTPUT_DEVICES)
                },
                eO = {
                    [eE.DEFAULT_DEVICE_ID]: tt(eh.default.Messages.NO_VIDEO_DEVICES)
                },
                eD = !1,
                ey = !1,
                eP = !1,
                eL = !1,
                eb = !1,
                eM = eE.DISABLED_DEVICE_ID,
                eU = !1,
                ew = !1,
                eG = !1,
                ek = null,
                ex = !1,
                eF = !1,
                eV = !1,
                eB = !1,
                eH = !1,
                ej = null,
                eY = !1,
                eW = eu.SoundshareEnableState.NOT_ENABLED,
                eK = !1,
                ez = !1;
            W.default.hasPermission(ed.NativePermissionTypes.AUDIO, {
                showAuthorizationError: !1
            }), W.default.hasPermission(ed.NativePermissionTypes.CAMERA, {
                showAuthorizationError: !1
            });
            let eq = new Set,
                eX = !1,
                eQ = !1,
                eZ = {},
                eJ = {};

            function e$() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.DEFAULT,
                    t = eg[e];
                return null == t && (t = em(), eg[e] = t), t
            }

            function e0(e) {
                let t = e$(e.context);
                e.setInputMode(t.mode, {
                    vadThreshold: t.modeOptions.threshold,
                    vadAutoThreshold: t.modeOptions.autoThreshold,
                    vadUseKrisp: t.modeOptions.vadUseKrisp && function() {
                        return eH || !1
                    }(),
                    vadLeading: t.modeOptions.vadLeading,
                    vadTrailing: t.modeOptions.vadTrailing,
                    pttReleaseDelay: t.modeOptions.delay
                })
            }

            function e1(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.DEFAULT_VOLUME;
                return h.clamp(e, 0, t)
            }

            function e2(e) {
                let t = e$(e.context),
                    n = !eC || t.mute || t.deaf;
                e.context === eE.MediaEngineContextTypes.DEFAULT && (n = n || eD || ey || eP || !W.default.didHavePermission(ed.NativePermissionTypes.AUDIO)), e.setSelfMute(n), e.setSelfDeaf(t.deaf)
            }

            function e4() {
                var e, t, n;
                let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eb,
                    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
                    o = s;
                if ((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == a ? void 0 : null === (e = a.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, Q.isWindows)() && v.cancelAttachToProcess(o.desktopSource.soundshareId), eT.setGoLiveSource(null, eA)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == a ? void 0 : null === (t = a.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == a ? void 0 : null === (n = a.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eT.setGoLiveSource(null, eA), (eb || r) && (eM = (eb = r) ? ti(eO, e$().videoDeviceId) : eE.DISABLED_DEVICE_ID, eT.setVideoInputDevice(eM)), s = a, null != a) {
                    let e = {
                        resolution: a.quality.resolution,
                        frameRate: a.quality.frameRate
                    };
                    if (null != a.desktopSource) {
                        let {
                            useQuartzCapturer: t
                        } = k.default.getCurrentConfig({
                            location: "f627ab_1"
                        }, {
                            autoTrackExposure: !1
                        }), {
                            hdrCaptureMode: n
                        } = U.default.getCurrentConfig({
                            location: "f627ab_2"
                        }, {
                            autoTrackExposure: !1
                        }), r = e$().videoHook, s = eT.supports(eE.Features.CAPTURE_TIMEOUT_EXPERIMENTS), {
                            videoHookStaleFrameTimeoutMs: o
                        } = V.default.getConfig(s && r, "e225cfdf5_vh1", !0), {
                            graphicsCaptureStaleFrameTimeoutMs: l
                        } = j.default.getConfig(s && e5(), "e225cfdf5_wgc2", !0);
                        eT.setGoLiveSource({
                            desktopDescription: {
                                id: a.desktopSource.id,
                                soundshareId: a.desktopSource.soundshareId,
                                useVideoHook: r,
                                useGraphicsCapture: e5(),
                                useLoopback: i.getExperimentalSoundshare(),
                                useQuartzCapturer: t,
                                allowScreenCaptureKit: e7(!0),
                                videoHookStaleFrameTimeoutMs: o,
                                graphicsCaptureStaleFrameTimeoutMs: l,
                                hdrCaptureMode: n
                            },
                            quality: e
                        }, eA)
                    }
                    null != a.cameraSource && eT.setGoLiveSource({
                        cameraDescription: {
                            videoDeviceGuid: a.cameraSource.videoDeviceGuid,
                            audioDeviceGuid: a.cameraSource.audioDeviceGuid
                        },
                        quality: e
                    }, eA)
                }
            }

            function e3(e, t, n, i) {
                var r;
                let s = null !== (r = null == e ? void 0 : e.soundshareSession) && void 0 !== r ? r : "";
                null == eJ[s] && (eJ[s] = new Set);
                let a = null != t && !eJ[s].has(t);
                a && eJ[s].add(t), (null == t || a) && q.default.track(eu.AnalyticEvents.SOUNDSHARE_FAILED, {
                    soundshare_failure_code: t,
                    soundshare_failure_reason: n,
                    soundshare_failure_will_retry: i,
                    ...(0, y.default)(e)
                })
            }

            function e6(e) {
                let t = e$(),
                    n = t.inputDeviceId;
                if (e.setEchoCancellation(en.default.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(en.default.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(en.default.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, Q.isWeb)()) {
                    let n = t.noiseCancellation ? -150 : -100;
                    e.setSilenceThreshold(n)
                }
            }

            function e5() {
                return (0, Q.isWindows)() && _.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, ec.WINDOWS_GRAPHICS_CAPTURE_VERSION)
            }

            function e7(e) {
                return !!((0, Q.isMac)() && eT.supports(eE.Features.SCREEN_CAPTURE_KIT) && _.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, ec.DARWIN_SCKIT_VERSION)) && x.default.getCurrentConfig({
                    location: "screenCaptureKitEnabled"
                }, {
                    autoTrackExposure: e
                }).allowScreenCaptureKit
            }
            let e8 = new class {
                start() {
                    !this.started && (this.started = !0, eT.on(m.MediaEngineEvent.Silence, this.handleSilence))
                }
                stop() {
                    this.started && (this.started = !1, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), eT.removeListener(m.MediaEngineEvent.Silence, this.handleSilence), I.default.dispatch({
                        type: "AUDIO_INPUT_DETECTED",
                        inputDetected: null
                    }))
                }
                update() {
                    let e = e$();
                    !ex && ea.default.getState() === eu.RTCConnectionStates.RTC_CONNECTED && e.mode === eu.InputModes.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop()
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
                            }), e && (eF = !0))
                        }, t ? this.voiceTimeout : this.noVoiceTimeout)
                    }
                }
            };

            function e9(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.MediaEngineContextTypes.DEFAULT,
                    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    i = e$(t);
                return Object.assign(i, e), !__OVERLAY__ && n && T.default.set(e_, eg), i
            }

            function te() {
                !eC && eT.enable().then(() => I.default.dispatch({
                    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                    enabled: !0,
                    unmute: !1
                }))
            }

            function tt(e) {
                return {
                    id: eE.DEFAULT_DEVICE_ID,
                    index: 0,
                    name: e,
                    disabled: !0
                }
            }

            function tn(e, t) {
                if (0 === e.length) {
                    let e = tt(t);
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

            function ti(e, t) {
                var n;
                let i = null !== (n = e[t]) && void 0 !== n ? n : h(e).values().first();
                return null != i ? i.id : t
            }

            function tr() {
                var e, t;
                let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    i = null !== (e = z.default.settings.audioContextSettings) && void 0 !== e ? e : {
                        user: {},
                        stream: {}
                    };
                for (let e of Object.keys(i)) {
                    let r = e === ef.ProtoAudioSettingsContextTypes.USER ? eE.MediaEngineContextTypes.DEFAULT : eE.MediaEngineContextTypes.STREAM,
                        s = r === eE.MediaEngineContextTypes.STREAM ? eE.DEFAULT_STREAM_VOLUME : eE.DEFAULT_VOLUME,
                        a = null !== (t = i[e]) && void 0 !== t ? t : {},
                        {
                            localMutes: o,
                            localVolumes: l
                        } = e$(r);
                    for (let [e, t] of Object.entries(a)) t.muted ? o[e] = !0 : delete o[e], t.volume !== s ? l[e] = t.volume : delete l[e], eT.eachConnection(n => {
                        n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
                    }, r);
                    if (n) {
                        let e = new Set([...Object.keys(o), ...Object.keys(l)]);
                        for (let t of e) null == a[t] && (delete o[t], delete l[t], eT.eachConnection(e => {
                            e.setLocalVolume(t, s), e.setLocalMute(t, !1)
                        }, r))
                    }
                    e9({
                        localMutes: o,
                        localVolumes: l
                    }, r)
                }
            }

            function ts(e) {
                if (null == i) return ep.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
                    soundshareId: null,
                    soundshareSession: ""
                };
                {
                    let t = i.getExperimentalSoundshare() ? e : X.default.getAudioPid(e),
                        n = "";
                    return null != t && (n = X.default.generateSessionFromPid(t)), {
                        soundshareId: t,
                        soundshareSession: n
                    }
                }
            }

            function ta(e, t) {
                (0, Q.isWindows)() && v.attachToProcess(e, {
                    soundshare_session: t
                }).then(t => {
                    null != t && !eo.default.shouldContinueWithoutElevatedProcessForPID(e) && I.default.wait(() => {
                        I.default.dispatch({
                            type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                            errorMessage: t
                        })
                    })
                })
            }

            function to(e) {
                let t = e$();
                q.default.track(eu.AnalyticEvents.VOICE_PROCESSING, {
                    echo_cancellation: t.echoCancellation,
                    noise_cancellation: t.noiseCancellation,
                    noise_suppression: t.noiseSuppression,
                    automatic_gain_control: t.automaticGainControl,
                    location: e
                })
            }

            function tl() {
                let e = e$(),
                    t = e.inputDeviceId,
                    n = en.default.hasEchoCancellation(t) || e.echoCancellation,
                    i = en.default.hasNoiseSuppression(t) || e.noiseSuppression,
                    r = en.default.hasAutomaticGainControl(t) || e.automaticGainControl,
                    s = e.noiseCancellation;
                eT.setLoopback(eQ, {
                    echoCancellation: n,
                    noiseSuppression: i,
                    automaticGainControl: r,
                    noiseCancellation: s
                })
            }

            function tu() {
                return eH || !1
            }
            async function tc() {
                try {
                    await J.default.ensureModule("discord_krisp"), J.default.requireModule("discord_krisp"), eH = !0, i.emitChange()
                } catch (t) {
                    ep.warn("Failed to load Krisp module: ".concat(t.message)), Z.default.captureException(t);
                    let e = eE.NoiseCancellerError.INITIALIZED;
                    if (t.message.includes(": ")) {
                        let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
                        e = isNaN(n) || 0 === n ? eE.NoiseCancellerError.INITIALIZED : n
                    }
                    q.default.track(eu.AnalyticEvents.VOICE_PROCESSING, {
                        noise_canceller_error: e
                    }), e9({
                        noiseCancellation: !1
                    })
                } finally {
                    eB = !1
                }
            }

            function td(e) {
                let {
                    section: t
                } = e;
                return t === eu.UserSettingsSections.VOICE && te(), !1
            }

            function tf(e) {
                eW = 0 === e ? eu.SoundshareEnableState.ENABLED : 5 === e ? eu.SoundshareEnableState.ENABLING : -1 === e || 4 === e ? eu.SoundshareEnableState.FAILED_TO_ENABLE : eu.SoundshareEnableState.NOT_ENABLED
            }
            async function tE() {
                if (eW === eu.SoundshareEnableState.ENABLING) return;
                eW = eu.SoundshareEnableState.ENABLING;
                let e = {};
                try {
                    let t = await eT.enableSoundshare();
                    tf(t.code), e = {
                        status_code: t.code,
                        message: t.message
                    }
                } catch (t) {
                    ep.warn("Failed to enable macOS soundshare: ".concat(t)), tf(-1), e = {
                        status_code: -1,
                        message: "".concat(t)
                    }
                } finally {
                    i.emitChange(), q.default.track(eu.AnalyticEvents.SOUNDSHARE_ENABLE, e)
                }
            }
            class th extends S.default.Store {
                initialize() {
                    eT.on(m.MediaEngineEvent.Connection, e => {
                        let {
                            maxSyncDelayOverride: t
                        } = G.default.getCurrentConfig({
                            location: "f627ab_3"
                        }, {
                            autoTrackExposure: !1
                        });
                        t > 0 && eT.setMaxSyncDelayOverride(t), e0(e), e2(e), e6(e);
                        let n = e$();
                        e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers), e.setQoS(n.qos), e.setExperimentalEncoders(n.experimentalEncoders), e.setHardwareH264(n.hardwareH264);
                        let {
                            useExperimentalRateControl: r
                        } = B.default.getCurrentConfig({
                            location: "f627ab_4"
                        }, {
                            autoTrackExposure: !1
                        });
                        r && e.setExperimentFlag(eE.ExperimentFlags.VIDEOTOOLBOX_RATE_CONTROL, !0);
                        {
                            let {
                                signalH265SupportMacOS: t
                            } = b.default.getCurrentConfig({
                                location: "f627ab_8"
                            }, {
                                autoTrackExposure: !0
                            });
                            t && e.setExperimentFlag(eE.ExperimentFlags.SIGNAL_H265_SUPPORT, !0);
                            let {
                                signalH265SupportNvenc: n
                            } = M.default.getCurrentConfig({
                                location: "f627ab_9"
                            }, {
                                autoTrackExposure: !0
                            });
                            n && e.setExperimentFlag(eE.ExperimentFlags.SIGNAL_H265_SUPPORT, !0)
                        }
                        let {
                            signalAV1Support: a
                        } = P.default.getCurrentConfig({
                            location: "f627ab_10"
                        }, {
                            autoTrackExposure: !0
                        });
                        a && e.setExperimentFlag(eE.ExperimentFlags.SIGNAL_AV1_SUPPORT, !0);
                        let {
                            allowSettingFullbandAndroid: o
                        } = w.default.getCurrentConfig({
                            location: "f627ab_14"
                        }, {
                            autoTrackExposure: !0
                        });
                        if (o && eT.setHasFullbandPerformance((0, O.hasPerformanceForKrispFullband)()), (0, R.default)(i)) {
                            let t = A.default.getSettings();
                            e.setExperimentFlag(eE.ExperimentFlags.STREAMER_CLIP, t.clipsEnabled);
                            let {
                                enableViewerClipping: n
                            } = H.default.getCurrentConfig({
                                location: "f627ab_15"
                            }, {
                                autoTrackExposure: !1
                            });
                            e.setViewerSideClip(n), e.setClipsKeyFrameInterval(n && t.viewerClipsEnabled ? eE.VIEWERSIDE_CLIP_KFI_MS : 0)
                        }
                        for (let t of (n = e$(e.context), e.setPostponeDecodeLevel(100), Object.keys(n.localMutes))) t !== ee.default.getId() && e.setLocalMute(t, n.localMutes[t]);
                        for (let t of Object.keys(n.localVolumes)) t !== ee.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
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
                        }), e.context === eE.MediaEngineContextTypes.DEFAULT && (eU = !1, e.on(m.BaseConnectionEvent.SpeakingWhileMuted, () => {
                            eU = !0, i.emitChange()
                        })), e.on(m.BaseConnectionEvent.DesktopSourceEnd, () => {
                            I.default.dispatch({
                                type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                                settings: {
                                    context: e.context
                                }
                            })
                        }), e.on(m.BaseConnectionEvent.SoundshareAttached, () => {
                            (null == s ? void 0 : s.desktopSource) != null && q.default.track(eu.AnalyticEvents.SOUNDSHARE_ATTACHED, (0, y.default)(null == s ? void 0 : s.desktopSource))
                        }), e.on(m.BaseConnectionEvent.SoundshareFailed, e => {
                            let {
                                failureCode: t,
                                failureReason: n,
                                willRetry: i
                            } = e;
                            e3(null == s ? void 0 : s.desktopSource, t, n, i)
                        }), e.on(m.BaseConnectionEvent.SoundshareSpeaking, () => {
                            (null == s ? void 0 : s.desktopSource) != null && (q.default.track(eu.AnalyticEvents.SOUNDSHARE_TRANSMITTING, (0, y.default)(null == s ? void 0 : s.desktopSource)), null != es.default.getHookError(eu.MediaEngineHookTypes.SOUND) && I.default.wait(() => I.default.dispatch({
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
                                    (null == s ? void 0 : s.desktopSource) != null && (e3(null == s ? void 0 : s.desktopSource, n, t, i), !i && (l.stop(), I.default.wait(() => I.default.dispatch({
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
                            (null == s ? void 0 : s.desktopSource) != null && q.default.track(eu.AnalyticEvents.VIDEOHOOK_INITIALIZED, {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: i,
                                success: r,
                                reinitialization: a,
                                ...(0, y.default)(null == s ? void 0 : s.desktopSource)
                            })
                        }), e.on(m.BaseConnectionEvent.NoiseCancellationError, e => {
                            ep.warn("noisecancellererror event: ".concat(e)), eY = !0, q.default.track(eu.AnalyticEvents.VOICE_PROCESSING, {
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
                            ep.warn("voiceactivitydetectorerror event: ".concat(e)), q.default.track(eu.AnalyticEvents.VOICE_PROCESSING, {
                                noise_canceller_error: e
                            }), I.default.dispatch({
                                type: "AUDIO_SET_MODE",
                                context: eE.MediaEngineContextTypes.DEFAULT,
                                mode: eu.InputModes.VOICE_ACTIVITY,
                                options: {
                                    ...e$(eE.MediaEngineContextTypes.DEFAULT).modeOptions,
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
                        }), e.setBitRate(et.default.bitrate), e.applyVideoQualityMode(el.default.mode)
                    }), eT.on(m.MediaEngineEvent.DeviceChange, (e, t, n) => {
                        I.default.dispatch({
                            type: "MEDIA_ENGINE_DEVICES",
                            inputDevices: e,
                            outputDevices: t,
                            videoDevices: n
                        })
                    }), eT.on(m.MediaEngineEvent.VolumeChange, (e, t) => {
                        I.default.dispatch({
                            type: "AUDIO_VOLUME_CHANGE",
                            inputVolume: e,
                            outputVolume: t
                        })
                    }), eT.on(m.MediaEngineEvent.DesktopSourceEnd, () => {
                        I.default.dispatch({
                            type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                            settings: null
                        })
                    }), eT.on(m.MediaEngineEvent.AudioPermission, e => {
                        ez = !0, I.default.dispatch({
                            type: "MEDIA_ENGINE_PERMISSION",
                            kind: "audio",
                            granted: e
                        })
                    }), eT.on(m.MediaEngineEvent.VideoPermission, e => {
                        I.default.dispatch({
                            type: "MEDIA_ENGINE_PERMISSION",
                            kind: "video",
                            granted: e
                        })
                    }), eT.on(m.MediaEngineEvent.WatchdogTimeout, async () => {
                        let e;
                        try {
                            await X.default.submitLiveCrashReport({
                                message: {
                                    message: "Voice Watchdog Timeout"
                                }
                            })
                        } catch (t) {
                            "number" == typeof t.status && (e = t.status)
                        }
                        ep.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)), q.default.track(eu.AnalyticEvents.VOICE_WATCHDOG_TIMEOUT, {
                            minidump_submission_error: e
                        })
                    }), eT.on(m.MediaEngineEvent.VideoInputInitialized, e => {
                        q.default.track(eu.AnalyticEvents.VIDEO_INPUT_INITIALIZED, {
                            device_name: e.description.name,
                            time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(1e3 * e.timeToFirstFrame),
                            timed_out: e.initializationTimerExpired,
                            activity: e.entropy
                        })
                    }), eT.on(m.MediaEngineEvent.ClipsRecordingRestartNeeded, () => {
                        I.default.dispatch({
                            type: "CLIPS_RESTART"
                        })
                    }), eT.on(m.MediaEngineEvent.ClipsInitFailure, (e, t) => {
                        I.default.wait(() => {
                            I.default.dispatch({
                                type: "CLIPS_INIT_FAILURE",
                                errMsg: e,
                                applicationName: t
                            })
                        })
                    }), eT.on(m.MediaEngineEvent.ClipsRecordingEnded, (e, t) => {
                        var n, i;
                        (null == a ? void 0 : null === (n = a.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == s ? void 0 : null === (i = s.desktopSource) || void 0 === i ? void 0 : i.soundshareId) !== t && v.cancelAttachToProcess(t), a = null)
                    }), e8.reset(), ! function() {
                        var e;
                        let t = T.default.get("audio");
                        null != t && (T.default.set(e_, {
                                [eE.MediaEngineContextTypes.DEFAULT]: t
                            }), T.default.remove("audio")), eg = null !== (e = T.default.get(e_)) && void 0 !== e ? e : {}, h.each(eg, e => {
                                if (h.defaultsDeep(e, em()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, $.toCombo)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && (e.vadUseKrispSettingVersion = 4, e.modeOptions.vadUseKrisp = !0), !e.qosMigrated && (e.qosMigrated = !0, e.qos = !1), !e.vadThrehsoldMigrated) {
                                    var t;
                                    e.vadThrehsoldMigrated = !0, (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60)
                                }(0, Q.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && (e.ncUseKrispjsSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0): 1 !== e.ncUseKrispSettingVersion && (e.ncUseKrispSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0), 1 !== e.av1EnabledSettingVersion && (e.av1EnabledSettingVersion = 1, e.av1Enabled = !0)
                            }),
                            function() {
                                let e = e$();
                                eT.setAudioInputDevice(e.inputDeviceId), eT.setAudioOutputDevice(e.outputDeviceId), e4(), eT.setInputVolume(e.inputVolume), eT.setOutputVolume(e.outputVolume), eT.setH264Enabled(e.openH264), eT.setAv1Enabled(e.av1Enabled), eT.setAecDump(e.aecDumpEnabled)
                            }()
                    }(), !(0, Q.isDesktop)() || __OVERLAY__ || eB || eH ? (0, Q.isWeb)() && eT.supports(eE.Features.NOISE_CANCELLATION) ? (eH = !0, i.emitChange()) : (0, Q.isWeb)() && e9({
                        noiseCancellation: !1
                    }) : (eB = !0, tc()), (0, Q.isMac)() && eT.supports(eE.Features.SOUNDSHARE) ? eT.getSoundshareStatus().then(e => {
                        tf(e)
                    }).catch(e => {
                        ep.warn("Failed to check if soundshare is enabled: ".concat(e))
                    }) : eW = eu.SoundshareEnableState.ENABLED, eZ = {
                        [eE.Features.VIDEO]: eT.supports(eE.Features.VIDEO),
                        [eE.Features.DESKTOP_CAPTURE]: eT.supports(eE.Features.DESKTOP_CAPTURE),
                        [eE.Features.HYBRID_VIDEO]: eT.supports(eE.Features.HYBRID_VIDEO)
                    }, this.waitFor(ee.default, en.default, ei.default, es.default, ea.default, eo.default, W.default.storage, z.default, er.default, A.default)
                }
                supports(e) {
                    return eT.supports(e)
                }
                supportsInApp(e) {
                    return eZ[e] || eT.supports(e)
                }
                isSupported() {
                    return eT.supported()
                }
                isExperimentalEncodersSupported() {
                    return eT.supports(eE.Features.EXPERIMENTAL_ENCODERS)
                }
                isNoiseSuppressionSupported() {
                    return eT.supports(eE.Features.NOISE_SUPPRESSION)
                }
                isNoiseCancellationSupported() {
                    return eH || !1
                }
                isNoiseCancellationError() {
                    return eY
                }
                isAutomaticGainControlSupported() {
                    return eT.supports(eE.Features.AUTOMATIC_GAIN_CONTROL)
                }
                isAdvancedVoiceActivitySupported() {
                    return eH || !1
                }
                isAecDumpSupported() {
                    return eT.supports(eE.Features.AEC_DUMP)
                }
                isSimulcastSupported() {
                    return eT.supports(eE.Features.VIDEO) && eT.supports(eE.Features.SIMULCAST)
                }
                getAecDump() {
                    return e$().aecDumpEnabled
                }
                getMediaEngine() {
                    return eT
                }
                getVideoComponent() {
                    return eT.supports(eE.Features.DIRECT_VIDEO) && eT.setUseDirectVideo(!0), eT.Video
                }
                getCameraComponent() {
                    return eT.supports(eE.Features.DIRECT_VIDEO) && eT.setUseDirectVideo(!0), eT.Camera
                }
                isEnabled() {
                    return eC
                }
                isMute() {
                    return this.isSelfMute() || eD
                }
                isDeaf() {
                    return this.isSelfDeaf() || eL
                }
                hasContext(e) {
                    return null != eg[e]
                }
                isSelfMutedTemporarily() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.DEFAULT;
                    return e === eE.MediaEngineContextTypes.DEFAULT && ey
                }
                isSelfMute() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.DEFAULT;
                    return !this.isEnabled() || e$(e).mute || !W.default.didHavePermission(ed.NativePermissionTypes.AUDIO) || this.isSelfDeaf(e) || e === eE.MediaEngineContextTypes.DEFAULT && eP
                }
                isHardwareMute() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.DEFAULT;
                    return !this.isMute() && !this.isSelfMutedTemporarily(e) && en.default.isHardwareMute(this.getInputDeviceId())
                }
                isSelfDeaf() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.DEFAULT;
                    return !this.isSupported() || e$(e).deaf
                }
                isVideoEnabled() {
                    return eb && eG
                }
                isVideoAvailable() {
                    return Object.values(eO).some(e => {
                        let {
                            disabled: t
                        } = e;
                        return !t
                    })
                }
                isScreenSharing() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.STREAM;
                    return eA === e && null != s
                }
                isSoundSharing() {
                    var e;
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.STREAM;
                    return eA === t && null != s && (null === (e = s.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null
                }
                isLocalMute(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.MediaEngineContextTypes.DEFAULT;
                    return e !== ee.default.getId() && (e$(t).localMutes[e] || !1)
                }
                supportsDisableLocalVideo() {
                    return eT.supports(eE.Features.DISABLE_VIDEO)
                }
                isLocalVideoDisabled(e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.MediaEngineContextTypes.DEFAULT;
                    return null !== (t = e$(n).disabledLocalVideos[e]) && void 0 !== t && t
                }
                getVideoToggleState(e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.MediaEngineContextTypes.DEFAULT;
                    return null !== (t = e$(n).videoToggleStateMap[e]) && void 0 !== t ? t : eu.VideoToggleState.NONE
                }
                isLocalVideoAutoDisabled(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.MediaEngineContextTypes.DEFAULT;
                    return t === eE.MediaEngineContextTypes.DEFAULT && eq.has(e)
                }
                isAnyLocalVideoAutoDisabled() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.DEFAULT;
                    return e === eE.MediaEngineContextTypes.DEFAULT && eq.size > 0
                }
                isMediaFilterSettingLoading() {
                    return eK
                }
                isNativeAudioPermissionReady() {
                    return ez
                }
                getGoLiveSource() {
                    return s
                }
                getGoLiveContext() {
                    return eA
                }
                getLocalPan(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.MediaEngineContextTypes.DEFAULT,
                        n = e$(t).localPans[e];
                    return null != n ? n : eS
                }
                getLocalVolume(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.MediaEngineContextTypes.DEFAULT,
                        n = t === eE.MediaEngineContextTypes.STREAM,
                        i = n ? eE.DEFAULT_STREAM_VOLUME : eE.DEFAULT_VOLUME,
                        r = e$(t).localVolumes[e];
                    return null != r ? r : i
                }
                getInputVolume() {
                    return e$().inputVolume
                }
                getOutputVolume() {
                    return e$().outputVolume
                }
                getMode() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.DEFAULT;
                    return e$(e).mode
                }
                getModeOptions() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.DEFAULT;
                    return e$(e).modeOptions
                }
                getShortcuts() {
                    let e = {};
                    return h.each(eg, (t, n) => {
                        let {
                            mode: i,
                            modeOptions: {
                                shortcut: r
                            }
                        } = t;
                        i === eu.InputModes.PUSH_TO_TALK && eI.has(n) && (e[n] = r)
                    }), e
                }
                getInputDeviceId() {
                    return ti(eR, e$().inputDeviceId)
                }
                getOutputDeviceId() {
                    return ti(eN, e$().outputDeviceId)
                }
                getVideoDeviceId() {
                    return ti(eO, e$().videoDeviceId)
                }
                getInputDevices() {
                    return eR
                }
                getOutputDevices() {
                    return eN
                }
                getVideoDevices() {
                    return eO
                }
                getEchoCancellation() {
                    let e = e$();
                    return en.default.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation
                }
                getH265Enabled() {
                    return e$().h265Enabled
                }
                getLoopback() {
                    return eT.getLoopback()
                }
                getNoiseSuppression() {
                    let e = e$();
                    return en.default.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression
                }
                getAutomaticGainControl() {
                    let e = e$();
                    return en.default.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl
                }
                getNoiseCancellation() {
                    return e$().noiseCancellation
                }
                getExperimentalEncoders() {
                    return e$().experimentalEncoders
                }
                getHardwareH264() {
                    return e$().hardwareH264
                }
                getEnableSilenceWarning() {
                    return e$().silenceWarning
                }
                getDebugLogging() {
                    return eT.getDebugLogging()
                }
                getQoS() {
                    return e$().qos
                }
                getAttenuation() {
                    return e$().attenuation
                }
                getAttenuateWhileSpeakingSelf() {
                    return e$().attenuateWhileSpeakingSelf
                }
                getAttenuateWhileSpeakingOthers() {
                    return e$().attenuateWhileSpeakingOthers
                }
                getAudioSubsystem() {
                    return eT.getAudioSubsystem()
                }
                getSettings() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.DEFAULT;
                    return e$(e)
                }
                getState() {
                    return {
                        settingsByContext: eg,
                        inputDevices: eR,
                        outputDevices: eN,
                        appSupported: eZ,
                        krispModuleLoaded: eH,
                        goLiveSource: s,
                        goLiveContext: eA
                    }
                }
                getInputDetected() {
                    return ek
                }
                getNoInputDetectedNotice() {
                    return eF
                }
                getPacketDelay() {
                    return Q.isPlatformEmbedded || this.getMode() !== eu.InputModes.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
                }
                setCanHavePriority(e, t) {
                    eT.eachConnection(n => n.setCanHavePriority(e, t))
                }
                isInteractionRequired() {
                    return ev
                }
                getVideoHook() {
                    return e$().videoHook
                }
                supportsVideoHook() {
                    return eT.supports(eE.Features.VIDEO_HOOK)
                }
                getExperimentalSoundshare() {
                    let e = e$().experimentalSoundshare2;
                    return this.supportsExperimentalSoundshare() && (null == e || e)
                }
                supportsExperimentalSoundshare() {
                    return eT.supports(eE.Features.EXPERIMENTAL_SOUNDSHARE) && _.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, ec.WINDOWS_SOUNDSHARE_VERSION)
                }
                getOpenH264() {
                    return e$().openH264
                }
                getAv1Enabled() {
                    return e$().av1Enabled
                }
                getEverSpeakingWhileMuted() {
                    return eU
                }
                getSoundshareEnabled() {
                    return eW
                }
                supportsEnableSoundshare() {
                    return (0, Q.isMac)() && eT.supports(eE.Features.SOUNDSHARE) && _.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, ec.DARWIN_SOUNDSHARE_VERSION) && !(_.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, ec.DARWIN_SCKIT_AUDIO_VERSION) && e7(!1))
                }
                supportsScreenSoundshare() {
                    return (0, Q.isMac)() && eT.supports(eE.Features.SOUNDSHARE) && _.satisfies(null === C.default || void 0 === C.default ? void 0 : C.default.os.release, ec.DARWIN_SCKIT_AUDIO_VERSION) && e7(!1) || (0, Q.isWindows)() && eT.supports(eE.Features.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
                }
                getVideoStreamParameters() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.DEFAULT,
                        t = this.supports(eE.Features.VIDEO) ? [{
                            rid: "100",
                            type: e === eE.MediaEngineContextTypes.DEFAULT ? eE.MediaTypes.VIDEO : eE.MediaTypes.SCREEN,
                            quality: 100
                        }] : [];
                    return this.isSimulcastSupported() && e === eE.MediaEngineContextTypes.DEFAULT && t.push({
                        rid: "50",
                        type: eE.MediaTypes.VIDEO,
                        quality: 50
                    }), t
                }
                getSupportedSecureFramesProtocolVersion(e) {
                    let t = eT.getSupportedSecureFramesProtocolVersion(),
                        n = F.SecureFramesUserExperiment.getCurrentConfig({
                            location: "MediaEngineStore"
                        }),
                        i = null != e ? F.SecureFramesGuildExperiment.getCurrentConfig({
                            guildId: e,
                            location: "MediaEngineStore"
                        }) : null,
                        r = n.canSupportSecureFrames || (null == i ? void 0 : i.canSupportSecureFrames),
                        s = !(0, Q.isIOS)() && !(0, Q.isAndroid)() && (n.canSupportMls || (null == i ? void 0 : i.canSupportMls));
                    return r ? s ? t : t % 100 : 0
                }
                hasClipsSource() {
                    return null != a
                }
            }
            th.displayName = "MediaEngineStore";
            var tp = i = new th(I.default, {
                VOICE_CHANNEL_SELECT: function(e) {
                    let {
                        guildId: t,
                        channelId: n,
                        currentVoiceChannelId: i,
                        video: r
                    } = e;
                    if (i !== n && e4(r, null), null != t || null == n) {
                        eV = !1;
                        return
                    }
                    if (eV) return;
                    eV = !0;
                    let s = e$();
                    (s.mute || s.deaf) && (e9({
                        deaf: !1,
                        mute: !1
                    }), eT.eachConnection(e2))
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return t.reduce((e, t) => {
                        if (r === t.sessionId) {
                            eD = t.mute || t.suppress, eL = t.deaf, eT.eachConnection(e2);
                            let e = null != t.guildId && null != t.channelId && null != ej && ej !== t.channelId,
                                n = !e && eb;
                            return e4(n), ej = t.channelId, !0
                        }
                        return !__OVERLAY__ && t.userId === ee.default.getId() && null == ea.default.getChannelId() && e4(!1, null), e
                    }, !1)
                },
                CONNECTION_OPEN: function(e) {
                    r = e.sessionId, eD = !1, eL = !1, (0, K.shouldReadWriteAudioSettings)() && tr()
                },
                CONNECTION_CLOSED: function() {
                    r = null
                },
                RTC_CONNECTION_STATE: function(e) {
                    switch (e.state) {
                        case eu.RTCConnectionStates.CONNECTING:
                            te();
                            break;
                        case eu.RTCConnectionStates.RTC_CONNECTING:
                            ex = !1, eF = !1;
                            break;
                        case eu.RTCConnectionStates.RTC_CONNECTED:
                            e4();
                            break;
                        case eu.RTCConnectionStates.DISCONNECTED:
                            (function() {
                                if (0 === eq.size) return;
                                let e = eE.MediaEngineContextTypes.DEFAULT,
                                    {
                                        disabledLocalVideos: t
                                    } = e$(e);
                                eq.forEach(n => {
                                    f(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], eT.eachConnection(e => e.setLocalVideoDisabled(n, !1), e)
                                }), eq.clear(), e9({
                                    disabledLocalVideos: t
                                }, e, !1)
                            })()
                    }
                    e8.update()
                },
                AUDIO_SET_TEMPORARY_SELF_MUTE: function(e) {
                    let {
                        mute: t
                    } = e;
                    ey = t, eT.eachConnection(e2)
                },
                AUDIO_TOGGLE_SELF_MUTE: function(e) {
                    let {
                        context: t
                    } = e, {
                        mute: n,
                        deaf: i
                    } = e$(t);
                    if (t === eE.MediaEngineContextTypes.DEFAULT && (W.default.requestPermission(ed.NativePermissionTypes.AUDIO), eP)) return !1;
                    !(n = !i && !n) && (i = !1), e9({
                        mute: n,
                        deaf: i
                    }, t), eT.eachConnection(e2)
                },
                AUDIO_TOGGLE_SELF_DEAF: function(e) {
                    let {
                        context: t
                    } = e, n = e$(t);
                    e9({
                        deaf: !n.deaf
                    }, t), eT.eachConnection(e2)
                },
                AUDIO_TOGGLE_LOCAL_MUTE: function(e) {
                    let {
                        context: t,
                        userId: n
                    } = e;
                    if (n === ee.default.getId()) return;
                    let {
                        localMutes: i
                    } = e$(t);
                    i[n] ? delete i[n] : i[n] = !0, e9({
                        localMutes: i
                    }, t), eT.eachConnection(e => e.setLocalMute(n, i[n] || !1), t)
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
                    let h = c === eu.VideoToggleState.DISABLED,
                        {
                            disabledLocalVideos: p
                        } = e$(l),
                        _ = null !== (t = p[u]) && void 0 !== t && t,
                        S = eq.has(u),
                        m = c === eu.VideoToggleState.AUTO_ENABLED || c === eu.VideoToggleState.MANUAL_ENABLED;
                    ep.info("disableVideo=".concat(h, " currentlyDisabled=").concat(_, " currentlyAutoDisabled=").concat(S, ", isVideoShown=").concat(m)), f(!(S && !_), "If you are auto-disabled, then you are also disabled.");
                    let T = h !== _,
                        g = l === eE.MediaEngineContextTypes.DEFAULT,
                        I = E && T && g,
                        C = d && T && g;
                    ep.info("changed=".concat(T, " isDefaultContext=").concat(g, " isUpdateCausedByVideoHealthManager=").concat(I, " isManualToggleByUser=").concat(C));
                    let {
                        videoToggleStateMap: v
                    } = e$(l);
                    if (v[u] === eu.VideoToggleState.AUTO_PROBING && c === eu.VideoToggleState.AUTO_ENABLED && (0, Y.default)(u, h ? eE.VideoToggleReason.AUTO_DISABLE : eE.VideoToggleReason.AUTO_ENABLE, m), v[u] = c, e9({
                            videoToggleStateMap: v
                        }, l, d), c === eu.VideoToggleState.AUTO_PROBING ? null === (n = ea.default.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (i = ea.default.getRTCConnection()) || void 0 === i || i.pauseStatsCollectionForUser(u, !1), !eX && (ep.info("isAutoDisableAllowed=".concat(eX, " - disabling VideoHealthManager")), null === (s = ea.default.getRTCConnection()) || void 0 === s || null === (r = s.getVideoHealthManager()) || void 0 === r || r.disable()), I) {
                        if (!h && !S || h && !eX) return;
                        (0, Y.default)(u, h ? eE.VideoToggleReason.AUTO_DISABLE : eE.VideoToggleReason.AUTO_ENABLE, m), h ? eq.add(u) : eq.delete(u)
                    } else C && (S && !h ? (ep.info("disallowing auto-disable for this session because of manual override by user"), eX = !1, null === (o = ea.default.getRTCConnection()) || void 0 === o || null === (a = o.getVideoHealthManager()) || void 0 === a || a.disable(), (0, Y.default)(u, eE.VideoToggleReason.MANUAL_REENABLE, m)) : (0, Y.default)(u, h ? eE.VideoToggleReason.MANUAL_DISABLE : eE.VideoToggleReason.MANUAL_ENABLE, m));
                    g && !h && eq.delete(u), h ? p[u] = !0 : delete p[u], e9({
                        disabledLocalVideos: p
                    }, l, d), eT.eachConnection(e => {
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
                    if (n === ee.default.getId()) return;
                    let r = t === eE.MediaEngineContextTypes.STREAM,
                        s = r ? eE.DEFAULT_STREAM_VOLUME : eE.DEFAULT_VOLUME,
                        {
                            localVolumes: a
                        } = e$(t);
                    i === s ? delete a[n] : a[n] = i, e9({
                        localVolumes: a
                    }, t), eT.eachConnection(e => e.setLocalVolume(n, i), t)
                },
                AUDIO_SET_LOCAL_PAN: function(e) {
                    let {
                        context: t,
                        userId: n,
                        left: i,
                        right: r
                    } = e, {
                        localPans: s
                    } = e$(t);
                    s[n] = {
                        left: i,
                        right: r
                    }, e9({
                        localPans: s
                    }, t), eT.eachConnection(e => e.setLocalPan(n, i, r), t)
                },
                AUDIO_SET_MODE: function(e) {
                    let {
                        context: t,
                        mode: n,
                        options: i
                    } = e;
                    e9({
                        mode: n,
                        modeOptions: i
                    }, t), eT.eachConnection(e0), e8.update()
                },
                AUDIO_SET_INPUT_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    e9({
                        inputVolume: e1(t)
                    }), eT.setInputVolume(t)
                },
                AUDIO_SET_OUTPUT_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    e9({
                        outputVolume: t
                    }), eT.setOutputVolume(t)
                },
                AUDIO_SET_INPUT_DEVICE: function(e) {
                    let {
                        id: t
                    } = e;
                    e9({
                        inputDeviceId: t = ti(eR, t)
                    }), eT.setAudioInputDevice(t)
                },
                AUDIO_SET_OUTPUT_DEVICE: function(e) {
                    let {
                        id: t
                    } = e;
                    e9({
                        outputDeviceId: t = ti(eN, t)
                    }), eT.setAudioOutputDevice(t)
                },
                AUDIO_SET_ECHO_CANCELLATION: function(e) {
                    let t = e9({
                        echoCancellation: e.enabled
                    });
                    eT.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), tl(), to(e.location)
                },
                MEDIA_ENGINE_SET_H265: function(e) {
                    let t = e9({
                        h265Enabled: e.enabled
                    });
                    eT.setH265Enabled(t.h265Enabled)
                },
                AUDIO_SET_LOOPBACK: function(e) {
                    let {
                        enabled: t
                    } = e;
                    return eQ = t, tl()
                },
                AUDIO_SET_NOISE_SUPPRESSION: function(e) {
                    let t = e9({
                        noiseSuppression: e.enabled
                    });
                    eT.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), tl(), to(e.location)
                },
                AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function(e) {
                    let t = e9({
                        automaticGainControl: e.enabled
                    });
                    eT.eachConnection(e => e.setAutomaticGainControl(t.automaticGainControl)), tl(), to(e.location)
                },
                AUDIO_SET_NOISE_CANCELLATION: function(e) {
                    let t = e9({
                        noiseCancellation: e.enabled
                    });
                    eT.eachConnection(e => e.setNoiseCancellation(t.noiseCancellation)), tl(), to(e.location)
                },
                AUDIO_SET_DISPLAY_SILENCE_WARNING: function(e) {
                    e9({
                        silenceWarning: e.enabled
                    }), e8.update()
                },
                AUDIO_SET_DEBUG_LOGGING: function(e) {
                    eT.setDebugLogging(e.enabled)
                },
                MEDIA_ENGINE_SET_VIDEO_HOOK: function(e) {
                    e9({
                        videoHook: e.enabled
                    })
                },
                MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function(e) {
                    e9({
                        experimentalSoundshare2: e.enabled
                    })
                },
                AUDIO_SET_ATTENUATION: function(e) {
                    let {
                        attenuation: t,
                        attenuateWhileSpeakingSelf: n,
                        attenuateWhileSpeakingOthers: i
                    } = e, r = e9({
                        attenuation: t,
                        attenuateWhileSpeakingSelf: n,
                        attenuateWhileSpeakingOthers: i
                    });
                    eT.eachConnection(e => e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers))
                },
                AUDIO_SET_QOS: function(e) {
                    let {
                        enabled: t
                    } = e;
                    e9({
                        qos: t
                    }), eT.eachConnection(e => e.setQoS(t))
                },
                MEDIA_ENGINE_DEVICES: function(e) {
                    let {
                        inputDevices: t,
                        outputDevices: n,
                        videoDevices: i
                    } = e;
                    ! function(e) {
                        let t = eR;
                        if (eR = tn(e, eh.default.Messages.NO_INPUT_DEVICES), !h.isEqual(eR, t)) {
                            let e = e$(),
                                t = ti(eR, e.inputDeviceId);
                            eT.setAudioInputDevice(t)
                        }
                    }(t), ! function(e) {
                        let t = eN;
                        if (eN = tn(e, eh.default.Messages.NO_OUTPUT_DEVICES), !h.isEqual(eN, t)) {
                            let e = e$(),
                                t = ti(eN, e.outputDeviceId);
                            eT.setAudioOutputDevice(t)
                        }
                    }(n), ! function(e) {
                        eG = e.length > 0;
                        let t = eO;
                        if (eO = tn(e, eh.default.Messages.NO_VIDEO_DEVICES), eb && !h.isEqual(eO, t)) {
                            var n;
                            let e = void 0 !== eO[eM],
                                i = eM === eE.DEFAULT_DEVICE_ID && (null === (n = t[eE.DEFAULT_DEVICE_ID]) || void 0 === n ? void 0 : n.disabled);
                            e4(e || i)
                        }
                    }(i)
                },
                AUDIO_VOLUME_CHANGE: function(e) {
                    let {
                        inputVolume: t,
                        outputVolume: n
                    } = e;
                    e9({
                        inputVolume: e1(t),
                        outputVolume: n
                    })
                },
                AUDIO_RESET: function() {
                    T.default.remove(e_), location.reload()
                },
                AUDIO_INPUT_DETECTED: function(e) {
                    let {
                        inputDetected: t
                    } = e;
                    ek = t, !ex && ek && (ex = !0, e8.update())
                },
                AUDIO_SET_SUBSYSTEM: function(e) {
                    eT.setAudioSubsystem(e.subsystem)
                },
                MEDIA_ENGINE_SET_AUDIO_ENABLED: function(e) {
                    eC = e.enabled, e.unmute && e9({
                        mute: !1,
                        deaf: !1
                    }), eT.eachConnection(e2)
                },
                MEDIA_ENGINE_SET_VIDEO_ENABLED: function(e) {
                    let {
                        enabled: t
                    } = e;
                    W.default.requestPermission(ed.NativePermissionTypes.CAMERA), e4(t)
                },
                MEDIA_ENGINE_PERMISSION: function(e) {
                    let {
                        kind: t,
                        granted: n
                    } = e;
                    if (!n) switch (t) {
                        case "audio":
                            eC = !1, eT.eachConnection(e2);
                            break;
                        case "video":
                            e4(!1)
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
                            u = null !== (t = o.context) && void 0 !== t ? t : eE.MediaEngineContextTypes.DEFAULT,
                            c = null !== (n = o.qualityOptions) && void 0 !== n ? n : {
                                resolution: 720,
                                frameRate: 30
                            },
                            d = X.default.getPidFromDesktopSource(r);
                        Q.isPlatformEmbedded && !0 === l && ({
                            soundshareId: e,
                            soundshareSession: i
                        } = ts(d), null != e && ta(e, i)), (a = u) !== eA && (null != s && eT.setGoLiveSource(null, eA), eA = a);
                        let f = u === eE.MediaEngineContextTypes.STREAM && eb;
                        e4(f, {
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
                        let e = null !== (i = o.context) && void 0 !== i ? i : eE.MediaEngineContextTypes.DEFAULT,
                            {
                                videoDeviceGuid: t,
                                audioDeviceGuid: n
                            } = o.cameraSettings,
                            s = e === eE.MediaEngineContextTypes.STREAM && eb,
                            a = null !== (r = o.qualityOptions) && void 0 !== r ? r : {
                                resolution: 720,
                                frameRate: 30
                            };
                        e4(s, {
                            cameraSource: {
                                videoDeviceGuid: t,
                                audioDeviceGuid: n
                            },
                            quality: {
                                resolution: a.resolution,
                                frameRate: a.frameRate
                            }
                        })
                    } else e4(eb, null)
                },
                MEDIA_ENGINE_SET_VIDEO_DEVICE: function(e) {
                    let {
                        id: t
                    } = e;
                    e9({
                        videoDeviceId: t = ti(eO, t)
                    }), e4()
                },
                MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function(e) {
                    let t = e9({
                        experimentalEncoders: e.enabled
                    });
                    eT.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
                },
                MEDIA_ENGINE_INTERACTION_REQUIRED: function(e) {
                    return ev !== e.required && (ev = e.required, !e.required && eT.interact(), !0)
                },
                USER_SETTINGS_MODAL_INIT: td,
                USER_SETTINGS_MODAL_SET_SECTION: td,
                CERTIFIED_DEVICES_SET: function() {
                    return eT.eachConnection(e6), !1
                },
                RPC_APP_CONNECTED: function(e) {
                    let {
                        application: t
                    } = e;
                    eI.add(t.id)
                },
                RPC_APP_DISCONNECTED: function(e) {
                    let {
                        application: t
                    } = e;
                    eI.delete(t.id)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        mediaEngineState: t
                    } = e;
                    eg = t.settingsByContext, eR = t.inputDevices, eN = t.outputDevices, eZ = t.appSupported, eH = t.krispModuleLoaded, eA = t.goLiveContext
                },
                MEDIA_ENGINE_SET_OPEN_H264: function(e) {
                    let {
                        enabled: t
                    } = e, n = e9({
                        openH264: t
                    });
                    eT.setH264Enabled(n.openH264)
                },
                MEDIA_ENGINE_SET_HARDWARE_H264: function(e) {
                    let {
                        enabled: t
                    } = e, n = e9({
                        hardwareH264: t
                    });
                    eT.eachConnection(e => e.setHardwareH264(n.hardwareH264))
                },
                MEDIA_ENGINE_SET_AV1: function(e) {
                    let {
                        enabled: t
                    } = e, n = e9({
                        av1Enabled: t
                    });
                    eT.setAv1Enabled(n.av1Enabled)
                },
                APP_STATE_UPDATE: function(e) {
                    let {
                        state: t
                    } = e, n = D.default.isEnabled();
                    if (t === eu.AppStates.BACKGROUND && eb && !n) ew = !0, e4(!1);
                    else {
                        if (t !== eu.AppStates.ACTIVE || !ew) return !1;
                        ew = !1, e4(!0)
                    }
                    return !0
                },
                SET_CHANNEL_BITRATE: function(e) {
                    eT.eachConnection(t => t.setBitRate(e.bitrate))
                },
                SET_VAD_PERMISSION: function(e) {
                    let {
                        hasPermission: t
                    } = e, n = !t;
                    if (n === eP) return !1;
                    eP = n, eT.eachConnection(e2)
                },
                SET_NATIVE_PERMISSION: function(e) {
                    let {
                        state: t,
                        permissionType: n
                    } = e, i = t === ed.NativePermissionStates.ACCEPTED;
                    switch (n) {
                        case ed.NativePermissionTypes.AUDIO:
                            ez = !0, eT.eachConnection(e2);
                            break;
                        case ed.NativePermissionTypes.CAMERA:
                            !i && eb && e4(!1);
                            break;
                        default:
                            return !1
                    }
                },
                SET_CHANNEL_VIDEO_QUALITY_MODE: function(e) {
                    eT.eachConnection(t => t.applyVideoQualityMode(e.mode))
                },
                MEDIA_ENGINE_SET_AEC_DUMP: function(e) {
                    let {
                        enabled: t
                    } = e, n = e9({
                        aecDumpEnabled: t
                    });
                    eT.setAecDump(n.aecDumpEnabled)
                },
                CHANNEL_DELETE: function() {
                    if (!eb && null == s || null != ea.default.getRTCConnectionId()) return !1;
                    e4(!1, null)
                },
                MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function() {
                    return !!eY && (eY = !1, !0)
                },
                MEDIA_ENGINE_ENABLE_SOUNDSHARE: function() {
                    tE(), ! function() {
                        var e, t;
                        let n = i.isSoundSharing(),
                            r = null === (e = i.getGoLiveSource()) || void 0 === e ? void 0 : e.desktopSource;
                        if (null != r) {
                            let e = null !== (t = r.soundshareId) && void 0 !== t ? t : 0,
                                s = i.getExperimentalSoundshare();
                            n && eT.setSoundshareSource(e, s, eA)
                        }
                    }()
                },
                MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(e) {
                    let {
                        settings: t
                    } = e;
                    eT.applyMediaFilterSettings(t).finally(() => {
                        eK = !1, i.emitChange()
                    })
                },
                MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function() {
                    eK = !0
                },
                MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function() {
                    eK = !1
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        local: n,
                        wasSaved: i
                    } = e;
                    if (!(0, K.shouldReadWriteAudioSettings)() || t !== ef.UserSettingsTypes.PRELOADED_USER_SETTINGS || n || null != i) return !1;
                    tr(!0)
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
                        c = X.default.getPidFromDesktopSource(t);
                    ({
                        soundshareId: l,
                        soundshareSession: u
                    } = ts(c));
                    let d = {
                        desktopSource: {
                            id: t,
                            sourcePid: c,
                            soundshareId: l,
                            soundshareSession: u
                        },
                        quality: r
                    };
                    null != a && a.desktopSource.id !== d.desktopSource.id && (eT.setClipsSource(null), (0, Q.isWindows)() && null != a.desktopSource.soundshareId && v.cancelAttachToProcess(a.desktopSource.soundshareId)), null != l && ta(l, u), a = d;
                    let {
                        useQuartzCapturer: f
                    } = k.default.getCurrentConfig({
                        location: "f627ab_11"
                    }, {
                        autoTrackExposure: !1
                    }), {
                        hdrCaptureMode: E
                    } = U.default.getCurrentConfig({
                        location: "f627ab_12"
                    }, {
                        autoTrackExposure: !1
                    }), h = e$().videoHook, p = eT.supports(eE.Features.CAPTURE_TIMEOUT_EXPERIMENTS), {
                        videoHookStaleFrameTimeoutMs: _
                    } = V.default.getConfig(p && h, "e225cfdf5_vh2", !1), {
                        graphicsCaptureStaleFrameTimeoutMs: S
                    } = j.default.getConfig(p && e5(), "e225cfdf5_wgc2", !1);
                    eT.setClipsSource({
                        desktopDescription: {
                            id: a.desktopSource.id,
                            soundshareId: a.desktopSource.soundshareId,
                            useVideoHook: h,
                            useGraphicsCapture: e5(),
                            useLoopback: i.getExperimentalSoundshare(),
                            useQuartzCapturer: f,
                            allowScreenCaptureKit: e7(!1),
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
                    void 0 !== t.viewerClipsEnabled && eT.eachConnection(e => e.setClipsKeyFrameInterval(A.default.getSettings().viewerClipsEnabled ? eE.VIEWERSIDE_CLIP_KFI_MS : 0), eE.MediaEngineContextTypes.STREAM)
                }
            })