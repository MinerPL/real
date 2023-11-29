! function() {
    var e, t, r = {
            18563: function(e, t, r) {
                "use strict";
                var n = r("511892"),
                    o = r("541368");
                e.exports = function(e, t, r) {
                    return r.get && n(r.get, t, {
                        getter: !0
                    }), r.set && n(r.set, t, {
                        setter: !0
                    }), o.f(e, t, r)
                }
            },
            854508: function(e, t, r) {
                "use strict";
                var n = r("859514"),
                    o = r("503486"),
                    i = r("18563"),
                    u = r("814026"),
                    c = TypeError,
                    s = Object.defineProperty,
                    f = o.self !== o;
                try {
                    if (u) {
                        var a = Object.getOwnPropertyDescriptor(o, "self");
                        (f || !a || !a.get || !a.enumerable) && i(o, "self", {
                            get: function() {
                                return o
                            },
                            set: function(e) {
                                if (this !== o) throw c("Illegal invocation");
                                s(o, "self", {
                                    value: e,
                                    writable: !0,
                                    configurable: !0,
                                    enumerable: !0
                                })
                            },
                            configurable: !0,
                            enumerable: !0
                        })
                    } else n({
                        global: !0,
                        simple: !0,
                        forced: f
                    }, {
                        self: o
                    })
                } catch (e) {}
            },
            783260: function(e, t, r) {
                r("854508"), self.addEventListener("message", async e => {
                    let {
                        data: {
                            url: t
                        }
                    } = e, r = !1;
                    try {
                        await fetch(t)
                    } catch (e) {
                        r = !0
                    }
                    self.postMessage({
                        url: t,
                        error: r
                    })
                })
            }
        },
        n = {};

    function o(e) {
        var t = n[e];
        if (void 0 !== t) return t.exports;
        var i = n[e] = {
            exports: {}
        };
        return r[e](i, i.exports, o), i.exports
    }
    o.m = r, o.x = function() {
        var e = o.O(void 0, ["58409"], function() {
            return o("783260")
        });
        return e = o.O(e)
    }, e = o.x, o.x = function() {
        return Promise.all(["58409"].map(o.e, o)).then(e)
    }, o.f = {}, o.e = function(e) {
        return Promise.all(Object.keys(o.f).reduce(function(t, r) {
            return o.f[r](e, t), t
        }, []))
    }, o.p = "/assets/", o.u = function(e) {
        return ({
            58409: "d179fa5fdde237bd188f.js"
        })[e]
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t = [], o.O = function(e, r, n, i) {
        if (r) {
            i = i || 0;
            for (var u = t.length; u > 0 && t[u - 1][2] > i; u--) t[u] = t[u - 1];
            t[u] = [r, n, i];
            return
        }
        for (var c = 1 / 0, u = 0; u < t.length; u++) {
            for (var r = t[u][0], n = t[u][1], i = t[u][2], s = !0, f = 0; f < r.length; f++) c >= i && Object.keys(o.O).every(function(e) {
                return o.O[e](r[f])
            }) ? r.splice(f--, 1) : (s = !1, i < c && (c = i));
            if (s) {
                t.splice(u--, 1);
                var a = n();
                void 0 !== a && (e = a)
            }
        }
        return e
    }, o.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), ! function() {
        var e = {
            68638: 1
        };
        o.f.i = function(t, r) {
            !e[t] && importScripts(o.p + o.u(t))
        };
        var t = this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || [],
            r = t.push.bind(t);
        t.push = function(t) {
            var n = t[0],
                i = t[1],
                u = t[2];
            for (var c in i) o.o(i, c) && (o.m[c] = i[c]);
            for (u && u(o); n.length;) e[n.pop()] = 1;
            r(t)
        }
    }(), o.x()
}();