"use strict";
n.r(t), n.d(t, {
  useAudioTrimmerStore: function() {
    return a
  }
});
var i = n("308503"),
  l = n("16470"),
  s = n("859971");
let r = (0, i.default)(e => ({
  audio: null,
  file: null,
  loading: !1,
  loadAudioFromFile: async t => {
    if (e({
        file: t,
        audio: null,
        loading: null != t
      }), null == t) return;
    let n = await (0, s.loadAudioFromFile)(t);
    null != n && e({
      audio: n,
      loading: !1
    })
  },
  maxVolume: 1,
  setMaxVolume: t => {
    e({
      maxVolume: t
    })
  }
}));

function a() {
  return r(e => ({
    audio: e.audio,
    file: e.file,
    loading: e.loading,
    loadAudioFromFile: e.loadAudioFromFile,
    maxVolume: e.maxVolume,
    setMaxVolume: e.setMaxVolume
  }), l.default)
}