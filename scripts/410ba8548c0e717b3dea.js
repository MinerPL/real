(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["94459"], {
        161179: function(t, e, i) {
            "use strict";
            t.exports = function(t, e, i, n, r, a, s, h) {
                if (!t) {
                    var o;
                    if (void 0 === e) o = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    else {
                        var l = [i, n, r, a, s, h],
                            c = 0;
                        (o = Error(e.replace(/%s/g, function() {
                            return l[c++]
                        }))).name = "Invariant Violation"
                    }
                    throw o.framesToPop = 1, o
                }
            }
        },
        792190: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return h
                }
            });
            var n = i("161179"),
                r = i.n(n),
                a = i("343736");
            let s = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope;
            class h {
                setState(t, e) {
                    null != e && (!t && e !== this.currentFrame && this.draw(e), this.currentFrame = e), t && !this.animate && this.resumeAnimation(), this.animate = t, this.scheduleOrCancelTick()
                }
                setVisibility(t) {
                    let e = this.visible;
                    this.visible = t, this.visible && !e && this.resumeAnimation(), this.scheduleOrCancelTick()
                }
                resumeAnimation() {
                    this.currentFrameTime = performance.now()
                }
                clear() {
                    this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height)
                }
                draw(t) {
                    return null != this.animation && (this.clear(), this.animation.drawInto(this.canvasContext, t, this.canvas.width, this.canvas.height), !0)
                }
                drop() {
                    this.animate = !1, this.scheduleOrCancelTick(), a.default.drop(this.key), this.animation = null, this.dropped = !0
                }
                scheduleOrCancelTick() {
                    !this.dropped && (this.hasInitialFrame ? this.requestAnimationFrame(this.animate && this.visible ? this.onAnimationTick : null) : this.requestAnimationFrame(this.onInitialAnimationTick))
                }
                requestAnimationFrame(t) {
                    null != t && null == this.requestAnimationFrameId && (this.requestAnimationFrameId = requestAnimationFrame(t)), null != t && null != this.requestAnimationFrameId && (cancelAnimationFrame(this.requestAnimationFrameId), this.requestAnimationFrameId = requestAnimationFrame(t)), null == t && null != this.requestAnimationFrameId && (cancelAnimationFrame(this.requestAnimationFrameId), this.requestAnimationFrameId = null)
                }
                constructor({
                    canvas: t,
                    id: e,
                    assetUrl: i,
                    assetData: n,
                    isVisible: h,
                    shouldAnimate: o,
                    onInitialDraw: l,
                    onError: c
                }) {
                    this.animation = null, this.onInitialAnimationTick = t => {
                        this.requestAnimationFrameId = null;
                        let e = performance.now();
                        if ((e - t < 30 || s) && this.draw(0)) {
                            var i;
                            this.resumeAnimation(), null === (i = this.onInitialDraw) || void 0 === i || i.call(this), this.hasInitialFrame = !0
                        }
                        this.scheduleOrCancelTick()
                    }, this.onAnimationTick = t => {
                        this.requestAnimationFrameId = null;
                        let e = performance.now(),
                            i = (s ? e : t) - this.currentFrameTime,
                            n = Math.floor(i / this.frameDuration);
                        n > 0 && ((e - t < 12 || s) && (this.draw(this.currentFrame), this.currentFrame += n), this.currentFrameTime += n * this.frameDuration), this.scheduleOrCancelTick()
                    };
                    let u = t.getContext("2d");
                    r(null != u, "couldn't get canvas 2d context."), this.canvas = t, this.canvasContext = u, this.animation = null, this.dropped = !1, this.currentFrame = 0, this.currentFrameTime = 0, this.frameDuration = 1e3, this.animate = o, this.visible = h, this.requestAnimationFrameId = null, this.hasInitialFrame = !1, this.onInitialDraw = l, this.onError = c, this.key = "".concat(e, ":").concat(t.width, ":").concat(t.height), a.default.create(this.key, t.width, t.height, i, n).then(t => {
                        null != t && (this.dropped ? a.default.drop(this.key) : (this.animation = t, this.frameDuration = 1e3 / t.frameRate, this.scheduleOrCancelTick()))
                    }).catch(t => {
                        null == c || c()
                    })
                }
            }
        },
        313138: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return n
                }
            });
            class n {
                drawInto(t, e, i, n) {
                    e %= this.frameCount, this.requireFrame(e);
                    let [a, s, h, o] = r(e, this.frameWidth, this.frameHeight, this.cells);
                    t.drawImage(this.canvas, a, s, h, o, 0, 0, i, n)
                }
                drop() {
                    var t;
                    null === (t = this.native) || void 0 === t || t.drop(), this.native = null
                }
                requireFrame(t) {
                    null != this.native && (!this.renderedFrames.has(t) && (this.paint(t), this.renderedFrames.add(t)), this.renderedFrames.size === this.frameCount && this.drop())
                }
                paint(t) {
                    if (null != this.native) {
                        var e;
                        let i = this.native.get_bgra(t, this.frameWidth, this.frameHeight),
                            n = new ImageData(i, this.frameWidth, this.frameHeight),
                            [a, s, h, o] = r(t, this.frameWidth, this.frameHeight, this.cells);
                        null === (e = this.context) || void 0 === e || e.putImageData(n, a, s, 0, 0, h, o)
                    }
                }
                constructor(t, e, i, n) {
                    let [r, a, s] = function(t, e, i) {
                        let n = Math.ceil(Math.sqrt(i));
                        return [n, n * t, n * e]
                    }(i, n, t.frames);
                    if (this.key = e, this.canvas = function(t, e) {
                            if ("function" == typeof OffscreenCanvas) return new OffscreenCanvas(t, e);
                            let i = document.createElement("canvas");
                            return i.width = t, i.height = e, i
                        }(a, s), this.context = this.canvas.getContext("2d"), this.cells = r, this.native = t, this.renderedFrames = new Set, this.frameWidth = i, this.frameHeight = n, this.frameRate = t.fps, this.frameCount = t.frames, null == this.context) throw Error("couldn't create 2d canvas context.")
                }
            }

            function r(t, e, i, n) {
                return [Math.floor(t / n) * e, t % n * i, e, i]
            }
        },
        343736: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return s
                }
            });
            var n = i("313138"),
                r = i("79157");
            async function a(t, e, i, a, s) {
                let h = s;
                if (null == h) {
                    let t = await fetch(a);
                    if (!t.ok) throw Error("Error fetching sticker at ".concat(a));
                    h = await t.text()
                }
                if (null == h) return null;
                await (0, r.initialize)();
                let o = new r.default(h);
                return new n.default(o, t, e, i)
            }
            var s = new class t {
                create(t, e, i, n, r) {
                    let s = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5];
                    return this.getCached(t).then(h => {
                        var o;
                        if (this.referenceCounts.set(t, (null !== (o = this.referenceCounts.get(t)) && void 0 !== o ? o : 0) + 1), h) return h;
                        let l = {
                            key: t,
                            promise: a(t, e, i, n, r)
                        };
                        return s && (this.entries.push(l), l.promise.then(e => (null == e && this.removeEntry(t), e)).catch(e => this.removeEntry(t)), this.entries.length > 50 && this.removeEntryAt(0)), l.promise
                    })
                }
                drop(t) {
                    this.removeEntry(t)
                }
                getCached(t) {
                    let e = this.entries.findIndex(e => e.key === t);
                    if (e >= 0) {
                        let t = this.entries[e];
                        return this.entries.splice(e, 1), this.entries.push(t), t.promise.then(t => (null == t && this.removeEntryAt(e), t))
                    }
                    return Promise.resolve(null)
                }
                removeEntry(t) {
                    let e = this.entries.findIndex(e => e.key === t);
                    if (!(e >= 0)) return null;
                    this.removeEntryAt(e)
                }
                removeEntryAt(t) {
                    let e = this.entries[t],
                        i = this.referenceCounts.get(e.key);
                    return null != i && i > 1 ? (this.referenceCounts.set(e.key, i - 1), null) : (this.entries.splice(t, 1), this.referenceCounts.delete(e.key), e.promise.then(t => null == t ? void 0 : t.drop()), e)
                }
                constructor() {
                    this.entries = [], this.referenceCounts = new Map
                }
            }
        },
        79157: function(t, e, i) {
            "use strict";
            let n, r, a, s, h, o, l, c, u;
            i.r(e), i.d(e, {
                initialize: function() {
                    return p
                },
                default: function() {
                    return g
                }
            });
            var m = i("161179"),
                d = i.n(m),
                f = i("412100");
            let v = 409600,
                p = (0, f.createQueuedAsyncInitializer)(async () => {
                    let t = await i.el("9338").then(i.bind(i, "9338")),
                        e = await t.default();
                    a = e.cwrap("lottie_create", "number", ["string"]), s = e._lottie_destroy, h = e._lottie_draw_into_bgra, o = e._lottie_draw_into_rgba, l = e._lottie_frame_count, c = e._lottie_frame_rate, u = e._memory_create, n = e, r = u(v)
                });

            function w(t, e) {
                return new Uint8ClampedArray(n.HEAPU8.buffer, r, t * e * 4)
            }
            class g {
                get fps() {
                    return c(this.native)
                }
                get frames() {
                    return l(this.native)
                }
                get_bgra(t, e, i) {
                    return d(e <= 320, "width exceeds static allocation."), d(i <= 320, "height exceeds static allocation."), h(this.native, r, t, e, i), w(e, i)
                }
                get_rgba(t, e, i) {
                    return d(e <= 320, "width exceeds static allocation."), d(i <= 320, "height exceeds static allocation."), o(this.native, r, t, e, i), w(e, i)
                }
                drop() {
                    s(this.native)
                }
                constructor(t) {
                    if (this.native = a(t), 0 === this.native) throw Error("couldn't create wasm lottie. potentially bad json.")
                }
            }
        }
    }
]);