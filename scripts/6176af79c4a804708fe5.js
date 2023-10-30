(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["6945"], {
        78349: function(t, n, r) {
            "use strict";
            t.exports.parse = function(t) {
                var n = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
                if (!n) return null;
                n.shift();
                var r = null,
                    e = [];
                n[2] && (r = (i = n[2].split("-")).shift(), e = i);
                var o = [];
                n[5] && (o = n[5].split("-")).shift();
                var u = [];
                if (n[6]) {
                    (i = n[6].split("-")).shift();
                    for (var i, c, a = []; i.length;) {
                        var f = i.shift();
                        1 === f.length ? c ? (u.push({
                            singleton: c,
                            extension: a
                        }), c = f, a = []) : c = f : a.push(f)
                    }
                    u.push({
                        singleton: c,
                        extension: a
                    })
                }
                var s = [];
                n[7] && ((s = n[7].split("-")).shift(), s.shift());
                var l = [];
                return n[8] && (l = n[8].split("-")).shift(), {
                    langtag: {
                        language: {
                            language: r,
                            extlang: e
                        },
                        script: n[3] || null,
                        region: n[4] || null,
                        variant: o,
                        extension: u,
                        privateuse: s
                    },
                    privateuse: l,
                    grandfathered: {
                        irregular: n[0] || null,
                        regular: n[1] || null
                    }
                }
            }
        },
        458389: function(t, n, r) {
            var e = r("594140"),
                o = r("564414"),
                u = r("725502"),
                i = r("591350"),
                c = r("476540"),
                a = r("381178"),
                f = Object.prototype.hasOwnProperty;
            t.exports = function(t, n) {
                var r = u(t),
                    s = !r && o(t),
                    l = !r && !s && i(t),
                    p = !r && !s && !l && a(t),
                    b = r || s || l || p,
                    h = b ? e(t.length, String) : [],
                    v = h.length;
                for (var d in t)(n || f.call(t, d)) && !(b && ("length" == d || l && ("offset" == d || "parent" == d) || p && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || c(d, v))) && h.push(d);
                return h
            }
        },
        437083: function(t, n, r) {
            var e = r("561449"),
                o = r("877297");
            t.exports = function(t) {
                return o(e(t))
            }
        },
        562132: function(t, n, r) {
            var e = r("33426"),
                o = r("136047"),
                u = r("270879"),
                i = {};
            i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = !0, i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = !1;
            t.exports = function(t) {
                return u(t) && o(t.length) && !!i[e(t)]
            }
        },
        205873: function(t, n, r) {
            var e = r("733228"),
                o = r("541349"),
                u = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!e(t)) return o(t);
                var n = [];
                for (var r in Object(t)) u.call(t, r) && "constructor" != r && n.push(r);
                return n
            }
        },
        329252: function(t, n, r) {
            var e = r("877297"),
                o = r("164099");
            t.exports = function(t) {
                return e(o(t))
            }
        },
        594140: function(t, n, r) {
            t.exports = function(t, n) {
                for (var r = -1, e = Array(t); ++r < t;) e[r] = n(r);
                return e
            }
        },
        492692: function(t, n, r) {
            t.exports = function(t) {
                return function(n) {
                    return t(n)
                }
            }
        },
        957478: function(t, n, r) {
            var e = r("626785");
            t.exports = function(t, n) {
                return e(n, function(n) {
                    return t[n]
                })
            }
        },
        561449: function(t, n, r) {
            t.exports = function(t, n) {
                var r = -1,
                    e = t.length;
                for (n || (n = Array(e)); ++r < e;) n[r] = t[r];
                return n
            }
        },
        733228: function(t, n, r) {
            var e = Object.prototype;
            t.exports = function(t) {
                var n = t && t.constructor;
                return t === ("function" == typeof n && n.prototype || e)
            }
        },
        541349: function(t, n, r) {
            var e = r("761197")(Object.keys, Object);
            t.exports = e
        },
        276440: function(t, n, r) {
            t = r.nmd(t);
            var e = r("447414"),
                o = "object" == typeof n && n && !n.nodeType && n,
                u = o && "object" == typeof t && t && !t.nodeType && t,
                i = u && u.exports === o && e.process,
                c = function() {
                    try {
                        var t = u && u.require && u.require("util").types;
                        if (t) return t;
                        return i && i.binding && i.binding("util")
                    } catch (t) {}
                }();
            t.exports = c
        },
        761197: function(t, n, r) {
            t.exports = function(t, n) {
                return function(r) {
                    return t(n(r))
                }
            }
        },
        877297: function(t, n, r) {
            var e = r("68421");
            t.exports = function(t, n) {
                var r = -1,
                    o = t.length,
                    u = o - 1;
                for (n = void 0 === n ? o : n; ++r < n;) {
                    var i = e(r, u),
                        c = t[i];
                    t[i] = t[r], t[r] = c
                }
                return t.length = n, t
            }
        },
        591350: function(t, n, r) {
            t = r.nmd(t);
            var e = r("690516"),
                o = r("221386"),
                u = "object" == typeof n && n && !n.nodeType && n,
                i = u && "object" == typeof t && t && !t.nodeType && t,
                c = i && i.exports === u ? e.Buffer : void 0,
                a = c ? c.isBuffer : void 0;
            t.exports = a || o
        },
        381178: function(t, n, r) {
            var e = r("562132"),
                o = r("492692"),
                u = r("276440"),
                i = u && u.isTypedArray,
                c = i ? o(i) : e;
            t.exports = c
        },
        466731: function(t, n, r) {
            var e = r("458389"),
                o = r("205873"),
                u = r("603108");
            t.exports = function(t) {
                return u(t) ? e(t) : o(t)
            }
        },
        375128: function(t, n, r) {
            var e = r("437083"),
                o = r("329252"),
                u = r("725502");
            t.exports = function(t) {
                return (u(t) ? e : o)(t)
            }
        },
        221386: function(t, n, r) {
            t.exports = function() {
                return !1
            }
        },
        164099: function(t, n, r) {
            var e = r("957478"),
                o = r("466731");
            t.exports = function(t) {
                return null == t ? [] : e(t, o(t))
            }
        },
        48174: function(t, n, r) {
            "use strict";

            function e(t, n) {
                if (t.length !== n.length) return !1;
                for (let r = 0; r < n.length && r < t.length; r++)
                    if (!Object.is(t[r], n[r])) return !1;
                return !0
            }
            r.r(n), r.d(n, {
                default: function() {
                    return e
                }
            })
        },
        775560: function(t, n, r) {
            "use strict";
            r.r(n), r.d(n, {
                useForceUpdate: function() {
                    return e.default
                },
                useStableMemo: function() {
                    return o.default
                },
                useLazyValue: function() {
                    return u.default
                }
            });
            var e = r("14716"),
                o = r("745510"),
                u = r("315378")
        },
        14716: function(t, n, r) {
            "use strict";
            r.r(n), r.d(n, {
                default: function() {
                    return o
                }
            });
            var e = r("884691");

            function o() {
                let [, t] = (0, e.useState)({});
                return (0, e.useCallback)(() => t({}), [])
            }
        },
        315378: function(t, n, r) {
            "use strict";
            r.r(n), r.d(n, {
                default: function() {
                    return u
                }
            });
            var e = r("884691");
            let o = {};

            function u(t) {
                let n = (0, e.useRef)(o);
                return n.current === o && (n.current = t()), n.current
            }
        },
        745510: function(t, n, r) {
            "use strict";
            r.r(n), r.d(n, {
                default: function() {
                    return i
                }
            });
            var e = r("884691"),
                o = r("48174");
            let u = [];

            function i(t, n) {
                let r = (0, e.useRef)(),
                    i = (0, e.useRef)(u);
                return i.current === u ? (r.current = t(), i.current = n) : !(0, o.default)(n, i.current) && (r.current = t(), i.current = n), r.current
            }
        }
    }
]);