! function() {
    var e, n, t, r, _, o, u, i, O = {
            817295: function(e, n, t) {
                "use strict";

                function r() {
                    return t.el("225629").then(t.bind(t, "225629"))
                }
                async function _(e, n, t, _, o) {
                    let u = await r();
                    return u.crop_gif(e, n, t, _, o)
                }
                t.r(n), t.d(n, {
                    default: function() {
                        return r
                    },
                    wasmCropGIF: function() {
                        return _
                    }
                })
            },
            75015: function(e, n, t) {
                "use strict";
                t.r(n), t.d(n, {
                    UploadTypes: function() {
                        return o
                    },
                    EDITING_CONTAINER_WIDTH: function() {
                        return O
                    },
                    USER_BANNER_MAX_WIDTH: function() {
                        return E
                    },
                    USER_BANNER_MAX_HEIGHT: function() {
                        return c
                    },
                    GUILD_BANNER_MAX_WIDTH: function() {
                        return f
                    },
                    GUILD_BANNER_MAX_HEIGHT: function() {
                        return a
                    },
                    SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function() {
                        return s
                    },
                    SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
                        return A
                    },
                    HOME_HEADER_MAX_WIDTH: function() {
                        return T
                    },
                    HOME_HEADER_MAX_HEIGHT: function() {
                        return I
                    },
                    BANNER_ASPECT_RATIO: function() {
                        return N
                    },
                    GUILD_BANNER_ASPECT_RATIO: function() {
                        return p
                    },
                    SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
                        return R
                    },
                    HOME_HEADER_ASPECT_RATIO: function() {
                        return l
                    },
                    MAX_BANNER_OVERLAY_HEIGHT: function() {
                        return d
                    },
                    MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
                        return P
                    },
                    MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
                        return D
                    },
                    MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
                        return b
                    },
                    VIDEO_BACKGROUND_ASPECT_RATIO: function() {
                        return y
                    },
                    MAX_VIDEO_OVERLAY_HEIGHT: function() {
                        return G
                    },
                    MessageTypes: function() {
                        return u
                    }
                });
                var r, _, o, u, i = t("917219");
                (r = o || (o = {}))[r.AVATAR = 0] = "AVATAR", r[r.BANNER = 1] = "BANNER", r[r.GUILD_BANNER = 2] = "GUILD_BANNER", r[r.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", r[r.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", r[r.HOME_HEADER = 5] = "HOME_HEADER", r[r.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
                let O = 568,
                    E = 2400,
                    c = 848,
                    f = 2400,
                    a = 1350,
                    s = 2400,
                    A = 960,
                    T = 2400,
                    I = 600,
                    N = 17 / 6,
                    p = 16 / 9,
                    R = 2.5,
                    l = 4,
                    d = O / N,
                    P = O / p,
                    D = O / R,
                    b = O / l,
                    y = i.BACKGROUND_REPLACEMENT_SIZE.width / i.BACKGROUND_REPLACEMENT_SIZE.height,
                    G = O / y;
                (_ = u || (u = {}))[_.CROP_GIF_START = 0] = "CROP_GIF_START", _[_.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", _[_.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
            },
            224915: function(e, n, t) {
                "use strict";
                t.r(n);
                var r = t("817295");
                t("129334");
                var _ = t("75015");
                async function o(e, n, t, o, u) {
                    try {
                        let i = await (0, r.wasmCropGIF)(e, n, t, o, u);
                        self.postMessage({
                            type: _.MessageTypes.CROP_GIF_COMPLETE,
                            result: i
                        })
                    } catch (e) {
                        self.postMessage({
                            type: _.MessageTypes.CROP_GIF_ERROR
                        })
                    }
                }
                self.addEventListener("message", e => {
                    let {
                        data: n
                    } = e;
                    if (n.type === _.MessageTypes.CROP_GIF_START) {
                        let {
                            gif: e,
                            x: t,
                            y: r,
                            width: _,
                            height: u
                        } = n;
                        o(e, t, r, _, u)
                    }
                })
            },
            917219: function(e, n, t) {
                "use strict";
                var r, _, o, u;
                t.r(n), t.d(n, {
                    VideoFilterType: function() {
                        return r
                    },
                    DefaultVideoBackground: function() {
                        return _
                    },
                    ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: function() {
                        return i
                    },
                    DEFAULT_VIDEO_BACKGROUND_SORT: function() {
                        return O
                    },
                    BLUR_BACKGROUND_OPTION: function() {
                        return E
                    },
                    BACKGROUND_REPLACEMENT_SIZE: function() {
                        return c
                    },
                    MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                        return f
                    }
                }), (o = r || (r = {}))[o.BACKGROUND = 0] = "BACKGROUND", (u = _ || (_ = {}))[u.OPTION_1 = 0] = "OPTION_1", u[u.OPTION_2 = 1] = "OPTION_2", u[u.OPTION_3 = 2] = "OPTION_3", u[u.OPTION_4 = 3] = "OPTION_4", u[u.OPTION_7 = 7] = "OPTION_7", u[u.OPTION_8 = 8] = "OPTION_8", u[u.OPTION_9 = 9] = "OPTION_9", u[u.OPTION_10 = 10] = "OPTION_10";
                let i = [_.OPTION_7, _.OPTION_8, _.OPTION_9, _.OPTION_10],
                    O = [_.OPTION_7, _.OPTION_8, _.OPTION_9, _.OPTION_10, _.OPTION_1, _.OPTION_2, _.OPTION_3, _.OPTION_4].reduce((e, n, t) => ({
                        ...e,
                        [n]: t
                    }), {}),
                    E = "blur",
                    c = {
                        width: 1280,
                        height: 720
                    },
                    f = 10485760
            }
        },
        E = {};

    function c(e) {
        var n = E[e];
        if (void 0 !== n) return n.exports;
        var t = E[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return O[e](t, t.exports, c), t.loaded = !0, t.exports
    }
    c.m = O, c.x = function() {
        var e = c.O(void 0, ["31897"], function() {
            return c("224915")
        });
        return e = c.O(e)
    }, e = c.x, c.x = function() {
        return Promise.all(["31897"].map(c.e, c)).then(e)
    }, c.es = function(e, n) {
        return Object.keys(e).forEach(function(t) {
            "default" !== t && !Object.prototype.hasOwnProperty.call(n, t) && Object.defineProperty(n, t, {
                enumerable: !0,
                get: function() {
                    return e[t]
                }
            })
        }), e
    }, n = {
        135722: ["31897"],
        188503: ["31897"],
        224915: ["31897", "84300"],
        225629: ["25285"],
        399758: ["31897"],
        467592: ["31897"],
        622618: ["31897"],
        826269: ["31897"]
    }, c.el = function(e) {
        var t = n[e];
        return void 0 === t ? Promise.resolve() : t.length > 1 ? Promise.all(t.map(c.e)) : c.e(t[0])
    }, c.f = {}, c.e = function(e) {
        return Promise.all(Object.keys(c.f).reduce(function(n, t) {
            return c.f[t](e, n), n
        }, []))
    }, c.p = "/assets/", c.u = function(e) {
        return ({
            25285: "79b67adcf28de15580d7.js",
            31897: "9cd8448574ccf479b36b.js"
        })[e]
    }, c.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t = [], c.O = function(e, n, r, _) {
        if (n) {
            _ = _ || 0;
            for (var o = t.length; o > 0 && t[o - 1][2] > _; o--) t[o] = t[o - 1];
            t[o] = [n, r, _];
            return
        }
        for (var u = 1 / 0, o = 0; o < t.length; o++) {
            for (var n = t[o][0], r = t[o][1], _ = t[o][2], i = !0, O = 0; O < n.length; O++) u >= _ && Object.keys(c.O).every(function(e) {
                return c.O[e](n[O])
            }) ? n.splice(O--, 1) : (i = !1, _ < u && (u = _));
            if (i) {
                t.splice(o--, 1);
                var E = r()
            }
        }
        return E
    }, r = "function" == typeof Symbol ? Symbol("webpack queues") : "__webpack_queues__", _ = "function" == typeof Symbol ? Symbol("webpack exports") : "__webpack_exports__", o = "function" == typeof Symbol ? Symbol("webpack error") : "__webpack_error__", u = e => {
        e && !e.d && (e.d = 1, e.forEach(e => e.r--), e.forEach(e => e.r-- ? e.r++ : e()))
    }, i = e => e.map(e => {
        if (null !== e && "object" == typeof e) {
            if (e[r]) return e;
            if (e.then) {
                var n = [];
                n.d = 0, e.then(e => {
                    t[_] = e, u(n)
                }, e => {
                    t[o] = e, u(n)
                });
                var t = {};
                return t[r] = e => e(n), t
            }
        }
        var i = {};
        return i[r] = e => {}, i[_] = e, i
    }), c.a = (e, n, t) => {
        t && ((O = []).d = 1);
        var O, E, c, f, a = new Set,
            s = e.exports,
            A = new Promise((e, n) => {
                f = n, c = e
            });
        A[_] = s, A[r] = e => (O && e(O), a.forEach(e), A.catch(e => {})), e.exports = A, n(e => {
            E = i(e);
            var n, t = () => E.map(e => {
                    if (e[o]) throw e[o];
                    return e[_]
                }),
                u = new Promise(e => {
                    (n = () => e(t)).r = 0;
                    var _ = e => e !== O && !a.has(e) && (a.add(e), e && !e.d && (n.r++, e.push(n)));
                    E.map(e => e[r](_))
                });
            return n.r ? u : t()
        }, e => (e ? f(A[o] = e) : c(s), u(O))), O && (O.d = 0)
    }, c.d = function(e, n) {
        for (var t in n) c.o(n, t) && !c.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: n[t]
        })
    }, c.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, c.n = function(e) {
        return e && e.__esModule ? e.default : e
    }, c.nmd = function(e) {
        return e.paths = [], !e.children && (e.children = []), e
    }, c.hmd = function(e) {
        return !(e = Object.create(e)).children && (e.children = []), Object.defineProperty(e, "exports", {
            enumerable: !0,
            set: function() {
                throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
            }
        }), e
    }, ! function() {
        var e = {
            84300: 1
        };
        c.f.i = function(n, t) {
            !e[n] && importScripts(c.p + c.u(n))
        };
        var n = this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || [],
            t = n.push.bind(n);
        n.push = function(n) {
            var r = n[0],
                _ = n[1],
                o = n[2];
            for (var u in _) c.o(_, u) && (c.m[u] = _[u]);
            for (o && o(c); r.length;) e[r.pop()] = 1;
            t(n)
        }
    }(), c.v = (e, n, t, r) => {
        var _ = fetch(c.p + t);
        return "function" == typeof WebAssembly.instantiateStreaming ? WebAssembly.instantiateStreaming(_, r).then(n => Object.assign(e, n.instance.exports)) : _.then(e => e.arrayBuffer()).then(e => WebAssembly.instantiate(e, r)).then(n => Object.assign(e, n.instance.exports))
    }, c.x()
}();