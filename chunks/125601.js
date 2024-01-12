            "use strict";
            s("70102"), s("781738"), s("424973"), s("222007");
            let r = /^xn--/,
                i = /[^\0-\x7E]/,
                n = /[\x2E\u3002\uFF0E\uFF61]/g,
                c = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                },
                o = 35,
                f = Math.floor,
                u = String.fromCharCode;

            function a(t) {
                throw RangeError(c[t])
            }

            function d(t, e) {
                let s = t.split("@"),
                    r = "";
                s.length > 1 && (r = s[0] + "@", t = s[1]), t = t.replace(n, ".");
                let i = t.split("."),
                    c = (function(t, e) {
                        let s = [],
                            r = t.length;
                        for (; r--;) s[r] = e(t[r]);
                        return s
                    })(i, e).join(".");
                return r + c
            }

            function p(t) {
                let e = [],
                    s = 0,
                    r = t.length;
                for (; s < r;) {
                    let i = t.charCodeAt(s++);
                    if (i >= 55296 && i <= 56319 && s < r) {
                        let r = t.charCodeAt(s++);
                        (64512 & r) == 56320 ? e.push(((1023 & i) << 10) + (1023 & r) + 65536) : (e.push(i), s--)
                    } else e.push(i)
                }
                return e
            }
            let b = function(t, e) {
                    return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
                },
                h = function(t, e, s) {
                    let r = 0;
                    for (t = s ? f(t / 700) : t >> 1, t += f(t / e); t > 26 * o >> 1; r += 36) t = f(t / o);
                    return f(r + (o + 1) * t / (t + 38))
                },
                l = function(t) {
                    let e = [],
                        s = t.length,
                        r = 0,
                        i = 128,
                        n = 72,
                        c = t.lastIndexOf("-");
                    c < 0 && (c = 0);
                    for (let s = 0; s < c; ++s) t.charCodeAt(s) >= 128 && a("not-basic"), e.push(t.charCodeAt(s));
                    for (let u = c > 0 ? c + 1 : 0; u < s;) {
                        let c = r;
                        for (let e = 1, i = 36;; i += 36) {
                            var o;
                            u >= s && a("invalid-input");
                            let c = (o = t.charCodeAt(u++)) - 48 < 10 ? o - 22 : o - 65 < 26 ? o - 65 : o - 97 < 26 ? o - 97 : 36;
                            (c >= 36 || c > f((2147483647 - r) / e)) && a("overflow"), r += c * e;
                            let d = i <= n ? 1 : i >= n + 26 ? 26 : i - n;
                            if (c < d) break;
                            let p = 36 - d;
                            e > f(2147483647 / p) && a("overflow"), e *= p
                        }
                        let d = e.length + 1;
                        n = h(r - c, d, 0 == c), f(r / d) > 2147483647 - i && a("overflow"), i += f(r / d), r %= d, e.splice(r++, 0, i)
                    }
                    return String.fromCodePoint(...e)
                },
                g = function(t) {
                    let e = [],
                        s = (t = p(t)).length,
                        r = 128,
                        i = 0,
                        n = 72;
                    for (let s of t) s < 128 && e.push(u(s));
                    let c = e.length,
                        o = c;
                    for (c && e.push("-"); o < s;) {
                        let s = 2147483647;
                        for (let e of t) e >= r && e < s && (s = e);
                        let d = o + 1;
                        for (let p of (s - r > f((2147483647 - i) / d) && a("overflow"), i += (s - r) * d, r = s, t))
                            if (p < r && ++i > 2147483647 && a("overflow"), p == r) {
                                let t = i;
                                for (let s = 36;; s += 36) {
                                    let r = s <= n ? 1 : s >= n + 26 ? 26 : s - n;
                                    if (t < r) break;
                                    let i = t - r,
                                        c = 36 - r;
                                    e.push(u(b(r + i % c, 0))), t = f(i / c)
                                }
                                e.push(u(b(t, 0))), n = h(i, d, o == c), i = 0, ++o
                            }++ i, ++r
                    }
                    return e.join("")
                };
            t.exports = {
                version: "2.1.0",
                ucs2: {
                    decode: p,
                    encode: t => String.fromCodePoint(...t)
                },
                decode: l,
                encode: g,
                toASCII: function(t) {
                    return d(t, function(t) {
                        return i.test(t) ? "xn--" + g(t) : t
                    })
                },
                toUnicode: function(t) {
                    return d(t, function(t) {
                        return r.test(t) ? l(t.slice(4).toLowerCase()) : t
                    })
                }
            }