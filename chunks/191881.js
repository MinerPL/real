            "use strict";
            var r = n("359882"),
                a = /[^\0-\u007E]/,
                o = /[.\u3002\uFF0E\uFF61]/g,
                i = "Overflow: input needs wider integers to process",
                l = 35,
                u = RangeError,
                s = r(o.exec),
                c = Math.floor,
                d = String.fromCharCode,
                f = r("".charCodeAt),
                p = r([].join),
                h = r([].push),
                m = r("".replace),
                y = r("".split),
                v = r("".toLowerCase),
                g = function(e) {
                    for (var t = [], n = 0, r = e.length; n < r;) {
                        var a = f(e, n++);
                        if (a >= 55296 && a <= 56319 && n < r) {
                            var o = f(e, n++);
                            (64512 & o) == 56320 ? h(t, ((1023 & a) << 10) + (1023 & o) + 65536) : (h(t, a), n--)
                        } else h(t, a)
                    }
                    return t
                },
                b = function(e) {
                    return e + 22 + 75 * (e < 26)
                },
                _ = function(e, t, n) {
                    var r = 0;
                    for (e = n ? c(e / 700) : e >> 1, e += c(e / t); e > 26 * l >> 1;) e = c(e / l), r += 36;
                    return c(r + (l + 1) * e / (e + 38))
                },
                k = function(e) {
                    var t, n, r = [],
                        a = (e = g(e)).length,
                        o = 128,
                        l = 0,
                        s = 72;
                    for (t = 0; t < e.length; t++)(n = e[t]) < 128 && h(r, d(n));
                    var f = r.length,
                        m = f;
                    for (f && h(r, "-"); m < a;) {
                        var y = 2147483647;
                        for (t = 0; t < e.length; t++)(n = e[t]) >= o && n < y && (y = n);
                        var v = m + 1;
                        if (y - o > c((2147483647 - l) / v)) throw new u(i);
                        for (l += (y - o) * v, o = y, t = 0; t < e.length; t++) {
                            if ((n = e[t]) < o && ++l > 2147483647) throw new u(i);
                            if (n === o) {
                                for (var k = l, C = 36;;) {
                                    var w = C <= s ? 1 : C >= s + 26 ? 26 : C - s;
                                    if (k < w) break;
                                    var S = k - w,
                                        N = 36 - w;
                                    h(r, d(b(w + S % N))), k = c(S / N), C += 36
                                }
                                h(r, d(b(k))), s = _(l, v, m === f), l = 0, m++
                            }
                        }
                        l++, o++
                    }
                    return p(r, "")
                };
            e.exports = function(e) {
                var t, n, r = [],
                    i = y(m(v(e), o, "."), ".");
                for (t = 0; t < i.length; t++) h(r, s(a, n = i[t]) ? "xn--" + k(n) : n);
                return p(r, ".")
            }