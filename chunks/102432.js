"use strict";
n.r(t), n.d(t, {
  getDataUrlFromFile: function() {
    return d
  },
  uploadFileReadPromise: function() {
    return c
  },
  trimAndEncodeAudio: function() {
    return m
  }
}), n("70102"), n("424973"), n("370692"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("311790");
var i = n("627445"),
  l = n.n(i),
  s = n("718517"),
  a = n("305122"),
  r = n("108391");
let o = new AudioContext({
  sampleRate: Math.min(new AudioContext().sampleRate, 48e3)
});
async function u(e) {
  let t = await e.arrayBuffer(),
    n = t instanceof ArrayBuffer;
  if (!n) throw Error("Unexpected file type");
  return o.decodeAudioData(t)
}
async function d(e) {
  var t;
  let n = await (t = t => {
    t.readAsDataURL(e)
  }, new Promise((e, n) => {
    let i = new FileReader,
      l = () => {
        i.removeEventListener("load", l), i.removeEventListener("error", n), e(i.result)
      };
    i.addEventListener("load", l), i.addEventListener("error", n), t(i)
  }));
  if ("string" != typeof n) throw Error("Unexpected file type");
  return n
}
async function c(e) {
  let {
    readPromise: t,
    guildId: n,
    name: i,
    volume: l,
    emojiId: s,
    emojiName: r
  } = e;
  return (0, a.uploadSound)({
    guildId: n,
    name: i,
    sound: await t,
    volume: l,
    emojiId: s,
    emojiName: r
  })
}
async function f(e) {
  let t = [],
    n = function(e) {
      let {
        numberOfChannels: t
      } = e, n = [];
      for (let i = 0; i < t; i++) n.push(e.getChannelData(i));
      return n
    }(e),
    i = function(e) {
      if (1 === e.length) return e[0];
      if (2 === e.length) {
        let t = e[0],
          n = e[1],
          i = [];
        for (let e = 0; e < t.length; e++) i.push(t[e]), i.push(n[e]);
        let l = new Float32Array(i.length);
        return l.set(i), l
      }
      throw Error("Only handles up to 2 channels")
    }(n),
    s = new AudioData({
      format: "f32",
      sampleRate: e.sampleRate,
      numberOfFrames: e.length,
      numberOfChannels: e.numberOfChannels,
      timestamp: 1e6 * e.duration,
      data: i
    }),
    a = new AudioEncoder({
      output: function(n) {
        l(null != n.duration, "Chunk duration must not be null");
        let i = n.duration / 1e6 * e.sampleRate,
          s = new Uint8Array(n.byteLength);
        n.copyTo(s), t.push({
          buffer: s,
          numSamples: i
        })
      },
      error: e => {
        throw Error("Audio encoding error: ".concat(e.message))
      }
    });
  a.configure({
    codec: "opus",
    sampleRate: e.sampleRate,
    numberOfChannels: e.numberOfChannels
  }), a.encode(s), await a.flush();
  let o = (0, r.default)(t, {
    channelCount: e.numberOfChannels,
    inputSampleRate: e.sampleRate,
    outputGain: 0,
    channelMappingFamily: 0
  });
  return new Blob([o], {
    type: "audio/ogg"
  })
}
async function m(e, t) {
  let n = await u(e),
    i = function(e, t) {
      let {
        startMs: n,
        endMs: i
      } = t, {
        sampleRate: l,
        numberOfChannels: a,
        duration: r
      } = e, u = r * s.default.Millis.SECOND, d = Math.min(i, u);
      if (0 === n && d === u) return e;
      let c = Math.floor(n / u * e.length),
        f = Math.floor(d / u * e.length),
        m = o.createBuffer(a, f - c, l);
      for (let t = 0; t < a; t++) {
        let n = m.getChannelData(t),
          i = e.getChannelData(t),
          l = 0;
        for (let e = c; e <= f; e++) n[l] = i[e], l++
      }
      return m
    }(n, t),
    l = await f(i);
  return new File([l], "sound.ogg", {
    type: "audio/ogg"
  })
}