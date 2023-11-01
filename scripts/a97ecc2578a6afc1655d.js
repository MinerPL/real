(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["70235"], {
        78349: function(e, t, n) {
            "use strict";
            e.exports.parse = function(e) {
                var t = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
                if (!t) return null;
                t.shift();
                var n = null,
                    i = [];
                t[2] && (n = (l = t[2].split("-")).shift(), i = l);
                var r = [];
                t[5] && (r = t[5].split("-")).shift();
                var u = [];
                if (t[6]) {
                    (l = t[6].split("-")).shift();
                    for (var l, o, a = []; l.length;) {
                        var s = l.shift();
                        1 === s.length ? o ? (u.push({
                            singleton: o,
                            extension: a
                        }), o = s, a = []) : o = s : a.push(s)
                    }
                    u.push({
                        singleton: o,
                        extension: a
                    })
                }
                var c = [];
                t[7] && ((c = t[7].split("-")).shift(), c.shift());
                var _ = [];
                return t[8] && (_ = t[8].split("-")).shift(), {
                    langtag: {
                        language: {
                            language: n,
                            extlang: i
                        },
                        script: t[3] || null,
                        region: t[4] || null,
                        variant: r,
                        extension: u,
                        privateuse: c
                    },
                    privateuse: _,
                    grandfathered: {
                        irregular: t[0] || null,
                        regular: t[1] || null
                    }
                }
            }
        },
        458389: function(e, t, n) {
            var i = n("594140"),
                r = n("564414"),
                u = n("725502"),
                l = n("591350"),
                o = n("476540"),
                a = n("381178"),
                s = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var n = u(e),
                    c = !n && r(e),
                    _ = !n && !c && l(e),
                    E = !n && !c && !_ && a(e),
                    d = n || c || _ || E,
                    I = d ? i(e.length, String) : [],
                    T = I.length;
                for (var f in e)(t || s.call(e, f)) && !(d && ("length" == f || _ && ("offset" == f || "parent" == f) || E && ("buffer" == f || "byteLength" == f || "byteOffset" == f) || o(f, T))) && I.push(f);
                return I
            }
        },
        437083: function(e, t, n) {
            var i = n("561449"),
                r = n("877297");
            e.exports = function(e) {
                return r(i(e))
            }
        },
        562132: function(e, t, n) {
            var i = n("33426"),
                r = n("136047"),
                u = n("270879"),
                l = {};
            l["[object Float32Array]"] = l["[object Float64Array]"] = l["[object Int8Array]"] = l["[object Int16Array]"] = l["[object Int32Array]"] = l["[object Uint8Array]"] = l["[object Uint8ClampedArray]"] = l["[object Uint16Array]"] = l["[object Uint32Array]"] = !0, l["[object Arguments]"] = l["[object Array]"] = l["[object ArrayBuffer]"] = l["[object Boolean]"] = l["[object DataView]"] = l["[object Date]"] = l["[object Error]"] = l["[object Function]"] = l["[object Map]"] = l["[object Number]"] = l["[object Object]"] = l["[object RegExp]"] = l["[object Set]"] = l["[object String]"] = l["[object WeakMap]"] = !1;
            e.exports = function(e) {
                return u(e) && r(e.length) && !!l[i(e)]
            }
        },
        205873: function(e, t, n) {
            var i = n("733228"),
                r = n("541349"),
                u = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!i(e)) return r(e);
                var t = [];
                for (var n in Object(e)) u.call(e, n) && "constructor" != n && t.push(n);
                return t
            }
        },
        329252: function(e, t, n) {
            var i = n("877297"),
                r = n("164099");
            e.exports = function(e) {
                return i(r(e))
            }
        },
        594140: function(e, t, n) {
            e.exports = function(e, t) {
                for (var n = -1, i = Array(e); ++n < e;) i[n] = t(n);
                return i
            }
        },
        492692: function(e, t, n) {
            e.exports = function(e) {
                return function(t) {
                    return e(t)
                }
            }
        },
        957478: function(e, t, n) {
            var i = n("626785");
            e.exports = function(e, t) {
                return i(t, function(t) {
                    return e[t]
                })
            }
        },
        561449: function(e, t, n) {
            e.exports = function(e, t) {
                var n = -1,
                    i = e.length;
                for (t || (t = Array(i)); ++n < i;) t[n] = e[n];
                return t
            }
        },
        733228: function(e, t, n) {
            var i = Object.prototype;
            e.exports = function(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || i)
            }
        },
        541349: function(e, t, n) {
            var i = n("761197")(Object.keys, Object);
            e.exports = i
        },
        276440: function(e, t, n) {
            e = n.nmd(e);
            var i = n("447414"),
                r = "object" == typeof t && t && !t.nodeType && t,
                u = r && "object" == typeof e && e && !e.nodeType && e,
                l = u && u.exports === r && i.process,
                o = function() {
                    try {
                        var e = u && u.require && u.require("util").types;
                        if (e) return e;
                        return l && l.binding && l.binding("util")
                    } catch (e) {}
                }();
            e.exports = o
        },
        761197: function(e, t, n) {
            e.exports = function(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }
        },
        877297: function(e, t, n) {
            var i = n("68421");
            e.exports = function(e, t) {
                var n = -1,
                    r = e.length,
                    u = r - 1;
                for (t = void 0 === t ? r : t; ++n < t;) {
                    var l = i(n, u),
                        o = e[l];
                    e[l] = e[n], e[n] = o
                }
                return e.length = t, e
            }
        },
        591350: function(e, t, n) {
            e = n.nmd(e);
            var i = n("690516"),
                r = n("221386"),
                u = "object" == typeof t && t && !t.nodeType && t,
                l = u && "object" == typeof e && e && !e.nodeType && e,
                o = l && l.exports === u ? i.Buffer : void 0,
                a = o ? o.isBuffer : void 0;
            e.exports = a || r
        },
        381178: function(e, t, n) {
            var i = n("562132"),
                r = n("492692"),
                u = n("276440"),
                l = u && u.isTypedArray,
                o = l ? r(l) : i;
            e.exports = o
        },
        466731: function(e, t, n) {
            var i = n("458389"),
                r = n("205873"),
                u = n("603108");
            e.exports = function(e) {
                return u(e) ? i(e) : r(e)
            }
        },
        375128: function(e, t, n) {
            var i = n("437083"),
                r = n("329252"),
                u = n("725502");
            e.exports = function(e) {
                return (u(e) ? i : r)(e)
            }
        },
        221386: function(e, t, n) {
            e.exports = function() {
                return !1
            }
        },
        164099: function(e, t, n) {
            var i = n("957478"),
                r = n("466731");
            e.exports = function(e) {
                return null == e ? [] : i(e, r(e))
            }
        },
        48648: function(e, t, n) {
            if (!i) var i = {
                map: function(e, t) {
                    var n = {};
                    return t ? e.map(function(e, i) {
                        return n.index = i, t.call(n, e)
                    }) : e.slice()
                },
                naturalOrder: function(e, t) {
                    return e < t ? -1 : e > t ? 1 : 0
                },
                sum: function(e, t) {
                    var n = {};
                    return e.reduce(t ? function(e, i, r) {
                        return n.index = r, e + t.call(n, i)
                    } : function(e, t) {
                        return e + t
                    }, 0)
                },
                max: function(e, t) {
                    return Math.max.apply(null, t ? i.map(e, t) : e)
                }
            };
            var r = function() {
                var e = 3;

                function t(e, t, n) {
                    return (e << 10) + (t << 5) + n
                }

                function n(e) {
                    var t = [],
                        n = !1;

                    function i() {
                        t.sort(e), n = !0
                    }
                    return {
                        push: function(e) {
                            t.push(e), n = !1
                        },
                        peek: function(e) {
                            return !n && i(), void 0 === e && (e = t.length - 1), t[e]
                        },
                        pop: function() {
                            return !n && i(), t.pop()
                        },
                        size: function() {
                            return t.length
                        },
                        map: function(e) {
                            return t.map(e)
                        },
                        debug: function() {
                            return !n && i(), t
                        }
                    }
                }

                function r(e, t, n, i, r, u, l) {
                    this.r1 = e, this.r2 = t, this.g1 = n, this.g2 = i, this.b1 = r, this.b2 = u, this.histo = l
                }

                function u() {
                    this.vboxes = new n(function(e, t) {
                        return i.naturalOrder(e.vbox.count() * e.vbox.volume(), t.vbox.count() * t.vbox.volume())
                    })
                }
                return r.prototype = {
                    volume: function(e) {
                        return (!this._volume || e) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(e) {
                        var n = this.histo;
                        if (!this._count_set || e) {
                            var i, r, u, l = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (r = this.g1; r <= this.g2; r++)
                                    for (u = this.b1; u <= this.b2; u++) l += n[t(i, r, u)] || 0;
                            this._count = l, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new r(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(e) {
                        var n = this.histo;
                        if (!this._avg || e) {
                            var i, r, u, l, o = 0,
                                a = 8,
                                s = 0,
                                c = 0,
                                _ = 0;
                            for (r = this.r1; r <= this.r2; r++)
                                for (u = this.g1; u <= this.g2; u++)
                                    for (l = this.b1; l <= this.b2; l++) o += i = n[t(r, u, l)] || 0, s += i * (r + .5) * a, c += i * (u + .5) * a, _ += i * (l + .5) * a;
                            o ? this._avg = [~~(s / o), ~~(c / o), ~~(_ / o)] : this._avg = [~~(a * (this.r1 + this.r2 + 1) / 2), ~~(a * (this.g1 + this.g2 + 1) / 2), ~~(a * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(t) {
                        var n = t[0] >> e;
                        return gval = t[1] >> e, bval = t[2] >> e, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, u.prototype = {
                    push: function(e) {
                        this.vboxes.push({
                            vbox: e,
                            color: e.avg()
                        })
                    },
                    palette: function() {
                        return this.vboxes.map(function(e) {
                            return e.color
                        })
                    },
                    size: function() {
                        return this.vboxes.size()
                    },
                    map: function(e) {
                        for (var t = this.vboxes, n = 0; n < t.size(); n++)
                            if (t.peek(n).vbox.contains(e)) return t.peek(n).color;
                        return this.nearest(e)
                    },
                    nearest: function(e) {
                        for (var t, n, i, r = this.vboxes, u = 0; u < r.size(); u++)((n = Math.sqrt(Math.pow(e[0] - r.peek(u).color[0], 2) + Math.pow(e[1] - r.peek(u).color[1], 2) + Math.pow(e[2] - r.peek(u).color[2], 2))) < t || void 0 === t) && (t = n, i = r.peek(u).color);
                        return i
                    },
                    forcebw: function() {
                        var e = this.vboxes;
                        e.sort(function(e, t) {
                            return i.naturalOrder(i.sum(e.color), i.sum(t.color))
                        });
                        var t = e[0].color;
                        t[0] < 5 && t[1] < 5 && t[2] < 5 && (e[0].color = [0, 0, 0]);
                        var n = e.length - 1,
                            r = e[n].color;
                        r[0] > 251 && r[1] > 251 && r[2] > 251 && (e[n].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(l, o) {
                        if (!l.length || o < 2 || o > 256) return !1;
                        var a, s, c, _, E, d, I, T, f, S, p, O, A, N, C, L, R = (a = l, E = Array(32768), a.forEach(function(n) {
                                c = n[0] >> e, _ = n[1] >> e, E[s = t(c, _, n[2] >> e)] = (E[s] || 0) + 1
                            }), E),
                            m = 0;
                        R.forEach(function() {
                            m++
                        });
                        var h = (d = l, I = R, p = 1e6, O = 0, A = 1e6, N = 0, C = 1e6, L = 0, d.forEach(function(t) {
                                T = t[0] >> e, f = t[1] >> e, S = t[2] >> e, T < p ? p = T : T > O && (O = T), f < A ? A = f : f > N && (N = f), S < C ? C = S : S > L && (L = S)
                            }), new r(p, O, A, N, C, L, I)),
                            U = new n(function(e, t) {
                                return i.naturalOrder(e.count(), t.count())
                            });

                        function g(e, n) {
                            for (var r, u = 1, l = 0; l < 1e3;) {
                                if (!(r = e.pop()).count()) {
                                    e.push(r), l++;
                                    continue
                                }
                                var o = function(e, n) {
                                        if (n.count()) {
                                            var r = n.r2 - n.r1 + 1,
                                                u = n.g2 - n.g1 + 1,
                                                l = n.b2 - n.b1 + 1,
                                                o = i.max([r, u, l]);
                                            if (1 == n.count()) return [n.copy()];
                                            var a, s, c, _, E, d = 0,
                                                I = [],
                                                T = [];
                                            if (o == r)
                                                for (a = n.r1; a <= n.r2; a++) {
                                                    for (_ = 0, s = n.g1; s <= n.g2; s++)
                                                        for (c = n.b1; c <= n.b2; c++) _ += e[E = t(a, s, c)] || 0;
                                                    d += _, I[a] = d
                                                } else if (o == u)
                                                    for (a = n.g1; a <= n.g2; a++) {
                                                        for (_ = 0, s = n.r1; s <= n.r2; s++)
                                                            for (c = n.b1; c <= n.b2; c++) _ += e[E = t(s, a, c)] || 0;
                                                        d += _, I[a] = d
                                                    } else
                                                        for (a = n.b1; a <= n.b2; a++) {
                                                            for (_ = 0, s = n.r1; s <= n.r2; s++)
                                                                for (c = n.g1; c <= n.g2; c++) _ += e[E = t(s, c, a)] || 0;
                                                            d += _, I[a] = d
                                                        }
                                            return I.forEach(function(e, t) {
                                                T[t] = d - e
                                            }), f(o == r ? "r" : o == u ? "g" : "b")
                                        }

                                        function f(e) {
                                            var t, i, r, u, l, o = e + "1",
                                                s = e + "2",
                                                c = 0;
                                            for (a = n[o]; a <= n[s]; a++)
                                                if (I[a] > d / 2) {
                                                    for (r = n.copy(), u = n.copy(), t = a - n[o], l = t <= (i = n[s] - a) ? Math.min(n[s] - 1, ~~(a + i / 2)) : Math.max(n[o], ~~(a - 1 - t / 2)); !I[l];) l++;
                                                    for (c = T[l]; !c && I[l - 1];) c = T[--l];
                                                    return r[s] = l, u[o] = r[s] + 1, [r, u]
                                                }
                                        }
                                    }(R, r),
                                    a = o[0],
                                    s = o[1];
                                if (!a) return;
                                if (e.push(a), s && (e.push(s), u++), u >= n || l++ > 1e3) return
                            }
                        }
                        U.push(h), g(U, .75 * o);
                        for (var P = new n(function(e, t) {
                                return i.naturalOrder(e.count() * e.volume(), t.count() * t.volume())
                            }); U.size();) P.push(U.pop());
                        g(P, o - P.size());
                        for (var D = new u; P.size();) D.push(P.pop());
                        return D
                    }
                }
            }();
            e.exports = r.quantize
        },
        48174: function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            })
        },
        775560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return i.default
                },
                useStableMemo: function() {
                    return r.default
                },
                useLazyValue: function() {
                    return u.default
                }
            });
            var i = n("14716"),
                r = n("745510"),
                u = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("884691");

            function r() {
                let [, e] = (0, i.useState)({});
                return (0, i.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("884691");
            let r = {};

            function u(e) {
                let t = (0, i.useRef)(r);
                return t.current === r && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("884691"),
                r = n("48174");
            let u = [];

            function l(e, t) {
                let n = (0, i.useRef)(),
                    l = (0, i.useRef)(u);
                return l.current === u ? (n.current = e(), l.current = t) : !(0, r.default)(t, l.current) && (n.current = e(), l.current = t), n.current
            }
        },
        668973: function(e, t, n) {
            "use strict";
            e.exports = n.p + "18517b33da6ed36b855b.svg"
        },
        124036: function(e, t, n) {
            "use strict";
            e.exports = n.p + "2304725db3c96705e901.svg"
        },
        721569: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b21a7b48a6e973958489.svg"
        },
        644286: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5ff8ffaa3831478d2a28.svg"
        },
        597346: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4ba6811c2bcb626963c6.svg"
        },
        380499: function(e, t, n) {
            "use strict";
            e.exports = n.p + "20c942338703af7dccd1.svg"
        },
        50617: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d18655651bd838408129.svg"
        },
        972094: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5f5e1a58ecf11d0d8d15.svg"
        },
        92729: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f5710b460ce933c9abe8.svg"
        },
        335e3: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f5c7b6adf73fe335fa05.svg"
        },
        302872: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4fd94b2e62b94b0454d3.svg"
        },
        425914: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5b74fc90eac76055a5ad.svg"
        },
        272477: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d994d2093d7d1924be78.svg"
        },
        164059: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e9b67e80d0033605e8f4.svg"
        },
        653240: function(e, t, n) {
            "use strict";
            e.exports = n.p + "baa5b6db50bb89d55668.svg"
        },
        540758: function(e, t, n) {
            "use strict";
            e.exports = n.p + "abb37025036befe38e64.svg"
        },
        723251: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                thumbHashToApproximateAspectRatio: function() {
                    return i
                },
                rgbaToDataURL: function() {
                    return r
                },
                thumbHashToDataURL: function() {
                    return u
                }
            });

            function i(e) {
                let t = e[3],
                    n = 128 & e[2],
                    i = 128 & e[4];
                return (i ? n ? 5 : 7 : 7 & t) / (i ? 7 & t : n ? 5 : 7)
            }

            function r(e, t, n) {
                let i = 4 * e + 1,
                    r = 6 + t * (5 + i),
                    u = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, r >>> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 73, 68, 65, 84, 120, 1],
                    l = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
                    o = 1,
                    a = 0;
                for (let e = 0, r = 0, l = i - 1; e < t; e++, l += i - 1)
                    for (u.push(e + 1 < t ? 0 : 1, 255 & i, i >> 8, 255 & ~i, i >> 8 ^ 255, 0), a = (a + o) % 65521; r < l; r++) {
                        let e = 255 & n[r];
                        u.push(e), a = (a + (o = (o + e) % 65521)) % 65521
                    }
                for (let [e, t] of(u.push(a >> 8, 255 & a, o >> 8, 255 & o, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
                        [12, 29],
                        [37, 41 + r]
                    ])) {
                    let n = -1;
                    for (let i = e; i < t; i++) n ^= u[i], n = (n = n >>> 4 ^ l[15 & n]) >>> 4 ^ l[15 & n];
                    n = ~n, u[t++] = n >>> 24, u[t++] = n >> 16 & 255, u[t++] = n >> 8 & 255, u[t++] = 255 & n
                }
                return "data:image/png;base64," + btoa(String.fromCharCode(...u))
            }

            function u(e) {
                let t = function(e) {
                    let {
                        PI: t,
                        min: n,
                        max: r,
                        cos: u,
                        round: l
                    } = Math, o = e[0] | e[1] << 8 | e[2] << 16, a = e[3] | e[4] << 8, s = (63 & o) / 63, c = (o >> 6 & 63) / 31.5 - 1, _ = (o >> 12 & 63) / 31.5 - 1, E = o >> 23, d = (a >> 3 & 63) / 63, I = (a >> 9 & 63) / 63, T = a >> 15, f = r(3, T ? E ? 5 : 7 : 7 & a), S = r(3, T ? 7 & a : E ? 5 : 7), p = E ? (15 & e[5]) / 15 : 1, O = (e[5] >> 4) / 15, A = E ? 6 : 5, N = 0, C = (t, n, i) => {
                        let r = [];
                        for (let u = 0; u < n; u++)
                            for (let l = u ? 0 : 1; l * n < t * (n - u); l++) r.push(((e[A + (N >> 1)] >> ((1 & N++) << 2) & 15) / 7.5 - 1) * i);
                        return r
                    }, L = C(f, S, (o >> 18 & 31) / 31), R = C(3, 3, 1.25 * d), m = C(3, 3, 1.25 * I), h = E && C(5, 5, O), U = i(e), g = l(U > 1 ? 32 : 32 * U), P = l(U > 1 ? 32 / U : 32), D = new Uint8Array(g * P * 4), M = [], v = [];
                    for (let e = 0, i = 0; e < P; e++)
                        for (let l = 0; l < g; l++, i += 4) {
                            let o = s,
                                a = c,
                                d = _,
                                I = p;
                            for (let e = 0, n = r(f, E ? 5 : 3); e < n; e++) M[e] = u(t / g * (l + .5) * e);
                            for (let n = 0, i = r(S, E ? 5 : 3); n < i; n++) v[n] = u(t / P * (e + .5) * n);
                            for (let e = 0, t = 0; e < S; e++)
                                for (let n = e ? 0 : 1, i = 2 * v[e]; n * S < f * (S - e); n++, t++) o += L[t] * M[n] * i;
                            for (let e = 0, t = 0; e < 3; e++)
                                for (let n = e ? 0 : 1, i = 2 * v[e]; n < 3 - e; n++, t++) {
                                    let e = M[n] * i;
                                    a += R[t] * e, d += m[t] * e
                                }
                            if (E)
                                for (let e = 0, t = 0; e < 5; e++)
                                    for (let n = e ? 0 : 1, i = 2 * v[e]; n < 5 - e; n++, t++) I += h[t] * M[n] * i;
                            let T = o - 2 / 3 * a,
                                O = (3 * o - T + d) / 2,
                                A = O - d;
                            D[i] = r(0, 255 * n(1, O)), D[i + 1] = r(0, 255 * n(1, A)), D[i + 2] = r(0, 255 * n(1, T)), D[i + 3] = r(0, 255 * n(1, I))
                        }
                    return {
                        w: g,
                        h: P,
                        rgba: D
                    }
                }(e);
                return r(t.w, t.h, t.rgba)
            }
        },
        251472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchUserEntitlementsForApplication: function() {
                    return o
                },
                fetchUserEntitlements: function() {
                    return a
                },
                fetchGiftableEntitlements: function() {
                    return s
                }
            });
            var i = n("872717"),
                r = n("913144"),
                u = n("271560"),
                l = n("49111");

            function o(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return r.default.wait(() => {
                    r.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_START",
                        applicationId: e
                    })
                }), i.default.get({
                    url: l.Endpoints.ENTITLEMENTS_FOR_APPLICATION(e),
                    oldFormErrors: !0,
                    query: {
                        exclude_consumed: t
                    }
                }).then(t => (r.default.dispatch({
                    type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
                    applicationId: e,
                    entitlements: t.body
                }), t.body)).catch(() => {
                    r.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_FAIL",
                        applicationId: e
                    })
                })
            }
            async function a(e) {
                let {
                    withSku: t = !1,
                    withApplication: n = !1,
                    entitlementType: u
                } = e;
                r.default.dispatch({
                    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
                });
                try {
                    let e = await i.default.get({
                        url: l.Endpoints.ENTITLEMENTS_FOR_USER,
                        query: {
                            with_sku: t,
                            with_application: n,
                            entitlement_type: u
                        }
                    });
                    r.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
                        entitlements: e.body
                    })
                } catch (e) {
                    r.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL"
                    })
                }
            }
            async function s() {
                r.default.dispatch({
                    type: "ENTITLEMENTS_GIFTABLE_FETCH"
                });
                try {
                    let e = await (0, u.httpGetWithCountryCodeQuery)({
                        url: l.Endpoints.ENTITLEMENTS_GIFTABLE
                    });
                    r.default.dispatch({
                        type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS",
                        entitlements: e.body
                    })
                } catch (e) {
                    r.default.dispatch({
                        type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL"
                    })
                }
            }
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return r
                },
                popLayer: function() {
                    return u
                },
                popAllLayers: function() {
                    return l
                }
            });
            var i = n("913144");

            function r(e) {
                i.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function u() {
                i.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function l() {
                i.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return r
                },
                updateCardInfo: function() {
                    return u
                },
                clearCardInfo: function() {
                    return l
                },
                updateAddressInfo: function() {
                    return o
                },
                clearError: function() {
                    return a
                }
            });
            var i = n("913144");

            function r(e) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function u(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function l() {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function o(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function a() {
                i.default.wait(() => i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearPurchaseTokenAuthState: function() {
                    return r
                }
            });
            var i = n("913144");

            function r() {
                i.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        775433: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchSubscriptionPlansForSKU: function() {
                    return _
                },
                fetchSubscriptionPlansBySKUs: function() {
                    return E
                },
                fetchPremiumSubscriptionPlans: function() {
                    return d
                },
                resetSubscriptionPlanData: function() {
                    return I
                }
            });
            var i = n("872717"),
                r = n("913144"),
                u = n("333805"),
                l = n("160299"),
                o = n("745279"),
                a = n("850068"),
                s = n("49111"),
                c = n("646718");
            async function _(e, t, n, c, _) {
                r.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH",
                    skuId: e
                });
                try {
                    let u = {
                            url: s.Endpoints.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                            oldFormErrors: !0
                        },
                        o = {};
                    null != t && (o.country_code = t), null != n && (o.payment_source_id = n), null != c && (o.include_unpublished = c), null != _ && (o.revenue_surface = _), u.query = o, !l.default.ipCountryCodeLoaded && await (0, a.fetchIpCountryCode)();
                    let E = await i.default.get(u);
                    r.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                        skuId: e,
                        subscriptionPlans: E.body
                    })
                } catch (t) {
                    throw r.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                        skuId: e
                    }), (0, o.captureBillingException)(t), new u.default(t)
                }
            }

            function E(e, t) {
                return Promise.all(e.filter(e => e !== c.PremiumSubscriptionSKUs.NONE).map(e => _(e, t)))
            }

            function d(e, t, n) {
                return Promise.all(c.ACTIVE_PREMIUM_SKUS.filter(e => e !== c.PremiumSubscriptionSKUs.NONE).map(i => _(i, e, t, void 0, n)))
            }

            function I() {
                r.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        79112: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("872717"),
                r = n("95410"),
                u = n("913144"),
                l = n("211895"),
                o = n("26092"),
                a = n("599110"),
                s = n("315102"),
                c = n("730622"),
                _ = n("49111"),
                E = n("191349"),
                d = n("782340"),
                I = {
                    open() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                openWithoutBackstack: !1
                            };
                        (0, l.default)(e, t, n)
                    },
                    init: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        u.default.dispatch({
                            type: "USER_SETTINGS_MODAL_INIT",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    close() {
                        let e = o.default.onClose;
                        u.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), null != e && e()
                    },
                    setSection(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        u.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SET_SECTION",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    clearSubsection(e) {
                        u.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                            forSection: e
                        })
                    },
                    clearScrollPosition(e) {
                        u.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                            forSection: e
                        })
                    },
                    updateAccount(e) {
                        u.default.dispatch({
                            type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                            settings: e
                        })
                    },
                    submitComplete() {
                        u.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                        })
                    },
                    reset() {
                        u.default.dispatch({
                            type: "USER_SETTINGS_MODAL_RESET"
                        })
                    },
                    saveAccountChanges(e, t) {
                        u.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT"
                        });
                        let {
                            username: n,
                            email: l,
                            emailToken: o,
                            password: I,
                            avatar: T,
                            newPassword: f,
                            discriminator: S
                        } = e, {
                            close: p
                        } = t;
                        return (0, c.default)(e => {
                            let t = {
                                    username: n,
                                    email: l,
                                    email_token: o,
                                    password: I,
                                    avatar: T,
                                    new_password: f,
                                    ...e,
                                    discriminator: null != S && "" !== S ? S : void 0
                                },
                                u = r.default.get(_.DEVICE_TOKEN),
                                a = (0, E.getDevicePushProvider)();
                            null != a && null != u && (t.push_provider = a, t.push_token = u);
                            let s = r.default.get(_.DEVICE_VOIP_TOKEN);
                            return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != s && (t.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, t.push_voip_token = s), i.default.patch({
                                url: _.Endpoints.ME,
                                oldFormErrors: !0,
                                body: t
                            })
                        }, {
                            checkEnabled: !1,
                            modalProps: {
                                title: d.default.Messages.TWO_FA_CHANGE_ACCOUNT
                            },
                            hooks: {
                                onEarlyClose: () => u.default.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }).then(e => {
                            let t = e.body,
                                n = t.token;
                            return a.default.track(_.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, s.isAnimatedIconHash)(t.avatar)
                            }), delete t.token, u.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: t.id
                            }), u.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: t
                            }), null != f && u.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: t,
                                newPassword: f
                            }), null != I && null != f && u.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: t.id
                            }), p ? this.close() : this.submitComplete(), e
                        }, e => (u.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: e.body
                        }), e))
                    }
                }
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("37983"),
                r = n("884691"),
                u = n("414456"),
                l = n.n(u),
                o = n("77078"),
                a = n("782340"),
                s = n("347129");
            class c extends r.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: u,
                        error: c,
                        isLoading: _,
                        maxLength: E,
                        transitionState: d,
                        helpMessage: I,
                        retryPrompt: T,
                        retrySuccessMessage: f
                    } = this.props, {
                        code: S,
                        errorMessage: p,
                        retrySuccess: O
                    } = this.state, A = r.Children.count(u) > 0 ? (0, i.jsx)(o.Card, {
                        type: o.Card.Types.WARNING,
                        className: s.card,
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: u
                        })
                    }) : null, N = null != T ? (0, i.jsxs)(o.Text, {
                        className: l(s.submitText, s.spacing),
                        variant: "text-sm/normal",
                        children: [(0, i.jsx)("br", {}), (0, i.jsx)(o.Clickable, {
                            className: l(s.spacing, s.link),
                            onClick: this.handleRetry,
                            children: (0, i.jsx)(o.Anchor, {
                                children: T
                            })
                        })]
                    }) : null, C = O ? (0, i.jsx)(o.Card, {
                        type: o.Card.Types.SUCCESS,
                        className: s.card,
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: f
                        })
                    }) : null;
                    return (0, i.jsx)(o.ModalRoot, {
                        transitionState: d,
                        children: (0, i.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, i.jsx)(o.ModalHeader, {
                                separator: !1,
                                children: (0, i.jsx)(o.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, i.jsxs)(o.ModalContent, {
                                children: [null != I ? (0, i.jsx)(o.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: s.spacing,
                                    children: I
                                }) : null, A, C, (0, i.jsxs)(o.FormItem, {
                                    title: this.getLabelText(),
                                    className: s.spacing,
                                    children: [(0, i.jsx)(o.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != E ? E : 10,
                                        value: S,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, i.jsx)(o.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: s.error,
                                        children: null != c ? c : p
                                    }) : null, N]
                                })]
                            }), (0, i.jsxs)(o.ModalFooter, {
                                children: [(0, i.jsx)(o.Button, {
                                    type: "submit",
                                    disabled: _ || 0 === S.length,
                                    children: null != n ? n : a.default.Messages.CONFIRM
                                }), (0, i.jsx)(o.Button, {
                                    onClick: this.handleCancel,
                                    disabled: _,
                                    look: o.Button.Looks.LINK,
                                    color: o.Button.Colors.PRIMARY,
                                    children: a.default.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    }, this.setRef = e => {
                        this._input = e
                    }, this.getLabelText = () => {
                        var e;
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? a.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : a.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? a.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : a.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
                        var e;
                        return this.props.forceNoPlaceholder ? null : null !== (e = this.props.placeholder) && void 0 !== e ? e : this.getSupportedCodeTypes()
                    }, this.errorPresent = () => null != this.props.error && "" !== this.props.error || null != this.state.errorMessage && "" !== this.state.errorMessage, this.handleRetry = () => {
                        let {
                            onRetry: e
                        } = this.props;
                        null == e || e().then(() => this.setState({
                            retrySuccess: !0
                        }))
                    }, this.handleSubmit = e => {
                        e.preventDefault();
                        let {
                            handleSubmit: t,
                            onError: n
                        } = this.props;
                        t(this.state.code).catch(e => {
                            null != e.body && (null == n || n(e.body), e.body.message && this.setState({
                                errorMessage: e.body.message
                            }))
                        })
                    }, this.handleCancel = () => {
                        let {
                            onClose: e,
                            handleEarlyClose: t
                        } = this.props;
                        e(), null == t || t()
                    }, this.handleCodeChange = e => {
                        this.setState({
                            code: e
                        })
                    }
                }
            }
            c.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var _ = c
        },
        599417: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("872717"),
                r = n("49111"),
                u = n("782340");
            class l extends i.default.V8APIError {
                constructor(e, t) {
                    super(e, t, null != t ? u.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: r.Links.STATUS,
                        details: "".concat(t)
                    }) : u.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: r.Links.STATUS
                    }))
                }
            }
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("872717"),
                r = n("49111"),
                u = n("782340");
            class l extends i.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? u.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: r.Links.STATUS,
                        details: "".concat(t)
                    }) : u.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: r.Links.STATUS
                    }))
                }
            }
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("884691");

            function r(e) {
                let [t, n] = (0, i.useState)(!1), r = (0, i.useRef)(e.current);
                return (0, i.useEffect)(() => {
                    r.current = e.current
                }, [e]), (0, i.useEffect)(() => {
                    let e = r.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        i = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", i), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i)
                    }
                }, [r]), t
            }
        },
        689988: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("704744");
            var i = n("913144");
            class r {
                initialize() {
                    this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        i.default.subscribe(t, "function" == typeof n ? n : n.callback)
                    }), this.stores.forEach((e, t) => {
                        t.addChangeListener(e), e()
                    }))
                }
                terminate(e) {
                    !(this.initializedCount <= 0) && (e ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        i.default.unsubscribe(t, "function" == typeof n ? n : n.callback)
                    })))
                }
                _initialize() {}
                _terminate() {}
                constructor() {
                    this.initializedCount = 0, this.actions = {}, this.stores = new Map
                }
            }
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("773336");
            async function r(e, t) {
                let {
                    default: r
                } = await n.el("572544").then(n.bind(n, "572544")), u = r(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != u) u(null);
                else if (i.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        862013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MESSAGE_NICKNAME_PAUSE_LABEL_SEGMENT_ID: function() {
                    return u
                },
                MESSAGE_PRE_TIMESTAMP_PAUSE_LABEL_SEGMENT_ID: function() {
                    return l
                },
                MESSAGE_REACTIONS_LABEL_SEGMENT_ID: function() {
                    return o
                },
                IMAGE_OPEN_DIALOG_DESCRIPTION: function() {
                    return a
                },
                insertAccessibilityLabelElements: function() {
                    return s
                }
            });
            var i = n("476765"),
                r = n("782340");
            let u = (0, i.uid)(),
                l = (0, i.uid)(),
                o = (0, i.uid)(),
                a = (0, i.uid)();

            function s() {
                [{
                    id: u,
                    text: ","
                }, {
                    id: l,
                    text: ","
                }, {
                    id: o,
                    text: r.default.Messages.REACTIONS
                }, {
                    id: a,
                    text: r.default.Messages.OPEN_ORIGIANL_IMAGE_BUTTON_A11Y_DESCRIPTION
                }].forEach(e => {
                    let {
                        id: t,
                        text: n
                    } = e, i = document.getElementById(t);
                    null == i && ((i = document.createElement("div")).setAttribute("id", t), i.innerText = n, i.style.display = "none", document.body.appendChild(i))
                })
            }
        },
        812204: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            }), (i = r || (r = {})).POPOUT_WINDOW = "popout window", i.OVERLAY = "overlay", i.NOTICE = "notice", i.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", i.BADGE = "badge", i.USER_SETTINGS = "user settings", i.USER_SETTINGS_MENU = "user settings menu", i.ACCOUNT = "account", i.TEXT_AND_IMAGES = "text and images", i.GUILD_SETTINGS = "guild settings", i.OVERVIEW = "overview", i.STICKERS = "stickers", i.VANITY_URL = "vanity url", i.PREMIUM_MARKETING = "premium marketing", i.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", i.PREMIUM_PAYMENT_MODAL = "premium payment modal", i.PREMIUM_UPSELL_ALERT = "premium upsell alert", i.PREMIUM_UPSELL_MODAL = "premium upsell modal", i.PREMIUM_SETTINGS = "premium settings", i.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", i.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", i.CHANNEL_CALL = "channel call", i.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", i.RTC_PANEL = "rtc panel", i.SOUNDBOARD_BUTTON = "soundboard button", i.SOUNDBOARD_POPOUT = "soundboard popout", i.SOUNDBOARD_WHEEL = "soundboard wheel", i.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", i.GIFT_BUTTON = "gift button", i.EXPRESSION_SUGGESTIONS = "expression suggestions", i.EMOJI_PICKER = "emoji picker", i.STICKER_PICKER = "sticker picker", i.STICKER_POPOUT = "sticker popout", i.PREMIUM_UPSELL = "premium upsell", i.EMPTY_STATE = "empty state", i.SUBSCRIPTION_DETAILS = "subscription details", i.SUBSCRIPTION_HEADER = "subscription header", i.ACCOUNT_CREDIT_BANNER = "account credit banner", i.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", i.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", i.STREAM_QUALITY_INDICATOR = "stream quality indicator", i.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", i.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", i.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", i.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", i.RPC = "rpc", i.BILLING_STANDALONE = "billing standalone", i.GUILD_CHANNEL_LIST = "guild channel list", i.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", i.STICKER_MESSAGE = "sticker message", i.CHANNEL_TEXT_AREA = "channel text area", i.HEADER_BAR = "header bar", i.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", i.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", i.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", i.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", i.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", i.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", i.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", i.GUILD_HEADER = "guild header", i.GUILD_BANNER = "guild banner", i.GUILD_BANNER_NOTICE = "guild banner notice", i.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", i.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", i.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", i.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", i.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", i.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", i.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", i.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", i.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", i.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", i.GUILDS_LIST = "guilds list", i.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", i.ACTIVITY_DIRECTORY = "activity directory", i.ACTIVITY_TILE = "activity tile", i.ACTIVITY_UPSELL = "activity upsell", i.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", i.INSTANT_INVITE_MODAL = "instant invite modal", i.IMAGE_CROPPING_MODAL = "image cropping modal", i.GIF_PICKER = "gif picker", i.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", i.INVITE_MODAL = "invite modal", i.INVITE_EMBED = "invite embed", i.NEW_GUILD_BUTTON = "new guild button", i.CHARACTER_COUNT = "character count", i.DM_CHANNEL = "dm channel", i.GUILD_CHANNEL = "guild channel", i.FORUM_CHANNEL = "forum channel", i.FILE_UPLOAD_POPOUT = "file upload popout", i.EMOJI = "emoji", i.PROFILE = "profile", i.PROFILE_MODAL = "profile modal", i.PROFILE_POPOUT = "profile popout", i.GUILD_PROFILE = "guild profile", i.EDIT_AVATAR = "edit avatar", i.EDIT_BANNER = "edit banner", i.CHAT_INPUT = "chat input", i.CREATE_THREAD = "create thread", i.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", i.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", i.SELECT_IMAGE_MODAL = "select image modal", i.VIDEO_BACKGROUND_OPTIONS = "video background options", i.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", i.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", i.CAMERA_PREVIEW = "camera preview", i.HOME_PAGE_PREMIUM_TAB = "home page premium tab", i.HOME_PAGE_SHOP_TAB = "home page shop tab", i.PREMIUM_MARKETING_SURFACE = "premium marketing surface", i.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", i.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", i.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", i.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", i.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", i.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", i.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", i.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", i.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", i.PREMIUM_MARKETING_FEATURE = "premium marketing feature", i.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", i.PREMIUM_MARKETING_FOOTER = "premium marketing footer", i.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", i.CHANNEL_CALL_ACTION_BAR = "channel call action bar", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", i.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", i.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", i.VOICE_CONTROL_TRAY = "voice control tray", i.ACTIVE_NOW_COLUMN = "active now column", i.CONTEXT_MENU = "context menu", i.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", i.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", i.CHANNEL_CATEGORY_MENU = "channel category menu", i.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", i.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", i.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", i.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", i.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", i.CHANNEL_TITLE_MENU = "channel title menu", i.GROUP_DM_MENU = "group dm menu", i.AUDIT_LOG_USER_MENU = "audit log user menu", i.BANNED_USER_MENU = "banned user menu", i.DM_USER_MENU = "dm user menu", i.GROUP_DM_USER_MENU = "group dm user menu", i.GUILD_CHANNEL_USER_MENU = "guild channel user menu", i.GUILD_MODERATION_USER_MENU = "guild moderation user menu", i.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", i.GUILD_SETTINGS_USER_MENU = "guild settings user menu", i.GUILD_USER_MENU = "guild user menu", i.THREAD_USER_MENU = "thread user menu", i.USER_GENERIC_MENU = "user generic menu", i.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", i.VOICE_ACTION_SHEET = "voice action sheet", i.FOCUSED_VOICE_CONTROLS = "focused voice controls", i.MASKED_LINK = "masked link", i.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", i.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", i.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", i.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", i.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", i.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", i.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", i.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", i.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", i.ACCOUNT_PROFILE_POPOUT = "account profile popout", i.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", i.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", i.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", i.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", i.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", i.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", i.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", i.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", i.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", i.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", i.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", i.STAGE_VIDEO_LIMIT = "stage video limit", i.ACTIVITIES_MINI_SHELF = "activities mini shelf", i.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", i.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", i.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", i.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", i.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", i.APP_ICON_EDITOR = "app icon editor", i.CLIENT_THEMES_EDITOR = "client themes editor", i.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", i.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", i.SHARE_NITRO_EMBED = "share nitro embed", i.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", i.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", i.REFERRAL_TRIALS_POPOUT = "referral trials popout", i.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", i.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", i.ACTIVITY_BOOKMARK = "activity bookmark", i.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", i.ACTIVITY_DETAIL_PAGE = "activity detail page", i.ACTIVITIES_PAGE = "activities page", i.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", i.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", i.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", i.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", i.ACTIVITIES_HAPPENING_NOW = "activities happening now", i.MEDIA_VIEWER = "media viewer", i.MESSAGE_LONG_PRESS_MENU = "message long press menu", i.COLLECTIBLES_SHOP = "collectibles shop", i.COLLECTIBLES_SHOP_CARD = "collectibles shop card", i.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", i.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", i.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", i.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", i.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", i.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", i.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", i.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", i.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", i.PREMIUM_BILLING_INFO = "premium billing info", i.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", i.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", i.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", i.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", i.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", i.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", i.PREMIUM_PLAN_SELECT = "premium_plan_select", i.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", i.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", i.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", i.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", i.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", i.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", i.MEMBER_SAFETY_PAGE = "member safety page", i.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", i.GUILD_MEMBER_MOD_VIEW = "guild member mod view", i.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", i.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", i.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", i.GUILD_SHOP_PAGE = "guild shop page", i.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", i.MESSAGE_REMIX_TAG = "message remix tag", i.MESSAGE_REMIX_BUTTON = "message remix button", i.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", i.CLIPS_SETTINGS = "clips settings", i.CLIPS_GALLERY = "clips gallery", i.CLIPS_GALLERY_ITEM = "clips gallery item", i.CLIPS_EDITOR = "clips editor", i.CLIPS_SHARE_MODAL = "clips share modal", i.CHANNEL_ATTACH_BUTTON = "channel attach button", i.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", i.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", i.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", i.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", i.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", i.GUILD_EVENT_CARD = "guild event card", i.EVENT_SETTINGS = "event settings";
            var i, r, u = r
        },
        212084: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("605250"),
                r = n("802493");
            let u = new i.default("GuildStickers");
            var l = new class e {
                getSync(e) {
                    let t = performance.now(),
                        n = r.default.stickers(e).getMapEntriesSyncUnsafe(),
                        i = performance.now();
                    return u.log("synchronously loaded in ".concat(i - t, "ms (guilds: ").concat(n.length, ")")), n
                }
                handleConnectionOpen(e, t) {
                    for (let n of e.guilds) this.handleOneGuildCreate(n, t)
                }
                handleGuildCreate(e, t) {
                    this.handleOneGuildCreate(e.guild, t)
                }
                handleGuildUpdate(e, t) {
                    this.replace(e.guild.id, e.guild.stickers, t)
                }
                handleGuildDelete(e, t) {
                    this.delete(e.guild.id, t)
                }
                handleGuildStickersUpdate(e, t) {
                    this.replace(e.guildId, e.stickers, t)
                }
                handleBackgroundSync(e, t) {
                    e.promisesForBackgroundSyncToWaitOn.push(Promise.all(e.stickers.map(e => {
                        if ("unavailable" === e.dataMode) return Promise.resolve();
                        "full" === e.dataMode ? (u.verbose("Replacing ".concat(e.entities.length, " stickers for ").concat(e.guildId)), this.replace(e.guildId, e.entities, t)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (u.verbose("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " stickers for ").concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t))
                    })))
                }
                handleOneGuildCreate(e, t) {
                    null != e.stickers && this.replace(e.id, e.stickers, t), null != e.stickerUpdates && this.update(e.id, e.stickerUpdates.writes, e.stickerUpdates.deletes, t)
                }
                handleClearGuildCache(e) {
                    this.clear(e)
                }
                handleReset() {}
                replace(e, t, n) {
                    r.default.stickersTransaction(n).replaceAll(e, t)
                }
                delete(e, t) {
                    r.default.stickersTransaction(t).delete(e)
                }
                clear(e) {
                    r.default.stickersTransaction(e).delete()
                }
                update(e, t, n, i) {
                    let u = r.default.stickersTransaction(i);
                    for (let i of (u.putAll(e, t), n)) u.delete(e, i)
                }
                constructor() {
                    this.actions = {
                        BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
                        CLEAR_GUILD_CACHE: (e, t) => this.handleClearGuildCache(t),
                        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                        GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
                        GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
                        GUILD_STICKERS_UPDATE: (e, t) => this.handleGuildStickersUpdate(e, t),
                        GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t)
                    }
                }
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var i, r, u, l;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return i
                },
                BotTagTypes: function() {
                    return r
                }
            }), (u = i || (i = {}))[u.GAME = 1] = "GAME", u[u.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", u[u.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (l = r || (r = {}))[l.BOT = 0] = "BOT", l[l.SERVER = 1] = "SERVER", l[l.SYSTEM_DM = 2] = "SYSTEM_DM", l[l.OFFICIAL = 3] = "OFFICIAL", l[l.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", l[l.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", l[l.AI = 6] = "AI", l[l.REMIX = 7] = "REMIX"
        },
        619935: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useBlockedPaymentsConfig: function() {
                    return o
                },
                default: function() {
                    return a
                }
            });
            var i = n("862205"),
                r = n("15733");
            let u = (0, i.createExperiment)({
                    kind: "user",
                    id: "2022-03_block_russian_purchases",
                    label: "Block purchases based on country",
                    defaultConfig: {
                        paymentsBlocked: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Payments Blocked",
                        config: {
                            paymentsBlocked: !0
                        }
                    }]
                }),
                l = (0, i.createExperiment)({
                    kind: "user",
                    id: "2022-03_block_russian_purchases_desktop",
                    label: "Block purchases based on country (desktop specific flags)",
                    defaultConfig: {
                        checkPaymentSource: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Check Payment Source",
                        config: {
                            checkPaymentSource: !0
                        }
                    }]
                });

            function o() {
                let {
                    paymentsBlocked: e
                } = u.useExperiment({
                    location: "c519a9_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    checkPaymentSource: t
                } = l.useExperiment({
                    location: "c519a9_2"
                }, {
                    autoTrackExposure: !1
                }), {
                    defaultBillingCountryCode: n
                } = (0, r.default)();
                return e || t && "RU" === n
            }
            var a = u
        },
        20606: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = n("171210").default
        },
        115279: function(e, t, n) {
            "use strict";
            var i, r, u, l, o, a, s, c, _, E, d;
            n.r(t), n.d(t, {
                EmojiCategoryTypes: function() {
                    return i
                },
                GRID_NAVIGATOR_ID: function() {
                    return I
                },
                EmojiCategories: function() {
                    return r
                },
                EmojiSubCategory: function() {
                    return u
                },
                INACTIVE_CATEGORY_INDEX: function() {
                    return T
                },
                EmojiSize: function() {
                    return o
                },
                EMOJI_PICKER_TAB_PANEL_ID: function() {
                    return f
                },
                EMOJI_PICKER_TAB_ID: function() {
                    return S
                },
                SOUNDBOARD_PICKER_TAB_PANEL_ID: function() {
                    return p
                },
                SOUNDBOARD_PICKER_TAB_ID: function() {
                    return O
                },
                REACTION_PICKER_TAB_PANEL_ID: function() {
                    return A
                },
                REACTION_PICKER_TAB_ID: function() {
                    return N
                },
                SUPER_REACTION_PICKER_TAB_ID: function() {
                    return C
                },
                SuperReactionBalanceLocations: function() {
                    return a
                },
                GIF_PICKER_TAB_PANEL_ID: function() {
                    return L
                },
                GIF_PICKER_TAB_ID: function() {
                    return R
                },
                EMOJI_SIZE_MAP: function() {
                    return m
                },
                EMOJI_ROW_SIZE: function() {
                    return h
                }
            }), (s = i || (i = {})).GUILD = "GUILD", s.PACK = "PACK", s.UNICODE = "UNICODE", s.RECENT = "RECENT", s.CUSTOM = "CUSTOM", s.SEARCH_RESULTS = "SEARCH_RESULTS", s.FAVORITES = "FAVORITES", s.TOP_GUILD_EMOJI = "TOP_GUILD_EMOJI", s.PREMIUM_UPSELL = "PREMIUM_UPSELL";
            let I = "emoji-picker-grid";
            (c = r || (r = {})).RECENT = "recent", c.FAVORITES = "favorites", c.TOP_GUILD_EMOJI = "top guild emoji", c.CUSTOM = "custom", c.PEOPLE = "people", c.NATURE = "nature", c.FOOD = "food", c.ACTIVITY = "activity", c.TRAVEL = "travel", c.OBJECTS = "objects", c.SYMBOLS = "symbols", c.FLAGS = "flags", c.PREMIUM_UPSELL = "premium emoji", (_ = u || (u = {})).NONE = "", _.TOP_GUILD_EMOJI = "top_server", _.NEWLY_ADDED_EMOJI = "newly_added", (E = l || (l = {}))[E.EMOJI = 0] = "EMOJI", E[E.NSFW = 1] = "NSFW";
            let T = -1;
            (d = o || (o = {}))[d.MEDIUM = 40] = "MEDIUM", d[d.LARGE = 48] = "LARGE";
            let f = "emoji-picker-tab-panel",
                S = "emoji-picker-tab",
                p = "soundboard-picker-tab-panel",
                O = "soundboard-picker-tab",
                A = "reaction-picker-tab-panel",
                N = "reaction-picker-tab",
                C = "super-reaction-picker-tab";
            (a || (a = {})).TOOLTIP = "tooltip";
            let L = "gif-picker-tab-panel",
                R = "gif-picker-tab",
                m = {
                    reaction: 32,
                    default: 44,
                    jumbo: 96
                },
                h = 9
        },
        533613: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                HotspotLocations: function() {
                    return i
                }
            }), (r = i || (i = {})).REPORT_PROBLEM_POST_STREAM = "REPORT_PROBLEM_POST_STREAM", r.VIDEO_BACKGROUND_FEEDBACK = "VIDEO_BACKGROUND_FEEDBACK", r.VOICE_CALL_FEEDBACK = "VOICE_CALL_FEEDBACK", r.GUILD_ANALYTICS_GUILD_SETTINGS_MENU = "GUILD_ANALYTICS_GUILD_SETTINGS_MENU", r.NOW_PLAYING_CONSENT_CARD = "NOW_PLAYING_CONSENT_CARD", r.IOS_GUILD_NAV_EDUCATION = "IOS_GUILD_NAV_EDUCATION", r.VOICE_PANEL_INTRODUCTION = "VOICE_PANEL_INTRODUCTION", r.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL = "GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL", r.FAVORITE_EMOJI_TOOLTIP = "FAVORITE_EMOJI_TOOLTIP", r.POST_ACTIVITY_FEEDBACK = "POST_ACTIVITY_FEEDBACK", r.GUILD_DELETE_FEEDBACK = "GUILD_DELETE_FEEDBACK", r.GUILD_LEAVE_FEEDBACK = "GUILD_LEAVE_FEEDBACK", r.APPLICATION_COMMAND_TOOLTIP = "APPLICATION_COMMAND_TOOLTIP", r.GUILD_CAP_INLINE_UPSELL = "GUILD_CAP_INLINE_UPSELL", r.STAGE_CHANNEL_UPSELL = "STAGE_CHANNEL_UPSELL", r.HUB_WAITLIST_UPSELL = "HUB_WAITLIST_UPSELL", r.HUB_NEW = "HUB_NEW", r.HUB_SECOND_EMAIL_CONNECTION_UPSELL = "HUB_SECOND_EMAIL_CONNECTION_UPSELL", r.LIVE_STAGE_NOTIFICATION_BADGE = "LIVE_STAGE_NOTIFICATION_BADGE", r.GUILD_EVENT_UPSELL = "GUILD_EVENT_UPSELL", r.HUB_LINK_CHANNEL_NOTICE = "HUB_LINK_CHANNEL_NOTICE", r.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP = "PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP", r.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP = "ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP", r.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL = "ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL", r.MULTI_ACCOUNT_TOOLTIP = "MULTI_ACCOUNT_TOOLTIP", r.HUB_STUDY_ROOM_NOTICE = "HUB_STUDY_ROOM_NOTICE", r.CHANNEL_BANNER_MEMBER_LIST_NOTICE = "CHANNEL_BANNER_MEMBER_LIST_NOTICE", r.CHANGE_LANGUAGE_MODAL = "CHANGE_LANGUAGE_MODAL", r.ACTIVITY_BEB_TUTORIAL = "ACTIVITY_BEB_TUTORIAL", r.APP_DIRECTORY_SETTINGS_NEW_PILL = "APP_DIRECTORY_SETTINGS_NEW_PILL", r.INVITE_SPLASH_GUILD_HEADER_TOOLTIP = "INVITE_SPLASH_GUILD_HEADER_TOOLTIP", r.ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW", r.ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW", r.ANIMATED_VIDEO_BG_HACKER_DEN_NEW = "ANIMATED_VIDEO_BG_HACKER_DEN_NEW", r.ANIMATED_VIDEO_BG_WUMPICE_NEW = "ANIMATED_VIDEO_BG_WUMPICE_NEW", r.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW = "ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW", r.ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW = "ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW", r.SOUNDBOARD_WHEEL_EDUCATION_MODAL = "SOUNDBOARD_WHEEL_EDUCATION_MODAL", r.IN_APP_REPORTS_FEEDBACK = "IN_APP_REPORTS_FEEDBACK", r.CLIPS_CHANNEL_ATTACH_REMINDER = "CLIPS_CHANNEL_ATTACH_REMINDER"
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return l
                },
                generateInviteKeyFromExtraData: function() {
                    return o
                },
                parseExtraDataFromInviteKey: function() {
                    return a
                },
                parseInviteCodeFromInviteKey: function() {
                    return s
                }
            });
            var i = n("522632"),
                r = n("833858");
            let u = "event";

            function l(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = i.parse(t);
                        return (0, r.getFirstQueryStringValue)(e[u])
                    } catch (e) {
                        return
                    }
                }(t);
                return o({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function o(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(u, "=").concat(n)
            }

            function a(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let l = i.parse(n),
                    o = (0, r.getFirstQueryStringValue)(l[u]);
                return {
                    baseCode: t,
                    guildScheduledEventId: o
                }
            }

            function s(e) {
                let [t] = e.split("?");
                return t
            }
        },
        252931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInventoryGuildPacksUserExperimentConfig: function() {
                    return c
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return _
                },
                useInventoryGuildSettingsExperiment: function() {
                    return d
                }
            });
            var i = n("65597"),
                r = n("862205"),
                u = n("697218"),
                l = n("719923"),
                o = n("782340");
            let a = (0, r.createExperiment)({
                    kind: "user",
                    id: "2023-05_inventory_guild_packs",
                    label: "Inventory Guild Packs Experiment",
                    defaultConfig: {
                        desktopViewAndUseAndCollectEnabled: !1,
                        mobileViewAndUseEnabled: !1,
                        mobileAndFreemiumCollectEnabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Desktop view/use/collect",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 2,
                        label: "Desktop view/use/collect and mobile view/use",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 3,
                        label: "Read-only pack emoji for logged out users",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !1,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 4,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0
                        }
                    }, {
                        id: 5,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal (second group)",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0
                        }
                    }]
                }),
                s = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: i,
                        mobileViewAndUseEnabled: r,
                        mobileAndFreemiumCollectEnabled: u
                    } = n, o = l.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: u,
                        collectEnabled: o ? i : u
                    }
                },
                c = e => {
                    let {
                        user: t,
                        autoTrackExposure: n = !0
                    } = e;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1
                    } : s({
                        user: t,
                        config: a.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: n
                        })
                    })
                },
                _ = function() {
                    var e;
                    let {
                        expressionSourceGuild: t,
                        autoTrackExposure: n = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        expressionSourceGuild: void 0,
                        autoTrackExposure: !0
                    }, r = (0, i.default)([u.default], () => u.default.getCurrentUser()), l = a.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: o,
                        showTryPacksModalAndV2Copy: c,
                        collectEnabled: _
                    } = s({
                        user: r,
                        config: l
                    }), E = o && _ && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: o,
                        collectEnabled: E,
                        showTryPacksModalAndV2Copy: c
                    }
                },
                E = (0, r.createExperiment)({
                    kind: "guild",
                    id: "2023-06_inventory_guild_setting",
                    label: "Inventory Guild Settings Experiment",
                    defaultConfig: {
                        showSettingsToggle: !1,
                        allowCollection: !1,
                        getNewSettingsDescription: () => null
                    },
                    treatments: [{
                        id: 1,
                        label: "Show settings toggle, but collection is not allowed.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !1,
                            getNewSettingsDescription: () => o.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => o.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => o.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }]
                }),
                d = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = E.useExperiment({
                        guildId: null != e ? e : "",
                        location: "482926_3"
                    }, {
                        autoTrackExposure: void 0 === t || t
                    });
                    return {
                        showSettingsToggle: n.showSettingsToggle,
                        allowCollection: n.allowCollection,
                        getNewSettingsDescription: n.getNewSettingsDescription
                    }
                }
        },
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("748820"),
                u = n("77078"),
                l = n("112679"),
                o = n("55689"),
                a = n("855133"),
                s = n("599110"),
                c = n("659500"),
                _ = n("49111"),
                E = n("646718");

            function d(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: d,
                    onClose: I,
                    onComplete: T,
                    onSubscriptionConfirmation: f,
                    analyticsLocations: S,
                    analyticsObject: p,
                    analyticsLocation: O,
                    analyticsSourceLocation: A,
                    isGift: N = !1,
                    giftMessage: C,
                    subscriptionTier: L,
                    trialId: R,
                    postSuccessGuild: m,
                    openInvoiceId: h,
                    applicationId: U,
                    referralTrialOfferId: g,
                    giftRecipient: P,
                    returnRef: D
                } = null != e ? e : {}, M = !1, v = (0, r.v4)();
                (0, u.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: r,
                            ...u
                        } = n;
                        return (0, i.jsx)(e, {
                            ...u,
                            loadId: v,
                            subscriptionTier: L,
                            skuId: L,
                            isGift: N,
                            giftMessage: C,
                            giftRecipient: P,
                            initialPlanId: t,
                            followupSKUInfo: d,
                            onClose: e => {
                                r(), null == I || I(e), e && (null == f || f())
                            },
                            onComplete: () => {
                                M = !0, null == T || T(), !N && ((0, a.setIsPersistentHelperHidden)(!0), (0, a.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: f,
                            analyticsLocations: S,
                            analyticsObject: p,
                            analyticsLocation: O,
                            analyticsSourceLocation: A,
                            trialId: R,
                            postSuccessGuild: m,
                            planGroup: E.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: h,
                            applicationId: U,
                            referralTrialOfferId: g,
                            returnRef: D
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !M && s.default.track(_.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: v,
                            payment_type: _.PurchaseTypeToAnalyticsPaymentType[_.PurchaseTypes.SUBSCRIPTION],
                            location: null != O ? O : p,
                            source: A,
                            subscription_type: _.SubscriptionTypes.PREMIUM,
                            is_gift: N,
                            eligible_for_trial: null != R,
                            application_id: U,
                            location_stack: S
                        }), (0, l.clearError)(), (0, o.clearPurchaseTokenAuthState)(), null == I || I(M), M && (!N && c.ComponentDispatch.dispatch(_.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == f || f())
                    },
                    onCloseRequest: _.NOOP
                })
            }
        },
        626301: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                navigateToPremiumMarketingPage: function() {
                    return u
                }
            });
            var i = n("79112"),
                r = n("49111");
            let u = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                i.default.open(r.UserSettingsSections.PREMIUM, null, {
                    openWithoutBackstack: e
                })
            }
        },
        855133: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                togglePersistentHelper: function() {
                    return r
                },
                setHasCompletedStep: function() {
                    return u
                },
                resetPremiumTutorialStore: function() {
                    return l
                },
                setCanPlayWowMoment: function() {
                    return o
                },
                setIsPersistentHelperHidden: function() {
                    return a
                },
                setNavigatedFromHelper: function() {
                    return s
                }
            });
            var i = n("913144");
            let r = () => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                u = () => {
                    i.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                l = () => {
                    i.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                o = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                a = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                s = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        78345: function(e, t, n) {
            "use strict";
            var i, r, u, l;
            n.r(t), n.d(t, {
                PremiumHeaderThemes: function() {
                    return i
                },
                PremiumGiftStyles: function() {
                    return r
                },
                PromotionFlags: function() {
                    return o
                }
            }), (u = i || (i = {}))[u.DEFAULT = 0] = "DEFAULT", u[u.WINTER = 1] = "WINTER", (l = r || (r = {}))[l.SNOWGLOBE = 1] = "SNOWGLOBE", l[l.BOX = 2] = "BOX", l[l.CUP = 3] = "CUP", l[l.STANDARD_BOX = 4] = "STANDARD_BOX", l[l.CAKE = 5] = "CAKE", l[l.CHEST = 6] = "CHEST", l[l.COFFEE = 7] = "COFFEE";
            let o = Object.freeze({
                IS_BLOCKED_IOS: 32,
                IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS: 64,
                SUPPRESS_NOTIFICATION: 128
            })
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return I
                },
                maybeFetchPremiumLikelihood: function() {
                    return f
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return S
                }
            });
            var i = n("884691"),
                r = n("65597"),
                u = n("872717"),
                l = n("913144"),
                o = n("775433"),
                a = n("697218"),
                s = n("10514"),
                c = n("764364"),
                _ = n("676572"),
                E = n("646718"),
                d = n("49111");
            let I = "nonSubscriber";
            async function T() {
                try {
                    l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await u.default.get({
                        url: d.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [I]: e.non_subscriber,
                                [E.PremiumSubscriptionSKUs.TIER_0]: e[E.PremiumSubscriptionSKUs.TIER_0],
                                [E.PremiumSubscriptionSKUs.TIER_2]: e[E.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function f(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), i = _.default.shouldFetchPremiumLikelihood(), r = a.default.getCurrentUser();
                p(r, i, t, n)
            }

            function S(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), u = (0, r.default)([_.default], () => _.default.shouldFetchPremiumLikelihood()), l = (0, r.default)([a.default], () => a.default.getCurrentUser());
                i.useEffect(() => {
                    p(l, u, t, n)
                }, [l, u, t, n])
            }

            function p(e, t, n, i) {
                null != e && !(0, c.isPremium)(e) && n && (t && T(), i && (!s.default.isLoadedForSKU(E.PremiumSubscriptionSKUs.TIER_0) && !s.default.isFetchingForSKU(E.PremiumSubscriptionSKUs.TIER_0) && (0, o.fetchSubscriptionPlansForSKU)(E.PremiumSubscriptionSKUs.TIER_0), !s.default.isLoadedForSKU(E.PremiumSubscriptionSKUs.TIER_2) && !s.default.isFetchingForSKU(E.PremiumSubscriptionSKUs.TIER_2) && (0, o.fetchSubscriptionPlansForSKU)(E.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("446674"),
                r = n("913144");
            let u = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                l = u;
            class o extends i.default.Store {
                initialize() {
                    l = u
                }
                getState() {
                    return l
                }
                shouldFetchPremiumLikelihood() {
                    return !l.isFetching && !l.fetched
                }
            }
            o.displayName = "UserPremiumLikelihoodStore";
            var a = new o(r.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    l.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    l.premiumLikelihood = t, l.fetched = !0, l.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    l.isFetching = !1
                },
                LOGOUT: function() {
                    l.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2022-12_premium_targeted_upsells",
                label: "Premium Targeted Upsells",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use highest expected value to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !0,
                        useLikelihood: !1
                    }
                }, {
                    id: 2,
                    label: "Use highest likelihood to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !1,
                        useLikelihood: !0
                    }
                }]
            });
            var u = r
        },
        15733: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("884691"),
                r = n("446674"),
                u = n("913144"),
                l = n("850068"),
                o = n("271938"),
                a = n("160299"),
                s = n("357957");

            function c() {
                let e = (0, r.useStateFromStores)([s.default], () => s.default.getDefaultBillingCountryCode()),
                    t = (0, r.useStateFromStores)([a.default], () => a.default.ipCountryCode),
                    n = (0, r.useStateFromStores)([o.default], () => o.default.isAuthenticated());
                return i.useEffect(() => {
                    u.default.wait(() => {
                        n && !a.default.isPaymentSourceFetching && !s.default.hasFetchedPaymentSources && l.fetchPaymentSources()
                    })
                }, [n]), i.useEffect(() => {
                    n && !a.default.ipCountryCodeLoaded && l.fetchIpCountryCode()
                }, [t, n]), {
                    defaultBillingCountryCode: e,
                    ipCountryCode: t
                }
            }
        },
        154889: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                discountOfferHasTier: function() {
                    return _
                },
                usePremiumDiscountOffer: function() {
                    return E
                }
            });
            var i = n("884691"),
                r = n("446674"),
                u = n("862337"),
                l = n("697218"),
                o = n("340412"),
                a = n("719923"),
                s = n("646718");

            function c(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function _(e, t) {
                var n;
                if (null == e) return !1;
                let i = new Set(null === (n = e.discount) || void 0 === n ? void 0 : n.plan_ids.map(e => s.SubscriptionPlanInfo[e].skuId));
                return i.has(t)
            }

            function E() {
                let e = (0, r.useStateFromStores)([o.default], () => o.default.getUserDiscount(s.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID)),
                    [t, n] = i.useState(c(e)),
                    _ = (0, r.useStateFromStores)([l.default], () => (0, a.isPremium)(l.default.getCurrentUser()));
                return i.useEffect(() => {
                    if (null == e || null == e.expires_at) return;
                    let i = new u.Timeout,
                        r = () => {
                            let u = null != e.expires_at ? Date.parse(e.expires_at) - Date.now() : 0;
                            null == i || i.start(u, () => {
                                !t && c(e) ? n(!0) : r()
                            })
                        };
                    return r(), () => i.stop()
                }, [t, e]), t || _ ? null : e
            }
        },
        635956: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                u = n.n(r),
                l = n("446674"),
                o = n("77078"),
                a = n("79112"),
                s = n("685665"),
                c = n("788506"),
                _ = n("649844"),
                E = n("393414"),
                d = n("797647"),
                I = n("697218"),
                T = n("521012"),
                f = n("471671"),
                S = n("181114"),
                p = n("978679"),
                O = n("216422"),
                A = n("719923"),
                N = n("646718"),
                C = n("49111"),
                L = n("782340"),
                R = n("683437"),
                m = function(e) {
                    let {
                        isGift: t,
                        subscriptionTier: r,
                        onClick: m,
                        size: h,
                        className: U,
                        trialId: g,
                        isTrialCTA: P,
                        buttonText: D,
                        buttonTextClassName: M,
                        postSuccessGuild: v,
                        onSubscribeModalClose: b,
                        premiumModalAnalyticsLocation: G,
                        showIcon: y = !0,
                        disableShine: B,
                        applicationId: F,
                        giftMessage: w,
                        overrideDisabledButtonText: k,
                        shinyButtonClassName: H,
                        ...x
                    } = e, V = (0, l.useStateFromStores)([I.default], () => I.default.getCurrentUser()), K = (0, l.useStateFromStores)([f.default], () => f.default.isFocused()), W = (0, l.useStateFromStores)([T.default], () => T.default.getPremiumTypeSubscription()), {
                        analyticsLocations: j
                    } = (0, s.default)(), Y = e => {
                        if (e.preventDefault(), null == V) {
                            (0, E.transitionTo)(C.Routes.LOGIN);
                            return
                        }
                        if (null == m || m(e), (null == W ? void 0 : W.status) === C.SubscriptionStatusTypes.ACCOUNT_HOLD) {
                            (0, c.trackPremiumSettingsPaneOpened)(), a.default.open(C.UserSettingsSections.PREMIUM), null == b || b(!1);
                            return
                        }! function(e) {
                            let {
                                isClaimed: t,
                                isVerified: r,
                                isGift: u,
                                subscriptionTier: l,
                                trialId: a,
                                postSuccessGuild: s,
                                onSubscribeModalClose: c,
                                analyticsLocations: E,
                                premiumModalAnalyticsLocation: d,
                                applicationId: I,
                                giftMessage: T
                            } = e;
                            if (!t) {
                                (0, o.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("984599").then(n.bind(n, "984599"));
                                    return t => {
                                        let {
                                            onClose: n,
                                            ...r
                                        } = t;
                                        return (0, i.jsx)(e, {
                                            ...r,
                                            onClose: n
                                        })
                                    }
                                });
                                return
                            }
                            if (!r) {
                                (0, o.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("899917").then(n.bind(n, "899917"));
                                    return t => {
                                        let {
                                            onClose: n,
                                            ...r
                                        } = t;
                                        return (0, i.jsx)(e, {
                                            ...r,
                                            onClose: n
                                        })
                                    }
                                });
                                return
                            }
                            let f = C.AnalyticsObjectTypes.BUY;
                            null != a ? f = C.AnalyticsObjectTypes.TRIAL : u && (f = C.AnalyticsObjectTypes.GIFT), (0, _.default)({
                                isGift: u,
                                initialPlanId: null,
                                subscriptionTier: l,
                                analyticsLocations: E,
                                analyticsObject: {
                                    object: C.AnalyticsObjects.BUTTON_CTA,
                                    objectType: f,
                                    ...d
                                },
                                trialId: a,
                                postSuccessGuild: s,
                                onClose: c,
                                applicationId: I,
                                giftMessage: T
                            })
                        }({
                            isClaimed: V.isClaimed(),
                            isVerified: V.verified,
                            isGift: t,
                            subscriptionTier: r,
                            trialId: g,
                            postSuccessGuild: v,
                            onSubscribeModalClose: b,
                            analyticsLocations: j,
                            premiumModalAnalyticsLocation: G,
                            applicationId: F,
                            giftMessage: w
                        })
                    };
                    if (P) return (0, i.jsxs)(o.Button, {
                        size: h,
                        className: U,
                        innerClassName: R.premiumSubscribeButton,
                        look: o.Button.Looks.INVERTED,
                        onClick: Y,
                        ...x,
                        children: [y && (0, i.jsx)(O.default, {
                            className: R.premiumIcon
                        }), (0, i.jsx)("span", {
                            className: u(R.buttonText, M),
                            children: null != D ? D : L.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                        })]
                    });
                    if (t) return (0, i.jsxs)(o.Button, {
                        size: h,
                        className: U,
                        innerClassName: R.giftButton,
                        color: o.Button.Colors.PRIMARY,
                        onClick: Y,
                        ...x,
                        children: [(0, i.jsx)(p.default, {
                            className: R.giftIcon
                        }), (0, i.jsx)("span", {
                            className: u(R.buttonText, M),
                            children: null != D ? D : L.default.Messages.PREMIUM_GIFTING_BUTTON
                        })]
                    });
                    let z = L.default.Messages.APPLICATION_STORE_GET_PREMIUM,
                        J = null != W ? (0, A.getPremiumPlanItem)(W) : null,
                        X = null != J ? A.default.getPremiumType(J.planId) : null == V ? void 0 : V.premiumType,
                        q = r === N.PremiumSubscriptionSKUs.TIER_2 && null != X && [N.PremiumTypes.TIER_0, N.PremiumTypes.TIER_1].includes(X);
                    q && (z = L.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
                    let Z = null != W && W.status !== C.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, d.isNoneSubscription)(W.planId) && !q,
                        Q = Z ? null != k ? k : function(e) {
                            let {
                                ctaSubscriptionSkuId: t,
                                currentPremiumType: n
                            } = e, i = null, r = null;
                            if (null != t && t !== N.PremiumSubscriptionSKUs.LEGACY && t !== N.PremiumSubscriptionSKUs.TIER_0 && t !== N.PremiumSubscriptionSKUs.TIER_1 && t !== N.PremiumSubscriptionSKUs.TIER_2) return {
                                disabledButtonText: i,
                                disabledButtonTooltipText: r
                            };
                            let u = null != t ? N.PremiumSubscriptionSKUToPremiumType[t] : null,
                                l = null != u ? N.PremiumTypeOrder[u] : null,
                                o = null != n ? N.PremiumTypeOrder[n] : null;
                            return null != o && null != l && l < o ? (i = L.default.Messages.APPLICATION_STORE_GET_PREMIUM, r = L.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != u && null != n && u === n ? (i = L.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, r = L.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == u && null != n && n === N.PremiumTypes.TIER_2 && (r = L.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
                                disabledButtonText: i,
                                disabledButtonTooltipText: r
                            }
                        }({
                            ctaSubscriptionSkuId: r,
                            currentPremiumType: X
                        }) : null;

                    function $(e) {
                        var t, n;
                        return (0, i.jsxs)(S.default, {
                            disabled: Z,
                            onClick: Y,
                            innerClassName: R.premiumSubscribeButton,
                            color: r === N.PremiumSubscriptionSKUs.TIER_1 ? o.Button.Colors.PRIMARY : o.Button.Colors.GREEN,
                            size: h,
                            className: H,
                            wrapperClassName: U,
                            pauseAnimation: !K || B,
                            ...x,
                            ...e,
                            children: [y && (0, i.jsx)(O.default, {
                                className: R.premiumIcon
                            }), (0, i.jsx)("span", {
                                className: u(R.buttonText, M),
                                children: null !== (n = null !== (t = null == Q ? void 0 : Q.disabledButtonText) && void 0 !== t ? t : D) && void 0 !== n ? n : z
                            })]
                        })
                    }
                    return (null == Q ? void 0 : Q.disabledButtonTooltipText) != null ? (0, i.jsx)(o.Tooltip, {
                        text: Q.disabledButtonTooltipText,
                        children: $
                    }) : $()
                }
        },
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return l
                },
                getDevicePushProvider: function() {
                    return o
                }
            });
            var i, r, u = n("773336");
            let l = null;

            function o() {
                return (0, u.isAndroid)(), null
            }(i = r || (r = {})).REMINDER = "reminder", i.TOP_MESSAGE_PUSH = "top_messages_push", i.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        846325: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                MAX_LENGTH_SOUND_NAME: function() {
                    return u
                },
                MAX_SOUND_LENGTH_SECONDS: function() {
                    return l
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return o
                },
                SoundboardWheelSize: function() {
                    return a
                },
                DEFAULT_KEYBIND: function() {
                    return s
                },
                EMPTY_SOUND_LIST: function() {
                    return c
                },
                CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: function() {
                    return _
                }
            });
            let u = 32,
                l = 5,
                o = "DEFAULT";
            (r = i || (i = {}))[r.SUCCESS = 0] = "SUCCESS", r[r.INTERRUPTED = 1] = "INTERRUPTED", i.SUCCESS, i.INTERRUPTED;
            let a = {
                    width: 424,
                    height: 424,
                    padding: 100
                },
                s = "ctrl+`",
                c = [],
                _ = "0"
        },
        235004: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            });
            var i, r, u = n("917351"),
                l = n.n(u),
                o = n("446674"),
                a = n("913144"),
                s = n("845579"),
                c = n("374363"),
                _ = n("697218"),
                E = n("599110"),
                d = n("829536"),
                I = n("846325"),
                T = n("49111"),
                f = n("397336");
            (i = r || (r = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED";
            let S = new Map,
                p = new Map,
                O = new Set,
                A = r.NOT_FETCHED,
                N = r.NOT_FETCHED,
                C = new Set,
                L = new Map,
                R = !1;

            function m(e) {
                let {
                    sound: t
                } = e, n = S.get(t.guildId), i = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != i && -1 !== i ? (n[i] = t, S.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), S.set(t.guildId, [...n]))
            }
            let h = l.debounce(e => {
                E.default.track(T.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, d.amplitudeToPerceptual)(e))
                }), s.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function U(e) {
                var t, n;
                let i = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(i)) t.soundboardMuted ? O.add(e) : O.delete(e);
                for (let e of O.keys()) null == i[e] && O.delete(e)
            }
            class g extends o.default.Store {
                initialize() {
                    this.waitFor(c.default), U(c.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(S),
                        favoritedSoundIds: Array.from(C),
                        localSoundboardMutes: Array.from(O)
                    }
                }
                getSounds() {
                    return S
                }
                getSoundsForGuild(e) {
                    return S.get(e)
                }
                getSound(e, t) {
                    var n;
                    let i = null !== (n = S.get(e)) && void 0 !== n ? n : [];
                    return i.find(e => e.soundId === t)
                }
                getSoundById(e) {
                    let t = Array.from(S.values()).flat();
                    return t.find(t => t.soundId === e)
                }
                isFetchingSounds() {
                    return N === r.FETCHING
                }
                isFetchingDefaultSounds() {
                    return A === r.FETCHING
                }
                isFetching() {
                    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
                }
                shouldFetchDefaultSounds() {
                    return A === r.NOT_FETCHED
                }
                hasFetchedDefaultSounds() {
                    return A === r.FETCHED
                }
                isUserPlayingSounds(e) {
                    let t = L.get(e);
                    return null != t && t > 0
                }
                isPlayingSound(e) {
                    return null != p.get(e)
                }
                isFavoriteSound(e) {
                    return C.has(e)
                }
                getFavorites() {
                    return C
                }
                isLocalSoundboardMuted(e) {
                    return O.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return R
                }
                hasFetchedAllSounds() {
                    return N === r.FETCHED && A === r.FETCHED
                }
            }
            g.displayName = "SoundboardStore";
            var P = new g(a.default, {
                LOGOUT: function() {
                    S.clear(), p.clear(), L.clear(), R = !1, N = r.NOT_FETCHED, A = r.NOT_FETCHED
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    N = r.FETCHING
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: m,
                GUILD_SOUNDBOARD_SOUND_UPDATE: m,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
                    let {
                        soundId: t,
                        guildId: n
                    } = e;
                    S.delete(t);
                    let i = S.get(n),
                        r = null == i ? void 0 : i.findIndex(e => e.soundId === t);
                    null != i && null != r && !(r < 0) && (i.splice(r, 1), S.set(n, [...i]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, i;
                    let {
                        soundId: r,
                        userId: u
                    } = e, l = (null !== (n = p.get(r)) && void 0 !== n ? n : 0) + 1, o = (null !== (i = L.get(u)) && void 0 !== i ? i : 0) + 1;
                    p.set(r, l), L.set(u, o), u !== (null === (t = _.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (R = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: i,
                        userId: r
                    } = e, u = (null !== (t = p.get(i)) && void 0 !== t ? t : 0) - 1, l = (null !== (n = L.get(r)) && void 0 !== n ? n : 0) - 1;
                    u <= 0 ? p.delete(i) : p.set(i, u), l <= 0 ? L.delete(r) : L.set(r, l)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    h(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    p.clear(), L.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e, {
                        type: n,
                        proto: i
                    } = t;
                    if (n === f.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var r, u;
                        C = new Set(null !== (u = null == i ? void 0 : null === (r = i.favoriteSoundboardSounds) || void 0 === r ? void 0 : r.soundIds) && void 0 !== u ? u : [])
                    } else n === f.UserSettingsTypes.PRELOADED_USER_SETTINGS && U(i)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    A = r.FETCHING
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    let {
                        soundboardSounds: t
                    } = e;
                    S.set(I.DEFAULT_SOUND_GUILD_ID, t), A = r.FETCHED
                },
                SOUNDBOARD_SOUNDS_RECEIVED: function(e) {
                    let {
                        updates: t
                    } = e;
                    t.forEach(e => {
                        let {
                            guildId: t,
                            sounds: n
                        } = e;
                        S.set(t, n)
                    }), N = r.FETCHED
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    S.delete(t.id)
                },
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
                    let {
                        userId: t
                    } = e;
                    O.has(t) ? O.delete(t) : O.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        soundboardStoreState: t
                    } = e;
                    S = new Map(Object.entries(t.soundboardSounds)), C = new Set(t.favoritedSoundIds), O = new Set(t.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        soundboardSounds: n
                    } = e;
                    S.set(t, n)
                }
            })
        },
        364685: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return B
                }
            });
            var i, r, u = n("102053"),
                l = n("446674"),
                o = n("913144"),
                a = n("802493"),
                s = n("595525"),
                c = n("212084"),
                _ = n("867805"),
                E = n("267567"),
                d = n("813006"),
                I = n("778689"),
                T = n("305961"),
                f = n("161585"),
                S = n("24373"),
                p = n("49111");
            (i = r || (r = {}))[i.Unloaded = 0] = "Unloaded", i[i.MaybeLoaded = 1] = "MaybeLoaded", i[i.Loaded = 2] = "Loaded";
            let O = 2,
                A = new Map,
                N = new Map,
                C = null,
                L = [],
                R = null,
                m = !1,
                h = new Map,
                U = (e, t) => {
                    h = new Map(h.set(e, t))
                },
                g = 1e3 * p.Durations.HOUR,
                P = () => {
                    if (0 !== O) return;
                    let e = a.default.database();
                    if (null == e) return;
                    O = 2;
                    let t = (0, s.tryLoadOrResetCacheGateway)("StickerStore.loadSavedGuildStickers", () => u.default.time("\uD83D\uDCBE", "loadSavedGuildStickers", () => c.default.getSync(e)));
                    if (null != t) {
                        for (let [e, n] of t)
                            if (I.default.isMember(e) && !h.has(e)) {
                                for (let t of n) D(t, !0, T.default.getGuild(e));
                                U(e, n)
                            }
                    }
                },
                D = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    N.set(e.id, e), t && M(e, n)
                },
                M = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == C) return;
                    let {
                        tags: n
                    } = e, i = {
                        type: f.StickerMetadataTypes.STICKER_NAME,
                        value: e.name.trim().toLocaleLowerCase()
                    };
                    if ((0, S.isStandardSticker)(e)) {
                        let t = L.find(t => t.id === e.pack_id),
                            r = [i, ...(null != n ? n : "").split(",").map(e => ({
                                type: f.StickerMetadataTypes.TAG,
                                value: e.trim().toLocaleLowerCase()
                            }))];
                        null != t && r.push({
                            type: f.StickerMetadataTypes.PACK_NAME,
                            value: t.name
                        }), C.set(e.id, r)
                    } else if ((0, S.isGuildSticker)(e) && null != n) {
                        let r = _.default.getByName(n),
                            u = {
                                type: f.StickerMetadataTypes.TAG,
                                value: n.trim().toLocaleLowerCase()
                            },
                            l = [i, u];
                        if (null != t) {
                            let e = (t instanceof(0, d.default) ? t.name : t.properties.name).trim().toLocaleLowerCase();
                            null != e && "" !== e && l.push({
                                type: f.StickerMetadataTypes.GUILD_NAME,
                                value: e
                            })
                        }
                        if (null == r) {
                            C.set(e.id, l);
                            return
                        }
                        l.push({
                            type: f.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: r.surrogates
                        }), r.forEachDiversity(e => l.push({
                            type: f.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: e.surrogates
                        })), C.set(e.id, l)
                    }
                },
                v = (e, t, n) => {
                    A.set(e.id, e);
                    let i = [...L];
                    if (t) {
                        let t = i.findIndex(t => t.id === e.id); - 1 !== t ? i[t] = e : i.push(e), L = i
                    }(t || n) && e.stickers.forEach(e => D(e))
                },
                b = () => {
                    h.forEach((e, t) => {
                        let n = T.default.getGuild(t);
                        null != n && e.forEach(e => M(e, n))
                    }), L.forEach(e => {
                        e.stickers.forEach(e => M(e))
                    })
                };

            function G(e) {
                null != e.stickers && (e.stickers.forEach(t => D(t, !0, e)), U(e.id, e.stickers))
            }
            class y extends l.default.Store {
                initialize() {
                    this.waitFor(a.default, I.default, T.default)
                }
                get isLoaded() {
                    return 0 !== O
                }
                get stickerMetadata() {
                    return P(), null == C && (C = new Map, b()), C
                }
                get hasLoadedStickerPacks() {
                    return null != R && R + g > Date.now()
                }
                get isFetchingStickerPacks() {
                    return m
                }
                getStickerById(e) {
                    return !N.has(e) && P(), N.get(e)
                }
                getStickerPack(e) {
                    return A.get(e)
                }
                getPremiumPacks() {
                    return L
                }
                isPremiumPack(e) {
                    return L.some(t => t.id === e)
                }
                getRawStickersByGuild() {
                    return h
                }
                getAllStickersIterator() {
                    return P(), N.values()
                }
                getAllGuildStickers() {
                    return P(), h
                }
                getStickersByGuildId(e) {
                    return P(), h.get(e)
                }
            }
            y.displayName = "StickersStore";
            var B = new y(o.default, {
                BACKGROUND_SYNC: () => {
                    C = null, N = new Map, h = new Map, O = 0
                },
                CONNECTION_OPEN: e => {
                    let {
                        guilds: t
                    } = e;
                    C = null, N = new Map, h = new Map, t.forEach(G), O = t.every(e => null != e.stickers) ? 1 : 0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    !E.default.isLurking(t.id) && (G(t), 1 === O && null == t.stickers && null != t.stickerUpdates && (O = 0))
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e, i = null !== (t = h.get(n.id)) && void 0 !== t ? t : [];
                    i.forEach(e => {
                        null != C && C.delete(e.id), N.delete(e.id)
                    }), h.delete(n.id), h = new Map(h)
                },
                LOGOUT: () => {
                    O = 0, L = [], N.clear(), A.clear(), C = null, h.clear(), h = new Map(h), m = !1, R = null
                },
                STICKER_PACKS_FETCH_START: () => {
                    m = !0
                },
                STICKER_PACKS_FETCH_SUCCESS: e => {
                    let {
                        packs: t
                    } = e;
                    t.forEach(e => v(e, !0)), R = Date.now(), m = !1
                },
                STICKER_PACK_FETCH_SUCCESS: e => {
                    let {
                        pack: t,
                        ingestStickers: n
                    } = e;
                    v(t, !1, n)
                },
                GUILD_STICKERS_FETCH_SUCCESS: e => {
                    let {
                        guildId: t,
                        stickers: n
                    } = e;
                    n.forEach(e => D(e)), U(t, n)
                },
                GUILD_STICKERS_CREATE_SUCCESS: e => {
                    var t, n;
                    let {
                        guildId: i,
                        sticker: r
                    } = e, u = null !== (t = h.get(i)) && void 0 !== t ? t : [];
                    U(i, [...null !== (n = u.filter(e => e.id !== r.id)) && void 0 !== n ? n : [], r]), D(r)
                },
                STICKER_FETCH_SUCCESS: e => {
                    let {
                        sticker: t
                    } = e;
                    D(t, !1)
                },
                GUILD_STICKERS_UPDATE: e => {
                    var t;
                    let {
                        guildId: n,
                        stickers: i
                    } = e, r = e => {
                        let t;
                        let n = N.get(e.id);
                        return null != n && (0, S.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
                            ...e,
                            user: t
                        }
                    }, u = null !== (t = h.get(n)) && void 0 !== t ? t : [], l = u.filter(e => null == i.find(t => t.id === e.id));
                    l.forEach(e => {
                        N.delete(e.id), null != C && C.delete(e.id)
                    });
                    let o = i.map(e => r(e));
                    o.forEach(e => D(e)), U(n, o)
                }
            })
        },
        729912: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SilentMessagesExperiment: function() {
                    return r
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-01_silent_messages",
                label: "Silent Messages",
                defaultConfig: {
                    allowSending: !1
                },
                treatments: [{
                    id: 1,
                    label: "Allow sending @silent messages",
                    config: {
                        allowSending: !0
                    }
                }]
            })
        },
        804888: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SILENT_RE: function() {
                    return u
                },
                canSuppressNotifications: function() {
                    return l
                },
                default: function() {
                    return o
                }
            });
            var i = n("729912");
            let r = "@silent",
                u = new RegExp("^".concat(r, "(\\s|$)"));

            function l() {
                let e = i.SilentMessagesExperiment.getCurrentConfig({
                    location: "456bd9_1"
                }, {
                    autoTrackExposure: !1
                });
                return e.allowSending
            }

            function o(e) {
                return l() && null != e.match(u) ? [!0, e.substring(r.length).trim()] : [!1, e]
            }
        },
        504439: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                thumbHashToRGBA: function() {
                    return r
                }
            });
            var i = n("723251");

            function r(e) {
                let {
                    detail: t = 1,
                    pop: n = 1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                    PI: r,
                    min: u,
                    max: l,
                    cos: o,
                    round: a
                } = Math, s = e[0] | e[1] << 8 | e[2] << 16, c = e[3] | e[4] << 8, _ = (63 & s) / 63, E = (s >> 6 & 63) / 31.5 - 1, d = (s >> 12 & 63) / 31.5 - 1, I = s >> 23, T = (c >> 3 & 63) / 63, f = (c >> 9 & 63) / 63, S = c >> 15, p = l(3, S ? I ? 5 : 7 : 7 & c), O = l(3, S ? 7 & c : I ? 5 : 7), A = I ? (15 & e[5]) / 15 : 1, N = (e[5] >> 4) / 15, C = I ? 6 : 5, L = 0, R = (t, n, i) => {
                    let r = [];
                    for (let u = 0; u < n; u++)
                        for (let l = u ? 0 : 1; l * n < t * (n - u); l++) r.push(((e[C + (L >> 1)] >> ((1 & L++) << 2) & 15) / 7.5 - 1) * i);
                    return r
                }, m = R(p, O, (s >> 18 & 31) / 31 / 2), h = R(3, 3, T * n), U = R(3, 3, f * n), g = I ? R(5, 5, N) : [], P = (0, i.thumbHashToApproximateAspectRatio)(e), D = a(P > 1 ? 32 : 32 * P), M = a(P > 1 ? 32 / P : 32), v = new Uint8Array(D * M * 4), b = [], G = [];
                for (let e = 0, n = 0; e < M; e++)
                    for (let i = 0; i < D; i++, n += 4) {
                        let a = _,
                            s = E,
                            c = d,
                            T = A;
                        for (let e = 0, t = l(p, I ? 5 : 3); e < t; e++) b[e] = o(r / D * (i + .5) * e);
                        for (let t = 0, n = l(O, I ? 5 : 3); t < n; t++) G[t] = o(r / M * (e + .5) * t);
                        for (let e = 0, n = 0; e < O; e++)
                            for (let i = e ? 0 : 1, r = 2 * G[e]; i * O < p * (O - e); i++, n++) !(i > t) && !(e > t) && (a += m[n] * b[i] * r);
                        for (let e = 0, t = 0; e < 3; e++)
                            for (let n = e ? 0 : 1, i = 2 * G[e]; n < 3 - e; n++, t++) {
                                let e = b[n] * i;
                                s += h[t] * e, c += U[t] * e
                            }
                        if (I)
                            for (let e = 0, t = 0; e < 5; e++)
                                for (let n = e ? 0 : 1, i = 2 * G[e]; n < 5 - e; n++, t++) T += g[t] * b[n] * i;
                        let f = a - 2 / 3 * s,
                            S = (3 * a - f + c) / 2,
                            N = S - c;
                        v[n] = l(0, 255 * u(1, S)), v[n + 1] = l(0, 255 * u(1, N)), v[n + 2] = l(0, 255 * u(1, f)), v[n + 3] = l(0, 255 * u(1, T))
                    }
                return {
                    w: D,
                    h: M,
                    rgba: v
                }
            }
        },
        211895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("913144"),
                r = n("54239"),
                u = n("49111");

            function l() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        openWithoutBackstack: !1
                    };
                i.default.dispatch({
                    type: "USER_SETTINGS_MODAL_OPEN",
                    section: e,
                    subsection: t,
                    ...n
                }), (0, r.pushLayer)(u.Layers.USER_SETTINGS)
            }
        },
        917219: function(e, t, n) {
            "use strict";
            var i, r, u, l;
            n.r(t), n.d(t, {
                VideoFilterType: function() {
                    return i
                },
                DefaultVideoBackground: function() {
                    return r
                },
                ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: function() {
                    return o
                },
                DEFAULT_VIDEO_BACKGROUND_SORT: function() {
                    return a
                },
                BLUR_BACKGROUND_OPTION: function() {
                    return s
                },
                BACKGROUND_REPLACEMENT_SIZE: function() {
                    return c
                },
                MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                    return _
                }
            }), (u = i || (i = {}))[u.BACKGROUND = 0] = "BACKGROUND", (l = r || (r = {}))[l.OPTION_1 = 0] = "OPTION_1", l[l.OPTION_2 = 1] = "OPTION_2", l[l.OPTION_3 = 2] = "OPTION_3", l[l.OPTION_4 = 3] = "OPTION_4", l[l.OPTION_7 = 7] = "OPTION_7", l[l.OPTION_8 = 8] = "OPTION_8", l[l.OPTION_9 = 9] = "OPTION_9", l[l.OPTION_10 = 10] = "OPTION_10";
            let o = [r.OPTION_7, r.OPTION_8, r.OPTION_9, r.OPTION_10],
                a = [r.OPTION_7, r.OPTION_8, r.OPTION_9, r.OPTION_10, r.OPTION_1, r.OPTION_2, r.OPTION_3, r.OPTION_4].reduce((e, t, n) => ({
                    ...e,
                    [t]: n
                }), {}),
                s = "blur",
                c = {
                    width: 1280,
                    height: 720
                },
                _ = 10485760
        },
        450205: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("666038");
            class r extends i.default {
                toString() {
                    return this.name
                }
                constructor(e) {
                    super(), this.id = e.id, this.type = e.type, this.name = e.name, this.revoked = e.revoked || !1, this.integrations = e.integrations || [], this.visibility = e.visibility || 0, this.friendSync = e.friend_sync || !1, this.showActivity = e.show_activity || !1, this.verified = e.verified || !1, this.accessToken = e.access_token || null, this.twoWayLink = e.two_way_link || !1, this.metadata = e.metadata || null, this.metadataVisibility = e.metadata_visibility || 0
                }
            }
        },
        522308: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("666038");
            class r extends i.default {
                static createFromServer(e, t) {
                    return new r({
                        id: e.id,
                        subscriptionId: e.subscription_id,
                        premiumGuildSubscription: null != e.premium_guild_subscription ? {
                            id: e.premium_guild_subscription.id,
                            guildId: e.premium_guild_subscription.guild_id
                        } : null,
                        canceled: e.canceled,
                        cooldownEndsAt: e.cooldown_ends_at,
                        subscription: t
                    })
                }
                isOnCooldown() {
                    return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now()
                }
                isAvailable() {
                    return null == this.premiumGuildSubscription && !this.isOnCooldown()
                }
                constructor(e) {
                    super(), this.id = e.id, this.subscriptionId = e.subscriptionId, this.premiumGuildSubscription = e.premiumGuildSubscription, this.canceled = e.canceled, this.cooldownEndsAt = e.cooldownEndsAt, this.subscription = e.subscription
                }
            }
            var u = r
        },
        47319: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("446674"),
                r = n("913144"),
                u = n("619340"),
                l = n("376556"),
                o = n("450205"),
                a = n("813006"),
                s = n("49111");
            let c = new Set([s.PlatformTypes.CONTACTS]),
                _ = !0,
                E = [],
                d = [],
                I = {},
                T = {},
                f = e => {
                    E = e.filter(e => !c.has(e.type) && l.default.isSupported(e.type)), d = e.filter(e => c.has(e.type)), _ = !1
                };
            class S extends i.default.Store {
                isJoining(e) {
                    return I[e] || !1
                }
                isFetching() {
                    return _
                }
                getAccounts() {
                    return E
                }
                getLocalAccounts() {
                    return d
                }
                getAccount(e, t) {
                    return E.find(n => (null == e || n.id === e) && n.type === t)
                }
                getLocalAccount(e) {
                    return d.find(t => t.type === e)
                }
                isSuggestedAccountType(e) {
                    return T[e] || !1
                }
            }
            S.displayName = "ConnectedAccountsStore";
            var p = new S(r.default, {
                CONNECTION_OPEN: function(e) {
                    let t = e.connectedAccounts.map(e => new o.default(e));
                    f(t)
                },
                USER_CONNECTIONS_UPDATE: function(e) {
                    if (e.local && null != e.accounts) {
                        let t = e.accounts.map(e => new o.default({
                            ...e,
                            integrations: e.integrations.map(e => ({
                                ...e,
                                guild: new a.default(e.guild)
                            }))
                        }));
                        f(t)
                    } else u.default.fetch()
                },
                USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
                    I[e.integrationId] = e.joining
                },
                USER_CONNECTION_UPDATE: function(e) {
                    let {
                        platformType: t,
                        id: n,
                        revoked: i,
                        accessToken: r
                    } = e, u = E.find(e => e.id === n && e.type === t);
                    if (null == u) return !1;
                    null != i && (u.revoked = i), null != r && (u.accessToken = r)
                }
            })
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("446674"),
                r = n("913144"),
                u = n("9294"),
                l = n("49111");
            let o = {},
                a = {},
                s = {};

            function c(e, t) {
                var n;
                e = null != e ? e : "";
                let i = (0, u.parseExtraDataFromInviteKey)(e),
                    r = o[e],
                    a = null != r ? {
                        state: l.InviteStates.RESOLVING,
                        ...r
                    } : {
                        state: l.InviteStates.RESOLVING,
                        code: i.baseCode
                    };
                t(a), o = {
                    ...o,
                    [e]: a
                }, (null === (n = a.guild) || void 0 === n ? void 0 : n.id) != null && (s = {
                    ...s,
                    [a.guild.id]: e
                })
            }

            function _(e) {
                return c(e.code, t => {
                    t.state = "banned" in e && e.banned ? l.InviteStates.BANNED : l.InviteStates.EXPIRED
                })
            }
            class E extends i.default.Store {
                getInvite(e) {
                    return o[e]
                }
                getInviteError(e) {
                    return a[e]
                }
                getInvites() {
                    return o
                }
                getInviteKeyForGuildId(e) {
                    return s[e]
                }
            }
            E.displayName = "InviteStore";
            var d = new E(r.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, u.parseExtraDataFromInviteKey)(t);
                    o = {
                        ...o,
                        [t]: {
                            code: n.baseCode,
                            state: l.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return c(e.code, t => {
                        var n, i;
                        t.state = l.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: _,
                INSTANT_INVITE_REVOKE_SUCCESS: _,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        t.state = l.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => c(e.code, e => {
                        e.state = l.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        var n, i;
                        t.state = l.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return c(e.code, e => {
                        e.state = l.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return c(e.code, t => {
                        t.state = l.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return a[e.code] = e.error, c(e.code, e => {
                        e.state = l.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return c(e.code, e => {
                        e.state = l.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = l.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = l.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        778588: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("446674"),
                r = n("913144");
            let u = [];

            function l() {
                u = []
            }
            class o extends i.default.Store {
                hasLayers() {
                    return u.length > 0
                }
                getLayers() {
                    return u
                }
            }
            o.displayName = "LayerStore";
            var a = new o(r.default, {
                LAYER_PUSH: function(e) {
                    let {
                        component: t
                    } = e;
                    if (u.indexOf(t) >= 0) return !1;
                    u = [...u, t]
                },
                LAYER_POP: function() {
                    if (0 === u.length) return !1;
                    u = u.slice(0, -1)
                },
                LAYER_POP_ALL: l,
                LOGOUT: l,
                NOTIFICATION_CLICK: l
            })
        },
        26092: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            });
            var i = n("917351"),
                r = n.n(i),
                u = n("446674"),
                l = n("913144"),
                o = n("697218"),
                a = n("49111");
            let s = a.FormStates.CLOSED,
                c = null,
                _ = null,
                E = {},
                d = {},
                I = {},
                T = null,
                f = null,
                S = !1,
                p = !1,
                O = null,
                A = null,
                N = null,
                C = [],
                L = null,
                R = null;

            function m(e) {
                var t, n, i, r, u, l;
                let c = o.default.getCurrentUser();
                if (null == c) return h();
                _ = null !== (t = e.section) && void 0 !== t ? t : _, L = null !== (n = e.section) && void 0 !== n ? n : _, null != e.subsection && null != _ && (E[_] = e.subsection), null != e.scrollPosition && null != _ && (d[_] = e.scrollPosition), p = !!e.openWithoutBackstack, s = a.FormStates.OPEN, I = {}, f = {
                    ...T = {
                        [a.UserSettingsSections.ACCOUNT]: {
                            userId: c.id,
                            username: c.username,
                            discriminator: c.discriminator,
                            email: c.email,
                            avatar: c.avatar,
                            password: "",
                            newPassword: null,
                            claimed: c.isClaimed()
                        }
                    }
                }, A = null !== (i = e.onClose) && void 0 !== i ? i : null, N = null !== (r = e.analyticsLocation) && void 0 !== r ? r : null, C = null !== (u = e.analyticsLocations) && void 0 !== u ? u : [], R = null !== (l = e.impressionSource) && void 0 !== l ? l : null
            }

            function h() {
                s = a.FormStates.CLOSED, S = !1, T = null, L = null, f = null, c = null, _ = null, E = {}, d = {}, A = null, N = null, C = [], R = null
            }

            function U() {
                s = a.FormStates.OPEN, I = {}
            }
            class g extends u.default.Store {
                initialize() {
                    this.waitFor(o.default)
                }
                hasChanges() {
                    return null != f && null != T && (!!this.isOpen() || O === a.DrawerTabTypes.USER_SETTINGS) && !r.isEqual(f, T)
                }
                isOpen() {
                    return S
                }
                getPreviousSection() {
                    return c
                }
                getSection() {
                    return _
                }
                getSubsection() {
                    return null != _ ? E[_] : null
                }
                getScrollPosition() {
                    return null != _ ? d[_] : null
                }
                shouldOpenWithoutBackstack() {
                    return p
                }
                getProps() {
                    return {
                        submitting: s === a.FormStates.SUBMITTING,
                        section: _,
                        subsection: null != _ ? E[_] : null,
                        scrollPosition: null != _ ? d[_] : null,
                        settings: f,
                        errors: I,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: p,
                        analyticsLocation: N,
                        analyticsLocations: C,
                        initialSection: L,
                        impressionSource: R
                    }
                }
                get onClose() {
                    return A
                }
            }
            g.displayName = "UserSettingsModalStore";
            var P = new g(l.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    S = !0, m(e)
                },
                USER_SETTINGS_MODAL_INIT: m,
                USER_SETTINGS_MODAL_CLOSE: h,
                LOGOUT: h,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    s = a.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (s !== a.FormStates.SUBMITTING) return !1;
                    s = a.FormStates.OPEN, _ = a.UserSettingsSections.ACCOUNT, I = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    var t;
                    c = _, _ = e.section, N = null, C = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (E[_] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete E[t] : null != _ && delete E[_]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete d[t] : null != _ && delete d[_]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    let {
                        settings: t
                    } = e;
                    null == f && (f = {});
                    let n = f[a.UserSettingsSections.ACCOUNT];
                    f[a.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...t
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: U,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = o.default.getCurrentUser();
                    U(), null != e && (f = {
                        ...T = {
                            [a.UserSettingsSections.ACCOUNT]: {
                                userId: e.id,
                                username: e.username,
                                discriminator: e.discriminator,
                                email: e.email,
                                avatar: e.avatar,
                                password: "",
                                newPassword: null,
                                claimed: e.isClaimed()
                            }
                        }
                    })
                },
                DRAWER_SELECT_TAB: function(e) {
                    return O = e.tab, null == _ && O === a.DrawerTabTypes.USER_SETTINGS && m({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        340412: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("446674"),
                r = n("913144"),
                u = n("697218"),
                l = n("719923"),
                o = n("521012");
            let a = {
                    userOffersLastFetchedAtDate: void 0,
                    userTrialOffers: {},
                    userDiscounts: {}
                },
                s = a;

            function c() {
                s.userTrialOffers = {}, s.userDiscounts = {}, s.userOffersLastFetchedAtDate = void 0
            }
            let _ = () => !0;

            function E() {
                let e = o.default.getPremiumTypeSubscription();
                return null != e && (s.userTrialOffers = {}, s.userDiscounts = {}, !0)
            }
            class d extends i.default.PersistedStore {
                initialize(e) {
                    s = null != e ? e : a, this.waitFor(u.default), this.syncWith([u.default], _), this.syncWith([o.default], E)
                }
                getUserTrialOffer(e) {
                    if (null !== e) return s.userTrialOffers[e]
                }
                getUserDiscount(e) {
                    if (null !== e) return s.userDiscounts[e]
                }
                getAnyOfUserTrialOfferId(e) {
                    for (let t of e)
                        if (null != s.userTrialOffers[t]) return t;
                    return null
                }
                hasFetchedOffer() {
                    return null != s.userOffersLastFetchedAtDate
                }
                shouldFetchOffer() {
                    let e = s.userOffersLastFetchedAtDate;
                    return null == e || Date.now() - 1728e5 > e
                }
                getAcknowledgedOffers(e) {
                    let t = u.default.getCurrentUser();
                    return (0, l.isPremium)(t) ? [] : Object.values(s.userTrialOffers).filter(t => e.includes(t.trial_id) && null != t.expires_at)
                }
                getUnacknowledgedDiscountOffers() {
                    let e = u.default.getCurrentUser();
                    return (0, l.isPremium)(e) ? [] : Object.values(s.userDiscounts).filter(e => null == e.expires_at)
                }
                getUnacknowledgedOffers(e) {
                    let t = u.default.getCurrentUser();
                    return (0, l.isPremium)(t) ? [] : Object.values(s.userTrialOffers).filter(t => e.includes(t.trial_id) && null == t.expires_at)
                }
                hasAnyUnexpiredOffer() {
                    return Object.values(s.userTrialOffers).some(e => null == e.expires_at || Date.parse(e.expires_at) > Date.now())
                }
                getState() {
                    return s
                }
                forceReset() {
                    c()
                }
            }
            d.displayName = "UserOfferStore", d.persistKey = "UserOfferStore";
            var I = new d(r.default, {
                BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    null != t ? s.userTrialOffers[t.trial_id] = t : c(), s.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    s.userTrialOffers[t.trial_id] = t, s.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_OFFER_FETCH_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t,
                        userDiscount: n
                    } = e;
                    null == t && null == n && c(), null != t ? (s.userTrialOffers[t.trial_id] = t, s.userDiscounts = {}) : null != n && (s.userDiscounts[n.discount_id] = n, s.userTrialOffers = {}), s.userOffersLastFetchedAtDate = Date.now()
                },
                BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t,
                        userDiscount: n
                    } = e;
                    (null != t || null != n) && (null != t && (s.userTrialOffers[t.trial_id] = t), null != n && (s.userDiscounts[n.discount_id] = n), s.userOffersLastFetchedAtDate = Date.now())
                },
                LOGOUT: c
            })
        },
        471671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("627445"),
                r = n.n(i),
                u = n("446674"),
                l = n("913144"),
                o = n("816454");
            let a = new Map;

            function s(e) {
                let t = a.get(e);
                return null == t ? (console.warn("Window state not initialized", e), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : t
            }
            class c extends u.default.Store {
                isFocused() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.getMainWindowId)();
                    return s(e).focused
                }
                getFocusedWindowId() {
                    let e = null;
                    return a.forEach((t, n) => {
                        t.focused && (e = n)
                    }), e
                }
                isElementFullScreen() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.getMainWindowId)();
                    return s(e).isElementFullscreen
                }
                windowSize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.getMainWindowId)();
                    return s(e).windowSize
                }
            }
            c.displayName = "WindowStore";
            let _ = new c(l.default, {
                WINDOW_INIT: function(e) {
                    r(!a.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: i,
                        focused: u
                    } = e;
                    return a.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: i,
                        focused: u
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(e) {
                    let t = s(e.windowId);
                    return t.isElementFullscreen !== e.isElementFullscreen && (a.set(e.windowId, {
                        ...t,
                        isElementFullscreen: e.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(e) {
                    let t = s(e.windowId);
                    return t.focused !== e.focused && (a.set(e.windowId, {
                        ...t,
                        focused: e.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(e) {
                    let t = s(e.windowId);
                    return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (a.set(e.windowId, {
                        ...t,
                        windowSize: {
                            width: e.width,
                            height: e.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(e) {
                    return a.delete(e.windowId), !0
                }
            });
            n.el("599110").then(n.bind(n, "599110")).then(e => {
                let {
                    addExtraAnalyticsDecorator: t
                } = e;
                t(e => {
                    e.client_app_state = _.isFocused() ? "focused" : "unfocused"
                })
            });
            var E = _
        },
        103603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fit: function() {
                    return s
                },
                zoomFit: function() {
                    return c
                },
                getRatio: function() {
                    return _
                },
                getCoverRatio: function() {
                    return E
                },
                makeCssUrlString: function() {
                    return d
                },
                getPalette: function() {
                    return T
                },
                getPaletteForAvatar: function() {
                    return f
                },
                readFileAsBase64: function() {
                    return p
                },
                dataUriFileSize: function() {
                    return O
                },
                dataUrlToFile: function() {
                    return A
                },
                isPNGAnimated: function() {
                    return N
                }
            });
            var i = n("627445"),
                r = n.n(i),
                u = n("917351"),
                l = n.n(u),
                o = n("48648"),
                a = n.n(o);

            function s(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: r,
                    minWidth: u = 0,
                    minHeight: l = 0
                } = e;
                if (t !== i || n !== r) {
                    let e = t > i ? i / t : 1;
                    t = Math.max(Math.round(t * e), u), n = Math.max(Math.round(n * e), l);
                    let o = n > r ? r / n : 1;
                    t = Math.max(Math.round(t * o), u), n = Math.max(Math.round(n * o), l)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function c(e, t) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    i = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return s({
                    width: e,
                    height: t,
                    maxWidth: i,
                    maxHeight: n
                })
            }

            function _(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: r
                } = e, u = 1;
                t > i && (u = i / t), t = Math.round(t * u);
                let l = 1;
                return (n = Math.round(n * u)) > r && (l = r / n), Math.min(u * l, 1)
            }

            function E(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: r
                } = e;
                return t === n ? 1 : Math.min(Math.max(i / t, r / n), 1)
            }

            function d(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            let I = [
                [0, 0, 0]
            ];

            function T(e, t, n) {
                let i = document.createElement("canvas"),
                    r = i.getContext("2d");
                if (null == r) return I;
                let u = i.width = 0 === e.width ? 128 : e.width,
                    l = i.height = 0 === e.height ? 128 : e.height;
                r.drawImage(e, 0, 0, u, l);
                let o = r.getImageData(0, 0, u, l).data,
                    s = function(e, t, n) {
                        let i = [];
                        for (let r = 0, u, l, o, a, s; r < t; r += n) l = e[(u = 4 * r) + 0], o = e[u + 1], a = e[u + 2], (void 0 === (s = e[u + 3]) || s >= 125) && !(l > 250 && o > 250 && a > 250) && i.push([l, o, a]);
                        return i
                    }(o, u * l, n),
                    c = a(s, t);
                return "boolean" == typeof c ? I : c.palette()
            }
            let f = e => S(e),
                S = l.memoize(e => new Promise((t, n) => {
                    let i = new Image;
                    i.crossOrigin = "Anonymous", i.onerror = e => {
                        n(e), i.onerror = i.onload = null, i = null
                    }, i.onload = () => {
                        t(T(i, 5, 10)), i.onerror = i.onload = null, i = null
                    }, i.src = e
                }));

            function p(e) {
                return new Promise((t, n) => {
                    let i = new FileReader;
                    i.readAsDataURL(e), i.onload = () => {
                        r("string" == typeof i.result, "Result must be a string"), t(i.result)
                    }, i.onerror = e => n(e)
                })
            }

            function O(e) {
                let t = e.split(";base64,");
                return r(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
            }
            async function A(e, t, n) {
                let i = function(e) {
                        let t;
                        t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                        let n = e.split(",")[0].split(":")[1].split(";")[0],
                            i = new Uint8Array(t.length);
                        for (var r = 0; r < t.length; r++) i[r] = t.charCodeAt(r);
                        return new Blob([i], {
                            type: n
                        })
                    }(e),
                    r = await i.arrayBuffer();
                return new File([r], t, {
                    type: n
                })
            }
            async function N(e) {
                var t;
                let n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let i = await e.text(),
                    r = i.indexOf("IDAT");
                return !!(r > 0) && -1 !== i.substring(0, r).indexOf("acTL") || !1
            }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return u
                }
            });
            var i = n("917351"),
                r = n.n(i);
            let u = e => "function" == typeof e ? e() : e;
            r.curry((e, t, n) => u(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let i, r;
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var u = n("697218"),
                l = n("615931");
            let o = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                i = e.showModal, o = e.updateModalProps, r = n("551042").closeModal
            }

            function a(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: u,
                    modalProps: l = {},
                    hooks: {
                        onEarlyClose: a
                    } = {}
                } = e;
                if (null == i) {
                    null == a || a();
                    return
                }
                let c = i(I, _, l);

                function _() {
                    null == a || a()
                }

                function E(e) {
                    r(c), n(e)
                }

                function d(e) {
                    r(c), u(e)
                }

                function I(e) {
                    return o(c, I, _, {
                        ...l,
                        isLoading: !0
                    }), s({
                        promiseFn: t,
                        resolve: E,
                        reject: d,
                        code: e,
                        mfaCodeHandler: T,
                        isModalOpen: !0
                    })
                }

                function T(e) {
                    let {
                        res: t
                    } = e;
                    o(c, I, _, {
                        ...l,
                        error: t.body.message
                    })
                }
            }

            function s(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: i,
                    code: r,
                    mfaCodeHandler: u = a,
                    isModalOpen: l = !1,
                    ...o
                } = e;
                return t(null != r ? {
                    code: r
                } : {}).then(n, e => {
                    var r, a;
                    if (r = e, a = l, r.body && 60008 === r.body.code || a && 429 === r.status) return u({
                        promiseFn: t,
                        resolve: n,
                        reject: i,
                        res: e,
                        ...o
                    });
                    i(e)
                })
            }

            function c(e, t) {
                var n, i;
                let {
                    checkEnabled: r = null !== (i = null === (n = u.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i,
                    ...o
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, l.resolveThunk)(r) ? a : s)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...o
                    })
                })
            }
        },
        829536: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                perceptualToAmplitude: function() {
                    return i
                },
                amplitudeToPerceptual: function() {
                    return r
                }
            });

            function i(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                return 0 === e ? 0 : (t = e > n ? (e - n) / n * 6 : e / n * 50 - 50, n * Math.pow(10, t / 20))
            }

            function r(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                if (0 === e) return 0;
                let i = 20 * Math.log10(e / n);
                return n * (t = i > 0 ? i / 6 + 1 : (50 + i) / 50)
            }
        },
        833858: function(e, t, n) {
            "use strict";

            function i(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return i
                }
            })
        },
        655518: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = {
                escape: e => e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }
        },
        840707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("872717"),
                r = n("599110");

            function u(e, t, n) {
                let {
                    trackedActionData: i,
                    ...u
                } = t, l = {
                    url: u.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(u).then(e => {
                        let n = i.properties;
                        "function" == typeof i.properties && (n = i.properties(e)), (0, r.trackNetworkAction)(i.event, {
                            status_code: e.status,
                            ...l,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, u;
                        let o = i.properties;
                        "function" == typeof i.properties && (o = i.properties(e)), (0, r.trackNetworkAction)(i.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (u = e.body) || void 0 === u ? void 0 : u.message,
                            ...l,
                            ...o
                        }), n(e)
                    })
                })
            }
            var l = {
                get: function(e) {
                    return u(i.default.get, e, "get")
                },
                post: function(e) {
                    return u(i.default.post, e, "post")
                },
                put: function(e) {
                    return u(i.default.put, e, "put")
                },
                patch: function(e) {
                    return u(i.default.patch, e, "patch")
                },
                delete: function(e) {
                    return u(i.default.delete, e, "del")
                }
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return o
                },
                updateModalProps: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                u = n("920636");
            let l = (e, t, n) => function(r) {
                return (0, i.jsx)(u.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...r
                })
            };

            function o(e, t, n) {
                return (0, r.openModal)(l(e, t, n), {
                    onCloseCallback: t
                })
            }

            function a(e, t, n, i) {
                return (0, r.updateModal)(e, l(t, n, i))
            }
        }
    }
]);