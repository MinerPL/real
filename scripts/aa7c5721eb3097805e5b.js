! function() {
    var t, e, r = {
            748375: function(t, e, r) {
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
            }
        },
        n = {};

    function o(t) {
        var e = n[t];
        if (void 0 !== e) return e.exports;
        var i = n[t] = {
            exports: {}
        };
        return r[t](i, i.exports, o), i.exports
    }
    o.m = r, o.x = function() {
        var t = o.O(void 0, ["58409", "3341"], function() {
            return o("748375")
        });
        return t = o.O(t)
    }, t = o.x, o.x = function() {
        return Promise.all(["3341", "58409"].map(o.e, o)).then(t)
    }, o.f = {}, o.e = function(t) {
        return Promise.all(Object.keys(o.f).reduce(function(e, r) {
            return o.f[r](t, e), e
        }, []))
    }, o.p = "/assets/", o.u = function(t) {
        return ({
            3341: "40fad28f01da56375e6a.js",
            58409: "d179fa5fdde237bd188f.js"
        })[t]
    }, o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e = [], o.O = function(t, r, n, i) {
        if (r) {
            i = i || 0;
            for (var a = e.length; a > 0 && e[a - 1][2] > i; a--) e[a] = e[a - 1];
            e[a] = [r, n, i];
            return
        }
        for (var u = 1 / 0, a = 0; a < e.length; a++) {
            for (var r = e[a][0], n = e[a][1], i = e[a][2], l = !0, f = 0; f < r.length; f++) u >= i && Object.keys(o.O).every(function(t) {
                return o.O[t](r[f])
            }) ? r.splice(f--, 1) : (l = !1, i < u && (u = i));
            if (l) {
                e.splice(a--, 1);
                var s = n();
                void 0 !== s && (t = s)
            }
        }
        return t
    }, o.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), o.d = function(t, e) {
        for (var r in e) o.o(e, r) && !o.o(t, r) && Object.defineProperty(t, r, {
            enumerable: !0,
            get: e[r]
        })
    }, o.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.n = function(t) {
        return t && t.__esModule ? t.default : t
    }, ! function() {
        var t = {
            21401: 1
        };
        o.f.i = function(e, r) {
            !t[e] && importScripts(o.p + o.u(e))
        };
        var e = this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || [],
            r = e.push.bind(e);
        e.push = function(e) {
            var n = e[0],
                i = e[1],
                a = e[2];
            for (var u in i) o.o(i, u) && (o.m[u] = i[u]);
            for (a && a(o); n.length;) t[n.pop()] = 1;
            r(e)
        }
    }(), o.x()
}();