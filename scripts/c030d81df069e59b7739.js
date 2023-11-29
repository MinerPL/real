(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["48007"], {
        437083: function(t, r, n) {
            var u = n("561449"),
                o = n("877297");
            t.exports = function(t) {
                return o(u(t))
            }
        },
        329252: function(t, r, n) {
            var u = n("877297"),
                o = n("164099");
            t.exports = function(t) {
                return u(o(t))
            }
        },
        957478: function(t, r, n) {
            var u = n("626785");
            t.exports = function(t, r) {
                return u(r, function(r) {
                    return t[r]
                })
            }
        },
        561449: function(t, r, n) {
            t.exports = function(t, r) {
                var n = -1,
                    u = t.length;
                for (r || (r = Array(u)); ++n < u;) r[n] = t[n];
                return r
            }
        },
        877297: function(t, r, n) {
            var u = n("68421");
            t.exports = function(t, r) {
                var n = -1,
                    o = t.length,
                    e = o - 1;
                for (r = void 0 === r ? o : r; ++n < r;) {
                    var i = u(n, e),
                        s = t[i];
                    t[i] = t[n], t[n] = s
                }
                return t.length = r, t
            }
        },
        375128: function(t, r, n) {
            var u = n("437083"),
                o = n("329252"),
                e = n("725502");
            t.exports = function(t) {
                return (e(t) ? u : o)(t)
            }
        },
        164099: function(t, r, n) {
            var u = n("957478"),
                o = n("466731");
            t.exports = function(t) {
                return null == t ? [] : u(t, o(t))
            }
        },
        48648: function(t, r, n) {
            if (n("808653"), n("424973"), !u) var u = {
                map: function(t, r) {
                    var n = {};
                    return r ? t.map(function(t, u) {
                        return n.index = u, r.call(n, t)
                    }) : t.slice()
                },
                naturalOrder: function(t, r) {
                    return t < r ? -1 : t > r ? 1 : 0
                },
                sum: function(t, r) {
                    var n = {};
                    return t.reduce(r ? function(t, u, o) {
                        return n.index = o, t + r.call(n, u)
                    } : function(t, r) {
                        return t + r
                    }, 0)
                },
                max: function(t, r) {
                    return Math.max.apply(null, r ? u.map(t, r) : t)
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

                    function u() {
                        r.sort(t), n = !0
                    }
                    return {
                        push: function(t) {
                            r.push(t), n = !1
                        },
                        peek: function(t) {
                            return !n && u(), void 0 === t && (t = r.length - 1), r[t]
                        },
                        pop: function() {
                            return !n && u(), r.pop()
                        },
                        size: function() {
                            return r.length
                        },
                        map: function(t) {
                            return r.map(t)
                        },
                        debug: function() {
                            return !n && u(), r
                        }
                    }
                }

                function o(t, r, n, u, o, e, i) {
                    this.r1 = t, this.r2 = r, this.g1 = n, this.g2 = u, this.b1 = o, this.b2 = e, this.histo = i
                }

                function e() {
                    this.vboxes = new n(function(t, r) {
                        return u.naturalOrder(t.vbox.count() * t.vbox.volume(), r.vbox.count() * r.vbox.volume())
                    })
                }
                return o.prototype = {
                    volume: function(t) {
                        return (!this._volume || t) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(t) {
                        var n = this.histo;
                        if (!this._count_set || t) {
                            var u, o, e, i = 0;
                            for (u = this.r1; u <= this.r2; u++)
                                for (o = this.g1; o <= this.g2; o++)
                                    for (e = this.b1; e <= this.b2; e++) i += n[r(u, o, e)] || 0;
                            this._count = i, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new o(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(t) {
                        var n = this.histo;
                        if (!this._avg || t) {
                            var u, o, e, i, s = 0,
                                c = 8,
                                f = 0,
                                a = 0,
                                h = 0;
                            for (o = this.r1; o <= this.r2; o++)
                                for (e = this.g1; e <= this.g2; e++)
                                    for (i = this.b1; i <= this.b2; i++) s += u = n[r(o, e, i)] || 0, f += u * (o + .5) * c, a += u * (e + .5) * c, h += u * (i + .5) * c;
                            s ? this._avg = [~~(f / s), ~~(a / s), ~~(h / s)] : this._avg = [~~(c * (this.r1 + this.r2 + 1) / 2), ~~(c * (this.g1 + this.g2 + 1) / 2), ~~(c * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(r) {
                        var n = r[0] >> t;
                        return gval = r[1] >> t, bval = r[2] >> t, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, e.prototype = {
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
                        for (var r, n, u, o = this.vboxes, e = 0; e < o.size(); e++)((n = Math.sqrt(Math.pow(t[0] - o.peek(e).color[0], 2) + Math.pow(t[1] - o.peek(e).color[1], 2) + Math.pow(t[2] - o.peek(e).color[2], 2))) < r || void 0 === r) && (r = n, u = o.peek(e).color);
                        return u
                    },
                    forcebw: function() {
                        var t = this.vboxes;
                        t.sort(function(t, r) {
                            return u.naturalOrder(u.sum(t.color), u.sum(r.color))
                        });
                        var r = t[0].color;
                        r[0] < 5 && r[1] < 5 && r[2] < 5 && (t[0].color = [0, 0, 0]);
                        var n = t.length - 1,
                            o = t[n].color;
                        o[0] > 251 && o[1] > 251 && o[2] > 251 && (t[n].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(i, s) {
                        if (!i.length || s < 2 || s > 256) return !1;
                        var c, f, a, h, l, v, p, b, g, d, x, m, _, k, w, z, y = (c = i, l = Array(32768), c.forEach(function(n) {
                                a = n[0] >> t, h = n[1] >> t, l[f = r(a, h, n[2] >> t)] = (l[f] || 0) + 1
                            }), l),
                            M = 0;
                        y.forEach(function() {
                            M++
                        });
                        var O = (v = i, p = y, x = 1e6, m = 0, _ = 1e6, k = 0, w = 1e6, z = 0, v.forEach(function(r) {
                                b = r[0] >> t, g = r[1] >> t, d = r[2] >> t, b < x ? x = b : b > m && (m = b), g < _ ? _ = g : g > k && (k = g), d < w ? w = d : d > z && (z = d)
                            }), new o(x, m, _, k, w, z, p)),
                            E = new n(function(t, r) {
                                return u.naturalOrder(t.count(), r.count())
                            });

                        function q(t, n) {
                            for (var o, e = 1, i = 0; i < 1e3;) {
                                if (!(o = t.pop()).count()) {
                                    t.push(o), i++;
                                    continue
                                }
                                var s = function(t, n) {
                                        if (n.count()) {
                                            var o = n.r2 - n.r1 + 1,
                                                e = n.g2 - n.g1 + 1,
                                                i = n.b2 - n.b1 + 1,
                                                s = u.max([o, e, i]);
                                            if (1 == n.count()) return [n.copy()];
                                            var c, f, a, h, l, v = 0,
                                                p = [],
                                                b = [];
                                            if (s == o)
                                                for (c = n.r1; c <= n.r2; c++) {
                                                    for (h = 0, f = n.g1; f <= n.g2; f++)
                                                        for (a = n.b1; a <= n.b2; a++) h += t[l = r(c, f, a)] || 0;
                                                    v += h, p[c] = v
                                                } else if (s == e)
                                                    for (c = n.g1; c <= n.g2; c++) {
                                                        for (h = 0, f = n.r1; f <= n.r2; f++)
                                                            for (a = n.b1; a <= n.b2; a++) h += t[l = r(f, c, a)] || 0;
                                                        v += h, p[c] = v
                                                    } else
                                                        for (c = n.b1; c <= n.b2; c++) {
                                                            for (h = 0, f = n.r1; f <= n.r2; f++)
                                                                for (a = n.g1; a <= n.g2; a++) h += t[l = r(f, a, c)] || 0;
                                                            v += h, p[c] = v
                                                        }
                                            return p.forEach(function(t, r) {
                                                b[r] = v - t
                                            }), g(s == o ? "r" : s == e ? "g" : "b")
                                        }

                                        function g(t) {
                                            var r, u, o, e, i, s = t + "1",
                                                f = t + "2",
                                                a = 0;
                                            for (c = n[s]; c <= n[f]; c++)
                                                if (p[c] > v / 2) {
                                                    for (o = n.copy(), e = n.copy(), r = c - n[s], i = r <= (u = n[f] - c) ? Math.min(n[f] - 1, ~~(c + u / 2)) : Math.max(n[s], ~~(c - 1 - r / 2)); !p[i];) i++;
                                                    for (a = b[i]; !a && p[i - 1];) a = b[--i];
                                                    return o[f] = i, e[s] = o[f] + 1, [o, e]
                                                }
                                        }
                                    }(y, o),
                                    c = s[0],
                                    f = s[1];
                                if (!c) return;
                                if (t.push(c), f && (t.push(f), e++), e >= n || i++ > 1e3) return
                            }
                        }
                        E.push(O), q(E, .75 * s);
                        for (var C = new n(function(t, r) {
                                return u.naturalOrder(t.count() * t.volume(), r.count() * r.volume())
                            }); E.size();) C.push(E.pop());
                        q(C, s - C.size());
                        for (var R = new e; C.size();) R.push(C.pop());
                        return R
                    }
                }
            }();
            t.exports = o.quantize
        },
        48174: function(t, r, n) {
            "use strict";

            function u(t, r) {
                if (t.length !== r.length) return !1;
                for (let n = 0; n < r.length && n < t.length; n++)
                    if (!Object.is(t[n], r[n])) return !1;
                return !0
            }
            n.r(r), n.d(r, {
                default: function() {
                    return u
                }
            })
        },
        775560: function(t, r, n) {
            "use strict";
            n.r(r), n.d(r, {
                useForceUpdate: function() {
                    return u.default
                },
                useStableMemo: function() {
                    return o.default
                },
                useLazyValue: function() {
                    return e.default
                }
            });
            var u = n("14716"),
                o = n("745510"),
                e = n("315378")
        },
        14716: function(t, r, n) {
            "use strict";
            n.r(r), n.d(r, {
                default: function() {
                    return o
                }
            }), n("222007");
            var u = n("884691");

            function o() {
                let [, t] = (0, u.useState)({});
                return (0, u.useCallback)(() => t({}), [])
            }
        },
        315378: function(t, r, n) {
            "use strict";
            n.r(r), n.d(r, {
                default: function() {
                    return e
                }
            });
            var u = n("884691");
            let o = {};

            function e(t) {
                let r = (0, u.useRef)(o);
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
            var u = n("884691"),
                o = n("48174");
            let e = [];

            function i(t, r) {
                let n = (0, u.useRef)(),
                    i = (0, u.useRef)(e);
                return i.current === e ? (n.current = t(), i.current = r) : !(0, o.default)(r, i.current) && (n.current = t(), i.current = r), n.current
            }
        }
    }
]);