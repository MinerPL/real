                "use strict";
                r.r(e), r("424973"), r("222007"), r("854508");
                let n = (t, e, r, n) => {
                    var o;
                    let i;
                    let {
                        fineTuning: a,
                        fineTuningResolution: u,
                        duration: l
                    } = r, f = Math.floor(e / n.waveformBlockWidth);
                    if (a >= 0) {
                        let e = Math.floor(t.length * (a - u * a / l) / l),
                            r = Math.floor(t.length * (a + u * (l - a) / l) / l);
                        i = t.slice(e, r)
                    } else i = t;
                    let s = Math.floor(i.length / f),
                        c = [];
                    for (let t = 0; t < f; t++) {
                        let e = s * t,
                            r = 0;
                        for (let t = 0; t < s; t++) r += Math.abs(i[e + t]);
                        c.push(r / s)
                    }
                    let h = Math.pow(Math.max(...c), -1),
                        p = c.map(t => t * h),
                        d = [...c].sort()[Math.floor(.95 * c.length)],
                        v = Math.min((null !== (o = n.loudnessThreshold) && void 0 !== o ? o : d) / d, 1);
                    return {
                        normalizedData: p,
                        normalizedVolumeMultipler: v
                    }
                };
                self.addEventListener("message", t => {
                    let {
                        data: {
                            rawBufferData: e,
                            width: r,
                            options: o,
                            config: i,
                            id: a
                        }
                    } = t, {
                        normalizedData: u,
                        normalizedVolumeMultipler: l
                    } = n(e, r, o, i);
                    self.postMessage({
                        waveform: u,
                        id: a,
                        normalizedVolumeMultipler: l
                    })
                })