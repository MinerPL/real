(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["12967"], {
        78349: function(t, r, n) {
            "use strict";
            t.exports.parse = function(t) {
                var r = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
                if (!r) return null;
                r.shift();
                var n = null,
                    e = [];
                r[2] && (n = (i = r[2].split("-")).shift(), e = i);
                var o = [];
                r[5] && (o = r[5].split("-")).shift();
                var u = [];
                if (r[6]) {
                    (i = r[6].split("-")).shift();
                    for (var i, a, c = []; i.length;) {
                        var f = i.shift();
                        1 === f.length ? a ? (u.push({
                            singleton: a,
                            extension: c
                        }), a = f, c = []) : a = f : c.push(f)
                    }
                    u.push({
                        singleton: a,
                        extension: c
                    })
                }
                var s = [];
                r[7] && ((s = r[7].split("-")).shift(), s.shift());
                var l = [];
                return r[8] && (l = r[8].split("-")).shift(), {
                    langtag: {
                        language: {
                            language: n,
                            extlang: e
                        },
                        script: r[3] || null,
                        region: r[4] || null,
                        variant: o,
                        extension: u,
                        privateuse: s
                    },
                    privateuse: l,
                    grandfathered: {
                        irregular: r[0] || null,
                        regular: r[1] || null
                    }
                }
            }
        },
        458389: function(t, r, n) {
            var e = n("594140"),
                o = n("564414"),
                u = n("725502"),
                i = n("591350"),
                a = n("476540"),
                c = n("381178"),
                f = Object.prototype.hasOwnProperty;
            t.exports = function(t, r) {
                var n = u(t),
                    s = !n && o(t),
                    l = !n && !s && i(t),
                    p = !n && !s && !l && c(t),
                    h = n || s || l || p,
                    b = h ? e(t.length, String) : [],
                    d = b.length;
                for (var g in t)(r || f.call(t, g)) && !(h && ("length" == g || l && ("offset" == g || "parent" == g) || p && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || a(g, d))) && b.push(g);
                return b
            }
        },
        437083: function(t, r, n) {
            var e = n("561449"),
                o = n("877297");
            t.exports = function(t) {
                return o(e(t))
            }
        },
        562132: function(t, r, n) {
            var e = n("33426"),
                o = n("136047"),
                u = n("270879"),
                i = {};
            i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = !0, i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = !1;
            t.exports = function(t) {
                return u(t) && o(t.length) && !!i[e(t)]
            }
        },
        205873: function(t, r, n) {
            var e = n("733228"),
                o = n("541349"),
                u = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!e(t)) return o(t);
                var r = [];
                for (var n in Object(t)) u.call(t, n) && "constructor" != n && r.push(n);
                return r
            }
        },
        329252: function(t, r, n) {
            var e = n("877297"),
                o = n("164099");
            t.exports = function(t) {
                return e(o(t))
            }
        },
        594140: function(t, r, n) {
            t.exports = function(t, r) {
                for (var n = -1, e = Array(t); ++n < t;) e[n] = r(n);
                return e
            }
        },
        492692: function(t, r, n) {
            t.exports = function(t) {
                return function(r) {
                    return t(r)
                }
            }
        },
        957478: function(t, r, n) {
            var e = n("626785");
            t.exports = function(t, r) {
                return e(r, function(r) {
                    return t[r]
                })
            }
        },
        561449: function(t, r, n) {
            t.exports = function(t, r) {
                var n = -1,
                    e = t.length;
                for (r || (r = Array(e)); ++n < e;) r[n] = t[n];
                return r
            }
        },
        733228: function(t, r, n) {
            var e = Object.prototype;
            t.exports = function(t) {
                var r = t && t.constructor;
                return t === ("function" == typeof r && r.prototype || e)
            }
        },
        541349: function(t, r, n) {
            var e = n("761197")(Object.keys, Object);
            t.exports = e
        },
        276440: function(t, r, n) {
            t = n.nmd(t);
            var e = n("447414"),
                o = "object" == typeof r && r && !r.nodeType && r,
                u = o && "object" == typeof t && t && !t.nodeType && t,
                i = u && u.exports === o && e.process,
                a = function() {
                    try {
                        var t = u && u.require && u.require("util").types;
                        if (t) return t;
                        return i && i.binding && i.binding("util")
                    } catch (t) {}
                }();
            t.exports = a
        },
        761197: function(t, r, n) {
            t.exports = function(t, r) {
                return function(n) {
                    return t(r(n))
                }
            }
        },
        877297: function(t, r, n) {
            var e = n("68421");
            t.exports = function(t, r) {
                var n = -1,
                    o = t.length,
                    u = o - 1;
                for (r = void 0 === r ? o : r; ++n < r;) {
                    var i = e(n, u),
                        a = t[i];
                    t[i] = t[n], t[n] = a
                }
                return t.length = r, t
            }
        },
        591350: function(t, r, n) {
            t = n.nmd(t);
            var e = n("690516"),
                o = n("221386"),
                u = "object" == typeof r && r && !r.nodeType && r,
                i = u && "object" == typeof t && t && !t.nodeType && t,
                a = i && i.exports === u ? e.Buffer : void 0,
                c = a ? a.isBuffer : void 0;
            t.exports = c || o
        },
        381178: function(t, r, n) {
            var e = n("562132"),
                o = n("492692"),
                u = n("276440"),
                i = u && u.isTypedArray,
                a = i ? o(i) : e;
            t.exports = a
        },
        466731: function(t, r, n) {
            var e = n("458389"),
                o = n("205873"),
                u = n("603108");
            t.exports = function(t) {
                return u(t) ? e(t) : o(t)
            }
        },
        375128: function(t, r, n) {
            var e = n("437083"),
                o = n("329252"),
                u = n("725502");
            t.exports = function(t) {
                return (u(t) ? e : o)(t)
            }
        },
        221386: function(t, r, n) {
            t.exports = function() {
                return !1
            }
        },
        164099: function(t, r, n) {
            var e = n("957478"),
                o = n("466731");
            t.exports = function(t) {
                return null == t ? [] : e(t, o(t))
            }
        },
        48174: function(t, r, n) {
            "use strict";

            function e(t, r) {
                if (t.length !== r.length) return !1;
                for (let n = 0; n < r.length && n < t.length; n++)
                    if (!Object.is(t[n], r[n])) return !1;
                return !0
            }
            n.r(r), n.d(r, {
                default: function() {
                    return e
                }
            })
        },
        775560: function(t, r, n) {
            "use strict";
            n.r(r), n.d(r, {
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
            var e = n("14716"),
                o = n("745510"),
                u = n("315378")
        },
        14716: function(t, r, n) {
            "use strict";
            n.r(r), n.d(r, {
                default: function() {
                    return o
                }
            });
            var e = n("884691");

            function o() {
                let [, t] = (0, e.useState)({});
                return (0, e.useCallback)(() => t({}), [])
            }
        },
        315378: function(t, r, n) {
            "use strict";
            n.r(r), n.d(r, {
                default: function() {
                    return u
                }
            });
            var e = n("884691");
            let o = {};

            function u(t) {
                let r = (0, e.useRef)(o);
                return r.current === o && (r.current = t()), r.current
            }
        },
        745510: function(t, r, n) {
            "use strict";
            n.r(r), n.d(r, {
                default: function() {
                    return i
                }
            });
            var e = n("884691"),
                o = n("48174");
            let u = [];

            function i(t, r) {
                let n = (0, e.useRef)(),
                    i = (0, e.useRef)(u);
                return i.current === u ? (n.current = t(), i.current = r) : !(0, o.default)(r, i.current) && (n.current = t(), i.current = r), n.current
            }
        },
        723251: function(t, r, n) {
            "use strict";
            n.r(r), n.d(r, {
                thumbHashToApproximateAspectRatio: function() {
                    return e
                },
                rgbaToDataURL: function() {
                    return o
                },
                thumbHashToDataURL: function() {
                    return u
                }
            });

            function e(t) {
                let r = t[3],
                    n = 128 & t[2],
                    e = 128 & t[4];
                return (e ? n ? 5 : 7 : 7 & r) / (e ? 7 & r : n ? 5 : 7)
            }

            function o(t, r, n) {
                let e = 4 * t + 1,
                    o = 6 + r * (5 + e),
                    u = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, t >> 8, 255 & t, 0, 0, r >> 8, 255 & r, 8, 6, 0, 0, 0, 0, 0, 0, 0, o >>> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, 73, 68, 65, 84, 120, 1],
                    i = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
                    a = 1,
                    c = 0;
                for (let t = 0, o = 0, i = e - 1; t < r; t++, i += e - 1)
                    for (u.push(t + 1 < r ? 0 : 1, 255 & e, e >> 8, 255 & ~e, e >> 8 ^ 255, 0), c = (c + a) % 65521; o < i; o++) {
                        let t = 255 & n[o];
                        u.push(t), c = (c + (a = (a + t) % 65521)) % 65521
                    }
                for (let [t, r] of(u.push(c >> 8, 255 & c, a >> 8, 255 & a, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
                        [12, 29],
                        [37, 41 + o]
                    ])) {
                    let n = -1;
                    for (let e = t; e < r; e++) n ^= u[e], n = (n = n >>> 4 ^ i[15 & n]) >>> 4 ^ i[15 & n];
                    n = ~n, u[r++] = n >>> 24, u[r++] = n >> 16 & 255, u[r++] = n >> 8 & 255, u[r++] = 255 & n
                }
                return "data:image/png;base64," + btoa(String.fromCharCode(...u))
            }

            function u(t) {
                let r = function(t) {
                    let {
                        PI: r,
                        min: n,
                        max: o,
                        cos: u,
                        round: i
                    } = Math, a = t[0] | t[1] << 8 | t[2] << 16, c = t[3] | t[4] << 8, f = (63 & a) / 63, s = (a >> 6 & 63) / 31.5 - 1, l = (a >> 12 & 63) / 31.5 - 1, p = a >> 23, h = (c >> 3 & 63) / 63, b = (c >> 9 & 63) / 63, d = c >> 15, g = o(3, d ? p ? 5 : 7 : 7 & c), v = o(3, d ? 7 & c : p ? 5 : 7), y = p ? (15 & t[5]) / 15 : 1, j = (t[5] >> 4) / 15, x = p ? 6 : 5, z = 0, A = (r, n, e) => {
                        let o = [];
                        for (let u = 0; u < n; u++)
                            for (let i = u ? 0 : 1; i * n < r * (n - u); i++) o.push(((t[x + (z >> 1)] >> ((1 & z++) << 2) & 15) / 7.5 - 1) * e);
                        return o
                    }, m = A(g, v, (a >> 18 & 31) / 31), k = A(3, 3, 1.25 * h), O = A(3, 3, 1.25 * b), w = p && A(5, 5, j), R = e(t), T = i(R > 1 ? 32 : 32 * R), U = i(R > 1 ? 32 / R : 32), B = new Uint8Array(T * U * 4), C = [], S = [];
                    for (let t = 0, e = 0; t < U; t++)
                        for (let i = 0; i < T; i++, e += 4) {
                            let a = f,
                                c = s,
                                h = l,
                                b = y;
                            for (let t = 0, n = o(g, p ? 5 : 3); t < n; t++) C[t] = u(r / T * (i + .5) * t);
                            for (let n = 0, e = o(v, p ? 5 : 3); n < e; n++) S[n] = u(r / U * (t + .5) * n);
                            for (let t = 0, r = 0; t < v; t++)
                                for (let n = t ? 0 : 1, e = 2 * S[t]; n * v < g * (v - t); n++, r++) a += m[r] * C[n] * e;
                            for (let t = 0, r = 0; t < 3; t++)
                                for (let n = t ? 0 : 1, e = 2 * S[t]; n < 3 - t; n++, r++) {
                                    let t = C[n] * e;
                                    c += k[r] * t, h += O[r] * t
                                }
                            if (p)
                                for (let t = 0, r = 0; t < 5; t++)
                                    for (let n = t ? 0 : 1, e = 2 * S[t]; n < 5 - t; n++, r++) b += w[r] * C[n] * e;
                            let d = a - 2 / 3 * c,
                                j = (3 * a - d + h) / 2,
                                x = j - h;
                            B[e] = o(0, 255 * n(1, j)), B[e + 1] = o(0, 255 * n(1, x)), B[e + 2] = o(0, 255 * n(1, d)), B[e + 3] = o(0, 255 * n(1, b))
                        }
                    return {
                        w: T,
                        h: U,
                        rgba: B
                    }
                }(t);
                return o(r.w, r.h, r.rgba)
            }
        }
    }
]);