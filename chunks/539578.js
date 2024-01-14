"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("808653"), n("424973");
var i = n("823302");

function r(e) {
  return e / 32768
}

function s(e) {
  var t, n, i, r, s, a, o, l, u, c, d, f, E, h, p, _, S, m, T, g, I;
  let C = (null !== (c = null == e ? void 0 : e.headerBytes) && void 0 !== c ? c : 0) + (null !== (d = null == e ? void 0 : e.payloadBytes) && void 0 !== d ? d : 0) + (null !== (f = null == e ? void 0 : e.paddingBytes) && void 0 !== f ? f : 0),
    v = (null !== (E = null == e ? void 0 : null === (t = e.fec) || void 0 === t ? void 0 : t.headerBytes) && void 0 !== E ? E : 0) + (null !== (h = null == e ? void 0 : null === (n = e.fec) || void 0 === n ? void 0 : n.payloadBytes) && void 0 !== h ? h : 0) + (null !== (p = null == e ? void 0 : null === (i = e.fec) || void 0 === i ? void 0 : i.paddingBytes) && void 0 !== p ? p : 0) + (null !== (_ = null == e ? void 0 : null === (r = e.retransmitted) || void 0 === r ? void 0 : r.headerBytes) && void 0 !== _ ? _ : 0) + (null !== (S = null == e ? void 0 : null === (s = e.retransmitted) || void 0 === s ? void 0 : s.payloadBytes) && void 0 !== S ? S : 0) + (null !== (m = null == e ? void 0 : null === (a = e.retransmitted) || void 0 === a ? void 0 : a.paddingBytes) && void 0 !== m ? m : 0) + (null !== (T = null == e ? void 0 : null === (o = e.transmitted) || void 0 === o ? void 0 : o.headerBytes) && void 0 !== T ? T : 0) + (null !== (g = null == e ? void 0 : null === (l = e.transmitted) || void 0 === l ? void 0 : l.payloadBytes) && void 0 !== g ? g : 0) + (null !== (I = null == e ? void 0 : null === (u = e.transmitted) || void 0 === u ? void 0 : u.paddingBytes) && void 0 !== I ? I : 0);
  return v + C
}

function a(e) {
  var t, n, i, r, s, a, o;
  let l = null !== (r = null == e ? void 0 : e.packets) && void 0 !== r ? r : 0,
    u = (null !== (s = null == e ? void 0 : null === (t = e.fec) || void 0 === t ? void 0 : t.packets) && void 0 !== s ? s : 0) + (null !== (a = null == e ? void 0 : null === (n = e.retransmitted) || void 0 === n ? void 0 : n.packets) && void 0 !== a ? a : 0) + (null !== (o = null == e ? void 0 : null === (i = e.transmitted) || void 0 === i ? void 0 : i.packets) && void 0 !== o ? o : 0);
  return u + l
}

function o(e) {
  let t = {};
  for (let i in e) {
    var n;
    t[i] = null != (n = e[i]) ? {
      last: Math.round(1e3 * n.last),
      mean: Math.round(1e3 * n.mean),
      p75: Math.round(1e3 * n.p75),
      p95: Math.round(1e3 * n.p95),
      p99: Math.round(1e3 * n.p99),
      max: Math.round(1e3 * n.max)
    } : null
  }
  return t
}

function l(e, t) {
  var n, r, o, l, u, c, d, f, E, h, p, _, S, m;
  let T = e.substreams.find(e => !e.isRTX && !e.isFlexFEC);
  if (null == T) return;
  let g = e.substreams.reduce((e, t) => e + s(t.rtpStats), 0),
    I = e.substreams.reduce((e, t) => e + a(t.rtpStats), 0);
  return {
    type: "video",
    ssrc: T.ssrc,
    sinkWant: (0, i.formatSinkWantStat)(t, T.ssrc, !0),
    sinkWantAsInt: (0, i.formatSinkWantAsInt)(t, T.ssrc),
    codec: {
      id: e.codecPayloadType,
      name: e.codecName
    },
    keyFrameInterval: e.keyFrameInterval,
    bytesSent: g,
    packetsSent: I,
    packetsLost: null !== (f = null === (n = T.rtcpStats) || void 0 === n ? void 0 : n.packetsLost) && void 0 !== f ? f : 0,
    fractionLost: null !== (E = null === (r = T.rtcpStats) || void 0 === r ? void 0 : r.fractionLost) && void 0 !== E ? E : 0,
    bitrate: e.mediaBitrate,
    bitrateTarget: e.targetMediaBitrate,
    encoderImplementationName: e.encoderImplementationName,
    encodeUsage: e.encodeUsage,
    averageEncodeTime: e.avgEncodeTime,
    resolution: {
      height: T.height,
      width: T.width
    },
    framesSent: T.frameCounts.keyFrames + T.frameCounts.deltaFrames,
    keyFramesEncoded: T.frameCounts.keyFrames,
    framesEncoded: e.framesEncoded,
    frameRateInput: e.inputFrameRate,
    frameRateEncode: e.encodeFrameRate,
    firCount: null !== (h = null === (o = T.rtcpStats) || void 0 === o ? void 0 : o.firPackets) && void 0 !== h ? h : 0,
    nackCount: null !== (p = null === (l = T.rtcpStats) || void 0 === l ? void 0 : l.nackPackets) && void 0 !== p ? p : 0,
    pliCount: null !== (_ = null === (u = T.rtcpStats) || void 0 === u ? void 0 : u.pliPackets) && void 0 !== _ ? _ : 0,
    qpSum: e.qpSum,
    bandwidthLimitedResolution: e.bwLimitedResolution,
    framesDroppedRateLimiter: e.framesDroppedRateLimiter,
    framesDroppedEncoderQueue: e.framesDroppedEncoderQueue,
    framesDroppedCongestionWindow: e.framesDroppedCongestionWindow,
    cpuLimitedResolution: e.cpuLimitedResolution,
    encoderQualityVmaf: null !== (S = null === (c = T.encoderQualityStats) || void 0 === c ? void 0 : c.imageQualityVmaf_v061) && void 0 !== S ? S : void 0,
    encoderQualityPsnr: null !== (m = null === (d = T.encoderQualityStats) || void 0 === d ? void 0 : d.imageQualityWebrtcPsnrDb) && void 0 !== m ? m : void 0,
    filter: e.filter
  }
}

function u(e, t, n, r) {
  var l, u;
  let c = s(e.rtpStats),
    d = a(e.rtpStats);
  return {
    type: "video",
    ssrc: e.ssrc,
    sinkWant: (0, i.formatSinkWantStat)(t, e.ssrc, !0),
    sinkWantAsInt: (0, i.formatSinkWantAsInt)(t, e.ssrc),
    sinkWantLocal: (0, i.formatSinkWantStat)(n, e.ssrc, !0),
    codec: {
      id: e.codecPayloadType,
      name: e.codecName
    },
    bytesReceived: c,
    packetsReceived: d,
    packetsLost: null !== (l = e.rtpStats.packetsLost) && void 0 !== l ? l : e.rtcpStats.packetsLost,
    fractionLost: e.rtcpStats.fractionLost,
    bitrate: e.totalBitrate,
    jitterBuffer: e.jitterBuffer,
    currentDelay: e.currentDelay,
    targetDelay: e.targetDelay,
    minPlayoutDelay: e.minPlayoutDelay,
    renderDelay: e.renderDelay,
    averageDecodeTime: e.decode,
    resolution: {
      height: e.height,
      width: e.width
    },
    decoderImplementationName: e.decoderImplementationName,
    framesDecoded: e.framesDecoded,
    framesDropped: e.framesDropped,
    framesDecodeErrors: e.framesDecodeErrors,
    framesReceived: e.frameCounts.keyFrames + e.frameCounts.deltaFrames,
    networkFramesDropped: null !== (u = e.networkFramesDropped) && void 0 !== u ? u : 0,
    keyFramesDecoded: e.frameCounts.keyFrames,
    frameRateDecode: e.decodeFrameRate,
    frameRateNetwork: e.networkFrameRate,
    frameRateRender: e.renderFrameRate,
    firCount: e.rtcpStats.firPackets,
    nackCount: e.rtcpStats.nackPackets,
    pliCount: e.rtcpStats.pliPackets,
    qpSum: e.qpSum,
    freezeCount: e.freezeCount,
    pauseCount: e.pauseCount,
    totalFreezesDuration: e.totalFreezesDuration,
    totalPausesDuration: e.totalPausesDuration,
    totalFramesDuration: e.totalFramesDuration,
    sumOfSquaredFramesDurations: e.sumOfSquaredFramesDurations,
    ...null != r ? o({
      videoJitterBuffer: r.videoJitterBuffer,
      videoJitterDelay: r.videoJitterDelay,
      videoJitterTarget: r.videoJitterTarget
    }) : {}
  }
}

function c(e, t, n, r) {
  var a, c, d, f, E;
  let h = null,
    p = null,
    _ = "string" == typeof t ? JSON.parse(t) : t,
    S = [];
  if (null != _.outbound) {
    let {
      audio: e,
      video: t,
      videos: r
    } = _.outbound;
    if (null != e) p = (null != p ? p : 0) + e.bytesSent, S.push({
      type: "audio",
      ssrc: e.ssrc,
      sinkWant: (0, i.formatSinkWantStat)(n, e.ssrc, !1),
      sinkWantAsInt: (0, i.formatSinkWantAsInt)(n, e.ssrc),
      codec: {
        id: e.codecPayloadType,
        name: e.codecName
      },
      bytesSent: e.bytesSent,
      packetsSent: e.packetsSent,
      packetsLost: Math.max(0, e.packetsLost),
      fractionLost: 100 * e.fractionLost,
      audioLevel: e.audioLevel / 32768,
      audioDetected: e.speaking,
      framesCaptured: e.framesCaptured,
      framesRendered: e.framesRendered,
      noiseCancellerProcessTime: e.noiseCancellerProcessTime,
      voiceActivityDetectorProcessTime: e.voiceActivityDetectorProcessTime
    });
    if (null != r) r.forEach(e => {
      let t = l(e, n);
      null != t && (p = (null != p ? p : 0) + t.bytesSent, S.push(t))
    });
    else if (null != t) {
      let e = l(t, n);
      null != e && (p = (null != p ? p : 0) + e.bytesSent, S.push(e))
    }
  }
  let m = {};
  null != _.inbound && _.inbound.forEach(e => {
    let {
      id: t,
      audio: a,
      video: l,
      videos: c,
      playout: d
    } = e;
    if (m[t] = [], null != a) h = (null != h ? h : 0) + a.bytesReceived, m[t].push({
      type: "audio",
      ssrc: a.ssrc,
      sinkWant: (0, i.formatSinkWantStat)(n, a.ssrc, !1),
      sinkWantAsInt: (0, i.formatSinkWantAsInt)(n, a.ssrc),
      codec: {
        id: a.codecPayloadType,
        name: a.codecName
      },
      bytesReceived: a.bytesReceived,
      packetsReceived: a.packetsReceived,
      packetsLost: a.packetsLost,
      fractionLost: 100 * a.fractionLost,
      fecPacketsReceived: a.fecPacketsReceived,
      fecPacketsDiscarded: a.fecPacketsDiscarded,
      audioLevel: a.audioLevel / 32768,
      audioDetected: a.speaking,
      jitter: a.jitter,
      jitterBuffer: a.jitterBuffer,
      jitterBufferPreferred: a.jitterBufferPreferred,
      decodingCNG: a.decodingCNG,
      decodingMutedOutput: a.decodingMutedOutput,
      decodingNormal: a.decodingNormal,
      decodingPLC: a.decodingPLC,
      decodingPLCCNG: a.decodingPLCCNG,
      accelerateRate: 100 * a.accelerateRate,
      expandRate: 100 * a.expandRate,
      preemptiveExpandRate: 100 * a.preemptiveExpandRate,
      speechExpandRate: 100 * a.speechExpandRate,
      secondaryDecodedRate: 100 * a.secondaryDecodedRate,
      opSilence: a.opSilence,
      opNormal: a.opNormal,
      opMerge: a.opMerge,
      opExpand: a.opExpand,
      opAccelerate: a.opAccelerate,
      opPreemptiveExpand: a.opPreemptiveExpand,
      opCNG: a.opCNG,
      delayEstimate: a.delayEstimate,
      ...null != d ? o({
        audioJitterBuffer: d.audioJitterBuffer,
        audioJitterDelay: d.audioJitterDelay,
        audioJitterTarget: d.audioJitterTarget,
        audioPlayoutUnderruns: d.audioPlayoutUnderruns,
        relativeReceptionDelay: d.relativeReceptionDelay,
        relativePlayoutDelay: d.relativePlayoutDelay
      }) : {}
    });
    if (null != c) c.forEach(e => {
      let i = u(e, n, r, d);
      if (null != i) {
        let n = s(e.rtpStats);
        h = (null != h ? h : 0) + n, m[t].push(i)
      }
    });
    else if (null != l) {
      let e = u(l, n, r, d);
      if (null != e) {
        let n = s(l.rtpStats);
        h = (null != h ? h : 0) + n, m[t].push(e)
      }
    }
  });
  let {
    transport: T,
    clips: g
  } = _, I = {};
  null != T && (I.availableOutgoingBitrate = T.sendBandwidth, I.ping = T.rtt, I.decryptionFailures = T.decryptionFailures, null != T.routingFailures && (I.routingFailures = T.routingFailures), I.localAddress = T.localAddress, I.pacerDelay = T.pacerDelay, null != T.receiverReports && (I.receiverReports = T.receiverReports), I.receiverBitrateEstimate = T.receiverBitrateEstimate, I.outboundBitrateEstimate = T.outboundBitrateEstimate, I.inboundBitrateEstimate = null !== (a = T.inboundBitrateEstimate) && void 0 !== a ? a : 0, I.packetsReceived = T.packetsReceived, I.packetsSent = T.packetsSent, null != T.secureFramesProtocolVersion && (I.secureFramesProtocolVersion = T.secureFramesProtocolVersion)), ((null == T ? void 0 : T.bytesReceived) != null || null != h && !Number.isNaN(h)) && (I.bytesReceived = null !== (d = null !== (c = null == T ? void 0 : T.bytesReceived) && void 0 !== c ? c : h) && void 0 !== d ? d : void 0), ((null == T ? void 0 : T.bytesSent) != null || null != p && !Number.isNaN(p)) && (I.bytesSent = null !== (E = null !== (f = null == T ? void 0 : T.bytesSent) && void 0 !== f ? f : p) && void 0 !== E ? E : void 0);
  let {
    screenshare: C,
    camera: v
  } = _, A = null != v ? {
    capturedFramesDropped: v.capturedFramesDropped,
    capturedFramesCount: v.capturedFramesCount,
    capturedFramesMean: v.capturedFramesMean,
    capturedFramesStdev: v.capturedFramesStdev
  } : null;
  return {
    mediaEngineConnectionId: e,
    transport: I,
    screenshare: C,
    camera: A,
    clips: g,
    rtp: {
      inbound: m,
      outbound: S
    }
  }
}