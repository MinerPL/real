(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["46084"], {
        448105: function(t, r, n) {
            "use strict";
            t.exports = function(t, r) {
                var n = r.length,
                    o = t.length;
                if (o > n) return !1;
                if (o === n) return t === r;
                t: for (var e = 0, i = 0; e < o; e++) {
                    for (var u = t.charCodeAt(e); i < n;)
                        if (r.charCodeAt(i++) === u) continue t;
                    return !1
                }
                return !0
            }
        },
        458389: function(t, r, n) {
            var o = n("594140"),
                e = n("564414"),
                i = n("725502"),
                u = n("591350"),
                c = n("476540"),
                s = n("381178"),
                f = Object.prototype.hasOwnProperty;
            t.exports = function(t, r) {
                var n = i(t),
                    a = !n && e(t),
                    h = !n && !a && u(t),
                    p = !n && !a && !h && s(t),
                    b = n || a || h || p,
                    v = b ? o(t.length, String) : [],
                    l = v.length;
                for (var g in t)(r || f.call(t, g)) && !(b && ("length" == g || h && ("offset" == g || "parent" == g) || p && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || c(g, l))) && v.push(g);
                return v
            }
        },
        562132: function(t, r, n) {
            var o = n("33426"),
                e = n("136047"),
                i = n("270879"),
                u = {};
            u["[object Float32Array]"] = u["[object Float64Array]"] = u["[object Int8Array]"] = u["[object Int16Array]"] = u["[object Int32Array]"] = u["[object Uint8Array]"] = u["[object Uint8ClampedArray]"] = u["[object Uint16Array]"] = u["[object Uint32Array]"] = !0, u["[object Arguments]"] = u["[object Array]"] = u["[object ArrayBuffer]"] = u["[object Boolean]"] = u["[object DataView]"] = u["[object Date]"] = u["[object Error]"] = u["[object Function]"] = u["[object Map]"] = u["[object Number]"] = u["[object Object]"] = u["[object RegExp]"] = u["[object Set]"] = u["[object String]"] = u["[object WeakMap]"] = !1;
            t.exports = function(t) {
                return i(t) && e(t.length) && !!u[o(t)]
            }
        },
        205873: function(t, r, n) {
            var o = n("733228"),
                e = n("541349"),
                i = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!o(t)) return e(t);
                var r = [];
                for (var n in Object(t)) i.call(t, n) && "constructor" != n && r.push(n);
                return r
            }
        },
        594140: function(t, r, n) {
            t.exports = function(t, r) {
                for (var n = -1, o = Array(t); ++n < t;) o[n] = r(n);
                return o
            }
        },
        492692: function(t, r, n) {
            t.exports = function(t) {
                return function(r) {
                    return t(r)
                }
            }
        },
        733228: function(t, r, n) {
            var o = Object.prototype;
            t.exports = function(t) {
                var r = t && t.constructor;
                return t === ("function" == typeof r && r.prototype || o)
            }
        },
        541349: function(t, r, n) {
            var o = n("761197")(Object.keys, Object);
            t.exports = o
        },
        276440: function(t, r, n) {
            t = n.nmd(t);
            var o = n("447414"),
                e = "object" == typeof r && r && !r.nodeType && r,
                i = e && "object" == typeof t && t && !t.nodeType && t,
                u = i && i.exports === e && o.process,
                c = function() {
                    try {
                        var t = i && i.require && i.require("util").types;
                        if (t) return t;
                        return u && u.binding && u.binding("util")
                    } catch (t) {}
                }();
            t.exports = c
        },
        761197: function(t, r, n) {
            t.exports = function(t, r) {
                return function(n) {
                    return t(r(n))
                }
            }
        },
        591350: function(t, r, n) {
            t = n.nmd(t);
            var o = n("690516"),
                e = n("221386"),
                i = "object" == typeof r && r && !r.nodeType && r,
                u = i && "object" == typeof t && t && !t.nodeType && t,
                c = u && u.exports === i ? o.Buffer : void 0,
                s = c ? c.isBuffer : void 0;
            t.exports = s || e
        },
        381178: function(t, r, n) {
            var o = n("562132"),
                e = n("492692"),
                i = n("276440"),
                u = i && i.isTypedArray,
                c = u ? e(u) : o;
            t.exports = c
        },
        466731: function(t, r, n) {
            var o = n("458389"),
                e = n("205873"),
                i = n("603108");
            t.exports = function(t) {
                return i(t) ? o(t) : e(t)
            }
        },
        221386: function(t, r, n) {
            t.exports = function() {
                return !1
            }
        },
        48648: function(t, r, n) {
            if (!o) var o = {
                map: function(t, r) {
                    var n = {};
                    return r ? t.map(function(t, o) {
                        return n.index = o, r.call(n, t)
                    }) : t.slice()
                },
                naturalOrder: function(t, r) {
                    return t < r ? -1 : t > r ? 1 : 0
                },
                sum: function(t, r) {
                    var n = {};
                    return t.reduce(r ? function(t, o, e) {
                        return n.index = e, t + r.call(n, o)
                    } : function(t, r) {
                        return t + r
                    }, 0)
                },
                max: function(t, r) {
                    return Math.max.apply(null, r ? o.map(t, r) : t)
                }
            };
            var e = function() {
                var t = 3;

                function r(t, r, n) {
                    return (t << 10) + (r << 5) + n
                }

                function n(t) {
                    var r = [],
                        n = !1;

                    function o() {
                        r.sort(t), n = !0
                    }
                    return {
                        push: function(t) {
                            r.push(t), n = !1
                        },
                        peek: function(t) {
                            return !n && o(), void 0 === t && (t = r.length - 1), r[t]
                        },
                        pop: function() {
                            return !n && o(), r.pop()
                        },
                        size: function() {
                            return r.length
                        },
                        map: function(t) {
                            return r.map(t)
                        },
                        debug: function() {
                            return !n && o(), r
                        }
                    }
                }

                function e(t, r, n, o, e, i, u) {
                    this.r1 = t, this.r2 = r, this.g1 = n, this.g2 = o, this.b1 = e, this.b2 = i, this.histo = u
                }

                function i() {
                    this.vboxes = new n(function(t, r) {
                        return o.naturalOrder(t.vbox.count() * t.vbox.volume(), r.vbox.count() * r.vbox.volume())
                    })
                }
                return e.prototype = {
                    volume: function(t) {
                        return (!this._volume || t) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(t) {
                        var n = this.histo;
                        if (!this._count_set || t) {
                            var o, e, i, u = 0;
                            for (o = this.r1; o <= this.r2; o++)
                                for (e = this.g1; e <= this.g2; e++)
                                    for (i = this.b1; i <= this.b2; i++) u += n[r(o, e, i)] || 0;
                            this._count = u, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new e(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(t) {
                        var n = this.histo;
                        if (!this._avg || t) {
                            var o, e, i, u, c = 0,
                                s = 8,
                                f = 0,
                                a = 0,
                                h = 0;
                            for (e = this.r1; e <= this.r2; e++)
                                for (i = this.g1; i <= this.g2; i++)
                                    for (u = this.b1; u <= this.b2; u++) c += o = n[r(e, i, u)] || 0, f += o * (e + .5) * s, a += o * (i + .5) * s, h += o * (u + .5) * s;
                            c ? this._avg = [~~(f / c), ~~(a / c), ~~(h / c)] : this._avg = [~~(s * (this.r1 + this.r2 + 1) / 2), ~~(s * (this.g1 + this.g2 + 1) / 2), ~~(s * (this.b1 + this.b2 + 1) / 2)]
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
                        for (var r, n, o, e = this.vboxes, i = 0; i < e.size(); i++)((n = Math.sqrt(Math.pow(t[0] - e.peek(i).color[0], 2) + Math.pow(t[1] - e.peek(i).color[1], 2) + Math.pow(t[2] - e.peek(i).color[2], 2))) < r || void 0 === r) && (r = n, o = e.peek(i).color);
                        return o
                    },
                    forcebw: function() {
                        var t = this.vboxes;
                        t.sort(function(t, r) {
                            return o.naturalOrder(o.sum(t.color), o.sum(r.color))
                        });
                        var r = t[0].color;
                        r[0] < 5 && r[1] < 5 && r[2] < 5 && (t[0].color = [0, 0, 0]);
                        var n = t.length - 1,
                            e = t[n].color;
                        e[0] > 251 && e[1] > 251 && e[2] > 251 && (t[n].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(u, c) {
                        if (!u.length || c < 2 || c > 256) return !1;
                        var s, f, a, h, p, b, v, l, g, y, x, j, d, m, A, w, O = (s = u, p = Array(32768), s.forEach(function(n) {
                                a = n[0] >> t, h = n[1] >> t, p[f = r(a, h, n[2] >> t)] = (p[f] || 0) + 1
                            }), p),
                            _ = 0;
                        O.forEach(function() {
                            _++
                        });
                        var k = (b = u, v = O, x = 1e6, j = 0, d = 1e6, m = 0, A = 1e6, w = 0, b.forEach(function(r) {
                                l = r[0] >> t, g = r[1] >> t, y = r[2] >> t, l < x ? x = l : l > j && (j = l), g < d ? d = g : g > m && (m = g), y < A ? A = y : y > w && (w = y)
                            }), new e(x, j, d, m, A, w, v)),
                            z = new n(function(t, r) {
                                return o.naturalOrder(t.count(), r.count())
                            });

                        function M(t, n) {
                            for (var e, i = 1, u = 0; u < 1e3;) {
                                if (!(e = t.pop()).count()) {
                                    t.push(e), u++;
                                    continue
                                }
                                var c = function(t, n) {
                                        if (n.count()) {
                                            var e = n.r2 - n.r1 + 1,
                                                i = n.g2 - n.g1 + 1,
                                                u = n.b2 - n.b1 + 1,
                                                c = o.max([e, i, u]);
                                            if (1 == n.count()) return [n.copy()];
                                            var s, f, a, h, p, b = 0,
                                                v = [],
                                                l = [];
                                            if (c == e)
                                                for (s = n.r1; s <= n.r2; s++) {
                                                    for (h = 0, f = n.g1; f <= n.g2; f++)
                                                        for (a = n.b1; a <= n.b2; a++) h += t[p = r(s, f, a)] || 0;
                                                    b += h, v[s] = b
                                                } else if (c == i)
                                                    for (s = n.g1; s <= n.g2; s++) {
                                                        for (h = 0, f = n.r1; f <= n.r2; f++)
                                                            for (a = n.b1; a <= n.b2; a++) h += t[p = r(f, s, a)] || 0;
                                                        b += h, v[s] = b
                                                    } else
                                                        for (s = n.b1; s <= n.b2; s++) {
                                                            for (h = 0, f = n.r1; f <= n.r2; f++)
                                                                for (a = n.g1; a <= n.g2; a++) h += t[p = r(f, a, s)] || 0;
                                                            b += h, v[s] = b
                                                        }
                                            return v.forEach(function(t, r) {
                                                l[r] = b - t
                                            }), g(c == e ? "r" : c == i ? "g" : "b")
                                        }

                                        function g(t) {
                                            var r, o, e, i, u, c = t + "1",
                                                f = t + "2",
                                                a = 0;
                                            for (s = n[c]; s <= n[f]; s++)
                                                if (v[s] > b / 2) {
                                                    for (e = n.copy(), i = n.copy(), r = s - n[c], u = r <= (o = n[f] - s) ? Math.min(n[f] - 1, ~~(s + o / 2)) : Math.max(n[c], ~~(s - 1 - r / 2)); !v[u];) u++;
                                                    for (a = l[u]; !a && v[u - 1];) a = l[--u];
                                                    return e[f] = u, i[c] = e[f] + 1, [e, i]
                                                }
                                        }
                                    }(O, e),
                                    s = c[0],
                                    f = c[1];
                                if (!s) return;
                                if (t.push(s), f && (t.push(f), i++), i >= n || u++ > 1e3) return
                            }
                        }
                        z.push(k), M(z, .75 * c);
                        for (var E = new n(function(t, r) {
                                return o.naturalOrder(t.count() * t.volume(), r.count() * r.volume())
                            }); z.size();) E.push(z.pop());
                        M(E, c - E.size());
                        for (var q = new i; E.size();) q.push(E.pop());
                        return q
                    }
                }
            }();
            t.exports = e.quantize
        }
    }
]);