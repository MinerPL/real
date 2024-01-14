"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("222007"), n("424973");
var i = n("823302");

function r(e) {
  return {
    id: e.payloadType,
    name: e.mimeType.split("/").slice(1)[0]
  }
}

function s(e, t, n, s) {
  var a, o, l;
  let u = {},
    c = {},
    d = [],
    f = [];
  for (let t of e.values()) switch (t.type) {
    case "candidate-pair":
      u[t.id] = t;
      break;
    case "codec":
      c[t.id] = t;
      break;
    case "inbound-rtp":
      d.push(t);
      break;
    case "outbound-rtp":
      f.push(t)
  }
  let E = Object.values(u).find(e => "succeeded" === e.state);
  if (void 0 === E) return null;
  let h = [];
  for (let e of f) {
    let t = c[e.codecId];
    if (null == t) continue;
    let s = {
      type: e.kind,
      ssrc: e.ssrc,
      timestamp: e.timestamp,
      sinkWant: (0, i.formatSinkWantStat)(n, e.ssrc, "video" === e.kind),
      sinkWantAsInt: (0, i.formatSinkWantAsInt)(n, e.ssrc),
      codec: r(t),
      bytesSent: e.bytesSent,
      packetsSent: e.packetsSent
    };
    if ("audio" === e.kind) h.push({
      ...s,
      type: "audio"
    });
    else if ("video" === e.kind) {
      ;
      let t = null !== e.frameWidth ? {
        width: e.frameWidth,
        height: e.frameHeight
      } : void 0;
      h.push({
        ...s,
        framesEncoded: e.framesEncoded,
        keyFramesEncoded: e.keyFramesEncoded,
        firCount: e.firCount,
        nackCount: e.nackCount,
        pliCount: e.pliCount,
        bitrateTarget: e.targetBitrate,
        qpSum: e.qpSum,
        averageEncodeTime: null == e.framesEncoded || null === (l = e.totalEncodeTime) || 0 === l ? void 0 : (1e3 * e.totalEncodeTime / e.framesEncoded).toFixed(1),
        resolution: t,
        framesSent: e.framesSent,
        frameRateInput: e.framesPerSecond,
        type: "video"
      })
    }
  }
  let p = {};
  for (let e of d) {
    let a = c[e.codecId];
    if (null == a) continue;
    let o = t(e.ssrc);
    if (null == o) continue;
    let l = {
      type: e.kind,
      ssrc: e.ssrc,
      timestamp: e.timestamp,
      sinkWant: (0, i.formatSinkWantStat)(n, e.ssrc, "video" === e.kind),
      sinkWantAsInt: (0, i.formatSinkWantAsInt)(n, e.ssrc),
      sinkWantLocal: (0, i.formatSinkWantStat)(s, e.ssrc, "video" === e.kind),
      codec: r(a),
      bytesReceived: e.bytesReceived,
      packetsReceived: e.packetsReceived,
      packetsLost: e.packetsLost
    };
    if ("audio" === e.kind) {
      let t = void 0 !== e.jitterBufferDelay && void 0 !== e.jitterBufferEmittedCount ? Math.round(1e3 * e.jitterBufferDelay / e.jitterBufferEmittedCount) : 0;
      null == p[o] && (p[o] = []), p[o].push({
        ...l,
        audioLevel: e.audioLevel,
        jitter: 1e3 * e.jitter,
        jitterBuffer: t
      })
    } else if ("video" === e.kind) {
      null == p[o] && (p[o] = []);
      let t = null !== e.frameWidth ? {
        width: e.frameWidth,
        height: e.frameHeight
      } : void 0;
      p[o].push({
        ...l,
        resolution: t,
        framesDecoded: e.framesDecoded,
        keyFramesDecoded: e.keyFramesDecoded,
        framesDropped: e.framesDropped,
        framesReceived: e.framesReceived,
        frameRateDecode: e.framesPerSecond,
        averageDecodeTime: null == e.framesDecoded || null == e.totalDecodeTime ? void 0 : (1e3 * e.totalDecodeTime / e.framesDecoded).toFixed(1),
        firCount: e.firCount,
        nackCount: e.nackCount,
        pliCount: e.pliCount,
        qpSum: e.qpSum,
        decoderImplementationName: "WebRTC"
      })
    }
  }
  let _ = (null !== (a = E.currentRoundTripTime) && void 0 !== a ? a : 0) * 1e3;
  return {
    transport: {
      availableOutgoingBitrate: null !== (o = E.availableOutgoingBitrate) && void 0 !== o ? o : 0,
      bytesReceived: E.bytesReceived,
      bytesSent: E.bytesSent,
      ping: _
    },
    rtp: {
      inbound: p,
      outbound: h
    }
  }
}