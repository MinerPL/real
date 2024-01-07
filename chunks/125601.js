            "use strict";
            r("70102"), r("781738"), r("424973"), r("222007");
            let i = /^xn--/,
                n = /[^\0-\x7E]/,
                o = /[\x2E\u3002\uFF0E\uFF61]/g,
                a = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                },
                s = 35,
                f = Math.floor,
                h = String.fromCharCode;

            function c(t) {
                throw RangeError(a[t])
            }

            function u(t, e) {
                let r = t.split("@"),
                    i = "";
                r.length > 1 && (i = r[0] + "@", t = r[1]), t = t.replace(o, ".");
                let n = t.split("."),
                    a = (function(t, e) {
                        let r = [],
                            i = t.length;
                        for (; i--;) r[i] = e(t[i]);
                        return r
                    })(n, e).join(".");
                return i + a
            }

            function d(t) {
                let e = [],
                    r = 0,
                    i = t.length;
                for (; r < i;) {
                    let n = t.charCodeAt(r++);
                    if (n >= 55296 && n <= 56319 && r < i) {
                        let i = t.charCodeAt(r++);
                        (64512 & i) == 56320 ? e.push(((1023 & n) << 10) + (1023 & i) + 65536) : (e.push(n), r--)
                    } else e.push(n)
                }
                return e
            }
            let l = function(t, e) {
                    return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
                },
                p = function(t, e, r) {
                    let i = 0;
                    for (t = r ? f(t / 700) : t >> 1, t += f(t / e); t > 26 * s >> 1; i += 36) t = f(t / s);
                    return f(i + (s + 1) * t / (t + 38))
                },
                b = function(t) {
                    let e = [],
                        r = t.length,
                        i = 0,
                        n = 128,
                        o = 72,
                        a = t.lastIndexOf("-");
                    a < 0 && (a = 0);
                    for (let r = 0; r < a; ++r) t.charCodeAt(r) >= 128 && c("not-basic"), e.push(t.charCodeAt(r));
                    for (let h = a > 0 ? a + 1 : 0; h < r;) {
                        let a = i;
                        for (let e = 1, n = 36;; n += 36) {
                            var s;
                            h >= r && c("invalid-input");
                            let a = (s = t.charCodeAt(h++)) - 48 < 10 ? s - 22 : s - 65 < 26 ? s - 65 : s - 97 < 26 ? s - 97 : 36;
                            (a >= 36 || a > f((2147483647 - i) / e)) && c("overflow"), i += a * e;
                            let u = n <= o ? 1 : n >= o + 26 ? 26 : n - o;
                            if (a < u) break;
                            let d = 36 - u;
                            e > f(2147483647 / d) && c("overflow"), e *= d
                        }
                        let u = e.length + 1;
                        o = p(i - a, u, 0 == a), f(i / u) > 2147483647 - n && c("overflow"), n += f(i / u), i %= u, e.splice(i++, 0, n)
                    }
                    return String.fromCodePoint(...e)
                },
                m = function(t) {
                    let e = [],
                        r = (t = d(t)).length,
                        i = 128,
                        n = 0,
                        o = 72;
                    for (let r of t) r < 128 && e.push(h(r));
                    let a = e.length,
                        s = a;
                    for (a && e.push("-"); s < r;) {
                        let r = 2147483647;
                        for (let e of t) e >= i && e < r && (r = e);
                        let u = s + 1;
                        for (let d of (r - i > f((2147483647 - n) / u) && c("overflow"), n += (r - i) * u, i = r, t))
                            if (d < i && ++n > 2147483647 && c("overflow"), d == i) {
                                let t = n;
                                for (let r = 36;; r += 36) {
                                    let i = r <= o ? 1 : r >= o + 26 ? 26 : r - o;
                                    if (t < i) break;
                                    let n = t - i,
                                        a = 36 - i;
                                    e.push(h(l(i + n % a, 0))), t = f(n / a)
                                }
                                e.push(h(l(t, 0))), o = p(n, u, s == a), n = 0, ++s
                            }++ n, ++i
                    }
                    return e.join("")
                };
            t.exports = {
                version: "2.1.0",
                ucs2: {
                    decode: d,
                    encode: t => String.fromCodePoint(...t)
                },
                decode: b,
                encode: m,
                toASCII: function(t) {
                    return u(t, function(t) {
                        return n.test(t) ? "xn--" + m(t) : t
                    })
                },
                toUnicode: function(t) {
                    return u(t, function(t) {
                        return i.test(t) ? b(t.slice(4).toLowerCase()) : t
                    })
                }
            }