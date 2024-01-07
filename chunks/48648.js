            if (n("808653"), n("424973"), !r) var r = {
                map: function(t, e) {
                    var n = {};
                    return e ? t.map(function(t, r) {
                        return n.index = r, e.call(n, t)
                    }) : t.slice()
                },
                naturalOrder: function(t, e) {
                    return t < e ? -1 : t > e ? 1 : 0
                },
                sum: function(t, e) {
                    var n = {};
                    return t.reduce(e ? function(t, r, l) {
                        return n.index = l, t + e.call(n, r)
                    } : function(t, e) {
                        return t + e
                    }, 0)
                },
                max: function(t, e) {
                    return Math.max.apply(null, e ? r.map(t, e) : t)
                }
            };
            var l = function() {
                var t = 3;

                function e(t, e, n) {
                    return (t << 10) + (e << 5) + n
                }

                function n(t) {
                    var e = [],
                        n = !1;

                    function r() {
                        e.sort(t), n = !0
                    }
                    return {
                        push: function(t) {
                            e.push(t), n = !1
                        },
                        peek: function(t) {
                            return !n && r(), void 0 === t && (t = e.length - 1), e[t]
                        },
                        pop: function() {
                            return !n && r(), e.pop()
                        },
                        size: function() {
                            return e.length
                        },
                        map: function(t) {
                            return e.map(t)
                        },
                        debug: function() {
                            return !n && r(), e
                        }
                    }
                }

                function l(t, e, n, r, l, i, o) {
                    this.r1 = t, this.r2 = e, this.g1 = n, this.g2 = r, this.b1 = l, this.b2 = i, this.histo = o
                }

                function i() {
                    this.vboxes = new n(function(t, e) {
                        return r.naturalOrder(t.vbox.count() * t.vbox.volume(), e.vbox.count() * e.vbox.volume())
                    })
                }
                return l.prototype = {
                    volume: function(t) {
                        return (!this._volume || t) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(t) {
                        var n = this.histo;
                        if (!this._count_set || t) {
                            var r, l, i, o = 0;
                            for (r = this.r1; r <= this.r2; r++)
                                for (l = this.g1; l <= this.g2; l++)
                                    for (i = this.b1; i <= this.b2; i++) o += n[e(r, l, i)] || 0;
                            this._count = o, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new l(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(t) {
                        var n = this.histo;
                        if (!this._avg || t) {
                            var r, l, i, o, s = 0,
                                u = 8,
                                a = 0,
                                d = 0,
                                c = 0;
                            for (l = this.r1; l <= this.r2; l++)
                                for (i = this.g1; i <= this.g2; i++)
                                    for (o = this.b1; o <= this.b2; o++) s += r = n[e(l, i, o)] || 0, a += r * (l + .5) * u, d += r * (i + .5) * u, c += r * (o + .5) * u;
                            s ? this._avg = [~~(a / s), ~~(d / s), ~~(c / s)] : this._avg = [~~(u * (this.r1 + this.r2 + 1) / 2), ~~(u * (this.g1 + this.g2 + 1) / 2), ~~(u * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(e) {
                        var n = e[0] >> t;
                        return gval = e[1] >> t, bval = e[2] >> t, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
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
                        for (var e = this.vboxes, n = 0; n < e.size(); n++)
                            if (e.peek(n).vbox.contains(t)) return e.peek(n).color;
                        return this.nearest(t)
                    },
                    nearest: function(t) {
                        for (var e, n, r, l = this.vboxes, i = 0; i < l.size(); i++)((n = Math.sqrt(Math.pow(t[0] - l.peek(i).color[0], 2) + Math.pow(t[1] - l.peek(i).color[1], 2) + Math.pow(t[2] - l.peek(i).color[2], 2))) < e || void 0 === e) && (e = n, r = l.peek(i).color);
                        return r
                    },
                    forcebw: function() {
                        var t = this.vboxes;
                        t.sort(function(t, e) {
                            return r.naturalOrder(r.sum(t.color), r.sum(e.color))
                        });
                        var e = t[0].color;
                        e[0] < 5 && e[1] < 5 && e[2] < 5 && (t[0].color = [0, 0, 0]);
                        var n = t.length - 1,
                            l = t[n].color;
                        l[0] > 251 && l[1] > 251 && l[2] > 251 && (t[n].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(o, s) {
                        if (!o.length || s < 2 || s > 256) return !1;
                        var u, a, d, c, h, f, _, p, E, I, S, T, g, m, N, v, L = (u = o, h = Array(32768), u.forEach(function(n) {
                                d = n[0] >> t, c = n[1] >> t, h[a = e(d, c, n[2] >> t)] = (h[a] || 0) + 1
                            }), h),
                            A = 0;
                        L.forEach(function() {
                            A++
                        });
                        var C = (f = o, _ = L, S = 1e6, T = 0, g = 1e6, m = 0, N = 1e6, v = 0, f.forEach(function(e) {
                                p = e[0] >> t, E = e[1] >> t, I = e[2] >> t, p < S ? S = p : p > T && (T = p), E < g ? g = E : E > m && (m = E), I < N ? N = I : I > v && (v = I)
                            }), new l(S, T, g, m, N, v, _)),
                            M = new n(function(t, e) {
                                return r.naturalOrder(t.count(), e.count())
                            });

                        function O(t, n) {
                            for (var l, i = 1, o = 0; o < 1e3;) {
                                if (!(l = t.pop()).count()) {
                                    t.push(l), o++;
                                    continue
                                }
                                var s = function(t, n) {
                                        if (n.count()) {
                                            var l = n.r2 - n.r1 + 1,
                                                i = n.g2 - n.g1 + 1,
                                                o = n.b2 - n.b1 + 1,
                                                s = r.max([l, i, o]);
                                            if (1 == n.count()) return [n.copy()];
                                            var u, a, d, c, h, f = 0,
                                                _ = [],
                                                p = [];
                                            if (s == l)
                                                for (u = n.r1; u <= n.r2; u++) {
                                                    for (c = 0, a = n.g1; a <= n.g2; a++)
                                                        for (d = n.b1; d <= n.b2; d++) c += t[h = e(u, a, d)] || 0;
                                                    f += c, _[u] = f
                                                } else if (s == i)
                                                    for (u = n.g1; u <= n.g2; u++) {
                                                        for (c = 0, a = n.r1; a <= n.r2; a++)
                                                            for (d = n.b1; d <= n.b2; d++) c += t[h = e(a, u, d)] || 0;
                                                        f += c, _[u] = f
                                                    } else
                                                        for (u = n.b1; u <= n.b2; u++) {
                                                            for (c = 0, a = n.r1; a <= n.r2; a++)
                                                                for (d = n.g1; d <= n.g2; d++) c += t[h = e(a, d, u)] || 0;
                                                            f += c, _[u] = f
                                                        }
                                            return _.forEach(function(t, e) {
                                                p[e] = f - t
                                            }), E(s == l ? "r" : s == i ? "g" : "b")
                                        }

                                        function E(t) {
                                            var e, r, l, i, o, s = t + "1",
                                                a = t + "2",
                                                d = 0;
                                            for (u = n[s]; u <= n[a]; u++)
                                                if (_[u] > f / 2) {
                                                    for (l = n.copy(), i = n.copy(), e = u - n[s], o = e <= (r = n[a] - u) ? Math.min(n[a] - 1, ~~(u + r / 2)) : Math.max(n[s], ~~(u - 1 - e / 2)); !_[o];) o++;
                                                    for (d = p[o]; !d && _[o - 1];) d = p[--o];
                                                    return l[a] = o, i[s] = l[a] + 1, [l, i]
                                                }
                                        }
                                    }(L, l),
                                    u = s[0],
                                    a = s[1];
                                if (!u) return;
                                if (t.push(u), a && (t.push(a), i++), i >= n || o++ > 1e3) return
                            }
                        }
                        M.push(C), O(M, .75 * s);
                        for (var U = new n(function(t, e) {
                                return r.naturalOrder(t.count() * t.volume(), e.count() * e.volume())
                            }); M.size();) U.push(M.pop());
                        O(U, s - U.size());
                        for (var R = new i; U.size();) R.push(U.pop());
                        return R
                    }
                }
            }();
            t.exports = l.quantize