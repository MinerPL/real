            e = n.nmd(e), n("70102"), n("781738"), n("424973"), ! function(r) {
                var o = "object" == typeof t && t && !t.nodeType && t,
                    a = "object" == typeof e && e && !e.nodeType && e,
                    i = "object" == typeof n.g && n.g;
                (i.global === i || i.window === i || i.self === i) && (r = i);
                var s, c, l = /^xn--/,
                    u = /[^\x20-\x7E]/,
                    d = /[\x2E\u3002\uFF0E\uFF61]/g,
                    p = {
                        overflow: "Overflow: input needs wider integers to process",
                        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                        "invalid-input": "Invalid input"
                    },
                    f = 35,
                    m = Math.floor,
                    h = String.fromCharCode;

                function g(e) {
                    throw RangeError(p[e])
                }

                function v(e, t) {
                    for (var n = e.length, r = []; n--;) r[n] = t(e[n]);
                    return r
                }

                function y(e, t) {
                    var n = e.split("@"),
                        r = "";
                    return n.length > 1 && (r = n[0] + "@", e = n[1]), r + v((e = e.replace(d, ".")).split("."), t).join(".")
                }

                function b(e) {
                    for (var t, n, r = [], o = 0, a = e.length; o < a;)(t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < a ? (64512 & (n = e.charCodeAt(o++))) == 56320 ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), o--) : r.push(t);
                    return r
                }

                function x(e) {
                    return v(e, function(e) {
                        var t = "";
                        return e > 65535 && (e -= 65536, t += h(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += h(e)
                    }).join("")
                }

                function S(e, t) {
                    return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
                }

                function w(e, t, n) {
                    var r = 0;
                    for (e = n ? m(e / 700) : e >> 1, e += m(e / t); e > 26 * f >> 1; r += 36) e = m(e / f);
                    return m(r + (f + 1) * e / (e + 38))
                }

                function D(e) {
                    var t, n, r, o, a, i, s, c, l, u, d, p = [],
                        f = e.length,
                        h = 0,
                        v = 128,
                        y = 72;
                    for ((r = e.lastIndexOf("-")) < 0 && (r = 0), o = 0; o < r; ++o) e.charCodeAt(o) >= 128 && g("not-basic"), p.push(e.charCodeAt(o));
                    for (a = r > 0 ? r + 1 : 0; a < f;) {
                        for (i = h, s = 1, c = 36;; c += 36) {
                            ;
                            if (a >= f && g("invalid-input"), ((l = (t = e.charCodeAt(a++)) - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : 36) >= 36 || l > m((2147483647 - h) / s)) && g("overflow"), h += l * s, l < (u = c <= y ? 1 : c >= y + 26 ? 26 : c - y)) break;
                            s > m(2147483647 / (d = 36 - u)) && g("overflow"), s *= d
                        }
                        y = w(h - i, n = p.length + 1, 0 == i), m(h / n) > 2147483647 - v && g("overflow"), v += m(h / n), h %= n, p.splice(h++, 0, v)
                    }
                    return x(p)
                }

                function C(e) {
                    var t, n, r, o, a, i, s, c, l, u, d, p, f, v, y, x = [];
                    for (i = 0, p = (e = b(e)).length, t = 128, n = 0, a = 72; i < p; ++i)(d = e[i]) < 128 && x.push(h(d));
                    for (r = o = x.length, o && x.push("-"); r < p;) {
                        for (s = 2147483647, i = 0; i < p; ++i)(d = e[i]) >= t && d < s && (s = d);
                        for (s - t > m((2147483647 - n) / (f = r + 1)) && g("overflow"), n += (s - t) * f, t = s, i = 0; i < p; ++i)
                            if ((d = e[i]) < t && ++n > 2147483647 && g("overflow"), d == t) {
                                for (c = n, l = 36; !(c < (u = l <= a ? 1 : l >= a + 26 ? 26 : l - a)); l += 36) {
                                    ;
                                    y = c - u, v = 36 - u, x.push(h(S(u + y % v, 0))), c = m(y / v)
                                }
                                x.push(h(S(c, 0))), a = w(n, f, r == o), n = 0, ++r
                            }++ n, ++t
                    }
                    return x.join("")
                }
                if (s = {
                        version: "1.4.1",
                        ucs2: {
                            decode: b,
                            encode: x
                        },
                        decode: D,
                        encode: C,
                        toASCII: function(e) {
                            return y(e, function(e) {
                                return u.test(e) ? "xn--" + C(e) : e
                            })
                        },
                        toUnicode: function(e) {
                            return y(e, function(e) {
                                return l.test(e) ? D(e.slice(4).toLowerCase()) : e
                            })
                        }
                    }, "function" == typeof define && "object" == typeof define.amd && define.amd) define("punycode", function() {
                    return s
                });
                else if (o && a) {
                    if (e.exports == o) a.exports = s;
                    else
                        for (c in s) s.hasOwnProperty(c) && (o[c] = s[c])
                } else r.punycode = s
            }(this)