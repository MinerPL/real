(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["30248"], {
        895637: function(e, t, n) {
            var s = {
                "./activities-rocket-time.mp3": "329160",
                "./activity_end.mp3": "376343",
                "./activity_launch.mp3": "865814",
                "./activity_user_join.mp3": "44774",
                "./activity_user_left.mp3": "964929",
                "./call_calling.mp3": "32596",
                "./call_ringing.mp3": "173447",
                "./call_ringing_beat.mp3": "942044",
                "./call_ringing_halloween.mp3": "707746",
                "./clip_error.mp3": "933574",
                "./clip_save.mp3": "393686",
                "./ddr-down.mp3": "497452",
                "./ddr-left.mp3": "524997",
                "./ddr-right.mp3": "888937",
                "./ddr-up.mp3": "341667",
                "./deafen.mp3": "866563",
                "./detune_call_calling.mp3": "563137",
                "./detune_call_ringing.mp3": "905829",
                "./detune_deafen.mp3": "575866",
                "./detune_discodo.mp3": "488859",
                "./detune_disconnect.mp3": "574665",
                "./detune_message1.mp3": "881288",
                "./detune_mute.mp3": "22295",
                "./detune_ptt_start.mp3": "409382",
                "./detune_ptt_stop.mp3": "805441",
                "./detune_stream_ended.mp3": "274007",
                "./detune_stream_started.mp3": "887823",
                "./detune_stream_user_joined.mp3": "203788",
                "./detune_stream_user_left.mp3": "118472",
                "./detune_undeafen.mp3": "494640",
                "./detune_unmute.mp3": "434247",
                "./detune_user_join.mp3": "99572",
                "./detune_user_leave.mp3": "894653",
                "./detune_user_moved.mp3": "267717",
                "./discodo.mp3": "904613",
                "./disconnect.mp3": "17802",
                "./highfive_clap.mp3": "362389",
                "./highfive_whistle.mp3": "937092",
                "./human_man.mp3": "649460",
                "./mention1.mp3": "748590",
                "./mention2.mp3": "345856",
                "./mention3.mp3": "521067",
                "./message1.mp3": "302509",
                "./message2.mp3": "458161",
                "./message3.mp3": "436814",
                "./mute.mp3": "992974",
                "./overlayunlock.mp3": "112157",
                "./poggermode_achievement_unlock.mp3": "537390",
                "./poggermode_applause.mp3": "829719",
                "./poggermode_enabled.mp3": "988826",
                "./poggermode_message_send.mp3": "305456",
                "./ptt_start.mp3": "15872",
                "./ptt_stop.mp3": "144821",
                "./reconnect.mp3": "110276",
                "./robot_man.mp3": "437477",
                "./stage_waiting.mp3": "44122",
                "./stream_ended.mp3": "855479",
                "./stream_started.mp3": "829131",
                "./stream_user_joined.mp3": "713959",
                "./stream_user_left.mp3": "877990",
                "./success.mp3": "87973",
                "./undeafen.mp3": "990161",
                "./unmute.mp3": "216636",
                "./user_join.mp3": "170438",
                "./user_leave.mp3": "911578",
                "./user_moved.mp3": "455307"
            };

            function a(e) {
                return n(i(e))
            }

            function i(e) {
                if (!n.o(s, e)) {
                    var t = Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return s[e]
            }
            a.id = '"895637"', a.keys = function() {
                return Object.keys(s)
            }, a.resolve = i, e.exports = a
        },
        48174: function(e, t, n) {
            "use strict";

            function s(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            })
        },
        775560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return s.default
                },
                useStableMemo: function() {
                    return a.default
                },
                useLazyValue: function() {
                    return i.default
                }
            });
            var s = n("14716"),
                a = n("745510"),
                i = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var s = n("884691");

            function a() {
                let [, e] = (0, s.useState)({});
                return (0, s.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var s = n("884691");
            let a = {};

            function i(e) {
                let t = (0, s.useRef)(a);
                return t.current === a && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var s = n("884691"),
                a = n("48174");
            let i = [];

            function u(e, t) {
                let n = (0, s.useRef)(),
                    u = (0, s.useRef)(i);
                return u.current === i ? (n.current = e(), u.current = t) : !(0, a.default)(t, u.current) && (n.current = e(), u.current = t), n.current
            }
        },
        748268: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c87be216431a35927431.svg"
        },
        329160: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f8fb88f65f33f224c7b3.mp3"
        },
        376343: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ff974df9426e43392cbf.mp3"
        },
        865814: function(e, t, n) {
            "use strict";
            e.exports = n.p + "259813ba8e00b2a211cb.mp3"
        },
        44774: function(e, t, n) {
            "use strict";
            e.exports = n.p + "70b22eab409925d6f8f8.mp3"
        },
        964929: function(e, t, n) {
            "use strict";
            e.exports = n.p + "bb8db567f29cb0cd4fef.mp3"
        },
        32596: function(e, t, n) {
            "use strict";
            e.exports = n.p + "bc4e660a66b0712b5114.mp3"
        },
        173447: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e72bd9a68c5a5de4b084.mp3"
        },
        942044: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1339b5d1d553f40ac2bc.mp3"
        },
        707746: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e19cc32298b291be6b3d.mp3"
        },
        933574: function(e, t, n) {
            "use strict";
            e.exports = n.p + "46ecf97d21def02d585f.mp3"
        },
        393686: function(e, t, n) {
            "use strict";
            e.exports = n.p + "607f4f5830fc13d0b251.mp3"
        },
        497452: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c02408469ee033a4ee3a.mp3"
        },
        524997: function(e, t, n) {
            "use strict";
            e.exports = n.p + "fbf60e1284cc54dc0e5e.mp3"
        },
        888937: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ea5f09e9af94f92edc3a.mp3"
        },
        341667: function(e, t, n) {
            "use strict";
            e.exports = n.p + "615ef618987056fd1bd2.mp3"
        },
        866563: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6cb3ea10151e5b2ffb07.mp3"
        },
        563137: function(e, t, n) {
            "use strict";
            e.exports = n.p + "fef4303b284e8445f8e9.mp3"
        },
        905829: function(e, t, n) {
            "use strict";
            e.exports = n.p + "0218b16de15cb2f7724c.mp3"
        },
        575866: function(e, t, n) {
            "use strict";
            e.exports = n.p + "3ab587f5e0363cb3b453.mp3"
        },
        488859: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a6e48e91e0069b28d2ca.mp3"
        },
        574665: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c2e8cc718f4394e2fd6d.mp3"
        },
        881288: function(e, t, n) {
            "use strict";
            e.exports = n.p + "582c42ea90dc65482716.mp3"
        },
        22295: function(e, t, n) {
            "use strict";
            e.exports = n.p + "77b7d43241726f405cc1.mp3"
        },
        409382: function(e, t, n) {
            "use strict";
            e.exports = n.p + "08385764d2c5b826af6b.mp3"
        },
        805441: function(e, t, n) {
            "use strict";
            e.exports = n.p + "2da7a98f354d6208d66f.mp3"
        },
        274007: function(e, t, n) {
            "use strict";
            e.exports = n.p + "70a0184ec509ec277062.mp3"
        },
        887823: function(e, t, n) {
            "use strict";
            e.exports = n.p + "cb8e5ebd782353d41f83.mp3"
        },
        203788: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6d2fdab68b3e6d97914f.mp3"
        },
        118472: function(e, t, n) {
            "use strict";
            e.exports = n.p + "674ddc50a69a27d0c36c.mp3"
        },
        494640: function(e, t, n) {
            "use strict";
            e.exports = n.p + "62f48861f90d5e622587.mp3"
        },
        434247: function(e, t, n) {
            "use strict";
            e.exports = n.p + "de752bcdde8d8c52ab11.mp3"
        },
        99572: function(e, t, n) {
            "use strict";
            e.exports = n.p + "0fc2742bb405e81bc1c4.mp3"
        },
        894653: function(e, t, n) {
            "use strict";
            e.exports = n.p + "9bb7b5e7d71c1fcbb69b.mp3"
        },
        267717: function(e, t, n) {
            "use strict";
            e.exports = n.p + "2305850be26e674a9bc0.mp3"
        },
        904613: function(e, t, n) {
            "use strict";
            e.exports = n.p + "44208515805198d4c548.mp3"
        },
        17802: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e08aa3fc806a6137b9af.mp3"
        },
        362389: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6cc13ddadaadc1e9acfb.mp3"
        },
        937092: function(e, t, n) {
            "use strict";
            e.exports = n.p + "06b0ec919358fd00a1c9.mp3"
        },
        649460: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1003a3a0720d56ebe8d8.mp3"
        },
        748590: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6fded0954ad6fa7fc2ec.mp3"
        },
        345856: function(e, t, n) {
            "use strict";
            e.exports = n.p + "57cd70365a486a399e4a.mp3"
        },
        521067: function(e, t, n) {
            "use strict";
            e.exports = n.p + "951cb91ee4aedb54e555.mp3"
        },
        302509: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7e95e417e6decf91459a.mp3"
        },
        458161: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d98b3cb5756a0c4908ab.mp3"
        },
        436814: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b8fbd5bcaed3d51b8b73.mp3"
        },
        992974: function(e, t, n) {
            "use strict";
            e.exports = n.p + "574a4b46a370c821f4c2.mp3"
        },
        112157: function(e, t, n) {
            "use strict";
            e.exports = n.p + "9be773476c4dfc20a049.mp3"
        },
        537390: function(e, t, n) {
            "use strict";
            e.exports = n.p + "99e4a1dff8fdc40994d0.mp3"
        },
        829719: function(e, t, n) {
            "use strict";
            e.exports = n.p + "98cc8cdf9f7711301b27.mp3"
        },
        988826: function(e, t, n) {
            "use strict";
            e.exports = n.p + "9b0de13058a4eff892f3.mp3"
        },
        305456: function(e, t, n) {
            "use strict";
            e.exports = n.p + "789fbb057da285769ee4.mp3"
        },
        15872: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e02be8f7ceaa6b3a2e72.mp3"
        },
        144821: function(e, t, n) {
            "use strict";
            e.exports = n.p + "8d26e762622d49b2a607.mp3"
        },
        110276: function(e, t, n) {
            "use strict";
            e.exports = n.p + "09d327b608c3bd75cd85.mp3"
        },
        437477: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c9a9c1767b82a09a02d1.mp3"
        },
        44122: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b33d3bd272e8ad1308f1.mp3"
        },
        855479: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1877b1bd5a52d560309a.mp3"
        },
        829131: function(e, t, n) {
            "use strict";
            e.exports = n.p + "57251e1318cb6545df91.mp3"
        },
        713959: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1387160f6f2937093609.mp3"
        },
        877990: function(e, t, n) {
            "use strict";
            e.exports = n.p + "215c23b18a529793b0c3.mp3"
        },
        87973: function(e, t, n) {
            "use strict";
            e.exports = n.p + "220087059cee59de6537.mp3"
        },
        990161: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a338e62624013a20f7df.mp3"
        },
        216636: function(e, t, n) {
            "use strict";
            e.exports = n.p + "94ac01bdba0749ee103c.mp3"
        },
        170438: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e4c08b716d0db705facc.mp3"
        },
        911578: function(e, t, n) {
            "use strict";
            e.exports = n.p + "14601f9cdbd78f8fe7ef.mp3"
        },
        455307: function(e, t, n) {
            "use strict";
            e.exports = n.p + "aaa90875db91174f3e8a.mp3"
        },
        629109: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var s = n("913144"),
                a = n("504385"),
                i = n("439141"),
                u = n("533222"),
                o = n("42887"),
                d = n("599110"),
                r = n("709681"),
                l = n("12307"),
                c = n("49111"),
                p = n("353927");

            function f() {
                (0, r.playSound)("mention3")
            }

            function m(e, t, n, s, a) {
                if (t === n) return;
                let i = e[t],
                    o = e[n];
                d.default.track(c.AnalyticEvents.MEDIA_DEVICE_CHANGED, {
                    device_from_name: u.default.getCertifiedDeviceName(t, null != i ? i.name : ""),
                    device_to_name: u.default.getCertifiedDeviceName(n, null != o ? o.name : ""),
                    device_type: s,
                    device_is_certified: u.default.isCertified(n),
                    location: a
                })
            }
            let _ = {
                isNotSupported: () => !1,
                enable: e => Promise.resolve(!0)
            };
            _ = n("412905");
            let {
                enable: E,
                isNotSupported: h
            } = _;
            var g = {
                enable: E,
                toggleSelfMute() {
                    let {
                        context: e = p.MediaEngineContextTypes.DEFAULT,
                        syncRemote: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return h() ? Promise.resolve() : o.default.isEnabled() ? s.default.dispatch({
                        type: "AUDIO_TOGGLE_SELF_MUTE",
                        context: e,
                        syncRemote: t
                    }) : this.enable(!0)
                },
                setTemporarySelfMute(e) {
                    !h() && s.default.dispatch({
                        type: "AUDIO_SET_TEMPORARY_SELF_MUTE",
                        mute: e
                    })
                },
                toggleSelfDeaf() {
                    let {
                        context: e = p.MediaEngineContextTypes.DEFAULT,
                        syncRemote: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    !h() && s.default.dispatch({
                        type: "AUDIO_TOGGLE_SELF_DEAF",
                        context: e,
                        syncRemote: t
                    })
                },
                toggleLocalMute(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.MediaEngineContextTypes.DEFAULT;
                    !h() && s.default.dispatch({
                        type: "AUDIO_TOGGLE_LOCAL_MUTE",
                        context: t,
                        userId: e
                    })
                },
                toggleLocalSoundboardMute(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.MediaEngineContextTypes.DEFAULT;
                    s.default.dispatch({
                        type: "AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE",
                        context: t,
                        userId: e
                    })
                },
                setDisableLocalVideo(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.MediaEngineContextTypes.DEFAULT,
                        a = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    !h() && s.default.dispatch({
                        type: "AUDIO_SET_LOCAL_VIDEO_DISABLED",
                        context: n,
                        userId: e,
                        videoToggleState: t,
                        persist: a,
                        isAutomatic: i
                    })
                },
                setLocalVolume(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.MediaEngineContextTypes.DEFAULT;
                    s.default.dispatch({
                        type: "AUDIO_SET_LOCAL_VOLUME",
                        context: n,
                        userId: e,
                        volume: (0, a.snapVolumeToDefault)(t, n)
                    })
                },
                setLocalPan(e, t, n) {
                    let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : p.MediaEngineContextTypes.DEFAULT;
                    s.default.dispatch({
                        type: "AUDIO_SET_LOCAL_PAN",
                        context: a,
                        userId: e,
                        left: t,
                        right: n
                    })
                },
                setMode(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.MediaEngineContextTypes.DEFAULT;
                    !h() && s.default.dispatch({
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
                    !h() && s.default.dispatch({
                        type: "AUDIO_SET_INPUT_VOLUME",
                        volume: e
                    })
                },
                setOutputVolume(e) {
                    !h() && s.default.dispatch({
                        type: "AUDIO_SET_OUTPUT_VOLUME",
                        volume: e
                    })
                },
                setInputDevice(e, t) {
                    if (!h()) {
                        if (null != t) {
                            let n = o.default.getInputDevices(),
                                s = o.default.getInputDeviceId();
                            m(n, s, e, "Audio Input", t)
                        }
                        s.default.dispatch({
                            type: "AUDIO_SET_INPUT_DEVICE",
                            id: e
                        }), f()
                    }
                },
                setOutputDevice(e, t) {
                    if (!h()) {
                        if (null != t) {
                            let n = o.default.getOutputDevices(),
                                s = o.default.getOutputDeviceId();
                            m(n, s, e, "Audio Output", t)
                        }
                        s.default.dispatch({
                            type: "AUDIO_SET_OUTPUT_DEVICE",
                            id: e
                        }), f()
                    }
                },
                setVideoDevice(e, t) {
                    if (!h()) {
                        if (null != t) {
                            let n = o.default.getVideoDevices(),
                                s = o.default.getVideoDeviceId();
                            m(n, s, e, "Video", t)
                        }
                        s.default.dispatch({
                            type: "MEDIA_ENGINE_SET_VIDEO_DEVICE",
                            id: e
                        })
                    }
                },
                setEchoCancellation(e, t) {
                    !h() && s.default.dispatch({
                        type: "AUDIO_SET_ECHO_CANCELLATION",
                        enabled: e,
                        location: t
                    })
                },
                setLoopback(e) {
                    !h() && s.default.dispatch({
                        type: "AUDIO_SET_LOOPBACK",
                        enabled: e
                    })
                },
                setNoiseSuppression(e, t) {
                    !h() && s.default.dispatch({
                        type: "AUDIO_SET_NOISE_SUPPRESSION",
                        enabled: e,
                        location: t
                    })
                },
                setNoiseCancellation(e, t) {
                    !h() && (s.default.dispatch({
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
                    !h() && s.default.dispatch({
                        type: "AUDIO_SET_AUTOMATIC_GAIN_CONTROL",
                        enabled: e,
                        location: t
                    })
                },
                setExperimentalEncoders(e) {
                    !h() && s.default.dispatch({
                        type: "MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS",
                        enabled: e
                    })
                },
                setHardwareH264(e) {
                    !h() && s.default.dispatch({
                        type: "MEDIA_ENGINE_SET_HARDWARE_H264",
                        enabled: e
                    })
                },
                setAttenuation(e, t, n) {
                    !h() && s.default.dispatch({
                        type: "AUDIO_SET_ATTENUATION",
                        attenuation: e,
                        attenuateWhileSpeakingSelf: t,
                        attenuateWhileSpeakingOthers: n
                    })
                },
                setQoS(e) {
                    !h() && s.default.dispatch({
                        type: "AUDIO_SET_QOS",
                        enabled: e
                    })
                },
                reset() {
                    !h() && s.default.dispatch({
                        type: "AUDIO_RESET"
                    })
                },
                setSilenceWarning(e) {
                    !h() && s.default.dispatch({
                        type: "AUDIO_SET_DISPLAY_SILENCE_WARNING",
                        enabled: e
                    })
                },
                setDebugLogging(e) {
                    !h() && s.default.dispatch({
                        type: "AUDIO_SET_DEBUG_LOGGING",
                        enabled: e
                    })
                },
                setVideoHook(e) {
                    !h() && s.default.dispatch({
                        type: "MEDIA_ENGINE_SET_VIDEO_HOOK",
                        enabled: e
                    })
                },
                setExperimentalSoundshare(e) {
                    !h() && s.default.dispatch({
                        type: "MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE",
                        enabled: e
                    })
                },
                setAudioSubsystem(e) {
                    !h() && s.default.dispatch({
                        type: "AUDIO_SET_SUBSYSTEM",
                        subsystem: e
                    })
                },
                setVideoEnabled(e) {
                    (0, i.applyInitialVideoBackgroundOption)(), s.default.dispatch({
                        type: "MEDIA_ENGINE_SET_VIDEO_ENABLED",
                        enabled: e
                    })
                },
                setGoLiveSource(e) {
                    (null == e ? void 0 : e.qualityOptions) != null && (0, l.trackStreamSettingsUpdate)(e.qualityOptions.preset, e.qualityOptions.resolution, e.qualityOptions.frameRate), s.default.dispatch({
                        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                        settings: e
                    })
                },
                setOpenH264(e) {
                    !h() && s.default.dispatch({
                        type: "MEDIA_ENGINE_SET_OPEN_H264",
                        enabled: e
                    })
                },
                setAV1Enabled(e) {
                    !h() && s.default.dispatch({
                        type: "MEDIA_ENGINE_SET_AV1",
                        enabled: e
                    })
                },
                setH265Enabled(e) {
                    !h() && s.default.dispatch({
                        type: "MEDIA_ENGINE_SET_H265",
                        enabled: e
                    })
                },
                setAecDump(e) {
                    !h() && s.default.dispatch({
                        type: "MEDIA_ENGINE_SET_AEC_DUMP",
                        enabled: e
                    })
                },
                interact() {
                    !h() && s.default.dispatch({
                        type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
                        required: !1
                    })
                },
                enableSoundshare() {
                    !h() && s.default.dispatch({
                        type: "MEDIA_ENGINE_ENABLE_SOUNDSHARE"
                    })
                }
            }
        },
        412905: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isNotSupported: function() {
                    return m
                },
                enable: function() {
                    return E
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("77078"),
                i = n("913144"),
                u = n("605250"),
                o = n("42887"),
                d = n("599110"),
                r = n("49111"),
                l = n("180524"),
                c = n("782340");
            let p = new u.default("AudioActionCreators");

            function f() {
                (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("649486").then(n.bind(n, "649486"));
                    return t => (0, s.jsx)(e, {
                        source: "Unsupported Browser",
                        ...t
                    })
                })
            }

            function m() {
                return !o.default.isSupported() && ((0, a.openModal)(e => (0, s.jsx)(a.ConfirmModal, {
                    header: c.default.Messages.UNSUPPORTED_BROWSER,
                    confirmText: c.default.Messages.DOWNLOAD_APP,
                    cancelText: c.default.Messages.CANCEL,
                    onConfirm: f,
                    confirmButtonColor: a.Button.Colors.BRAND,
                    ...e,
                    children: (0, s.jsx)(a.Text, {
                        variant: "text-md/normal",
                        children: c.default.Messages.UNSUPPORTED_BROWSER_DETAILS
                    })
                })), !0)
            }

            function _(e) {
                d.default.track(r.AnalyticEvents.PERMISSIONS_ACKED, {
                    type: "audio",
                    action: e
                })
            }

            function E() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return m() ? Promise.resolve(!1) : (d.default.track(r.AnalyticEvents.PERMISSIONS_REQUESTED, {
                    type: "audio"
                }), o.default.getMediaEngine().enable().then(() => {
                    i.default.dispatch({
                        type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                        enabled: !0,
                        unmute: e
                    }), _(l.NativePermissionStates.ACCEPTED)
                }, e => {
                    switch (e) {
                        case r.UserMediaErrors.NO_DEVICES_FOUND:
                            _(l.NativePermissionStates.NO_DEVICES);
                            break;
                        case r.UserMediaErrors.PERMISSION_DENIED:
                            _(l.NativePermissionStates.DENIED);
                            break;
                        case r.UserMediaErrors.PERMISSION_DISMISSED:
                            _(l.NativePermissionStates.DISMISSED);
                            break;
                        default:
                            _(l.NativePermissionStates.ERROR), p.warn("unknown getUserMedia error: ".concat(e))
                    }
                }).then(() => !0))
            }
        },
        278108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var s = n("37983"),
                a = n("884691"),
                i = n("499032"),
                u = n.n(i),
                o = n("312165"),
                d = n("3958"),
                r = n("773336"),
                l = n("50885"),
                c = n("49111");
            let p = r.isPlatformEmbedded && null != l.default.getDiscordUtils().inputCaptureRegisterElement;
            class f extends a.PureComponent {
                componentDidMount() {
                    this._mounted = !0
                }
                componentWillUnmount() {
                    this._mounted = !1, this.cleanUp()
                }
                componentDidUpdate(e) {
                    this.props.defaultValue !== e.defaultValue && this.setState({
                        codes: this.props.defaultValue
                    })
                }
                cleanUp() {
                    r.isPlatformEmbedded && null != this.gs && (this.gs.destroy(), this.gs = null)
                }
                handleComboChange(e) {
                    let {
                        mode: t
                    } = this.state, {
                        onChange: n
                    } = this.props;
                    t === d.RecordModes.RECORDING && (null != n && n(e), this.setState({
                        codes: e
                    }))
                }
                render() {
                    let e, t;
                    let {
                        codes: n,
                        mode: a
                    } = this.state, {
                        disabled: i
                    } = this.props;
                    return p ? (t = l.default.getDiscordUtils().inputCaptureRegisterElement, e = this.handleNativeChange) : !r.isPlatformEmbedded && (e = this.handleComboKeys), (0, s.jsx)(d.default, {
                        disabled: i,
                        value: n,
                        mode: a,
                        onClick: this.toggleRecordMode,
                        onChange: e,
                        registerNativeRecorder: t,
                        disableOnClickWhileRecording: p
                    })
                }
                constructor(e) {
                    super(e), this._mounted = !1, this.recordStart = () => {
                        r.isPlatformEmbedded && !p && (this.gs = new o.default, this.gs.on("change", this.handleGSChange)), this.setState({
                            mode: d.RecordModes.RECORDING
                        })
                    }, this.recordEnd = () => {
                        this.cleanUp(), this.setState({
                            mode: d.RecordModes.DEFAULT
                        })
                    }, this.toggleRecordMode = () => {
                        this.state.mode === d.RecordModes.DEFAULT ? this.recordStart() : this.recordEnd()
                    }, this.handleComboKeys = (e, t, n) => {
                        if (n.preventDefault(), "keydown" === n.type) {
                            let e = t.map(e => [c.KeyboardDeviceTypes.KEYBOARD_KEY, u(e), c.KeyboardEnvs.BROWSER]),
                                {
                                    keyCode: s
                                } = n;
                            null == e.find(e => {
                                let [, t] = e;
                                return s === t
                            }) && e.push([c.KeyboardDeviceTypes.KEYBOARD_KEY, s, c.KeyboardEnvs.BROWSER]), this.handleComboChange(e)
                        }
                    }, this.handleGSChange = e => {
                        if (!1 === this._mounted) return;
                        let t = [...e.combo];
                        this.handleComboChange(t)
                    }, this.handleNativeChange = e => {
                        e.length > 0 && this.handleComboChange(e), this.recordEnd()
                    };
                    let {
                        defaultValue: t
                    } = e;
                    this.state = {
                        codes: t,
                        mode: d.RecordModes.DEFAULT
                    }
                }
            }
            var m = f
        },
        301450: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            });
            var s = n("37983"),
                a = n("884691"),
                i = n("917351"),
                u = n.n(i),
                o = n("446674"),
                d = n("77078"),
                r = n("629109"),
                l = n("278108"),
                c = n("996808"),
                p = n("42887"),
                f = n("145131"),
                m = n("476765"),
                _ = n("829536"),
                E = n("49111"),
                h = n("353927"),
                g = n("782340"),
                S = n("686084"),
                A = n("926622");
            let D = (0, m.uid)(),
                I = (0, m.uid)(),
                O = (0, m.uid)();
            class T extends a.PureComponent {
                handleValueRender(e) {
                    return "".concat((-((100 - e) * 1)).toFixed(0), "dB")
                }
                renderAutomaticVADToggle() {
                    let {
                        autoThreshold: e
                    } = this.props;
                    return (0, s.jsx)(m.UID, {
                        children: t => (0, s.jsxs)(f.default, {
                            className: A.marginBottom4,
                            children: [(0, s.jsx)(d.FormTitle, {
                                tag: d.FormTitleTags.H3,
                                children: (0, s.jsx)("label", {
                                    htmlFor: t,
                                    children: g.default.Messages.FORM_LABEL_AUTOMATIC_VAD
                                })
                            }), (0, s.jsx)(d.Switch, {
                                id: t,
                                checked: e,
                                onChange: this.handleAutoThresholdChange
                            })]
                        })
                    })
                }
                renderSlider() {
                    let {
                        autoThreshold: e,
                        threshold: t
                    } = this.props;
                    if (!e) return (0, s.jsx)(d.Slider, {
                        initialValue: t + 100,
                        onValueRender: this.handleValueRender,
                        onValueChange: this.handleSensitivityChange,
                        "aria-label": g.default.Messages.FORM_LABEL_INPUT_SENSITIVTY
                    })
                }
                render() {
                    return (0, s.jsxs)(d.FormItem, {
                        title: g.default.Messages.FORM_LABEL_INPUT_SENSITIVTY,
                        className: A.marginBottom8,
                        children: [this.renderAutomaticVADToggle(), this.renderSlider()]
                    })
                }
                constructor(...e) {
                    super(...e), this.handleAutoThresholdChange = e => {
                        let {
                            onThresholdChange: t,
                            threshold: n
                        } = this.props;
                        null == t || t(n, e)
                    }, this.handleSensitivityChange = e => {
                        let {
                            onThresholdChange: t,
                            autoThreshold: n
                        } = this.props;
                        null == t || t(-((100 - e) * 1), n)
                    }
                }
            }
            let v = o.default.connectStores([p.default], e => {
                let {
                    mediaEngineContext: t
                } = e;
                return {
                    inputVolume: p.default.getInputVolume(),
                    outputVolume: p.default.getOutputVolume(),
                    inputDeviceId: p.default.getInputDeviceId(),
                    inputDevices: p.default.getInputDevices(),
                    outputDevices: p.default.getOutputDevices(),
                    outputDeviceId: p.default.getOutputDeviceId(),
                    inputMode: p.default.getMode(t),
                    shortcut: p.default.getModeOptions(t).shortcut,
                    vadThreshold: p.default.getModeOptions(t).threshold,
                    vadAutoThreshold: p.default.getModeOptions(t).autoThreshold,
                    delay: p.default.getModeOptions(t).delay
                }
            })(e => {
                let t, {
                        mediaEngineContext: n,
                        inputMode: i,
                        shortcut: o,
                        delay: c,
                        vadThreshold: p,
                        vadAutoThreshold: f,
                        inputDevices: m,
                        inputDeviceId: h,
                        inputVolume: S,
                        outputDeviceId: v,
                        outputDevices: b,
                        outputVolume: x,
                        speaking: N = !1
                    } = e,
                    C = u.first(m),
                    M = null != C && C.disabled,
                    U = u.first(b),
                    L = null != U && U.disabled,
                    y = [{
                        value: E.InputModes.VOICE_ACTIVITY,
                        name: g.default.Messages.INPUT_MODE_VAD
                    }, {
                        value: E.InputModes.PUSH_TO_TALK,
                        name: g.default.Messages.INPUT_MODE_PTT
                    }];
                return t = i === E.InputModes.PUSH_TO_TALK ? (0, s.jsxs)(a.Fragment, {
                    children: [(0, s.jsx)(d.FormItem, {
                        title: g.default.Messages.FORM_LABEL_SHORTCUT,
                        className: A.marginBottom20,
                        children: (0, s.jsx)(l.default, {
                            defaultValue: o,
                            onChange: e => r.default.setMode(i, {
                                shortcut: e
                            }, n)
                        })
                    }), (0, s.jsxs)(d.FormItem, {
                        className: A.marginBottom8,
                        children: [(0, s.jsx)(d.FormTitle, {
                            id: D,
                            children: g.default.Messages.INPUT_MODE_PTT_RELEASE_DELAY
                        }), (0, s.jsx)(d.Slider, {
                            initialValue: c,
                            onValueChange: e => r.default.setMode(i, {
                                delay: e
                            }, n),
                            onValueRender: e => e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "ms"),
                            maxValue: E.MAX_PTT_RELEASE_DELAY,
                            "aria-labelledby": D
                        })]
                    })]
                }) : (0, s.jsx)(T, {
                    speaking: N,
                    inputMode: i,
                    threshold: p,
                    autoThreshold: f,
                    onThresholdChange: (e, t) => r.default.setMode(i, {
                        threshold: e,
                        autoThreshold: t
                    }, n)
                }), (0, s.jsxs)(a.Fragment, {
                    children: [(0, s.jsx)(d.FormItem, {
                        title: g.default.Messages.FORM_LABEL_INPUT_DEVICE,
                        className: A.marginBottom20,
                        children: (0, s.jsx)(d.SingleSelect, {
                            value: h,
                            onChange: e => r.default.setInputDevice(e, "Voice Settings"),
                            options: u.map(m, e => {
                                let {
                                    id: t,
                                    name: n
                                } = e;
                                return {
                                    value: t,
                                    label: n
                                }
                            }),
                            isDisabled: M
                        })
                    }), (0, s.jsxs)(d.FormItem, {
                        className: A.marginBottom20,
                        children: [(0, s.jsx)(d.FormTitle, {
                            id: I,
                            children: g.default.Messages.FORM_LABEL_INPUT_VOLUME
                        }), (0, s.jsx)(d.Slider, {
                            initialValue: (0, _.amplitudeToPerceptual)(S),
                            asValueChanges: e => r.default.setInputVolume((0, _.perceptualToAmplitude)(e)),
                            "aria-labelledby": I
                        })]
                    }), (0, s.jsx)(d.FormItem, {
                        title: g.default.Messages.FORM_LABEL_OUTPUT_DEVICE,
                        className: A.marginBottom20,
                        children: (0, s.jsx)(d.SingleSelect, {
                            value: v,
                            onChange: e => r.default.setOutputDevice(e, "Voice Settings"),
                            options: u.map(b, e => {
                                let {
                                    id: t,
                                    name: n
                                } = e;
                                return {
                                    value: t,
                                    label: n
                                }
                            }),
                            isDisabled: L
                        })
                    }), (0, s.jsxs)(d.FormItem, {
                        className: A.marginBottom20,
                        children: [(0, s.jsx)(d.FormTitle, {
                            id: O,
                            children: g.default.Messages.FORM_LABEL_OUTPUT_VOLUME
                        }), (0, s.jsx)(d.Slider, {
                            initialValue: (0, _.amplitudeToPerceptual)(x),
                            maxValue: 200,
                            asValueChanges: e => r.default.setOutputVolume((0, _.perceptualToAmplitude)(e)),
                            "aria-labelledby": O
                        })]
                    }), (0, s.jsx)(d.FormItem, {
                        title: g.default.Messages.FORM_LABEL_INPUT_MODE,
                        className: A.marginBottom20,
                        children: (0, s.jsx)(d.RadioGroup, {
                            onChange: e => {
                                let {
                                    value: t
                                } = e;
                                return r.default.setMode(t, {}, n)
                            },
                            options: y,
                            value: i
                        })
                    }), t]
                })
            });

            function b(e) {
                var t;
                return (0, c.default)(() => {
                    null != E.CURRENT_APP_CONTEXT && e.onClose()
                }), (0, s.jsxs)(d.ModalRoot, {
                    transitionState: e.transitionState,
                    "aria-label": g.default.Messages.VOICE_SETTINGS,
                    children: [(0, s.jsxs)(d.ModalHeader, {
                        children: [(0, s.jsxs)(f.default.Child, {
                            children: [(0, s.jsx)(d.FormTitle, {
                                tag: "h1",
                                className: A.marginReset,
                                children: g.default.Messages.VOICE_SETTINGS
                            }), (0, s.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                className: S.title,
                                children: e.title
                            })]
                        }), (0, s.jsx)(f.default.Child, {
                            grow: 0,
                            children: (0, s.jsx)(d.ModalCloseButton, {
                                onClick: e.onClose
                            })
                        })]
                    }), (0, s.jsx)(d.ModalContent, {
                        children: (0, s.jsx)(v, {
                            mediaEngineContext: null !== (t = e.mediaEngineContext) && void 0 !== t ? t : h.MediaEngineContextTypes.DEFAULT
                        })
                    })]
                })
            }
        },
        312165: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("44170"),
                a = n("773336"),
                i = n("50885"),
                u = n("13798"),
                o = n("49111");
            let d = [],
                r = (e, t, n) => {
                    let s = (0, a.isWindows)() ? 0 : 1;
                    (e !== o.KeyboardDeviceTypes.MOUSE_BUTTON || n !== s) && d.forEach(s => s._handleEvent(e, t, n))
                };
            class l extends s.EventEmitter {
                destroy() {
                    this.removeAllListeners(), 0 === (d = d.filter(e => e !== this)).length && i.default.setOnInputEventCallback(null)
                }
                toString() {
                    return (0, u.toString)(this.combo)
                }
                _handleEvent(e, t, n) {
                    0 === t ? this.combo = this.combo.filter(t => {
                        let [s, a] = t;
                        return !(s === e && a === n)
                    }) : (this.combo.push([e, n, (0, u.getEnv)()]), this.emit("change", this))
                }
                constructor() {
                    super(), this.combo = [], d.push(this), 1 === d.length && i.default.setOnInputEventCallback(r)
                }
            }
        },
        996808: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var s = n("884691"),
                a = n("913144");

            function i(e) {
                let t = (0, s.useRef)(e);
                (0, s.useEffect)(() => {
                    t.current = e
                }, [e]), (0, s.useEffect)(() => {
                    if (__OVERLAY__) {
                        function e(e) {
                            e.locked && t.current()
                        }
                        return a.default.subscribe("OVERLAY_SET_INPUT_LOCKED", e), () => {
                            a.default.unsubscribe("OVERLAY_SET_INPUT_LOCKED", e)
                        }
                    }
                }, [])
            }
        },
        520497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var s = n("49111");

            function a(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: n
                } = window.GLOBAL_ENV;
                return "development" !== n ? "".concat(location.protocol, "//").concat(t).concat(s.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(s.Endpoints.SOUNDBOARD_SOUND(e))
            }
        },
        812809: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var s = n("845579"),
                a = n("42887"),
                i = n("829536");

            function u(e) {
                let t = function() {
                        var e;
                        let t = s.SoundboardSettings.getSetting();
                        return (0, i.amplitudeToPerceptual)(null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 100) / 100
                    }(),
                    n = Math.min(a.default.getOutputVolume() / 100, 1);
                return Math.min(e * t * n, 1)
            }
        },
        168067: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var s = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2023-03_april_fools",
                label: "April Fools 2023",
                defaultConfig: {
                    allowAprilFoolsSoundpack: !1
                },
                treatments: [{
                    id: 1,
                    label: "April Fools 2023",
                    config: {
                        allowAprilFoolsSoundpack: !0
                    }
                }]
            })
        },
        157246: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Soundpacks: function() {
                    return a
                },
                getSoundpackOptionsAprilFools2023: function() {
                    return u
                }
            });
            var s, a, i = n("782340");

            function u() {
                return [{
                    value: a.CLASSIC,
                    label: i.default.Messages.SOUNDPACK_CLASSIC_LABEL
                }, {
                    value: a.DETUNE,
                    label: i.default.Messages.SOUNDPACK_DETUNE_LABEL
                }]
            }(s = a || (a = {})).CLASSIC = "classic", s.DETUNE = "detune"
        },
        870696: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("446674"),
                a = n("913144"),
                i = n("168067"),
                u = n("157246");
            let o = {
                soundpack: u.Soundpacks.CLASSIC
            };
            class d extends s.default.PersistedStore {
                initialize(e) {
                    i.default.subscribe({
                        location: "1"
                    }, () => this.emitChange()), null != e && (o = e)
                }
                getState() {
                    return o
                }
                getSoundpack() {
                    var e;
                    let {
                        allowAprilFoolsSoundpack: t
                    } = i.default.getCurrentConfig({
                        location: "37bac2_1"
                    }, {
                        autoTrackExposure: !1
                    });
                    return t && (e = o.soundpack, Object.values(u.Soundpacks).includes(e)) ? o.soundpack : u.Soundpacks.CLASSIC
                }
            }
            d.displayName = "SoundpackStore", d.persistKey = "SoundpackStore";
            var r = new d(a.default, {
                SET_SOUNDPACK: function(e) {
                    let {
                        soundpack: t
                    } = e;
                    o = {
                        soundpack: t
                    }
                }
            })
        },
        319291: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var s = n("157246");
            let a = {
                [s.Soundpacks.CLASSIC]: {
                    discodo: "discodo",
                    message1: "message1",
                    deafen: "deafen",
                    undeafen: "undeafen",
                    mute: "mute",
                    unmute: "unmute",
                    disconnect: "disconnect",
                    ptt_start: "ptt_start",
                    ptt_stop: "ptt_stop",
                    user_join: "user_join",
                    user_leave: "user_leave",
                    user_moved: "user_moved",
                    call_calling: "call_calling",
                    call_ringing: "call_ringing",
                    stream_started: "stream_started",
                    stream_ended: "stream_ended",
                    stream_user_joined: "stream_user_joined",
                    stream_user_left: "stream_user_left",
                    poggermode_enabled: "poggermode_enabled",
                    poggermode_applause: "poggermode_applause",
                    poggermode_achievement_unlock: "poggermode_achievement_unlock",
                    stage_waiting: "stage_waiting"
                },
                [s.Soundpacks.DETUNE]: {
                    discodo: "detune_discodo",
                    message1: "detune_message1",
                    deafen: "detune_deafen",
                    undeafen: "detune_undeafen",
                    mute: "detune_mute",
                    unmute: "detune_unmute",
                    disconnect: "detune_disconnect",
                    ptt_start: "detune_ptt_start",
                    ptt_stop: "detune_ptt_stop",
                    user_join: "detune_user_join",
                    user_leave: "detune_user_leave",
                    user_moved: "detune_user_moved",
                    call_calling: "detune_call_calling",
                    call_ringing: "detune_call_ringing",
                    stream_started: "detune_stream_started",
                    stream_ended: "detune_stream_ended",
                    stream_user_joined: "detune_stream_user_joined",
                    stream_user_left: "detune_stream_user_left"
                }
            };

            function i(e) {
                return a[e]
            }
        },
        709681: function(e, t, n) {
            "use strict";
            let s;
            n.r(t), n.d(t, {
                createSoundForPack: function() {
                    return o
                },
                createSound: function() {
                    return d
                },
                playSound: function() {
                    return r
                }
            });
            var a = n("870696"),
                i = n("319291"),
                u = n("102985");

            function o(e, t) {
                var n;
                let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    a = (0, i.default)(t);
                return d(null !== (n = a[e]) && void 0 !== n ? n : e, e, s)
            }

            function d(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                return new s(e, t, n)
            }

            function r(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    s = arguments.length > 2 ? arguments[2] : void 0;
                if (u.default.disableSounds) return;
                let o = (0, i.default)(a.default.getSoundpack()),
                    r = d(null !== (t = o[e]) && void 0 !== t ? t : e, e, n);
                return null != s ? r.playWithListener().then(e => {
                    e && s()
                }) : r.play(), r
            }
            s = n("895737").WebAudioSound
        },
        895737: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                playGiftSound: function() {
                    return c
                },
                WebAudioSound: function() {
                    return f
                }
            });
            var s = n("917351"),
                a = n.n(s),
                i = n("520497"),
                u = n("812809"),
                o = n("42887"),
                d = n("773336");
            let r = "default",
                l = r;

            function c(e, t) {
                let n = new Audio((0, i.default)(e));
                n.volume = (0, u.default)(t), n.play()
            }

            function p() {
                null != window.navigator.mediaDevices && window.navigator.mediaDevices.enumerateDevices().then(e => {
                    let t = o.default.getOutputDevices(),
                        n = a(t).sortBy(e => e.index).findIndex(e => e.id === o.default.getOutputDeviceId()),
                        s = t[o.default.getOutputDeviceId()],
                        i = e.filter(e => "audiooutput" === e.kind && "communications" !== e.deviceId),
                        u = i[n];
                    null != s && (null == u || u.label !== s.name) && (u = i.find(e => e.label === s.name)), l = null != u ? u.deviceId : r
                }).catch(() => {
                    l = r
                })
            }
            d.isPlatformEmbedded && (o.default.addChangeListener(p), p());
            class f {
                get volume() {
                    return this._volume
                }
                set volume(e) {
                    this._volume = e, this._ensureAudio().then(t => t.volume = e)
                }
                loop() {
                    this._ensureAudio().then(e => {
                        e.loop = !0, e.play()
                    })
                }
                play() {
                    this._ensureAudio().then(e => {
                        e.loop = !1, e.play()
                    })
                }
                pause() {
                    null != this._audio && this._audio.then(e => e.pause())
                }
                stop() {
                    this._destroyAudio()
                }
                playWithListener() {
                    return new Promise((e, t) => {
                        this._ensureAudio().then(n => {
                            (null == n.duration || 0 === n.duration) && t("sound has no duration"), n.play(), setTimeout(() => {
                                e(!0)
                            }, n.duration)
                        })
                    })
                }
                _destroyAudio() {
                    null != this._audio && (this._audio.then(e => {
                        e.pause(), e.src = ""
                    }), this._audio = null)
                }
                _ensureAudio() {
                    var e;
                    return this._audio = null !== (e = this._audio) && void 0 !== e ? e : new Promise((e, t) => {
                        let s = new Audio;
                        s.src = n("895637")("../../sounds/".concat(this.name, ".mp3").replace("../../sounds/", "./")), s.onloadeddata = () => {
                            s.volume = Math.min(o.default.getOutputVolume() / 100 * this._volume, 1), d.isPlatformEmbedded && s.setSinkId(l), e(s)
                        }, s.onerror = () => t(Error("could not play audio")), s.onended = () => this._destroyAudio(), s.load()
                    }), this._audio
                }
                constructor(e, t, n) {
                    this.name = e, this._volume = n
                }
            }
        }
    }
]);