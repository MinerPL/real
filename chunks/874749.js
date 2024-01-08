            "use strict";
            t = r.nmd(t), r("424973"), r("781738"), r("990131"), r("477657"), r("811875"), r("90301"), r("652153"), r("28797"), r("817884"), r("597349"), r("667536"), r("690341"), r("311790");
            var i, n, a, o, s, f = {
                cipher: {},
                hash: {},
                keyexchange: {},
                mode: {},
                misc: {},
                codec: {},
                exception: {
                    corrupt: function(t) {
                        this.toString = function() {
                            return "CORRUPT: " + this.message
                        }, this.message = t
                    },
                    invalid: function(t) {
                        this.toString = function() {
                            return "INVALID: " + this.message
                        }, this.message = t
                    },
                    bug: function(t) {
                        this.toString = function() {
                            return "BUG: " + this.message
                        }, this.message = t
                    },
                    notReady: function(t) {
                        this.toString = function() {
                            return "NOT READY: " + this.message
                        }, this.message = t
                    }
                }
            };

            function h(t, e, r) {
                if (4 !== e.length) throw new f.exception.invalid("invalid aes block size");
                var i = t.b[r],
                    n = e[0] ^ i[0],
                    a = e[r ? 3 : 1] ^ i[1],
                    o = e[2] ^ i[2];
                e = e[r ? 1 : 3] ^ i[3];
                var s, h, c, u, d = i.length / 4 - 2,
                    l = 4,
                    p = [0, 0, 0, 0];
                t = (s = t.s[r])[0];
                var b = s[1],
                    m = s[2],
                    g = s[3],
                    v = s[4];
                for (u = 0; u < d; u++) s = t[n >>> 24] ^ b[a >> 16 & 255] ^ m[o >> 8 & 255] ^ g[255 & e] ^ i[l], h = t[a >>> 24] ^ b[o >> 16 & 255] ^ m[e >> 8 & 255] ^ g[255 & n] ^ i[l + 1], c = t[o >>> 24] ^ b[e >> 16 & 255] ^ m[n >> 8 & 255] ^ g[255 & a] ^ i[l + 2], e = t[e >>> 24] ^ b[n >> 16 & 255] ^ m[a >> 8 & 255] ^ g[255 & o] ^ i[l + 3], l += 4, n = s, a = h, o = c;
                for (u = 0; 4 > u; u++) p[r ? 3 & -u : u] = v[n >>> 24] << 24 ^ v[a >> 16 & 255] << 16 ^ v[o >> 8 & 255] << 8 ^ v[255 & e] ^ i[l++], s = n, n = a, a = o, o = e, e = s;
                return p
            }

            function c(t, e) {
                var r, i, n, a = t.F,
                    o = t.b,
                    s = a[0],
                    f = a[1],
                    h = a[2],
                    c = a[3],
                    u = a[4],
                    d = a[5],
                    l = a[6],
                    p = a[7];
                for (r = 0; 64 > r; r++) 16 > r ? i = e[r] : (i = e[r + 1 & 15], n = e[r + 14 & 15], i = e[15 & r] = (i >>> 7 ^ i >>> 18 ^ i >>> 3 ^ i << 25 ^ i << 14) + (n >>> 17 ^ n >>> 19 ^ n >>> 10 ^ n << 15 ^ n << 13) + e[15 & r] + e[r + 9 & 15] | 0), i = i + p + (u >>> 6 ^ u >>> 11 ^ u >>> 25 ^ u << 26 ^ u << 21 ^ u << 7) + (l ^ u & (d ^ l)) + o[r], p = l, l = d, d = u, u = c + i | 0, c = h, h = f, s = i + ((f = s) & h ^ c & (f ^ h)) + (f >>> 2 ^ f >>> 13 ^ f >>> 22 ^ f << 30 ^ f << 19 ^ f << 10) | 0;
                a[0] = a[0] + s | 0, a[1] = a[1] + f | 0, a[2] = a[2] + h | 0, a[3] = a[3] + c | 0, a[4] = a[4] + u | 0, a[5] = a[5] + d | 0, a[6] = a[6] + l | 0, a[7] = a[7] + p | 0
            }

            function u(t, e) {
                var r, i = f.random.K[t],
                    n = [];
                for (r in i) i.hasOwnProperty(r) && n.push(i[r]);
                for (r = 0; r < n.length; r++) n[r](e)
            }

            function d(t, e) {
                "undefined" != typeof window && window.performance && "function" == typeof window.performance.now ? t.addEntropy(window.performance.now(), e, "loadtime") : t.addEntropy((new Date).valueOf(), e, "loadtime")
            }

            function l(t) {
                t.b = p(t).concat(p(t)), t.L = new f.cipher.aes(t.b)
            }

            function p(t) {
                for (var e = 0; 4 > e && (t.h[e] = t.h[e] + 1 | 0, !t.h[e]); e++);
                return t.L.encrypt(t.h)
            }

            function b(t, e) {
                return function() {
                    e.apply(t, arguments)
                }
            }
            f.cipher.aes = function(t) {
                this.s[0][0][0] || this.O();
                var e, r, i, n, a = this.s[0][4],
                    o = this.s[1];
                e = t.length;
                var s = 1;
                if (4 !== e && 6 !== e && 8 !== e) throw new f.exception.invalid("invalid aes key size");
                for (this.b = [i = t.slice(0), n = []], t = e; t < 4 * e + 28; t++) r = i[t - 1], (0 == t % e || 8 === e && 4 == t % e) && (r = a[r >>> 24] << 24 ^ a[r >> 16 & 255] << 16 ^ a[r >> 8 & 255] << 8 ^ a[255 & r], 0 == t % e && (r = r << 8 ^ r >>> 24 ^ s << 24, s = s << 1 ^ 283 * (s >> 7))), i[t] = i[t - e] ^ r;
                for (e = 0; t; e++, t--) r = i[3 & e ? t : t - 4], n[e] = 4 >= t || 4 > e ? r : o[0][a[r >>> 24]] ^ o[1][a[r >> 16 & 255]] ^ o[2][a[r >> 8 & 255]] ^ o[3][a[255 & r]]
            }, f.cipher.aes.prototype = {
                encrypt: function(t) {
                    return h(this, t, 0)
                },
                decrypt: function(t) {
                    return h(this, t, 1)
                },
                s: [
                    [
                        [],
                        [],
                        [],
                        [],
                        []
                    ],
                    [
                        [],
                        [],
                        [],
                        [],
                        []
                    ]
                ],
                O: function() {
                    var t, e, r, i, n, a, o, s = this.s[0],
                        f = this.s[1],
                        h = s[4],
                        c = f[4],
                        u = [],
                        d = [];
                    for (t = 0; 256 > t; t++) d[(u[t] = t << 1 ^ 283 * (t >> 7)) ^ t] = t;
                    for (e = r = 0; !h[e]; e ^= i || 1, r = d[r] || 1)
                        for (a = (a = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4) >> 8 ^ 255 & a ^ 99, h[e] = a, c[a] = e, o = 16843009 * (n = u[t = u[i = u[e]]]) ^ 65537 * t ^ 257 * i ^ 16843008 * e, n = 257 * u[a] ^ 16843008 * a, t = 0; 4 > t; t++) s[t][e] = n = n << 24 ^ n >>> 8, f[t][a] = o = o << 24 ^ o >>> 8;
                    for (t = 0; 5 > t; t++) s[t] = s[t].slice(0), f[t] = f[t].slice(0)
                }
            }, f.bitArray = {
                bitSlice: function(t, e, r) {
                    return t = f.bitArray.$(t.slice(e / 32), 32 - (31 & e)).slice(1), void 0 === r ? t : f.bitArray.clamp(t, r - e)
                },
                extract: function(t, e, r) {
                    var i = Math.floor(-e - r & 31);
                    return ((e + r - 1 ^ e) & -32 ? t[e / 32 | 0] << 32 - i ^ t[e / 32 + 1 | 0] >>> i : t[e / 32 | 0] >>> i) & (1 << r) - 1
                },
                concat: function(t, e) {
                    if (0 === t.length || 0 === e.length) return t.concat(e);
                    var r = t[t.length - 1],
                        i = f.bitArray.getPartial(r);
                    return 32 === i ? t.concat(e) : f.bitArray.$(e, i, 0 | r, t.slice(0, t.length - 1))
                },
                bitLength: function(t) {
                    var e = t.length;
                    return 0 === e ? 0 : 32 * (e - 1) + f.bitArray.getPartial(t[e - 1])
                },
                clamp: function(t, e) {
                    if (32 * t.length < e) return t;
                    var r = (t = t.slice(0, Math.ceil(e / 32))).length;
                    return e &= 31, 0 < r && e && (t[r - 1] = f.bitArray.partial(e, t[r - 1] & 2147483648 >> e - 1, 1)), t
                },
                partial: function(t, e, r) {
                    return 32 === t ? e : (r ? 0 | e : e << 32 - t) + 1099511627776 * t
                },
                getPartial: function(t) {
                    return Math.round(t / 1099511627776) || 32
                },
                equal: function(t, e) {
                    if (f.bitArray.bitLength(t) !== f.bitArray.bitLength(e)) return !1;
                    var r, i = 0;
                    for (r = 0; r < t.length; r++) i |= t[r] ^ e[r];
                    return 0 === i
                },
                $: function(t, e, r, i) {
                    var n;
                    for (n = 0, void 0 === i && (i = []); 32 <= e; e -= 32) i.push(r), r = 0;
                    if (0 === e) return i.concat(t);
                    for (n = 0; n < t.length; n++) i.push(r | t[n] >>> e), r = t[n] << 32 - e;
                    return n = t.length ? t[t.length - 1] : 0, t = f.bitArray.getPartial(n), i.push(f.bitArray.partial(e + t & 31, 32 < e + t ? r : i.pop(), 1)), i
                },
                i: function(t, e) {
                    return [t[0] ^ e[0], t[1] ^ e[1], t[2] ^ e[2], t[3] ^ e[3]]
                },
                byteswapM: function(t) {
                    var e, r;
                    for (e = 0; e < t.length; ++e) r = t[e], t[e] = r >>> 24 | r >>> 8 & 65280 | (65280 & r) << 8 | r << 24;
                    return t
                }
            }, f.codec.utf8String = {
                fromBits: function(t) {
                    var e, r, i = "",
                        n = f.bitArray.bitLength(t);
                    for (e = 0; e < n / 8; e++) 0 == (3 & e) && (r = t[e / 4]), i += String.fromCharCode(r >>> 8 >>> 8 >>> 8), r <<= 8;
                    return decodeURIComponent(escape(i))
                },
                toBits: function(t) {
                    t = unescape(encodeURIComponent(t));
                    var e, r = [],
                        i = 0;
                    for (e = 0; e < t.length; e++) i = i << 8 | t.charCodeAt(e), 3 == (3 & e) && (r.push(i), i = 0);
                    return 3 & e && r.push(f.bitArray.partial(8 * (3 & e), i)), r
                }
            }, f.codec.hex = {
                fromBits: function(t) {
                    var e, r = "";
                    for (e = 0; e < t.length; e++) r += ((0 | t[e]) + 0xf00000000000).toString(16).substr(4);
                    return r.substr(0, f.bitArray.bitLength(t) / 4)
                },
                toBits: function(t) {
                    var e, r, i = [];
                    for (r = (t = t.replace(/\s|0x/g, "")).length, t += "00000000", e = 0; e < t.length; e += 8) i.push(0 ^ parseInt(t.substr(e, 8), 16));
                    return f.bitArray.clamp(i, 4 * r)
                }
            }, f.codec.base32 = {
                B: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                X: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                BITS: 32,
                BASE: 5,
                REMAINING: 27,
                fromBits: function(t, e, r) {
                    var i = f.codec.base32.BASE,
                        n = f.codec.base32.REMAINING,
                        a = "",
                        o = 0,
                        s = f.codec.base32.B,
                        h = 0,
                        c = f.bitArray.bitLength(t);
                    for (r && (s = f.codec.base32.X), r = 0; a.length * i < c;) a += s.charAt((h ^ t[r] >>> o) >>> n), o < i ? (h = t[r] << i - o, o += n, r++) : (h <<= i, o -= i);
                    for (; 7 & a.length && !e;) a += "=";
                    return a
                },
                toBits: function(t, e) {
                    t = t.replace(/\s|=/g, "").toUpperCase();
                    var r, i, n = f.codec.base32.BITS,
                        a = f.codec.base32.BASE,
                        o = f.codec.base32.REMAINING,
                        s = [],
                        h = 0,
                        c = f.codec.base32.B,
                        u = 0,
                        d = "base32";
                    for (e && (c = f.codec.base32.X, d = "base32hex"), r = 0; r < t.length; r++) {
                        if (0 > (i = c.indexOf(t.charAt(r)))) {
                            if (!e) try {
                                return f.codec.base32hex.toBits(t)
                            } catch (t) {}
                            throw new f.exception.invalid("this isn't " + d + "!")
                        }
                        h > o ? (h -= o, s.push(u ^ i >>> h), u = i << n - h) : (h += a, u ^= i << n - h)
                    }
                    return 56 & h && s.push(f.bitArray.partial(56 & h, u, 1)), s
                }
            }, f.codec.base32hex = {
                fromBits: function(t, e) {
                    return f.codec.base32.fromBits(t, e, 1)
                },
                toBits: function(t) {
                    return f.codec.base32.toBits(t, 1)
                }
            }, f.codec.base64 = {
                B: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                fromBits: function(t, e, r) {
                    var i = "",
                        n = 0,
                        a = f.codec.base64.B,
                        o = 0,
                        s = f.bitArray.bitLength(t);
                    for (r && (a = a.substr(0, 62) + "-_"), r = 0; 6 * i.length < s;) i += a.charAt((o ^ t[r] >>> n) >>> 26), 6 > n ? (o = t[r] << 6 - n, n += 26, r++) : (o <<= 6, n -= 6);
                    for (; 3 & i.length && !e;) i += "=";
                    return i
                },
                toBits: function(t, e) {
                    t = t.replace(/\s|=/g, "");
                    var r, i, n = [],
                        a = 0,
                        o = f.codec.base64.B,
                        s = 0;
                    for (e && (o = o.substr(0, 62) + "-_"), r = 0; r < t.length; r++) {
                        if (0 > (i = o.indexOf(t.charAt(r)))) throw new f.exception.invalid("this isn't base64!");
                        26 < a ? (a -= 26, n.push(s ^ i >>> a), s = i << 32 - a) : (a += 6, s ^= i << 32 - a)
                    }
                    return 56 & a && n.push(f.bitArray.partial(56 & a, s, 1)), n
                }
            }, f.codec.base64url = {
                fromBits: function(t) {
                    return f.codec.base64.fromBits(t, 1, 1)
                },
                toBits: function(t) {
                    return f.codec.base64.toBits(t, 1)
                }
            }, f.hash.sha256 = function(t) {
                this.b[0] || this.O(), t ? (this.F = t.F.slice(0), this.A = t.A.slice(0), this.l = t.l) : this.reset()
            }, f.hash.sha256.hash = function(t) {
                return (new f.hash.sha256).update(t).finalize()
            }, f.hash.sha256.prototype = {
                blockSize: 512,
                reset: function() {
                    return this.F = this.Y.slice(0), this.A = [], this.l = 0, this
                },
                update: function(t) {
                    "string" == typeof t && (t = f.codec.utf8String.toBits(t));
                    var e, r = this.A = f.bitArray.concat(this.A, t);
                    if (e = this.l, 9007199254740991 < (t = this.l = e + f.bitArray.bitLength(t))) throw new f.exception.invalid("Cannot hash more than 2^53 - 1 bits");
                    if ("undefined" != typeof Uint32Array) {
                        var i = new Uint32Array(r),
                            n = 0;
                        for (e = 512 + e - (512 + e & 511); e <= t; e += 512) c(this, i.subarray(16 * n, 16 * (n + 1))), n += 1;
                        r.splice(0, 16 * n)
                    } else
                        for (e = 512 + e - (512 + e & 511); e <= t; e += 512) c(this, r.splice(0, 16));
                    return this
                },
                finalize: function() {
                    var t, e = this.A,
                        r = this.F,
                        e = f.bitArray.concat(e, [f.bitArray.partial(1, 1)]);
                    for (t = e.length + 2; 15 & t; t++) e.push(0);
                    for (e.push(Math.floor(this.l / 4294967296)), e.push(0 | this.l); e.length;) c(this, e.splice(0, 16));
                    return this.reset(), r
                },
                Y: [],
                b: [],
                O: function() {
                    function t(t) {
                        return 4294967296 * (t - Math.floor(t)) | 0
                    }
                    for (var e, r, i = 0, n = 2; 64 > i; n++) {
                        for (e = 2, r = !0; e * e <= n; e++)
                            if (0 == n % e) {
                                r = !1;
                                break
                            } r && (8 > i && (this.Y[i] = t(Math.pow(n, .5))), this.b[i] = t(Math.pow(n, 1 / 3)), i++)
                    }
                }
            }, f.mode.ccm = {
                name: "ccm",
                G: [],
                listenProgress: function(t) {
                    f.mode.ccm.G.push(t)
                },
                unListenProgress: function(t) {
                    -1 < (t = f.mode.ccm.G.indexOf(t)) && f.mode.ccm.G.splice(t, 1)
                },
                fa: function(t) {
                    var e, r = f.mode.ccm.G.slice();
                    for (e = 0; e < r.length; e += 1) r[e](t)
                },
                encrypt: function(t, e, r, i, n) {
                    var a, o = e.slice(0),
                        s = f.bitArray,
                        h = s.bitLength(r) / 8,
                        c = s.bitLength(o) / 8;
                    if (n = n || 64, i = i || [], 7 > h) throw new f.exception.invalid("ccm: iv must be at least 7 bytes");
                    for (a = 2; 4 > a && c >>> 8 * a; a++);
                    return a < 15 - h && (a = 15 - h), r = s.clamp(r, 8 * (15 - a)), e = f.mode.ccm.V(t, e, r, i, n, a), o = f.mode.ccm.C(t, o, r, e, n, a), s.concat(o.data, o.tag)
                },
                decrypt: function(t, e, r, i, n) {
                    n = n || 64, i = i || [];
                    var a = f.bitArray,
                        o = a.bitLength(r) / 8,
                        s = a.bitLength(e),
                        h = a.clamp(e, s - n),
                        c = a.bitSlice(e, s - n),
                        s = (s - n) / 8;
                    if (7 > o) throw new f.exception.invalid("ccm: iv must be at least 7 bytes");
                    for (e = 2; 4 > e && s >>> 8 * e; e++);
                    if (e < 15 - o && (e = 15 - o), r = a.clamp(r, 8 * (15 - e)), h = f.mode.ccm.C(t, h, r, c, n, e), t = f.mode.ccm.V(t, h.data, r, i, n, e), !a.equal(h.tag, t)) throw new f.exception.corrupt("ccm: tag doesn't match");
                    return h.data
                },
                na: function(t, e, r, i, n, a) {
                    var o = [],
                        s = f.bitArray,
                        h = s.i;
                    if (i = [s.partial(8, (e.length ? 64 : 0) | i - 2 << 2 | a - 1)], i = s.concat(i, r), i[3] |= n, i = t.encrypt(i), e.length)
                        for (65279 >= (r = s.bitLength(e) / 8) ? o = [s.partial(16, r)] : 4294967295 >= r && (o = s.concat([s.partial(16, 65534)], [r])), o = s.concat(o, e), e = 0; e < o.length; e += 4) i = t.encrypt(h(i, o.slice(e, e + 4).concat([0, 0, 0])));
                    return i
                },
                V: function(t, e, r, i, n, a) {
                    var o = f.bitArray,
                        s = o.i;
                    if ((n /= 8) % 2 || 4 > n || 16 < n) throw new f.exception.invalid("ccm: invalid tag length");
                    if (4294967295 < i.length || 4294967295 < e.length) throw new f.exception.bug("ccm: can't deal with 4GiB or more data");
                    for (r = f.mode.ccm.na(t, i, r, n, o.bitLength(e) / 8, a), i = 0; i < e.length; i += 4) r = t.encrypt(s(r, e.slice(i, i + 4).concat([0, 0, 0])));
                    return o.clamp(r, 8 * n)
                },
                C: function(t, e, r, i, n, a) {
                    var o, s = f.bitArray;
                    o = s.i;
                    var h = e.length,
                        c = s.bitLength(e),
                        u = h / 50,
                        d = u;
                    if (r = s.concat([s.partial(8, a - 1)], r).concat([0, 0, 0]).slice(0, 4), i = s.bitSlice(o(i, t.encrypt(r)), 0, n), !h) return {
                        tag: i,
                        data: []
                    };
                    for (o = 0; o < h; o += 4) o > u && (f.mode.ccm.fa(o / h), u += d), r[3]++, n = t.encrypt(r), e[o] ^= n[0], e[o + 1] ^= n[1], e[o + 2] ^= n[2], e[o + 3] ^= n[3];
                    return {
                        tag: i,
                        data: s.clamp(e, c)
                    }
                }
            }, f.mode.ocb2 = {
                name: "ocb2",
                encrypt: function(t, e, r, i, n, a) {
                    if (128 !== f.bitArray.bitLength(r)) throw new f.exception.invalid("ocb iv must be 128 bits");
                    var o, s = f.mode.ocb2.S,
                        h = f.bitArray,
                        c = h.i,
                        u = [0, 0, 0, 0];
                    r = s(t.encrypt(r));
                    var d, l = [];
                    for (o = 0, i = i || [], n = n || 64; o + 4 < e.length; o += 4) u = c(u, d = e.slice(o, o + 4)), l = l.concat(c(r, t.encrypt(c(r, d)))), r = s(r);
                    return d = e.slice(o), e = h.bitLength(d), o = t.encrypt(c(r, [0, 0, 0, e])), d = h.clamp(c(d.concat([0, 0, 0]), o), e), u = c(u, c(d.concat([0, 0, 0]), o)), u = t.encrypt(c(u, c(r, s(r)))), i.length && (u = c(u, a ? i : f.mode.ocb2.pmac(t, i))), l.concat(h.concat(d, h.clamp(u, n)))
                },
                decrypt: function(t, e, r, i, n, a) {
                    if (128 !== f.bitArray.bitLength(r)) throw new f.exception.invalid("ocb iv must be 128 bits");
                    n = n || 64;
                    var o, s, h = f.mode.ocb2.S,
                        c = f.bitArray,
                        u = c.i,
                        d = [0, 0, 0, 0],
                        l = h(t.encrypt(r)),
                        p = f.bitArray.bitLength(e) - n,
                        b = [];
                    for (r = 0, i = i || []; r + 4 < p / 32; r += 4) o = u(l, t.decrypt(u(l, e.slice(r, r + 4)))), d = u(d, o), b = b.concat(o), l = h(l);
                    if (s = p - 32 * r, o = t.encrypt(u(l, [0, 0, 0, s])), o = u(o, c.clamp(e.slice(r), s).concat([0, 0, 0])), d = u(d, o), d = t.encrypt(u(d, u(l, h(l)))), i.length && (d = u(d, a ? i : f.mode.ocb2.pmac(t, i))), !c.equal(c.clamp(d, n), c.bitSlice(e, p))) throw new f.exception.corrupt("ocb: tag doesn't match");
                    return b.concat(c.clamp(o, s))
                },
                pmac: function(t, e) {
                    var r, i = f.mode.ocb2.S,
                        n = f.bitArray,
                        a = n.i,
                        o = [0, 0, 0, 0],
                        s = t.encrypt([0, 0, 0, 0]),
                        s = a(s, i(i(s)));
                    for (r = 0; r + 4 < e.length; r += 4) s = i(s), o = a(o, t.encrypt(a(s, e.slice(r, r + 4))));
                    return r = e.slice(r), 128 > n.bitLength(r) && (s = a(s, i(s)), r = n.concat(r, [-2147483648, 0, 0, 0])), o = a(o, r), t.encrypt(a(i(a(s, i(s))), o))
                },
                S: function(t) {
                    return [t[0] << 1 ^ t[1] >>> 31, t[1] << 1 ^ t[2] >>> 31, t[2] << 1 ^ t[3] >>> 31, t[3] << 1 ^ 135 * (t[0] >>> 31)]
                }
            }, f.mode.gcm = {
                name: "gcm",
                encrypt: function(t, e, r, i, n) {
                    var a = e.slice(0);
                    return e = f.bitArray, i = i || [], t = f.mode.gcm.C(!0, t, a, i, r, n || 128), e.concat(t.data, t.tag)
                },
                decrypt: function(t, e, r, i, n) {
                    var a = e.slice(0),
                        o = f.bitArray,
                        s = o.bitLength(a);
                    if (i = i || [], (n = n || 128) <= s ? (e = o.bitSlice(a, s - n), a = o.bitSlice(a, 0, s - n)) : (e = a, a = []), t = f.mode.gcm.C(!1, t, a, i, r, n), !o.equal(t.tag, e)) throw new f.exception.corrupt("gcm: tag doesn't match");
                    return t.data
                },
                ka: function(t, e) {
                    var r, i, n, a, o, s = f.bitArray.i;
                    for (r = 0, n = [0, 0, 0, 0], a = e.slice(0); 128 > r; r++) {
                        for ((i = 0 != (t[Math.floor(r / 32)] & 1 << 31 - r % 32)) && (n = s(n, a)), o = 0 != (1 & a[3]), i = 3; 0 < i; i--) a[i] = a[i] >>> 1 | (1 & a[i - 1]) << 31;
                        a[0] >>>= 1, o && (a[0] ^= -520093696)
                    }
                    return n
                },
                j: function(t, e, r) {
                    var i, n = r.length;
                    for (i = 0, e = e.slice(0); i < n; i += 4) e[0] ^= 4294967295 & r[i], e[1] ^= 4294967295 & r[i + 1], e[2] ^= 4294967295 & r[i + 2], e[3] ^= 4294967295 & r[i + 3], e = f.mode.gcm.ka(e, t);
                    return e
                },
                C: function(t, e, r, i, n, a) {
                    var o, s, h, c, u, d, l, p, b = f.bitArray;
                    for (d = r.length, l = b.bitLength(r), p = b.bitLength(i), s = b.bitLength(n), o = e.encrypt([0, 0, 0, 0]), 96 === s ? (n = n.slice(0), n = b.concat(n, [1])) : (n = f.mode.gcm.j(o, [0, 0, 0, 0], n), n = f.mode.gcm.j(o, n, [0, 0, Math.floor(s / 4294967296), 4294967295 & s])), s = f.mode.gcm.j(o, [0, 0, 0, 0], i), u = n.slice(0), i = s.slice(0), t || (i = f.mode.gcm.j(o, s, r)), c = 0; c < d; c += 4) u[3]++, h = e.encrypt(u), r[c] ^= h[0], r[c + 1] ^= h[1], r[c + 2] ^= h[2], r[c + 3] ^= h[3];
                    return r = b.clamp(r, l), t && (i = f.mode.gcm.j(o, s, r)), t = [Math.floor(p / 4294967296), 4294967295 & p, Math.floor(l / 4294967296), 4294967295 & l], i = f.mode.gcm.j(o, i, t), h = e.encrypt(n), i[0] ^= h[0], i[1] ^= h[1], i[2] ^= h[2], i[3] ^= h[3], {
                        tag: b.bitSlice(i, 0, a),
                        data: r
                    }
                }
            }, f.misc.hmac = function(t, e) {
                this.W = e = e || f.hash.sha256;
                var r, i = [
                        [],
                        []
                    ],
                    n = e.prototype.blockSize / 32;
                for (this.w = [new e, new e], t.length > n && (t = e.hash(t)), r = 0; r < n; r++) i[0][r] = 909522486 ^ t[r], i[1][r] = 1549556828 ^ t[r];
                this.w[0].update(i[0]), this.w[1].update(i[1]), this.R = new e(this.w[0])
            }, f.misc.hmac.prototype.encrypt = f.misc.hmac.prototype.mac = function(t) {
                if (this.aa) throw new f.exception.invalid("encrypt on already updated hmac called!");
                return this.update(t), this.digest(t)
            }, f.misc.hmac.prototype.reset = function() {
                this.R = new this.W(this.w[0]), this.aa = !1
            }, f.misc.hmac.prototype.update = function(t) {
                this.aa = !0, this.R.update(t)
            }, f.misc.hmac.prototype.digest = function() {
                var t = this.R.finalize(),
                    t = new this.W(this.w[1]).update(t).finalize();
                return this.reset(), t
            }, f.misc.pbkdf2 = function(t, e, r, i, n) {
                if (r = r || 1e4, 0 > i || 0 > r) throw new f.exception.invalid("invalid params to pbkdf2");
                "string" == typeof t && (t = f.codec.utf8String.toBits(t)), "string" == typeof e && (e = f.codec.utf8String.toBits(e)), t = new(n = n || f.misc.hmac)(t);
                var a, o, s, h, c = [],
                    u = f.bitArray;
                for (h = 1; 32 * c.length < (i || 1); h++) {
                    for (o = 1, n = a = t.encrypt(u.concat(e, [h])); o < r; o++)
                        for (a = t.encrypt(a), s = 0; s < a.length; s++) n[s] ^= a[s];
                    c = c.concat(n)
                }
                return i && (c = u.clamp(c, i)), c
            }, f.prng = function(t) {
                this.c = [new f.hash.sha256], this.m = [0], this.P = 0, this.H = {}, this.N = 0, this.U = {}, this.Z = this.f = this.o = this.ha = 0, this.b = [0, 0, 0, 0, 0, 0, 0, 0], this.h = [0, 0, 0, 0], this.L = void 0, this.M = t, this.D = !1, this.K = {
                    progress: {},
                    seeded: {}
                }, this.u = this.ga = 0, this.I = 1, this.J = 2, this.ca = 65536, this.T = [0, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024], this.da = 3e4, this.ba = 80
            }, f.prng.prototype = {
                randomWords: function(t, e) {
                    var r, i = [];
                    if ((r = this.isReady(e)) === this.u) throw new f.exception.notReady("generator isn't seeded");
                    if (r & this.J) {
                        r = !(r & this.I), n = [];
                        var n, a, o = 0;
                        for (a = 0, this.Z = n[0] = (new Date).valueOf() + this.da; 16 > a; a++) n.push(4294967296 * Math.random() | 0);
                        for (a = 0; a < this.c.length && (n = n.concat(this.c[a].finalize()), o += this.m[a], this.m[a] = 0, r || !(this.P & 1 << a)); a++);
                        for (this.P >= 1 << this.c.length && (this.c.push(new f.hash.sha256), this.m.push(0)), this.f -= o, o > this.o && (this.o = o), this.P++, this.b = f.hash.sha256.hash(this.b.concat(n)), this.L = new f.cipher.aes(this.b), r = 0; 4 > r && (this.h[r] = this.h[r] + 1 | 0, !this.h[r]); r++);
                    }
                    for (r = 0; r < t; r += 4) 0 == (r + 1) % this.ca && l(this), i.push((n = p(this))[0], n[1], n[2], n[3]);
                    return l(this), i.slice(0, t)
                },
                setDefaultParanoia: function(t, e) {
                    if (0 === t && "Setting paranoia=0 will ruin your security; use it only for testing" !== e) throw new f.exception.invalid("Setting paranoia=0 will ruin your security; use it only for testing");
                    this.M = t
                },
                addEntropy: function(t, e, r) {
                    r = r || "user";
                    var i, n, a = (new Date).valueOf(),
                        o = this.H[r],
                        s = this.isReady(),
                        h = 0;
                    switch (void 0 === (i = this.U[r]) && (i = this.U[r] = this.ha++), void 0 === o && (o = this.H[r] = 0), this.H[r] = (this.H[r] + 1) % this.c.length, typeof t) {
                        case "number":
                            void 0 === e && (e = 1), this.c[o].update([i, this.N++, 1, e, a, 1, 0 | t]);
                            break;
                        case "object":
                            if ("[object Uint32Array]" === (r = Object.prototype.toString.call(t))) {
                                for (r = 0, n = []; r < t.length; r++) n.push(t[r]);
                                t = n
                            } else
                                for ("[object Array]" !== r && (h = 1), r = 0; r < t.length && !h; r++) "number" != typeof t[r] && (h = 1);
                            if (!h) {
                                if (void 0 === e)
                                    for (r = e = 0; r < t.length; r++)
                                        for (n = t[r]; 0 < n;) e++, n >>>= 1;
                                this.c[o].update([i, this.N++, 2, e, a, t.length].concat(t))
                            }
                            break;
                        case "string":
                            void 0 === e && (e = t.length), this.c[o].update([i, this.N++, 3, e, a, t.length]), this.c[o].update(t);
                            break;
                        default:
                            h = 1
                    }
                    if (h) throw new f.exception.bug("random: addEntropy only supports number, array of numbers or string");
                    this.m[o] += e, this.f += e, s === this.u && (this.isReady() !== this.u && u("seeded", Math.max(this.o, this.f)), u("progress", this.getProgress()))
                },
                isReady: function(t) {
                    return t = this.T[void 0 !== t ? t : this.M], this.o && this.o >= t ? this.m[0] > this.ba && (new Date).valueOf() > this.Z ? this.J | this.I : this.I : this.f >= t ? this.J | this.u : this.u
                },
                getProgress: function(t) {
                    return t = this.T[t || this.M], this.o >= t ? 1 : this.f > t ? 1 : this.f / t
                },
                startCollectors: function() {
                    if (!this.D) {
                        if (this.a = {
                                loadTimeCollector: b(this, this.ma),
                                mouseCollector: b(this, this.oa),
                                keyboardCollector: b(this, this.la),
                                accelerometerCollector: b(this, this.ea),
                                touchCollector: b(this, this.qa)
                            }, window.addEventListener) window.addEventListener("load", this.a.loadTimeCollector, !1), window.addEventListener("mousemove", this.a.mouseCollector, !1), window.addEventListener("keypress", this.a.keyboardCollector, !1), window.addEventListener("devicemotion", this.a.accelerometerCollector, !1), window.addEventListener("touchmove", this.a.touchCollector, !1);
                        else if (document.attachEvent) document.attachEvent("onload", this.a.loadTimeCollector), document.attachEvent("onmousemove", this.a.mouseCollector), document.attachEvent("keypress", this.a.keyboardCollector);
                        else throw new f.exception.bug("can't attach event");
                        this.D = !0
                    }
                },
                stopCollectors: function() {
                    this.D && (window.removeEventListener ? (window.removeEventListener("load", this.a.loadTimeCollector, !1), window.removeEventListener("mousemove", this.a.mouseCollector, !1), window.removeEventListener("keypress", this.a.keyboardCollector, !1), window.removeEventListener("devicemotion", this.a.accelerometerCollector, !1), window.removeEventListener("touchmove", this.a.touchCollector, !1)) : document.detachEvent && (document.detachEvent("onload", this.a.loadTimeCollector), document.detachEvent("onmousemove", this.a.mouseCollector), document.detachEvent("keypress", this.a.keyboardCollector)), this.D = !1)
                },
                addEventListener: function(t, e) {
                    this.K[t][this.ga++] = e
                },
                removeEventListener: function(t, e) {
                    var r, i, n = this.K[t],
                        a = [];
                    for (i in n) n.hasOwnProperty(i) && n[i] === e && a.push(i);
                    for (r = 0; r < a.length; r++) i = a[r], delete n[i]
                },
                la: function() {
                    d(this, 1)
                },
                oa: function(t) {
                    var e, r;
                    try {
                        e = t.x || t.clientX || t.offsetX || 0, r = t.y || t.clientY || t.offsetY || 0
                    } catch (t) {
                        r = e = 0
                    }
                    0 != e && 0 != r && this.addEntropy([e, r], 2, "mouse"), d(this, 0)
                },
                qa: function(t) {
                    t = t.touches[0] || t.changedTouches[0], this.addEntropy([t.pageX || t.clientX, t.pageY || t.clientY], 1, "touch"), d(this, 0)
                },
                ma: function() {
                    d(this, 2)
                },
                ea: function(t) {
                    if (t = t.accelerationIncludingGravity.x || t.accelerationIncludingGravity.y || t.accelerationIncludingGravity.z, window.orientation) {
                        var e = window.orientation;
                        "number" == typeof e && this.addEntropy(e, 1, "accelerometer")
                    }
                    t && this.addEntropy(t, 2, "accelerometer"), d(this, 0)
                }
            }, f.random = new f.prng(6);
            i: try {
                if (o = void 0 !== t && t.exports) {
                    try {
                        s = r("919886")
                    } catch (t) {
                        s = null
                    }
                    o = n = s
                }
                if (o && n.randomBytes) i = n.randomBytes(128), i = new Uint32Array(new Uint8Array(i).buffer), f.random.addEntropy(i, 1024, "crypto['randomBytes']");
                else if ("undefined" != typeof window && "undefined" != typeof Uint32Array) {
                    if (a = new Uint32Array(32), window.crypto && window.crypto.getRandomValues) window.crypto.getRandomValues(a);
                    else if (window.msCrypto && window.msCrypto.getRandomValues) window.msCrypto.getRandomValues(a);
                    else break i;
                    f.random.addEntropy(a, 1024, "crypto['getRandomValues']")
                }
            } catch (t) {
                "undefined" != typeof window && window.console && (console.log("There was an error collecting entropy from the browser:"), console.log(t))
            }
            f.json = {
                defaults: {
                    v: 1,
                    iter: 1e4,
                    ks: 128,
                    ts: 64,
                    mode: "ccm",
                    adata: "",
                    cipher: "aes"
                },
                ja: function(t, e, r, i) {
                    r = r || {}, i = i || {};
                    var n, a = f.json,
                        o = a.g({
                            iv: f.random.randomWords(4, 0)
                        }, a.defaults);
                    if (a.g(o, r), r = o.adata, "string" == typeof o.salt && (o.salt = f.codec.base64.toBits(o.salt)), "string" == typeof o.iv && (o.iv = f.codec.base64.toBits(o.iv)), !f.mode[o.mode] || !f.cipher[o.cipher] || "string" == typeof t && 100 >= o.iter || 64 !== o.ts && 96 !== o.ts && 128 !== o.ts || 128 !== o.ks && 192 !== o.ks && 256 !== o.ks || 2 > o.iv.length || 4 < o.iv.length) throw new f.exception.invalid("json encrypt: invalid parameters");
                    return "string" == typeof t ? (t = (n = f.misc.cachedPbkdf2(t, o)).key.slice(0, o.ks / 32), o.salt = n.salt) : f.ecc && t instanceof f.ecc.elGamal.publicKey && (n = t.kem(), o.kemtag = n.tag, t = n.key.slice(0, o.ks / 32)), "string" == typeof e && (e = f.codec.utf8String.toBits(e)), "string" == typeof r && (o.adata = r = f.codec.utf8String.toBits(r)), n = new f.cipher[o.cipher](t), a.g(i, o), i.key = t, o.ct = "ccm" === o.mode && f.arrayBuffer && f.arrayBuffer.ccm && e instanceof ArrayBuffer ? f.arrayBuffer.ccm.encrypt(n, e, o.iv, r, o.ts) : f.mode[o.mode].encrypt(n, e, o.iv, r, o.ts), o
                },
                encrypt: function(t, e, r, i) {
                    var n = f.json,
                        a = n.ja.apply(n, arguments);
                    return n.encode(a)
                },
                ia: function(t, e, r, i) {
                    r = r || {}, i = i || {};
                    var n, a, o = f.json;
                    if (n = (e = o.g(o.g(o.g({}, o.defaults), e), r, !0)).adata, "string" == typeof e.salt && (e.salt = f.codec.base64.toBits(e.salt)), "string" == typeof e.iv && (e.iv = f.codec.base64.toBits(e.iv)), !f.mode[e.mode] || !f.cipher[e.cipher] || "string" == typeof t && 100 >= e.iter || 64 !== e.ts && 96 !== e.ts && 128 !== e.ts || 128 !== e.ks && 192 !== e.ks && 256 !== e.ks || !e.iv || 2 > e.iv.length || 4 < e.iv.length) throw new f.exception.invalid("json decrypt: invalid parameters");
                    return "string" == typeof t ? (t = (a = f.misc.cachedPbkdf2(t, e)).key.slice(0, e.ks / 32), e.salt = a.salt) : f.ecc && t instanceof f.ecc.elGamal.secretKey && (t = t.unkem(f.codec.base64.toBits(e.kemtag)).slice(0, e.ks / 32)), "string" == typeof n && (n = f.codec.utf8String.toBits(n)), a = new f.cipher[e.cipher](t), n = "ccm" === e.mode && f.arrayBuffer && f.arrayBuffer.ccm && e.ct instanceof ArrayBuffer ? f.arrayBuffer.ccm.decrypt(a, e.ct, e.iv, e.tag, n, e.ts) : f.mode[e.mode].decrypt(a, e.ct, e.iv, n, e.ts), o.g(i, e), i.key = t, 1 === r.raw ? n : f.codec.utf8String.fromBits(n)
                },
                decrypt: function(t, e, r, i) {
                    var n = f.json;
                    return n.ia(t, n.decode(e), r, i)
                },
                encode: function(t) {
                    var e, r = "{",
                        i = "";
                    for (e in t)
                        if (t.hasOwnProperty(e)) {
                            if (!e.match(/^[a-z0-9]+$/i)) throw new f.exception.invalid("json encode: invalid property name");
                            switch (r += i + '"' + e + '":', i = ",", typeof t[e]) {
                                case "number":
                                case "boolean":
                                    r += t[e];
                                    break;
                                case "string":
                                    r += '"' + escape(t[e]) + '"';
                                    break;
                                case "object":
                                    r += '"' + f.codec.base64.fromBits(t[e], 0) + '"';
                                    break;
                                default:
                                    throw new f.exception.bug("json encode: unsupported type")
                            }
                        } return r + "}"
                },
                decode: function(t) {
                    if (!(t = t.replace(/\s/g, "")).match(/^\{.*\}$/)) throw new f.exception.invalid("json decode: this isn't json!");
                    t = t.replace(/^\{|\}$/g, "").split(/,/);
                    var e, r, i = {};
                    for (e = 0; e < t.length; e++) {
                        if (!(r = t[e].match(/^\s*(?:(["']?)([a-z][a-z0-9]*)\1)\s*:\s*(?:(-?\d+)|"([a-z0-9+\/%*_.@=\-]*)"|(true|false))$/i))) throw new f.exception.invalid("json decode: this isn't json!");
                        null != r[3] ? i[r[2]] = parseInt(r[3], 10) : null != r[4] ? i[r[2]] = r[2].match(/^(ct|adata|salt|iv)$/) ? f.codec.base64.toBits(r[4]) : unescape(r[4]) : null != r[5] && (i[r[2]] = "true" === r[5])
                    }
                    return i
                },
                g: function(t, e, r) {
                    if (void 0 === t && (t = {}), void 0 === e) return t;
                    for (var i in e)
                        if (e.hasOwnProperty(i)) {
                            if (r && void 0 !== t[i] && t[i] !== e[i]) throw new f.exception.invalid("required parameter overridden");
                            t[i] = e[i]
                        } return t
                },
                sa: function(t, e) {
                    var r, i = {};
                    for (r in t) t.hasOwnProperty(r) && t[r] !== e[r] && (i[r] = t[r]);
                    return i
                },
                ra: function(t, e) {
                    var r, i = {};
                    for (r = 0; r < e.length; r++) void 0 !== t[e[r]] && (i[e[r]] = t[e[r]]);
                    return i
                }
            }, f.encrypt = f.json.encrypt, f.decrypt = f.json.decrypt, f.misc.pa = {}, f.misc.cachedPbkdf2 = function(t, e) {
                var r, i = f.misc.pa;
                return r = (e = e || {}).iter || 1e3, r = (i = i[t] = i[t] || {})[r] = i[r] || {
                    firstSalt: e.salt && e.salt.length ? e.salt.slice(0) : f.random.randomWords(2, 0)
                }, i = void 0 === e.salt ? r.firstSalt : e.salt, r[i] = r[i] || f.misc.pbkdf2(t, i, e.iter), {
                    key: r[i].slice(0),
                    salt: i.slice(0)
                }
            }, void 0 !== t && t.exports && (t.exports = f), "function" == typeof define && define([], function() {
                return f
            })