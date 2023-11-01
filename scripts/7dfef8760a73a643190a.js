(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["76770"], {
        78349: function(e, t, n) {
            "use strict";
            e.exports.parse = function(e) {
                var t = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
                if (!t) return null;
                t.shift();
                var n = null,
                    r = [];
                t[2] && (n = (u = t[2].split("-")).shift(), r = u);
                var i = [];
                t[5] && (i = t[5].split("-")).shift();
                var o = [];
                if (t[6]) {
                    (u = t[6].split("-")).shift();
                    for (var u, a, l = []; u.length;) {
                        var s = u.shift();
                        1 === s.length ? a ? (o.push({
                            singleton: a,
                            extension: l
                        }), a = s, l = []) : a = s : l.push(s)
                    }
                    o.push({
                        singleton: a,
                        extension: l
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
                        extension: o,
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
        526504: function(e, t, n) {
            "use strict";
            var r = "%[a-f0-9]{2}",
                i = RegExp("(" + r + ")|([^%]+?)", "gi"),
                o = RegExp("(" + r + ")+", "gi");
            e.exports = function(e) {
                if ("string" != typeof e) throw TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
                try {
                    return e = e.replace(/\+/g, " "), decodeURIComponent(e)
                } catch (t) {
                    return function(e) {
                        for (var t = {
                                "%FE%FF": "��",
                                "%FF%FE": "��"
                            }, n = o.exec(e); n;) {
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
                            n = o.exec(e)
                        }
                        t["%C2"] = "�";
                        for (var u = Object.keys(t), a = 0; a < u.length; a++) {
                            var l = u[a];
                            e = e.replace(RegExp(l, "g"), t[l])
                        }
                        return e
                    }(e)
                }
            }
        },
        458389: function(e, t, n) {
            var r = n("594140"),
                i = n("564414"),
                o = n("725502"),
                u = n("591350"),
                a = n("476540"),
                l = n("381178"),
                s = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var n = o(e),
                    c = !n && i(e),
                    d = !n && !c && u(e),
                    E = !n && !c && !d && l(e),
                    _ = n || c || d || E,
                    f = _ ? r(e.length, String) : [],
                    I = f.length;
                for (var p in e)(t || s.call(e, p)) && !(_ && ("length" == p || d && ("offset" == p || "parent" == p) || E && ("buffer" == p || "byteLength" == p || "byteOffset" == p) || a(p, I))) && f.push(p);
                return f
            }
        },
        562132: function(e, t, n) {
            var r = n("33426"),
                i = n("136047"),
                o = n("270879"),
                u = {};
            u["[object Float32Array]"] = u["[object Float64Array]"] = u["[object Int8Array]"] = u["[object Int16Array]"] = u["[object Int32Array]"] = u["[object Uint8Array]"] = u["[object Uint8ClampedArray]"] = u["[object Uint16Array]"] = u["[object Uint32Array]"] = !0, u["[object Arguments]"] = u["[object Array]"] = u["[object ArrayBuffer]"] = u["[object Boolean]"] = u["[object DataView]"] = u["[object Date]"] = u["[object Error]"] = u["[object Function]"] = u["[object Map]"] = u["[object Number]"] = u["[object Object]"] = u["[object RegExp]"] = u["[object Set]"] = u["[object String]"] = u["[object WeakMap]"] = !1;
            e.exports = function(e) {
                return o(e) && i(e.length) && !!u[r(e)]
            }
        },
        205873: function(e, t, n) {
            var r = n("733228"),
                i = n("541349"),
                o = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!r(e)) return i(e);
                var t = [];
                for (var n in Object(e)) o.call(e, n) && "constructor" != n && t.push(n);
                return t
            }
        },
        594140: function(e, t, n) {
            e.exports = function(e, t) {
                for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                return r
            }
        },
        492692: function(e, t, n) {
            e.exports = function(e) {
                return function(t) {
                    return e(t)
                }
            }
        },
        733228: function(e, t, n) {
            var r = Object.prototype;
            e.exports = function(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || r)
            }
        },
        541349: function(e, t, n) {
            var r = n("761197")(Object.keys, Object);
            e.exports = r
        },
        276440: function(e, t, n) {
            e = n.nmd(e);
            var r = n("447414"),
                i = "object" == typeof t && t && !t.nodeType && t,
                o = i && "object" == typeof e && e && !e.nodeType && e,
                u = o && o.exports === i && r.process,
                a = function() {
                    try {
                        var e = o && o.require && o.require("util").types;
                        if (e) return e;
                        return u && u.binding && u.binding("util")
                    } catch (e) {}
                }();
            e.exports = a
        },
        761197: function(e, t, n) {
            e.exports = function(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }
        },
        591350: function(e, t, n) {
            e = n.nmd(e);
            var r = n("690516"),
                i = n("221386"),
                o = "object" == typeof t && t && !t.nodeType && t,
                u = o && "object" == typeof e && e && !e.nodeType && e,
                a = u && u.exports === o ? r.Buffer : void 0,
                l = a ? a.isBuffer : void 0;
            e.exports = l || i
        },
        381178: function(e, t, n) {
            var r = n("562132"),
                i = n("492692"),
                o = n("276440"),
                u = o && o.isTypedArray,
                a = u ? i(u) : r;
            e.exports = a
        },
        466731: function(e, t, n) {
            var r = n("458389"),
                i = n("205873"),
                o = n("603108");
            e.exports = function(e) {
                return o(e) ? r(e) : i(e)
            }
        },
        221386: function(e, t, n) {
            e.exports = function() {
                return !1
            }
        },
        766811: function(e, t, n) {
            "use strict";
            var r = Object.getOwnPropertySymbols,
                i = Object.prototype.hasOwnProperty,
                o = Object.prototype.propertyIsEnumerable;
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
                for (var n, u, a = function(e) {
                        if (null == e) throw TypeError("Object.assign cannot be called with null or undefined");
                        return Object(e)
                    }(e), l = 1; l < arguments.length; l++) {
                    for (var s in n = Object(arguments[l]), n) i.call(n, s) && (a[s] = n[s]);
                    if (r) {
                        u = r(n);
                        for (var c = 0; c < u.length; c++) o.call(n, u[c]) && (a[u[c]] = n[u[c]])
                    }
                }
                return a
            } : Object.assign
        },
        48648: function(e, t, n) {
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

                function i(e, t, n, r, i, o, u) {
                    this.r1 = e, this.r2 = t, this.g1 = n, this.g2 = r, this.b1 = i, this.b2 = o, this.histo = u
                }

                function o() {
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
                            var r, i, o, u = 0;
                            for (r = this.r1; r <= this.r2; r++)
                                for (i = this.g1; i <= this.g2; i++)
                                    for (o = this.b1; o <= this.b2; o++) u += n[t(r, i, o)] || 0;
                            this._count = u, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new i(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(e) {
                        var n = this.histo;
                        if (!this._avg || e) {
                            var r, i, o, u, a = 0,
                                l = 8,
                                s = 0,
                                c = 0,
                                d = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (o = this.g1; o <= this.g2; o++)
                                    for (u = this.b1; u <= this.b2; u++) a += r = n[t(i, o, u)] || 0, s += r * (i + .5) * l, c += r * (o + .5) * l, d += r * (u + .5) * l;
                            a ? this._avg = [~~(s / a), ~~(c / a), ~~(d / a)] : this._avg = [~~(l * (this.r1 + this.r2 + 1) / 2), ~~(l * (this.g1 + this.g2 + 1) / 2), ~~(l * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(t) {
                        var n = t[0] >> e;
                        return gval = t[1] >> e, bval = t[2] >> e, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, o.prototype = {
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
                        for (var t, n, r, i = this.vboxes, o = 0; o < i.size(); o++)((n = Math.sqrt(Math.pow(e[0] - i.peek(o).color[0], 2) + Math.pow(e[1] - i.peek(o).color[1], 2) + Math.pow(e[2] - i.peek(o).color[2], 2))) < t || void 0 === t) && (t = n, r = i.peek(o).color);
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
                    quantize: function(u, a) {
                        if (!u.length || a < 2 || a > 256) return !1;
                        var l, s, c, d, E, _, f, I, p, T, A, S, O, h, N, C, g = (l = u, E = Array(32768), l.forEach(function(n) {
                                c = n[0] >> e, d = n[1] >> e, E[s = t(c, d, n[2] >> e)] = (E[s] || 0) + 1
                            }), E),
                            R = 0;
                        g.forEach(function() {
                            R++
                        });
                        var D = (_ = u, f = g, A = 1e6, S = 0, O = 1e6, h = 0, N = 1e6, C = 0, _.forEach(function(t) {
                                I = t[0] >> e, p = t[1] >> e, T = t[2] >> e, I < A ? A = I : I > S && (S = I), p < O ? O = p : p > h && (h = p), T < N ? N = T : T > C && (C = T)
                            }), new i(A, S, O, h, N, C, f)),
                            L = new n(function(e, t) {
                                return r.naturalOrder(e.count(), t.count())
                            });

                        function v(e, n) {
                            for (var i, o = 1, u = 0; u < 1e3;) {
                                if (!(i = e.pop()).count()) {
                                    e.push(i), u++;
                                    continue
                                }
                                var a = function(e, n) {
                                        if (n.count()) {
                                            var i = n.r2 - n.r1 + 1,
                                                o = n.g2 - n.g1 + 1,
                                                u = n.b2 - n.b1 + 1,
                                                a = r.max([i, o, u]);
                                            if (1 == n.count()) return [n.copy()];
                                            var l, s, c, d, E, _ = 0,
                                                f = [],
                                                I = [];
                                            if (a == i)
                                                for (l = n.r1; l <= n.r2; l++) {
                                                    for (d = 0, s = n.g1; s <= n.g2; s++)
                                                        for (c = n.b1; c <= n.b2; c++) d += e[E = t(l, s, c)] || 0;
                                                    _ += d, f[l] = _
                                                } else if (a == o)
                                                    for (l = n.g1; l <= n.g2; l++) {
                                                        for (d = 0, s = n.r1; s <= n.r2; s++)
                                                            for (c = n.b1; c <= n.b2; c++) d += e[E = t(s, l, c)] || 0;
                                                        _ += d, f[l] = _
                                                    } else
                                                        for (l = n.b1; l <= n.b2; l++) {
                                                            for (d = 0, s = n.r1; s <= n.r2; s++)
                                                                for (c = n.g1; c <= n.g2; c++) d += e[E = t(s, c, l)] || 0;
                                                            _ += d, f[l] = _
                                                        }
                                            return f.forEach(function(e, t) {
                                                I[t] = _ - e
                                            }), p(a == i ? "r" : a == o ? "g" : "b")
                                        }

                                        function p(e) {
                                            var t, r, i, o, u, a = e + "1",
                                                s = e + "2",
                                                c = 0;
                                            for (l = n[a]; l <= n[s]; l++)
                                                if (f[l] > _ / 2) {
                                                    for (i = n.copy(), o = n.copy(), t = l - n[a], u = t <= (r = n[s] - l) ? Math.min(n[s] - 1, ~~(l + r / 2)) : Math.max(n[a], ~~(l - 1 - t / 2)); !f[u];) u++;
                                                    for (c = I[u]; !c && f[u - 1];) c = I[--u];
                                                    return i[s] = u, o[a] = i[s] + 1, [i, o]
                                                }
                                        }
                                    }(g, i),
                                    l = a[0],
                                    s = a[1];
                                if (!l) return;
                                if (e.push(l), s && (e.push(s), o++), o >= n || u++ > 1e3) return
                            }
                        }
                        L.push(D), v(L, .75 * a);
                        for (var m = new n(function(e, t) {
                                return r.naturalOrder(e.count() * e.volume(), t.count() * t.volume())
                            }); L.size();) m.push(L.pop());
                        v(m, a - m.size());
                        for (var P = new o; m.size();) P.push(m.pop());
                        return P
                    }
                }
            }();
            e.exports = i.quantize
        },
        730290: function(e, t, n) {
            "use strict";
            var r = n("272074"),
                i = n("766811"),
                o = n("526504");

            function u(e, t) {
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
                        u = t.length > 0 ? t.join("=") : void 0;
                    u = void 0 === u ? null : o(u), n(o(i), u, r)
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
                                return null === n ? [u(t, e), "[", r, "]"].join("") : [u(t, e), "[", u(r, e), "]=", u(n, e)].join("")
                            };
                        case "bracket":
                            return function(t, n) {
                                return null === n ? u(t, e) : [u(t, e), "[]=", u(n, e)].join("")
                            };
                        default:
                            return function(t, n) {
                                return null === n ? u(t, e) : [u(t, e), "=", u(n, e)].join("")
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
                    if (null === i) return u(r, t);
                    if (Array.isArray(i)) {
                        var o = [];
                        return i.slice().forEach(function(e) {
                            void 0 !== e && o.push(n(r, e, o.length))
                        }), o.join("&")
                    }
                    return u(r, t) + "=" + u(i, t)
                }).filter(function(e) {
                    return e.length > 0
                }).join("&") : ""
            }
        },
        48174: function(e, t, n) {
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
        775560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return r.default
                },
                useStableMemo: function() {
                    return i.default
                },
                useLazyValue: function() {
                    return o.default
                }
            });
            var r = n("14716"),
                i = n("745510"),
                o = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("884691");

            function i() {
                let [, e] = (0, r.useState)({});
                return (0, r.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("884691");
            let i = {};

            function o(e) {
                let t = (0, r.useRef)(i);
                return t.current === i && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("884691"),
                i = n("48174");
            let o = [];

            function u(e, t) {
                let n = (0, r.useRef)(),
                    u = (0, r.useRef)(o);
                return u.current === o ? (n.current = e(), u.current = t) : !(0, i.default)(t, u.current) && (n.current = e(), u.current = t), n.current
            }
        },
        272074: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
                    return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                })
            }
        },
        376507: function(e, t, n) {
            "use strict";

            function r(e) {
                let t = "==".slice(0, (4 - e.length % 4) % 4),
                    n = e.replace(/-/g, "+").replace(/_/g, "/") + t,
                    r = atob(n),
                    i = new ArrayBuffer(r.length),
                    o = new Uint8Array(i);
                for (let e = 0; e < r.length; e++) o[e] = r.charCodeAt(e);
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
                    return A
                },
                get: function() {
                    return S
                }
            });
            var o = "copy",
                u = "convert";

            function a(e, t, n) {
                if (t === o) return n;
                if (t === u) return e(n);
                if (t instanceof Array) return n.map(n => a(e, t[0], n));
                if (t instanceof Object) {
                    let r = {};
                    for (let [i, o] of Object.entries(t)) {
                        if (o.derive) {
                            let e = o.derive(n);
                            void 0 !== e && (n[i] = e)
                        }
                        if (!(i in n)) {
                            if (o.required) throw Error("Missing key: ".concat(i));
                            continue
                        }
                        if (null == n[i]) {
                            r[i] = null;
                            continue
                        }
                        r[i] = a(e, o.schema, n[i])
                    }
                    return r
                }
            }

            function l(e, t) {
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
                    type: s(o),
                    id: s(u),
                    transports: c(o)
                },
                E = {
                    appid: c(o),
                    appidExclude: c(o),
                    credProps: c(o)
                },
                _ = {
                    appid: c(o),
                    appidExclude: c(o),
                    credProps: c(o)
                },
                f = {
                    publicKey: s({
                        rp: s(o),
                        user: s({
                            id: s(u),
                            name: s(o),
                            displayName: s(o)
                        }),
                        challenge: s(u),
                        pubKeyCredParams: s(o),
                        timeout: c(o),
                        excludeCredentials: c([d]),
                        authenticatorSelection: c(o),
                        attestation: c(o),
                        extensions: c(E)
                    }),
                    signal: c(o)
                },
                I = {
                    type: s(o),
                    id: s(o),
                    rawId: s(u),
                    authenticatorAttachment: c(o),
                    response: s({
                        clientDataJSON: s(u),
                        attestationObject: s(u),
                        transports: l(o, e => {
                            var t;
                            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
                        })
                    }),
                    clientExtensionResults: l(_, e => e.getClientExtensionResults())
                },
                p = {
                    mediation: c(o),
                    publicKey: s({
                        challenge: s(u),
                        timeout: c(o),
                        rpId: c(o),
                        allowCredentials: c([d]),
                        userVerification: c(o),
                        extensions: c(E)
                    }),
                    signal: c(o)
                },
                T = {
                    type: s(o),
                    id: s(o),
                    rawId: s(u),
                    authenticatorAttachment: c(o),
                    response: s({
                        clientDataJSON: s(u),
                        authenticatorData: s(u),
                        signature: s(u),
                        userHandle: s(u)
                    }),
                    clientExtensionResults: l(_, e => e.getClientExtensionResults())
                };
            async function A(e) {
                let t = await navigator.credentials.create(a(r, f, e));
                return a(i, I, t)
            }
            async function S(e) {
                let t = await navigator.credentials.get(a(r, p, e));
                return a(i, T, t)
            }
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return i
                },
                popLayer: function() {
                    return o
                },
                popAllLayers: function() {
                    return u
                }
            });
            var r = n("913144");

            function i(e) {
                r.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function o() {
                r.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function u() {
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
            var r = n("872717"),
                i = n("913144"),
                o = n("333805"),
                u = n("160299"),
                a = n("745279"),
                l = n("850068"),
                s = n("49111"),
                c = n("646718");
            async function d(e, t, n, c, d) {
                i.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH",
                    skuId: e
                });
                try {
                    let o = {
                            url: s.Endpoints.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                            oldFormErrors: !0
                        },
                        a = {};
                    null != t && (a.country_code = t), null != n && (a.payment_source_id = n), null != c && (a.include_unpublished = c), null != d && (a.revenue_surface = d), o.query = a, !u.default.ipCountryCodeLoaded && await (0, l.fetchIpCountryCode)();
                    let E = await r.default.get(o);
                    i.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                        skuId: e,
                        subscriptionPlans: E.body
                    })
                } catch (t) {
                    throw i.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                        skuId: e
                    }), (0, a.captureBillingException)(t), new o.default(t)
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
            var r = n("872717"),
                i = n("95410"),
                o = n("913144"),
                u = n("211895"),
                a = n("26092"),
                l = n("599110"),
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
                        (0, u.default)(e, t, n)
                    },
                    init: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        o.default.dispatch({
                            type: "USER_SETTINGS_MODAL_INIT",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    close() {
                        let e = a.default.onClose;
                        o.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), null != e && e()
                    },
                    setSection(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        o.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SET_SECTION",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    clearSubsection(e) {
                        o.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                            forSection: e
                        })
                    },
                    clearScrollPosition(e) {
                        o.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                            forSection: e
                        })
                    },
                    updateAccount(e) {
                        o.default.dispatch({
                            type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                            settings: e
                        })
                    },
                    submitComplete() {
                        o.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                        })
                    },
                    reset() {
                        o.default.dispatch({
                            type: "USER_SETTINGS_MODAL_RESET"
                        })
                    },
                    saveAccountChanges(e, t) {
                        o.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT"
                        });
                        let {
                            username: n,
                            email: u,
                            emailToken: a,
                            password: f,
                            avatar: I,
                            newPassword: p,
                            discriminator: T
                        } = e, {
                            close: A
                        } = t;
                        return (0, c.default)(e => {
                            let t = {
                                    username: n,
                                    email: u,
                                    email_token: a,
                                    password: f,
                                    avatar: I,
                                    new_password: p,
                                    ...e,
                                    discriminator: null != T && "" !== T ? T : void 0
                                },
                                o = i.default.get(d.DEVICE_TOKEN),
                                l = (0, E.getDevicePushProvider)();
                            null != l && null != o && (t.push_provider = l, t.push_token = o);
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
                                onEarlyClose: () => o.default.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }).then(e => {
                            let t = e.body,
                                n = t.token;
                            return l.default.track(d.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, s.isAnimatedIconHash)(t.avatar)
                            }), delete t.token, o.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: t.id
                            }), o.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: t
                            }), null != p && o.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: t,
                                newPassword: p
                            }), null != f && null != p && o.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: t.id
                            }), A ? this.close() : this.submitComplete(), e
                        }, e => (o.default.dispatch({
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
            var r = n("37983"),
                i = n("884691"),
                o = n("414456"),
                u = n.n(o),
                a = n("77078"),
                l = n("782340"),
                s = n("347129");
            class c extends i.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: o,
                        error: c,
                        isLoading: d,
                        maxLength: E,
                        transitionState: _,
                        helpMessage: f,
                        retryPrompt: I,
                        retrySuccessMessage: p
                    } = this.props, {
                        code: T,
                        errorMessage: A,
                        retrySuccess: S
                    } = this.state, O = i.Children.count(o) > 0 ? (0, r.jsx)(a.Card, {
                        type: a.Card.Types.WARNING,
                        className: s.card,
                        children: (0, r.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: o
                        })
                    }) : null, h = null != I ? (0, r.jsxs)(a.Text, {
                        className: u(s.submitText, s.spacing),
                        variant: "text-sm/normal",
                        children: [(0, r.jsx)("br", {}), (0, r.jsx)(a.Clickable, {
                            className: u(s.spacing, s.link),
                            onClick: this.handleRetry,
                            children: (0, r.jsx)(a.Anchor, {
                                children: I
                            })
                        })]
                    }) : null, N = S ? (0, r.jsx)(a.Card, {
                        type: a.Card.Types.SUCCESS,
                        className: s.card,
                        children: (0, r.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: p
                        })
                    }) : null;
                    return (0, r.jsx)(a.ModalRoot, {
                        transitionState: _,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(a.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, r.jsxs)(a.ModalContent, {
                                children: [null != f ? (0, r.jsx)(a.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: s.spacing,
                                    children: f
                                }) : null, O, N, (0, r.jsxs)(a.FormItem, {
                                    title: this.getLabelText(),
                                    className: s.spacing,
                                    children: [(0, r.jsx)(a.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != E ? E : 10,
                                        value: T,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(a.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: s.error,
                                        children: null != c ? c : A
                                    }) : null, h]
                                })]
                            }), (0, r.jsxs)(a.ModalFooter, {
                                children: [(0, r.jsx)(a.Button, {
                                    type: "submit",
                                    disabled: d || 0 === T.length,
                                    children: null != n ? n : l.default.Messages.CONFIRM
                                }), (0, r.jsx)(a.Button, {
                                    onClick: this.handleCancel,
                                    disabled: d,
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.PRIMARY,
                                    children: l.default.Messages.CANCEL
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
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? l.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : l.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? l.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : l.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
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
        599417: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("872717"),
                i = n("49111"),
                o = n("782340");
            class u extends r.default.V8APIError {
                constructor(e, t) {
                    super(e, t, null != t ? o.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: i.Links.STATUS,
                        details: "".concat(t)
                    }) : o.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: i.Links.STATUS
                    }))
                }
            }
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("872717"),
                i = n("49111"),
                o = n("782340");
            class u extends r.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? o.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: i.Links.STATUS,
                        details: "".concat(t)
                    }) : o.default.Messages.FORM_ERROR_GENERIC.format({
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
            var r = n("746379"),
                i = n("394846"),
                o = n("913144"),
                u = n("970728"),
                a = n("79112"),
                l = n("389153"),
                s = n("412707"),
                c = n("139514"),
                d = n("312016"),
                E = n("374021"),
                _ = n("398604"),
                f = n("468560"),
                I = n("361572"),
                p = n("537325"),
                T = n("835174"),
                A = n("566271"),
                S = n("337543"),
                O = n("18494"),
                h = n("162771"),
                N = n("677099"),
                C = n("599110"),
                g = n("253981");
            n("545158");
            var R = n("49111");
            async function D(e, t) {
                await o.default.dispatch({
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
                    } = await u.default.resolveInvite(e.code, "Markdown Link");
                    r = t
                }
                if (null == r) return;
                if (r.state === R.InviteStates.EXPIRED || r.state === R.InviteStates.BANNED || r.state === R.InviteStates.ERROR) {
                    await D(r, e.code);
                    return
                }
                let i = N.default.getFlattenedGuildIds(),
                    o = null === (n = r) || void 0 === n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id,
                    a = null != o && i.includes(o);
                a ? u.default.transitionToInviteSync(r) : await D(r, e.code)
            }
            let v = {
                skipExtensionCheck: void 0,
                analyticsLocations: []
            };

            function m(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v,
                    o = (0, d.findCodedLink)(e),
                    {
                        skipExtensionCheck: u
                    } = t;
                if (null != o && (o.type === c.CodedLinkType.INVITE || o.type === c.CodedLinkType.EMBEDDED_ACTIVITY_INVITE)) return e => (null == e || e.preventDefault(), L(o), !0);
                if (null != o && o.type === c.CodedLinkType.APP_DIRECTORY_PROFILE) return e => {
                    var t;
                    null == e || e.preventDefault();
                    let {
                        code: r
                    } = o, u = null !== (t = h.default.getGuildId()) && void 0 !== t ? t : void 0;
                    return C.default.track(R.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                        application_id: r,
                        device_platform: i.isMobile ? "mobile_web" : "desktop_web",
                        guild_id: u,
                        channel_id: O.default.getChannelId()
                    }), n.el("838093").then(n.bind(n, "838093")).then(e => {
                        let {
                            goToAppDirectory: t
                        } = e, {
                            ApplicationDirectoryViews: i
                        } = n("412707");
                        t({
                            view: i.APPLICATION,
                            applicationId: r,
                            guildId: u,
                            entrypoint: {
                                name: s.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL
                            }
                        })
                    }), !0
                };
                if (null != o && o.type === c.CodedLinkType.GUILD_PRODUCT) return e => {
                    null == e || e.preventDefault();
                    let [t, r] = o.code.split("-");
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
                    host: D,
                    query: m
                } = r.parse(e), P = g.default.isDiscordHostname(N) || window.location.host === D;
                if (P && (null == S ? void 0 : S.startsWith("/application-directory"))) {
                    let [, , e, t] = S.split("/"), r = null != e && (0, l.isSnowflake)(e) ? e : void 0;
                    return o => {
                        var u;
                        null == o || o.preventDefault();
                        let {
                            ApplicationDirectoryProfileSections: a
                        } = n("750947"), {
                            ApplicationDirectoryViews: l
                        } = n("412707"), c = null !== (u = h.default.getGuildId()) && void 0 !== u ? u : void 0, d = l.HOME;
                        return "search" === e && (d = l.SEARCH), null != r && (d = l.APPLICATION, C.default.track(R.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                            application_id: r,
                            device_platform: i.isMobile ? "mobile_web" : "desktop_web",
                            guild_id: c,
                            channel_id: O.default.getChannelId()
                        })), n.el("838093").then(n.bind(n, "838093")).then(e => {
                            let {
                                goToAppDirectory: n
                            } = e;
                            n({
                                view: d,
                                applicationId: r,
                                guildId: c,
                                applicationSection: (0, f.default)(a, t),
                                entrypoint: {
                                    name: s.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL
                                }
                            })
                        }), !0
                    }
                }
                if (null != S && P && g.default.isAppRoute(S)) {
                    let e = null != m ? {
                        search: m
                    } : null;
                    return t => (null == t || t.preventDefault(), (0, p.default)(S, e), !0)
                }
                if (null != S && P) {
                    let {
                        getOAuth2AuthorizeProps: t,
                        openOAuth2Modal: r
                    } = n("33942"), i = t(e);
                    if (null != i) return e => (null == e || e.preventDefault(), r(i), !0)
                }
                let U = (0, I.tryParseEventDetailsPath)(S);
                if (null != S && P && null != U) return e => {
                    null == e || e.preventDefault();
                    let t = h.default.getGuildId();
                    null != U.guildId && "" !== U.guildId && U.guildId !== t && (0, p.default)(R.Routes.CHANNEL(U.guildId));
                    let n = _.default.getGuildScheduledEvent(U.guildEventId);
                    return null != n && (0, E.openGuildEventDetails)({
                        eventId: n.id
                    }), !0
                };
                if (P && (null == S ? void 0 : S.startsWith("/settings/"))) {
                    let {
                        default: e
                    } = n("777523"), t = e(S);
                    if (null != t) return e => (null == e || e.preventDefault(), a.default.open(t.section, t.subsection, {
                        openWithoutBackstack: !1,
                        impressionSource: t.source
                    }), !0)
                }
                if (!u && null != (0, A.isSuspiciousDownload)(e)) return t => (null == t || t.preventDefault(), T.default.show(e), !0)
            }
        },
        212084: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("605250"),
                i = n("802493");
            let o = new r.default("GuildStickers");
            var u = new class e {
                getSync(e) {
                    let t = performance.now(),
                        n = i.default.stickers(e).getMapEntriesSyncUnsafe(),
                        r = performance.now();
                    return o.log("synchronously loaded in ".concat(r - t, "ms (guilds: ").concat(n.length, ")")), n
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
                        "full" === e.dataMode ? (o.verbose("Replacing ".concat(e.entities.length, " stickers for ").concat(e.guildId)), this.replace(e.guildId, e.entities, t)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (o.verbose("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " stickers for ").concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t))
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
                    let o = i.default.stickersTransaction(r);
                    for (let r of (o.putAll(e, t), n)) o.delete(e, r)
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
                    return a
                },
                FALSE_OPTION_NAME: function() {
                    return l
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
                    return A
                },
                getValidationErrorText: function() {
                    return S
                }
            });
            var r, i, o = n("798609"),
                u = n("782340");
            let a = "True",
                l = "False",
                s = [{
                    name: a,
                    displayName: a,
                    value: "true"
                }, {
                    name: l,
                    displayName: l,
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
                A = 500;

            function S(e) {
                if (null != e.choices) return u.default.Messages.COMMAND_VALIDATION_CHOICE_ERROR;
                switch (e.type) {
                    case o.ApplicationCommandOptionType.BOOLEAN:
                        return u.default.Messages.COMMAND_VALIDATION_BOOLEAN_ERROR;
                    case o.ApplicationCommandOptionType.CHANNEL:
                        return u.default.Messages.COMMAND_VALIDATION_CHANNEL_ERROR;
                    case o.ApplicationCommandOptionType.INTEGER:
                        return u.default.Messages.COMMAND_VALIDATION_INTEGER_ERROR;
                    case o.ApplicationCommandOptionType.NUMBER:
                        return u.default.Messages.COMMAND_VALIDATION_NUMBER_ERROR;
                    case o.ApplicationCommandOptionType.ROLE:
                        return u.default.Messages.COMMAND_VALIDATION_ROLE_ERROR;
                    case o.ApplicationCommandOptionType.USER:
                        return u.default.Messages.COMMAND_VALIDATION_USER_ERROR;
                    case o.ApplicationCommandOptionType.MENTIONABLE:
                        return u.default.Messages.COMMAND_VALIDATION_MENTIONABLE_ERROR;
                    default:
                        return u.default.Messages.COMMAND_VALIDATION_GENERAL_ERROR
                }
            }
        },
        524768: function(e, t, n) {
            "use strict";
            var r, i, o, u, a, l, s, c, d, E, _, f;
            n.r(t), n.d(t, {
                ApplicationCommandSectionType: function() {
                    return r
                },
                ApplicationCommandInputType: function() {
                    return i
                },
                ApplicationCommandPermissionType: function() {
                    return o
                },
                ApplicationCommandTriggerLocations: function() {
                    return u
                },
                ApplicationCommandTriggerSections: function() {
                    return a
                },
                CommandOrigin: function() {
                    return l
                }
            }), (s = r || (r = {}))[s.BUILT_IN = 0] = "BUILT_IN", s[s.APPLICATION = 1] = "APPLICATION", (c = i || (i = {}))[c.BUILT_IN = 0] = "BUILT_IN", c[c.BUILT_IN_TEXT = 1] = "BUILT_IN_TEXT", c[c.BUILT_IN_INTEGRATION = 2] = "BUILT_IN_INTEGRATION", c[c.BOT = 3] = "BOT", c[c.PLACEHOLDER = 4] = "PLACEHOLDER", (d = o || (o = {}))[d.ROLE = 1] = "ROLE", d[d.USER = 2] = "USER", d[d.CHANNEL = 3] = "CHANNEL", (E = u || (u = {})).DISCOVERY = "discovery", E.SUGGESTION = "suggestion", E.MENTION = "mention", E.PASTE = "paste", E.RECALL = "recall", E.POPULAR_COMMANDS = "popular_commands", E.MJ_CHAT_BAR = "mj_chat_bar", E.QUERY = "query", (_ = a || (a = {}))[_.BUILT_IN = 1] = "BUILT_IN", _[_.FRECENCY = 2] = "FRECENCY", _[_.APP = 3] = "APP", (f = l || (l = {}))[f.CHAT = 0] = "CHAT", f[f.APPLICATION_LAUNCHER = 1] = "APPLICATION_LAUNCHER"
        },
        349503: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FetchState: function() {
                    return i
                },
                default: function() {
                    return E
                }
            });
            var r, i, o = n("446674"),
                u = n("913144");
            (r = i || (i = {}))[r.FETCHING = 0] = "FETCHING", r[r.FETCHED = 1] = "FETCHED", r[r.ERROR = 2] = "ERROR";
            let a = {},
                l = {},
                s = new Set,
                c = {};
            class d extends o.default.Store {
                getApplication(e) {
                    if (null != e) return a[e]
                }
                getApplications() {
                    return a
                }
                getApplicationFetchState(e) {
                    if (null != e) return l[e]
                }
                getApplicationFetchStates() {
                    return l
                }
                isInvalidApplication(e) {
                    return null != e && s.has(e)
                }
                getInvalidApplicationIds() {
                    return s
                }
                isFetching(e) {
                    return this.getApplicationFetchState(e) === i.FETCHING
                }
                getApplicationLastFetchTime(e) {
                    if (null != e) return c[e]
                }
            }
            d.displayName = "ApplicationDirectoryApplicationsStore";
            var E = new d(u.default, {
                APPLICATION_DIRECTORY_FETCH_APPLICATION: function(e) {
                    let {
                        applicationId: t
                    } = e;
                    l = {
                        ...l,
                        [t]: i.FETCHING
                    }
                },
                APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS: function(e) {
                    let {
                        application: t
                    } = e;
                    a = {
                        ...a,
                        [t.id]: t
                    }, l = {
                        ...l,
                        [t.id]: i.FETCHED
                    };
                    let n = Date.now();
                    c = {
                        ...c,
                        [t.id]: n
                    }, s.has(t.id) && (s.delete(t.id), s = new Set(s))
                },
                APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE: function(e) {
                    let {
                        applicationId: t,
                        isInvalidApplication: n
                    } = e;
                    l = {
                        ...l,
                        [t]: i.ERROR
                    }, n && (s.add(t), s = new Set(s))
                }
            })
        },
        412707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ApplicationDirectoryViews: function() {
                    return o
                },
                ApplicationDirectoryEntrypointNames: function() {
                    return u
                },
                useApplicationDirectoryHistory: function() {
                    return _
                },
                getPreviousView: function() {
                    return f
                },
                getCurrentView: function() {
                    return I
                },
                setEntrypoint: function() {
                    return p
                },
                setGuildId: function() {
                    return T
                },
                resetApplicationDirectoryHistory: function() {
                    return A
                },
                setTrackedOpenedFromExternalEntrypoint: function() {
                    return S
                }
            });
            var r, i, o, u, a = n("803182"),
                l = n("308503"),
                s = n("393414"),
                c = n("349503"),
                d = n("49111");
            (r = o || (o = {})).HOME = "home", r.SEARCH = "search", r.APPLICATION = "application", (i = u || (u = {})).EXTERNAL = "External", i.KEYBOARD_SHORTCUT = "Keyboard Shortcut", i.APPLICATION_DIRECTORY_URL = "Application Directory URL", i.APPLICATION_DIRECTORY_PROFILE_EMBED = "Application Directory Profile Embed", i.APPLICATION_DIRECTORY_UPSELL_MODAL = "Application Directory Upsell Modal", i.GUILD_HEADER_POPOUT = "Guild Header Popout", i.GUILD_SETTINGS = "Guild Settings", i.GUILD_INTEGRATION_SETTINGS = "Guild Integration Settings", i.GUILD_CONTEXT_MENU = "Guild Context Menu";
            let E = (0, l.default)(() => ({
                    guildId: null,
                    entrypoint: null,
                    trackedOpenedFromExternalEntrypoint: !1
                })),
                _ = E;

            function f() {
                let {
                    location: {
                        state: e
                    }
                } = (0, s.getHistory)();
                return null == e ? void 0 : e.previousView
            }

            function I() {
                var e, t;
                let {
                    location: {
                        pathname: n
                    }
                } = (0, s.getHistory)(), r = (0, a.matchPath)(n, {
                    path: d.Routes.APPLICATION_DIRECTORY,
                    exact: !0
                }), i = (0, a.matchPath)(n, {
                    path: d.Routes.APPLICATION_DIRECTORY_SEARCH,
                    exact: !0
                }), u = (0, a.matchPath)(n, {
                    path: [d.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId"), d.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId", ":section")],
                    exact: !0
                }), {
                    applicationId: l,
                    section: E
                } = null !== (e = null == u ? void 0 : u.params) && void 0 !== e ? e : {};
                if (null != r) return {
                    type: o.HOME
                };
                if (null != i) return {
                    type: o.SEARCH
                };
                if (null != u && null != l) {
                    let e = null === (t = c.default.getApplication(l)) || void 0 === t ? void 0 : t.name;
                    return {
                        type: o.APPLICATION,
                        applicationId: l,
                        applicationName: e,
                        section: E
                    }
                }
            }

            function p(e) {
                E.setState({
                    entrypoint: e
                })
            }

            function T(e) {
                E.setState({
                    guildId: e
                })
            }

            function A() {
                E.setState({
                    entrypoint: null,
                    guildId: null
                })
            }

            function S(e) {
                E.setState({
                    trackedOpenedFromExternalEntrypoint: e
                })
            }
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
            var r, i, o, u;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return r
                },
                BotTagTypes: function() {
                    return i
                }
            }), (o = r || (r = {}))[o.GAME = 1] = "GAME", o[o.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", o[o.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (u = i || (i = {}))[u.BOT = 0] = "BOT", u[u.SERVER = 1] = "SERVER", u[u.SYSTEM_DM = 2] = "SYSTEM_DM", u[u.OFFICIAL = 3] = "OFFICIAL", u[u.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", u[u.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", u[u.AI = 6] = "AI", u[u.REMIX = 7] = "REMIX"
        },
        115279: function(e, t, n) {
            "use strict";
            var r, i, o, u, a, l, s, c, d, E, _;
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
                    return o
                },
                INACTIVE_CATEGORY_INDEX: function() {
                    return I
                },
                EmojiSize: function() {
                    return a
                },
                EMOJI_PICKER_TAB_PANEL_ID: function() {
                    return p
                },
                EMOJI_PICKER_TAB_ID: function() {
                    return T
                },
                SOUNDBOARD_PICKER_TAB_PANEL_ID: function() {
                    return A
                },
                SOUNDBOARD_PICKER_TAB_ID: function() {
                    return S
                },
                REACTION_PICKER_TAB_PANEL_ID: function() {
                    return O
                },
                REACTION_PICKER_TAB_ID: function() {
                    return h
                },
                SUPER_REACTION_PICKER_TAB_ID: function() {
                    return N
                },
                SuperReactionBalanceLocations: function() {
                    return l
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
                    return D
                }
            }), (s = r || (r = {})).GUILD = "GUILD", s.PACK = "PACK", s.UNICODE = "UNICODE", s.RECENT = "RECENT", s.CUSTOM = "CUSTOM", s.SEARCH_RESULTS = "SEARCH_RESULTS", s.FAVORITES = "FAVORITES", s.TOP_GUILD_EMOJI = "TOP_GUILD_EMOJI", s.PREMIUM_UPSELL = "PREMIUM_UPSELL";
            let f = "emoji-picker-grid";
            (c = i || (i = {})).RECENT = "recent", c.FAVORITES = "favorites", c.TOP_GUILD_EMOJI = "top guild emoji", c.CUSTOM = "custom", c.PEOPLE = "people", c.NATURE = "nature", c.FOOD = "food", c.ACTIVITY = "activity", c.TRAVEL = "travel", c.OBJECTS = "objects", c.SYMBOLS = "symbols", c.FLAGS = "flags", c.PREMIUM_UPSELL = "premium emoji", (d = o || (o = {})).NONE = "", d.TOP_GUILD_EMOJI = "top_server", d.NEWLY_ADDED_EMOJI = "newly_added", (E = u || (u = {}))[E.EMOJI = 0] = "EMOJI", E[E.NSFW = 1] = "NSFW";
            let I = -1;
            (_ = a || (a = {}))[_.MEDIUM = 40] = "MEDIUM", _[_.LARGE = 48] = "LARGE";
            let p = "emoji-picker-tab-panel",
                T = "emoji-picker-tab",
                A = "soundboard-picker-tab-panel",
                S = "soundboard-picker-tab",
                O = "reaction-picker-tab-panel",
                h = "reaction-picker-tab",
                N = "super-reaction-picker-tab";
            (l || (l = {})).TOOLTIP = "tooltip";
            let C = "gif-picker-tab-panel",
                g = "gif-picker-tab",
                R = {
                    reaction: 32,
                    default: 44,
                    jumbo: 96
                },
                D = 9
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
            var r = n("446674"),
                i = n("203288"),
                o = n("862205"),
                u = n("21121"),
                a = n("923959"),
                l = n("305961"),
                s = n("49111");

            function c(e, t, n) {
                let r = t.getChannels(e)[a.GUILD_SELECTABLE_CHANNELS_KEY].filter(t => {
                    let {
                        channel: r
                    } = t;
                    return !n.isChannelGated(e, r.id)
                });
                return r.length > 5
            }

            function d(e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                let t = (0, r.useStateFromStores)([a.default, i.default], () => null != e && c(e.id, a.default, i.default));
                return !__OVERLAY__ && !!t && null != e && e.hasFeature(s.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
            }

            function E(e) {
                if (__OVERLAY__ || e === s.ME || e === s.FAVORITES || (0, u.isInMainTabsExperiment)()) return !1;
                let t = l.default.getGuild(e);
                return !!(null != t && c(e, a.default, i.default)) && t.hasFeature(s.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
            }
            let _ = (0, o.createExperiment)({
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
                f = (0, o.createExperiment)({
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
                I = (0, o.createExperiment)({
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
            (0, o.createExperiment)({
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
            }), (0, o.createExperiment)({
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
            let p = (0, o.createExperiment)({
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
                T = (0, o.createExperiment)({
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
            var r = n("872717"),
                i = n("913144"),
                o = n("479756"),
                u = n("38654"),
                a = n("9294"),
                l = n("26989"),
                s = n("337543"),
                c = n("697218"),
                d = n("49111");
            let E = async (e, t) => {
                let n = null != t ? t : s.default.getInviteKeyForGuildId(e),
                    o = c.default.getCurrentUser(),
                    u = !l.default.isMember(e, null == o ? void 0 : o.id);
                try {
                    let t = await r.default.get({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: u,
                            invite_code: null != n ? (0, a.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: o
                    } = t;
                    return i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: o.version,
                            description: o.description,
                            formFields: o.form_fields,
                            guild: o.guild
                        }
                    }), o
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
                        body: o
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: o.version,
                        description: o.description,
                        formFields: o.form_fields
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
                        body: o
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: o.version,
                        description: o.description,
                        formFields: o.form_fields
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
                if (u.default.isFullServerPreview(e)) {
                    (0, o.updateImpersonatedData)(e, {
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
                            body: o
                        } = n;
                    return i.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: o
                    }), o
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
                    return o
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return u
                },
                MAX_FORM_ELEMENTS: function() {
                    return a
                },
                MAX_NUM_RULES: function() {
                    return l
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
            let o = new Set([i.VerificationFormFieldTypes.TERMS]),
                u = new Set([i.VerificationFormFieldTypes.MULTIPLE_CHOICE, i.VerificationFormFieldTypes.TEXT_INPUT, i.VerificationFormFieldTypes.PARAGRAPH]),
                a = 5,
                l = 16,
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
                    return a
                },
                setHasUnsubmittedChanges: function() {
                    return l
                },
                setShowWarning: function() {
                    return s
                }
            });
            var r = n("308503"),
                i = n("659500"),
                o = n("49111");
            let u = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                a = (0, r.default)(e => u),
                l = e => {
                    a.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                s = e => {
                    a.setState({
                        shouldShowWarning: e
                    }), e && i.ComponentDispatch.dispatch(o.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("551042"),
                o = n("599110"),
                u = n("50926"),
                a = n("347977"),
                l = n("394294"),
                s = n("49111");
            let c = () => {
                    o.default.track(s.AnalyticEvents.MODAL_DISMISSED, {
                        type: l.MEMBER_VERIFICATION_TYPE
                    })
                },
                d = e => {
                    o.default.track(s.AnalyticEvents.OPEN_MODAL, {
                        type: l.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var E = {
                openMemberVerificationModal(e, t) {
                    d(e);
                    let o = async t => {
                        await u.default.submitVerificationForm(e, t)
                    };
                    (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, r.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: o,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (a.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, a.setShowWarning)(!0);
                                        return
                                    }
                                    c()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: l.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            c(), a.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, a.setShowWarning)(!0) : (0, i.closeModal)(l.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && c(), (0, i.closeModal)(l.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
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
                    return A
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
                o = n("393414"),
                u = n("42203"),
                a = n("923959"),
                l = n("26989"),
                s = n("305961"),
                c = n("957255"),
                d = n("18494"),
                E = n("282109"),
                _ = n("599110"),
                f = n("38654"),
                I = n("507950"),
                p = n("49111"),
                T = n("724210");

            function A(e, t) {
                _.default.track(p.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === I.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), h(e)
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
                }), h(e))
            }

            function O(e) {
                r.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function h(e) {
                let t = d.default.getChannelId(e),
                    n = u.default.getChannel(t),
                    r = null != t && (0, T.isStaticChannelRoute)(t);
                if (!r && !c.default.can(p.Permissions.VIEW_CHANNEL, n)) {
                    let t = a.default.getDefaultChannel(e);
                    null != t && (0, o.transitionTo)(p.Routes.CHANNEL(e, t.id))
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
                    let n = [...a.default.getSelectableChannelIds(e), ...a.default.getVocalChannelIds(e)],
                        r = Array.from(t);
                    a.default.addConditionalChangeListener(() => {
                        let t = l.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (r.some(e => !t.roles.includes(e))) return !0;
                        let i = [...a.default.getSelectableChannelIds(e), ...a.default.getVocalChannelIds(e)],
                            o = i.filter(e => !n.includes(e));
                        return o.length > 0 && N(e, o, []), !1
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
                    return u
                },
                generateInviteKeyFromExtraData: function() {
                    return a
                },
                parseExtraDataFromInviteKey: function() {
                    return l
                },
                parseInviteCodeFromInviteKey: function() {
                    return s
                }
            });
            var r = n("522632"),
                i = n("833858");
            let o = "event";

            function u(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = r.parse(t);
                        return (0, i.getFirstQueryStringValue)(e[o])
                    } catch (e) {
                        return
                    }
                }(t);
                return a({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function a(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(o, "=").concat(n)
            }

            function l(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let u = r.parse(n),
                    a = (0, i.getFirstQueryStringValue)(u[o]);
                return {
                    baseCode: t,
                    guildScheduledEventId: a
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
            var r, i, o = n("446674"),
                u = n("913144"),
                a = n("653047"),
                l = n("946028");
            (r = i || (i = {}))[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED", r[r.FETCH_FAILED = 3] = "FETCH_FAILED";
            let s = new Map,
                c = new Map,
                d = [],
                E = i.NOT_FETCHED,
                _ = [];
            class f extends o.default.Store {
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
            let p = new f(u.default, {
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
                    d = t.map(a.default.createFromServer).sort((e, t) => e.name.localeCompare(t.name)), E = i.FETCHED
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
                    s.set(t, I(n.map(l.createPrivateChannelIntegration))), c.set(t, i.FETCHED)
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
                    s.set(t.channel_id, I([...n, (0, l.createPrivateChannelIntegration)(t)]))
                },
                PRIVATE_CHANNEL_INTEGRATION_UPDATE(e) {
                    let {
                        integration: t
                    } = e, n = s.get(t.channel_id);
                    if (null == n) return !1;
                    let r = (0, l.createPrivateChannelIntegration)(t),
                        i = n.findIndex(e => e.application.id === r.application.id),
                        o = [...n]; - 1 === i ? o.push(r) : o[i] = r, s.set(r.channel_id, I(o))
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
                    return u
                },
                getDevicePushProvider: function() {
                    return a
                }
            });
            var r, i, o = n("773336");
            let u = null;

            function a() {
                return (0, o.isAndroid)(), null
            }(r = i || (i = {})).REMINDER = "reminder", r.TOP_MESSAGE_PUSH = "top_messages_push", r.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        846325: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                MAX_LENGTH_SOUND_NAME: function() {
                    return o
                },
                MAX_SOUND_LENGTH_SECONDS: function() {
                    return u
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return a
                },
                SoundboardWheelSize: function() {
                    return l
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
            let o = 32,
                u = 5,
                a = "DEFAULT";
            (i = r || (r = {}))[i.SUCCESS = 0] = "SUCCESS", i[i.INTERRUPTED = 1] = "INTERRUPTED", r.SUCCESS, r.INTERRUPTED;
            let l = {
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
            var r, i, o = n("917351"),
                u = n.n(o),
                a = n("446674"),
                l = n("913144"),
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
                A = new Map,
                S = new Set,
                O = i.NOT_FETCHED,
                h = i.NOT_FETCHED,
                N = new Set,
                C = new Map,
                g = !1;

            function R(e) {
                let {
                    sound: t
                } = e, n = T.get(t.guildId), r = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != r && -1 !== r ? (n[r] = t, T.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), T.set(t.guildId, [...n]))
            }
            let D = u.debounce(e => {
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
            class v extends a.default.Store {
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
                    return h === i.FETCHING
                }
                isFetchingDefaultSounds() {
                    return O === i.FETCHING
                }
                isFetching() {
                    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
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
                    return null != A.get(e)
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
                    return h === i.FETCHED && O === i.FETCHED
                }
            }
            v.displayName = "SoundboardStore";
            var m = new v(l.default, {
                LOGOUT: function() {
                    T.clear(), A.clear(), C.clear(), g = !1, h = i.NOT_FETCHED, O = i.NOT_FETCHED
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    h = i.FETCHING
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
                        userId: o
                    } = e, u = (null !== (n = A.get(i)) && void 0 !== n ? n : 0) + 1, a = (null !== (r = C.get(o)) && void 0 !== r ? r : 0) + 1;
                    A.set(i, u), C.set(o, a), o !== (null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (g = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: r,
                        userId: i
                    } = e, o = (null !== (t = A.get(r)) && void 0 !== t ? t : 0) - 1, u = (null !== (n = C.get(i)) && void 0 !== n ? n : 0) - 1;
                    o <= 0 ? A.delete(r) : A.set(r, o), u <= 0 ? C.delete(i) : C.set(i, u)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    D(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    A.clear(), C.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e, {
                        type: n,
                        proto: r
                    } = t;
                    if (n === p.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var i, o;
                        N = new Set(null !== (o = null == r ? void 0 : null === (i = r.favoriteSoundboardSounds) || void 0 === i ? void 0 : i.soundIds) && void 0 !== o ? o : [])
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
                    }), h = i.FETCHED
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
                    return G
                }
            });
            var r, i, o = n("102053"),
                u = n("446674"),
                a = n("913144"),
                l = n("802493"),
                s = n("595525"),
                c = n("212084"),
                d = n("867805"),
                E = n("267567"),
                _ = n("813006"),
                f = n("778689"),
                I = n("305961"),
                p = n("161585"),
                T = n("24373"),
                A = n("49111");
            (r = i || (i = {}))[r.Unloaded = 0] = "Unloaded", r[r.MaybeLoaded = 1] = "MaybeLoaded", r[r.Loaded = 2] = "Loaded";
            let S = 2,
                O = new Map,
                h = new Map,
                N = null,
                C = [],
                g = null,
                R = !1,
                D = new Map,
                L = (e, t) => {
                    D = new Map(D.set(e, t))
                },
                v = 1e3 * A.Durations.HOUR,
                m = () => {
                    if (0 !== S) return;
                    let e = l.default.database();
                    if (null == e) return;
                    S = 2;
                    let t = (0, s.tryLoadOrResetCacheGateway)("StickerStore.loadSavedGuildStickers", () => o.default.time("\uD83D\uDCBE", "loadSavedGuildStickers", () => c.default.getSync(e)));
                    if (null != t) {
                        for (let [e, n] of t)
                            if (f.default.isMember(e) && !D.has(e)) {
                                for (let t of n) P(t, !0, I.default.getGuild(e));
                                L(e, n)
                            }
                    }
                },
                P = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    h.set(e.id, e), t && U(e, n)
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
                            o = {
                                type: p.StickerMetadataTypes.TAG,
                                value: n.trim().toLocaleLowerCase()
                            },
                            u = [r, o];
                        if (null != t) {
                            let e = (t instanceof(0, _.default) ? t.name : t.properties.name).trim().toLocaleLowerCase();
                            null != e && "" !== e && u.push({
                                type: p.StickerMetadataTypes.GUILD_NAME,
                                value: e
                            })
                        }
                        if (null == i) {
                            N.set(e.id, u);
                            return
                        }
                        u.push({
                            type: p.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: i.surrogates
                        }), i.forEachDiversity(e => u.push({
                            type: p.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: e.surrogates
                        })), N.set(e.id, u)
                    }
                },
                M = (e, t, n) => {
                    O.set(e.id, e);
                    let r = [...C];
                    if (t) {
                        let t = r.findIndex(t => t.id === e.id); - 1 !== t ? r[t] = e : r.push(e), C = r
                    }(t || n) && e.stickers.forEach(e => P(e))
                },
                y = () => {
                    D.forEach((e, t) => {
                        let n = I.default.getGuild(t);
                        null != n && e.forEach(e => U(e, n))
                    }), C.forEach(e => {
                        e.stickers.forEach(e => U(e))
                    })
                };

            function b(e) {
                null != e.stickers && (e.stickers.forEach(t => P(t, !0, e)), L(e.id, e.stickers))
            }
            class F extends u.default.Store {
                initialize() {
                    this.waitFor(l.default, f.default, I.default)
                }
                get isLoaded() {
                    return 0 !== S
                }
                get stickerMetadata() {
                    return m(), null == N && (N = new Map, y()), N
                }
                get hasLoadedStickerPacks() {
                    return null != g && g + v > Date.now()
                }
                get isFetchingStickerPacks() {
                    return R
                }
                getStickerById(e) {
                    return !h.has(e) && m(), h.get(e)
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
                    return D
                }
                getAllStickersIterator() {
                    return m(), h.values()
                }
                getAllGuildStickers() {
                    return m(), D
                }
                getStickersByGuildId(e) {
                    return m(), D.get(e)
                }
            }
            F.displayName = "StickersStore";
            var G = new F(a.default, {
                BACKGROUND_SYNC: () => {
                    N = null, h = new Map, D = new Map, S = 0
                },
                CONNECTION_OPEN: e => {
                    let {
                        guilds: t
                    } = e;
                    N = null, h = new Map, D = new Map, t.forEach(b), S = t.every(e => null != e.stickers) ? 1 : 0
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
                    } = e, r = null !== (t = D.get(n.id)) && void 0 !== t ? t : [];
                    r.forEach(e => {
                        null != N && N.delete(e.id), h.delete(e.id)
                    }), D.delete(n.id), D = new Map(D)
                },
                LOGOUT: () => {
                    S = 0, C = [], h.clear(), O.clear(), N = null, D.clear(), D = new Map(D), R = !1, g = null
                },
                STICKER_PACKS_FETCH_START: () => {
                    R = !0
                },
                STICKER_PACKS_FETCH_SUCCESS: e => {
                    let {
                        packs: t
                    } = e;
                    t.forEach(e => M(e, !0)), g = Date.now(), R = !1
                },
                STICKER_PACK_FETCH_SUCCESS: e => {
                    let {
                        pack: t,
                        ingestStickers: n
                    } = e;
                    M(t, !1, n)
                },
                GUILD_STICKERS_FETCH_SUCCESS: e => {
                    let {
                        guildId: t,
                        stickers: n
                    } = e;
                    n.forEach(e => P(e)), L(t, n)
                },
                GUILD_STICKERS_CREATE_SUCCESS: e => {
                    var t, n;
                    let {
                        guildId: r,
                        sticker: i
                    } = e, o = null !== (t = D.get(r)) && void 0 !== t ? t : [];
                    L(r, [...null !== (n = o.filter(e => e.id !== i.id)) && void 0 !== n ? n : [], i]), P(i)
                },
                STICKER_FETCH_SUCCESS: e => {
                    let {
                        sticker: t
                    } = e;
                    P(t, !1)
                },
                GUILD_STICKERS_UPDATE: e => {
                    var t;
                    let {
                        guildId: n,
                        stickers: r
                    } = e, i = e => {
                        let t;
                        let n = h.get(e.id);
                        return null != n && (0, T.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
                            ...e,
                            user: t
                        }
                    }, o = null !== (t = D.get(n)) && void 0 !== t ? t : [], u = o.filter(e => null == r.find(t => t.id === e.id));
                    u.forEach(e => {
                        h.delete(e.id), null != N && N.delete(e.id)
                    });
                    let a = r.map(e => i(e));
                    a.forEach(e => P(e)), L(n, a)
                }
            })
        },
        211895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("913144"),
                i = n("54239"),
                o = n("49111");

            function u() {
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
                }), (0, i.pushLayer)(o.Layers.USER_SETTINGS)
            }
        },
        777523: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("730290"),
                i = n("49111");
            let o = /-/g;

            function u(e) {
                let [, , t, n] = e.split("/"), u = null == t ? void 0 : t.toUpperCase().replace(o, "_"), a = null == n ? void 0 : n.toUpperCase().replace(o, "_");
                if (i.UserSettingsSections.hasOwnProperty(u) && (null == a || "" === a || i.UserSettingsSections.hasOwnProperty(a))) {
                    let {
                        source: e
                    } = (0, r.parse)(location.search);
                    return {
                        source: e,
                        section: i.UserSettingsSections[u],
                        subsection: a
                    }
                }
                return null
            }
        },
        917219: function(e, t, n) {
            "use strict";
            var r, i, o, u;
            n.r(t), n.d(t, {
                VideoFilterType: function() {
                    return r
                },
                DefaultVideoBackground: function() {
                    return i
                },
                ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: function() {
                    return a
                },
                DEFAULT_VIDEO_BACKGROUND_SORT: function() {
                    return l
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
            }), (o = r || (r = {}))[o.BACKGROUND = 0] = "BACKGROUND", (u = i || (i = {}))[u.OPTION_1 = 0] = "OPTION_1", u[u.OPTION_2 = 1] = "OPTION_2", u[u.OPTION_3 = 2] = "OPTION_3", u[u.OPTION_4 = 3] = "OPTION_4", u[u.OPTION_7 = 7] = "OPTION_7", u[u.OPTION_8 = 8] = "OPTION_8", u[u.OPTION_9 = 9] = "OPTION_9", u[u.OPTION_10 = 10] = "OPTION_10";
            let a = [i.OPTION_7, i.OPTION_8, i.OPTION_9, i.OPTION_10],
                l = [i.OPTION_7, i.OPTION_8, i.OPTION_9, i.OPTION_10, i.OPTION_1, i.OPTION_2, i.OPTION_3, i.OPTION_4].reduce((e, t, n) => ({
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
                    return o
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
            var o = i
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("866227"),
                i = n.n(r),
                o = n("666038");
            class u extends o.default {
                static createFromServer(e) {
                    var t;
                    return new u({
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
                    return A
                }
            });
            var r = n("446674"),
                i = n("913144"),
                o = n("619340"),
                u = n("376556"),
                a = n("450205"),
                l = n("813006"),
                s = n("49111");
            let c = new Set([s.PlatformTypes.CONTACTS]),
                d = !0,
                E = [],
                _ = [],
                f = {},
                I = {},
                p = e => {
                    E = e.filter(e => !c.has(e.type) && u.default.isSupported(e.type)), _ = e.filter(e => c.has(e.type)), d = !1
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
            var A = new T(i.default, {
                CONNECTION_OPEN: function(e) {
                    let t = e.connectedAccounts.map(e => new a.default(e));
                    p(t)
                },
                USER_CONNECTIONS_UPDATE: function(e) {
                    if (e.local && null != e.accounts) {
                        let t = e.accounts.map(e => new a.default({
                            ...e,
                            integrations: e.integrations.map(e => ({
                                ...e,
                                guild: new l.default(e.guild)
                            }))
                        }));
                        p(t)
                    } else o.default.fetch()
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
                    } = e, o = E.find(e => e.id === n && e.type === t);
                    if (null == o) return !1;
                    null != r && (o.revoked = r), null != i && (o.accessToken = i)
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
            var r = n("446674"),
                i = n("913144"),
                o = n("9294"),
                u = n("49111");
            let a = {},
                l = {},
                s = {};

            function c(e, t) {
                var n;
                e = null != e ? e : "";
                let r = (0, o.parseExtraDataFromInviteKey)(e),
                    i = a[e],
                    l = null != i ? {
                        state: u.InviteStates.RESOLVING,
                        ...i
                    } : {
                        state: u.InviteStates.RESOLVING,
                        code: r.baseCode
                    };
                t(l), a = {
                    ...a,
                    [e]: l
                }, (null === (n = l.guild) || void 0 === n ? void 0 : n.id) != null && (s = {
                    ...s,
                    [l.guild.id]: e
                })
            }

            function d(e) {
                return c(e.code, t => {
                    t.state = "banned" in e && e.banned ? u.InviteStates.BANNED : u.InviteStates.EXPIRED
                })
            }
            class E extends r.default.Store {
                getInvite(e) {
                    return a[e]
                }
                getInviteError(e) {
                    return l[e]
                }
                getInvites() {
                    return a
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
                    } = e, n = (0, o.parseExtraDataFromInviteKey)(t);
                    a = {
                        ...a,
                        [t]: {
                            code: n.baseCode,
                            state: u.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return c(e.code, t => {
                        var n, r;
                        t.state = u.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: d,
                INSTANT_INVITE_REVOKE_SUCCESS: d,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        t.state = u.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => c(e.code, e => {
                        e.state = u.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        var n, r;
                        t.state = u.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return c(e.code, e => {
                        e.state = u.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return c(e.code, t => {
                        t.state = u.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return l[e.code] = e.error, c(e.code, e => {
                        e.state = u.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return c(e.code, e => {
                        e.state = u.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = u.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = u.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        778588: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("446674"),
                i = n("913144");
            let o = [];

            function u() {
                o = []
            }
            class a extends r.default.Store {
                hasLayers() {
                    return o.length > 0
                }
                getLayers() {
                    return o
                }
            }
            a.displayName = "LayerStore";
            var l = new a(i.default, {
                LAYER_PUSH: function(e) {
                    let {
                        component: t
                    } = e;
                    if (o.indexOf(t) >= 0) return !1;
                    o = [...o, t]
                },
                LAYER_POP: function() {
                    if (0 === o.length) return !1;
                    o = o.slice(0, -1)
                },
                LAYER_POP_ALL: u,
                LOGOUT: u,
                NOTIFICATION_CLICK: u
            })
        },
        26092: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var r = n("917351"),
                i = n.n(r),
                o = n("446674"),
                u = n("913144"),
                a = n("697218"),
                l = n("49111");
            let s = l.FormStates.CLOSED,
                c = null,
                d = null,
                E = {},
                _ = {},
                f = {},
                I = null,
                p = null,
                T = !1,
                A = !1,
                S = null,
                O = null,
                h = null,
                N = [],
                C = null,
                g = null;

            function R(e) {
                var t, n, r, i, o, u;
                let c = a.default.getCurrentUser();
                if (null == c) return D();
                d = null !== (t = e.section) && void 0 !== t ? t : d, C = null !== (n = e.section) && void 0 !== n ? n : d, null != e.subsection && null != d && (E[d] = e.subsection), null != e.scrollPosition && null != d && (_[d] = e.scrollPosition), A = !!e.openWithoutBackstack, s = l.FormStates.OPEN, f = {}, p = {
                    ...I = {
                        [l.UserSettingsSections.ACCOUNT]: {
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
                }, O = null !== (r = e.onClose) && void 0 !== r ? r : null, h = null !== (i = e.analyticsLocation) && void 0 !== i ? i : null, N = null !== (o = e.analyticsLocations) && void 0 !== o ? o : [], g = null !== (u = e.impressionSource) && void 0 !== u ? u : null
            }

            function D() {
                s = l.FormStates.CLOSED, T = !1, I = null, C = null, p = null, c = null, d = null, E = {}, _ = {}, O = null, h = null, N = [], g = null
            }

            function L() {
                s = l.FormStates.OPEN, f = {}
            }
            class v extends o.default.Store {
                initialize() {
                    this.waitFor(a.default)
                }
                hasChanges() {
                    return null != p && null != I && (!!this.isOpen() || S === l.DrawerTabTypes.USER_SETTINGS) && !i.isEqual(p, I)
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
                    return A
                }
                getProps() {
                    return {
                        submitting: s === l.FormStates.SUBMITTING,
                        section: d,
                        subsection: null != d ? E[d] : null,
                        scrollPosition: null != d ? _[d] : null,
                        settings: p,
                        errors: f,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: A,
                        analyticsLocation: h,
                        analyticsLocations: N,
                        initialSection: C,
                        impressionSource: g
                    }
                }
                get onClose() {
                    return O
                }
            }
            v.displayName = "UserSettingsModalStore";
            var m = new v(u.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    T = !0, R(e)
                },
                USER_SETTINGS_MODAL_INIT: R,
                USER_SETTINGS_MODAL_CLOSE: D,
                LOGOUT: D,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    s = l.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (s !== l.FormStates.SUBMITTING) return !1;
                    s = l.FormStates.OPEN, d = l.UserSettingsSections.ACCOUNT, f = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    var t;
                    c = d, d = e.section, h = null, N = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (E[d] = e.subsection)
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
                    let n = p[l.UserSettingsSections.ACCOUNT];
                    p[l.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...t
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: L,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = a.default.getCurrentUser();
                    L(), null != e && (p = {
                        ...I = {
                            [l.UserSettingsSections.ACCOUNT]: {
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
                    return S = e.tab, null == d && S === l.DrawerTabTypes.USER_SETTINGS && R({
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
            var r = n("627445"),
                i = n.n(r),
                o = n("446674"),
                u = n("913144"),
                a = n("816454");
            let l = new Map;

            function s(e) {
                let t = l.get(e);
                return null == t ? (console.warn("Window state not initialized", e), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : t
            }
            class c extends o.default.Store {
                isFocused() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return s(e).focused
                }
                getFocusedWindowId() {
                    let e = null;
                    return l.forEach((t, n) => {
                        t.focused && (e = n)
                    }), e
                }
                isElementFullScreen() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return s(e).isElementFullscreen
                }
                windowSize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return s(e).windowSize
                }
            }
            c.displayName = "WindowStore";
            let d = new c(u.default, {
                WINDOW_INIT: function(e) {
                    i(!l.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: r,
                        focused: o
                    } = e;
                    return l.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: r,
                        focused: o
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(e) {
                    let t = s(e.windowId);
                    return t.isElementFullscreen !== e.isElementFullscreen && (l.set(e.windowId, {
                        ...t,
                        isElementFullscreen: e.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(e) {
                    let t = s(e.windowId);
                    return t.focused !== e.focused && (l.set(e.windowId, {
                        ...t,
                        focused: e.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(e) {
                    let t = s(e.windowId);
                    return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (l.set(e.windowId, {
                        ...t,
                        windowSize: {
                            width: e.width,
                            height: e.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(e) {
                    return l.delete(e.windowId), !0
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
                    return A
                },
                dataUriFileSize: function() {
                    return S
                },
                dataUrlToFile: function() {
                    return O
                },
                isPNGAnimated: function() {
                    return h
                }
            });
            var r = n("627445"),
                i = n.n(r),
                o = n("917351"),
                u = n.n(o),
                a = n("48648"),
                l = n.n(a);

            function s(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: r,
                    maxHeight: i,
                    minWidth: o = 0,
                    minHeight: u = 0
                } = e;
                if (t !== r || n !== i) {
                    let e = t > r ? r / t : 1;
                    t = Math.max(Math.round(t * e), o), n = Math.max(Math.round(n * e), u);
                    let a = n > i ? i / n : 1;
                    t = Math.max(Math.round(t * a), o), n = Math.max(Math.round(n * a), u)
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
                } = e, o = 1;
                t > r && (o = r / t), t = Math.round(t * o);
                let u = 1;
                return (n = Math.round(n * o)) > i && (u = i / n), Math.min(o * u, 1)
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
                let o = r.width = 0 === e.width ? 128 : e.width,
                    u = r.height = 0 === e.height ? 128 : e.height;
                i.drawImage(e, 0, 0, o, u);
                let a = i.getImageData(0, 0, o, u).data,
                    s = function(e, t, n) {
                        let r = [];
                        for (let i = 0, o, u, a, l, s; i < t; i += n) u = e[(o = 4 * i) + 0], a = e[o + 1], l = e[o + 2], (void 0 === (s = e[o + 3]) || s >= 125) && !(u > 250 && a > 250 && l > 250) && r.push([u, a, l]);
                        return r
                    }(a, o * u, n),
                    c = l(s, t);
                return "boolean" == typeof c ? f : c.palette()
            }
            let p = e => T(e),
                T = u.memoize(e => new Promise((t, n) => {
                    let r = new Image;
                    r.crossOrigin = "Anonymous", r.onerror = e => {
                        n(e), r.onerror = r.onload = null, r = null
                    }, r.onload = () => {
                        t(I(r, 5, 10)), r.onerror = r.onload = null, r = null
                    }, r.src = e
                }));

            function A(e) {
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
            async function h(e) {
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
                    return o
                }
            });
            var r = n("917351"),
                i = n.n(r);
            let o = e => "function" == typeof e ? e() : e;
            i.curry((e, t, n) => o(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let r, i;
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var o = n("697218"),
                u = n("615931");
            let a = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                r = e.showModal, a = e.updateModalProps, i = n("551042").closeModal
            }

            function l(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: o,
                    modalProps: u = {},
                    hooks: {
                        onEarlyClose: l
                    } = {}
                } = e;
                if (null == r) {
                    null == l || l();
                    return
                }
                let c = r(f, d, u);

                function d() {
                    null == l || l()
                }

                function E(e) {
                    i(c), n(e)
                }

                function _(e) {
                    i(c), o(e)
                }

                function f(e) {
                    return a(c, f, d, {
                        ...u,
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
                    a(c, f, d, {
                        ...u,
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
                    mfaCodeHandler: o = l,
                    isModalOpen: u = !1,
                    ...a
                } = e;
                return t(null != i ? {
                    code: i
                } : {}).then(n, e => {
                    var i, l;
                    if (i = e, l = u, i.body && 60008 === i.body.code || l && 429 === i.status) return o({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e,
                        ...a
                    });
                    r(e)
                })
            }

            function c(e, t) {
                var n, r;
                let {
                    checkEnabled: i = null !== (r = null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== r && r,
                    ...a
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, u.resolveThunk)(i) ? l : s)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...a
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
                    return u
                }
            });
            var r = n("872717"),
                i = n("599110");

            function o(e, t, n) {
                let {
                    trackedActionData: r,
                    ...o
                } = t, u = {
                    url: o.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(o).then(e => {
                        let n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e)), (0, i.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            ...u,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, o;
                        let a = r.properties;
                        "function" == typeof r.properties && (a = r.properties(e)), (0, i.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (o = e.body) || void 0 === o ? void 0 : o.message,
                            ...u,
                            ...a
                        }), n(e)
                    })
                })
            }
            var u = {
                get: function(e) {
                    return o(r.default.get, e, "get")
                },
                post: function(e) {
                    return o(r.default.post, e, "post")
                },
                put: function(e) {
                    return o(r.default.put, e, "put")
                },
                patch: function(e) {
                    return o(r.default.patch, e, "patch")
                },
                delete: function(e) {
                    return o(r.default.delete, e, "del")
                }
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return a
                },
                updateModalProps: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("551042"),
                o = n("920636");
            let u = (e, t, n) => function(i) {
                return (0, r.jsx)(o.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...i
                })
            };

            function a(e, t, n) {
                return (0, i.openModal)(u(e, t, n), {
                    onCloseCallback: t
                })
            }

            function l(e, t, n, r) {
                return (0, i.updateModal)(e, u(t, n, r))
            }
        }
    }
]);