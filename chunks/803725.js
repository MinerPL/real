            "use strict";
            n.r(t), n.d(t, {
                updateAllowVoiceRecording: function() {
                    return D
                },
                updateClipsEnabled: function() {
                    return L
                },
                updateDecoupledClipsEnabled: function() {
                    return M
                },
                updateRemindersEnabled: function() {
                    return O
                },
                updateClipsStorageLocation: function() {
                    return R
                },
                updateClipsQuality: function() {
                    return x
                },
                updateClipsLength: function() {
                    return w
                },
                updateViewerClipsEnabled: function() {
                    return P
                },
                saveClip: function() {
                    return G
                },
                updateClipMetadata: function() {
                    return F
                },
                clearClipsSession: function() {
                    return V
                },
                clearNewClipIds: function() {
                    return H
                },
                loadClipsDirectory: function() {
                    return B
                },
                deleteClip: function() {
                    return j
                },
                exportClip: function() {
                    return q
                }
            }), n("222007"), n("424973");
            var i = n("750028"),
                a = n("913144"),
                l = n("49671"),
                s = n("44642"),
                u = n("374014"),
                d = n("584687"),
                r = n("103979"),
                o = n("872173"),
                c = n("268491"),
                f = n("373469"),
                p = n("271938"),
                m = n("42887"),
                _ = n("568307"),
                g = n("205817"),
                E = n("599110"),
                h = n("773336"),
                S = n("709681"),
                v = n("386045"),
                C = n("13136"),
                A = n("881095"),
                I = n("997942"),
                T = n("310238"),
                b = n("99366"),
                y = n("80028"),
                N = n("49111");

            function D(e) {
                let {
                    allowVoiceRecording: t
                } = e;
                o.PreloadedUserSettingsActionCreators.updateAsync("clips", e => {
                    e.allowVoiceRecording = i.BoolValue.create({
                        value: t
                    })
                }, o.UserSettingsDelay.INFREQUENT_USER_ACTION), E.default.track(N.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
                    allow_voice_recording: t
                })
            }
            async function L(e) {
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
                }), i && E.default.track(N.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
                    clips_enabled: t,
                    guild_id: n,
                    ...!t && {
                        decoupled_clips_enabled: !1
                    }
                })
            }

            function M(e) {
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
                }), n && E.default.track(N.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
                    ...t && {
                        clips_enabled: !0
                    },
                    decoupled_clips_enabled: t
                })
            }

            function O(e) {
                a.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        remindersEnabled: e
                    }
                })
            }

            function R(e) {
                a.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        storageLocation: e
                    }
                })
            }

            function x(e) {
                a.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        clipsQuality: e
                    }
                })
            }

            function w(e) {
                a.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        clipsLength: e
                    }
                })
            }

            function P(e) {
                a.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        viewerClipsEnabled: e
                    }
                })
            }

            function U(e, t) {
                var n, i, a, l, u, d, r, o, f, p;
                let m = new Map;
                for (let e in t.framesEncodedByEncoder) {
                    let i = t.framesEncodedByEncoder[e],
                        a = (0, s.parseEncoder)(e),
                        l = null !== (n = m.get(a)) && void 0 !== n ? n : 0;
                    m.set(a, l + i)
                }
                return {
                    ...e,
                    frames_encoded_nvidia_cuda: null !== (i = m.get(s.Encoders.NVIDIA_CUDA)) && void 0 !== i ? i : 0,
                    frames_encoded_nvidia_direct3d: null !== (a = m.get(s.Encoders.NVIDIA_DIRECT_3D)) && void 0 !== a ? a : 0,
                    frames_encoded_openh264: null !== (l = m.get(s.Encoders.OPENH264)) && void 0 !== l ? l : 0,
                    frames_encoded_videotoolbox: null !== (u = m.get(s.Encoders.VIDEOTOOLBOX)) && void 0 !== u ? u : 0,
                    frames_encoded_amd_direct3d: null !== (d = m.get(s.Encoders.AMD_DIRECT_3D)) && void 0 !== d ? d : 0,
                    frames_encoded_intel: null !== (r = m.get(s.Encoders.INTEL)) && void 0 !== r ? r : 0,
                    frames_encoded_intel_direct3d: null !== (o = m.get(s.Encoders.INTEL_DIRECT_3D)) && void 0 !== o ? o : 0,
                    frames_encoded_uncategorized: null !== (f = m.get(s.Encoders.UNCATEGORIZED)) && void 0 !== f ? f : 0,
                    frames_encoded_unknown: null !== (p = m.get(s.Encoders.UNKNOWN)) && void 0 !== p ? p : 0,
                    frames_submitted: t.framesSubmitted,
                    frames_submitted_during_clip: t.framesSubmittedDuringClip,
                    frames_encoded: t.framesEncoded,
                    frames_encoded_during_clip: t.framesEncodedDuringClip,
                    frames_dropped: t.framesDropped,
                    frames_dropped_during_clip: t.framesDroppedDuringClip,
                    clip_duration_setting: v.default.getSettings().clipsLength,
                    clip_duration: t.clipDuration,
                    clip_resolution_width: t.clipResolutionWidth,
                    clip_resolution_height: t.clipResolutionHeight,
                    min_fps: t.minFps,
                    max_fps: t.maxFps,
                    submitted_fps: t.submittedFps,
                    target_fps: c.default.getState().fps,
                    audio_track_count: t.audioTrackCount,
                    saved_at: t.savedAt
                }
            }
            async function k(e) {
                let t = v.default.getSettings(),
                    n = t.storageLocation,
                    i = (0, A.default)(e),
                    s = "".concat((0, C.default)(i.applicationName.substring(0, 20)), "_").concat(i.id, ".mp4"),
                    d = l.default.fileManager.join(n, s),
                    r = m.default.getMediaEngine(),
                    o = JSON.stringify(i),
                    c = null != e ? (0, u.decodeStreamKey)(e).ownerId : void 0,
                    _ = function(e) {
                        var t;
                        let n, i, a;
                        if (null != e) {
                            n = null != e ? g.default.getRTCConnection(e) : null;
                            let t = (0, u.decodeStreamKey)(e);
                            i = t.guildId, a = t.channelId
                        } else {
                            let e = p.default.getId(),
                                t = f.default.getActiveStreamForUser(e, null);
                            n = null != t ? g.default.getRTCConnection((0, u.encodeStreamKey)(t)) : null, i = null == t ? void 0 : t.guildId, a = null == t ? void 0 : t.channelId
                        }
                        let l = null == n ? void 0 : null === (t = n.analyticsContext) || void 0 === t ? void 0 : t.streamApplication;
                        return {
                            rtc_connection_id: null == n ? void 0 : n.getRTCConnectionId(),
                            media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                            parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                            guild_id: i,
                            channel_id: a,
                            application_id: null == l ? void 0 : l.id,
                            application_name: null == l ? void 0 : l.name
                        }
                    }(e);
                null != e && a.default.dispatch({
                    type: "CLIPS_SAVE_CLIP_PLACEHOLDER",
                    clip: {
                        ...i,
                        filepath: d
                    }
                });
                try {
                    var h;
                    let {
                        duration: e,
                        thumbnail: t,
                        clipStats: n
                    } = await (null != c ? r.saveClipForUser(c, d, o) : r.saveClip(d, o)), a = U(_, n);
                    a.clip_save_time_ms = n.clipSaveTimeMs, a.clip_size_bytes = n.clipSizeBytes, null != n.viewerDecodeFps && (a.decode_fps_during_clip = n.viewerDecodeFps, a.encode_fps_during_clip = n.viewerEncodeFps, a.target_fps = null), E.default.track(N.AnalyticEvents.CLIP_SAVED, a);
                    let s = await (null != l.default.clips.getClipProtocolURLFromPath ? (0, b.createThumbnailFromVideo)(l.default.clips.getClipProtocolURLFromPath(d), 0) : (0, b.createThumbnail)(t));
                    return i.thumbnail = s, i.length = e, y.ClipsLogger.info("Clip save succeeded with ".concat(e, "ms and thumbnail ").concat(null !== (h = null == s ? void 0 : s.length) && void 0 !== h ? h : 0, " bytes thumbnail.")), await r.updateClipMetadata(d, JSON.stringify(i)), {
                        ...i,
                        filepath: d
                    }
                } catch (n) {
                    if (null != e && a.default.dispatch({
                            type: "CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR",
                            clipId: i.id
                        }), !("errorMessage" in n)) throw E.default.track(N.AnalyticEvents.CLIP_SAVE_FAILURE, _), n;
                    let t = U(_, n);
                    throw t.error_at = n.errorAt, t.error_message = n.errorMessage, E.default.track(N.AnalyticEvents.CLIP_SAVE_FAILURE, t), n.errorMessage
                }
            }
            async function G(e) {
                var t;
                let {
                    enableDecoupledGameClipping: n
                } = d.default.getCurrentConfig({
                    location: "8ac9d1_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    enableViewerClipping: i
                } = r.default.getCurrentConfig({
                    location: "SaveClip"
                }, {
                    autoTrackExposure: !1
                });
                if (v.default.getIsAtMaxSaveClipOperations()) return;
                let l = v.default.getSettings().clipsEnabled && null != f.default.getCurrentUserActiveStream(),
                    s = n && v.default.getSettings().decoupledClipsEnabled && (null === (t = _.default.getVisibleGame()) || void 0 === t ? void 0 : t.windowHandle) != null && m.default.hasClipsSource(),
                    o = null != e && null != f.default.getActiveStreamForStreamKey(e) && i;
                if (!l && !s && !o) return;
                let c = f.default.getCurrentUserActiveStream(),
                    p = null != c ? (0, u.encodeStreamKey)(c) : void 0;
                a.default.dispatch({
                    type: "CLIPS_SAVE_CLIP_START"
                });
                let g = (0, S.playSound)("clip_save", .5),
                    E = performance.now();
                try {
                    let t = await k(null != e ? e : p);
                    a.default.dispatch({
                        type: "CLIPS_SAVE_CLIP",
                        clip: t
                    })
                } catch (e) {
                    y.ClipsLogger.error("Clip Failed to Save", e), null == g || g.stop(), (0, S.playSound)("clip_error", .5), a.default.dispatch({
                        type: "CLIPS_SAVE_CLIP_ERROR"
                    })
                }
                y.ClipsLogger.info("".concat(v.default.getSettings().clipsLength / 1e3, "s clip save took ").concat(Math.round(performance.now() - E), "ms"))
            }
            async function F(e, t) {
                let n = v.default.getClips().find(t => t.id === e);
                if (null == n) return;
                let i = {
                        ...n,
                        ...t
                    },
                    l = await (0, I.validateClipMetadata)(i);
                null != l && (await m.default.getMediaEngine().updateClipMetadata(i.filepath, JSON.stringify(i)), E.default.track(N.AnalyticEvents.CLIP_EDITED, {
                    clip_id: i.id
                }), a.default.dispatch({
                    type: "CLIPS_UPDATE_METADATA",
                    clip: i
                }))
            }

            function V() {
                a.default.dispatch({
                    type: "CLIPS_CLEAR_CLIPS_SESSION"
                })
            }

            function H() {
                a.default.dispatch({
                    type: "CLIPS_CLEAR_NEW_CLIP_IDS"
                })
            }
            async function B(e) {
                var t;
                if (!(0, h.isDesktop)() || (null === (t = l.default.clips) || void 0 === t ? void 0 : t.loadClipsDirectory) == null) return;
                let n = await l.default.clips.loadClipsDirectory(e),
                    i = [];
                for (let e of n) {
                    let t = await (0, I.validateClipMetadata)({
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
            async function j(e) {
                var t;
                (0, h.isDesktop)() && (null === (t = l.default.clips) || void 0 === t ? void 0 : t.deleteClip) != null && (await l.default.clips.deleteClip(e), a.default.dispatch({
                    type: "CLIPS_DELETE_CLIP",
                    filepath: e
                }))
            }
            async function q(e, t) {
                let n = m.default.getMediaEngine(),
                    i = await n.exportClip(e.filepath, t);
                return (0, T.default)(i)
            }