"use strict";
n.r(t), n.d(t, {
  createAudioMP4FromVideoMP4: function() {
    return i
  }
}), n("222007"), n("424973");
var a = n("469520"),
  l = n.n(a);
async function i(e) {
  let t = l.createFile(),
    n = l.createFile(),
    a = {};
  e.fileStart = 0, t.onReady = e => {
    for (let l of (n.init({
        duration: e.duration,
        timescale: e.timescale
      }), e.audioTracks)) a[l.id] = l, t.setExtractionOptions(l.id, null, {
      nbSamples: 1 / 0
    }), n.addTrack({
      id: l.id,
      timescale: l.timescale,
      hdlr: "soun",
      type: "mp4a",
      duration: l.duration,
      layer: l.layer,
      channel_count: l.audio.channel_count,
      samplerate: l.audio.sample_rate,
      samplesize: l.audio.sample_size,
      name: l.name
    });
    t.start()
  };
  let i = new Promise(e => {
    t.onSamples = (l, i, r) => {
      for (let e of r) n.addSample(l, e.data, e);
      t.releaseUsedSamples(l, r.length), delete a[l];
      let s = n.getTrackById(l),
        u = t.getTrackById(l);
      if (null != u.edts) {
        let e = u.edts.elst;
        s.add("edts").boxes.push(e)
      }
      0 === Object.keys(a).length && e()
    }
  });
  return t.appendBuffer(e), t.flush(), await i, n.getBuffer()
}