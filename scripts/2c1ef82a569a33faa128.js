(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["91830"], {
        13399: function(t, r, n) {
            "use strict";
            t.exports.parse = function(t) {
                var r = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
                if (!r) return null;
                r.shift();
                var n = null,
                    e = [];
                r[2] && (n = (u = r[2].split("-")).shift(), e = u);
                var o = [];
                r[5] && (o = r[5].split("-")).shift();
                var i = [];
                if (r[6]) {
                    (u = r[6].split("-")).shift();
                    for (var u, c, s = []; u.length;) {
                        var a = u.shift();
                        1 === a.length ? c ? (i.push({
                            singleton: c,
                            extension: s
                        }), c = a, s = []) : c = a : s.push(a)
                    }
                    i.push({
                        singleton: c,
                        extension: s
                    })
                }
                var f = [];
                r[7] && ((f = r[7].split("-")).shift(), f.shift());
                var h = [];
                return r[8] && (h = r[8].split("-")).shift(), {
                    langtag: {
                        language: {
                            language: n,
                            extlang: e
                        },
                        script: r[3] || null,
                        region: r[4] || null,
                        variant: o,
                        extension: i,
                        privateuse: f
                    },
                    privateuse: h,
                    grandfathered: {
                        irregular: r[0] || null,
                        regular: r[1] || null
                    }
                }
            }
        },
        861435: function(t, r, n) {
            "use strict";
            var e = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                o = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                i = "function" == typeof Object.getOwnPropertySymbols;
            t.exports = function(t, r, n) {
                if ("string" != typeof r) {
                    var u = Object.getOwnPropertyNames(r);
                    i && (u = u.concat(Object.getOwnPropertySymbols(r)));
                    for (var c = 0; c < u.length; ++c)
                        if (!e[u[c]] && !o[u[c]] && (!n || !n[u[c]])) try {
                            t[u[c]] = r[u[c]]
                        } catch (t) {}
                }
                return t
            }
        },
        238455: function(t, r, n) {
            var e = n("63533"),
                o = n("651558"),
                i = n("349046"),
                u = n("153997"),
                c = n("820458"),
                s = n("663652"),
                a = Object.prototype.hasOwnProperty;
            t.exports = function(t, r) {
                var n = i(t),
                    f = !n && o(t),
                    h = !n && !f && u(t),
                    p = !n && !f && !h && s(t),
                    l = n || f || h || p,
                    v = l ? e(t.length, String) : [],
                    b = v.length;
                for (var g in t)(r || a.call(t, g)) && !(l && ("length" == g || h && ("offset" == g || "parent" == g) || p && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || c(g, b))) && v.push(g);
                return v
            }
        },
        85722: function(t, r, n) {
            var e = n("616691"),
                o = n("960052"),
                i = n("509492"),
                u = {};
            u["[object Float32Array]"] = u["[object Float64Array]"] = u["[object Int8Array]"] = u["[object Int16Array]"] = u["[object Int32Array]"] = u["[object Uint8Array]"] = u["[object Uint8ClampedArray]"] = u["[object Uint16Array]"] = u["[object Uint32Array]"] = !0, u["[object Arguments]"] = u["[object Array]"] = u["[object ArrayBuffer]"] = u["[object Boolean]"] = u["[object DataView]"] = u["[object Date]"] = u["[object Error]"] = u["[object Function]"] = u["[object Map]"] = u["[object Number]"] = u["[object Object]"] = u["[object RegExp]"] = u["[object Set]"] = u["[object String]"] = u["[object WeakMap]"] = !1;
            t.exports = function(t) {
                return i(t) && o(t.length) && !!u[e(t)]
            }
        },
        891183: function(t, r, n) {
            var e = n("356827"),
                o = n("57100"),
                i = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!e(t)) return o(t);
                var r = [];
                for (var n in Object(t)) i.call(t, n) && "constructor" != n && r.push(n);
                return r
            }
        },
        63533: function(t, r, n) {
            t.exports = function(t, r) {
                for (var n = -1, e = Array(t); ++n < t;) e[n] = r(n);
                return e
            }
        },
        870686: function(t, r, n) {
            t.exports = function(t) {
                return function(r) {
                    return t(r)
                }
            }
        },
        356827: function(t, r, n) {
            var e = Object.prototype;
            t.exports = function(t) {
                var r = t && t.constructor;
                return t === ("function" == typeof r && r.prototype || e)
            }
        },
        57100: function(t, r, n) {
            var e = n("676315")(Object.keys, Object);
            t.exports = e
        },
        961077: function(t, r, n) {
            t = n.nmd(t);
            var e = n("71890"),
                o = "object" == typeof r && r && !r.nodeType && r,
                i = o && "object" == typeof t && t && !t.nodeType && t,
                u = i && i.exports === o && e.process,
                c = function() {
                    try {
                        var t = i && i.require && i.require("util").types;
                        if (t) return t;
                        return u && u.binding && u.binding("util")
                    } catch (t) {}
                }();
            t.exports = c
        },
        676315: function(t, r, n) {
            t.exports = function(t, r) {
                return function(n) {
                    return t(r(n))
                }
            }
        },
        153997: function(t, r, n) {
            t = n.nmd(t);
            var e = n("619146"),
                o = n("108028"),
                i = "object" == typeof r && r && !r.nodeType && r,
                u = i && "object" == typeof t && t && !t.nodeType && t,
                c = u && u.exports === i ? e.Buffer : void 0,
                s = c ? c.isBuffer : void 0;
            t.exports = s || o
        },
        663652: function(t, r, n) {
            var e = n("85722"),
                o = n("870686"),
                i = n("961077"),
                u = i && i.isTypedArray,
                c = u ? o(u) : e;
            t.exports = c
        },
        905269: function(t, r, n) {
            var e = n("238455"),
                o = n("891183"),
                i = n("355653");
            t.exports = function(t) {
                return i(t) ? e(t) : o(t)
            }
        },
        108028: function(t, r, n) {
            t.exports = function() {
                return !1
            }
        },
        873101: function(t, r, n) {
            if (!e) var e = {
                map: function(t, r) {
                    var n = {};
                    return r ? t.map(function(t, e) {
                        return n.index = e, r.call(n, t)
                    }) : t.slice()
                },
                naturalOrder: function(t, r) {
                    return t < r ? -1 : t > r ? 1 : 0
                },
                sum: function(t, r) {
                    var n = {};
                    return t.reduce(r ? function(t, e, o) {
                        return n.index = o, t + r.call(n, e)
                    } : function(t, r) {
                        return t + r
                    }, 0)
                },
                max: function(t, r) {
                    return Math.max.apply(null, r ? e.map(t, r) : t)
                }
            };
            var o = function() {
                var t = 3;

                function r(t, r, n) {
                    return (t << 10) + (r << 5) + n
                }

                function n(t) {
                    var r = [],
                        n = !1;

                    function e() {
                        r.sort(t), n = !0
                    }
                    return {
                        push: function(t) {
                            r.push(t), n = !1
                        },
                        peek: function(t) {
                            return !n && e(), void 0 === t && (t = r.length - 1), r[t]
                        },
                        pop: function() {
                            return !n && e(), r.pop()
                        },
                        size: function() {
                            return r.length
                        },
                        map: function(t) {
                            return r.map(t)
                        },
                        debug: function() {
                            return !n && e(), r
                        }
                    }
                }

                function o(t, r, n, e, o, i, u) {
                    this.r1 = t, this.r2 = r, this.g1 = n, this.g2 = e, this.b1 = o, this.b2 = i, this.histo = u
                }

                function i() {
                    this.vboxes = new n(function(t, r) {
                        return e.naturalOrder(t.vbox.count() * t.vbox.volume(), r.vbox.count() * r.vbox.volume())
                    })
                }
                return o.prototype = {
                    volume: function(t) {
                        return (!this._volume || t) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(t) {
                        var n = this.histo;
                        if (!this._count_set || t) {
                            var e, o, i, u = 0;
                            for (e = this.r1; e <= this.r2; e++)
                                for (o = this.g1; o <= this.g2; o++)
                                    for (i = this.b1; i <= this.b2; i++) u += n[r(e, o, i)] || 0;
                            this._count = u, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new o(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(t) {
                        var n = this.histo;
                        if (!this._avg || t) {
                            var e, o, i, u, c = 0,
                                s = 8,
                                a = 0,
                                f = 0,
                                h = 0;
                            for (o = this.r1; o <= this.r2; o++)
                                for (i = this.g1; i <= this.g2; i++)
                                    for (u = this.b1; u <= this.b2; u++) c += e = n[r(o, i, u)] || 0, a += e * (o + .5) * s, f += e * (i + .5) * s, h += e * (u + .5) * s;
                            c ? this._avg = [~~(a / c), ~~(f / c), ~~(h / c)] : this._avg = [~~(s * (this.r1 + this.r2 + 1) / 2), ~~(s * (this.g1 + this.g2 + 1) / 2), ~~(s * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(r) {
                        var n = r[0] >> t;
                        return gval = r[1] >> t, bval = r[2] >> t, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, i.prototype = {
                    push: function(t) {
                        this.vboxes.push({
                            vbox: t,
                            color: t.avg()
                        })
                    },
                    palette: function() {
                        return this.vboxes.map(function(t) {
                            return t.color
                        })
                    },
                    size: function() {
                        return this.vboxes.size()
                    },
                    map: function(t) {
                        for (var r = this.vboxes, n = 0; n < r.size(); n++)
                            if (r.peek(n).vbox.contains(t)) return r.peek(n).color;
                        return this.nearest(t)
                    },
                    nearest: function(t) {
                        for (var r, n, e, o = this.vboxes, i = 0; i < o.size(); i++)((n = Math.sqrt(Math.pow(t[0] - o.peek(i).color[0], 2) + Math.pow(t[1] - o.peek(i).color[1], 2) + Math.pow(t[2] - o.peek(i).color[2], 2))) < r || void 0 === r) && (r = n, e = o.peek(i).color);
                        return e
                    },
                    forcebw: function() {
                        var t = this.vboxes;
                        t.sort(function(t, r) {
                            return e.naturalOrder(e.sum(t.color), e.sum(r.color))
                        });
                        var r = t[0].color;
                        r[0] < 5 && r[1] < 5 && r[2] < 5 && (t[0].color = [0, 0, 0]);
                        var n = t.length - 1,
                            o = t[n].color;
                        o[0] > 251 && o[1] > 251 && o[2] > 251 && (t[n].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(u, c) {
                        if (!u.length || c < 2 || c > 256) return !1;
                        var s, a, f, h, p, l, v, b, g, y, d, x, j, m, z, O, w = (s = u, p = Array(32768), s.forEach(function(n) {
                                f = n[0] >> t, h = n[1] >> t, p[a = r(f, h, n[2] >> t)] = (p[a] || 0) + 1
                            }), p),
                            k = 0;
                        w.forEach(function() {
                            k++
                        });
                        var A = (l = u, v = w, d = 1e6, x = 0, j = 1e6, m = 0, z = 1e6, O = 0, l.forEach(function(r) {
                                b = r[0] >> t, g = r[1] >> t, y = r[2] >> t, b < d ? d = b : b > x && (x = b), g < j ? j = g : g > m && (m = g), y < z ? z = y : y > O && (O = y)
                            }), new o(d, x, j, m, z, O, v)),
                            _ = new n(function(t, r) {
                                return e.naturalOrder(t.count(), r.count())
                            });

                        function E(t, n) {
                            for (var o, i = 1, u = 0; u < 1e3;) {
                                if (!(o = t.pop()).count()) {
                                    t.push(o), u++;
                                    continue
                                }
                                var c = function(t, n) {
                                        if (n.count()) {
                                            var o = n.r2 - n.r1 + 1,
                                                i = n.g2 - n.g1 + 1,
                                                u = n.b2 - n.b1 + 1,
                                                c = e.max([o, i, u]);
                                            if (1 == n.count()) return [n.copy()];
                                            var s, a, f, h, p, l = 0,
                                                v = [],
                                                b = [];
                                            if (c == o)
                                                for (s = n.r1; s <= n.r2; s++) {
                                                    for (h = 0, a = n.g1; a <= n.g2; a++)
                                                        for (f = n.b1; f <= n.b2; f++) h += t[p = r(s, a, f)] || 0;
                                                    l += h, v[s] = l
                                                } else if (c == i)
                                                    for (s = n.g1; s <= n.g2; s++) {
                                                        for (h = 0, a = n.r1; a <= n.r2; a++)
                                                            for (f = n.b1; f <= n.b2; f++) h += t[p = r(a, s, f)] || 0;
                                                        l += h, v[s] = l
                                                    } else
                                                        for (s = n.b1; s <= n.b2; s++) {
                                                            for (h = 0, a = n.r1; a <= n.r2; a++)
                                                                for (f = n.g1; f <= n.g2; f++) h += t[p = r(a, f, s)] || 0;
                                                            l += h, v[s] = l
                                                        }
                                            return v.forEach(function(t, r) {
                                                b[r] = l - t
                                            }), g(c == o ? "r" : c == i ? "g" : "b")
                                        }

                                        function g(t) {
                                            var r, e, o, i, u, c = t + "1",
                                                a = t + "2",
                                                f = 0;
                                            for (s = n[c]; s <= n[a]; s++)
                                                if (v[s] > l / 2) {
                                                    for (o = n.copy(), i = n.copy(), r = s - n[c], u = r <= (e = n[a] - s) ? Math.min(n[a] - 1, ~~(s + e / 2)) : Math.max(n[c], ~~(s - 1 - r / 2)); !v[u];) u++;
                                                    for (f = b[u]; !f && v[u - 1];) f = b[--u];
                                                    return o[a] = u, i[c] = o[a] + 1, [o, i]
                                                }
                                        }
                                    }(w, o),
                                    s = c[0],
                                    a = c[1];
                                if (!s) return;
                                if (t.push(s), a && (t.push(a), i++), i >= n || u++ > 1e3) return
                            }
                        }
                        _.push(A), E(_, .75 * c);
                        for (var M = new n(function(t, r) {
                                return e.naturalOrder(t.count() * t.volume(), r.count() * r.volume())
                            }); _.size();) M.push(_.pop());
                        E(M, c - M.size());
                        for (var S = new i; M.size();) S.push(M.pop());
                        return S
                    }
                }
            }();
            t.exports = o.quantize
        },
        962429: function(t, r, n) {
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
        365444: function(t, r, n) {
            "use strict";
            n.r(r), n.d(r, {
                useForceUpdate: function() {
                    return e.default
                },
                useStableMemo: function() {
                    return o.default
                },
                useLazyValue: function() {
                    return i.default
                }
            });
            var e = n("732427"),
                o = n("866490"),
                i = n("246105")
        },
        732427: function(t, r, n) {
            "use strict";
            n.r(r), n.d(r, {
                default: function() {
                    return o
                }
            });
            var e = n("773670");

            function o() {
                let [, t] = (0, e.useState)({});
                return (0, e.useCallback)(() => t({}), [])
            }
        },
        246105: function(t, r, n) {
            "use strict";
            n.r(r), n.d(r, {
                default: function() {
                    return i
                }
            });
            var e = n("773670");
            let o = {};

            function i(t) {
                let r = (0, e.useRef)(o);
                return r.current === o && (r.current = t()), r.current
            }
        },
        866490: function(t, r, n) {
            "use strict";
            n.r(r), n.d(r, {
                default: function() {
                    return u
                }
            });
            var e = n("773670"),
                o = n("962429");
            let i = [];

            function u(t, r) {
                let n = (0, e.useRef)(),
                    u = (0, e.useRef)(i);
                return u.current === i ? (n.current = t(), u.current = r) : !(0, o.default)(r, u.current) && (n.current = t(), u.current = r), n.current
            }
        },
        746304: function(t, r, n) {
            "use strict";
            var e, o;
            n.r(r), n.d(r, {
                AudioSettingsDefaultVolumes: function() {
                    return e
                }
            }), (o = e || (e = {}))[o.USER = 100] = "USER", o[o.STREAM = 18] = "STREAM"
        }
    }
]);