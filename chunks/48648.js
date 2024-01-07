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
                    return t.reduce(e ? function(t, r, i) {
                        return n.index = i, t + e.call(n, r)
                    } : function(t, e) {
                        return t + e
                    }, 0)
                },
                max: function(t, e) {
                    return Math.max.apply(null, e ? r.map(t, e) : t)
                }
            };
            var i = function() {
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

                function i(t, e, n, r, i, o, u) {
                    this.r1 = t, this.r2 = e, this.g1 = n, this.g2 = r, this.b1 = i, this.b2 = o, this.histo = u
                }

                function o() {
                    this.vboxes = new n(function(t, e) {
                        return r.naturalOrder(t.vbox.count() * t.vbox.volume(), e.vbox.count() * e.vbox.volume())
                    })
                }
                return i.prototype = {
                    volume: function(t) {
                        return (!this._volume || t) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(t) {
                        var n = this.histo;
                        if (!this._count_set || t) {
                            var r, i, o, u = 0;
                            for (r = this.r1; r <= this.r2; r++)
                                for (i = this.g1; i <= this.g2; i++)
                                    for (o = this.b1; o <= this.b2; o++) u += n[e(r, i, o)] || 0;
                            this._count = u, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new i(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(t) {
                        var n = this.histo;
                        if (!this._avg || t) {
                            var r, i, o, u, a = 0,
                                s = 8,
                                l = 0,
                                c = 0,
                                d = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (o = this.g1; o <= this.g2; o++)
                                    for (u = this.b1; u <= this.b2; u++) a += r = n[e(i, o, u)] || 0, l += r * (i + .5) * s, c += r * (o + .5) * s, d += r * (u + .5) * s;
                            a ? this._avg = [~~(l / a), ~~(c / a), ~~(d / a)] : this._avg = [~~(s * (this.r1 + this.r2 + 1) / 2), ~~(s * (this.g1 + this.g2 + 1) / 2), ~~(s * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(e) {
                        var n = e[0] >> t;
                        return gval = e[1] >> t, bval = e[2] >> t, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, o.prototype = {
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
                        for (var e, n, r, i = this.vboxes, o = 0; o < i.size(); o++)((n = Math.sqrt(Math.pow(t[0] - i.peek(o).color[0], 2) + Math.pow(t[1] - i.peek(o).color[1], 2) + Math.pow(t[2] - i.peek(o).color[2], 2))) < e || void 0 === e) && (e = n, r = i.peek(o).color);
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
                            i = t[n].color;
                        i[0] > 251 && i[1] > 251 && i[2] > 251 && (t[n].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(u, a) {
                        if (!u.length || a < 2 || a > 256) return !1;
                        var s, l, c, d, _, f, E, I, h, A, R, p, v, N, g, S, m = (s = u, _ = Array(32768), s.forEach(function(n) {
                                c = n[0] >> t, d = n[1] >> t, _[l = e(c, d, n[2] >> t)] = (_[l] || 0) + 1
                            }), _),
                            O = 0;
                        m.forEach(function() {
                            O++
                        });
                        var T = (f = u, E = m, R = 1e6, p = 0, v = 1e6, N = 0, g = 1e6, S = 0, f.forEach(function(e) {
                                I = e[0] >> t, h = e[1] >> t, A = e[2] >> t, I < R ? R = I : I > p && (p = I), h < v ? v = h : h > N && (N = h), A < g ? g = A : A > S && (S = A)
                            }), new i(R, p, v, N, g, S, E)),
                            L = new n(function(t, e) {
                                return r.naturalOrder(t.count(), e.count())
                            });

                        function D(t, n) {
                            for (var i, o = 1, u = 0; u < 1e3;) {
                                if (!(i = t.pop()).count()) {
                                    t.push(i), u++;
                                    continue
                                }
                                var a = function(t, n) {
                                        if (n.count()) {
                                            var i = n.r2 - n.r1 + 1,
                                                o = n.g2 - n.g1 + 1,
                                                u = n.b2 - n.b1 + 1,
                                                a = r.max([i, o, u]);
                                            if (1 == n.count()) return [n.copy()];
                                            var s, l, c, d, _, f = 0,
                                                E = [],
                                                I = [];
                                            if (a == i)
                                                for (s = n.r1; s <= n.r2; s++) {
                                                    for (d = 0, l = n.g1; l <= n.g2; l++)
                                                        for (c = n.b1; c <= n.b2; c++) d += t[_ = e(s, l, c)] || 0;
                                                    f += d, E[s] = f
                                                } else if (a == o)
                                                    for (s = n.g1; s <= n.g2; s++) {
                                                        for (d = 0, l = n.r1; l <= n.r2; l++)
                                                            for (c = n.b1; c <= n.b2; c++) d += t[_ = e(l, s, c)] || 0;
                                                        f += d, E[s] = f
                                                    } else
                                                        for (s = n.b1; s <= n.b2; s++) {
                                                            for (d = 0, l = n.r1; l <= n.r2; l++)
                                                                for (c = n.g1; c <= n.g2; c++) d += t[_ = e(l, c, s)] || 0;
                                                            f += d, E[s] = f
                                                        }
                                            return E.forEach(function(t, e) {
                                                I[e] = f - t
                                            }), h(a == i ? "r" : a == o ? "g" : "b")
                                        }

                                        function h(t) {
                                            var e, r, i, o, u, a = t + "1",
                                                l = t + "2",
                                                c = 0;
                                            for (s = n[a]; s <= n[l]; s++)
                                                if (E[s] > f / 2) {
                                                    for (i = n.copy(), o = n.copy(), e = s - n[a], u = e <= (r = n[l] - s) ? Math.min(n[l] - 1, ~~(s + r / 2)) : Math.max(n[a], ~~(s - 1 - e / 2)); !E[u];) u++;
                                                    for (c = I[u]; !c && E[u - 1];) c = I[--u];
                                                    return i[l] = u, o[a] = i[l] + 1, [i, o]
                                                }
                                        }
                                    }(m, i),
                                    s = a[0],
                                    l = a[1];
                                if (!s) return;
                                if (t.push(s), l && (t.push(l), o++), o >= n || u++ > 1e3) return
                            }
                        }
                        L.push(T), D(L, .75 * a);
                        for (var C = new n(function(t, e) {
                                return r.naturalOrder(t.count() * t.volume(), e.count() * e.volume())
                            }); L.size();) C.push(L.pop());
                        D(C, a - C.size());
                        for (var M = new o; C.size();) M.push(C.pop());
                        return M
                    }
                }
            }();
            t.exports = i.quantize