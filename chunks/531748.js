"use strict";
n.r(t), n.d(t, {
  VideoQualityEvent: function() {
    return i
  },
  VideoQuality: function() {
    return h
  }
}), n("222007"), n("424973");
var i, r = n("917351"),
  s = n.n(r),
  a = n("595275"),
  o = n("773364"),
  l = n("398183"),
  u = n("773336"),
  c = n("497407"),
  d = n("44642");

function f(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  return null != e ? Math.round(e) : t
}
class E {
  set value(e) {
    e && !this.state && (this.begin = this.timestampProducer.now()), !e && this.state && (this.total += this.timestampProducer.now() - Number(this.begin), this.begin = null), this.state = e
  }
  get value() {
    return this.state
  }
  totalDuration() {
    return null != this.begin ? this.total + this.timestampProducer.now() - this.begin : this.total
  }
  constructor(e, t) {
    this.timestampProducer = t, this.total = 0, this.state = e, this.begin = e ? t.now() : null
  }
}(i || (i = {})).FpsUpdate = "fps-update";
class h extends a.default {
  addUserToStatsCollectionPausedSet(e) {
    this.statCollectionPausedUsers.add(e)
  }
  removeUserFromStatsCollectionPausedSet(e) {
    this.statCollectionPausedUsers.delete(e)
  }
  start() {
    this.streamStart = this.timestampProducer.now(), this.connection.on(o.BaseConnectionEvent.Stats, this.sampleStats)
  }
  setOutboundSsrc(e) {
    null == this.outboundStats[e] && (this.outboundStats[e] = new d.OutboundStats(this.timestampProducer))
  }
  getOrCreateInboundStats(e) {
    return null == this.inboundStats[e] && (this.inboundStats[e] = new d.InboundStats(this.timestampProducer)), this.inboundStats[e]
  }
  setInboundUser(e, t) {
    let n = this.getOrCreateInboundStats(e);
    n.setVideoStopped(0 === t, d.VideoStoppedReasons.SenderStopped)
  }
  setUserVideoDisabled(e, t) {
    let n = this.getOrCreateInboundStats(e);
    n.setVideoStopped(t, d.VideoStoppedReasons.ClientSideDisableVideo), !t && n.statsWindow.length > 0 && 0 === n.statsWindow[0].packets && (n.startTime = this.timestampProducer.now())
  }
  pause() {
    !this.paused.value && this.pausedCount++, s.forEach(this.outboundStats, e => {
      e.statsWindow = []
    }), s.forEach(this.inboundStats, e => {
      e.statsWindow = []
    }), this.updateSendState({
      paused: !0
    })
  }
  resume() {
    this.updateSendState({
      paused: !1
    })
  }
  stop() {
    this.connection.off(o.BaseConnectionEvent.Stats, this.sampleStats), this.streamEnd = this.timestampProducer.now(), this.removeAllListeners()
  }
  getNetworkStats() {
    return this.networkQuality.getStats()
  }
  getEncoderUsageStats() {
    let e = new Map;
    for (let t in this.outboundStats) {
      let n = new Map;
      for (let i of this.outboundStats[t].getCodecsUsed()) {
        let r = i.toUpperCase();
        n.set(r, f(this.outboundStats[t].codecBuckets[r])), e.set(parseInt(t), n)
      }
    }
    return e
  }
  getDecoderUsageStats() {
    let e = new Map;
    for (let t in this.inboundStats) {
      let n = new Map;
      for (let i of this.inboundStats[t].getCodecsUsed()) {
        let r = i.toUpperCase();
        n.set(r, f(this.inboundStats[t].codecBuckets[r])), e.set(t, n)
      }
    }
    return e
  }
  getCodecUsageStats(e, t) {
    var n, i, r, s, a, o, l, u, c, f;
    let E = this.asymmetricCodecUpdates > this.symmetricCodecUpdates,
      h = new Map;
    if ("sender" === e || "streamer" === e) {
      let e = this.getEncoderUsageStats();
      if (e.size > 0) {
        let t = [...e.keys()].sort()[0];
        h = e.get(t)
      }
      return {
        codec_asymmetric_session: E,
        codec_h264_encode_duration_sec: null !== (n = h.get(d.CodecTypes.H264)) && void 0 !== n ? n : 0,
        codec_h265_encode_duration_sec: null !== (i = h.get(d.CodecTypes.H265)) && void 0 !== i ? i : 0,
        codec_vp8_encode_duration_sec: null !== (r = h.get(d.CodecTypes.VP8)) && void 0 !== r ? r : 0,
        codec_vp9_encode_duration_sec: null !== (s = h.get(d.CodecTypes.VP9)) && void 0 !== s ? s : 0,
        codec_av1_encode_duration_sec: null !== (a = h.get(d.CodecTypes.AV1)) && void 0 !== a ? a : 0
      }
    } {
      let e = this.getDecoderUsageStats();
      return e.has(t) && (h = e.get(t)), {
        codec_asymmetric_session: E,
        codec_h264_decode_duration_sec: null !== (o = h.get(d.CodecTypes.H264)) && void 0 !== o ? o : 0,
        codec_h265_decode_duration_sec: null !== (l = h.get(d.CodecTypes.H265)) && void 0 !== l ? l : 0,
        codec_vp8_decode_duration_sec: null !== (u = h.get(d.CodecTypes.VP8)) && void 0 !== u ? u : 0,
        codec_vp9_decode_duration_sec: null !== (c = h.get(d.CodecTypes.VP9)) && void 0 !== c ? c : 0,
        codec_av1_decode_duration_sec: null !== (f = h.get(d.CodecTypes.AV1)) && void 0 !== f ? f : 0
      }
    }
  }
  getOutboundStats() {
    let e = [];
    return s.forEach(this.outboundStats, (t, n) => {
      var i, r, s, a;
      let o;
      let l = null === (i = this.connection) || void 0 === i ? void 0 : i.getStreamParameters();
      l.length > 1 && l.forEach(e => {
        if (parseInt(n) === e.ssrc) {
          var t;
          o = null !== (t = e.quality) && void 0 !== t ? t : 50
        }
      });
      let u = [1, 5, 10, 25, 50, 75],
        c = t.vmafHistogram.getReport(u),
        E = t.psnrHistogram.getReport(u),
        h = t.targetBitrateHistogram.getReport([1, 5, 10, 25, 50, 75, 99]),
        p = t.aggregationDuration / 1e3;
      e.push({
        ...this.getStats(t),
        target_fps: p > 0 ? Math.round((null !== (r = t.targetFrames) && void 0 !== r ? r : 0) / p) : 0,
        target_bitrate_network: p > 0 ? Math.round((null !== (s = t.targetBytesNetwork) && void 0 !== s ? s : 0) * 8 / p) : 0,
        target_bitrate_network_percentile1: h.count > 0 ? h.percentiles[1] : null,
        target_bitrate_network_percentile5: h.count > 0 ? h.percentiles[5] : null,
        target_bitrate_network_percentile10: h.count > 0 ? h.percentiles[10] : null,
        target_bitrate_network_percentile25: h.count > 0 ? h.percentiles[25] : null,
        target_bitrate_network_percentile50: h.count > 0 ? h.percentiles[50] : null,
        target_bitrate_network_percentile75: h.count > 0 ? h.percentiles[75] : null,
        target_bitrate_network_percentile99: h.count > 0 ? h.percentiles[99] : null,
        target_bitrate_max: p > 0 ? Math.round((null !== (a = t.targetBytesMax) && void 0 !== a ? a : 0) * 8 / p) : 0,
        duration_encoder_nvidia_cuda: f(t.encoderBuckets[d.Encoders.NVIDIA_CUDA]),
        duration_encoder_nvidia_direct3d: f(t.encoderBuckets[d.Encoders.NVIDIA_DIRECT_3D]),
        duration_encoder_openh264: f(t.encoderBuckets[d.Encoders.OPENH264]),
        duration_encoder_videotoolbox: f(t.encoderBuckets[d.Encoders.VIDEOTOOLBOX]),
        duration_encoder_amd_direct3d: f(t.encoderBuckets[d.Encoders.AMD_DIRECT_3D]),
        duration_encoder_intel: f(t.encoderBuckets[d.Encoders.INTEL]),
        duration_encoder_intel_direct3d: f(t.encoderBuckets[d.Encoders.INTEL_DIRECT_3D]),
        duration_encoder_vp8_libvpx: f(t.encoderBuckets[d.Encoders.VP8_LIBVPX]),
        duration_encoder_uncategorized: f(t.encoderBuckets[d.Encoders.UNCATEGORIZED]),
        duration_encoder_unknown: f(t.encoderBuckets[d.Encoders.UNKNOWN]),
        quality: o,
        average_encode_time_ms: t.averageEncodeTime,
        average_encoder_vmaf_score: t.vmafScoreNum > 0 ? t.vmafScoreSum / t.vmafScoreNum : null,
        encoder_vmaf_score_percentile1: c.count > 0 ? c.percentiles[1] : null,
        encoder_vmaf_score_percentile5: c.count > 0 ? c.percentiles[5] : null,
        encoder_vmaf_score_percentile10: c.count > 0 ? c.percentiles[10] : null,
        encoder_vmaf_score_percentile25: c.count > 0 ? c.percentiles[25] : null,
        encoder_vmaf_score_percentile50: c.count > 0 ? c.percentiles[50] : null,
        encoder_vmaf_score_percentile75: c.count > 0 ? c.percentiles[75] : null,
        average_encoder_psnr_db: t.psnrDbNum > 0 ? t.psnrDbSum / t.psnrDbNum : null,
        encoder_psnr_db_percentile1: E.count > 0 ? E.percentiles[1] : null,
        encoder_psnr_db_percentile5: E.count > 0 ? E.percentiles[5] : null,
        encoder_psnr_db_percentile10: E.count > 0 ? E.percentiles[10] : null,
        encoder_psnr_db_percentile25: E.count > 0 ? E.percentiles[25] : null,
        encoder_psnr_db_percentile50: E.count > 0 ? E.percentiles[50] : null,
        encoder_psnr_db_percentile75: E.count > 0 ? E.percentiles[75] : null,
        average_outbound_want: t.outboundSinkWantNum > 0 ? t.outboundSinkWantSum / t.outboundSinkWantNum : null,
        frames_dropped_rate_limiter: t.framesDroppedRateLimiter,
        frames_dropped_encoder_queue: t.framesDroppedEncoderQueue,
        frames_dropped_congestion_window: t.framesDroppedCongestionWindow
      })
    }), e
  }
  getInboundStats(e) {
    return this.getStats(this.inboundStats[e])
  }
  destroyUser(e) {
    delete this.inboundStats[e]
  }
  getInboundParticipants() {
    return Object.keys(this.inboundStats)
  }
  updateSendState(e) {
    null != e.paused && (this.paused.value = e.paused), null != e.receivers && (this.zeroReceivers.value = 0 === e.receivers);
    let t = this.paused.value || this.zeroReceivers.value,
      n = this.videoStopped.value;
    this.videoStopped.value = t, t !== n && s.forEach(this.outboundStats, e => e.statsWindow = [])
  }
  getStats(e) {
    if (null == e) return;
    let t = Number(this.streamStart),
      n = null != this.streamEnd ? this.streamEnd - t : this.timestampProducer.now() - t,
      i = Math.max(e.aggregationDuration, 0),
      r = i / 1e3,
      s = [1, 5, 10, 25, 50, 75],
      a = e.cpuHistogram.getReport(),
      o = e.memoryHistogram.getReport(),
      l = e.fpsHistogram.getReport(s),
      u = e.bitrateHistogram.getReport([1, 5, 10, 25, 50, 75, 99]),
      c = e.resolutionHistogram.getReport(s),
      d = {
        duration: Math.floor(n / 1e3),
        duration_aggregation: f(r),
        duration_stopped_receiving: f(e.videoStoppedDuration.asSeconds()),
        duration_stream_under_8mbps: f(e.bitrateBuckets[8e6]),
        duration_stream_under_7mbps: f(e.bitrateBuckets[7e6]),
        duration_stream_under_6mbps: f(e.bitrateBuckets[6e6]),
        duration_stream_under_5mbps: f(e.bitrateBuckets[5e6]),
        duration_stream_under_4mbps: f(e.bitrateBuckets[4e6]),
        duration_stream_under_3mbps: f(e.bitrateBuckets[3e6]),
        duration_stream_under_2mbps: f(e.bitrateBuckets[2e6]),
        duration_stream_under_1_5mbps: f(e.bitrateBuckets[15e5]),
        duration_stream_under_1mbps: f(e.bitrateBuckets[1e6]),
        duration_stream_under_0_5mbps: f(e.bitrateBuckets[5e5]),
        duration_stream_at_0mbps: f(e.bitrateBuckets[0]),
        duration_fps_under_60: f(e.fpsBuckets[60]),
        duration_fps_under_55: f(e.fpsBuckets[55]),
        duration_fps_under_50: f(e.fpsBuckets[50]),
        duration_fps_under_45: f(e.fpsBuckets[45]),
        duration_fps_under_40: f(e.fpsBuckets[40]),
        duration_fps_under_35: f(e.fpsBuckets[35]),
        duration_fps_under_30: f(e.fpsBuckets[30]),
        duration_fps_under_25: f(e.fpsBuckets[25]),
        duration_fps_under_20: f(e.fpsBuckets[20]),
        duration_fps_under_15: f(e.fpsBuckets[15]),
        duration_fps_under_10: f(e.fpsBuckets[10]),
        duration_fps_under_5: f(e.fpsBuckets[5]),
        duration_fps_at_0: f(e.fpsBuckets[0]),
        avg_resolution: e.intervalTotal > 0 ? Math.round(e.resolutionTotal / e.intervalTotal) : 0,
        avg_minor_resolution: e.intervalTotal > 0 ? Math.round(e.minorResolutionTotal / e.intervalTotal) : 0,
        avg_major_resolution: e.intervalTotal > 0 ? Math.round(e.majorResolutionTotal / e.intervalTotal) : 0,
        duration_resolution_under_720: f(e.resolutionBuckets[720]),
        duration_resolution_under_480: f(e.resolutionBuckets[480]),
        duration_resolution_under_360: f(e.resolutionBuckets[360]),
        num_pauses: this.pausedCount,
        duration_paused: f(this.paused.totalDuration() / 1e3),
        duration_zero_receivers: f(this.zeroReceivers.totalDuration() / 1e3),
        duration_video_stopped: f(this.videoStopped.totalDuration() / 1e3),
        client_performance_cpu_percentile25: a.percentiles[25],
        client_performance_cpu_percentile50: a.percentiles[50],
        client_performance_cpu_percentile75: a.percentiles[75],
        client_performance_cpu_percentile90: a.percentiles[90],
        client_performance_cpu_percentile95: a.percentiles[95],
        client_performance_memory_percentile25: o.percentiles[25],
        client_performance_memory_percentile50: o.percentiles[50],
        client_performance_memory_percentile75: o.percentiles[75],
        client_performance_memory_percentile90: o.percentiles[90],
        client_performance_memory_percentile95: o.percentiles[95],
        client_performance_memory_min: o.min,
        client_performance_memory_max: o.max,
        fps_percentile1: l.percentiles[1],
        fps_percentile5: l.percentiles[5],
        fps_percentile10: l.percentiles[10],
        fps_percentile25: l.percentiles[25],
        fps_percentile50: l.percentiles[50],
        fps_percentile75: l.percentiles[75],
        bitrate_percentile1: u.percentiles[1],
        bitrate_percentile5: u.percentiles[5],
        bitrate_percentile10: u.percentiles[10],
        bitrate_percentile25: u.percentiles[25],
        bitrate_percentile50: u.percentiles[50],
        bitrate_percentile75: u.percentiles[75],
        bitrate_percentile99: u.percentiles[99],
        resolution_percentile1: c.percentiles[1],
        resolution_percentile5: c.percentiles[5],
        resolution_percentile10: c.percentiles[10],
        resolution_percentile25: c.percentiles[25],
        resolution_percentile50: c.percentiles[50],
        resolution_percentile75: c.percentiles[75],
        duration_video_effect: f(this.videoEffectDuration.totalDuration() / 1e3)
      },
      {
        bytes: E,
        framesDropped: h,
        framesCodecError: p,
        framesCodec: _,
        framesNetwork: S,
        packets: m,
        packetsLost: T,
        nackCount: g,
        pliCount: I,
        qpSum: C,
        pauseCount: v,
        freezeCount: A,
        totalPausesDuration: R,
        totalFreezesDuration: N,
        totalFramesDuration: O,
        keyframes: D
      } = e.aggregatedProperties;
    return {
      ...d,
      avg_bitrate: r > 0 ? Math.round((null != E ? E : 0) * 8 / r) : 0,
      avg_fps: r > 0 ? Math.round((null != _ ? _ : 0) / r) : 0,
      num_bytes: E,
      num_packets_lost: T,
      num_packets: m,
      num_frames: S,
      num_frames_codec_error: p,
      time_to_first_frame_ms: e.timeToFirstFrame,
      num_frames_dropped: h,
      num_nacks: g,
      num_plis: I,
      qp_sum: C,
      receiver_pause_count: v,
      receiver_freeze_count: A,
      receiver_total_pauses_duration: R,
      receiver_total_freezes_duration: N,
      receiver_total_frames_duration: O,
      num_keyframes: D
    }
  }
  receivedStats(e, t, n) {
    var i, r, a, o;
    let l = t.transport,
      c = (0, u.isWeb)() ? 1 : null !== (r = null === (i = l.receiverReports) || void 0 === i ? void 0 : i.length) && void 0 !== r ? r : 0,
      f = new Set,
      E = new Set;
    if (this.updateSendState({
        receivers: c
      }), t.rtp.outbound.filter(e => "video" === e.type).forEach(t => {
        if (null != t) {
          var i, r, s, a, o, u, c, E, h;
          let p = t.ssrc,
            _ = this.outboundStats[p];
          if (null == _ && (console.warn("Unknown outbound video stream with SSRC: ".concat(p)), _ = new d.OutboundStats(this.timestampProducer), this.outboundStats[p] = _), null == _.timeToFirstFrame && (t.framesEncoded > 0 || (null !== (i = t.frameRateInput) && void 0 !== i ? i : 0) > 0) && (_.timeToFirstFrame = Math.max(0, e - _.startTime)), !this.videoStopped.value) {
            _.appendAndIncrementStats(d.RawVideoStats.parseOutboundStats(t, e)), _.encoderCodec !== d.CodecTypes.UNKNOWN && f.add(_.encoderCodec);
            let i = null === (r = n.find(e => e.ssrc === p)) || void 0 === r ? void 0 : r.maxBitrate;
            _.appendTargetRates(null === (s = n.find(e => e.ssrc === p)) || void 0 === s ? void 0 : s.maxFrameRate, null !== (o = t.bitrateTarget) && void 0 !== o ? o : Math.min(null !== (a = l.availableOutgoingBitrate) && void 0 !== a ? a : 0, null != i ? i : 0), i), _.averageEncodeTime = null !== (u = t.averageEncodeTime) && void 0 !== u ? u : 0, _.framesDroppedRateLimiter = null !== (c = t.framesDroppedRateLimiter) && void 0 !== c ? c : null, _.framesDroppedEncoderQueue = null !== (E = t.framesDroppedEncoderQueue) && void 0 !== E ? E : null, _.framesDroppedCongestionWindow = null !== (h = t.framesDroppedCongestionWindow) && void 0 !== h ? h : null
          }
        }
      }), !this.paused.value && s.forEach(t.rtp.inbound, (t, n) => {
        let i = t.find(e => "video" === e.type);
        if (null != i) {
          let t = this.inboundStats[n];
          null == t && (console.warn("Unknown inbound video stream for user: ".concat(n)), t = new d.InboundStats(this.timestampProducer), this.inboundStats[n] = t);
          let r = d.RawVideoStats.parseInboundStats(i, e);
          !this.statCollectionPausedUsers.has(n) && t.appendAndIncrementStats(r), this.emit("fps-update", n, r.framesCodec, r.timestamp), t.decoderCodec !== d.CodecTypes.UNKNOWN && E.add(t.decoderCodec), null == t.timeToFirstFrame && i.framesDecoded > 0 && (t.timeToFirstFrame = e - t.startTime)
        }
      }), 0 !== f.size && 0 !== E.size) {
      ;
      if (a = f, o = E, a.size === o.size && Array.from(a).every(e => o.has(e))) this.symmetricCodecUpdates++;
      else this.asymmetricCodecUpdates++
    }
  }
  updateSystemResourceStats() {
    for (let e in this.outboundStats) this.outboundStats[e].addSystemResources();
    for (let e in this.inboundStats) this.inboundStats[e].addSystemResources()
  }
  updateVideoEffectStats(e) {
    let t = null == e ? void 0 : e.rtp.outbound.find(e => "video" === e.type);
    this.videoEffectDuration.value = (null == t ? void 0 : t.type) === "video" && null != t.filter
  }
  constructor(e, t = l.TimeStampProducer) {
    super(), this.connection = e, this.timestampProducer = t, this.networkQuality = new c.default, this.pausedCount = 0, this.outboundStats = {}, this.inboundStats = {}, this.symmetricCodecUpdates = 0, this.asymmetricCodecUpdates = 0, this.statCollectionPausedUsers = new Set, this.sampleStats = e => {
      if (null == e) return;
      let t = this.timestampProducer.now();
      if (this.networkQuality.incrementNetworkStats(t), this.updateSystemResourceStats(), this.updateVideoEffectStats(e), null == e) return;
      let n = this.connection.getStreamParameters();
      this.receivedStats(t, e, n)
    }, this.paused = new E(!1, t), this.zeroReceivers = new E(!1, t), this.videoStopped = new E(!1, t), this.videoEffectDuration = new E(!1, t)
  }
}