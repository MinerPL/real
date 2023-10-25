(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["50707"], {
        330559: function(e, i, s) {
            "use strict";
            let t;
            s.r(i), s.d(i, {
                default: function() {
                    return v
                }
            });
            var n = s("462567"),
                r = s("700157"),
                a = s("412100");
            let l = Math.min(4, Math.ceil(navigator.hardwareConcurrency / 2)),
                o = "undefined" != typeof OffscreenCanvas,
                h = [],
                I = new Map,
                d = new Map,
                u = (0, a.createQueuedAsyncInitializer)(async () => {
                    for (let e = 0; e < l; e++) {
                        let e = new Worker(new URL(s.p + s.u("41793"), s.b));
                        h.push({
                            worker: e,
                            numActive: 0
                        })
                    }
                }),
                c = (0, a.createQueuedAsyncInitializer)(async () => {
                    let e = await s.el("792190").then(s.bind(s, "792190"));
                    t = e.default
                });
            o ? u() : c();
            class v {
                get workerIndex() {
                    let e = I.get(this.canvasId);
                    if (null == e) {
                        let t = d.get(this.assetUrl);
                        if (null != t) e = t;
                        else {
                            var i, s;
                            let t = null !== (s = null === (i = h[0]) || void 0 === i ? void 0 : i.numActive) && void 0 !== s ? s : 0;
                            for (let [i, s] of h.entries()) s.numActive <= t && (t = s.numActive, e = i);
                            d.set(this.assetUrl, e)
                        }
                        I.set(this.canvasId, e), h[e].numActive++
                    }
                    return e
                }
                get worker() {
                    let e = this.workerIndex;
                    if (null == h[e]) throw Error("No worker in pool at index ".concat(e));
                    return h[e].worker
                }
                async drop() {
                    var e, i, s, t;
                    if (await this.initializationPromise, o) {
                        null === (e = this.worker) || void 0 === e || e.removeEventListener("message", this.handleMessage), null === (i = this.worker) || void 0 === i || i.removeEventListener("error", this.handleError), null === (s = this.worker) || void 0 === s || s.postMessage({
                            canvasId: this.canvasId,
                            type: r.MessageTypes.DROP
                        });
                        let t = I.get(this.canvasId);
                        if (null == t) throw Error("No worker index assigned for asset ".concat(this.canvasId));
                        I.delete(this.canvasId), h[t].numActive--
                    } else null === (t = this.lottieView) || void 0 === t || t.drop();
                    this.observer.disconnect()
                }
                setState(e, i) {
                    var s, t;
                    this.shouldAnimate = e, this.isInitialized && (o ? null === (s = this.worker) || void 0 === s || s.postMessage({
                        canvasId: this.canvasId,
                        type: r.MessageTypes.STATE_CHANGE,
                        shouldAnimate: e,
                        nextFrame: i
                    }) : null === (t = this.lottieView) || void 0 === t || t.setState(e, i))
                }
                constructor({
                    canvas: e,
                    animationId: i,
                    assetUrl: s,
                    assetData: a,
                    onInitialDraw: l,
                    onError: h
                }) {
                    this.isVisible = !1, this.isInitialized = !1, this.shouldAnimate = !1, this.handleVisibilityChange = e => {
                        let i = e[e.length - 1].isIntersecting;
                        if (i !== this.isVisible) {
                            var s, t;
                            if (this.isVisible = i, !this.isInitialized) return;
                            o ? null === (s = this.worker) || void 0 === s || s.postMessage({
                                canvasId: this.canvasId,
                                type: r.MessageTypes.VISIBILITY_CHANGE,
                                isVisible: i
                            }) : null === (t = this.lottieView) || void 0 === t || t.setVisibility(i)
                        }
                    }, this.handleMessage = e => {
                        var i, s;
                        e.data.type === r.MessageTypes.FIRST_DRAW && (null === (i = this.onInitialDraw) || void 0 === i || i.call(this)), e.data.type === r.MessageTypes.ERROR && (null === (s = this.onError) || void 0 === s || s.call(this))
                    }, this.handleError = e => {
                        var i;
                        null === (i = this.onError) || void 0 === i || i.call(this, e)
                    }, this.canvasId = (0, n.v4)(), this.assetUrl = s, this.assetData = a, this.onInitialDraw = l, this.onError = h, this.observer = new IntersectionObserver(this.handleVisibilityChange), this.observer.observe(e), o ? this.initializationPromise = u().then(() => {
                        var t, n, l;
                        null === (t = this.worker) || void 0 === t || t.addEventListener("message", this.handleMessage), null === (n = this.worker) || void 0 === n || n.addEventListener("error", this.handleError);
                        let o = e.transferControlToOffscreen();
                        null === (l = this.worker) || void 0 === l || l.postMessage({
                            type: r.MessageTypes.INITIALIZE,
                            animationId: i,
                            assetUrl: s,
                            assetData: a,
                            canvas: o,
                            canvasId: this.canvasId,
                            isVisible: this.isVisible,
                            shouldAnimate: this.shouldAnimate
                        }, [o]), this.isInitialized = !0
                    }) : this.initializationPromise = c().then(() => {
                        this.lottieView = new t({
                            canvas: e,
                            id: i,
                            assetUrl: s,
                            assetData: a,
                            isVisible: this.isVisible,
                            shouldAnimate: this.shouldAnimate,
                            onInitialDraw: l,
                            onError: h
                        }), this.isInitialized = !0
                    })
                }
            }
        },
        700157: function(e, i, s) {
            "use strict";
            var t, n;
            s.r(i), s.d(i, {
                MessageTypes: function() {
                    return t
                }
            }), (n = t || (t = {}))[n.DROP = 0] = "DROP", n[n.INITIALIZE = 1] = "INITIALIZE", n[n.VISIBILITY_CHANGE = 2] = "VISIBILITY_CHANGE", n[n.STATE_CHANGE = 3] = "STATE_CHANGE", n[n.FIRST_DRAW = 4] = "FIRST_DRAW", n[n.ERROR = 5] = "ERROR"
        },
        412100: function(e, i, s) {
            "use strict";
            var t, n;

            function r(e) {
                let i = t.UNINITIALIZED,
                    s = [];
                return async function() {
                    if (i !== t.READY) {
                        if (i === t.INITIALIZING) return new Promise(e => {
                            s.push(e)
                        });
                        for (i = t.INITIALIZING, await e(), i = t.READY; s.length > 0;) {
                            var n;
                            null === (n = s.shift()) || void 0 === n || n()
                        }
                    }
                }
            }
            s.r(i), s.d(i, {
                createQueuedAsyncInitializer: function() {
                    return r
                }
            }), (n = t || (t = {}))[n.UNINITIALIZED = 0] = "UNINITIALIZED", n[n.INITIALIZING = 1] = "INITIALIZING", n[n.READY = 2] = "READY"
        }
    }
]);