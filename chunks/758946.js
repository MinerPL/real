            "use strict";
            a.r(t), a.d(t, {
                createAudioMP4FromVideoMP4: function() {
                    return i
                }
            }), a("222007"), a("424973");
            var n = a("469520"),
                l = a.n(n);
            async function i(e) {
                let t = l.createFile(),
                    a = l.createFile(),
                    n = {};
                e.fileStart = 0, t.onReady = e => {
                    for (let l of (a.init({
                            duration: e.duration,
                            timescale: e.timescale
                        }), e.audioTracks)) n[l.id] = l, t.setExtractionOptions(l.id, null, {
                        nbSamples: 1 / 0
                    }), a.addTrack({
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
                        for (let e of r) a.addSample(l, e.data, e);
                        t.releaseUsedSamples(l, r.length), delete n[l];
                        let s = a.getTrackById(l),
                            u = t.getTrackById(l);
                        if (null != u.edts) {
                            let e = u.edts.elst;
                            s.add("edts").boxes.push(e)
                        }
                        0 === Object.keys(n).length && e()
                    }
                });
                return t.appendBuffer(e), t.flush(), await i, a.getBuffer()
            }