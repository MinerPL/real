(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["52489"], {
        938252: function(t, r, n) {
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
        238455: function(t, r, n) {
            var o = n("63533"),
                e = n("651558"),
                i = n("349046"),
                u = n("153997"),
                c = n("820458"),
                s = n("663652"),
                a = Object.prototype.hasOwnProperty;
            t.exports = function(t, r) {
                var n = i(t),
                    f = !n && e(t),
                    h = !n && !f && u(t),
                    p = !n && !f && !h && s(t),
                    l = n || f || h || p,
                    b = l ? o(t.length, String) : [],
                    v = b.length;
                for (var g in t)(r || a.call(t, g)) && !(l && ("length" == g || h && ("offset" == g || "parent" == g) || p && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || c(g, v))) && b.push(g);
                return b
            }
        },
        85722: function(t, r, n) {
            var o = n("616691"),
                e = n("960052"),
                i = n("509492"),
                u = {};
            u["[object Float32Array]"] = u["[object Float64Array]"] = u["[object Int8Array]"] = u["[object Int16Array]"] = u["[object Int32Array]"] = u["[object Uint8Array]"] = u["[object Uint8ClampedArray]"] = u["[object Uint16Array]"] = u["[object Uint32Array]"] = !0, u["[object Arguments]"] = u["[object Array]"] = u["[object ArrayBuffer]"] = u["[object Boolean]"] = u["[object DataView]"] = u["[object Date]"] = u["[object Error]"] = u["[object Function]"] = u["[object Map]"] = u["[object Number]"] = u["[object Object]"] = u["[object RegExp]"] = u["[object Set]"] = u["[object String]"] = u["[object WeakMap]"] = !1;
            t.exports = function(t) {
                return i(t) && e(t.length) && !!u[o(t)]
            }
        },
        891183: function(t, r, n) {
            var o = n("356827"),
                e = n("57100"),
                i = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!o(t)) return e(t);
                var r = [];
                for (var n in Object(t)) i.call(t, n) && "constructor" != n && r.push(n);
                return r
            }
        },
        63533: function(t, r, n) {
            t.exports = function(t, r) {
                for (var n = -1, o = Array(t); ++n < t;) o[n] = r(n);
                return o
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
            var o = Object.prototype;
            t.exports = function(t) {
                var r = t && t.constructor;
                return t === ("function" == typeof r && r.prototype || o)
            }
        },
        57100: function(t, r, n) {
            var o = n("676315")(Object.keys, Object);
            t.exports = o
        },
        961077: function(t, r, n) {
            t = n.nmd(t);
            var o = n("71890"),
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
        676315: function(t, r, n) {
            t.exports = function(t, r) {
                return function(n) {
                    return t(r(n))
                }
            }
        },
        153997: function(t, r, n) {
            t = n.nmd(t);
            var o = n("619146"),
                e = n("108028"),
                i = "object" == typeof r && r && !r.nodeType && r,
                u = i && "object" == typeof t && t && !t.nodeType && t,
                c = u && u.exports === i ? o.Buffer : void 0,
                s = c ? c.isBuffer : void 0;
            t.exports = s || e
        },
        663652: function(t, r, n) {
            var o = n("85722"),
                e = n("870686"),
                i = n("961077"),
                u = i && i.isTypedArray,
                c = u ? e(u) : o;
            t.exports = c
        },
        905269: function(t, r, n) {
            var o = n("238455"),
                e = n("891183"),
                i = n("355653");
            t.exports = function(t) {
                return i(t) ? o(t) : e(t)
            }
        },
        108028: function(t, r, n) {
            t.exports = function() {
                return !1
            }
        },
        873101: function(t, r, n) {
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
                                a = 0,
                                f = 0,
                                h = 0;
                            for (e = this.r1; e <= this.r2; e++)
                                for (i = this.g1; i <= this.g2; i++)
                                    for (u = this.b1; u <= this.b2; u++) c += o = n[r(e, i, u)] || 0, a += o * (e + .5) * s, f += o * (i + .5) * s, h += o * (u + .5) * s;
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
                        var s, a, f, h, p, l, b, v, g, d, y, m, x, j, _, A, E = (s = u, p = Array(32768), s.forEach(function(n) {
                                f = n[0] >> t, h = n[1] >> t, p[a = r(f, h, n[2] >> t)] = (p[a] || 0) + 1
                            }), p),
                            S = 0;
                        E.forEach(function() {
                            S++
                        });
                        var w = (l = u, b = E, y = 1e6, m = 0, x = 1e6, j = 0, _ = 1e6, A = 0, l.forEach(function(r) {
                                v = r[0] >> t, g = r[1] >> t, d = r[2] >> t, v < y ? y = v : v > m && (m = v), g < x ? x = g : g > j && (j = g), d < _ ? _ = d : d > A && (A = d)
                            }), new e(y, m, x, j, _, A, b)),
                            I = new n(function(t, r) {
                                return o.naturalOrder(t.count(), r.count())
                            });

                        function O(t, n) {
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
                                            var s, a, f, h, p, l = 0,
                                                b = [],
                                                v = [];
                                            if (c == e)
                                                for (s = n.r1; s <= n.r2; s++) {
                                                    for (h = 0, a = n.g1; a <= n.g2; a++)
                                                        for (f = n.b1; f <= n.b2; f++) h += t[p = r(s, a, f)] || 0;
                                                    l += h, b[s] = l
                                                } else if (c == i)
                                                    for (s = n.g1; s <= n.g2; s++) {
                                                        for (h = 0, a = n.r1; a <= n.r2; a++)
                                                            for (f = n.b1; f <= n.b2; f++) h += t[p = r(a, s, f)] || 0;
                                                        l += h, b[s] = l
                                                    } else
                                                        for (s = n.b1; s <= n.b2; s++) {
                                                            for (h = 0, a = n.r1; a <= n.r2; a++)
                                                                for (f = n.g1; f <= n.g2; f++) h += t[p = r(a, f, s)] || 0;
                                                            l += h, b[s] = l
                                                        }
                                            return b.forEach(function(t, r) {
                                                v[r] = l - t
                                            }), g(c == e ? "r" : c == i ? "g" : "b")
                                        }

                                        function g(t) {
                                            var r, o, e, i, u, c = t + "1",
                                                a = t + "2",
                                                f = 0;
                                            for (s = n[c]; s <= n[a]; s++)
                                                if (b[s] > l / 2) {
                                                    for (e = n.copy(), i = n.copy(), r = s - n[c], u = r <= (o = n[a] - s) ? Math.min(n[a] - 1, ~~(s + o / 2)) : Math.max(n[c], ~~(s - 1 - r / 2)); !b[u];) u++;
                                                    for (f = v[u]; !f && b[u - 1];) f = v[--u];
                                                    return e[a] = u, i[c] = e[a] + 1, [e, i]
                                                }
                                        }
                                    }(E, e),
                                    s = c[0],
                                    a = c[1];
                                if (!s) return;
                                if (t.push(s), a && (t.push(a), i++), i >= n || u++ > 1e3) return
                            }
                        }
                        I.push(w), O(I, .75 * c);
                        for (var T = new n(function(t, r) {
                                return o.naturalOrder(t.count() * t.volume(), r.count() * r.volume())
                            }); I.size();) T.push(I.pop());
                        O(T, c - T.size());
                        for (var C = new i; T.size();) C.push(T.pop());
                        return C
                    }
                }
            }();
            t.exports = e.quantize
        },
        746304: function(t, r, n) {
            "use strict";
            var o, e;
            n.r(r), n.d(r, {
                AudioSettingsDefaultVolumes: function() {
                    return o
                }
            }), (e = o || (o = {}))[e.USER = 100] = "USER", e[e.STREAM = 18] = "STREAM"
        },
        757364: function(t, r, n) {
            "use strict";
            var o, e;
            n.r(r), n.d(r, {
                GuildInviteFlags: function() {
                    return o
                }
            }), (e = o || (o = {}))[e.IS_GUEST_INVITE = 1] = "IS_GUEST_INVITE", e[e.IS_VIEWED = 2] = "IS_VIEWED", e[e.IS_ENHANCED = 4] = "IS_ENHANCED"
        },
        989901: function(t, r, n) {
            "use strict";
            var o, e;
            n.r(r), n.d(r, {
                ThreadSearchTagSetting: function() {
                    return o
                }
            }), (e = o || (o = {})).MATCH_ALL = "match_all", e.MATCH_SOME = "match_some"
        },
        895393: function(t, r, n) {
            "use strict";

            function o(t) {
                let r = document.body;
                if (null == r) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    o = window.getSelection(),
                    e = document.createElement("textarea");
                e.value = t, e.contentEditable = "true", e.style.visibility = "none", r.appendChild(e), n.selectNodeContents(e), null == o || o.removeAllRanges(), null == o || o.addRange(n), e.focus(), e.setSelectionRange(0, t.length);
                let i = document.execCommand("copy");
                return r.removeChild(e), i
            }
            n.r(r), n.d(r, {
                copy: function() {
                    return o
                }
            })
        }
    }
]);