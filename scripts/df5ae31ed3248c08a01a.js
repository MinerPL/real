(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["66353"], {
        78349: function(t, r, n) {
            "use strict";
            t.exports.parse = function(t) {
                var r = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
                if (!r) return null;
                r.shift();
                var n = null,
                    e = [];
                r[2] && (n = (o = r[2].split("-")).shift(), e = o);
                var i = [];
                r[5] && (i = r[5].split("-")).shift();
                var u = [];
                if (r[6]) {
                    (o = r[6].split("-")).shift();
                    for (var o, s, a = []; o.length;) {
                        var c = o.shift();
                        1 === c.length ? s ? (u.push({
                            singleton: s,
                            extension: a
                        }), s = c, a = []) : s = c : a.push(c)
                    }
                    u.push({
                        singleton: s,
                        extension: a
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
                        variant: i,
                        extension: u,
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
        310013: function(t, r, n) {
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
                i = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                u = "function" == typeof Object.getOwnPropertySymbols;
            t.exports = function(t, r, n) {
                if ("string" != typeof r) {
                    var o = Object.getOwnPropertyNames(r);
                    u && (o = o.concat(Object.getOwnPropertySymbols(r)));
                    for (var s = 0; s < o.length; ++s)
                        if (!e[o[s]] && !i[o[s]] && (!n || !n[o[s]])) try {
                            t[o[s]] = r[o[s]]
                        } catch (t) {}
                }
                return t
            }
        },
        48648: function(t, r, n) {
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
                    return t.reduce(r ? function(t, e, i) {
                        return n.index = i, t + r.call(n, e)
                    } : function(t, r) {
                        return t + r
                    }, 0)
                },
                max: function(t, r) {
                    return Math.max.apply(null, r ? e.map(t, r) : t)
                }
            };
            var i = function() {
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

                function i(t, r, n, e, i, u, o) {
                    this.r1 = t, this.r2 = r, this.g1 = n, this.g2 = e, this.b1 = i, this.b2 = u, this.histo = o
                }

                function u() {
                    this.vboxes = new n(function(t, r) {
                        return e.naturalOrder(t.vbox.count() * t.vbox.volume(), r.vbox.count() * r.vbox.volume())
                    })
                }
                return i.prototype = {
                    volume: function(t) {
                        return (!this._volume || t) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(t) {
                        var n = this.histo;
                        if (!this._count_set || t) {
                            var e, i, u, o = 0;
                            for (e = this.r1; e <= this.r2; e++)
                                for (i = this.g1; i <= this.g2; i++)
                                    for (u = this.b1; u <= this.b2; u++) o += n[r(e, i, u)] || 0;
                            this._count = o, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new i(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(t) {
                        var n = this.histo;
                        if (!this._avg || t) {
                            var e, i, u, o, s = 0,
                                a = 8,
                                c = 0,
                                f = 0,
                                h = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (u = this.g1; u <= this.g2; u++)
                                    for (o = this.b1; o <= this.b2; o++) s += e = n[r(i, u, o)] || 0, c += e * (i + .5) * a, f += e * (u + .5) * a, h += e * (o + .5) * a;
                            s ? this._avg = [~~(c / s), ~~(f / s), ~~(h / s)] : this._avg = [~~(a * (this.r1 + this.r2 + 1) / 2), ~~(a * (this.g1 + this.g2 + 1) / 2), ~~(a * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(r) {
                        var n = r[0] >> t;
                        return gval = r[1] >> t, bval = r[2] >> t, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, u.prototype = {
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
                        for (var r, n, e, i = this.vboxes, u = 0; u < i.size(); u++)((n = Math.sqrt(Math.pow(t[0] - i.peek(u).color[0], 2) + Math.pow(t[1] - i.peek(u).color[1], 2) + Math.pow(t[2] - i.peek(u).color[2], 2))) < r || void 0 === r) && (r = n, e = i.peek(u).color);
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
                            i = t[n].color;
                        i[0] > 251 && i[1] > 251 && i[2] > 251 && (t[n].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(o, s) {
                        if (!o.length || s < 2 || s > 256) return !1;
                        var a, c, f, h, l, p, v, g, b, d, m, x, y, z, k, w, _ = (a = o, l = Array(32768), a.forEach(function(n) {
                                f = n[0] >> t, h = n[1] >> t, l[c = r(f, h, n[2] >> t)] = (l[c] || 0) + 1
                            }), l),
                            O = 0;
                        _.forEach(function() {
                            O++
                        });
                        var M = (p = o, v = _, m = 1e6, x = 0, y = 1e6, z = 0, k = 1e6, w = 0, p.forEach(function(r) {
                                g = r[0] >> t, b = r[1] >> t, d = r[2] >> t, g < m ? m = g : g > x && (x = g), b < y ? y = b : b > z && (z = b), d < k ? k = d : d > w && (w = d)
                            }), new i(m, x, y, z, k, w, v)),
                            E = new n(function(t, r) {
                                return e.naturalOrder(t.count(), r.count())
                            });

                        function j(t, n) {
                            for (var i, u = 1, o = 0; o < 1e3;) {
                                if (!(i = t.pop()).count()) {
                                    t.push(i), o++;
                                    continue
                                }
                                var s = function(t, n) {
                                        if (n.count()) {
                                            var i = n.r2 - n.r1 + 1,
                                                u = n.g2 - n.g1 + 1,
                                                o = n.b2 - n.b1 + 1,
                                                s = e.max([i, u, o]);
                                            if (1 == n.count()) return [n.copy()];
                                            var a, c, f, h, l, p = 0,
                                                v = [],
                                                g = [];
                                            if (s == i)
                                                for (a = n.r1; a <= n.r2; a++) {
                                                    for (h = 0, c = n.g1; c <= n.g2; c++)
                                                        for (f = n.b1; f <= n.b2; f++) h += t[l = r(a, c, f)] || 0;
                                                    p += h, v[a] = p
                                                } else if (s == u)
                                                    for (a = n.g1; a <= n.g2; a++) {
                                                        for (h = 0, c = n.r1; c <= n.r2; c++)
                                                            for (f = n.b1; f <= n.b2; f++) h += t[l = r(c, a, f)] || 0;
                                                        p += h, v[a] = p
                                                    } else
                                                        for (a = n.b1; a <= n.b2; a++) {
                                                            for (h = 0, c = n.r1; c <= n.r2; c++)
                                                                for (f = n.g1; f <= n.g2; f++) h += t[l = r(c, f, a)] || 0;
                                                            p += h, v[a] = p
                                                        }
                                            return v.forEach(function(t, r) {
                                                g[r] = p - t
                                            }), b(s == i ? "r" : s == u ? "g" : "b")
                                        }

                                        function b(t) {
                                            var r, e, i, u, o, s = t + "1",
                                                c = t + "2",
                                                f = 0;
                                            for (a = n[s]; a <= n[c]; a++)
                                                if (v[a] > p / 2) {
                                                    for (i = n.copy(), u = n.copy(), r = a - n[s], o = r <= (e = n[c] - a) ? Math.min(n[c] - 1, ~~(a + e / 2)) : Math.max(n[s], ~~(a - 1 - r / 2)); !v[o];) o++;
                                                    for (f = g[o]; !f && v[o - 1];) f = g[--o];
                                                    return i[c] = o, u[s] = i[c] + 1, [i, u]
                                                }
                                        }
                                    }(_, i),
                                    a = s[0],
                                    c = s[1];
                                if (!a) return;
                                if (t.push(a), c && (t.push(c), u++), u >= n || o++ > 1e3) return
                            }
                        }
                        E.push(M), j(E, .75 * s);
                        for (var C = new n(function(t, r) {
                                return e.naturalOrder(t.count() * t.volume(), r.count() * r.volume())
                            }); E.size();) C.push(E.pop());
                        j(C, s - C.size());
                        for (var P = new u; C.size();) P.push(C.pop());
                        return P
                    }
                }
            }();
            t.exports = i.quantize
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
                    return i.default
                },
                useLazyValue: function() {
                    return u.default
                }
            });
            var e = n("14716"),
                i = n("745510"),
                u = n("315378")
        },
        14716: function(t, r, n) {
            "use strict";
            n.r(r), n.d(r, {
                default: function() {
                    return i
                }
            });
            var e = n("884691");

            function i() {
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
            let i = {};

            function u(t) {
                let r = (0, e.useRef)(i);
                return r.current === i && (r.current = t()), r.current
            }
        },
        745510: function(t, r, n) {
            "use strict";
            n.r(r), n.d(r, {
                default: function() {
                    return o
                }
            });
            var e = n("884691"),
                i = n("48174");
            let u = [];

            function o(t, r) {
                let n = (0, e.useRef)(),
                    o = (0, e.useRef)(u);
                return o.current === u ? (n.current = t(), o.current = r) : !(0, i.default)(r, o.current) && (n.current = t(), o.current = r), n.current
            }
        }
    }
]);