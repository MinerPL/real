"use strict";
n.r(t), n.d(t, {
  playGiftSound: function() {
    return p
  },
  WebAudioSound: function() {
    return f
  }
}), n("70102");
var s = n("917351"),
  u = n.n(s),
  o = n("520497"),
  r = n("812809"),
  i = n("42887"),
  a = n("773336");
let c = "default",
  d = c;

function p(e, t) {
  let n = new Audio((0, o.default)(e));
  n.volume = (0, r.default)(t), n.play()
}

function l() {
  null != window.navigator.mediaDevices && window.navigator.mediaDevices.enumerateDevices().then(e => {
    let t = i.default.getOutputDevices(),
      n = u(t).sortBy(e => e.index).findIndex(e => e.id === i.default.getOutputDeviceId()),
      s = t[i.default.getOutputDeviceId()],
      o = e.filter(e => "audiooutput" === e.kind && "communications" !== e.deviceId),
      r = o[n];
    null != s && (null == r || r.label !== s.name) && (r = o.find(e => e.label === s.name)), d = null != r ? r.deviceId : c
  }).catch(() => {
    d = c
  })
}
a.isPlatformEmbedded && (i.default.addChangeListener(l), l());
class f {
  get volume() {
    return this._volume
  }
  set volume(e) {
    this._volume = e, this._ensureAudio().then(t => t.volume = e)
  }
  loop() {
    this._ensureAudio().then(e => {
      e.loop = !0, e.play()
    })
  }
  play() {
    this._ensureAudio().then(e => {
      e.loop = !1, e.play()
    })
  }
  pause() {
    null != this._audio && this._audio.then(e => e.pause())
  }
  stop() {
    this._destroyAudio()
  }
  playWithListener() {
    return new Promise((e, t) => {
      this._ensureAudio().then(n => {
        (null == n.duration || 0 === n.duration) && t("sound has no duration"), n.play(), setTimeout(() => {
          e(!0)
        }, n.duration)
      })
    })
  }
  _destroyAudio() {
    null != this._audio && (this._audio.then(e => {
      e.pause(), e.src = ""
    }), this._audio = null)
  }
  _ensureAudio() {
    var e;
    return this._audio = null !== (e = this._audio) && void 0 !== e ? e : new Promise((e, t) => {
      let s = new Audio;
      s.src = n("89400")("../../sounds/".concat(this.name, ".mp3").replace("../../sounds/", "./")), s.onloadeddata = () => {
        s.volume = Math.min(i.default.getOutputVolume() / 100 * this._volume, 1), a.isPlatformEmbedded && s.setSinkId(d), e(s)
      }, s.onerror = () => t(Error("could not play audio")), s.onended = () => this._destroyAudio(), s.load()
    }), this._audio
  }
  constructor(e, t, n) {
    this.name = e, this._volume = n
  }
}