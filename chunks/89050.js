"use strict";
n.r(t), n.d(t, {
  defaultWaveformConfig: function() {
    return i
  },
  getWaveformId: function() {
    return l
  },
  getAudioFileId: function() {
    return s
  },
  SUPPORTED_AUDIO_FILE_TYPES: function() {
    return a
  }
}), n("222007");
let i = {
    waveformBlockWidth: 2,
    waveformBarWidth: .5,
    fineTuningDelay: 500,
    fineTuningScale: 10,
    loudnessThreshold: .3
  },
  l = (e, t) => {
    let n = "".concat(e[0], "-").concat(e[e.length - 1], "-").concat(e.byteLength);
    return "".concat(n, "-").concat(JSON.stringify(t))
  },
  s = e => "".concat(e.name, "-").concat(e.size, "-").concat(e.lastModified),
  a = new Set(["audio/mpeg", "audio/mp3", "audio/wav", "audio/x-wav", "audio/ogg", "video/mp4"])