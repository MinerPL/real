(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["81417"], {
        13399: function(e, t, n) {
            "use strict";
            e.exports.parse = function(e) {
                var t = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
                if (!t) return null;
                t.shift();
                var n = null,
                    r = [];
                t[2] && (n = (o = t[2].split("-")).shift(), r = o);
                var i = [];
                t[5] && (i = t[5].split("-")).shift();
                var a = [];
                if (t[6]) {
                    (o = t[6].split("-")).shift();
                    for (var o, l, u = []; o.length;) {
                        var s = o.shift();
                        1 === s.length ? l ? (a.push({
                            singleton: l,
                            extension: u
                        }), l = s, u = []) : l = s : u.push(s)
                    }
                    a.push({
                        singleton: l,
                        extension: u
                    })
                }
                var c = [];
                t[7] && ((c = t[7].split("-")).shift(), c.shift());
                var d = [];
                return t[8] && (d = t[8].split("-")).shift(), {
                    langtag: {
                        language: {
                            language: n,
                            extlang: r
                        },
                        script: t[3] || null,
                        region: t[4] || null,
                        variant: i,
                        extension: a,
                        privateuse: c
                    },
                    privateuse: d,
                    grandfathered: {
                        irregular: t[0] || null,
                        regular: t[1] || null
                    }
                }
            }
        },
        715251: function(e, t, n) {
            "use strict";
            var r = "%[a-f0-9]{2}",
                i = RegExp("(" + r + ")|([^%]+?)", "gi"),
                a = RegExp("(" + r + ")+", "gi");
            e.exports = function(e) {
                if ("string" != typeof e) throw TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
                try {
                    return e = e.replace(/\+/g, " "), decodeURIComponent(e)
                } catch (t) {
                    return function(e) {
                        for (var t = {
                                "%FE%FF": "��",
                                "%FF%FE": "��"
                            }, n = a.exec(e); n;) {
                            try {
                                t[n[0]] = decodeURIComponent(n[0])
                            } catch (e) {
                                var r = function(e) {
                                    try {
                                        return decodeURIComponent(e)
                                    } catch (r) {
                                        for (var t = e.match(i) || [], n = 1; n < t.length; n++) t = (e = (function e(t, n) {
                                            try {
                                                return [decodeURIComponent(t.join(""))]
                                            } catch (e) {}
                                            if (1 === t.length) return t;
                                            n = n || 1;
                                            var r = t.slice(0, n),
                                                i = t.slice(n);
                                            return Array.prototype.concat.call([], e(r), e(i))
                                        })(t, n).join("")).match(i) || [];
                                        return e
                                    }
                                }(n[0]);
                                r !== n[0] && (t[n[0]] = r)
                            }
                            n = a.exec(e)
                        }
                        t["%C2"] = "�";
                        for (var o = Object.keys(t), l = 0; l < o.length; l++) {
                            var u = o[l];
                            e = e.replace(RegExp(u, "g"), t[u])
                        }
                        return e
                    }(e)
                }
            }
        },
        238455: function(e, t, n) {
            var r = n("63533"),
                i = n("651558"),
                a = n("349046"),
                o = n("153997"),
                l = n("820458"),
                u = n("663652"),
                s = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var n = a(e),
                    c = !n && i(e),
                    d = !n && !c && o(e),
                    E = !n && !c && !d && u(e),
                    _ = n || c || d || E,
                    f = _ ? r(e.length, String) : [],
                    I = f.length;
                for (var p in e)(t || s.call(e, p)) && !(_ && ("length" == p || d && ("offset" == p || "parent" == p) || E && ("buffer" == p || "byteLength" == p || "byteOffset" == p) || l(p, I))) && f.push(p);
                return f
            }
        },
        85722: function(e, t, n) {
            var r = n("616691"),
                i = n("960052"),
                a = n("509492"),
                o = {};
            o["[object Float32Array]"] = o["[object Float64Array]"] = o["[object Int8Array]"] = o["[object Int16Array]"] = o["[object Int32Array]"] = o["[object Uint8Array]"] = o["[object Uint8ClampedArray]"] = o["[object Uint16Array]"] = o["[object Uint32Array]"] = !0, o["[object Arguments]"] = o["[object Array]"] = o["[object ArrayBuffer]"] = o["[object Boolean]"] = o["[object DataView]"] = o["[object Date]"] = o["[object Error]"] = o["[object Function]"] = o["[object Map]"] = o["[object Number]"] = o["[object Object]"] = o["[object RegExp]"] = o["[object Set]"] = o["[object String]"] = o["[object WeakMap]"] = !1;
            e.exports = function(e) {
                return a(e) && i(e.length) && !!o[r(e)]
            }
        },
        891183: function(e, t, n) {
            var r = n("356827"),
                i = n("57100"),
                a = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!r(e)) return i(e);
                var t = [];
                for (var n in Object(e)) a.call(e, n) && "constructor" != n && t.push(n);
                return t
            }
        },
        63533: function(e, t, n) {
            e.exports = function(e, t) {
                for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                return r
            }
        },
        870686: function(e, t, n) {
            e.exports = function(e) {
                return function(t) {
                    return e(t)
                }
            }
        },
        356827: function(e, t, n) {
            var r = Object.prototype;
            e.exports = function(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || r)
            }
        },
        57100: function(e, t, n) {
            var r = n("676315")(Object.keys, Object);
            e.exports = r
        },
        961077: function(e, t, n) {
            e = n.nmd(e);
            var r = n("71890"),
                i = "object" == typeof t && t && !t.nodeType && t,
                a = i && "object" == typeof e && e && !e.nodeType && e,
                o = a && a.exports === i && r.process,
                l = function() {
                    try {
                        var e = a && a.require && a.require("util").types;
                        if (e) return e;
                        return o && o.binding && o.binding("util")
                    } catch (e) {}
                }();
            e.exports = l
        },
        676315: function(e, t, n) {
            e.exports = function(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }
        },
        153997: function(e, t, n) {
            e = n.nmd(e);
            var r = n("619146"),
                i = n("108028"),
                a = "object" == typeof t && t && !t.nodeType && t,
                o = a && "object" == typeof e && e && !e.nodeType && e,
                l = o && o.exports === a ? r.Buffer : void 0,
                u = l ? l.isBuffer : void 0;
            e.exports = u || i
        },
        663652: function(e, t, n) {
            var r = n("85722"),
                i = n("870686"),
                a = n("961077"),
                o = a && a.isTypedArray,
                l = o ? i(o) : r;
            e.exports = l
        },
        905269: function(e, t, n) {
            var r = n("238455"),
                i = n("891183"),
                a = n("355653");
            e.exports = function(e) {
                return a(e) ? r(e) : i(e)
            }
        },
        108028: function(e, t, n) {
            e.exports = function() {
                return !1
            }
        },
        40190: function(e, t, n) {
            "use strict";
            var r = Object.getOwnPropertySymbols,
                i = Object.prototype.hasOwnProperty,
                a = Object.prototype.propertyIsEnumerable;
            e.exports = ! function() {
                try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                    var r = Object.getOwnPropertyNames(t).map(function(e) {
                        return t[e]
                    });
                    if ("0123456789" !== r.join("")) return !1;
                    var i = {};
                    if ("abcdefghijklmnopqrst".split("").forEach(function(e) {
                            i[e] = e
                        }), "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, i)).join("")) return !1;
                    return !0
                } catch (e) {
                    return !1
                }
            }() ? function(e, t) {
                for (var n, o, l = function(e) {
                        if (null == e) throw TypeError("Object.assign cannot be called with null or undefined");
                        return Object(e)
                    }(e), u = 1; u < arguments.length; u++) {
                    for (var s in n = Object(arguments[u]), n) i.call(n, s) && (l[s] = n[s]);
                    if (r) {
                        o = r(n);
                        for (var c = 0; c < o.length; c++) a.call(n, o[c]) && (l[o[c]] = n[o[c]])
                    }
                }
                return l
            } : Object.assign
        },
        873101: function(e, t, n) {
            if (!r) var r = {
                map: function(e, t) {
                    var n = {};
                    return t ? e.map(function(e, r) {
                        return n.index = r, t.call(n, e)
                    }) : e.slice()
                },
                naturalOrder: function(e, t) {
                    return e < t ? -1 : e > t ? 1 : 0
                },
                sum: function(e, t) {
                    var n = {};
                    return e.reduce(t ? function(e, r, i) {
                        return n.index = i, e + t.call(n, r)
                    } : function(e, t) {
                        return e + t
                    }, 0)
                },
                max: function(e, t) {
                    return Math.max.apply(null, t ? r.map(e, t) : e)
                }
            };
            var i = function() {
                var e = 3;

                function t(e, t, n) {
                    return (e << 10) + (t << 5) + n
                }

                function n(e) {
                    var t = [],
                        n = !1;

                    function r() {
                        t.sort(e), n = !0
                    }
                    return {
                        push: function(e) {
                            t.push(e), n = !1
                        },
                        peek: function(e) {
                            return !n && r(), void 0 === e && (e = t.length - 1), t[e]
                        },
                        pop: function() {
                            return !n && r(), t.pop()
                        },
                        size: function() {
                            return t.length
                        },
                        map: function(e) {
                            return t.map(e)
                        },
                        debug: function() {
                            return !n && r(), t
                        }
                    }
                }

                function i(e, t, n, r, i, a, o) {
                    this.r1 = e, this.r2 = t, this.g1 = n, this.g2 = r, this.b1 = i, this.b2 = a, this.histo = o
                }

                function a() {
                    this.vboxes = new n(function(e, t) {
                        return r.naturalOrder(e.vbox.count() * e.vbox.volume(), t.vbox.count() * t.vbox.volume())
                    })
                }
                return i.prototype = {
                    volume: function(e) {
                        return (!this._volume || e) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(e) {
                        var n = this.histo;
                        if (!this._count_set || e) {
                            var r, i, a, o = 0;
                            for (r = this.r1; r <= this.r2; r++)
                                for (i = this.g1; i <= this.g2; i++)
                                    for (a = this.b1; a <= this.b2; a++) o += n[t(r, i, a)] || 0;
                            this._count = o, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new i(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(e) {
                        var n = this.histo;
                        if (!this._avg || e) {
                            var r, i, a, o, l = 0,
                                u = 8,
                                s = 0,
                                c = 0,
                                d = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (a = this.g1; a <= this.g2; a++)
                                    for (o = this.b1; o <= this.b2; o++) l += r = n[t(i, a, o)] || 0, s += r * (i + .5) * u, c += r * (a + .5) * u, d += r * (o + .5) * u;
                            l ? this._avg = [~~(s / l), ~~(c / l), ~~(d / l)] : this._avg = [~~(u * (this.r1 + this.r2 + 1) / 2), ~~(u * (this.g1 + this.g2 + 1) / 2), ~~(u * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(t) {
                        var n = t[0] >> e;
                        return gval = t[1] >> e, bval = t[2] >> e, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, a.prototype = {
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
                        for (var t, n, r, i = this.vboxes, a = 0; a < i.size(); a++)((n = Math.sqrt(Math.pow(e[0] - i.peek(a).color[0], 2) + Math.pow(e[1] - i.peek(a).color[1], 2) + Math.pow(e[2] - i.peek(a).color[2], 2))) < t || void 0 === t) && (t = n, r = i.peek(a).color);
                        return r
                    },
                    forcebw: function() {
                        var e = this.vboxes;
                        e.sort(function(e, t) {
                            return r.naturalOrder(r.sum(e.color), r.sum(t.color))
                        });
                        var t = e[0].color;
                        t[0] < 5 && t[1] < 5 && t[2] < 5 && (e[0].color = [0, 0, 0]);
                        var n = e.length - 1,
                            i = e[n].color;
                        i[0] > 251 && i[1] > 251 && i[2] > 251 && (e[n].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(o, l) {
                        if (!o.length || l < 2 || l > 256) return !1;
                        var u, s, c, d, E, _, f, I, p, T, h, S, O, A, N, C, g = (u = o, E = Array(32768), u.forEach(function(n) {
                                c = n[0] >> e, d = n[1] >> e, E[s = t(c, d, n[2] >> e)] = (E[s] || 0) + 1
                            }), E),
                            R = 0;
                        g.forEach(function() {
                            R++
                        });
                        var v = (_ = o, f = g, h = 1e6, S = 0, O = 1e6, A = 0, N = 1e6, C = 0, _.forEach(function(t) {
                                I = t[0] >> e, p = t[1] >> e, T = t[2] >> e, I < h ? h = I : I > S && (S = I), p < O ? O = p : p > A && (A = p), T < N ? N = T : T > C && (C = T)
                            }), new i(h, S, O, A, N, C, f)),
                            L = new n(function(e, t) {
                                return r.naturalOrder(e.count(), t.count())
                            });

                        function D(e, n) {
                            for (var i, a = 1, o = 0; o < 1e3;) {
                                if (!(i = e.pop()).count()) {
                                    e.push(i), o++;
                                    continue
                                }
                                var l = function(e, n) {
                                        if (n.count()) {
                                            var i = n.r2 - n.r1 + 1,
                                                a = n.g2 - n.g1 + 1,
                                                o = n.b2 - n.b1 + 1,
                                                l = r.max([i, a, o]);
                                            if (1 == n.count()) return [n.copy()];
                                            var u, s, c, d, E, _ = 0,
                                                f = [],
                                                I = [];
                                            if (l == i)
                                                for (u = n.r1; u <= n.r2; u++) {
                                                    for (d = 0, s = n.g1; s <= n.g2; s++)
                                                        for (c = n.b1; c <= n.b2; c++) d += e[E = t(u, s, c)] || 0;
                                                    _ += d, f[u] = _
                                                } else if (l == a)
                                                    for (u = n.g1; u <= n.g2; u++) {
                                                        for (d = 0, s = n.r1; s <= n.r2; s++)
                                                            for (c = n.b1; c <= n.b2; c++) d += e[E = t(s, u, c)] || 0;
                                                        _ += d, f[u] = _
                                                    } else
                                                        for (u = n.b1; u <= n.b2; u++) {
                                                            for (d = 0, s = n.r1; s <= n.r2; s++)
                                                                for (c = n.g1; c <= n.g2; c++) d += e[E = t(s, c, u)] || 0;
                                                            _ += d, f[u] = _
                                                        }
                                            return f.forEach(function(e, t) {
                                                I[t] = _ - e
                                            }), p(l == i ? "r" : l == a ? "g" : "b")
                                        }

                                        function p(e) {
                                            var t, r, i, a, o, l = e + "1",
                                                s = e + "2",
                                                c = 0;
                                            for (u = n[l]; u <= n[s]; u++)
                                                if (f[u] > _ / 2) {
                                                    for (i = n.copy(), a = n.copy(), t = u - n[l], o = t <= (r = n[s] - u) ? Math.min(n[s] - 1, ~~(u + r / 2)) : Math.max(n[l], ~~(u - 1 - t / 2)); !f[o];) o++;
                                                    for (c = I[o]; !c && f[o - 1];) c = I[--o];
                                                    return i[s] = o, a[l] = i[s] + 1, [i, a]
                                                }
                                        }
                                    }(g, i),
                                    u = l[0],
                                    s = l[1];
                                if (!u) return;
                                if (e.push(u), s && (e.push(s), a++), a >= n || o++ > 1e3) return
                            }
                        }
                        L.push(v), D(L, .75 * l);
                        for (var m = new n(function(e, t) {
                                return r.naturalOrder(e.count() * e.volume(), t.count() * t.volume())
                            }); L.size();) m.push(L.pop());
                        D(m, l - m.size());
                        for (var M = new a; m.size();) M.push(m.pop());
                        return M
                    }
                }
            }();
            e.exports = i.quantize
        },
        287377: function(e, t, n) {
            "use strict";
            var r = n("837274"),
                i = n("40190"),
                a = n("715251");

            function o(e, t) {
                return t.encode ? t.strict ? r(e) : encodeURIComponent(e) : e
            }
            t.extract = function(e) {
                return e.split("?")[1] || ""
            }, t.parse = function(e, t) {
                var n = function(e) {
                        var t;
                        switch (e.arrayFormat) {
                            case "index":
                                return function(e, n, r) {
                                    if (t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), !t) {
                                        r[e] = n;
                                        return
                                    }
                                    void 0 === r[e] && (r[e] = {}), r[e][t[1]] = n
                                };
                            case "bracket":
                                return function(e, n, r) {
                                    if (t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t) {
                                        if (void 0 === r[e]) {
                                            r[e] = [n];
                                            return
                                        }
                                    } else {
                                        r[e] = n;
                                        return
                                    }
                                    r[e] = [].concat(r[e], n)
                                };
                            default:
                                return function(e, t, n) {
                                    if (void 0 === n[e]) {
                                        n[e] = t;
                                        return
                                    }
                                    n[e] = [].concat(n[e], t)
                                }
                        }
                    }(t = i({
                        arrayFormat: "none"
                    }, t)),
                    r = Object.create(null);
                return "string" == typeof e && (e = e.trim().replace(/^(\?|#|&)/, "")) ? (e.split("&").forEach(function(e) {
                    var t = e.replace(/\+/g, " ").split("="),
                        i = t.shift(),
                        o = t.length > 0 ? t.join("=") : void 0;
                    o = void 0 === o ? null : a(o), n(a(i), o, r)
                }), Object.keys(r).sort().reduce(function(e, t) {
                    var n = r[t];
                    return n && "object" == typeof n && !Array.isArray(n) ? e[t] = function e(t) {
                        return Array.isArray(t) ? t.sort() : "object" == typeof t ? e(Object.keys(t)).sort(function(e, t) {
                            return Number(e) - Number(t)
                        }).map(function(e) {
                            return t[e]
                        }) : t
                    }(n) : e[t] = n, e
                }, Object.create(null))) : r
            }, t.stringify = function(e, t) {
                var n = function(e) {
                    switch (e.arrayFormat) {
                        case "index":
                            return function(t, n, r) {
                                return null === n ? [o(t, e), "[", r, "]"].join("") : [o(t, e), "[", o(r, e), "]=", o(n, e)].join("")
                            };
                        case "bracket":
                            return function(t, n) {
                                return null === n ? o(t, e) : [o(t, e), "[]=", o(n, e)].join("")
                            };
                        default:
                            return function(t, n) {
                                return null === n ? o(t, e) : [o(t, e), "=", o(n, e)].join("")
                            }
                    }
                }(t = i({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none"
                }, t));
                return e ? Object.keys(e).sort().map(function(r) {
                    var i = e[r];
                    if (void 0 === i) return "";
                    if (null === i) return o(r, t);
                    if (Array.isArray(i)) {
                        var a = [];
                        return i.slice().forEach(function(e) {
                            void 0 !== e && a.push(n(r, e, a.length))
                        }), a.join("&")
                    }
                    return o(r, t) + "=" + o(i, t)
                }).filter(function(e) {
                    return e.length > 0
                }).join("&") : ""
            }
        },
        962429: function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            })
        },
        365444: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return r.default
                },
                useStableMemo: function() {
                    return i.default
                },
                useLazyValue: function() {
                    return a.default
                }
            });
            var r = n("732427"),
                i = n("866490"),
                a = n("246105")
        },
        732427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("773670");

            function i() {
                let [, e] = (0, r.useState)({});
                return (0, r.useCallback)(() => e({}), [])
            }
        },
        246105: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("773670");
            let i = {};

            function a(e) {
                let t = (0, r.useRef)(i);
                return t.current === i && (t.current = e()), t.current
            }
        },
        866490: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("773670"),
                i = n("962429");
            let a = [];

            function o(e, t) {
                let n = (0, r.useRef)(),
                    o = (0, r.useRef)(a);
                return o.current === a ? (n.current = e(), o.current = t) : !(0, i.default)(t, o.current) && (n.current = e(), o.current = t), n.current
            }
        },
        837274: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
                    return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                })
            }
        },
        184557: function(e, t, n) {
            "use strict";

            function r(e) {
                let t = "==".slice(0, (4 - e.length % 4) % 4),
                    n = e.replace(/-/g, "+").replace(/_/g, "/") + t,
                    r = atob(n),
                    i = new ArrayBuffer(r.length),
                    a = new Uint8Array(i);
                for (let e = 0; e < r.length; e++) a[e] = r.charCodeAt(e);
                return i
            }

            function i(e) {
                let t = new Uint8Array(e),
                    n = "";
                for (let e of t) n += String.fromCharCode(e);
                let r = btoa(n),
                    i = r.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
                return i
            }
            n.r(t), n.d(t, {
                create: function() {
                    return h
                },
                get: function() {
                    return S
                }
            });
            var a = "copy",
                o = "convert";

            function l(e, t, n) {
                if (t === a) return n;
                if (t === o) return e(n);
                if (t instanceof Array) return n.map(n => l(e, t[0], n));
                if (t instanceof Object) {
                    let r = {};
                    for (let [i, a] of Object.entries(t)) {
                        if (a.derive) {
                            let e = a.derive(n);
                            void 0 !== e && (n[i] = e)
                        }
                        if (!(i in n)) {
                            if (a.required) throw Error("Missing key: ".concat(i));
                            continue
                        }
                        if (null == n[i]) {
                            r[i] = null;
                            continue
                        }
                        r[i] = l(e, a.schema, n[i])
                    }
                    return r
                }
            }

            function u(e, t) {
                return {
                    required: !0,
                    schema: e,
                    derive: t
                }
            }

            function s(e) {
                return {
                    required: !0,
                    schema: e
                }
            }

            function c(e) {
                return {
                    required: !1,
                    schema: e
                }
            }
            var d = {
                    type: s(a),
                    id: s(o),
                    transports: c(a)
                },
                E = {
                    appid: c(a),
                    appidExclude: c(a),
                    credProps: c(a)
                },
                _ = {
                    appid: c(a),
                    appidExclude: c(a),
                    credProps: c(a)
                },
                f = {
                    publicKey: s({
                        rp: s(a),
                        user: s({
                            id: s(o),
                            name: s(a),
                            displayName: s(a)
                        }),
                        challenge: s(o),
                        pubKeyCredParams: s(a),
                        timeout: c(a),
                        excludeCredentials: c([d]),
                        authenticatorSelection: c(a),
                        attestation: c(a),
                        extensions: c(E)
                    }),
                    signal: c(a)
                },
                I = {
                    type: s(a),
                    id: s(a),
                    rawId: s(o),
                    authenticatorAttachment: c(a),
                    response: s({
                        clientDataJSON: s(o),
                        attestationObject: s(o),
                        transports: u(a, e => {
                            var t;
                            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
                        })
                    }),
                    clientExtensionResults: u(_, e => e.getClientExtensionResults())
                },
                p = {
                    mediation: c(a),
                    publicKey: s({
                        challenge: s(o),
                        timeout: c(a),
                        rpId: c(a),
                        allowCredentials: c([d]),
                        userVerification: c(a),
                        extensions: c(E)
                    }),
                    signal: c(a)
                },
                T = {
                    type: s(a),
                    id: s(a),
                    rawId: s(o),
                    authenticatorAttachment: c(a),
                    response: s({
                        clientDataJSON: s(o),
                        authenticatorData: s(o),
                        signature: s(o),
                        userHandle: s(o)
                    }),
                    clientExtensionResults: u(_, e => e.getClientExtensionResults())
                };
            async function h(e) {
                let t = await navigator.credentials.create(l(r, f, e));
                return l(i, I, t)
            }
            async function S(e) {
                let t = await navigator.credentials.get(l(r, p, e));
                return l(i, T, t)
            }
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return i
                },
                popLayer: function() {
                    return a
                },
                popAllLayers: function() {
                    return o
                }
            });
            var r = n("913144");

            function i(e) {
                r.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function a() {
                r.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function o() {
                r.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        775433: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchSubscriptionPlansForSKU: function() {
                    return d
                },
                fetchSubscriptionPlansBySKUs: function() {
                    return E
                },
                fetchPremiumSubscriptionPlans: function() {
                    return _
                },
                resetSubscriptionPlanData: function() {
                    return f
                }
            });
            var r = n("990746"),
                i = n("913144"),
                a = n("333805"),
                o = n("160299"),
                l = n("745279"),
                u = n("850068"),
                s = n("49111"),
                c = n("646718");
            async function d(e, t, n, c, d) {
                i.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH",
                    skuId: e
                });
                try {
                    let a = {
                            url: s.Endpoints.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                            oldFormErrors: !0
                        },
                        l = {};
                    null != t && (l.country_code = t), null != n && (l.payment_source_id = n), null != c && (l.include_unpublished = c), null != d && (l.revenue_surface = d), a.query = l, !o.default.ipCountryCodeLoaded && await (0, u.fetchIpCountryCode)();
                    let E = await r.default.get(a);
                    i.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                        skuId: e,
                        subscriptionPlans: E.body
                    })
                } catch (t) {
                    throw i.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                        skuId: e
                    }), (0, l.captureBillingException)(t), new a.default(t)
                }
            }

            function E(e, t) {
                return Promise.all(e.filter(e => e !== c.PremiumSubscriptionSKUs.NONE).map(e => d(e, t)))
            }

            function _(e, t, n) {
                return Promise.all(c.ACTIVE_PREMIUM_SKUS.filter(e => e !== c.PremiumSubscriptionSKUs.NONE).map(r => d(r, e, t, void 0, n)))
            }

            function f() {
                i.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        79112: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("990746"),
                i = n("173333"),
                a = n("913144"),
                o = n("211895"),
                l = n("26092"),
                u = n("599110"),
                s = n("315102"),
                c = n("730622"),
                d = n("49111"),
                E = n("191349"),
                _ = n("782340"),
                f = {
                    open() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                openWithoutBackstack: !1
                            };
                        (0, o.default)(e, t, n)
                    },
                    init: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_INIT",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    close() {
                        let e = l.default.onClose;
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), null != e && e()
                    },
                    setSection(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SET_SECTION",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    clearSubsection(e) {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                            forSection: e
                        })
                    },
                    clearScrollPosition(e) {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                            forSection: e
                        })
                    },
                    updateAccount(e) {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                            settings: e
                        })
                    },
                    submitComplete() {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                        })
                    },
                    reset() {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_RESET"
                        })
                    },
                    saveAccountChanges(e, t) {
                        a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT"
                        });
                        let {
                            username: n,
                            email: o,
                            emailToken: l,
                            password: f,
                            avatar: I,
                            newPassword: p,
                            discriminator: T
                        } = e, {
                            close: h
                        } = t;
                        return (0, c.default)(e => {
                            let t = {
                                    username: n,
                                    email: o,
                                    email_token: l,
                                    password: f,
                                    avatar: I,
                                    new_password: p,
                                    ...e,
                                    discriminator: null != T && "" !== T ? T : void 0
                                },
                                a = i.default.get(d.DEVICE_TOKEN),
                                u = (0, E.getDevicePushProvider)();
                            null != u && null != a && (t.push_provider = u, t.push_token = a);
                            let s = i.default.get(d.DEVICE_VOIP_TOKEN);
                            return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != s && (t.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, t.push_voip_token = s), r.default.patch({
                                url: d.Endpoints.ME,
                                oldFormErrors: !0,
                                body: t
                            })
                        }, {
                            checkEnabled: !1,
                            modalProps: {
                                title: _.default.Messages.TWO_FA_CHANGE_ACCOUNT
                            },
                            hooks: {
                                onEarlyClose: () => a.default.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }).then(e => {
                            let t = e.body,
                                n = t.token;
                            return u.default.track(d.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, s.isAnimatedIconHash)(t.avatar)
                            }), delete t.token, a.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: t.id
                            }), a.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: t
                            }), null != p && a.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: t,
                                newPassword: p
                            }), null != f && null != p && a.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: t.id
                            }), h ? this.close() : this.submitComplete(), e
                        }, e => (a.default.dispatch({
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
                    return d
                }
            });
            var r = n("920040"),
                i = n("773670"),
                a = n("575482"),
                o = n.n(a),
                l = n("77078"),
                u = n("782340"),
                s = n("430230");
            class c extends i.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: a,
                        error: c,
                        isLoading: d,
                        maxLength: E,
                        transitionState: _,
                        helpMessage: f,
                        retryPrompt: I,
                        retrySuccessMessage: p
                    } = this.props, {
                        code: T,
                        errorMessage: h,
                        retrySuccess: S
                    } = this.state, O = i.Children.count(a) > 0 ? (0, r.jsx)(l.Card, {
                        type: l.Card.Types.WARNING,
                        className: s.card,
                        children: (0, r.jsx)(l.Text, {
                            variant: "text-md/normal",
                            children: a
                        })
                    }) : null, A = null != I ? (0, r.jsxs)(l.Text, {
                        className: o(s.submitText, s.spacing),
                        variant: "text-sm/normal",
                        children: [(0, r.jsx)("br", {}), (0, r.jsx)(l.Clickable, {
                            className: o(s.spacing, s.link),
                            onClick: this.handleRetry,
                            children: (0, r.jsx)(l.Anchor, {
                                children: I
                            })
                        })]
                    }) : null, N = S ? (0, r.jsx)(l.Card, {
                        type: l.Card.Types.SUCCESS,
                        className: s.card,
                        children: (0, r.jsx)(l.Text, {
                            variant: "text-md/normal",
                            children: p
                        })
                    }) : null;
                    return (0, r.jsx)(l.ModalRoot, {
                        transitionState: _,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(l.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(l.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, r.jsxs)(l.ModalContent, {
                                children: [null != f ? (0, r.jsx)(l.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: s.spacing,
                                    children: f
                                }) : null, O, N, (0, r.jsxs)(l.FormItem, {
                                    title: this.getLabelText(),
                                    className: s.spacing,
                                    children: [(0, r.jsx)(l.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != E ? E : 10,
                                        value: T,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(l.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: s.error,
                                        children: null != c ? c : h
                                    }) : null, A]
                                })]
                            }), (0, r.jsxs)(l.ModalFooter, {
                                children: [(0, r.jsx)(l.Button, {
                                    type: "submit",
                                    disabled: d || 0 === T.length,
                                    children: null != n ? n : u.default.Messages.CONFIRM
                                }), (0, r.jsx)(l.Button, {
                                    onClick: this.handleCancel,
                                    disabled: d,
                                    look: l.Button.Looks.LINK,
                                    color: l.Button.Colors.PRIMARY,
                                    children: u.default.Messages.CANCEL
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
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? u.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : u.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? u.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : u.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
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
            var d = c
        },
        276825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CheckmarkSmallIcon: function() {
                    return o
                }
            });
            var r = n("920040");
            n("773670");
            var i = n("912557"),
                a = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M18.707 7.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 14.586l7.293-7.293a1 1 0 0 1 1.414 0Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        753809: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LinkIcon: function() {
                    return o
                }
            });
            var r = n("920040");
            n("773670");
            var i = n("912557"),
                a = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M16.293 14.707a1 1 0 0 1 0-1.414l2.5-2.5a3.95 3.95 0 1 0-5.586-5.586l-2.5 2.5a1 1 0 1 1-1.414-1.414l2.5-2.5a5.95 5.95 0 0 1 8.414 8.414l-2.5 2.5a1 1 0 0 1-1.414 0ZM7.707 9.293a1 1 0 0 1 0 1.414l-2.5 2.5a3.95 3.95 0 0 0 5.586 5.586l2.5-2.5a1 1 0 0 1 1.414 1.414l-2.5 2.5a5.95 5.95 0 1 1-8.414-8.414l2.5-2.5a1 1 0 0 1 1.414 0Zm7 1.414a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 0 0 1.414 1.414l4-4Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        434657: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LockIcon: function() {
                    return o
                }
            });
            var r = n("920040");
            n("773670");
            var i = n("912557"),
                a = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M15 8V6a3 3 0 1 0-6 0v2h6ZM7 8H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-2V6A5 5 0 0 0 7 6v2Zm6 7.732A2 2 0 0 0 12 12a2 2 0 0 0-1 3.732V17a1 1 0 1 0 2 0v-1.268Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        599417: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("990746"),
                i = n("49111"),
                a = n("782340");
            class o extends r.default.V8APIError {
                constructor(e, t) {
                    super(e, t, null != t ? a.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: i.Links.STATUS,
                        details: "".concat(t)
                    }) : a.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: i.Links.STATUS
                    }))
                }
            }
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("990746"),
                i = n("49111"),
                a = n("782340");
            class o extends r.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? a.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: i.Links.STATUS,
                        details: "".concat(t)
                    }) : a.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: i.Links.STATUS
                    }))
                }
            }
        },
        572544: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var r = n("498997"),
                i = n("807403"),
                a = n("913144"),
                o = n("970728"),
                l = n("79112"),
                u = n("816140"),
                s = n("412707"),
                c = n("139514"),
                d = n("312016"),
                E = n("189007"),
                _ = n("398604"),
                f = n("468560"),
                I = n("361572"),
                p = n("537325"),
                T = n("835174"),
                h = n("566271"),
                S = n("337543"),
                O = n("18494"),
                A = n("162771"),
                N = n("677099"),
                C = n("599110"),
                g = n("253981");
            n("545158");
            var R = n("49111");
            async function v(e, t) {
                await a.default.dispatch({
                    type: "INVITE_MODAL_OPEN",
                    invite: e,
                    code: t,
                    context: R.AppContext.APP
                })
            }
            async function L(e) {
                var t, n;
                let r = S.default.getInvite(e.code);
                if (null == r) {
                    let {
                        invite: t
                    } = await o.default.resolveInvite(e.code, "Markdown Link");
                    r = t
                }
                if (null == r) return;
                if (r.state === R.InviteStates.EXPIRED || r.state === R.InviteStates.BANNED || r.state === R.InviteStates.ERROR) {
                    await v(r, e.code);
                    return
                }
                let i = N.default.getFlattenedGuildIds(),
                    a = null === (n = r) || void 0 === n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id,
                    l = null != a && i.includes(a);
                l ? o.default.transitionToInviteSync(r) : await v(r, e.code)
            }
            let D = {
                skipExtensionCheck: void 0,
                analyticsLocations: []
            };

            function m(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D,
                    a = (0, d.findCodedLink)(e),
                    {
                        skipExtensionCheck: o
                    } = t;
                if (null != a && (a.type === c.CodedLinkType.INVITE || a.type === c.CodedLinkType.EMBEDDED_ACTIVITY_INVITE)) return e => (null == e || e.preventDefault(), L(a), !0);
                if (null != a && a.type === c.CodedLinkType.APP_DIRECTORY_PROFILE) return e => {
                    var t;
                    null == e || e.preventDefault();
                    let {
                        code: r
                    } = a, o = null !== (t = A.default.getGuildId()) && void 0 !== t ? t : void 0;
                    return C.default.track(R.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                        application_id: r,
                        device_platform: i.isMobile ? "mobile_web" : "desktop_web",
                        guild_id: o,
                        channel_id: O.default.getChannelId()
                    }), n.el("646186").then(n.bind(n, "646186")).then(e => {
                        let {
                            goToAppDirectory: t
                        } = e, {
                            ApplicationDirectoryViews: i
                        } = n("412707");
                        t({
                            view: i.APPLICATION,
                            applicationId: r,
                            guildId: o,
                            entrypoint: {
                                name: s.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL
                            }
                        })
                    }), !0
                };
                if (null != a && a.type === c.CodedLinkType.GUILD_PRODUCT) return e => {
                    null == e || e.preventDefault();
                    let [t, r] = a.code.split("-");
                    return n.el("573777").then(n.bind(n, "573777")).then(e => {
                        let {
                            openGuildProductLink: n
                        } = e;
                        n(t, r)
                    }), !0
                };
                let {
                    path: S,
                    hostname: N = "",
                    host: v,
                    query: m
                } = r.parse(e), M = g.default.isDiscordHostname(N) || window.location.host === v;
                if (M && (null == S ? void 0 : S.startsWith("/application-directory"))) {
                    let [, , e, t] = S.split("/"), r = null != e && (0, u.isSnowflake)(e) ? e : void 0;
                    return a => {
                        var o;
                        null == a || a.preventDefault();
                        let {
                            ApplicationDirectoryProfileSections: l
                        } = n("750947"), {
                            ApplicationDirectoryViews: u
                        } = n("412707"), c = null !== (o = A.default.getGuildId()) && void 0 !== o ? o : void 0, d = u.HOME;
                        return "search" === e && (d = u.SEARCH), null != r && (d = u.APPLICATION, C.default.track(R.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                            application_id: r,
                            device_platform: i.isMobile ? "mobile_web" : "desktop_web",
                            guild_id: c,
                            channel_id: O.default.getChannelId()
                        })), n.el("646186").then(n.bind(n, "646186")).then(e => {
                            let {
                                goToAppDirectory: n
                            } = e;
                            n({
                                view: d,
                                applicationId: r,
                                guildId: c,
                                applicationSection: (0, f.default)(l, t),
                                entrypoint: {
                                    name: s.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL
                                }
                            })
                        }), !0
                    }
                }
                if (null != S && M && g.default.isAppRoute(S)) {
                    let e = null != m ? {
                        search: m
                    } : null;
                    return t => (null == t || t.preventDefault(), (0, p.default)(S, e), !0)
                }
                if (null != S && M) {
                    let {
                        getOAuth2AuthorizeProps: t,
                        openOAuth2Modal: r
                    } = n("33942"), i = t(e);
                    if (null != i) return e => (null == e || e.preventDefault(), r(i), !0)
                }
                let U = (0, I.tryParseEventDetailsPath)(S);
                if (null != S && M && null != U) return e => {
                    null == e || e.preventDefault();
                    let t = A.default.getGuildId();
                    null != U.guildId && "" !== U.guildId && U.guildId !== t && (0, p.default)(R.Routes.CHANNEL(U.guildId));
                    let n = _.default.getGuildScheduledEvent(U.guildEventId);
                    return null != n && (0, E.openGuildEventDetails)({
                        eventId: n.id
                    }), !0
                };
                if (M && (null == S ? void 0 : S.startsWith("/settings/"))) {
                    let {
                        default: e
                    } = n("777523"), t = e(S);
                    if (null != t) return e => (null == e || e.preventDefault(), l.default.open(t.section, t.subsection, {
                        openWithoutBackstack: !1,
                        impressionSource: t.source
                    }), !0)
                }
                if (!o && null != (0, h.isSuspiciousDownload)(e)) return t => (null == t || t.preventDefault(), T.default.show(e), !0)
            }
        },
        212084: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("605250"),
                i = n("802493");
            let a = new r.default("GuildStickers");
            var o = new class e {
                getSync(e) {
                    let t = performance.now(),
                        n = i.default.stickers(e).getMapEntriesSyncUnsafe(),
                        r = performance.now();
                    return a.log("synchronously loaded in ".concat(r - t, "ms (guilds: ").concat(n.length, ")")), n
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
                        "full" === e.dataMode ? (a.verbose("Replacing ".concat(e.entities.length, " stickers for ").concat(e.guildId)), this.replace(e.guildId, e.entities, t)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (a.verbose("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " stickers for ").concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t))
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
                    i.default.stickersTransaction(n).replaceAll(e, t)
                }
                delete(e, t) {
                    i.default.stickersTransaction(t).delete(e)
                }
                clear(e) {
                    i.default.stickersTransaction(e).delete()
                }
                update(e, t, n, r) {
                    let a = i.default.stickersTransaction(r);
                    for (let r of (a.putAll(e, t), n)) a.delete(e, r)
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
        317041: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TRUE_OPTION_NAME: function() {
                    return l
                },
                FALSE_OPTION_NAME: function() {
                    return u
                },
                BOOLEAN_CHOICES: function() {
                    return s
                },
                BuiltInSectionId: function() {
                    return i
                },
                DISCOVERY_COMMANDS_QUERY_LIMIT: function() {
                    return c
                },
                DISCOVERY_COMMANDS_FRECENCY_LIMIT: function() {
                    return d
                },
                DISCOVERY_COMMAND_FRECENCY_GATEWAY_LIMIT: function() {
                    return E
                },
                SUB_COMMAND_KEY_SEPARATOR: function() {
                    return _
                },
                APPLICATION_COMMAND_PERMISSIONS_LIMIT: function() {
                    return f
                },
                MAX_SUBCOMMAND_LEVEL: function() {
                    return I
                },
                CONTEXT_MENU_COMMANDS_QUERY_LIMIT: function() {
                    return p
                },
                CONTEXT_MENU_PLACEHOLDER_COUNT: function() {
                    return T
                },
                AUTOCOMPLETE_OPTION_DEBOUNCE_TIME: function() {
                    return h
                },
                getValidationErrorText: function() {
                    return S
                }
            });
            var r, i, a = n("798609"),
                o = n("782340");
            let l = "True",
                u = "False",
                s = [{
                    name: l,
                    displayName: l,
                    value: "true"
                }, {
                    name: u,
                    displayName: u,
                    value: "false"
                }];
            (r = i || (i = {})).BUILT_IN = "-1", r.FRECENCY = "-2";
            let c = 10,
                d = 5,
                E = 25,
                _ = "\x00",
                f = 100,
                I = 3,
                p = 10,
                T = 1,
                h = 500;

            function S(e) {
                if (null != e.choices) return o.default.Messages.COMMAND_VALIDATION_CHOICE_ERROR;
                switch (e.type) {
                    case a.ApplicationCommandOptionType.BOOLEAN:
                        return o.default.Messages.COMMAND_VALIDATION_BOOLEAN_ERROR;
                    case a.ApplicationCommandOptionType.CHANNEL:
                        return o.default.Messages.COMMAND_VALIDATION_CHANNEL_ERROR;
                    case a.ApplicationCommandOptionType.INTEGER:
                        return o.default.Messages.COMMAND_VALIDATION_INTEGER_ERROR;
                    case a.ApplicationCommandOptionType.NUMBER:
                        return o.default.Messages.COMMAND_VALIDATION_NUMBER_ERROR;
                    case a.ApplicationCommandOptionType.ROLE:
                        return o.default.Messages.COMMAND_VALIDATION_ROLE_ERROR;
                    case a.ApplicationCommandOptionType.USER:
                        return o.default.Messages.COMMAND_VALIDATION_USER_ERROR;
                    case a.ApplicationCommandOptionType.MENTIONABLE:
                        return o.default.Messages.COMMAND_VALIDATION_MENTIONABLE_ERROR;
                    default:
                        return o.default.Messages.COMMAND_VALIDATION_GENERAL_ERROR
                }
            }
        },
        524768: function(e, t, n) {
            "use strict";
            var r, i, a, o, l, u, s, c, d, E, _, f;
            n.r(t), n.d(t, {
                ApplicationCommandSectionType: function() {
                    return r
                },
                ApplicationCommandInputType: function() {
                    return i
                },
                ApplicationCommandPermissionType: function() {
                    return a
                },
                ApplicationCommandTriggerLocations: function() {
                    return o
                },
                ApplicationCommandTriggerSections: function() {
                    return l
                },
                CommandOrigin: function() {
                    return u
                }
            }), (s = r || (r = {}))[s.BUILT_IN = 0] = "BUILT_IN", s[s.APPLICATION = 1] = "APPLICATION", (c = i || (i = {}))[c.BUILT_IN = 0] = "BUILT_IN", c[c.BUILT_IN_TEXT = 1] = "BUILT_IN_TEXT", c[c.BUILT_IN_INTEGRATION = 2] = "BUILT_IN_INTEGRATION", c[c.BOT = 3] = "BOT", c[c.PLACEHOLDER = 4] = "PLACEHOLDER", (d = a || (a = {}))[d.ROLE = 1] = "ROLE", d[d.USER = 2] = "USER", d[d.CHANNEL = 3] = "CHANNEL", (E = o || (o = {})).DISCOVERY = "discovery", E.SUGGESTION = "suggestion", E.MENTION = "mention", E.PASTE = "paste", E.RECALL = "recall", E.POPULAR_COMMANDS = "popular_commands", E.MJ_CHAT_BAR = "mj_chat_bar", E.QUERY = "query", (_ = l || (l = {}))[_.BUILT_IN = 1] = "BUILT_IN", _[_.FRECENCY = 2] = "FRECENCY", _[_.APP = 3] = "APP", (f = u || (u = {}))[f.CHAT = 0] = "CHAT", f[f.APPLICATION_LAUNCHER = 1] = "APPLICATION_LAUNCHER"
        },
        750947: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                ApplicationDirectoryProfileSections: function() {
                    return r
                }
            }), (i = r || (r = {})).GENERAL = "GENERAL", i.IMAGES = "IMAGES", i.PREMIUM = "PREMIUM", i.PRIVACY = "PRIVACY"
        },
        988268: function(e, t, n) {
            "use strict";
            var r, i, a, o;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return r
                },
                BotTagTypes: function() {
                    return i
                }
            }), (a = r || (r = {}))[a.GAME = 1] = "GAME", a[a.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", a[a.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (o = i || (i = {}))[o.BOT = 0] = "BOT", o[o.SERVER = 1] = "SERVER", o[o.SYSTEM_DM = 2] = "SYSTEM_DM", o[o.OFFICIAL = 3] = "OFFICIAL", o[o.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", o[o.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", o[o.AI = 6] = "AI", o[o.REMIX = 7] = "REMIX"
        },
        115279: function(e, t, n) {
            "use strict";
            var r, i, a, o, l, u, s, c, d, E, _;
            n.r(t), n.d(t, {
                EmojiCategoryTypes: function() {
                    return r
                },
                GRID_NAVIGATOR_ID: function() {
                    return f
                },
                EmojiCategories: function() {
                    return i
                },
                EmojiSubCategory: function() {
                    return a
                },
                INACTIVE_CATEGORY_INDEX: function() {
                    return I
                },
                EmojiSize: function() {
                    return l
                },
                EMOJI_PICKER_TAB_PANEL_ID: function() {
                    return p
                },
                EMOJI_PICKER_TAB_ID: function() {
                    return T
                },
                SOUNDBOARD_PICKER_TAB_PANEL_ID: function() {
                    return h
                },
                SOUNDBOARD_PICKER_TAB_ID: function() {
                    return S
                },
                REACTION_PICKER_TAB_PANEL_ID: function() {
                    return O
                },
                REACTION_PICKER_TAB_ID: function() {
                    return A
                },
                SUPER_REACTION_PICKER_TAB_ID: function() {
                    return N
                },
                SuperReactionBalanceLocations: function() {
                    return u
                },
                GIF_PICKER_TAB_PANEL_ID: function() {
                    return C
                },
                GIF_PICKER_TAB_ID: function() {
                    return g
                },
                EMOJI_SIZE_MAP: function() {
                    return R
                },
                EMOJI_ROW_SIZE: function() {
                    return v
                }
            }), (s = r || (r = {})).GUILD = "GUILD", s.PACK = "PACK", s.UNICODE = "UNICODE", s.RECENT = "RECENT", s.CUSTOM = "CUSTOM", s.SEARCH_RESULTS = "SEARCH_RESULTS", s.FAVORITES = "FAVORITES", s.TOP_GUILD_EMOJI = "TOP_GUILD_EMOJI", s.PREMIUM_UPSELL = "PREMIUM_UPSELL";
            let f = "emoji-picker-grid";
            (c = i || (i = {})).RECENT = "recent", c.FAVORITES = "favorites", c.TOP_GUILD_EMOJI = "top guild emoji", c.CUSTOM = "custom", c.PEOPLE = "people", c.NATURE = "nature", c.FOOD = "food", c.ACTIVITY = "activity", c.TRAVEL = "travel", c.OBJECTS = "objects", c.SYMBOLS = "symbols", c.FLAGS = "flags", c.PREMIUM_UPSELL = "premium emoji", (d = a || (a = {})).NONE = "", d.TOP_GUILD_EMOJI = "top_server", d.NEWLY_ADDED_EMOJI = "newly_added", (E = o || (o = {}))[E.EMOJI = 0] = "EMOJI", E[E.NSFW = 1] = "NSFW";
            let I = -1;
            (_ = l || (l = {}))[_.MEDIUM = 40] = "MEDIUM", _[_.LARGE = 48] = "LARGE";
            let p = "emoji-picker-tab-panel",
                T = "emoji-picker-tab",
                h = "soundboard-picker-tab-panel",
                S = "soundboard-picker-tab",
                O = "reaction-picker-tab-panel",
                A = "reaction-picker-tab",
                N = "super-reaction-picker-tab";
            (u || (u = {})).TOOLTIP = "tooltip";
            let C = "gif-picker-tab-panel",
                g = "gif-picker-tab",
                R = {
                    reaction: 32,
                    default: 44,
                    jumbo: 96
                },
                v = 9
        },
        677315: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildHomeExperiment: function() {
                    return d
                },
                canSeeGuildHome: function() {
                    return E
                },
                GuildFeedRenderSelectorExperiment: function() {
                    return _
                },
                GuildFeedRefreshButtonExperiment: function() {
                    return f
                },
                GuildHomeBadgeExperiment: function() {
                    return I
                },
                GuildHomeFeedbackExperiment: function() {
                    return p
                },
                GuildHomeDeprecationExperiment: function() {
                    return T
                }
            });
            var r = n("498225"),
                i = n("203288"),
                a = n("862205"),
                o = n("21121"),
                l = n("923959"),
                u = n("305961"),
                s = n("49111");

            function c(e, t, n) {
                let r = t.getChannels(e)[l.GUILD_SELECTABLE_CHANNELS_KEY].filter(t => {
                    let {
                        channel: r
                    } = t;
                    return !n.isChannelGated(e, r.id)
                });
                return r.length > 5
            }

            function d(e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                let t = (0, r.useStateFromStores)([l.default, i.default], () => null != e && c(e.id, l.default, i.default));
                return !__OVERLAY__ && !!t && null != e && e.hasFeature(s.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
            }

            function E(e) {
                if (__OVERLAY__ || e === s.ME || e === s.FAVORITES || (0, o.isInMainTabsExperiment)()) return !1;
                let t = u.default.getGuild(e);
                return !!(null != t && c(e, l.default, i.default)) && t.hasFeature(s.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
            }
            let _ = (0, a.createExperiment)({
                    kind: "user",
                    id: "2022-01_home_feed_toggle",
                    label: "Show Guild Feed Sorting Selector",
                    defaultConfig: {
                        showSelector: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes Selector",
                        config: {
                            showSelector: !0
                        }
                    }]
                }),
                f = (0, a.createExperiment)({
                    kind: "user",
                    id: "2022-06_home_refresh_button",
                    label: "Show refresh button",
                    defaultConfig: {
                        showRefreshButton: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Yes button",
                        config: {
                            showRefreshButton: !0
                        }
                    }]
                }),
                I = (0, a.createExperiment)({
                    kind: "user",
                    id: "2022-08_home_badge",
                    label: "Show badge on home channel",
                    defaultConfig: {
                        showBadge: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "show badge",
                        config: {
                            showBadge: !0
                        }
                    }]
                });
            (0, a.createExperiment)({
                kind: "user",
                id: "2022-08_home_drawer_autoclose",
                label: "Auto close home drawer",
                defaultConfig: {
                    autoCloseDrawer: !1,
                    animation: !1,
                    delay: null
                },
                treatments: [{
                    id: 1,
                    label: "normal animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: null
                    }
                }, {
                    id: 2,
                    label: "no animate",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !1,
                        delay: null
                    }
                }, {
                    id: 3,
                    label: "150 delayed animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: 150
                    }
                }, {
                    id: 4,
                    label: "250 delayed animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: 250
                    }
                }, {
                    id: 5,
                    label: "500 delayed animation",
                    config: {
                        autoCloseDrawer: !0,
                        animation: !0,
                        delay: 500
                    }
                }]
            }), (0, a.createExperiment)({
                kind: "user",
                id: "2022-09_welcome_header",
                label: "Show welcome header for home",
                defaultConfig: {
                    showWelcomeHeader: !1
                },
                treatments: [{
                    id: 1,
                    label: "show welcome header",
                    config: {
                        showWelcomeHeader: !0
                    }
                }]
            });
            let p = (0, a.createExperiment)({
                    kind: "user",
                    id: "2022-12_home_feedback_ux",
                    label: "Show post feedback for home",
                    defaultConfig: {
                        showFeedback: !1
                    },
                    treatments: [{
                        id: 100,
                        label: "show feedback",
                        config: {
                            showFeedback: !0
                        }
                    }]
                }),
                T = (0, a.createExperiment)({
                    kind: "guild",
                    id: "2023-03_home_deprecation",
                    label: "Home Deprecation",
                    defaultConfig: {
                        showDeprecationNotice: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show notice",
                        config: {
                            showDeprecationNotice: !0
                        }
                    }]
                })
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var r = n("990746"),
                i = n("913144"),
                a = n("479756"),
                o = n("38654"),
                l = n("9294"),
                u = n("26989"),
                s = n("337543"),
                c = n("697218"),
                d = n("49111");
            let E = async (e, t) => {
                let n = null != t ? t : s.default.getInviteKeyForGuildId(e),
                    a = c.default.getCurrentUser(),
                    o = !u.default.isMember(e, null == a ? void 0 : a.id);
                try {
                    let t = await r.default.get({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: o,
                            invite_code: null != n ? (0, l.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: a
                    } = t;
                    return i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: a.version,
                            description: a.description,
                            formFields: a.form_fields,
                            guild: a.guild
                        }
                    }), a
                } catch (t) {
                    i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, _ = async (e, t) => {
                let n = await r.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: a
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: a.version,
                        description: a.description,
                        formFields: a.form_fields
                    }
                })
            }, f = async (e, t) => {
                let n = await r.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: a
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: a.version,
                        description: a.description,
                        formFields: a.form_fields
                    }
                })
            }, I = async (e, t) => {
                await r.default.patch({
                    url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, p = async (e, t) => {
                if (o.default.isFullServerPreview(e)) {
                    (0, a.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await r.default.put({
                            url: d.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: a
                        } = n;
                    return i.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: a
                    }), a
                } catch (e) {
                    throw e
                }
            };
            var T = {
                fetchVerificationForm: E,
                updateVerificationForm: _,
                updateVerificationFormDescription: f,
                enableVerificationForm: I,
                submitVerificationForm: p
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return a
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return o
                },
                MAX_FORM_ELEMENTS: function() {
                    return l
                },
                MAX_NUM_RULES: function() {
                    return u
                },
                MAX_RULE_LENGTH: function() {
                    return s
                },
                MAX_QUESTION_LENGTH: function() {
                    return c
                },
                MAX_NUM_CHOICES: function() {
                    return d
                },
                MAX_CHOICE_LENGTH: function() {
                    return E
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return _
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return f
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return I
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return p
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return T
                }
            });
            var r, i = n("567054");
            i.VerificationFormFieldTypes.VERIFICATION;
            let a = new Set([i.VerificationFormFieldTypes.TERMS]),
                o = new Set([i.VerificationFormFieldTypes.MULTIPLE_CHOICE, i.VerificationFormFieldTypes.TEXT_INPUT, i.VerificationFormFieldTypes.PARAGRAPH]),
                l = 5,
                u = 16,
                s = 300,
                c = 300,
                d = 8,
                E = 150,
                _ = 150,
                f = 1e3,
                I = 300,
                p = "Membership Gating",
                T = "in-app-member-verification";
            (r || (r = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let r;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return i
                }
            }), r = n("453265").default;
            let i = r.openMemberVerificationModal;
            r.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return l
                },
                setHasUnsubmittedChanges: function() {
                    return u
                },
                setShowWarning: function() {
                    return s
                }
            });
            var r = n("710835"),
                i = n("659500"),
                a = n("49111");
            let o = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                l = (0, r.default)(e => o),
                u = e => {
                    l.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                s = e => {
                    l.setState({
                        shouldShowWarning: e
                    }), e && i.ComponentDispatch.dispatch(a.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var r = n("920040");
            n("773670");
            var i = n("551042"),
                a = n("599110"),
                o = n("50926"),
                l = n("347977"),
                u = n("394294"),
                s = n("49111");
            let c = () => {
                    a.default.track(s.AnalyticEvents.MODAL_DISMISSED, {
                        type: u.MEMBER_VERIFICATION_TYPE
                    })
                },
                d = e => {
                    a.default.track(s.AnalyticEvents.OPEN_MODAL, {
                        type: u.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var E = {
                openMemberVerificationModal(e, t) {
                    d(e);
                    let a = async t => {
                        await o.default.submitVerificationForm(e, t)
                    };
                    (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, r.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: a,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (l.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, l.setShowWarning)(!0);
                                        return
                                    }
                                    c()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: u.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            c(), l.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, l.setShowWarning)(!0) : (0, i.closeModal)(u.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && c(), (0, i.closeModal)(u.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        468560: function(e, t, n) {
            "use strict";

            function r(e, t) {
                var n;
                let r = null == t ? void 0 : null === (n = t.replace(/-/g, "_")) || void 0 === n ? void 0 : n.toUpperCase();
                if (null != r && r in e) return e[r]
            }
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            })
        },
        533613: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                HotspotLocations: function() {
                    return r
                }
            }), (i = r || (r = {})).REPORT_PROBLEM_POST_STREAM = "REPORT_PROBLEM_POST_STREAM", i.VIDEO_BACKGROUND_FEEDBACK = "VIDEO_BACKGROUND_FEEDBACK", i.VOICE_CALL_FEEDBACK = "VOICE_CALL_FEEDBACK", i.GUILD_ANALYTICS_GUILD_SETTINGS_MENU = "GUILD_ANALYTICS_GUILD_SETTINGS_MENU", i.NOW_PLAYING_CONSENT_CARD = "NOW_PLAYING_CONSENT_CARD", i.IOS_GUILD_NAV_EDUCATION = "IOS_GUILD_NAV_EDUCATION", i.VOICE_PANEL_INTRODUCTION = "VOICE_PANEL_INTRODUCTION", i.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL = "GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL", i.FAVORITE_EMOJI_TOOLTIP = "FAVORITE_EMOJI_TOOLTIP", i.POST_ACTIVITY_FEEDBACK = "POST_ACTIVITY_FEEDBACK", i.GUILD_DELETE_FEEDBACK = "GUILD_DELETE_FEEDBACK", i.GUILD_LEAVE_FEEDBACK = "GUILD_LEAVE_FEEDBACK", i.APPLICATION_COMMAND_TOOLTIP = "APPLICATION_COMMAND_TOOLTIP", i.GUILD_CAP_INLINE_UPSELL = "GUILD_CAP_INLINE_UPSELL", i.STAGE_CHANNEL_UPSELL = "STAGE_CHANNEL_UPSELL", i.HUB_WAITLIST_UPSELL = "HUB_WAITLIST_UPSELL", i.HUB_NEW = "HUB_NEW", i.HUB_SECOND_EMAIL_CONNECTION_UPSELL = "HUB_SECOND_EMAIL_CONNECTION_UPSELL", i.LIVE_STAGE_NOTIFICATION_BADGE = "LIVE_STAGE_NOTIFICATION_BADGE", i.GUILD_EVENT_UPSELL = "GUILD_EVENT_UPSELL", i.HUB_LINK_CHANNEL_NOTICE = "HUB_LINK_CHANNEL_NOTICE", i.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP = "PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP", i.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP = "ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP", i.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL = "ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL", i.MULTI_ACCOUNT_TOOLTIP = "MULTI_ACCOUNT_TOOLTIP", i.HUB_STUDY_ROOM_NOTICE = "HUB_STUDY_ROOM_NOTICE", i.CHANNEL_BANNER_MEMBER_LIST_NOTICE = "CHANNEL_BANNER_MEMBER_LIST_NOTICE", i.CHANGE_LANGUAGE_MODAL = "CHANGE_LANGUAGE_MODAL", i.ACTIVITY_BEB_TUTORIAL = "ACTIVITY_BEB_TUTORIAL", i.APP_DIRECTORY_SETTINGS_NEW_PILL = "APP_DIRECTORY_SETTINGS_NEW_PILL", i.INVITE_SPLASH_GUILD_HEADER_TOOLTIP = "INVITE_SPLASH_GUILD_HEADER_TOOLTIP", i.ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW", i.ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW", i.ANIMATED_VIDEO_BG_HACKER_DEN_NEW = "ANIMATED_VIDEO_BG_HACKER_DEN_NEW", i.ANIMATED_VIDEO_BG_WUMPICE_NEW = "ANIMATED_VIDEO_BG_WUMPICE_NEW", i.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW = "ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW", i.ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW = "ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW", i.SOUNDBOARD_WHEEL_EDUCATION_MODAL = "SOUNDBOARD_WHEEL_EDUCATION_MODAL", i.IN_APP_REPORTS_FEEDBACK = "IN_APP_REPORTS_FEEDBACK", i.CLIPS_CHANNEL_ATTACH_REMINDER = "CLIPS_CHANNEL_ATTACH_REMINDER"
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return h
                },
                updateImpersonating: function() {
                    return S
                },
                stopImpersonating: function() {
                    return O
                },
                updateImpersonatedChannels: function() {
                    return N
                },
                updateImpersonatedRoles: function() {
                    return C
                },
                updateImpersonatedData: function() {
                    return g
                }
            });
            var r = n("913144"),
                i = n("716241"),
                a = n("393414"),
                o = n("42203"),
                l = n("923959"),
                u = n("26989"),
                s = n("305961"),
                c = n("957255"),
                d = n("18494"),
                E = n("282109"),
                _ = n("599110"),
                f = n("38654"),
                I = n("507950"),
                p = n("49111"),
                T = n("724210");

            function h(e, t) {
                _.default.track(p.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === I.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), A(e)
            }

            function S(e, t) {
                let n = f.default.getData(e);
                null != n && n.type === t.type && (_.default.track(p.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === I.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), A(e))
            }

            function O(e) {
                r.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function A(e) {
                let t = d.default.getChannelId(e),
                    n = o.default.getChannel(t),
                    r = null != t && (0, T.isStaticChannelRoute)(t);
                if (!r && !c.default.can(p.Permissions.VIEW_CHANNEL, n)) {
                    let t = l.default.getDefaultChannel(e);
                    null != t && (0, a.transitionTo)(p.Routes.CHANNEL(e, t.id))
                }
            }

            function N(e, t, n) {
                let r = new Set(E.default.getOptedInChannels(e));
                t.forEach(e => r.add(e)), n.forEach(e => r.delete(e)), S(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    optInChannels: r
                })
            }

            function C(e, t) {
                let n = s.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...l.default.getSelectableChannelIds(e), ...l.default.getVocalChannelIds(e)],
                        r = Array.from(t);
                    l.default.addConditionalChangeListener(() => {
                        let t = u.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (r.some(e => !t.roles.includes(e))) return !0;
                        let i = [...l.default.getSelectableChannelIds(e), ...l.default.getVocalChannelIds(e)],
                            a = i.filter(e => !n.includes(e));
                        return a.length > 0 && N(e, a, []), !1
                    })
                }(e, t);
                let r = {};
                t.forEach(e => r[e] = n.roles[e]), S(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    roles: r
                })
            }

            function g(e, t) {
                S(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return o
                },
                generateInviteKeyFromExtraData: function() {
                    return l
                },
                parseExtraDataFromInviteKey: function() {
                    return u
                },
                parseInviteCodeFromInviteKey: function() {
                    return s
                }
            });
            var r = n("126617"),
                i = n("833858");
            let a = "event";

            function o(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = r.parse(t);
                        return (0, i.getFirstQueryStringValue)(e[a])
                    } catch (e) {
                        return
                    }
                }(t);
                return l({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function l(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(a, "=").concat(n)
            }

            function u(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let o = r.parse(n),
                    l = (0, i.getFirstQueryStringValue)(o[a]);
                return {
                    baseCode: t,
                    guildScheduledEventId: l
                }
            }

            function s(e) {
                let [t] = e.split("?");
                return t
            }
        },
        140596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FetchState: function() {
                    return i
                },
                default: function() {
                    return T
                }
            });
            var r, i, a = n("498225"),
                o = n("913144"),
                l = n("653047"),
                u = n("946028");
            (r = i || (i = {}))[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED", r[r.FETCH_FAILED = 3] = "FETCH_FAILED";
            let s = new Map,
                c = new Map,
                d = [],
                E = i.NOT_FETCHED,
                _ = [];
            class f extends a.default.Store {
                getIntegrations(e) {
                    var t;
                    return null !== (t = s.get(e)) && void 0 !== t ? t : _
                }
                getIntegration(e, t) {
                    var n;
                    return null === (n = s.get(e)) || void 0 === n ? void 0 : n.find(e => e.application.id === t)
                }
                getAllIntegrations() {
                    return s
                }
                getIntegrationsFetchState(e) {
                    var t;
                    return null !== (t = c.get(e)) && void 0 !== t ? t : i.NOT_FETCHED
                }
                getApplicationsShelfFetchState() {
                    return E
                }
                getApplicationsShelf() {
                    return d
                }
            }

            function I(e) {
                return e.sort((e, t) => e.application.name.localeCompare(t.application.name))
            }
            f.displayName = "PrivateChannelIntegrationStore";
            let p = new f(o.default, {
                LOGOUT() {
                    s.clear()
                },
                CONNECTION_OPEN() {
                    s.clear(), c.clear()
                },
                CHANNEL_SELECT(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null == t || c.get(t) !== i.FETCH_FAILED) return !1;
                    c.set(t, i.NOT_FETCHED)
                },
                APPLICATIONS_SHELF_FETCH_START() {
                    E = i.FETCHING
                },
                APPLICATIONS_SHELF_FETCH_SUCCESS(e) {
                    let {
                        applications: t
                    } = e;
                    d = t.map(l.default.createFromServer).sort((e, t) => e.name.localeCompare(t.name)), E = i.FETCHED
                },
                APPLICATIONS_SHELF_FETCH_FAIL() {
                    E = i.FETCH_FAILED
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START(e) {
                    let {
                        channelId: t
                    } = e;
                    s.set(t, null), c.set(t, i.FETCHING)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS(e) {
                    let {
                        channelId: t,
                        integrations: n
                    } = e;
                    s.set(t, I(n.map(u.createPrivateChannelIntegration))), c.set(t, i.FETCHED)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL(e) {
                    let {
                        channelId: t
                    } = e;
                    c.set(t, i.FETCH_FAILED)
                },
                PRIVATE_CHANNEL_INTEGRATION_CREATE(e) {
                    let {
                        integration: t
                    } = e, n = s.get(t.channel_id);
                    if (null == n) return !1;
                    s.set(t.channel_id, I([...n, (0, u.createPrivateChannelIntegration)(t)]))
                },
                PRIVATE_CHANNEL_INTEGRATION_UPDATE(e) {
                    let {
                        integration: t
                    } = e, n = s.get(t.channel_id);
                    if (null == n) return !1;
                    let r = (0, u.createPrivateChannelIntegration)(t),
                        i = n.findIndex(e => e.application.id === r.application.id),
                        a = [...n]; - 1 === i ? a.push(r) : a[i] = r, s.set(r.channel_id, I(a))
                },
                PRIVATE_CHANNEL_INTEGRATION_DELETE(e) {
                    let {
                        channelId: t,
                        applicationId: n
                    } = e, r = s.get(t);
                    if (null == r) return !1;
                    s.set(t, r.filter(e => e.application.id !== n))
                },
                CHANNEL_DELETE(e) {
                    let {
                        channel: t
                    } = e;
                    return s.delete(t.id)
                }
            });
            var T = p
        },
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return o
                },
                getDevicePushProvider: function() {
                    return l
                }
            });
            var r, i, a = n("773336");
            let o = null;

            function l() {
                return (0, a.isAndroid)(), null
            }(r = i || (i = {})).REMINDER = "reminder", r.TOP_MESSAGE_PUSH = "top_messages_push", r.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        846325: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                MAX_LENGTH_SOUND_NAME: function() {
                    return a
                },
                MAX_SOUND_LENGTH_SECONDS: function() {
                    return o
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return l
                },
                SoundboardWheelSize: function() {
                    return u
                },
                DEFAULT_KEYBIND: function() {
                    return s
                },
                EMPTY_SOUND_LIST: function() {
                    return c
                },
                CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: function() {
                    return d
                }
            });
            let a = 32,
                o = 5,
                l = "DEFAULT";
            (i = r || (r = {}))[i.SUCCESS = 0] = "SUCCESS", i[i.INTERRUPTED = 1] = "INTERRUPTED", r.SUCCESS, r.INTERRUPTED;
            let u = {
                    width: 424,
                    height: 424,
                    padding: 100
                },
                s = "ctrl+`",
                c = [],
                d = "0"
        },
        235004: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var r, i, a = n("427964"),
                o = n.n(a),
                l = n("498225"),
                u = n("913144"),
                s = n("845579"),
                c = n("374363"),
                d = n("697218"),
                E = n("599110"),
                _ = n("829536"),
                f = n("846325"),
                I = n("49111"),
                p = n("397336");
            (r = i || (i = {}))[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED";
            let T = new Map,
                h = new Map,
                S = new Set,
                O = i.NOT_FETCHED,
                A = i.NOT_FETCHED,
                N = new Set,
                C = new Map,
                g = !1;

            function R(e) {
                let {
                    sound: t
                } = e, n = T.get(t.guildId), r = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != r && -1 !== r ? (n[r] = t, T.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), T.set(t.guildId, [...n]))
            }
            let v = o.debounce(e => {
                E.default.track(I.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, _.amplitudeToPerceptual)(e))
                }), s.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function L(e) {
                var t, n;
                let r = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(r)) t.soundboardMuted ? S.add(e) : S.delete(e);
                for (let e of S.keys()) null == r[e] && S.delete(e)
            }
            class D extends l.default.Store {
                initialize() {
                    this.waitFor(c.default), L(c.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(T),
                        favoritedSoundIds: Array.from(N),
                        localSoundboardMutes: Array.from(S)
                    }
                }
                getSounds() {
                    return T
                }
                getSoundsForGuild(e) {
                    return T.get(e)
                }
                getDefaultSounds() {
                    return this.getSoundsForGuild(f.DEFAULT_SOUND_GUILD_ID)
                }
                getSound(e, t) {
                    var n;
                    let r = null !== (n = T.get(e)) && void 0 !== n ? n : [];
                    return r.find(e => e.soundId === t)
                }
                getSoundById(e) {
                    let t = Array.from(T.values()).flat();
                    return t.find(t => t.soundId === e)
                }
                isFetchingSounds() {
                    return A === i.FETCHING
                }
                isFetchingDefaultSounds() {
                    return O === i.FETCHING
                }
                shouldFetchDefaultSounds() {
                    return O === i.NOT_FETCHED
                }
                hasFetchedDefaultSounds() {
                    return O === i.FETCHED
                }
                isUserPlayingSounds(e) {
                    let t = C.get(e);
                    return null != t && t > 0
                }
                isPlayingSound(e) {
                    return null != h.get(e)
                }
                isFavoriteSound(e) {
                    return N.has(e)
                }
                getFavorites() {
                    return N
                }
                isLocalSoundboardMuted(e) {
                    return S.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return g
                }
                hasFetchedAllSounds() {
                    return A === i.FETCHED && O === i.FETCHED
                }
            }
            D.displayName = "SoundboardStore";
            var m = new D(u.default, {
                LOGOUT: function() {
                    T.clear(), h.clear(), C.clear(), g = !1, A = i.NOT_FETCHED, O = i.NOT_FETCHED
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    A = i.FETCHING
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: R,
                GUILD_SOUNDBOARD_SOUND_UPDATE: R,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
                    let {
                        soundId: t,
                        guildId: n
                    } = e;
                    T.delete(t);
                    let r = T.get(n),
                        i = null == r ? void 0 : r.findIndex(e => e.soundId === t);
                    null != r && null != i && !(i < 0) && (r.splice(i, 1), T.set(n, [...r]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, r;
                    let {
                        soundId: i,
                        userId: a
                    } = e, o = (null !== (n = h.get(i)) && void 0 !== n ? n : 0) + 1, l = (null !== (r = C.get(a)) && void 0 !== r ? r : 0) + 1;
                    h.set(i, o), C.set(a, l), a !== (null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (g = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: r,
                        userId: i
                    } = e, a = (null !== (t = h.get(r)) && void 0 !== t ? t : 0) - 1, o = (null !== (n = C.get(i)) && void 0 !== n ? n : 0) - 1;
                    a <= 0 ? h.delete(r) : h.set(r, a), o <= 0 ? C.delete(i) : C.set(i, o)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    v(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    h.clear(), C.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e, {
                        type: n,
                        proto: r
                    } = t;
                    if (n === p.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var i, a;
                        N = new Set(null !== (a = null == r ? void 0 : null === (i = r.favoriteSoundboardSounds) || void 0 === i ? void 0 : i.soundIds) && void 0 !== a ? a : [])
                    } else n === p.UserSettingsTypes.PRELOADED_USER_SETTINGS && L(r)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    O = i.FETCHING
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    let {
                        soundboardSounds: t
                    } = e;
                    T.set(f.DEFAULT_SOUND_GUILD_ID, t), O = i.FETCHED
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
                        T.set(t, n)
                    }), A = i.FETCHED
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    T.delete(t.id)
                },
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
                    let {
                        userId: t
                    } = e;
                    S.has(t) ? S.delete(t) : S.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        soundboardStoreState: t
                    } = e;
                    T = new Map(Object.entries(t.soundboardSounds)), N = new Set(t.favoritedSoundIds), S = new Set(t.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        soundboardSounds: n
                    } = e;
                    T.set(t, n)
                }
            })
        },
        364685: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            });
            var r, i, a = n("379279"),
                o = n("498225"),
                l = n("913144"),
                u = n("802493"),
                s = n("595525"),
                c = n("212084"),
                d = n("867805"),
                E = n("267567"),
                _ = n("813006"),
                f = n("778689"),
                I = n("305961"),
                p = n("161585"),
                T = n("24373"),
                h = n("49111");
            (r = i || (i = {}))[r.Unloaded = 0] = "Unloaded", r[r.MaybeLoaded = 1] = "MaybeLoaded", r[r.Loaded = 2] = "Loaded";
            let S = 2,
                O = new Map,
                A = new Map,
                N = null,
                C = [],
                g = null,
                R = !1,
                v = new Map,
                L = (e, t) => {
                    v = new Map(v.set(e, t))
                },
                D = 1e3 * h.Durations.HOUR,
                m = () => {
                    if (0 !== S) return;
                    let e = u.default.database();
                    if (null == e) return;
                    S = 2;
                    let t = (0, s.tryLoadOrResetCacheGateway)("StickerStore.loadSavedGuildStickers", () => a.default.time("\uD83D\uDCBE", "loadSavedGuildStickers", () => c.default.getSync(e)));
                    if (null != t) {
                        for (let [e, n] of t)
                            if (f.default.isMember(e) && !v.has(e)) {
                                for (let t of n) M(t, !0, I.default.getGuild(e));
                                L(e, n)
                            }
                    }
                },
                M = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    A.set(e.id, e), t && U(e, n)
                },
                U = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == N) return;
                    let {
                        tags: n
                    } = e, r = {
                        type: p.StickerMetadataTypes.STICKER_NAME,
                        value: e.name.trim().toLocaleLowerCase()
                    };
                    if ((0, T.isStandardSticker)(e)) {
                        let t = C.find(t => t.id === e.pack_id),
                            i = [r, ...(null != n ? n : "").split(",").map(e => ({
                                type: p.StickerMetadataTypes.TAG,
                                value: e.trim().toLocaleLowerCase()
                            }))];
                        null != t && i.push({
                            type: p.StickerMetadataTypes.PACK_NAME,
                            value: t.name
                        }), N.set(e.id, i)
                    } else if ((0, T.isGuildSticker)(e) && null != n) {
                        let i = d.default.getByName(n),
                            a = {
                                type: p.StickerMetadataTypes.TAG,
                                value: n.trim().toLocaleLowerCase()
                            },
                            o = [r, a];
                        if (null != t) {
                            let e = (t instanceof(0, _.default) ? t.name : t.properties.name).trim().toLocaleLowerCase();
                            null != e && "" !== e && o.push({
                                type: p.StickerMetadataTypes.GUILD_NAME,
                                value: e
                            })
                        }
                        if (null == i) {
                            N.set(e.id, o);
                            return
                        }
                        o.push({
                            type: p.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: i.surrogates
                        }), i.forEachDiversity(e => o.push({
                            type: p.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: e.surrogates
                        })), N.set(e.id, o)
                    }
                },
                P = (e, t, n) => {
                    O.set(e.id, e);
                    let r = [...C];
                    if (t) {
                        let t = r.findIndex(t => t.id === e.id); - 1 !== t ? r[t] = e : r.push(e), C = r
                    }(t || n) && e.stickers.forEach(e => M(e))
                },
                y = () => {
                    v.forEach((e, t) => {
                        let n = I.default.getGuild(t);
                        null != n && e.forEach(e => U(e, n))
                    }), C.forEach(e => {
                        e.stickers.forEach(e => U(e))
                    })
                };

            function b(e) {
                null != e.stickers && (e.stickers.forEach(t => M(t, !0, e)), L(e.id, e.stickers))
            }
            class G extends o.default.Store {
                initialize() {
                    this.waitFor(u.default, f.default, I.default)
                }
                get isLoaded() {
                    return 0 !== S
                }
                get stickerMetadata() {
                    return m(), null == N && (N = new Map, y()), N
                }
                get hasLoadedStickerPacks() {
                    return null != g && g + D > Date.now()
                }
                get isFetchingStickerPacks() {
                    return R
                }
                getStickerById(e) {
                    return !A.has(e) && m(), A.get(e)
                }
                getStickerPack(e) {
                    return O.get(e)
                }
                getPremiumPacks() {
                    return C
                }
                isPremiumPack(e) {
                    return C.some(t => t.id === e)
                }
                getRawStickersByGuild() {
                    return v
                }
                getAllStickersIterator() {
                    return m(), A.values()
                }
                getAllGuildStickers() {
                    return m(), v
                }
                getStickersByGuildId(e) {
                    return m(), v.get(e)
                }
            }
            G.displayName = "StickersStore";
            var w = new G(l.default, {
                BACKGROUND_SYNC: () => {
                    N = null, A = new Map, v = new Map, S = 0
                },
                CONNECTION_OPEN: e => {
                    let {
                        guilds: t
                    } = e;
                    N = null, A = new Map, v = new Map, t.forEach(b), S = t.every(e => null != e.stickers) ? 1 : 0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    !E.default.isLurking(t.id) && (b(t), 1 === S && null == t.stickers && null != t.stickerUpdates && (S = 0))
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e, r = null !== (t = v.get(n.id)) && void 0 !== t ? t : [];
                    r.forEach(e => {
                        null != N && N.delete(e.id), A.delete(e.id)
                    }), v.delete(n.id), v = new Map(v)
                },
                LOGOUT: () => {
                    S = 0, C = [], A.clear(), O.clear(), N = null, v.clear(), v = new Map(v), R = !1, g = null
                },
                STICKER_PACKS_FETCH_START: () => {
                    R = !0
                },
                STICKER_PACKS_FETCH_SUCCESS: e => {
                    let {
                        packs: t
                    } = e;
                    t.forEach(e => P(e, !0)), g = Date.now(), R = !1
                },
                STICKER_PACK_FETCH_SUCCESS: e => {
                    let {
                        pack: t,
                        ingestStickers: n
                    } = e;
                    P(t, !1, n)
                },
                GUILD_STICKERS_FETCH_SUCCESS: e => {
                    let {
                        guildId: t,
                        stickers: n
                    } = e;
                    n.forEach(e => M(e)), L(t, n)
                },
                GUILD_STICKERS_CREATE_SUCCESS: e => {
                    var t, n;
                    let {
                        guildId: r,
                        sticker: i
                    } = e, a = null !== (t = v.get(r)) && void 0 !== t ? t : [];
                    L(r, [...null !== (n = a.filter(e => e.id !== i.id)) && void 0 !== n ? n : [], i]), M(i)
                },
                STICKER_FETCH_SUCCESS: e => {
                    let {
                        sticker: t
                    } = e;
                    M(t, !1)
                },
                GUILD_STICKERS_UPDATE: e => {
                    var t;
                    let {
                        guildId: n,
                        stickers: r
                    } = e, i = e => {
                        let t;
                        let n = A.get(e.id);
                        return null != n && (0, T.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
                            ...e,
                            user: t
                        }
                    }, a = null !== (t = v.get(n)) && void 0 !== t ? t : [], o = a.filter(e => null == r.find(t => t.id === e.id));
                    o.forEach(e => {
                        A.delete(e.id), null != N && N.delete(e.id)
                    });
                    let l = r.map(e => i(e));
                    l.forEach(e => M(e)), L(n, l)
                }
            })
        },
        211895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("913144"),
                i = n("54239"),
                a = n("49111");

            function o() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        openWithoutBackstack: !1
                    };
                r.default.dispatch({
                    type: "USER_SETTINGS_MODAL_OPEN",
                    section: e,
                    subsection: t,
                    ...n
                }), (0, i.pushLayer)(a.Layers.USER_SETTINGS)
            }
        },
        777523: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("287377"),
                i = n("49111");
            let a = /-/g;

            function o(e) {
                let [, , t, n] = e.split("/"), o = null == t ? void 0 : t.toUpperCase().replace(a, "_"), l = null == n ? void 0 : n.toUpperCase().replace(a, "_");
                if (i.UserSettingsSections.hasOwnProperty(o) && (null == l || "" === l || i.UserSettingsSections.hasOwnProperty(l))) {
                    let {
                        source: e
                    } = (0, r.parse)(location.search);
                    return {
                        source: e,
                        section: i.UserSettingsSections[o],
                        subsection: l
                    }
                }
                return null
            }
        },
        917219: function(e, t, n) {
            "use strict";
            var r, i, a, o;
            n.r(t), n.d(t, {
                VideoFilterType: function() {
                    return r
                },
                DefaultVideoBackground: function() {
                    return i
                },
                ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: function() {
                    return l
                },
                DEFAULT_VIDEO_BACKGROUND_SORT: function() {
                    return u
                },
                BLUR_BACKGROUND_OPTION: function() {
                    return s
                },
                BACKGROUND_REPLACEMENT_SIZE: function() {
                    return c
                },
                MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                    return d
                }
            }), (a = r || (r = {}))[a.BACKGROUND = 0] = "BACKGROUND", (o = i || (i = {}))[o.OPTION_1 = 0] = "OPTION_1", o[o.OPTION_2 = 1] = "OPTION_2", o[o.OPTION_3 = 2] = "OPTION_3", o[o.OPTION_4 = 3] = "OPTION_4", o[o.OPTION_7 = 7] = "OPTION_7", o[o.OPTION_8 = 8] = "OPTION_8", o[o.OPTION_9 = 9] = "OPTION_9", o[o.OPTION_10 = 10] = "OPTION_10";
            let l = [i.OPTION_7, i.OPTION_8, i.OPTION_9, i.OPTION_10],
                u = [i.OPTION_7, i.OPTION_8, i.OPTION_9, i.OPTION_10, i.OPTION_1, i.OPTION_2, i.OPTION_3, i.OPTION_4].reduce((e, t, n) => ({
                    ...e,
                    [t]: n
                }), {}),
                s = "blur",
                c = {
                    width: 1280,
                    height: 720
                },
                d = 10485760
        },
        746304: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                AudioSettingsDefaultVolumes: function() {
                    return r
                }
            }), (i = r || (r = {}))[i.USER = 100] = "USER", i[i.STREAM = 18] = "STREAM"
        },
        450205: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("666038");
            class i extends r.default {
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
                    return a
                }
            });
            var r = n("666038");
            class i extends r.default {
                static createFromServer(e, t) {
                    return new i({
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
            var a = i
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("377849"),
                i = n.n(r),
                a = n("666038");
            class o extends a.default {
                static createFromServer(e) {
                    var t;
                    return new o({
                        ...e,
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: i(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = i(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = i(this.createdAt);
                        return e.add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.code = e.code || "", this.temporary = e.temporary || !1, this.revoked = e.revoked || !1, this.uses = e.uses || 0, this.maxUses = e.maxUses || 0, this.maxAge = e.maxAge || 0, this.createdAt = e.createdAt || new Date, this.channel = e.channel, this.guild = e.guild, this.inviter = e.inviter || null, this.targetType = e.targetType || null, this.targetUser = e.targetUser || null, this.targetApplication = e.targetApplication || null, this.type = e.type || null, this.flags = e.flags || 0
                }
            }
        },
        47319: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var r = n("498225"),
                i = n("913144"),
                a = n("619340"),
                o = n("376556"),
                l = n("450205"),
                u = n("813006"),
                s = n("49111");
            let c = new Set([s.PlatformTypes.CONTACTS]),
                d = !0,
                E = [],
                _ = [],
                f = {},
                I = {},
                p = e => {
                    E = e.filter(e => !c.has(e.type) && o.default.isSupported(e.type)), _ = e.filter(e => c.has(e.type)), d = !1
                };
            class T extends r.default.Store {
                isJoining(e) {
                    return f[e] || !1
                }
                isFetching() {
                    return d
                }
                getAccounts() {
                    return E
                }
                getLocalAccounts() {
                    return _
                }
                getAccount(e, t) {
                    return E.find(n => (null == e || n.id === e) && n.type === t)
                }
                getLocalAccount(e) {
                    return _.find(t => t.type === e)
                }
                isSuggestedAccountType(e) {
                    return I[e] || !1
                }
            }
            T.displayName = "ConnectedAccountsStore";
            var h = new T(i.default, {
                CONNECTION_OPEN: function(e) {
                    let t = e.connectedAccounts.map(e => new l.default(e));
                    p(t)
                },
                USER_CONNECTIONS_UPDATE: function(e) {
                    if (e.local && null != e.accounts) {
                        let t = e.accounts.map(e => new l.default({
                            ...e,
                            integrations: e.integrations.map(e => ({
                                ...e,
                                guild: new u.default(e.guild)
                            }))
                        }));
                        p(t)
                    } else a.default.fetch()
                },
                USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
                    f[e.integrationId] = e.joining
                },
                USER_CONNECTION_UPDATE: function(e) {
                    let {
                        platformType: t,
                        id: n,
                        revoked: r,
                        accessToken: i
                    } = e, a = E.find(e => e.id === n && e.type === t);
                    if (null == a) return !1;
                    null != r && (a.revoked = r), null != i && (a.accessToken = i)
                }
            })
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var r = n("498225"),
                i = n("913144"),
                a = n("9294"),
                o = n("49111");
            let l = {},
                u = {},
                s = {};

            function c(e, t) {
                var n;
                e = null != e ? e : "";
                let r = (0, a.parseExtraDataFromInviteKey)(e),
                    i = l[e],
                    u = null != i ? {
                        state: o.InviteStates.RESOLVING,
                        ...i
                    } : {
                        state: o.InviteStates.RESOLVING,
                        code: r.baseCode
                    };
                t(u), l = {
                    ...l,
                    [e]: u
                }, (null === (n = u.guild) || void 0 === n ? void 0 : n.id) != null && (s = {
                    ...s,
                    [u.guild.id]: e
                })
            }

            function d(e) {
                return c(e.code, t => {
                    t.state = "banned" in e && e.banned ? o.InviteStates.BANNED : o.InviteStates.EXPIRED
                })
            }
            class E extends r.default.Store {
                getInvite(e) {
                    return l[e]
                }
                getInviteError(e) {
                    return u[e]
                }
                getInvites() {
                    return l
                }
                getInviteKeyForGuildId(e) {
                    return s[e]
                }
            }
            E.displayName = "InviteStore";
            var _ = new E(i.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, a.parseExtraDataFromInviteKey)(t);
                    l = {
                        ...l,
                        [t]: {
                            code: n.baseCode,
                            state: o.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return c(e.code, t => {
                        var n, r;
                        t.state = o.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: d,
                INSTANT_INVITE_REVOKE_SUCCESS: d,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        t.state = o.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => c(e.code, e => {
                        e.state = o.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        var n, r;
                        t.state = o.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return c(e.code, e => {
                        e.state = o.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return c(e.code, t => {
                        t.state = o.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return u[e.code] = e.error, c(e.code, e => {
                        e.state = o.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return c(e.code, e => {
                        e.state = o.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = o.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = o.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        778588: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("498225"),
                i = n("913144");
            let a = [];

            function o() {
                a = []
            }
            class l extends r.default.Store {
                hasLayers() {
                    return a.length > 0
                }
                getLayers() {
                    return a
                }
            }
            l.displayName = "LayerStore";
            var u = new l(i.default, {
                LAYER_PUSH: function(e) {
                    let {
                        component: t
                    } = e;
                    if (a.indexOf(t) >= 0) return !1;
                    a = [...a, t]
                },
                LAYER_POP: function() {
                    if (0 === a.length) return !1;
                    a = a.slice(0, -1)
                },
                LAYER_POP_ALL: o,
                LOGOUT: o,
                NOTIFICATION_CLICK: o
            })
        },
        26092: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var r = n("427964"),
                i = n.n(r),
                a = n("498225"),
                o = n("913144"),
                l = n("697218"),
                u = n("49111");
            let s = u.FormStates.CLOSED,
                c = null,
                d = null,
                E = {},
                _ = {},
                f = {},
                I = null,
                p = null,
                T = !1,
                h = !1,
                S = null,
                O = null,
                A = null,
                N = [],
                C = null,
                g = null;

            function R(e) {
                var t, n, r, i, a, o;
                let c = l.default.getCurrentUser();
                if (null == c) return v();
                d = null !== (t = e.section) && void 0 !== t ? t : d, C = null !== (n = e.section) && void 0 !== n ? n : d, null != e.subsection && null != d && (E[d] = e.subsection), null != e.scrollPosition && null != d && (_[d] = e.scrollPosition), h = !!e.openWithoutBackstack, s = u.FormStates.OPEN, f = {}, p = {
                    ...I = {
                        [u.UserSettingsSections.ACCOUNT]: {
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
                }, O = null !== (r = e.onClose) && void 0 !== r ? r : null, A = null !== (i = e.analyticsLocation) && void 0 !== i ? i : null, N = null !== (a = e.analyticsLocations) && void 0 !== a ? a : [], g = null !== (o = e.impressionSource) && void 0 !== o ? o : null
            }

            function v() {
                s = u.FormStates.CLOSED, T = !1, I = null, C = null, p = null, c = null, d = null, E = {}, _ = {}, O = null, A = null, N = [], g = null
            }

            function L() {
                s = u.FormStates.OPEN, f = {}
            }
            class D extends a.default.Store {
                initialize() {
                    this.waitFor(l.default)
                }
                hasChanges() {
                    return null != p && null != I && (!!this.isOpen() || S === u.DrawerTabTypes.USER_SETTINGS) && !i.isEqual(p, I)
                }
                isOpen() {
                    return T
                }
                getPreviousSection() {
                    return c
                }
                getSection() {
                    return d
                }
                getSubsection() {
                    return null != d ? E[d] : null
                }
                getScrollPosition() {
                    return null != d ? _[d] : null
                }
                shouldOpenWithoutBackstack() {
                    return h
                }
                getProps() {
                    return {
                        submitting: s === u.FormStates.SUBMITTING,
                        section: d,
                        subsection: null != d ? E[d] : null,
                        scrollPosition: null != d ? _[d] : null,
                        settings: p,
                        errors: f,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: h,
                        analyticsLocation: A,
                        analyticsLocations: N,
                        initialSection: C,
                        impressionSource: g
                    }
                }
                get onClose() {
                    return O
                }
            }
            D.displayName = "UserSettingsModalStore";
            var m = new D(o.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    T = !0, R(e)
                },
                USER_SETTINGS_MODAL_INIT: R,
                USER_SETTINGS_MODAL_CLOSE: v,
                LOGOUT: v,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    s = u.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (s !== u.FormStates.SUBMITTING) return !1;
                    s = u.FormStates.OPEN, d = u.UserSettingsSections.ACCOUNT, f = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    var t;
                    c = d, d = e.section, A = null, N = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (E[d] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete E[t] : null != d && delete E[d]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete _[t] : null != d && delete _[d]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    let {
                        settings: t
                    } = e;
                    null == p && (p = {});
                    let n = p[u.UserSettingsSections.ACCOUNT];
                    p[u.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...t
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: L,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = l.default.getCurrentUser();
                    L(), null != e && (p = {
                        ...I = {
                            [u.UserSettingsSections.ACCOUNT]: {
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
                    return S = e.tab, null == d && S === u.DrawerTabTypes.USER_SETTINGS && R({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        471671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var r = n("161179"),
                i = n.n(r),
                a = n("498225"),
                o = n("913144"),
                l = n("816454");
            let u = new Map;

            function s(e) {
                let t = u.get(e);
                return null == t ? (console.warn("Window state not initialized", e), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : t
            }
            class c extends a.default.Store {
                isFocused() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, l.getMainWindowId)();
                    return s(e).focused
                }
                getFocusedWindowId() {
                    let e = null;
                    return u.forEach((t, n) => {
                        t.focused && (e = n)
                    }), e
                }
                isElementFullScreen() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, l.getMainWindowId)();
                    return s(e).isElementFullscreen
                }
                windowSize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, l.getMainWindowId)();
                    return s(e).windowSize
                }
            }
            c.displayName = "WindowStore";
            let d = new c(o.default, {
                WINDOW_INIT: function(e) {
                    i(!u.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: r,
                        focused: a
                    } = e;
                    return u.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: r,
                        focused: a
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(e) {
                    let t = s(e.windowId);
                    return t.isElementFullscreen !== e.isElementFullscreen && (u.set(e.windowId, {
                        ...t,
                        isElementFullscreen: e.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(e) {
                    let t = s(e.windowId);
                    return t.focused !== e.focused && (u.set(e.windowId, {
                        ...t,
                        focused: e.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(e) {
                    let t = s(e.windowId);
                    return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (u.set(e.windowId, {
                        ...t,
                        windowSize: {
                            width: e.width,
                            height: e.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(e) {
                    return u.delete(e.windowId), !0
                }
            });
            n.el("599110").then(n.bind(n, "599110")).then(e => {
                let {
                    addExtraAnalyticsDecorator: t
                } = e;
                t(e => {
                    e.client_app_state = d.isFocused() ? "focused" : "unfocused"
                })
            });
            var E = d
        },
        79798: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var r = n("920040");
            n("773670");
            var i = n("575482"),
                a = n.n(i),
                o = n("414055"),
                l = n("486952"),
                u = n("988268"),
                s = n("782340"),
                c = n("181163");
            let d = e => {
                let t, {
                        invertColor: n = !1,
                        type: i = u.BotTagTypes.BOT,
                        className: d,
                        verified: E,
                        hideIcon: _ = !1,
                        useRemSizes: f = !1,
                        children: I = []
                    } = e,
                    p = null,
                    T = s.default.Messages.VERIFIED_BOT_TOOLTIP;
                switch (i) {
                    case u.BotTagTypes.SYSTEM_DM:
                    case u.BotTagTypes.OFFICIAL:
                        E = !0, T = s.default.Messages.DISCORD_SYSTEM_MESSAGE_BOT_TAG_TOOLTIP, p = s.default.Messages.SYSTEM_DM_TAG_SYSTEM;
                        break;
                    case u.BotTagTypes.SERVER:
                        p = s.default.Messages.BOT_TAG_SERVER;
                        break;
                    case u.BotTagTypes.ORIGINAL_POSTER:
                        p = s.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER;
                        break;
                    case u.BotTagTypes.STAFF_ONLY_DM:
                        p = s.default.Messages.STAFF_BADGE_TOOLTIP;
                        break;
                    case u.BotTagTypes.AI:
                        E = !0, T = s.default.Messages.AI_GENERATED_TOOLTIP, p = s.default.Messages.AI_TAG;
                        break;
                    case u.BotTagTypes.REMIX:
                        E = !1, p = s.default.Messages.REMIXING_TAG;
                        break;
                    case u.BotTagTypes.BOT:
                    default:
                        p = s.default.Messages.BOT_TAG_BOT
                }
                let h = i === u.BotTagTypes.ORIGINAL_POSTER,
                    S = i === u.BotTagTypes.REMIX,
                    O = null;
                E && (O = (0, r.jsx)(o.Tooltip, {
                    text: T,
                    align: "center",
                    position: "top",
                    children: e => (0, r.jsx)(l.default, {
                        ...e,
                        className: c.botTagVerified
                    })
                })), t = i === u.BotTagTypes.AI ? c.botTagAI : n ? c.botTagInvert : c.botTagRegular;
                let A = e => (0, r.jsxs)("span", {
                    ...e,
                    className: a(d, t, f ? c.rem : c.px, {
                        [c.botTagOP]: h,
                        [c.botTagRemix]: S
                    }),
                    children: [_ ? null : O, I, (0, r.jsx)("span", {
                        className: c.botText,
                        children: p
                    })]
                });
                switch (i) {
                    case u.BotTagTypes.REMIX:
                        return (0, r.jsx)(o.Tooltip, {
                            text: s.default.Messages.REMIXING_DOWNLOAD_APP,
                            position: "top",
                            children: e => A(e)
                        });
                    case u.BotTagTypes.ORIGINAL_POSTER:
                        return (0, r.jsx)(o.Tooltip, {
                            text: s.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER_TOOLTIP,
                            position: "top",
                            children: e => A(e)
                        });
                    default:
                        return A()
                }
            };
            d.Types = u.BotTagTypes;
            var E = d
        },
        83900: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("920040");
            n("773670");
            var i = n("469563"),
                a = n("753809"),
                o = n("75196"),
                l = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, o.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, r.jsx)("path", {
                                className: a,
                                fill: i,
                                d: "M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z"
                            }), (0, r.jsx)("rect", {
                                width: "24",
                                height: "24"
                            })]
                        })
                    })
                }, a.LinkIcon)
        },
        45029: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("920040");
            n("773670");
            var i = n("469563"),
                a = n("434657"),
                o = n("75196"),
                l = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        className: a,
                        foreground: l,
                        ...u
                    } = e;
                    return (0, r.jsx)("svg", {
                        width: t,
                        height: n,
                        className: a,
                        viewBox: "0 0 24 24",
                        ...(0, o.default)(u),
                        children: (0, r.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z",
                            "aria-hidden": !0
                        })
                    })
                }, a.LockIcon)
        },
        486952: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("920040");
            n("773670");
            var i = n("469563"),
                a = n("276825"),
                o = n("75196"),
                l = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        ...a
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, o.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, r.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: i
                        })
                    })
                }, a.CheckmarkSmallIcon)
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
                    return d
                },
                getCoverRatio: function() {
                    return E
                },
                makeCssUrlString: function() {
                    return _
                },
                getPalette: function() {
                    return I
                },
                getPaletteForAvatar: function() {
                    return p
                },
                readFileAsBase64: function() {
                    return h
                },
                dataUriFileSize: function() {
                    return S
                },
                dataUrlToFile: function() {
                    return O
                },
                isPNGAnimated: function() {
                    return A
                }
            });
            var r = n("161179"),
                i = n.n(r),
                a = n("427964"),
                o = n.n(a),
                l = n("873101"),
                u = n.n(l);

            function s(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: r,
                    maxHeight: i,
                    minWidth: a = 0,
                    minHeight: o = 0
                } = e;
                if (t !== r || n !== i) {
                    let e = t > r ? r / t : 1;
                    t = Math.max(Math.round(t * e), a), n = Math.max(Math.round(n * e), o);
                    let l = n > i ? i / n : 1;
                    t = Math.max(Math.round(t * l), a), n = Math.max(Math.round(n * l), o)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function c(e, t) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    r = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return s({
                    width: e,
                    height: t,
                    maxWidth: r,
                    maxHeight: n
                })
            }

            function d(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: r,
                    maxHeight: i
                } = e, a = 1;
                t > r && (a = r / t), t = Math.round(t * a);
                let o = 1;
                return (n = Math.round(n * a)) > i && (o = i / n), Math.min(a * o, 1)
            }

            function E(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: r,
                    maxHeight: i
                } = e;
                return t === n ? 1 : Math.min(Math.max(r / t, i / n), 1)
            }

            function _(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            let f = [
                [0, 0, 0]
            ];

            function I(e, t, n) {
                let r = document.createElement("canvas"),
                    i = r.getContext("2d");
                if (null == i) return f;
                let a = r.width = 0 === e.width ? 128 : e.width,
                    o = r.height = 0 === e.height ? 128 : e.height;
                i.drawImage(e, 0, 0, a, o);
                let l = i.getImageData(0, 0, a, o).data,
                    s = function(e, t, n) {
                        let r = [];
                        for (let i = 0, a, o, l, u, s; i < t; i += n) o = e[(a = 4 * i) + 0], l = e[a + 1], u = e[a + 2], (void 0 === (s = e[a + 3]) || s >= 125) && !(o > 250 && l > 250 && u > 250) && r.push([o, l, u]);
                        return r
                    }(l, a * o, n),
                    c = u(s, t);
                return "boolean" == typeof c ? f : c.palette()
            }
            let p = e => T(e),
                T = o.memoize(e => new Promise((t, n) => {
                    let r = new Image;
                    r.crossOrigin = "Anonymous", r.onerror = e => {
                        n(e), r.onerror = r.onload = null, r = null
                    }, r.onload = () => {
                        t(I(r, 5, 10)), r.onerror = r.onload = null, r = null
                    }, r.src = e
                }));

            function h(e) {
                return new Promise((t, n) => {
                    let r = new FileReader;
                    r.readAsDataURL(e), r.onload = () => {
                        i("string" == typeof r.result, "Result must be a string"), t(r.result)
                    }, r.onerror = e => n(e)
                })
            }

            function S(e) {
                let t = e.split(";base64,");
                return i(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
            }
            async function O(e, t, n) {
                let r = function(e) {
                        let t;
                        t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                        let n = e.split(",")[0].split(":")[1].split(";")[0],
                            r = new Uint8Array(t.length);
                        for (var i = 0; i < t.length; i++) r[i] = t.charCodeAt(i);
                        return new Blob([r], {
                            type: n
                        })
                    }(e),
                    i = await r.arrayBuffer();
                return new File([i], t, {
                    type: n
                })
            }
            async function A(e) {
                var t;
                let n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let r = await e.text(),
                    i = r.indexOf("IDAT");
                return !!(i > 0) && -1 !== r.substring(0, i).indexOf("acTL") || !1
            }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return a
                }
            });
            var r = n("427964"),
                i = n.n(r);
            let a = e => "function" == typeof e ? e() : e;
            i.curry((e, t, n) => a(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let r, i;
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("697218"),
                o = n("615931");
            let l = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                r = e.showModal, l = e.updateModalProps, i = n("551042").closeModal
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: a,
                    modalProps: o = {},
                    hooks: {
                        onEarlyClose: u
                    } = {}
                } = e;
                if (null == r) {
                    null == u || u();
                    return
                }
                let c = r(f, d, o);

                function d() {
                    null == u || u()
                }

                function E(e) {
                    i(c), n(e)
                }

                function _(e) {
                    i(c), a(e)
                }

                function f(e) {
                    return l(c, f, d, {
                        ...o,
                        isLoading: !0
                    }), s({
                        promiseFn: t,
                        resolve: E,
                        reject: _,
                        code: e,
                        mfaCodeHandler: I,
                        isModalOpen: !0
                    })
                }

                function I(e) {
                    let {
                        res: t
                    } = e;
                    l(c, f, d, {
                        ...o,
                        error: t.body.message
                    })
                }
            }

            function s(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: r,
                    code: i,
                    mfaCodeHandler: a = u,
                    isModalOpen: o = !1,
                    ...l
                } = e;
                return t(null != i ? {
                    code: i
                } : {}).then(n, e => {
                    var i, u;
                    if (i = e, u = o, i.body && 60008 === i.body.code || u && 429 === i.status) return a({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e,
                        ...l
                    });
                    r(e)
                })
            }

            function c(e, t) {
                var n, r;
                let {
                    checkEnabled: i = null !== (r = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== r && r,
                    ...l
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, o.resolveThunk)(i) ? u : s)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...l
                    })
                })
            }
        },
        829536: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                perceptualToAmplitude: function() {
                    return r
                },
                amplitudeToPerceptual: function() {
                    return i
                }
            });

            function r(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                return 0 === e ? 0 : (t = e > n ? (e - n) / n * 6 : e / n * 50 - 50, n * Math.pow(10, t / 20))
            }

            function i(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                if (0 === e) return 0;
                let r = 20 * Math.log10(e / n);
                return n * (t = r > 0 ? r / 6 + 1 : (50 + r) / 50)
            }
        },
        833858: function(e, t, n) {
            "use strict";

            function r(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return r
                }
            })
        },
        655518: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r = {
                escape: e => e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }
        },
        840707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("990746"),
                i = n("599110");

            function a(e, t, n) {
                let {
                    trackedActionData: r,
                    ...a
                } = t, o = {
                    url: a.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(a).then(e => {
                        let n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e)), (0, i.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            ...o,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, a;
                        let l = r.properties;
                        "function" == typeof r.properties && (l = r.properties(e)), (0, i.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (a = e.body) || void 0 === a ? void 0 : a.message,
                            ...o,
                            ...l
                        }), n(e)
                    })
                })
            }
            var o = {
                get: function(e) {
                    return a(r.default.get, e, "get")
                },
                post: function(e) {
                    return a(r.default.post, e, "post")
                },
                put: function(e) {
                    return a(r.default.put, e, "put")
                },
                patch: function(e) {
                    return a(r.default.patch, e, "patch")
                },
                delete: function(e) {
                    return a(r.default.delete, e, "del")
                }
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return l
                },
                updateModalProps: function() {
                    return u
                }
            });
            var r = n("920040");
            n("773670");
            var i = n("551042"),
                a = n("920636");
            let o = (e, t, n) => function(i) {
                return (0, r.jsx)(a.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...i
                })
            };

            function l(e, t, n) {
                return (0, i.openModal)(o(e, t, n), {
                    onCloseCallback: t
                })
            }

            function u(e, t, n, r) {
                return (0, i.updateModal)(e, o(t, n, r))
            }
        }
    }
]);