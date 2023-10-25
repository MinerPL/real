! function() {
    var e, t, r, n = {
            378638: function(e, t, r) {
                "use strict";
                r.r(t);
                var n = r("792190"),
                    s = r("700157");
                let o = new Map,
                    i = e => {
                        let {
                            canvas: t,
                            canvasId: r,
                            animationId: i,
                            assetUrl: a,
                            assetData: u,
                            isVisible: I,
                            shouldAnimate: c
                        } = e, f = new n.default({
                            canvas: t,
                            id: i,
                            assetUrl: a,
                            assetData: u,
                            isVisible: I,
                            shouldAnimate: c,
                            onInitialDraw: () => {
                                self.postMessage({
                                    type: s.MessageTypes.FIRST_DRAW,
                                    canvasId: r
                                })
                            },
                            onError: () => {
                                self.postMessage({
                                    type: s.MessageTypes.ERROR,
                                    canvasId: r
                                })
                            }
                        });
                        o.set(r, f)
                    },
                    a = e => {
                        var t;
                        let {
                            canvasId: r
                        } = e;
                        null === (t = o.get(r)) || void 0 === t || t.drop(), o.delete(r)
                    },
                    u = e => {
                        var t;
                        let {
                            canvasId: r,
                            isVisible: n
                        } = e;
                        null === (t = o.get(r)) || void 0 === t || t.setVisibility(n)
                    },
                    I = e => {
                        var t;
                        let {
                            canvasId: r,
                            shouldAnimate: n,
                            nextFrame: s
                        } = e;
                        null === (t = o.get(r)) || void 0 === t || t.setState(n, s)
                    };
                self.addEventListener("message", e => {
                    let {
                        data: t
                    } = e;
                    switch (t.type) {
                        case s.MessageTypes.INITIALIZE:
                            i(t);
                            break;
                        case s.MessageTypes.DROP:
                            a(t);
                            break;
                        case s.MessageTypes.VISIBILITY_CHANGE:
                            u(t);
                            break;
                        case s.MessageTypes.STATE_CHANGE:
                            I(t)
                    }
                })
            },
            700157: function(e, t, r) {
                "use strict";
                var n, s;
                r.r(t), r.d(t, {
                    MessageTypes: function() {
                        return n
                    }
                }), (s = n || (n = {}))[s.DROP = 0] = "DROP", s[s.INITIALIZE = 1] = "INITIALIZE", s[s.VISIBILITY_CHANGE = 2] = "VISIBILITY_CHANGE", s[s.STATE_CHANGE = 3] = "STATE_CHANGE", s[s.FIRST_DRAW = 4] = "FIRST_DRAW", s[s.ERROR = 5] = "ERROR"
            },
            412100: function(e, t, r) {
                "use strict";
                var n, s;

                function o(e) {
                    let t = n.UNINITIALIZED,
                        r = [];
                    return async function() {
                        if (t !== n.READY) {
                            if (t === n.INITIALIZING) return new Promise(e => {
                                r.push(e)
                            });
                            for (t = n.INITIALIZING, await e(), t = n.READY; r.length > 0;) {
                                var s;
                                null === (s = r.shift()) || void 0 === s || s()
                            }
                        }
                    }
                }
                r.r(t), r.d(t, {
                    createQueuedAsyncInitializer: function() {
                        return o
                    }
                }), (s = n || (n = {}))[s.UNINITIALIZED = 0] = "UNINITIALIZED", s[s.INITIALIZING = 1] = "INITIALIZING", s[s.READY = 2] = "READY"
            }
        },
        s = {};

    function o(e) {
        var t = s[e];
        if (void 0 !== t) return t.exports;
        var r = s[e] = {
            exports: {}
        };
        return n[e](r, r.exports, o), r.exports
    }
    o.m = n, o.x = function() {
        var e = o.O(void 0, ["94459"], function() {
            return o("378638")
        });
        return e = o.O(e)
    }, e = o.x, o.x = function() {
        return Promise.all(["94459"].map(o.e, o)).then(e)
    }, t = {
        378638: ["41793", "94459"],
        792190: ["94459"],
        9338: ["3591"]
    }, o.el = function(e) {
        var r = t[e];
        return void 0 === r ? Promise.resolve() : r.length > 1 ? Promise.all(r.map(o.e)) : o.e(r[0])
    }, o.f = {}, o.e = function(e) {
        return Promise.all(Object.keys(o.f).reduce(function(t, r) {
            return o.f[r](e, t), t
        }, []))
    }, o.p = "/assets/", o.u = function(e) {
        return ({
            3591: "8bf4e2c61a911e36bd14.js",
            94459: "410ba8548c0e717b3dea.js"
        })[e]
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r = [], o.O = function(e, t, n, s) {
        if (t) {
            s = s || 0;
            for (var i = r.length; i > 0 && r[i - 1][2] > s; i--) r[i] = r[i - 1];
            r[i] = [t, n, s];
            return
        }
        for (var a = 1 / 0, i = 0; i < r.length; i++) {
            for (var t = r[i][0], n = r[i][1], s = r[i][2], u = !0, I = 0; I < t.length; I++) a >= s && Object.keys(o.O).every(function(e) {
                return o.O[e](t[I])
            }) ? t.splice(I--, 1) : (u = !1, s < a && (a = s));
            if (u) {
                r.splice(i--, 1);
                var c = n()
            }
        }
        return c
    }, o.d = function(e, t) {
        for (var r in t) o.o(t, r) && !o.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.n = function(e) {
        return e && e.__esModule ? e.default : e
    }, ! function() {
        var e = {
            41793: 1
        };
        o.f.i = function(t, r) {
            !e[t] && importScripts(o.p + o.u(t))
        };
        var t = this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || [],
            r = t.push.bind(t);
        t.push = function(t) {
            var n = t[0],
                s = t[1],
                i = t[2];
            for (var a in s) o.o(s, a) && (o.m[a] = s[a]);
            for (i && i(o); n.length;) e[n.pop()] = 1;
            r(t)
        }
    }(), o.x()
}();