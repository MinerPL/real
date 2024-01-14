"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a, l, s = n("117362"),
  i = n("449008"),
  r = n("49111"),
  o = n("782340");

function u() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
  return e <= 5 ? 3 : e <= 15 ? 10 : 15
}

function d(e, t) {
  let n = {
      packetsSentOrReceived: 0,
      packetsLost: 0,
      packetLossRate: 0,
      frameRate: 0,
      resolution: 0,
      numDatapoints: 0
    },
    a = e.slice(-1 * t).filter(i.isNotNullish);
  if (0 === a.length) return {
    type: "streamer",
    ...n
  };
  a.forEach((e, t, a) => {
    n.packetsSentOrReceived += t > 0 ? a[t].packetsSentOrReceived - a[t - 1].packetsSentOrReceived : 0, n.packetsLost += t > 0 ? a[t].packetsLost - a[t - 1].packetsLost : 0, n.frameRate += e.frameRate, n.resolution += e.resolution
  });
  let l = a[0].type,
    s = a.length;
  return {
    type: l,
    packetsSentOrReceived: n.packetsSentOrReceived,
    packetsLost: n.packetsLost,
    packetLossRate: n.packetsLost / (n.packetsLost + n.packetsSentOrReceived),
    frameRate: n.frameRate / s,
    resolution: n.resolution / s,
    numDatapoints: s
  }
}(a = l || (l = {})).PACKET_LOSS = "Packet Loss", a.FRAME_RATE_INPUT = "Frame Rate Encode", a.FRAME_RATE_NETWORK = "Frame Rate Decode", a.SOUNDSHARE_FAILED = "Soundshare Failed", a.BAD_CONNECTION = "Bad Connection";
let c = (0, s.cachedFunction)((e, t) => ({
  message: e,
  errorType: t
}));

function f(e, t) {
  if ("streamer" === e.type) {
    if (100 * e.packetLossRate > 10) return c(o.default.Messages.STREAM_BAD_STREAMER, "Packet Loss");
    if (e.frameRate <= u(t)) return c(o.default.Messages.STREAM_BAD_STREAMER, "Frame Rate Encode")
  } else {
    if (100 * e.packetLossRate > 10) return c(o.default.Messages.STREAM_BAD_SPECTATOR, "Packet Loss");
    if (e.frameRate <= u(t)) return c(o.default.Messages.STREAM_BAD_SPECTATOR, "Frame Rate Decode")
  }
  return null
}

function h(e, t, n, a) {
  if (n) return c(o.default.Messages.STREAM_SOUNDSHARE_FAILED, "Soundshare Failed");
  if (null != t) {
    let e = d(t, 5),
      n = d(t, 30);
    if (n.numDatapoints >= 5) {
      var l;
      return null !== (l = f(e, null == a ? void 0 : a.maxFrameRate)) && void 0 !== l ? l : f(n, null == a ? void 0 : a.maxFrameRate)
    }
  }
  return e === r.RTCConnectionQuality.BAD ? c(o.default.Messages.STREAM_NETWORK_QUALITY_ERROR, "Bad Connection") : null
}