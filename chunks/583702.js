            "use strict";
            n.r(t), n.d(t, {
                StreamRTCAnalyticsContext: function() {
                    return y
                },
                default: function() {
                    return i
                }
            });
            var i, a = n("917351"),
                l = n.n(a),
                s = n("773364"),
                r = n("913144"),
                u = n("997722"),
                o = n("422791"),
                d = n("56947"),
                c = n("386045"),
                _ = n("808122"),
                E = n("845579"),
                f = n("271938"),
                h = n("42203"),
                p = n("985365"),
                T = n("945956"),
                C = n("590401"),
                m = n("417021"),
                S = n("599110"),
                I = n("104478"),
                g = n("374014"),
                A = n("933034"),
                N = n("196383"),
                O = n("49111"),
                R = n("353927");
            class y {
                setActionContext(e) {
                    this.actionContext = e
                }
                trackViewerCount(e) {
                    this.maxViewers = Math.max(e, this.maxViewers)
                }
                constructor({
                    streamRegion: e,
                    streamApplication: t,
                    streamSourceType: n,
                    actionContext: i,
                    numViewers: a,
                    isBroadcast: l = !1
                }) {
                    this.streamRegion = e, this.streamApplication = t, this.streamSourceType = n, this.actionContext = i, this.maxViewers = a, this.isBroadcast = l
                }
            }
            i = class extends u.default {
                get isOwner() {
                    let {
                        ownerId: e
                    } = this._streamContext;
                    return f.default.getId() === e
                }
                destroy(e) {
                    this._videoStreamStats.stop(), this._trackVideoEndStats(e), this._updateVideoStreamId.cancel(), this._updateVideoStreamId(null, null), this._updateVideoStreamId.flush(), super.destroy()
                }
                streamUpdate(e) {
                    let t = this._videoQuality;
                    null != t && (e ? t.pause() : t.resume())
                }
                layoutChange(e) {
                    this._videoStreamStats.layoutChange(e)
                }
                getVideoStats() {
                    let {
                        ownerId: e
                    } = this._streamContext, t = this._videoQuality;
                    if (null != t) {
                        var n;
                        let {
                            duration: i,
                            avg_bitrate: a,
                            avg_fps: l,
                            avg_resolution: s
                        } = this.isOwner ? t.getOutboundStats()[0] : null !== (n = t.getInboundStats(e)) && void 0 !== n ? n : {};
                        return {
                            duration: i,
                            avg_bitrate: a,
                            avg_fps: l,
                            avg_resolution: s
                        }
                    }
                    return null
                }
                getRegion() {
                    return this.analyticsContext.streamRegion
                }
                getMaxViewers() {
                    return this.analyticsContext.maxViewers
                }
                _initializeEvents() {
                    let e = !1;
                    this.on(o.RTCConnectionEvent.State, (e, t, n) => {
                        if (r.default.wait(() => r.default.dispatch({
                                type: "RTC_CONNECTION_STATE",
                                state: e,
                                ...t,
                                ...n,
                                streamKey: this._streamKey
                            })), e === O.RTCConnectionStates.RTC_CONNECTED) {
                            var i;
                            null === (i = this._connection) || void 0 === i || i.on(s.BaseConnectionEvent.ScreenshareFinish, (e, t, n, i, a, l, s, r, u, o, d, c, _, E) => {
                                let f = this.getMediaSessionId(),
                                    h = this.getRTCConnectionId(),
                                    p = this.getGoLiveSource();
                                (0, m.getSystemAnalyticsInfo)().then(T => {
                                    let C = null;
                                    if (null != T) {
                                        let {
                                            cpu_brand: e,
                                            cpu_vendor: t,
                                            cpu_memory: n,
                                            gpu_brand: i,
                                            gpu_memory: a
                                        } = T;
                                        C = {
                                            cpu_brand: e,
                                            cpu_vendor: t,
                                            cpu_memory: n,
                                            gpu_brand: i,
                                            gpu_memory: a
                                        }
                                    }
                                    let m = (null != e ? e : 0) + (null != t ? t : 0) + (null != n ? n : 0) + (null != i ? i : 0) + (null != a ? a : 0) + (null != l ? l : 0) + (null != r ? r : 0) + (null != E ? E : 0) + (null != _ ? _ : 0);
                                    S.default.track(O.AnalyticEvents.SCREENSHARE_FINISHED, {
                                        screenshare_frames: e,
                                        videohook_frames: t,
                                        hybrid_dxgi_frames: n,
                                        hybrid_gdi_frames: i,
                                        hybrid_videohook_frames: a,
                                        hybrid_graphics_capture_frames: l,
                                        hybrid_capture_method_switches: s,
                                        quartz_frames: r,
                                        screencapturekit_frames: E,
                                        go_live_camera_frames: _,
                                        total_frames: m,
                                        desktop_capturer_type: u,
                                        media_session_id: f,
                                        rtc_connection_id: h,
                                        context: R.MediaEngineContextTypes.STREAM,
                                        screens: o,
                                        windows: d,
                                        activity: c,
                                        ...C,
                                        ...(0, A.default)(null == p ? void 0 : p.desktopSource)
                                    })
                                })
                            })
                        }
                    }), this.on(o.RTCConnectionEvent.Video, (t, n, i, a, l) => {
                        let s = (0, g.decodeStreamKey)(this._streamKey);
                        s.guildId === t && s.channelId === n && s.ownerId === i && (null != this.getMediaSessionId() && !e && (this._trackVideoStartStats(), e = !0), this._updateVideoStreamId(a, l))
                    }), this.on(o.RTCConnectionEvent.VideoSourceQualityChanged, (e, t, n, i, a, l) => {
                        r.default.wait(() => r.default.dispatch({
                            type: "MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED",
                            guildId: e,
                            channelId: t,
                            senderUserId: n,
                            maxResolution: i,
                            maxFrameRate: a,
                            context: l
                        }))
                    })
                }
                _getStreamAnalyticsProperties() {
                    let {
                        streamRegion: e,
                        streamApplication: t,
                        streamSourceType: n,
                        actionContext: i,
                        isBroadcast: a
                    } = this.analyticsContext, {
                        ownerId: l,
                        guildId: s
                    } = this._streamContext, r = C.default.getRegion(T.default.getHostname()), u = E.BroadcastAutoBroadcast.getSetting();
                    return {
                        channel_id: this.channelId,
                        rtc_connection_id: this.getRTCConnectionId(),
                        media_session_id: this.getMediaSessionId(),
                        parent_media_session_id: this.parentMediaSessionId,
                        sender_user_id: l,
                        context: R.MediaEngineContextTypes.STREAM,
                        guild_id: s,
                        stream_region: e,
                        stream_source_type: n,
                        guild_region: r,
                        participant_type: this.isOwner ? "streamer" : "receiver",
                        share_application_name: null != t ? t.name : null,
                        share_application_id: null != t ? t.id : null,
                        share_application_executable: null != t ? t.exe : null,
                        video_layout: this._videoStreamStats.getLayout(),
                        client_event_source: i,
                        is_broadcast: a,
                        auto_broadcast_enabled: this.isOwner ? u : null
                    }
                }
                _trackVideoStartStats() {
                    let e = this.isOwner ? (0, N.default)() : null;
                    S.default.track(O.AnalyticEvents.VIDEO_STREAM_STARTED, {
                        ...this._getStreamAnalyticsProperties(),
                        ...e,
                        connection_type: p.default.getType(),
                        effective_connection_speed: p.default.getEffectiveConnectionSpeed(),
                        service_provider: p.default.getServiceProvider()
                    })
                }
                _trackVideoEndStats(e) {
                    let t = h.default.getChannel(this.channelId),
                        n = null != t ? t.type : null,
                        {
                            ownerId: i
                        } = this._streamContext,
                        a = null,
                        l = null,
                        s = null,
                        r = this._videoQuality;
                    null != r && (a = this.isOwner ? r.getOutboundStats()[0] : r.getInboundStats(i), l = r.getNetworkStats(), s = this.isOwner ? r.getCodecUsageStats("streamer", this.userId) : r.getCodecUsageStats("receiver", i));
                    let u = (0, d.areClipsEnabled)(),
                        o = c.default.getSettings(),
                        E = this.isOwner ? {
                            clips_enabled: o.clipsEnabled && u,
                            clips_buffer_length: o.clipsLength
                        } : {},
                        f = this.isOwner ? {
                            bandwidth_estimation_experiment: this.getBandwidthEstimationExperiment()
                        } : {};
                    S.default.track(O.AnalyticEvents.VIDEO_STREAM_ENDED, {
                        ...a,
                        ...s,
                        ...l,
                        ...this._videoStreamStats.getStats(),
                        ...this._soundshareStats.getStats(),
                        ...this._getStreamAnalyticsProperties(),
                        ...E,
                        ...f,
                        channel_type: n,
                        reason: e,
                        max_viewers: this.analyticsContext.maxViewers,
                        hostname: this.hostname,
                        device_performance_class: this.isOwner ? (0, _.getMediaPerformanceClass)() : null
                    })
                }
                _getExtraConnectionOptions() {
                    return {
                        streamUserId: (0, g.decodeStreamKey)(this._streamKey).ownerId
                    }
                }
                constructor({
                    sessionId: e,
                    streamKey: t,
                    serverId: n,
                    initialLayout: i,
                    analyticsContext: a,
                    isStreamer: s,
                    parentMediaSessionId: u
                }) {
                    let o = (0, g.decodeStreamKey)(t),
                        {
                            guildId: d,
                            channelId: c
                        } = o;
                    super({
                        userId: f.default.getId(),
                        sessionId: e,
                        guildId: d,
                        channelId: c,
                        context: R.MediaEngineContextTypes.STREAM,
                        rtcServerId: n,
                        parentMediaSessionId: u
                    }), this._streamContext = o, this._streamKey = t, this._isStreamer = s, this._videoStreamStats = new I.default(i, this.isOwner), this.analyticsContext = a, this._updateVideoStreamId = l.debounce((e, t) => {
                        let {
                            guildId: n,
                            channelId: i,
                            ownerId: a
                        } = (0, g.decodeStreamKey)(this._streamKey);
                        r.default.wait(() => r.default.dispatch({
                            type: "RTC_CONNECTION_VIDEO",
                            guildId: n,
                            channelId: i,
                            userId: a,
                            streamId: e,
                            rtcServerId: t,
                            context: R.MediaEngineContextTypes.STREAM
                        }))
                    }, 200), this._videoStreamStats.start(), this._initializeEvents()
                }
            }