"use strict";
n.r(t), n.d(t, {
  StreamRTCAnalyticsContext: function() {
    return N
  },
  default: function() {
    return s
  }
});
var s, i = n("917351"),
  r = n.n(i),
  a = n("773364"),
  o = n("913144"),
  d = n("997722"),
  u = n("422791"),
  l = n("56947"),
  f = n("386045"),
  _ = n("808122"),
  c = n("845579"),
  g = n("271938"),
  m = n("42203"),
  h = n("985365"),
  v = n("945956"),
  E = n("590401"),
  p = n("278163"),
  y = n("599110"),
  C = n("104478"),
  T = n("374014"),
  S = n("933034"),
  I = n("196383"),
  A = n("49111"),
  D = n("353927");
class N {
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
    actionContext: s,
    numViewers: i,
    isBroadcast: r = !1
  }) {
    this.streamRegion = e, this.streamApplication = t, this.streamSourceType = n, this.actionContext = s, this.maxViewers = i, this.isBroadcast = r
  }
}
s = class extends d.default {
  get isOwner() {
    let {
      ownerId: e
    } = this._streamContext;
    return g.default.getId() === e
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
        duration: s,
        avg_bitrate: i,
        avg_fps: r,
        avg_resolution: a
      } = this.isOwner ? t.getOutboundStats()[0] : null !== (n = t.getInboundStats(e)) && void 0 !== n ? n : {};
      return {
        duration: s,
        avg_bitrate: i,
        avg_fps: r,
        avg_resolution: a
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
    this.on(u.RTCConnectionEvent.State, (e, t, n) => {
      if (o.default.wait(() => o.default.dispatch({
          type: "RTC_CONNECTION_STATE",
          state: e,
          ...t,
          ...n,
          streamKey: this._streamKey
        })), e === A.RTCConnectionStates.RTC_CONNECTED) {
        var s;
        null === (s = this._connection) || void 0 === s || s.on(a.BaseConnectionEvent.ScreenshareFinish, (e, t, n, s, i, r, a, o, d, u, l, f, _, c) => {
          let g = this.getMediaSessionId(),
            m = this.getRTCConnectionId(),
            h = this.getGoLiveSource();
          (0, p.getSystemAnalyticsInfo)().then(v => {
            let E = null;
            if (null != v) {
              let {
                cpu_brand: e,
                cpu_vendor: t,
                cpu_memory: n,
                gpu_brand: s,
                gpu_memory: i
              } = v;
              E = {
                cpu_brand: e,
                cpu_vendor: t,
                cpu_memory: n,
                gpu_brand: s,
                gpu_memory: i
              }
            }
            let p = (null != e ? e : 0) + (null != t ? t : 0) + (null != n ? n : 0) + (null != s ? s : 0) + (null != i ? i : 0) + (null != r ? r : 0) + (null != o ? o : 0) + (null != c ? c : 0) + (null != _ ? _ : 0);
            y.default.track(A.AnalyticEvents.SCREENSHARE_FINISHED, {
              screenshare_frames: e,
              videohook_frames: t,
              hybrid_dxgi_frames: n,
              hybrid_gdi_frames: s,
              hybrid_videohook_frames: i,
              hybrid_graphics_capture_frames: r,
              hybrid_capture_method_switches: a,
              quartz_frames: o,
              screencapturekit_frames: c,
              go_live_camera_frames: _,
              total_frames: p,
              desktop_capturer_type: d,
              media_session_id: g,
              rtc_connection_id: m,
              context: D.MediaEngineContextTypes.STREAM,
              screens: u,
              windows: l,
              activity: f,
              ...E,
              ...(0, S.default)(null == h ? void 0 : h.desktopSource)
            })
          })
        })
      }
    }), this.on(u.RTCConnectionEvent.Video, (t, n, s, i, r) => {
      let a = (0, T.decodeStreamKey)(this._streamKey);
      a.guildId === t && a.channelId === n && a.ownerId === s && (null != this.getMediaSessionId() && !e && (this._trackVideoStartStats(), e = !0), this._updateVideoStreamId(i, r))
    }), this.on(u.RTCConnectionEvent.VideoSourceQualityChanged, (e, t, n, s, i, r) => {
      o.default.wait(() => o.default.dispatch({
        type: "MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED",
        guildId: e,
        channelId: t,
        senderUserId: n,
        maxResolution: s,
        maxFrameRate: i,
        context: r
      }))
    })
  }
  _getStreamAnalyticsProperties() {
    let {
      streamRegion: e,
      streamApplication: t,
      streamSourceType: n,
      actionContext: s,
      isBroadcast: i
    } = this.analyticsContext, {
      ownerId: r,
      guildId: a
    } = this._streamContext, o = E.default.getRegion(v.default.getHostname()), d = c.BroadcastAutoBroadcast.getSetting();
    return {
      channel_id: this.channelId,
      rtc_connection_id: this.getRTCConnectionId(),
      media_session_id: this.getMediaSessionId(),
      parent_media_session_id: this.parentMediaSessionId,
      sender_user_id: r,
      context: D.MediaEngineContextTypes.STREAM,
      guild_id: a,
      stream_region: e,
      stream_source_type: n,
      guild_region: o,
      participant_type: this.isOwner ? "streamer" : "receiver",
      share_application_name: null != t ? t.name : null,
      share_application_id: null != t ? t.id : null,
      share_application_executable: null != t ? t.exe : null,
      video_layout: this._videoStreamStats.getLayout(),
      client_event_source: s,
      is_broadcast: i,
      auto_broadcast_enabled: this.isOwner ? d : null
    }
  }
  _trackVideoStartStats() {
    let e = this.isOwner ? (0, I.default)() : null;
    y.default.track(A.AnalyticEvents.VIDEO_STREAM_STARTED, {
      ...this._getStreamAnalyticsProperties(),
      ...e,
      connection_type: h.default.getType(),
      effective_connection_speed: h.default.getEffectiveConnectionSpeed(),
      service_provider: h.default.getServiceProvider()
    })
  }
  _trackVideoEndStats(e) {
    let t = m.default.getChannel(this.channelId),
      n = null != t ? t.type : null,
      {
        ownerId: s
      } = this._streamContext,
      i = null,
      r = null,
      a = null,
      o = this._videoQuality;
    null != o && (i = this.isOwner ? o.getOutboundStats()[0] : o.getInboundStats(s), r = o.getNetworkStats(), a = this.isOwner ? o.getCodecUsageStats("streamer", this.userId) : o.getCodecUsageStats("receiver", s));
    let d = (0, l.areClipsEnabled)(),
      u = f.default.getSettings(),
      c = this.isOwner ? {
        clips_enabled: u.clipsEnabled && d,
        clips_buffer_length: u.clipsLength
      } : {},
      g = this.isOwner ? {
        bandwidth_estimation_experiment: this.getBandwidthEstimationExperiment()
      } : {};
    y.default.track(A.AnalyticEvents.VIDEO_STREAM_ENDED, {
      ...i,
      ...a,
      ...r,
      ...this._videoStreamStats.getStats(),
      ...this._soundshareStats.getStats(),
      ...this._getStreamAnalyticsProperties(),
      ...c,
      ...g,
      channel_type: n,
      reason: e,
      max_viewers: this.analyticsContext.maxViewers,
      hostname: this.hostname,
      device_performance_class: this.isOwner ? (0, _.getMediaPerformanceClass)() : null
    })
  }
  _getExtraConnectionOptions() {
    return {
      streamUserId: (0, T.decodeStreamKey)(this._streamKey).ownerId
    }
  }
  constructor({
    sessionId: e,
    streamKey: t,
    serverId: n,
    initialLayout: s,
    analyticsContext: i,
    isStreamer: a,
    parentMediaSessionId: d
  }) {
    let u = (0, T.decodeStreamKey)(t),
      {
        guildId: l,
        channelId: f
      } = u;
    super({
      userId: g.default.getId(),
      sessionId: e,
      guildId: l,
      channelId: f,
      context: D.MediaEngineContextTypes.STREAM,
      rtcServerId: n,
      parentMediaSessionId: d
    }), this._streamContext = u, this._streamKey = t, this._isStreamer = a, this._videoStreamStats = new C.default(s, this.isOwner), this.analyticsContext = i, this._updateVideoStreamId = r.debounce((e, t) => {
      let {
        guildId: n,
        channelId: s,
        ownerId: i
      } = (0, T.decodeStreamKey)(this._streamKey);
      o.default.wait(() => o.default.dispatch({
        type: "RTC_CONNECTION_VIDEO",
        guildId: n,
        channelId: s,
        userId: i,
        streamId: e,
        rtcServerId: t,
        context: D.MediaEngineContextTypes.STREAM
      }))
    }, 200), this._videoStreamStats.start(), this._initializeEvents()
  }
}