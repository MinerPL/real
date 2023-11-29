(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["45071"], {
        78349: function(t, n, e) {
            "use strict";
            e("424973"), t.exports.parse = function(t) {
                var n = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
                if (!n) return null;
                n.shift();
                var e = null,
                    r = [];
                n[2] && (e = (u = n[2].split("-")).shift(), r = u);
                var i = [];
                n[5] && (i = n[5].split("-")).shift();
                var o = [];
                if (n[6]) {
                    (u = n[6].split("-")).shift();
                    for (var u, a, s = []; u.length;) {
                        var c = u.shift();
                        1 === c.length ? a ? (o.push({
                            singleton: a,
                            extension: s
                        }), a = c, s = []) : a = c : s.push(c)
                    }
                    o.push({
                        singleton: a,
                        extension: s
                    })
                }
                var f = [];
                n[7] && ((f = n[7].split("-")).shift(), f.shift());
                var l = [];
                return n[8] && (l = n[8].split("-")).shift(), {
                    langtag: {
                        language: {
                            language: e,
                            extlang: r
                        },
                        script: n[3] || null,
                        region: n[4] || null,
                        variant: i,
                        extension: o,
                        privateuse: f
                    },
                    privateuse: l,
                    grandfathered: {
                        irregular: n[0] || null,
                        regular: n[1] || null
                    }
                }
            }
        },
        979897: function(t, n, e) {
            t = e.nmd(t), e("854508");
            var r = r || function(t) {
                "use strict";
                if (!("undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
                    var n = t.document,
                        e = function() {
                            return t.URL || t.webkitURL || t
                        },
                        r = n.createElementNS("http://www.w3.org/1999/xhtml", "a"),
                        i = "download" in r,
                        o = function(t) {
                            var n = new MouseEvent("click");
                            t.dispatchEvent(n)
                        },
                        u = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
                        a = t.webkitRequestFileSystem,
                        s = t.requestFileSystem || a || t.mozRequestFileSystem,
                        c = function(n) {
                            (t.setImmediate || t.setTimeout)(function() {
                                throw n
                            }, 0)
                        },
                        f = "application/octet-stream",
                        l = 0,
                        h = function(t) {
                            setTimeout(function() {
                                "string" == typeof t ? e().revokeObjectURL(t) : t.remove()
                            }, 4e4)
                        },
                        v = function(t, n, e) {
                            for (var r = (n = [].concat(n)).length; r--;) {
                                var i = t["on" + n[r]];
                                if ("function" == typeof i) try {
                                    i.call(t, e || t)
                                } catch (t) {
                                    c(t)
                                }
                            }
                        },
                        d = function(t) {
                            return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob(["\xef\xbb\xbf", t], {
                                type: t.type
                            }) : t
                        },
                        p = function(n, c, p) {
                            !p && (n = d(n));
                            var g, b, m = this,
                                w = n.type,
                                y = !1,
                                x = function() {
                                    v(m, "writestart progress write writeend".split(" "))
                                },
                                z = function() {
                                    if (b && u && "undefined" != typeof FileReader) {
                                        var r = new FileReader;
                                        r.onloadend = function() {
                                            var t = r.result;
                                            b.location.href = "data:attachment/file" + t.slice(t.search(/[,;]/)), m.readyState = m.DONE, x()
                                        }, r.readAsDataURL(n), m.readyState = m.INIT;
                                        return
                                    }(y || !g) && (g = e().createObjectURL(n)), b ? b.location.href = g : void 0 === t.open(g, "_blank") && u && (t.location.href = g), m.readyState = m.DONE, x(), h(g)
                                },
                                O = function(t) {
                                    return function() {
                                        if (m.readyState !== m.DONE) return t.apply(this, arguments)
                                    }
                                },
                                S = {
                                    create: !0,
                                    exclusive: !1
                                };
                            if (m.readyState = m.INIT, !c && (c = "download"), i) {
                                g = e().createObjectURL(n), setTimeout(function() {
                                    r.href = g, r.download = c, o(r), x(), h(g), m.readyState = m.DONE
                                });
                                return
                            }
                            if (t.chrome && w && w !== f && (n = (n.slice || n.webkitSlice).call(n, 0, n.size, f), y = !0), a && "download" !== c && (c += ".download"), (w === f || a) && (b = t), !s) {
                                z();
                                return
                            }
                            l += n.size, s(t.TEMPORARY, l, O(function(t) {
                                t.root.getDirectory("saved", S, O(function(t) {
                                    var e = function() {
                                        t.getFile(c, S, O(function(t) {
                                            t.createWriter(O(function(e) {
                                                e.onwriteend = function(n) {
                                                    b.location.href = t.toURL(), m.readyState = m.DONE, v(m, "writeend", n), h(t)
                                                }, e.onerror = function() {
                                                    var t = e.error;
                                                    t.code !== t.ABORT_ERR && z()
                                                }, "writestart progress write abort".split(" ").forEach(function(t) {
                                                    e["on" + t] = m["on" + t]
                                                }), e.write(n), m.abort = function() {
                                                    e.abort(), m.readyState = m.DONE
                                                }, m.readyState = m.WRITING
                                            }), z)
                                        }), z)
                                    };
                                    t.getFile(c, {
                                        create: !1
                                    }, O(function(t) {
                                        t.remove(), e()
                                    }), O(function(t) {
                                        t.code === t.NOT_FOUND_ERR ? e() : z()
                                    }))
                                }), z)
                            }), z)
                        },
                        g = p.prototype;
                    return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function(t, n, e) {
                        return !e && (t = d(t)), navigator.msSaveOrOpenBlob(t, n || "download")
                    } : (g.abort = function() {
                        this.readyState = this.DONE, v(this, "abort")
                    }, g.readyState = g.INIT = 0, g.WRITING = 1, g.DONE = 2, g.error = g.onwritestart = g.onprogress = g.onwrite = g.onabort = g.onerror = g.onwriteend = null, function(t, n, e) {
                        return new p(t, n, e)
                    })
                }
            }("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
            void 0 !== t && t.exports ? t.exports.saveAs = r : "undefined" != typeof define && null !== define && null !== define.amd && define([], function() {
                return r
            })
        },
        448105: function(t, n, e) {
            "use strict";
            t.exports = function(t, n) {
                var e = n.length,
                    r = t.length;
                if (r > e) return !1;
                if (r === e) return t === n;
                t: for (var i = 0, o = 0; i < r; i++) {
                    for (var u = t.charCodeAt(i); o < e;)
                        if (n.charCodeAt(o++) === u) continue t;
                    return !1
                }
                return !0
            }
        },
        48648: function(t, n, e) {
            if (e("808653"), e("424973"), !r) var r = {
                map: function(t, n) {
                    var e = {};
                    return n ? t.map(function(t, r) {
                        return e.index = r, n.call(e, t)
                    }) : t.slice()
                },
                naturalOrder: function(t, n) {
                    return t < n ? -1 : t > n ? 1 : 0
                },
                sum: function(t, n) {
                    var e = {};
                    return t.reduce(n ? function(t, r, i) {
                        return e.index = i, t + n.call(e, r)
                    } : function(t, n) {
                        return t + n
                    }, 0)
                },
                max: function(t, n) {
                    return Math.max.apply(null, n ? r.map(t, n) : t)
                }
            };
            var i = function() {
                var t = 3;

                function n(t, n, e) {
                    return (t << 10) + (n << 5) + e
                }

                function e(t) {
                    var n = [],
                        e = !1;

                    function r() {
                        n.sort(t), e = !0
                    }
                    return {
                        push: function(t) {
                            n.push(t), e = !1
                        },
                        peek: function(t) {
                            return !e && r(), void 0 === t && (t = n.length - 1), n[t]
                        },
                        pop: function() {
                            return !e && r(), n.pop()
                        },
                        size: function() {
                            return n.length
                        },
                        map: function(t) {
                            return n.map(t)
                        },
                        debug: function() {
                            return !e && r(), n
                        }
                    }
                }

                function i(t, n, e, r, i, o, u) {
                    this.r1 = t, this.r2 = n, this.g1 = e, this.g2 = r, this.b1 = i, this.b2 = o, this.histo = u
                }

                function o() {
                    this.vboxes = new e(function(t, n) {
                        return r.naturalOrder(t.vbox.count() * t.vbox.volume(), n.vbox.count() * n.vbox.volume())
                    })
                }
                return i.prototype = {
                    volume: function(t) {
                        return (!this._volume || t) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(t) {
                        var e = this.histo;
                        if (!this._count_set || t) {
                            var r, i, o, u = 0;
                            for (r = this.r1; r <= this.r2; r++)
                                for (i = this.g1; i <= this.g2; i++)
                                    for (o = this.b1; o <= this.b2; o++) u += e[n(r, i, o)] || 0;
                            this._count = u, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new i(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(t) {
                        var e = this.histo;
                        if (!this._avg || t) {
                            var r, i, o, u, a = 0,
                                s = 8,
                                c = 0,
                                f = 0,
                                l = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (o = this.g1; o <= this.g2; o++)
                                    for (u = this.b1; u <= this.b2; u++) a += r = e[n(i, o, u)] || 0, c += r * (i + .5) * s, f += r * (o + .5) * s, l += r * (u + .5) * s;
                            a ? this._avg = [~~(c / a), ~~(f / a), ~~(l / a)] : this._avg = [~~(s * (this.r1 + this.r2 + 1) / 2), ~~(s * (this.g1 + this.g2 + 1) / 2), ~~(s * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(n) {
                        var e = n[0] >> t;
                        return gval = n[1] >> t, bval = n[2] >> t, e >= this.r1 && e <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
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
                        for (var n = this.vboxes, e = 0; e < n.size(); e++)
                            if (n.peek(e).vbox.contains(t)) return n.peek(e).color;
                        return this.nearest(t)
                    },
                    nearest: function(t) {
                        for (var n, e, r, i = this.vboxes, o = 0; o < i.size(); o++)((e = Math.sqrt(Math.pow(t[0] - i.peek(o).color[0], 2) + Math.pow(t[1] - i.peek(o).color[1], 2) + Math.pow(t[2] - i.peek(o).color[2], 2))) < n || void 0 === n) && (n = e, r = i.peek(o).color);
                        return r
                    },
                    forcebw: function() {
                        var t = this.vboxes;
                        t.sort(function(t, n) {
                            return r.naturalOrder(r.sum(t.color), r.sum(n.color))
                        });
                        var n = t[0].color;
                        n[0] < 5 && n[1] < 5 && n[2] < 5 && (t[0].color = [0, 0, 0]);
                        var e = t.length - 1,
                            i = t[e].color;
                        i[0] > 251 && i[1] > 251 && i[2] > 251 && (t[e].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(u, a) {
                        if (!u.length || a < 2 || a > 256) return !1;
                        var s, c, f, l, h, v, d, p, g, b, m, w, y, x, z, O, S = (s = u, h = Array(32768), s.forEach(function(e) {
                                f = e[0] >> t, l = e[1] >> t, h[c = n(f, l, e[2] >> t)] = (h[c] || 0) + 1
                            }), h),
                            R = 0;
                        S.forEach(function() {
                            R++
                        });
                        var k = (v = u, d = S, m = 1e6, w = 0, y = 1e6, x = 0, z = 1e6, O = 0, v.forEach(function(n) {
                                p = n[0] >> t, g = n[1] >> t, b = n[2] >> t, p < m ? m = p : p > w && (w = p), g < y ? y = g : g > x && (x = g), b < z ? z = b : b > O && (O = b)
                            }), new i(m, w, y, x, z, O, d)),
                            E = new e(function(t, n) {
                                return r.naturalOrder(t.count(), n.count())
                            });

                        function _(t, e) {
                            for (var i, o = 1, u = 0; u < 1e3;) {
                                if (!(i = t.pop()).count()) {
                                    t.push(i), u++;
                                    continue
                                }
                                var a = function(t, e) {
                                        if (e.count()) {
                                            var i = e.r2 - e.r1 + 1,
                                                o = e.g2 - e.g1 + 1,
                                                u = e.b2 - e.b1 + 1,
                                                a = r.max([i, o, u]);
                                            if (1 == e.count()) return [e.copy()];
                                            var s, c, f, l, h, v = 0,
                                                d = [],
                                                p = [];
                                            if (a == i)
                                                for (s = e.r1; s <= e.r2; s++) {
                                                    for (l = 0, c = e.g1; c <= e.g2; c++)
                                                        for (f = e.b1; f <= e.b2; f++) l += t[h = n(s, c, f)] || 0;
                                                    v += l, d[s] = v
                                                } else if (a == o)
                                                    for (s = e.g1; s <= e.g2; s++) {
                                                        for (l = 0, c = e.r1; c <= e.r2; c++)
                                                            for (f = e.b1; f <= e.b2; f++) l += t[h = n(c, s, f)] || 0;
                                                        v += l, d[s] = v
                                                    } else
                                                        for (s = e.b1; s <= e.b2; s++) {
                                                            for (l = 0, c = e.r1; c <= e.r2; c++)
                                                                for (f = e.g1; f <= e.g2; f++) l += t[h = n(c, f, s)] || 0;
                                                            v += l, d[s] = v
                                                        }
                                            return d.forEach(function(t, n) {
                                                p[n] = v - t
                                            }), g(a == i ? "r" : a == o ? "g" : "b")
                                        }

                                        function g(t) {
                                            var n, r, i, o, u, a = t + "1",
                                                c = t + "2",
                                                f = 0;
                                            for (s = e[a]; s <= e[c]; s++)
                                                if (d[s] > v / 2) {
                                                    for (i = e.copy(), o = e.copy(), n = s - e[a], u = n <= (r = e[c] - s) ? Math.min(e[c] - 1, ~~(s + r / 2)) : Math.max(e[a], ~~(s - 1 - n / 2)); !d[u];) u++;
                                                    for (f = p[u]; !f && d[u - 1];) f = p[--u];
                                                    return i[c] = u, o[a] = i[c] + 1, [i, o]
                                                }
                                        }
                                    }(S, i),
                                    s = a[0],
                                    c = a[1];
                                if (!s) return;
                                if (t.push(s), c && (t.push(c), o++), o >= e || u++ > 1e3) return
                            }
                        }
                        E.push(k), _(E, .75 * a);
                        for (var N = new e(function(t, n) {
                                return r.naturalOrder(t.count() * t.volume(), n.count() * n.volume())
                            }); E.size();) N.push(E.pop());
                        _(N, a - N.size());
                        for (var D = new o; N.size();) D.push(N.pop());
                        return D
                    }
                }
            }();
            t.exports = i.quantize
        },
        48174: function(t, n, e) {
            "use strict";

            function r(t, n) {
                if (t.length !== n.length) return !1;
                for (let e = 0; e < n.length && e < t.length; e++)
                    if (!Object.is(t[e], n[e])) return !1;
                return !0
            }
            e.r(n), e.d(n, {
                default: function() {
                    return r
                }
            })
        },
        775560: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
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
            var r = e("14716"),
                i = e("745510"),
                o = e("315378")
        },
        14716: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return i
                }
            }), e("222007");
            var r = e("884691");

            function i() {
                let [, t] = (0, r.useState)({});
                return (0, r.useCallback)(() => t({}), [])
            }
        },
        315378: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return o
                }
            });
            var r = e("884691");
            let i = {};

            function o(t) {
                let n = (0, r.useRef)(i);
                return n.current === i && (n.current = t()), n.current
            }
        },
        745510: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return u
                }
            });
            var r = e("884691"),
                i = e("48174");
            let o = [];

            function u(t, n) {
                let e = (0, r.useRef)(),
                    u = (0, r.useRef)(o);
                return u.current === o ? (e.current = t(), u.current = n) : !(0, i.default)(n, u.current) && (e.current = t(), u.current = n), e.current
            }
        }
    }
]);