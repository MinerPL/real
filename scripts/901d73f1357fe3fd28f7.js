! function() {
    var t, n, r, e, o, u, i, c = {
            817295: function(t, n, r) {
                "use strict";

                function e() {
                    return r.el("225629").then(r.bind(r, "225629"))
                }
                async function o(t, n, r, o, u) {
                    let i = await e();
                    return i.crop_gif(t, n, r, o, u)
                }
                r.r(n), r.d(n, {
                    default: function() {
                        return e
                    },
                    wasmCropGIF: function() {
                        return o
                    }
                })
            },
            528151: function(t, n, r) {
                "use strict";
                var e = r("664144");
                t.exports = function(t, n) {
                    var r = [][t];
                    return !!r && e(function() {
                        r.call(null, n || function() {
                            return 1
                        }, 1)
                    })
                }
            },
            383053: function(t, n, r) {
                "use strict";
                var e = r("727204"),
                    o = r("116180"),
                    u = r("949580"),
                    i = r("308274"),
                    c = TypeError,
                    f = function(t) {
                        return function(n, r, f, s) {
                            e(r);
                            var a = o(n),
                                _ = u(a),
                                E = i(a),
                                p = t ? E - 1 : 0,
                                O = t ? -1 : 1;
                            if (f < 2)
                                for (;;) {
                                    if (p in _) {
                                        s = _[p], p += O;
                                        break
                                    }
                                    if (p += O, t ? p < 0 : E <= p) throw c("Reduce of empty array with no initial value")
                                }
                            for (; t ? p >= 0 : E > p; p += O) p in _ && (s = r(s, _[p], p, a));
                            return s
                        }
                    };
                t.exports = {
                    left: f(!1),
                    right: f(!0)
                }
            },
            681802: function(t, n, r) {
                "use strict";
                var e = r("53786"),
                    o = r("125359"),
                    u = r("745795"),
                    i = r("174669")("toStringTag"),
                    c = Object,
                    f = "Arguments" === u(function() {
                        return arguments
                    }()),
                    s = function(t, n) {
                        try {
                            return t[n]
                        } catch (t) {}
                    };
                t.exports = e ? u : function(t) {
                    var n, r, e;
                    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(r = s(n = c(t), i)) ? r : f ? u(n) : "Object" === (e = u(n)) && o(n.callee) ? "Arguments" : e
                }
            },
            106106: function(t, n, r) {
                "use strict";
                var e = r("503486"),
                    o = r("745795");
                t.exports = "process" === o(e.process)
            },
            350142: function(t, n, r) {
                "use strict";
                var e = r("64980"),
                    o = Error,
                    u = e("".replace),
                    i = String(o("zxcasd").stack),
                    c = /\n\s*at [^:]*:[^\n]*/,
                    f = c.test(i);
                t.exports = function(t, n) {
                    if (f && "string" == typeof t && !o.prepareStackTrace)
                        for (; n--;) t = u(t, c, "");
                    return t
                }
            },
            571503: function(t, n, r) {
                "use strict";
                var e = r("366483"),
                    o = r("350142"),
                    u = r("19125"),
                    i = Error.captureStackTrace;
                t.exports = function(t, n, r, c) {
                    u && (i ? i(t, n) : e(t, "stack", o(r, c)))
                }
            },
            19125: function(t, n, r) {
                "use strict";
                var e = r("664144"),
                    o = r("16447");
                t.exports = !e(function() {
                    var t = Error("a");
                    return !("stack" in t) || (Object.defineProperty(t, "stack", o(1, 7)), 7 !== t.stack)
                })
            },
            145661: function(t, n, r) {
                "use strict";
                var e = r("406219"),
                    o = Function.prototype,
                    u = o.apply,
                    i = o.call;
                t.exports = "object" == typeof Reflect && Reflect.apply || (e ? i.bind(u) : function() {
                    return i.apply(u, arguments)
                })
            },
            688358: function(t, n, r) {
                "use strict";
                var e = r("125359"),
                    o = r("472960"),
                    u = r("823493");
                t.exports = function(t, n, r) {
                    var i, c;
                    return u && e(i = n.constructor) && i !== r && o(c = i.prototype) && c !== r.prototype && u(t, c), t
                }
            },
            561051: function(t, n, r) {
                "use strict";
                var e = r("472960"),
                    o = r("366483");
                t.exports = function(t, n) {
                    e(n) && "cause" in n && o(t, "cause", n.cause)
                }
            },
            391358: function(t, n, r) {
                "use strict";
                var e = r("998270");
                t.exports = function(t, n) {
                    return void 0 === t ? arguments.length < 2 ? "" : n : e(t)
                }
            },
            681645: function(t, n, r) {
                "use strict";
                var e = r("541368").f;
                t.exports = function(t, n, r) {
                    r in t || e(t, r, {
                        configurable: !0,
                        get: function() {
                            return n[r]
                        },
                        set: function(t) {
                            n[r] = t
                        }
                    })
                }
            },
            53786: function(t, n, r) {
                "use strict";
                var e = r("174669")("toStringTag"),
                    o = {};
                o[e] = "z", t.exports = "[object z]" === String(o)
            },
            998270: function(t, n, r) {
                "use strict";
                var e = r("681802"),
                    o = String;
                t.exports = function(t) {
                    if ("Symbol" === e(t)) throw TypeError("Cannot convert a Symbol value to a string");
                    return o(t)
                }
            },
            802490: function(t, n, r) {
                "use strict";
                var e = r("434978"),
                    o = r("59393"),
                    u = r("366483"),
                    i = r("470984"),
                    c = r("823493"),
                    f = r("539536"),
                    s = r("681645"),
                    a = r("688358"),
                    _ = r("391358"),
                    E = r("561051"),
                    p = r("571503"),
                    O = r("814026"),
                    l = r("140925");
                t.exports = function(t, n, r, A) {
                    var T = "stackTraceLimit",
                        d = A ? 2 : 1,
                        R = t.split("."),
                        I = R[R.length - 1],
                        y = e.apply(null, R);
                    if (y) {
                        var h = y.prototype;
                        if (!l && o(h, "cause") && delete h.cause, !r) return y;
                        var v = e("Error"),
                            N = n(function(t, n) {
                                var r = _(A ? n : t, void 0),
                                    e = A ? new y(t) : new y;
                                return void 0 !== r && u(e, "message", r), p(e, N, e.stack, 2), this && i(h, this) && a(e, this, N), arguments.length > d && E(e, arguments[d]), e
                            });
                        if (N.prototype = h, "Error" !== I ? c ? c(N, v) : f(N, v, {
                                name: !0
                            }) : O && T in y && (s(N, y, T), s(N, y, "prepareStackTrace")), f(N, y), !l) try {
                            h.name !== I && u(h, "name", I), h.constructor = N
                        } catch (t) {}
                        return N
                    }
                }
            },
            808653: function(t, n, r) {
                "use strict";
                var e = r("859514"),
                    o = r("383053").left,
                    u = r("528151"),
                    i = r("693523"),
                    c = r("106106");
                e({
                    target: "Array",
                    proto: !0,
                    forced: !c && i > 79 && i < 83 || !u("reduce")
                }, {
                    reduce: function(t) {
                        var n = arguments.length;
                        return o(this, t, n, n > 1 ? arguments[1] : void 0)
                    }
                })
            },
            70102: function(t, n, r) {
                "use strict";
                var e = r("859514"),
                    o = r("503486"),
                    u = r("145661"),
                    i = r("802490"),
                    c = "WebAssembly",
                    WebAssembly = o[c],
                    f = 7 !== Error("e", {
                        cause: 7
                    }).cause,
                    s = function(t, n) {
                        var r = {};
                        r[t] = i(t, n, f), e({
                            global: !0,
                            constructor: !0,
                            arity: 1,
                            forced: f
                        }, r)
                    },
                    a = function(t, n) {
                        if (WebAssembly && WebAssembly[t]) {
                            var r = {};
                            r[t] = i(c + "." + t, n, f), e({
                                target: c,
                                stat: !0,
                                constructor: !0,
                                arity: 1,
                                forced: f
                            }, r)
                        }
                    };
                s("Error", function(t) {
                    return function(n) {
                        return u(t, this, arguments)
                    }
                }), s("EvalError", function(t) {
                    return function(n) {
                        return u(t, this, arguments)
                    }
                }), s("RangeError", function(t) {
                    return function(n) {
                        return u(t, this, arguments)
                    }
                }), s("ReferenceError", function(t) {
                    return function(n) {
                        return u(t, this, arguments)
                    }
                }), s("SyntaxError", function(t) {
                    return function(n) {
                        return u(t, this, arguments)
                    }
                }), s("TypeError", function(t) {
                    return function(n) {
                        return u(t, this, arguments)
                    }
                }), s("URIError", function(t) {
                    return function(n) {
                        return u(t, this, arguments)
                    }
                }), a("CompileError", function(t) {
                    return function(n) {
                        return u(t, this, arguments)
                    }
                }), a("LinkError", function(t) {
                    return function(n) {
                        return u(t, this, arguments)
                    }
                }), a("RuntimeError", function(t) {
                    return function(n) {
                        return u(t, this, arguments)
                    }
                })
            },
            75015: function(t, n, r) {
                "use strict";
                r.r(n), r.d(n, {
                    UploadTypes: function() {
                        return u
                    },
                    EDITING_CONTAINER_WIDTH: function() {
                        return f
                    },
                    USER_BANNER_MAX_WIDTH: function() {
                        return s
                    },
                    USER_BANNER_MAX_HEIGHT: function() {
                        return a
                    },
                    GUILD_BANNER_MAX_WIDTH: function() {
                        return _
                    },
                    GUILD_BANNER_MAX_HEIGHT: function() {
                        return E
                    },
                    SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function() {
                        return p
                    },
                    SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
                        return O
                    },
                    HOME_HEADER_MAX_WIDTH: function() {
                        return l
                    },
                    HOME_HEADER_MAX_HEIGHT: function() {
                        return A
                    },
                    BANNER_ASPECT_RATIO: function() {
                        return T
                    },
                    GUILD_BANNER_ASPECT_RATIO: function() {
                        return d
                    },
                    SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
                        return R
                    },
                    HOME_HEADER_ASPECT_RATIO: function() {
                        return I
                    },
                    MAX_BANNER_OVERLAY_HEIGHT: function() {
                        return y
                    },
                    MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
                        return h
                    },
                    MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
                        return v
                    },
                    MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
                        return N
                    },
                    VIDEO_BACKGROUND_ASPECT_RATIO: function() {
                        return b
                    },
                    MAX_VIDEO_OVERLAY_HEIGHT: function() {
                        return D
                    },
                    MessageTypes: function() {
                        return i
                    }
                });
                var e, o, u, i, c = r("917219");
                (e = u || (u = {}))[e.AVATAR = 0] = "AVATAR", e[e.BANNER = 1] = "BANNER", e[e.GUILD_BANNER = 2] = "GUILD_BANNER", e[e.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", e[e.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", e[e.HOME_HEADER = 5] = "HOME_HEADER", e[e.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
                let f = 568,
                    s = 2400,
                    a = 848,
                    _ = 2400,
                    E = 1350,
                    p = 2400,
                    O = 960,
                    l = 2400,
                    A = 600,
                    T = 17 / 6,
                    d = 16 / 9,
                    R = 2.5,
                    I = 4,
                    y = f / T,
                    h = f / d,
                    v = f / R,
                    N = f / I,
                    b = c.BACKGROUND_REPLACEMENT_SIZE.width / c.BACKGROUND_REPLACEMENT_SIZE.height,
                    D = f / b;
                (o = i || (i = {}))[o.CROP_GIF_START = 0] = "CROP_GIF_START", o[o.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", o[o.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
            },
            224915: function(t, n, r) {
                "use strict";
                r.r(n), r("854508");
                var e = r("817295");
                r("129334");
                var o = r("75015");
                async function u(t, n, r, u, i) {
                    try {
                        let c = await (0, e.wasmCropGIF)(t, n, r, u, i);
                        self.postMessage({
                            type: o.MessageTypes.CROP_GIF_COMPLETE,
                            result: c
                        })
                    } catch (t) {
                        self.postMessage({
                            type: o.MessageTypes.CROP_GIF_ERROR
                        })
                    }
                }
                self.addEventListener("message", t => {
                    let {
                        data: n
                    } = t;
                    if (n.type === o.MessageTypes.CROP_GIF_START) {
                        let {
                            gif: t,
                            x: r,
                            y: e,
                            width: o,
                            height: i
                        } = n;
                        u(t, r, e, o, i)
                    }
                })
            },
            917219: function(t, n, r) {
                "use strict";
                var e, o, u, i;
                r.r(n), r.d(n, {
                    VideoFilterType: function() {
                        return e
                    },
                    DefaultVideoBackground: function() {
                        return o
                    },
                    ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: function() {
                        return c
                    },
                    DEFAULT_VIDEO_BACKGROUND_SORT: function() {
                        return f
                    },
                    BLUR_BACKGROUND_OPTION: function() {
                        return s
                    },
                    BACKGROUND_REPLACEMENT_SIZE: function() {
                        return a
                    },
                    MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                        return _
                    }
                }), r("808653"), (u = e || (e = {}))[u.BACKGROUND = 0] = "BACKGROUND", (i = o || (o = {}))[i.OPTION_1 = 0] = "OPTION_1", i[i.OPTION_2 = 1] = "OPTION_2", i[i.OPTION_3 = 2] = "OPTION_3", i[i.OPTION_4 = 3] = "OPTION_4", i[i.OPTION_7 = 7] = "OPTION_7", i[i.OPTION_8 = 8] = "OPTION_8", i[i.OPTION_9 = 9] = "OPTION_9", i[i.OPTION_10 = 10] = "OPTION_10";
                let c = [7, 8, 9, 10],
                    f = [7, 8, 9, 10, 0, 1, 2, 3].reduce((t, n, r) => ({
                        ...t,
                        [n]: r
                    }), {}),
                    s = "blur",
                    a = {
                        width: 1280,
                        height: 720
                    },
                    _ = 10485760
            }
        },
        f = {};

    function s(t) {
        var n = f[t];
        if (void 0 !== n) return n.exports;
        var r = f[t] = {
            id: t,
            loaded: !1,
            exports: {}
        };
        return c[t](r, r.exports, s), r.loaded = !0, r.exports
    }
    s.m = c, s.x = function() {
        var t = s.O(void 0, ["31897", "58409", "3341"], function() {
            return s("224915")
        });
        return t = s.O(t)
    }, t = s.x, s.x = function() {
        return Promise.all(["31897", "3341", "58409"].map(s.e, s)).then(t)
    }, s.es = function(t, n) {
        return Object.keys(t).forEach(function(r) {
            "default" !== r && !Object.prototype.hasOwnProperty.call(n, r) && Object.defineProperty(n, r, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        }), t
    }, n = {
        135722: ["31897"],
        188503: ["31897"],
        224915: ["31897", "58409", "3341", "39703"],
        225629: ["22843", "25285"],
        380029: ["58409", "3341"],
        399758: ["31897"],
        467592: ["31897"],
        519705: ["31897"],
        622618: ["31897"],
        632760: ["58409", "3341", "22843"],
        748375: ["58409", "3341"],
        783260: ["58409"],
        826269: ["31897"]
    }, s.el = function(t) {
        var r = n[t];
        return void 0 === r ? Promise.resolve() : r.length > 1 ? Promise.all(r.map(s.e)) : s.e(r[0])
    }, s.f = {}, s.e = function(t) {
        return Promise.all(Object.keys(s.f).reduce(function(n, r) {
            return s.f[r](t, n), n
        }, []))
    }, s.p = "/assets/", s.u = function(t) {
        return ({
            22843: "bfd4701fcb8772780564.js",
            25285: "2baa5a41ace6a944e6dc.js",
            31897: "8008dff0e97e29f17606.js",
            3341: "40fad28f01da56375e6a.js",
            58409: "d179fa5fdde237bd188f.js"
        })[t]
    }, s.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }, r = [], s.O = function(t, n, e, o) {
        if (n) {
            o = o || 0;
            for (var u = r.length; u > 0 && r[u - 1][2] > o; u--) r[u] = r[u - 1];
            r[u] = [n, e, o];
            return
        }
        for (var i = 1 / 0, u = 0; u < r.length; u++) {
            for (var n = r[u][0], e = r[u][1], o = r[u][2], c = !0, f = 0; f < n.length; f++) i >= o && Object.keys(s.O).every(function(t) {
                return s.O[t](n[f])
            }) ? n.splice(f--, 1) : (c = !1, o < i && (i = o));
            if (c) {
                r.splice(u--, 1);
                var a = e();
                void 0 !== a && (t = a)
            }
        }
        return t
    }, s.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), e = "function" == typeof Symbol ? Symbol("webpack queues") : "__webpack_queues__", o = "function" == typeof Symbol ? Symbol("webpack exports") : "__webpack_exports__", u = "function" == typeof Symbol ? Symbol("webpack error") : "__webpack_error__", i = function(t) {
        t && t.d < 1 && (t.d = 1, t.forEach(function(t) {
            t.r--
        }), t.forEach(function(t) {
            t.r-- ? t.r++ : t()
        }))
    }, s.a = function(t, n, r) {
        r && ((c = []).d = -1);
        var c, f, s, a, _ = new Set,
            E = t.exports,
            p = new Promise(function(t, n) {
                a = n, s = t
            });
        p[o] = E, p[e] = function(t) {
            c && t(c), _.forEach(t), p.catch(function() {})
        }, t.exports = p, n(function(t) {
            f = t.map(function(t) {
                if (null !== t && "object" == typeof t) {
                    if (t[e]) return t;
                    if (t.then) {
                        var n = [];
                        n.d = 0, t.then(function(t) {
                            r[o] = t, i(n)
                        }, function(t) {
                            r[u] = t, i(n)
                        });
                        var r = {};
                        return r[e] = function(t) {
                            t(n)
                        }, r
                    }
                }
                var c = {};
                return c[e] = function() {}, c[o] = t, c
            });
            var n, r = function() {
                    return f.map(function(t) {
                        if (t[u]) throw t[u];
                        return t[o]
                    })
                },
                s = new Promise(function(t) {
                    (n = function() {
                        t(r)
                    }).r = 0;
                    var o = function(t) {
                        t === c || _.has(t) || (_.add(t), t && !t.d && (n.r++, t.push(n)))
                    };
                    f.map(function(t) {
                        t[e](o)
                    })
                });
            return n.r ? s : r()
        }, function(t) {
            t ? a(p[u] = t) : s(E), i(c)
        }), c && c.d < 0 && (c.d = 0)
    }, s.d = function(t, n) {
        for (var r in n) s.o(n, r) && !s.o(t, r) && Object.defineProperty(t, r, {
            enumerable: !0,
            get: n[r]
        })
    }, s.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, s.n = function(t) {
        return t && t.__esModule ? t.default : t
    }, s.nmd = function(t) {
        return t.paths = [], !t.children && (t.children = []), t
    }, s.hmd = function(t) {
        return !(t = Object.create(t)).children && (t.children = []), Object.defineProperty(t, "exports", {
            enumerable: !0,
            set: function() {
                throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + t.id)
            }
        }), t
    }, ! function() {
        var t = {
            39703: 1
        };
        s.f.i = function(n, r) {
            !t[n] && importScripts(s.p + s.u(n))
        };
        var n = this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || [],
            r = n.push.bind(n);
        n.push = function(n) {
            var e = n[0],
                o = n[1],
                u = n[2];
            for (var i in o) s.o(o, i) && (s.m[i] = o[i]);
            for (u && u(s); e.length;) t[e.pop()] = 1;
            r(n)
        }
    }(), s.v = (t, n, r, e) => {
        var o = fetch(s.p + r);
        return "function" == typeof WebAssembly.instantiateStreaming ? WebAssembly.instantiateStreaming(o, e).then(n => Object.assign(t, n.instance.exports)) : o.then(t => t.arrayBuffer()).then(t => WebAssembly.instantiate(t, e)).then(n => Object.assign(t, n.instance.exports))
    }, s.x()
}();