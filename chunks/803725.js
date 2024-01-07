            "use strict";
            n.r(t), n.d(t, {
                updateAllowVoiceRecording: function() {
                    return w
                },
                updateClipsEnabled: function() {
                    return T
                },
                updateDecoupledClipsEnabled: function() {
                    return D
                },
                updateClipsStorageLocation: function() {
                    return P
                },
                updateClipsQuality: function() {
                    return N
                },
                updateClipsLength: function() {
                    return k
                },
                updateViewerClipsEnabled: function() {
                    return U
                },
                saveClip: function() {
                    return O
                },
                updateClipMetadata: function() {
                    return F
                },
                clearClipsSession: function() {
                    return V
                },
                clearNewClipIds: function() {
                    return j
                },
                loadClipsDirectory: function() {
                    return G
                },
                deleteClip: function() {
                    return B
                },
                exportClip: function() {
                    return H
                }
            }), n("222007"), n("424973");
            var i = n("750028"),
                a = n("913144"),
                u = n("49671"),
                r = n("44642"),
                o = n("374014"),
                s = n("584687"),
                d = n("103979"),
                l = n("872173"),
                c = n("268491"),
                p = n("373469"),
                f = n("271938"),
                m = n("42887"),
                _ = n("568307"),
                g = n("205817"),
                v = n("599110"),
                b = n("773336"),
                h = n("709681"),
                S = n("386045"),
                C = n("13136"),
                E = n("881095"),
                I = n("997942"),
                y = n("310238"),
                A = n("99366"),
                x = n("80028"),
                L = n("49111");

            function w(e) {
                let {
                    allowVoiceRecording: t
                } = e;
                l.PreloadedUserSettingsActionCreators.updateAsync("clips", e => {
                    e.allowVoiceRecording = i.BoolValue.create({
                        value: t
                    })
                }, l.UserSettingsDelay.INFREQUENT_USER_ACTION), v.default.track(L.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
                    allow_voice_recording: t
                })
            }
            async function T(e) {
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
                }), i && v.default.track(L.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
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
                a.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        ...t && {
                            clipsEnabled: !0
                        },
                        decoupledClipsEnabled: t
                    }
                }), n && v.default.track(L.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
                    ...t && {
                        clips_enabled: !0
                    },
                    decoupled_clips_enabled: t
                })
            }

            function P(e) {
                a.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        storageLocation: e
                    }
                })
            }

            function N(e) {
                a.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        clipsQuality: e
                    }
                })
            }

            function k(e) {
                a.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        clipsLength: e
                    }
                })
            }

            function U(e) {
                a.default.dispatch({
                    type: "CLIPS_SETTINGS_UPDATE",
                    settings: {
                        viewerClipsEnabled: e
                    }
                })
            }

            function R(e, t) {
                var n, i, a, u, o, s, d, l, p, f;
                let m = new Map;
                for (let e in t.framesEncodedByEncoder) {
                    let i = t.framesEncodedByEncoder[e],
                        a = (0, r.parseEncoder)(e),
                        u = null !== (n = m.get(a)) && void 0 !== n ? n : 0;
                    m.set(a, u + i)
                }
                return {
                    ...e,
                    frames_encoded_nvidia_cuda: null !== (i = m.get(r.Encoders.NVIDIA_CUDA)) && void 0 !== i ? i : 0,
                    frames_encoded_nvidia_direct3d: null !== (a = m.get(r.Encoders.NVIDIA_DIRECT_3D)) && void 0 !== a ? a : 0,
                    frames_encoded_openh264: null !== (u = m.get(r.Encoders.OPENH264)) && void 0 !== u ? u : 0,
                    frames_encoded_videotoolbox: null !== (o = m.get(r.Encoders.VIDEOTOOLBOX)) && void 0 !== o ? o : 0,
                    frames_encoded_amd_direct3d: null !== (s = m.get(r.Encoders.AMD_DIRECT_3D)) && void 0 !== s ? s : 0,
                    frames_encoded_intel: null !== (d = m.get(r.Encoders.INTEL)) && void 0 !== d ? d : 0,
                    frames_encoded_intel_direct3d: null !== (l = m.get(r.Encoders.INTEL_DIRECT_3D)) && void 0 !== l ? l : 0,
                    frames_encoded_uncategorized: null !== (p = m.get(r.Encoders.UNCATEGORIZED)) && void 0 !== p ? p : 0,
                    frames_encoded_unknown: null !== (f = m.get(r.Encoders.UNKNOWN)) && void 0 !== f ? f : 0,
                    frames_submitted: t.framesSubmitted,
                    frames_submitted_during_clip: t.framesSubmittedDuringClip,
                    frames_encoded: t.framesEncoded,
                    frames_encoded_during_clip: t.framesEncodedDuringClip,
                    frames_dropped: t.framesDropped,
                    frames_dropped_during_clip: t.framesDroppedDuringClip,
                    clip_duration_setting: S.default.getSettings().clipsLength,
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
            async function M(e) {
                let t = S.default.getSettings(),
                    n = t.storageLocation,
                    i = (0, E.default)(e),
                    r = "".concat((0, C.default)(i.applicationName.substring(0, 20)), "_").concat(i.id, ".mp4"),
                    s = u.default.fileManager.join(n, r),
                    d = m.default.getMediaEngine(),
                    l = JSON.stringify(i),
                    c = null != e ? (0, o.decodeStreamKey)(e).ownerId : void 0,
                    _ = function(e) {
                        var t;
                        let n, i, a;
                        if (null != e) {
                            n = null != e ? g.default.getRTCConnection(e) : null;
                            let t = (0, o.decodeStreamKey)(e);
                            i = t.guildId, a = t.channelId
                        } else {
                            let e = f.default.getId(),
                                t = p.default.getActiveStreamForUser(e, null);
                            n = null != t ? g.default.getRTCConnection((0, o.encodeStreamKey)(t)) : null, i = null == t ? void 0 : t.guildId, a = null == t ? void 0 : t.channelId
                        }
                        let u = null == n ? void 0 : null === (t = n.analyticsContext) || void 0 === t ? void 0 : t.streamApplication;
                        return {
                            rtc_connection_id: null == n ? void 0 : n.getRTCConnectionId(),
                            media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                            parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                            guild_id: i,
                            channel_id: a,
                            application_id: null == u ? void 0 : u.id,
                            application_name: null == u ? void 0 : u.name
                        }
                    }(e);
                null != e && a.default.dispatch({
                    type: "CLIPS_SAVE_CLIP_PLACEHOLDER",
                    clip: {
                        ...i,
                        filepath: s
                    }
                });
                try {
                    var b;
                    let {
                        duration: e,
                        thumbnail: t,
                        clipStats: n
                    } = await (null != c ? d.saveClipForUser(c, s, l) : d.saveClip(s, l)), a = R(_, n);
                    a.clip_save_time_ms = n.clipSaveTimeMs, a.clip_size_bytes = n.clipSizeBytes, null != n.viewerDecodeFps && (a.decode_fps_during_clip = n.viewerDecodeFps, a.encode_fps_during_clip = n.viewerEncodeFps, a.target_fps = null), v.default.track(L.AnalyticEvents.CLIP_SAVED, a);
                    let r = await (null != u.default.clips.getClipProtocolURLFromPath ? (0, A.createThumbnailFromVideo)(u.default.clips.getClipProtocolURLFromPath(s), 0) : (0, A.createThumbnail)(t));
                    return i.thumbnail = r, i.length = e, x.ClipsLogger.info("Clip save succeeded with ".concat(e, "ms and thumbnail ").concat(null !== (b = null == r ? void 0 : r.length) && void 0 !== b ? b : 0, " bytes thumbnail.")), await d.updateClipMetadata(s, JSON.stringify(i)), {
                        ...i,
                        filepath: s
                    }
                } catch (n) {
                    if (null != e && a.default.dispatch({
                            type: "CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR",
                            clipId: i.id
                        }), !("errorMessage" in n)) throw v.default.track(L.AnalyticEvents.CLIP_SAVE_FAILURE, _), n;
                    let t = R(_, n);
                    throw t.error_at = n.errorAt, t.error_message = n.errorMessage, v.default.track(L.AnalyticEvents.CLIP_SAVE_FAILURE, t), n.errorMessage
                }
            }
            async function O(e) {
                var t;
                let {
                    enableDecoupledGameClipping: n
                } = s.default.getCurrentConfig({
                    location: "8ac9d1_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    enableViewerClipping: i
                } = d.default.getCurrentConfig({
                    location: "SaveClip"
                }, {
                    autoTrackExposure: !1
                });
                if (S.default.getIsAtMaxSaveClipOperations()) return;
                let u = S.default.getSettings().clipsEnabled && null != p.default.getCurrentUserActiveStream(),
                    r = n && S.default.getSettings().decoupledClipsEnabled && (null === (t = _.default.getVisibleGame()) || void 0 === t ? void 0 : t.windowHandle) != null && m.default.hasClipsSource(),
                    l = null != e && null != p.default.getActiveStreamForStreamKey(e) && i;
                if (!u && !r && !l) return;
                let c = p.default.getCurrentUserActiveStream(),
                    f = null != c ? (0, o.encodeStreamKey)(c) : void 0;
                a.default.dispatch({
                    type: "CLIPS_SAVE_CLIP_START"
                });
                let g = (0, h.playSound)("clip_save", .5),
                    v = performance.now();
                try {
                    let t = await M(null != e ? e : f);
                    a.default.dispatch({
                        type: "CLIPS_SAVE_CLIP",
                        clip: t
                    })
                } catch (e) {
                    x.ClipsLogger.error("Clip Failed to Save", e), null == g || g.stop(), (0, h.playSound)("clip_error", .5), a.default.dispatch({
                        type: "CLIPS_SAVE_CLIP_ERROR"
                    })
                }
                x.ClipsLogger.info("".concat(S.default.getSettings().clipsLength / 1e3, "s clip save took ").concat(Math.round(performance.now() - v), "ms"))
            }
            async function F(e, t) {
                let n = S.default.getClips().find(t => t.id === e);
                if (null == n) return;
                let i = {
                        ...n,
                        ...t
                    },
                    u = await (0, I.validateClipMetadata)(i);
                null != u && (await m.default.getMediaEngine().updateClipMetadata(i.filepath, JSON.stringify(i)), v.default.track(L.AnalyticEvents.CLIP_EDITED, {
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

            function j() {
                a.default.dispatch({
                    type: "CLIPS_CLEAR_NEW_CLIP_IDS"
                })
            }
            async function G(e) {
                var t;
                if (!(0, b.isDesktop)() || (null === (t = u.default.clips) || void 0 === t ? void 0 : t.loadClipsDirectory) == null) return;
                let n = await u.default.clips.loadClipsDirectory(e),
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
            async function B(e) {
                var t;
                (0, b.isDesktop)() && (null === (t = u.default.clips) || void 0 === t ? void 0 : t.deleteClip) != null && (await u.default.clips.deleteClip(e), a.default.dispatch({
                    type: "CLIPS_DELETE_CLIP",
                    filepath: e
                }))
            }
            async function H(e, t) {
                let n = m.default.getMediaEngine(),
                    i = await n.exportClip(e.filepath, t);
                return (0, y.default)(i)
            }