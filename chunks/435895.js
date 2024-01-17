"use strict";
n.r(t), n.d(t, {
  playDesktopSound: function() {
    return c
  },
  playWebSound: function() {
    return f
  }
}), n("222007");
var a = n("627445"),
  s = n.n(a),
  i = n("773364"),
  l = n("42887"),
  r = n("812809");
let o = null;
try {
  o = new AudioContext
} catch {}
let u = new Map;
async function d(e) {
  let t = u.get(e);
  if (null != t) return t;
  let n = await (await fetch(e)).arrayBuffer(),
    a = await (null == o ? void 0 : o.decodeAudioData(n));
  return null != a && u.set(e, a), a
}

function c(e) {
  let {
    soundKey: t,
    soundURL: n,
    soundVolume: a,
    reportSoundStartedPlaying: r
  } = e;
  return new Promise(async e => {
    let o = await d(n);
    null == o && e(), l.default.getMediaEngine().eachConnection(n => {
      n.context === i.MediaEngineContextTypes.DEFAULT && (r(), s(null != o, "audioBuffer cannot be null here"), n.startSamplesLocalPlayback(t, o, a, () => {
        e()
      }))
    })
  })
}

function f(e, t) {
  let {
    soundKey: n,
    soundURL: a,
    soundVolume: s,
    reportSoundStartedPlaying: i
  } = e, l = t.get(n);
  if (null != l) {
    l.currentTime = 0;
    return
  }
  return new Promise(e => {
    let l = new Audio(a);
    l.volume = (0, r.default)(s), l.addEventListener("canplaythrough", () => {
      i(), t.set(n, l), l.play()
    }), l.addEventListener("ended", () => {
      t.delete(n), l.src = "", e()
    })
  })
}