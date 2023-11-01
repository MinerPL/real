(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["80781"], {
        619335: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            });
            var i = n("274870"),
                a = n("116320"),
                l = n("617559"),
                r = n("213523"),
                d = n("593195"),
                u = n("361777"),
                o = n("497757"),
                s = n("774223"),
                c = n("991497"),
                f = n("393621"),
                p = n("905999"),
                _ = n("660074"),
                g = n("990745"),
                m = n("190986"),
                C = n("721618"),
                E = n("733160"),
                v = n("990864"),
                h = n("274652"),
                I = n("922744"),
                S = n("155207"),
                T = n("745183"),
                y = n("368121"),
                A = n("944633"),
                D = n("228427"),
                L = n("959097"),
                b = n("656038"),
                N = n("49111");

            function w(e, t) {
                switch (e.type) {
                    case N.ChannelTypes.DM:
                        return a.default;
                    case N.ChannelTypes.GROUP_DM:
                        let n = (0, i.getIsBroadcastingGDM)(e.id);
                        return n ? s.default : S.default;
                    case N.ChannelTypes.GUILD_ANNOUNCEMENT:
                        if (e.isNSFW()) return h.default;
                        if ((0, b.default)(e)) return v.default;
                        else return E.default;
                    case N.ChannelTypes.GUILD_TEXT:
                        if (e.id === (null == t ? void 0 : t.rulesChannelId)) return r.default;
                        if (e.isNSFW()) return o.default;
                        else if ((0, b.default)(e)) return u.default;
                        else return d.default;
                    case N.ChannelTypes.GUILD_FORUM:
                        let w = e.isMediaChannel();
                        if (e.isNSFW()) return w ? C.default : p.default;
                        if ((0, b.default)(e)) return w ? m.default : f.default;
                        else return w ? g.default : c.default;
                    case N.ChannelTypes.GUILD_MEDIA:
                        if (e.isNSFW()) return C.default;
                        if ((0, b.default)(e)) return m.default;
                        else return g.default;
                    case N.ChannelTypes.GUILD_STAGE_VOICE:
                        return D.default;
                    case N.ChannelTypes.GUILD_VOICE:
                        if ((0, b.default)(e)) return A.default;
                        return y.default;
                    case N.ChannelTypes.ANNOUNCEMENT_THREAD:
                    case N.ChannelTypes.PUBLIC_THREAD:
                        if (e.isNSFW()) return I.default;
                        if (e.isForumPost()) return _.default;
                        else return L.default;
                    case N.ChannelTypes.PRIVATE_THREAD:
                        if (e.isNSFW()) return I.default;
                        return T.default;
                    case N.ChannelTypes.GUILD_DIRECTORY:
                        return l.default;
                    default:
                        return null
                }
            }
        },
        13136: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            let i = /[<>:"/\\|?*\.]/g;
            var a = function(e) {
                return e.replaceAll(i, "").trim().replaceAll(" ", "_")
            }
        },
        881095: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("373469"),
                a = n("945956"),
                l = n("568307"),
                r = n("800762"),
                d = n("299039"),
                u = n("80028");

            function o() {
                var e, t, n, o, s;
                let c = i.default.getStreamerActiveStreamMetadata(),
                    f = null == c ? void 0 : c.pid,
                    p = null != c ? null != f ? l.default.getGameForPID(f) : null : l.default.getVisibleGame(),
                    _ = null !== (t = null !== (e = null == c ? void 0 : c.sourceName) && void 0 !== e ? e : null == p ? void 0 : p.name) && void 0 !== t ? t : "Unknown",
                    g = null !== (o = null !== (n = null == c ? void 0 : c.id) && void 0 !== n ? n : null == p ? void 0 : p.id) && void 0 !== o ? o : void 0,
                    m = Object.keys(r.default.getVoiceStatesForChannel(null !== (s = a.default.getChannelId()) && void 0 !== s ? s : ""));
                return {
                    id: d.default.fromTimestamp(Date.now()),
                    version: u.CURRENT_CLIP_METADATA_VERSION,
                    applicationName: null != _ ? _ : "Unknown",
                    applicationId: g,
                    users: m,
                    clipMethod: "manual",
                    length: 0,
                    thumbnail: ""
                }
            }
        },
        997942: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                validateClipMetadata: function() {
                    return r
                }
            });
            var i = n("80028");
            let a = [e => {
                    let t = {
                        ...e,
                        version: 1,
                        applicationName: e.gameName,
                        applicationId: void 0
                    };
                    return delete t.gameName, t
                }, e => {
                    let t = {
                        ...e,
                        version: 2,
                        name: e.name.startsWith("Clip - ") ? void 0 : e.name
                    };
                    return t
                }],
                l = null;
            async function r(e) {
                var t;
                let r = (await n.el("990599").then(n.t.bind(n, "990599", 21))).default;
                let d = (t = r, null != l ? l : l = t.object({
                    id: t.string().required(),
                    version: t.number().positive().integer().min(0).max(i.CURRENT_CLIP_METADATA_VERSION).optional(),
                    name: t.string(),
                    gameName: t.string().when("version", {
                        is: t.number().greater(0).required(),
                        then: t.forbidden(),
                        otherwise: t.required()
                    }),
                    applicationName: t.string().when("version", {
                        is: t.number().greater(0).required(),
                        then: t.required(),
                        otherwise: t.forbidden()
                    }),
                    applicationId: t.string(),
                    users: t.array().items(t.string()).required(),
                    filepath: t.string().required(),
                    length: t.number().required(),
                    thumbnail: t.string().required().allow(""),
                    editMetadata: t.object().keys({
                        start: t.number(),
                        end: t.number(),
                        applicationAudio: t.boolean(),
                        voiceAudio: t.boolean()
                    }),
                    clipMethod: t.string().allow("auto", "manual").required()
                }).required());
                try {
                    r.assert(e, d);
                    return null == e.version && (e.version = 0), a.slice(e.version).reduce((e, t) => t(e), e)
                } catch (e) {
                    return null
                }
            }
        },
        803725: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateAllowVoiceRecording: function() {
                    return L
                },
                updateClipsEnabled: function() {
                    return b
                },
                updateDecoupledClipsEnabled: function() {
                    return N
                },
                updateClipsStorageLocation: function() {
                    return w
                },
                updateClipsLength: function() {
                    return P
                },
                saveClip: function() {
                    return M
                },
                updateClipMetadata: function() {
                    return O
                },
                clearClipsSession: function() {
                    return F
                },
                clearNewClipIds: function() {
                    return G
                },
                loadClipsDirectory: function() {
                    return V
                },
                deleteClip: function() {
                    return k
                },
                setHardwareClipEncode: function() {
                    return H
                },
                exportClip: function() {
                    return x
                }
            });
            var i = n("750028"),
                a = n("913144"),
                l = n("49671"),
                r = n("44642"),
                d = n("374014"),
                u = n("584687"),
                o = n("872173"),
                s = n("268491"),
                c = n("373469"),
                f = n("271938"),
                p = n("42887"),
                _ = n("568307"),
                g = n("336727"),
                m = n("599110"),
                C = n("773336"),
                E = n("709681"),
                v = n("386045"),
                h = n("13136"),
                I = n("881095"),
                S = n("997942"),
                T = n("310238"),
                y = n("99366"),
                A = n("80028"),
                D = n("49111");

            function L(e) {
                let {
                    allowVoiceRecording: t
                } = e;
                o.PreloadedUserSettingsActionCreators.updateAsync("clips", e => {
                    e.allowVoiceRecording = i.BoolValue.create({
                        value: t
                    })
                }, o.UserSettingsDelay.INFREQUENT_USER_ACTION), m.default.track(D.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
                    allow_voice_recording: t
                })
            }
            async function b(e) {
                let {
                    clipsEnabled: t,
                    guildId: n,
                    trackAnalytics: i = !1
                } = e;
                await a.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        clipsEnabled: t,
                        ...!t && {
                            decoupledClipsEnabled: !1
                        }
                    }
                }), i && m.default.track(D.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
                    clips_enabled: t,
                    guild_id: n,
                    ...!t && {
                        decoupled_clips_enabled: !1
                    }
                })
            }

            function N(e) {
                let {
                    enabled: t,
                    trackAnalytics: n = !1
                } = e;
                a.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        ...t && {
                            clipsEnabled: !0
                        },
                        decoupledClipsEnabled: t
                    }
                }), n && m.default.track(D.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
                    ...t && {
                        clips_enabled: !0
                    },
                    decoupled_clips_enabled: t
                })
            }

            function w(e) {
                a.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        storageLocation: e
                    }
                })
            }

            function P(e) {
                a.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        clipsLength: e
                    }
                })
            }

            function R(e, t) {
                var n, i, a, l, d, u, o, c, f, _;
                let g = new Map;
                for (let e in t.framesEncodedByEncoder) {
                    let i = t.framesEncodedByEncoder[e],
                        a = (0, r.parseEncoder)(e),
                        l = null !== (n = g.get(a)) && void 0 !== n ? n : 0;
                    g.set(a, l + i)
                }
                return {
                    ...e,
                    frames_encoded_nvidia_cuda: null !== (i = g.get(r.Encoders.NVIDIA_CUDA)) && void 0 !== i ? i : 0,
                    frames_encoded_nvidia_direct3d: null !== (a = g.get(r.Encoders.NVIDIA_DIRECT_3D)) && void 0 !== a ? a : 0,
                    frames_encoded_openh264: null !== (l = g.get(r.Encoders.OPENH264)) && void 0 !== l ? l : 0,
                    frames_encoded_videotoolbox: null !== (d = g.get(r.Encoders.VIDEOTOOLBOX)) && void 0 !== d ? d : 0,
                    frames_encoded_amd_direct3d: null !== (u = g.get(r.Encoders.AMD_DIRECT_3D)) && void 0 !== u ? u : 0,
                    frames_encoded_intel: null !== (o = g.get(r.Encoders.INTEL)) && void 0 !== o ? o : 0,
                    frames_encoded_intel_direct3d: null !== (c = g.get(r.Encoders.INTEL_DIRECT_3D)) && void 0 !== c ? c : 0,
                    frames_encoded_uncategorized: null !== (f = g.get(r.Encoders.UNCATEGORIZED)) && void 0 !== f ? f : 0,
                    frames_encoded_unknown: null !== (_ = g.get(r.Encoders.UNKNOWN)) && void 0 !== _ ? _ : 0,
                    frames_submitted: t.framesSubmitted,
                    frames_submitted_during_clip: t.framesSubmittedDuringClip,
                    frames_encoded: t.framesEncoded,
                    frames_encoded_during_clip: t.framesEncodedDuringClip,
                    frames_dropped: t.framesDropped,
                    frames_dropped_during_clip: t.framesDroppedDuringClip,
                    clip_hardware_encode_setting: p.default.getHardwareClipEncode(),
                    clip_duration_setting: v.default.getSettings().clipsLength,
                    clip_duration: t.clipDuration,
                    clip_resolution_width: t.clipResolutionWidth,
                    clip_resolution_height: t.clipResolutionHeight,
                    min_fps: t.minFps,
                    max_fps: t.maxFps,
                    submitted_fps: t.submittedFps,
                    target_fps: s.default.getState().fps,
                    audio_track_count: t.audioTrackCount,
                    saved_at: t.savedAt
                }
            }
            async function U() {
                let e = v.default.getSettings(),
                    t = e.storageLocation,
                    n = (0, I.default)(),
                    i = "".concat((0, h.default)(n.applicationName.substring(0, 20)), "_").concat(n.id, ".mp4"),
                    a = l.default.fileManager.join(t, i),
                    r = p.default.getMediaEngine(),
                    u = function() {
                        var e;
                        let t = f.default.getId(),
                            n = c.default.getActiveStreamForUser(t, null),
                            i = null != n ? g.default.getRTCConnection((0, d.encodeStreamKey)(n)) : null,
                            a = null == i ? void 0 : null === (e = i.analyticsContext) || void 0 === e ? void 0 : e.streamApplication;
                        return {
                            rtc_connection_id: null == i ? void 0 : i.getRTCConnectionId(),
                            media_session_id: null == i ? void 0 : i.getMediaSessionId(),
                            parent_media_session_id: null == i ? void 0 : i.parentMediaSessionId,
                            guild_id: null == n ? void 0 : n.guildId,
                            channel_id: null == n ? void 0 : n.channelId,
                            application_id: null == a ? void 0 : a.id,
                            application_name: null == a ? void 0 : a.name
                        }
                    }();
                try {
                    var o;
                    let {
                        duration: e,
                        thumbnail: t,
                        clipStats: i
                    } = await r.saveClip(a, JSON.stringify(n)), d = R(u, i);
                    d.clip_save_time_ms = i.clipSaveTimeMs, d.clip_size_bytes = i.clipSizeBytes, m.default.track(D.AnalyticEvents.CLIP_SAVED, d);
                    let s = await (null != l.default.clips.getClipProtocolURLFromPath ? (0, y.createThumbnailFromVideo)(l.default.clips.getClipProtocolURLFromPath(a), 0) : (0, y.createThumbnail)(t));
                    return n.thumbnail = s, n.length = e, A.ClipsLogger.info("Clip save succeeded with ".concat(e, "ms and thumbnail ").concat(null !== (o = null == s ? void 0 : s.length) && void 0 !== o ? o : 0, " bytes thumbnail.")), await r.updateClipMetadata(a, JSON.stringify(n)), {
                        ...n,
                        filepath: a
                    }
                } catch (t) {
                    if (!("errorMessage" in t)) throw m.default.track(D.AnalyticEvents.CLIP_SAVE_FAILURE, u), t;
                    let e = R(u, t);
                    throw e.error_at = t.errorAt, e.error_message = t.errorMessage, m.default.track(D.AnalyticEvents.CLIP_SAVE_FAILURE, e), t.errorMessage
                }
            }
            async function M() {
                var e;
                let {
                    enableDecoupledGameClipping: t
                } = u.default.getCurrentConfig({
                    location: "8ac9d1_1"
                }, {
                    autoTrackExposure: !1
                });
                if (v.default.getIsSavingClip()) return;
                let n = v.default.getSettings().clipsEnabled && null != c.default.getCurrentUserActiveStream(),
                    i = t && v.default.getSettings().decoupledClipsEnabled && (null === (e = _.default.getVisibleGame()) || void 0 === e ? void 0 : e.windowHandle) != null;
                if (!n && !i) return;
                a.default.dispatch({
                    type: "CLIPS_SAVE_CLIP_START"
                });
                let l = (0, E.playSound)("clip_save", .5),
                    r = performance.now();
                try {
                    let e = await U();
                    a.default.dispatch({
                        type: "CLIPS_SAVE_CLIP",
                        clip: e
                    })
                } catch (e) {
                    A.ClipsLogger.error("Clip Failed to Save", e), null == l || l.stop(), (0, E.playSound)("clip_error", .5), a.default.dispatch({
                        type: "CLIPS_SAVE_CLIP_ERROR"
                    })
                }
                A.ClipsLogger.info("".concat(v.default.getSettings().clipsLength / 1e3, "s clip save took ").concat(Math.round(performance.now() - r), "ms"))
            }
            async function O(e, t) {
                let n = v.default.getClips().find(t => t.id === e);
                if (null == n) return;
                let i = {
                    ...n,
                    ...t
                };
                await p.default.getMediaEngine().updateClipMetadata(i.filepath, JSON.stringify(i)), m.default.track(D.AnalyticEvents.CLIP_EDITED), a.default.dispatch({
                    type: "CLIPS_UPDATE_METADATA",
                    clip: i
                })
            }

            function F() {
                a.default.dispatch({
                    type: "CLIPS_CLEAR_CLIPS_SESSION"
                })
            }

            function G() {
                a.default.dispatch({
                    type: "CLIPS_CLEAR_NEW_CLIP_IDS"
                })
            }
            async function V(e) {
                var t;
                if (!(0, C.isDesktop)() || (null === (t = l.default.clips) || void 0 === t ? void 0 : t.loadClipsDirectory) == null) return;
                let n = await l.default.clips.loadClipsDirectory(e),
                    i = [];
                for (let e of n) {
                    let t = await (0, S.validateClipMetadata)({
                        ...e.metadata,
                        filepath: e.filepath
                    });
                    null != t && i.push(t)
                }
                a.default.dispatch({
                    type: "CLIPS_LOAD_DIRECTORY_SUCCESS",
                    clips: i
                })
            }
            async function k(e) {
                var t;
                (0, C.isDesktop)() && (null === (t = l.default.clips) || void 0 === t ? void 0 : t.deleteClip) != null && (await l.default.clips.deleteClip(e), a.default.dispatch({
                    type: "CLIPS_DELETE_CLIP",
                    filepath: e
                }))
            }
            async function H(e) {
                await a.default.dispatch({
                    type: "MEDIA_ENGINE_SET_HARDWARE_CLIP_ENCODE",
                    enabled: e
                })
            }
            async function x(e, t) {
                let n = p.default.getMediaEngine(),
                    i = await n.exportClip(e.filepath, t);
                return (0, T.default)(i)
            }
        },
        310238: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("627445"),
                a = n.n(i),
                l = n("547757");
            async function r(e) {
                let t;
                let n = l.createFile(!1),
                    i = new Promise(e => {
                        n.onReady = e
                    }),
                    r = await e.arrayBuffer();
                for (let e of (r.fileStart = 0, n.appendBuffer(r), n.flush(), await i, a(null != n.boxes, "mp4boxInputFile.boxes should not be null after parsing"), n.boxes)) "uuid" === e.type && (t = e.start);
                let d = e.slice(0, t, e.type),
                    u = e.slice(t + 4, t + 8 + 16, e.type);
                return new Blob([d, new Uint8Array([0, 0, 0, 24]), u], {
                    type: e.type
                })
            }
        },
        99366: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                createThumbnail: function() {
                    return a
                },
                createThumbnailFromVideo: function() {
                    return l
                }
            });
            var i = n("80028");
            async function a(e) {
                if (null == e) return "";
                let t = new Blob([e], {
                        type: "image/jpeg"
                    }),
                    n = await new Promise(e => {
                        let n = new FileReader;
                        n.onloadend = () => {
                            e(n.result)
                        }, n.readAsDataURL(t)
                    });
                if ("string" != typeof n) throw Error("Thumbnail creation failed");
                return n
            }

            function l(e, t) {
                return new Promise(async n => {
                    let a = document.createElement("video");
                    a.muted = !0, a.src = e, a.currentTime = t, await a.play();
                    let l = i.CLIPS_THUMBNAIL_MAX_WIDTH / a.videoWidth,
                        r = i.CLIPS_THUMBNAIL_MAX_HEIGHT / a.videoHeight,
                        d = Math.min(l, r),
                        u = a.videoWidth * d,
                        o = a.videoHeight * d,
                        s = document.createElement("canvas");
                    s.width = u, s.height = o;
                    let c = s.getContext("2d");
                    null != c && (c.drawImage(a, 0, 0, a.videoWidth, a.videoHeight, 0, 0, u, o), n(s.toDataURL("image/jpeg", .9)))
                })
            }
        },
        375202: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("819068");

            function a(e, t) {
                if (__OVERLAY__) {
                    let e = t.getGame(),
                        n = (0, i.getPID)();
                    return null == e || null == n ? null : {
                        id: e.id,
                        pid: n,
                        pidPath: [],
                        nativeProcessObserverId: 0,
                        hidden: !1,
                        elevated: !1,
                        name: e.name,
                        lastFocused: 0,
                        exePath: "",
                        exeName: "",
                        cmdLine: "",
                        processName: "",
                        distributor: null,
                        windowHandle: null,
                        fullscreenType: 0
                    }
                }
                return e.getVisibleGame()
            }
        }
    }
]);