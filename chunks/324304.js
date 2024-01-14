"use strict";
n.r(t), n.d(t, {
  OutputEvent: function() {
    return r
  },
  default: function() {
    return s
  }
});
var i, r, s, a = n("811022"),
  o = n("595275"),
  l = n("861001"),
  u = n("441822"),
  c = n("353927");
let d = new a.default("Output");
(i = r || (r = {})).InteractionRequired = "interactionrequired", i.Speaking = "speaking", i.Video = "video", s = class extends o.default {
  play() {
    var e;
    null === (e = this.audioElement) || void 0 === e || e.play()
  }
  destroy() {
    var e;
    null === (e = this.audioElement) || void 0 === e || e.pause(), null != this.videoStreamId && (0, u.unregisterVideoStream)(this.videoStreamId), null != this.streamSourceNode && (this.streamSourceNode.disconnect(), this.streamSourceNode = null), null != this.levelNode && (this.levelNode.disconnect(), this.levelNode.port.postMessage("close"), this.levelNode = null), this.setSpeakingFlags(c.SpeakingFlags.NONE), this.removeAllListeners()
  }
  addTrack(e) {
    if (this.stream.getTracks().includes(e)) return this.stream.getTracks().length;
    if (this.stream.addTrack(e), null == this.audioElement) {
      let e = document.createElement("audio");
      e.srcObject = this.stream;
      let t = e.play();
      null != t && t.catch(() => this.emit("interactionrequired", !0)), this.audioElement = e, this.updateAudioElement()
    }
    if (null == this.levelNode && this.stream.getAudioTracks().length > 0) {
      this.streamSourceNode = this.audioContext.createMediaStreamSource(this.stream);
      try {
        this.levelNode = new AudioWorkletNode(this.audioContext, "level-processor"), this.levelNode.port.onmessage = e => {
          this.emit("speaking", e.data)
        }, null != this.streamSourceNode && this.streamSourceNode.connect(this.levelNode)
      } catch (e) {
        d.warn("Output#Failed to setup speaking indicator: ".concat(e))
      }
    }
    if ("video" === e.kind) {
      null != this.videoStreamId && (0, u.unregisterVideoStream)(this.videoStreamId);
      let t = this.stream.getVideoTracks();
      t.forEach(t => {
        e !== t && (t.discordIsTearingDown = !0, this.stream.removeTrack(t))
      }), this.videoStreamId = (0, u.registerVideoStream)(this.stream), this.emit("video", this.videoStreamId)
    }
    if ("audio" === e.kind) {
      let t = this.stream.getAudioTracks();
      t.forEach(t => {
        e !== t && (t.discordIsTearingDown = !0, this.stream.removeTrack(t))
      })
    }
    return this.stream.getTracks().length
  }
  removeTrack(e) {
    return this.stream.removeTrack(e), "video" === e.kind && (null != this.videoStreamId && (0, u.unregisterVideoStream)(this.videoStreamId), this.emit("video", null)), this.stream.getTracks().length
  }
  setSinkId(e) {
    this.sinkId = e, this.updateAudioElement()
  }
  get mute() {
    return this._mute
  }
  set mute(e) {
    this._mute = e || !1, this.updateAudioElement()
  }
  get priority() {
    return (this._speakingFlags & c.SpeakingFlags.PRIORITY) === c.SpeakingFlags.PRIORITY
  }
  get volume() {
    return this._volume
  }
  set volume(e) {
    this._volume = Math.max(0, Math.min(Math.round(e), c.DEFAULT_VOLUME)), this.updateAudioElement()
  }
  get speakingFlags() {
    return this._speakingFlags
  }
  setSpeakingFlags(e) {
    this._speakingFlags !== e && (this._speakingFlags = e, this.updateAudioElement())
  }
  updateAudioElement() {
    let e = this.audioElement;
    if (null != e) {
      e.muted = this._mute, e.volume = this._volume / 100;
      let t = this.sinkId;
      null != t && l.CAN_SET_OUTPUT_DEVICES && e.setSinkId(t)
    }
  }
  constructor(e, t) {
    super(), this._speakingFlags = c.SpeakingFlags.NONE, this._mute = !1, this._volume = c.DEFAULT_VOLUME, this.sinkId = null, this.audioElement = null, this.stream = new MediaStream, this.videoStreamId = null, this.levelNode = null, this.streamSourceNode = null, this.id = e, this.audioContext = t
  }
}