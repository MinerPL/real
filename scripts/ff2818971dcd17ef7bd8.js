(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["4075"], {
        619335: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
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
                v = n("733160"),
                E = n("990864"),
                h = n("274652"),
                I = n("922744"),
                S = n("155207"),
                T = n("745183"),
                y = n("368121"),
                A = n("944633"),
                D = n("228427"),
                L = n("959097"),
                b = n("656038"),
                w = n("49111");

            function N(e, t) {
                switch (e.type) {
                    case w.ChannelTypes.DM:
                        return a.default;
                    case w.ChannelTypes.GROUP_DM:
                        let n = (0, i.getIsBroadcastingGDM)(e.id);
                        return n ? s.default : S.default;
                    case w.ChannelTypes.GUILD_ANNOUNCEMENT:
                        if (e.isNSFW()) return h.default;
                        if ((0, b.default)(e)) return E.default;
                        else return v.default;
                    case w.ChannelTypes.GUILD_TEXT:
                        if (e.id === (null == t ? void 0 : t.rulesChannelId)) return r.default;
                        if (e.isNSFW()) return o.default;
                        else if ((0, b.default)(e)) return u.default;
                        else return d.default;
                    case w.ChannelTypes.GUILD_FORUM:
                        let N = e.isMediaChannel();
                        if (e.isNSFW()) return N ? C.default : p.default;
                        if ((0, b.default)(e)) return N ? m.default : f.default;
                        else return N ? g.default : c.default;
                    case w.ChannelTypes.GUILD_MEDIA:
                        if (e.isNSFW()) return C.default;
                        if ((0, b.default)(e)) return m.default;
                        else return g.default;
                    case w.ChannelTypes.GUILD_STAGE_VOICE:
                        return D.default;
                    case w.ChannelTypes.GUILD_VOICE:
                        if ((0, b.default)(e)) return A.default;
                        return y.default;
                    case w.ChannelTypes.ANNOUNCEMENT_THREAD:
                    case w.ChannelTypes.PUBLIC_THREAD:
                        if (e.isNSFW()) return I.default;
                        if (e.isForumPost()) return _.default;
                        else return L.default;
                    case w.ChannelTypes.PRIVATE_THREAD:
                        if (e.isNSFW()) return I.default;
                        return T.default;
                    case w.ChannelTypes.GUILD_DIRECTORY:
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
                let r = (await n.el("438382").then(n.t.bind(n, "438382", 21))).default;
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
                updateClipsEnabled: function() {
                    return A
                },
                updateDecoupledClipsEnabled: function() {
                    return D
                },
                updateClipsStorageLocation: function() {
                    return L
                },
                updateClipsLength: function() {
                    return b
                },
                saveClip: function() {
                    return P
                },
                updateClipMetadata: function() {
                    return R
                },
                clearClipsSession: function() {
                    return M
                },
                clearNewClipIds: function() {
                    return U
                },
                loadClipsDirectory: function() {
                    return V
                },
                deleteClip: function() {
                    return O
                },
                setHardwareClipEncode: function() {
                    return H
                },
                exportClip: function() {
                    return F
                }
            });
            var i = n("913144"),
                a = n("49671"),
                l = n("44642"),
                r = n("374014"),
                d = n("584687"),
                u = n("268491"),
                o = n("373469"),
                s = n("271938"),
                c = n("42887"),
                f = n("568307"),
                p = n("205817"),
                _ = n("599110"),
                g = n("773336"),
                m = n("709681"),
                C = n("386045"),
                v = n("13136"),
                E = n("881095"),
                h = n("997942"),
                I = n("310238"),
                S = n("99366"),
                T = n("80028"),
                y = n("49111");
            async function A(e) {
                let {
                    clipsEnabled: t,
                    guildId: n,
                    trackAnalytics: a = !1
                } = e;
                await i.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        clipsEnabled: t,
                        ...!t && {
                            decoupledClipsEnabled: !1
                        }
                    }
                }), a && _.default.track(y.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
                    clips_enabled: t,
                    guild_id: n,
                    ...!t && {
                        decoupled_clips_enabled: !1
                    }
                })
            }

            function D(e) {
                let {
                    enabled: t,
                    trackAnalytics: n = !1
                } = e;
                i.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        ...t && {
                            clipsEnabled: !0
                        },
                        decoupledClipsEnabled: t
                    }
                }), n && _.default.track(y.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
                    ...t && {
                        clips_enabled: !0
                    },
                    decoupled_clips_enabled: t
                })
            }

            function L(e) {
                i.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        storageLocation: e
                    }
                })
            }

            function b(e) {
                i.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        clipsLength: e
                    }
                })
            }

            function w(e, t) {
                var n, i, a, r, d, o, s, f, p, _;
                let g = new Map;
                for (let e in t.framesEncodedByEncoder) {
                    let i = t.framesEncodedByEncoder[e],
                        a = (0, l.parseEncoder)(e),
                        r = null !== (n = g.get(a)) && void 0 !== n ? n : 0;
                    g.set(a, r + i)
                }
                return {
                    ...e,
                    frames_encoded_nvidia_cuda: null !== (i = g.get(l.Encoders.NVIDIA_CUDA)) && void 0 !== i ? i : 0,
                    frames_encoded_nvidia_direct3d: null !== (a = g.get(l.Encoders.NVIDIA_DIRECT_3D)) && void 0 !== a ? a : 0,
                    frames_encoded_openh264: null !== (r = g.get(l.Encoders.OPENH264)) && void 0 !== r ? r : 0,
                    frames_encoded_videotoolbox: null !== (d = g.get(l.Encoders.VIDEOTOOLBOX)) && void 0 !== d ? d : 0,
                    frames_encoded_amd_direct3d: null !== (o = g.get(l.Encoders.AMD_DIRECT_3D)) && void 0 !== o ? o : 0,
                    frames_encoded_intel: null !== (s = g.get(l.Encoders.INTEL)) && void 0 !== s ? s : 0,
                    frames_encoded_intel_direct3d: null !== (f = g.get(l.Encoders.INTEL_DIRECT_3D)) && void 0 !== f ? f : 0,
                    frames_encoded_uncategorized: null !== (p = g.get(l.Encoders.UNCATEGORIZED)) && void 0 !== p ? p : 0,
                    frames_encoded_unknown: null !== (_ = g.get(l.Encoders.UNKNOWN)) && void 0 !== _ ? _ : 0,
                    frames_submitted: t.framesSubmitted,
                    frames_submitted_during_clip: t.framesSubmittedDuringClip,
                    frames_encoded: t.framesEncoded,
                    frames_encoded_during_clip: t.framesEncodedDuringClip,
                    frames_dropped: t.framesDropped,
                    frames_dropped_during_clip: t.framesDroppedDuringClip,
                    clip_hardware_encode_setting: c.default.getHardwareClipEncode(),
                    clip_duration_setting: C.default.getSettings().clipsLength,
                    clip_duration: t.clipDuration,
                    clip_resolution_width: t.clipResolutionWidth,
                    clip_resolution_height: t.clipResolutionHeight,
                    min_fps: t.minFps,
                    max_fps: t.maxFps,
                    submitted_fps: t.submittedFps,
                    target_fps: u.default.getState().fps,
                    audio_track_count: t.audioTrackCount,
                    saved_at: t.savedAt
                }
            }
            async function N() {
                let e = C.default.getSettings(),
                    t = e.storageLocation,
                    n = (0, E.default)(),
                    i = "".concat((0, v.default)(n.applicationName.substring(0, 20)), "_").concat(n.id, ".mp4"),
                    l = a.default.fileManager.join(t, i),
                    d = c.default.getMediaEngine(),
                    u = function() {
                        var e;
                        let t = s.default.getId(),
                            n = o.default.getActiveStreamForUser(t, null),
                            i = null != n ? p.default.getRTCConnection((0, r.encodeStreamKey)(n)) : null,
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
                    var f;
                    let {
                        duration: e,
                        thumbnail: t,
                        clipStats: i
                    } = await d.saveClip(l, JSON.stringify(n)), r = w(u, i);
                    r.clip_save_time_ms = i.clipSaveTimeMs, r.clip_size_bytes = i.clipSizeBytes, _.default.track(y.AnalyticEvents.CLIP_SAVED, r);
                    let o = await (null != a.default.clips.getClipProtocolURLFromPath ? (0, S.createThumbnailFromVideo)(a.default.clips.getClipProtocolURLFromPath(l), 0) : (0, S.createThumbnail)(t));
                    return n.thumbnail = o, n.length = e, T.ClipsLogger.info("Clip save succeeded with ".concat(e, "ms and thumbnail ").concat(null !== (f = null == o ? void 0 : o.length) && void 0 !== f ? f : 0, " bytes thumbnail.")), await d.updateClipMetadata(l, JSON.stringify(n)), {
                        ...n,
                        filepath: l
                    }
                } catch (t) {
                    if (!("errorMessage" in t)) throw _.default.track(y.AnalyticEvents.CLIP_SAVE_FAILURE, u), t;
                    let e = w(u, t);
                    throw e.error_at = t.errorAt, e.error_message = t.errorMessage, _.default.track(y.AnalyticEvents.CLIP_SAVE_FAILURE, e), t.errorMessage
                }
            }
            async function P() {
                var e;
                let {
                    enableDecoupledGameClipping: t
                } = d.default.getCurrentConfig({
                    location: "8ac9d1_1"
                }, {
                    autoTrackExposure: !1
                });
                if (C.default.getIsSavingClip()) return;
                let n = C.default.getSettings().clipsEnabled && null != o.default.getCurrentUserActiveStream(),
                    a = t && C.default.getSettings().decoupledClipsEnabled && (null === (e = f.default.getVisibleGame()) || void 0 === e ? void 0 : e.windowHandle) != null;
                if (!n && !a) return;
                i.default.dispatch({
                    type: "CLIPS_SAVE_CLIP_START"
                });
                let l = (0, m.playSound)("clip_save", .5),
                    r = performance.now();
                try {
                    let e = await N();
                    i.default.dispatch({
                        type: "CLIPS_SAVE_CLIP",
                        clip: e
                    })
                } catch (e) {
                    T.ClipsLogger.error("Clip Failed to Save", e), null == l || l.stop(), (0, m.playSound)("clip_error", .5), i.default.dispatch({
                        type: "CLIPS_SAVE_CLIP_ERROR"
                    })
                }
                T.ClipsLogger.info("".concat(C.default.getSettings().clipsLength / 1e3, "s clip save took ").concat(Math.round(performance.now() - r), "ms"))
            }
            async function R(e, t) {
                let n = C.default.getClips().find(t => t.id === e);
                if (null == n) return;
                let a = {
                    ...n,
                    ...t
                };
                await c.default.getMediaEngine().updateClipMetadata(a.filepath, JSON.stringify(a)), _.default.track(y.AnalyticEvents.CLIP_EDITED), i.default.dispatch({
                    type: "CLIPS_UPDATE_METADATA",
                    clip: a
                })
            }

            function M() {
                i.default.dispatch({
                    type: "CLIPS_CLEAR_CLIPS_SESSION"
                })
            }

            function U() {
                i.default.dispatch({
                    type: "CLIPS_CLEAR_NEW_CLIP_IDS"
                })
            }
            async function V(e) {
                var t;
                if (!(0, g.isDesktop)() || (null === (t = a.default.clips) || void 0 === t ? void 0 : t.loadClipsDirectory) == null) return;
                let n = await a.default.clips.loadClipsDirectory(e),
                    l = [];
                for (let e of n) {
                    let t = await (0, h.validateClipMetadata)({
                        ...e.metadata,
                        filepath: e.filepath
                    });
                    null != t && l.push(t)
                }
                i.default.dispatch({
                    type: "CLIPS_LOAD_DIRECTORY_SUCCESS",
                    clips: l
                })
            }
            async function O(e) {
                var t;
                (0, g.isDesktop)() && (null === (t = a.default.clips) || void 0 === t ? void 0 : t.deleteClip) != null && (await a.default.clips.deleteClip(e), i.default.dispatch({
                    type: "CLIPS_DELETE_CLIP",
                    filepath: e
                }))
            }
            async function H(e) {
                await i.default.dispatch({
                    type: "MEDIA_ENGINE_SET_HARDWARE_CLIP_ENCODE",
                    enabled: e
                })
            }
            async function F(e, t) {
                let n = c.default.getMediaEngine(),
                    i = await n.exportClip(e.filepath, t);
                return (0, I.default)(i)
            }
        },
        310238: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("161179"),
                a = n.n(i),
                l = n("268150");
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
        },
        267675: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("920040");
            n("773670");
            var a = n("469563"),
                l = n("265614"),
                r = n("75196"),
                d = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: l,
                        ...d
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(d),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: l,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M4 2.5C2.897 2.5 2 3.397 2 4.5V15.5C2 16.604 2.897 17.5 4 17.5H11V19.5H7V21.5H17V19.5H13V17.5H20C21.103 17.5 22 16.604 22 15.5V4.5C22 3.397 21.103 2.5 20 2.5H4ZM20 4.5V13.5H4V4.5H20Z"
                        })
                    })
                }, l.ScreenIcon)
        }
    }
]);