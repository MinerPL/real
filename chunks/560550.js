"use strict";
n.r(t), n.d(t, {
  makeConnection: function() {
    return S
  }
});
var i, r = n("383536"),
  s = n.n(r),
  a = n("811022"),
  o = n("773364"),
  l = n("566106"),
  u = n("8479"),
  c = n("62684"),
  d = n("760014"),
  f = n("588446"),
  E = n("779791"),
  h = n("353927"),
  p = n("53452");

function _(e) {
  return e.split("-")[0]
}

function S(e, t, n, r) {
  let o = "".concat(null != s.name && "" !== s.name ? s.name : "unknown", " ").concat(null != s.version && "" !== s.version ? s.version : "unknown"),
    l = new a.default("Connection(".concat(e, ")"));
  return p.BROWSER_SUPPORTS_UNIFIED_PLAN ? (l.info("Using Unified Plan (".concat(o, ")")), new E.default(e, t, n, r)) : (l.info("Using Plan B (".concat(o, ")")), new i(e, t, n, r))
}
i = class extends l.default {
  destroy() {
    super.destroy(), this.pc.close()
  }
  setCodecs(e, t, n) {
    var i, r, s;
    let a;
    (this.fpc.audioCodec !== e || this.fpc.videoCodec !== t) && (a = this.codecs.find(t => t.name === e), this.fpc.audioCodec = e, this.fpc.audioPayloadType = null !== (i = null == a ? void 0 : a.payloadType) && void 0 !== i ? i : 0, a = this.codecs.find(e => e.name === t), this.fpc.videoCodec = t, this.fpc.videoPayloadType = null !== (r = null == a ? void 0 : a.payloadType) && void 0 !== r ? r : 0, this.fpc.rtxPayloadType = null !== (s = null == a ? void 0 : a.rtxPayloadType) && void 0 !== s ? s : 0, this.pc.negotiationNeeded())
  }
  setStream(e) {
    this.fpc.direction = null != e ? f.Directions.SENDRECV : f.Directions.SENDONLY, this.pc.setStream(null != e ? e : null)
  }
  createUser(e, t, n) {
    var i;
    if (0 === t) {
      this.logger.warn("Attempting to create user ".concat(e, " with 0 audio SSRC"));
      return
    }
    this.logger.info("Creating user: ".concat(e, " with audio SSRC: ").concat(t, " and video SSRCs: ").concat(null !== (i = null == n ? void 0 : n.join(",")) && void 0 !== i ? i : 0));
    let r = null != n && n.length > 0 ? n[0] : 0;
    this.fpc.addStream(e, t, r)
  }
  destroyUser(e) {
    this.fpc.removeStream(e)
  }
  setBitRate(e) {
    this.voiceBitrate !== e && (super.setBitRate(e), this.pc.setBitRate(e))
  }
  setSDP(e) {
    this.pc.on("offer", () => this.fpc.createAnswer()), this.fpc.sdp = e
  }
  getUserIdBySsrc(e) {}
  getRawStats() {
    return this.pc.getStats()
  }
  setVideoEncoderParameters(e) {}
  constructor(e, t, n, i) {
    super(e, t, n, i), this.codecs = [], this.logger = new a.default("Connection(".concat(e, ")"));
    let r = new u.default;
    r.on("answer", e => this.pc.setRemoteDescription(e).catch(e => this.logger.error("Failed to set remote description (answer): ".concat(e)))), r.on("offer", e => {
      this.pc.setRemoteDescription(e).then(() => this.pc.createAnswer()).then(e => this.fpc.setRemoteDescription(e)).catch(e => this.logger.error("Failed to set remote description (offer): ".concat(e)))
    }), r.direction = null != this.input.stream ? f.Directions.SENDRECV : f.Directions.SENDONLY, this.fpc = r;
    let s = new d.default(this.voiceBitrate);
    s.on("addtrack", (e, t) => this.createOutput(_(e), t)), s.on("removetrack", (e, t) => this.destroyOutput(_(e), t)), s.once("connected", () => {
      this.input.reset(), this.setConnectionState(h.ConnectionStates.CONNECTED), this.on(o.BaseConnectionEvent.Stats, this.handleStats), this.input.on(c.InputEvent.VoiceActivity, this.handleVoiceActivity)
    }), s.on("connecting", () => this.setConnectionState(h.ConnectionStates.DTLS_CONNECTING)), s.on("checking", () => this.setConnectionState(h.ConnectionStates.ICE_CHECKING)), s.on("failed", () => this.setConnectionState(h.ConnectionStates.NO_ROUTE)), s.on("disconnected", () => this.setConnectionState(h.ConnectionStates.DISCONNECTED)), s.on("closed", () => this.setConnectionState(h.ConnectionStates.DISCONNECTED)), s.on("offer", e => {
      let {
        sdp: t
      } = e, {
        outboundStreams: n,
        codecs: i,
        audioSSRC: s,
        videoSSRC: a,
        rtxSSRC: l
      } = (0, f.extractSDP)(t);
      this.codecs = i;
      let u = (0, f.getExtensions)(t);
      r.outboundStreams = n, this.audioSSRC = s, r.extensions = u, (this.videoStreamParameters[0].ssrc !== a || this.videoStreamParameters[0].rtxSsrc !== l || !this.videoReady) && (this.videoStreamParameters[0].ssrc = a, this.videoStreamParameters[0].rtxSsrc = l, this.emit(o.BaseConnectionEvent.Video, this.ids.userId, this.input.getVideoStreamId(), this.audioSSRC, this.videoStreamParameters[0].ssrc, this.videoStreamParameters[0].rtxSsrc, this.videoStreamParameters), this.videoReady = !0)
    }), s.once("offer", e => {
      let {
        sdp: t
      } = e;
      this.emit(o.BaseConnectionEvent.Connected, "webrtc", (0, f.truncateSDP)(t))
    }), null != this.input.stream ? s.setStream(this.input.stream) : s.negotiationNeeded(), this.pc = s
  }
}