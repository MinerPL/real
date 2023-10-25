! function() {
    var e = {
            748375: function(e, t, o) {
                "use strict";
                o.r(t);
                let l = (e, t, o, l) => {
                    var r;
                    let a;
                    let {
                        fineTuning: n,
                        fineTuningResolution: s,
                        duration: f
                    } = o, i = Math.floor(t / l.waveformBlockWidth);
                    if (n >= 0) {
                        let t = Math.floor(e.length * (n - s * n / f) / f),
                            o = Math.floor(e.length * (n + s * (f - n) / f) / f);
                        a = e.slice(t, o)
                    } else a = e;
                    let h = Math.floor(a.length / i),
                        u = [];
                    for (let e = 0; e < i; e++) {
                        let t = h * e,
                            o = 0;
                        for (let e = 0; e < h; e++) o += Math.abs(a[t + e]);
                        u.push(o / h)
                    }
                    let d = Math.pow(Math.max(...u), -1),
                        M = u.map(e => e * d),
                        p = [...u].sort()[Math.floor(.95 * u.length)],
                        g = Math.min((null !== (r = l.loudnessThreshold) && void 0 !== r ? r : p) / p, 1);
                    return {
                        normalizedData: M,
                        normalizedVolumeMultipler: g
                    }
                };
                self.addEventListener("message", e => {
                    let {
                        data: {
                            rawBufferData: t,
                            width: o,
                            options: r,
                            config: a,
                            id: n
                        }
                    } = e, {
                        normalizedData: s,
                        normalizedVolumeMultipler: f
                    } = l(t, o, r, a);
                    self.postMessage({
                        waveform: s,
                        id: n,
                        normalizedVolumeMultipler: f
                    })
                })
            }
        },
        t = {};

    function o(l) {
        var r = t[l];
        if (void 0 !== r) return r.exports;
        var a = t[l] = {
            exports: {}
        };
        return e[l](a, a.exports, o), a.exports
    }
    o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o("748375")
}();