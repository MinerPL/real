! function() {
    var e, t, i, n = {
            332822: function(e, t, i) {
                "use strict";
                i("918437")("Uint8", function(e) {
                    return function(t, i, n) {
                        return e(this, t, i, n)
                    }
                }, !0)
            },
            627445: function(e, t, i) {
                "use strict";
                i("70102"), i("781738");
                e.exports = function(e, t, i, n, r, s, a, o) {
                    if (!e) {
                        var l;
                        if (void 0 === t) l = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                        else {
                            var u = [i, n, r, s, a, o],
                                h = 0;
                            (l = Error(t.replace(/%s/g, function() {
                                return u[h++]
                            }))).name = "Invariant Violation"
                        }
                        throw l.framesToPop = 1, l
                    }
                }
            },
            62981: function(e, t, i) {
                "use strict";
                i.r(t), i.d(t, {
                    default: function() {
                        return n
                    }
                }), i("854508");
                var n, r = i("627445"),
                    s = i.n(r),
                    a = i("429281");
                let o = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope;
                n = class {
                    setState(e, t) {
                        null != t && (!e && t !== this.currentFrame && this.draw(t), this.currentFrame = t), e && !this.animate && this.resumeAnimation(), this.animate = e, this.scheduleOrCancelTick()
                    }
                    setVisibility(e) {
                        let t = this.visible;
                        this.visible = e, this.visible && !t && this.resumeAnimation(), this.scheduleOrCancelTick()
                    }
                    resumeAnimation() {
                        this.currentFrameTime = performance.now()
                    }
                    clear() {
                        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height)
                    }
                    draw(e) {
                        return null != this.animation && (this.clear(), this.animation.drawInto(this.canvasContext, e, this.canvas.width, this.canvas.height), !0)
                    }
                    drop() {
                        this.animate = !1, this.scheduleOrCancelTick(), a.default.drop(this.key), this.animation = null, this.dropped = !0
                    }
                    scheduleOrCancelTick() {
                        !this.dropped && (this.hasInitialFrame ? this.requestAnimationFrame(this.animate && this.visible ? this.onAnimationTick : null) : this.requestAnimationFrame(this.onInitialAnimationTick))
                    }
                    requestAnimationFrame(e) {
                        null != e && null == this.requestAnimationFrameId && (this.requestAnimationFrameId = requestAnimationFrame(e)), null != e && null != this.requestAnimationFrameId && (cancelAnimationFrame(this.requestAnimationFrameId), this.requestAnimationFrameId = requestAnimationFrame(e)), null == e && null != this.requestAnimationFrameId && (cancelAnimationFrame(this.requestAnimationFrameId), this.requestAnimationFrameId = null)
                    }
                    constructor({
                        canvas: e,
                        id: t,
                        assetUrl: i,
                        assetData: n,
                        isVisible: r,
                        shouldAnimate: l,
                        onInitialDraw: u,
                        onError: h
                    }) {
                        this.animation = null, this.onInitialAnimationTick = e => {
                            this.requestAnimationFrameId = null;
                            let t = performance.now();
                            if ((t - e < 30 || o) && this.draw(0)) {
                                var i;
                                this.resumeAnimation(), null === (i = this.onInitialDraw) || void 0 === i || i.call(this), this.hasInitialFrame = !0
                            }
                            this.scheduleOrCancelTick()
                        }, this.onAnimationTick = e => {
                            this.requestAnimationFrameId = null;
                            let t = performance.now(),
                                i = (o ? t : e) - this.currentFrameTime,
                                n = Math.floor(i / this.frameDuration);
                            n > 0 && ((t - e < 12 || o) && (this.draw(this.currentFrame), this.currentFrame += n), this.currentFrameTime += n * this.frameDuration), this.scheduleOrCancelTick()
                        };
                        let c = e.getContext("2d");
                        s(null != c, "couldn't get canvas 2d context."), this.canvas = e, this.canvasContext = c, this.animation = null, this.dropped = !1, this.currentFrame = 0, this.currentFrameTime = 0, this.frameDuration = 1e3, this.animate = l, this.visible = r, this.requestAnimationFrameId = null, this.hasInitialFrame = !1, this.onInitialDraw = u, this.onError = h, this.key = "".concat(t, ":").concat(e.width, ":").concat(e.height), a.default.create(this.key, e.width, e.height, i, n).then(e => {
                            null != e && (this.dropped ? a.default.drop(this.key) : (this.animation = e, this.frameDuration = 1e3 / e.frameRate, this.scheduleOrCancelTick()))
                        }).catch(e => {
                            null == h || h()
                        })
                    }
                }
            },
            349807: function(e, t, i) {
                "use strict";
                var n;
                i.r(t), i.d(t, {
                    default: function() {
                        return n
                    }
                }), i("222007"), i("70102");
                n = class {
                    drawInto(e, t, i, n) {
                        t %= this.frameCount, this.requireFrame(t);
                        let [s, a, o, l] = r(t, this.frameWidth, this.frameHeight, this.cells);
                        e.drawImage(this.canvas, s, a, o, l, 0, 0, i, n)
                    }
                    drop() {
                        var e;
                        null === (e = this.native) || void 0 === e || e.drop(), this.native = null
                    }
                    requireFrame(e) {
                        null != this.native && (!this.renderedFrames.has(e) && (this.paint(e), this.renderedFrames.add(e)), this.renderedFrames.size === this.frameCount && this.drop())
                    }
                    paint(e) {
                        if (null != this.native) {
                            var t;
                            let i = this.native.get_bgra(e, this.frameWidth, this.frameHeight),
                                n = new ImageData(i, this.frameWidth, this.frameHeight),
                                [s, a, o, l] = r(e, this.frameWidth, this.frameHeight, this.cells);
                            null === (t = this.context) || void 0 === t || t.putImageData(n, s, a, 0, 0, o, l)
                        }
                    }
                    constructor(e, t, i, n) {
                        let [r, s, a] = function(e, t, i) {
                            let n = Math.ceil(Math.sqrt(i));
                            return [n, n * e, n * t]
                        }(i, n, e.frames);
                        if (this.key = t, this.canvas = function(e, t) {
                                if ("function" == typeof OffscreenCanvas) return new OffscreenCanvas(e, t);
                                let i = document.createElement("canvas");
                                return i.width = e, i.height = t, i
                            }(s, a), this.context = this.canvas.getContext("2d"), this.cells = r, this.native = e, this.renderedFrames = new Set, this.frameWidth = i, this.frameHeight = n, this.frameRate = e.fps, this.frameCount = e.frames, null == this.context) throw Error("couldn't create 2d canvas context.")
                    }
                };

                function r(e, t, i, n) {
                    return [Math.floor(e / n) * t, e % n * i, t, i]
                }
            },
            429281: function(e, t, i) {
                "use strict";
                i.r(t), i.d(t, {
                    default: function() {
                        return a
                    }
                }), i("222007"), i("424973"), i("70102");
                var n = i("349807"),
                    r = i("244639");
                async function s(e, t, i, s, a) {
                    let o = a;
                    if (null == o) {
                        let e = await fetch(s);
                        if (!e.ok) throw Error("Error fetching sticker at ".concat(s));
                        o = await e.text()
                    }
                    if (null == o) return null;
                    await (0, r.initialize)();
                    let l = new r.default(o);
                    return new n.default(l, e, t, i)
                }
                var a = new class e {
                    create(e, t, i, n, r) {
                        let a = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5];
                        return this.getCached(e).then(o => {
                            var l;
                            if (this.referenceCounts.set(e, (null !== (l = this.referenceCounts.get(e)) && void 0 !== l ? l : 0) + 1), o) return o;
                            let u = {
                                key: e,
                                promise: s(e, t, i, n, r)
                            };
                            return a && (this.entries.push(u), u.promise.then(t => (null == t && this.removeEntry(e), t)).catch(t => this.removeEntry(e)), this.entries.length > 50 && this.removeEntryAt(0)), u.promise
                        })
                    }
                    drop(e) {
                        this.removeEntry(e)
                    }
                    getCached(e) {
                        let t = this.entries.findIndex(t => t.key === e);
                        if (t >= 0) {
                            let e = this.entries[t];
                            return this.entries.splice(t, 1), this.entries.push(e), e.promise.then(e => (null == e && this.removeEntryAt(t), e))
                        }
                        return Promise.resolve(null)
                    }
                    removeEntry(e) {
                        let t = this.entries.findIndex(t => t.key === e);
                        if (!(t >= 0)) return null;
                        this.removeEntryAt(t)
                    }
                    removeEntryAt(e) {
                        let t = this.entries[e],
                            i = this.referenceCounts.get(t.key);
                        return null != i && i > 1 ? (this.referenceCounts.set(t.key, i - 1), null) : (this.entries.splice(e, 1), this.referenceCounts.delete(t.key), t.promise.then(e => null == e ? void 0 : e.drop()), t)
                    }
                    constructor() {
                        this.entries = [], this.referenceCounts = new Map
                    }
                }
            },
            632760: function(e, t, i) {
                "use strict";
                i.r(t), i("222007"), i("854508");
                var n = i("62981"),
                    r = i("551750");
                let s = new Map,
                    a = e => {
                        let {
                            canvas: t,
                            canvasId: i,
                            animationId: a,
                            assetUrl: o,
                            assetData: l,
                            isVisible: u,
                            shouldAnimate: h
                        } = e, c = new n.default({
                            canvas: t,
                            id: a,
                            assetUrl: o,
                            assetData: l,
                            isVisible: u,
                            shouldAnimate: h,
                            onInitialDraw: () => {
                                self.postMessage({
                                    type: r.MessageTypes.FIRST_DRAW,
                                    canvasId: i
                                })
                            },
                            onError: () => {
                                self.postMessage({
                                    type: r.MessageTypes.ERROR,
                                    canvasId: i
                                })
                            }
                        });
                        s.set(i, c)
                    },
                    o = e => {
                        var t;
                        let {
                            canvasId: i
                        } = e;
                        null === (t = s.get(i)) || void 0 === t || t.drop(), s.delete(i)
                    },
                    l = e => {
                        var t;
                        let {
                            canvasId: i,
                            isVisible: n
                        } = e;
                        null === (t = s.get(i)) || void 0 === t || t.setVisibility(n)
                    },
                    u = e => {
                        var t;
                        let {
                            canvasId: i,
                            shouldAnimate: n,
                            nextFrame: r
                        } = e;
                        null === (t = s.get(i)) || void 0 === t || t.setState(n, r)
                    };
                self.addEventListener("message", e => {
                    let {
                        data: t
                    } = e;
                    switch (t.type) {
                        case r.MessageTypes.INITIALIZE:
                            a(t);
                            break;
                        case r.MessageTypes.DROP:
                            o(t);
                            break;
                        case r.MessageTypes.VISIBILITY_CHANGE:
                            l(t);
                            break;
                        case r.MessageTypes.STATE_CHANGE:
                            u(t)
                    }
                })
            },
            551750: function(e, t, i) {
                "use strict";
                var n, r;
                i.r(t), i.d(t, {
                    MessageTypes: function() {
                        return n
                    }
                }), (r = n || (n = {}))[r.DROP = 0] = "DROP", r[r.INITIALIZE = 1] = "INITIALIZE", r[r.VISIBILITY_CHANGE = 2] = "VISIBILITY_CHANGE", r[r.STATE_CHANGE = 3] = "STATE_CHANGE", r[r.FIRST_DRAW = 4] = "FIRST_DRAW", r[r.ERROR = 5] = "ERROR"
            },
            244639: function(e, t, i) {
                "use strict";
                let n, r, s, a, o, l, u, h, c;
                i.r(t), i.d(t, {
                    initialize: function() {
                        return I
                    },
                    default: function() {
                        return f
                    }
                }), i("332822"), i("477657"), i("811875"), i("90301"), i("652153"), i("28797"), i("817884"), i("597349"), i("667536"), i("690341"), i("70102");
                var f, d = i("627445"),
                    m = i.n(d),
                    v = i("739942");
                let p = 409600,
                    I = (0, v.createQueuedAsyncInitializer)(async () => {
                        let e = await i.el("227332").then(i.bind(i, "227332")),
                            t = await e.default();
                        s = t.cwrap("lottie_create", "number", ["string"]), a = t._lottie_destroy, o = t._lottie_draw_into_bgra, l = t._lottie_draw_into_rgba, u = t._lottie_frame_count, h = t._lottie_frame_rate, c = t._memory_create, n = t, r = c(p)
                    });

                function g(e, t) {
                    return new Uint8ClampedArray(n.HEAPU8.buffer, r, e * t * 4)
                }
                f = class {
                    get fps() {
                        return h(this.native)
                    }
                    get frames() {
                        return u(this.native)
                    }
                    get_bgra(e, t, i) {
                        return m(t <= 320, "width exceeds static allocation."), m(i <= 320, "height exceeds static allocation."), o(this.native, r, e, t, i), g(t, i)
                    }
                    get_rgba(e, t, i) {
                        return m(t <= 320, "width exceeds static allocation."), m(i <= 320, "height exceeds static allocation."), l(this.native, r, e, t, i), g(t, i)
                    }
                    drop() {
                        a(this.native)
                    }
                    constructor(e) {
                        if (this.native = s(e), 0 === this.native) throw Error("couldn't create wasm lottie. potentially bad json.")
                    }
                }
            },
            739942: function(e, t, i) {
                "use strict";
                var n, r;

                function s(e) {
                    let t = 0,
                        i = [];
                    return async function() {
                        if (2 !== t) {
                            if (1 === t) return new Promise(e => {
                                i.push(e)
                            });
                            for (t = 1, await e(), t = 2; i.length > 0;) {
                                var n;
                                null === (n = i.shift()) || void 0 === n || n()
                            }
                        }
                    }
                }
                i.r(t), i.d(t, {
                    createQueuedAsyncInitializer: function() {
                        return s
                    }
                }), i("424973"), (r = n || (n = {}))[r.UNINITIALIZED = 0] = "UNINITIALIZED", r[r.INITIALIZING = 1] = "INITIALIZING", r[r.READY = 2] = "READY"
            }
        },
        r = {};

    function s(e) {
        var t = r[e];
        if (void 0 !== t) return t.exports;
        var i = r[e] = {
            exports: {}
        };
        return n[e](i, i.exports, s), i.exports
    }
    s.m = n, s.x = function() {
        var e = s.O(void 0, ["58409", "3341", "22843", "94288"], function() {
            return s("632760")
        });
        return e = s.O(e)
    }, e = s.x, s.x = function() {
        return Promise.all(["22843", "3341", "58409", "94288"].map(s.e, s)).then(e)
    }, t = {
        224915: ["58409", "3341"],
        225629: ["22843"],
        227332: ["40912"],
        380029: ["58409", "3341", "94288"],
        632760: ["58409", "3341", "22843", "94288", "91315"],
        748375: ["58409", "3341"],
        783260: ["58409"]
    }, s.el = function(e) {
        var i = t[e];
        return void 0 === i ? Promise.resolve() : i.length > 1 ? Promise.all(i.map(s.e)) : s.e(i[0])
    }, s.f = {}, s.e = function(e) {
        return Promise.all(Object.keys(s.f).reduce(function(t, i) {
            return s.f[i](e, t), t
        }, []))
    }, s.p = "/assets/", s.u = function(e) {
        return ({
            22843: "bfd4701fcb8772780564.js",
            3341: "40fad28f01da56375e6a.js",
            40912: "84971a3d6c47b0e0972c.js",
            58409: "d179fa5fdde237bd188f.js",
            94288: "25b5e8687935019950ef.js"
        })[e]
    }, s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i = [], s.O = function(e, t, n, r) {
        if (t) {
            r = r || 0;
            for (var a = i.length; a > 0 && i[a - 1][2] > r; a--) i[a] = i[a - 1];
            i[a] = [t, n, r];
            return
        }
        for (var o = 1 / 0, a = 0; a < i.length; a++) {
            for (var t = i[a][0], n = i[a][1], r = i[a][2], l = !0, u = 0; u < t.length; u++) o >= r && Object.keys(s.O).every(function(e) {
                return s.O[e](t[u])
            }) ? t.splice(u--, 1) : (l = !1, r < o && (o = r));
            if (l) {
                i.splice(a--, 1);
                var h = n();
                void 0 !== h && (e = h)
            }
        }
        return e
    }, s.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), s.d = function(e, t) {
        for (var i in t) s.o(t, i) && !s.o(e, i) && Object.defineProperty(e, i, {
            enumerable: !0,
            get: t[i]
        })
    }, s.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.n = function(e) {
        return e && e.__esModule ? e.default : e
    }, ! function() {
        var e = {
            91315: 1
        };
        s.f.i = function(t, i) {
            !e[t] && importScripts(s.p + s.u(t))
        };
        var t = this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || [],
            i = t.push.bind(t);
        t.push = function(t) {
            var n = t[0],
                r = t[1],
                a = t[2];
            for (var o in r) s.o(r, o) && (s.m[o] = r[o]);
            for (a && a(s); n.length;) e[n.pop()] = 1;
            i(t)
        }
    }(), s.x()
}();