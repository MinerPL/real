            t = s.nmd(t), s("70102"), s("781738"), s("274635"), s("854508"), ! function(t, e) {
                "use strict";

                function r(t, e) {
                    if (!t) throw Error(e || "Assertion failed")
                }

                function i(t, e) {
                    t.super_ = e;
                    var s = function() {};
                    s.prototype = e.prototype, t.prototype = new s, t.prototype.constructor = t
                }

                function n(t, e, s) {
                    if (n.isBN(t)) return t;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && (("le" === e || "be" === e) && (s = e, e = 10), this._init(t || 0, e || 10, s || "be"))
                }
                "object" == typeof t ? t.exports = n : e.BN = n, n.BN = n, n.wordSize = 26;
                try {
                    d = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : s("495873").Buffer
                } catch (t) {}

                function c(t, e) {
                    var s = t.charCodeAt(e);
                    if (s >= 48 && s <= 57) return s - 48;
                    if (s >= 65 && s <= 70) return s - 55;
                    if (s >= 97 && s <= 102) return s - 87;
                    r(!1, "Invalid character in " + t)
                }

                function o(t, e, s) {
                    var r = c(t, s);
                    return s - 1 >= e && (r |= c(t, s - 1) << 4), r
                }

                function f(t, e, s, i) {
                    for (var n = 0, c = 0, o = Math.min(t.length, s), f = e; f < o; f++) {
                        var u = t.charCodeAt(f) - 48;
                        n *= i, c = u >= 49 ? u - 49 + 10 : u >= 17 ? u - 17 + 10 : u, r(u >= 0 && c < i, "Invalid character"), n += c
                    }
                    return n
                }

                function u(t, e) {
                    t.words = e.words, t.length = e.length, t.negative = e.negative, t.red = e.red
                }
                if (n.isBN = function(t) {
                        return t instanceof n || null !== t && "object" == typeof t && t.constructor.wordSize === n.wordSize && Array.isArray(t.words)
                    }, n.max = function(t, e) {
                        return t.cmp(e) > 0 ? t : e
                    }, n.min = function(t, e) {
                        return 0 > t.cmp(e) ? t : e
                    }, n.prototype._init = function(t, e, s) {
                        if ("number" == typeof t) return this._initNumber(t, e, s);
                        if ("object" == typeof t) return this._initArray(t, e, s);
                        "hex" === e && (e = 16), r(e === (0 | e) && e >= 2 && e <= 36), t = t.toString().replace(/\s+/g, "");
                        var i = 0;
                        "-" === t[0] && (i++, this.negative = 1), i < t.length && (16 === e ? this._parseHex(t, i, s) : (this._parseBase(t, e, i), "le" === s && this._initArray(this.toArray(), e, s)))
                    }, n.prototype._initNumber = function(t, e, s) {
                        t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (r(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === s && this._initArray(this.toArray(), e, s)
                    }, n.prototype._initArray = function(t, e, s) {
                        if (r("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                        this.length = Math.ceil(t.length / 3), this.words = Array(this.length);
                        for (var i, n, c = 0; c < this.length; c++) this.words[c] = 0;
                        var o = 0;
                        if ("be" === s)
                            for (c = t.length - 1, i = 0; c >= 0; c -= 3) n = t[c] | t[c - 1] << 8 | t[c - 2] << 16, this.words[i] |= n << o & 67108863, this.words[i + 1] = n >>> 26 - o & 67108863, (o += 24) >= 26 && (o -= 26, i++);
                        else if ("le" === s)
                            for (c = 0, i = 0; c < t.length; c += 3) n = t[c] | t[c + 1] << 8 | t[c + 2] << 16, this.words[i] |= n << o & 67108863, this.words[i + 1] = n >>> 26 - o & 67108863, (o += 24) >= 26 && (o -= 26, i++);
                        return this._strip()
                    }, n.prototype._parseHex = function(t, e, s) {
                        this.length = Math.ceil((t.length - e) / 6), this.words = Array(this.length);
                        for (var r, i = 0; i < this.length; i++) this.words[i] = 0;
                        var n = 0,
                            c = 0;
                        if ("be" === s)
                            for (i = t.length - 1; i >= e; i -= 2) r = o(t, e, i) << n, this.words[c] |= 67108863 & r, n >= 18 ? (n -= 18, c += 1, this.words[c] |= r >>> 26) : n += 8;
                        else
                            for (i = (t.length - e) % 2 == 0 ? e + 1 : e; i < t.length; i += 2) r = o(t, e, i) << n, this.words[c] |= 67108863 & r, n >= 18 ? (n -= 18, c += 1, this.words[c] |= r >>> 26) : n += 8;
                        this._strip()
                    }, n.prototype._parseBase = function(t, e, s) {
                        this.words = [0], this.length = 1;
                        for (var r = 0, i = 1; i <= 67108863; i *= e) r++;
                        r--, i = i / e | 0;
                        for (var n = t.length - s, c = n % r, o = Math.min(n, n - c) + s, u = 0, a = s; a < o; a += r) u = f(t, a, a + r, e), this.imuln(i), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
                        if (0 !== c) {
                            var d = 1;
                            for (u = f(t, a, t.length, e), a = 0; a < c; a++) d *= e;
                            this.imuln(d), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u)
                        }
                        this._strip()
                    }, n.prototype.copy = function(t) {
                        t.words = Array(this.length);
                        for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
                        t.length = this.length, t.negative = this.negative, t.red = this.red
                    }, n.prototype._move = function(t) {
                        u(t, this)
                    }, n.prototype.clone = function() {
                        var t = new n(null);
                        return this.copy(t), t
                    }, n.prototype._expand = function(t) {
                        for (; this.length < t;) this.words[this.length++] = 0;
                        return this
                    }, n.prototype._strip = function() {
                        for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                        return this._normSign()
                    }, n.prototype._normSign = function() {
                        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                    }, "undefined" != typeof Symbol && "function" == typeof Symbol.for) try {
                    n.prototype[Symbol.for("nodejs.util.inspect.custom")] = a
                } catch (t) {
                    n.prototype.inspect = a
                } else n.prototype.inspect = a;

                function a() {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                }
                var d, p = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                    b = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    h = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
                n.prototype.toString = function(t, e) {
                    if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
                        s = "";
                        for (var s, i = 0, n = 0, c = 0; c < this.length; c++) {
                            var o = this.words[c],
                                f = ((o << i | n) & 16777215).toString(16);
                            n = o >>> 24 - i & 16777215, (i += 2) >= 26 && (i -= 26, c--), s = 0 !== n || c !== this.length - 1 ? p[6 - f.length] + f + s : f + s
                        }
                        for (0 !== n && (s = n.toString(16) + s); s.length % e != 0;) s = "0" + s;
                        return 0 !== this.negative && (s = "-" + s), s
                    }
                    if (t === (0 | t) && t >= 2 && t <= 36) {
                        var u = b[t],
                            a = h[t];
                        s = "";
                        var d = this.clone();
                        for (d.negative = 0; !d.isZero();) {
                            var l = d.modrn(a).toString(t);
                            s = (d = d.idivn(a)).isZero() ? l + s : p[u - l.length] + l + s
                        }
                        for (this.isZero() && (s = "0" + s); s.length % e != 0;) s = "0" + s;
                        return 0 !== this.negative && (s = "-" + s), s
                    }
                    r(!1, "Base should be between 2 and 36")
                }, n.prototype.toNumber = function() {
                    var t = this.words[0];
                    return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                }, n.prototype.toJSON = function() {
                    return this.toString(16, 2)
                }, d && (n.prototype.toBuffer = function(t, e) {
                    return this.toArrayLike(d, t, e)
                }), n.prototype.toArray = function(t, e) {
                    return this.toArrayLike(Array, t, e)
                };
                n.prototype.toArrayLike = function(t, e, s) {
                    this._strip();
                    var i, n, c = this.byteLength(),
                        o = s || Math.max(1, c);
                    r(c <= o, "byte array longer than desired length"), r(o > 0, "Requested array length <= 0");
                    var f = (i = t, n = o, i.allocUnsafe ? i.allocUnsafe(n) : new i(n));
                    return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](f, c), f
                }, n.prototype._toArrayLikeLE = function(t, e) {
                    for (var s = 0, r = 0, i = 0, n = 0; i < this.length; i++) {
                        var c = this.words[i] << n | r;
                        t[s++] = 255 & c, s < t.length && (t[s++] = c >> 8 & 255), s < t.length && (t[s++] = c >> 16 & 255), 6 === n ? (s < t.length && (t[s++] = c >> 24 & 255), r = 0, n = 0) : (r = c >>> 24, n += 2)
                    }
                    if (s < t.length)
                        for (t[s++] = r; s < t.length;) t[s++] = 0
                }, n.prototype._toArrayLikeBE = function(t, e) {
                    for (var s = t.length - 1, r = 0, i = 0, n = 0; i < this.length; i++) {
                        var c = this.words[i] << n | r;
                        t[s--] = 255 & c, s >= 0 && (t[s--] = c >> 8 & 255), s >= 0 && (t[s--] = c >> 16 & 255), 6 === n ? (s >= 0 && (t[s--] = c >> 24 & 255), r = 0, n = 0) : (r = c >>> 24, n += 2)
                    }
                    if (s >= 0)
                        for (t[s--] = r; s >= 0;) t[s--] = 0
                }, Math.clz32 ? n.prototype._countBits = function(t) {
                    return 32 - Math.clz32(t)
                } : n.prototype._countBits = function(t) {
                    var e = t,
                        s = 0;
                    return e >= 4096 && (s += 13, e >>>= 13), e >= 64 && (s += 7, e >>>= 7), e >= 8 && (s += 4, e >>>= 4), e >= 2 && (s += 2, e >>>= 2), s + e
                }, n.prototype._zeroBits = function(t) {
                    if (0 === t) return 26;
                    var e = t,
                        s = 0;
                    return (8191 & e) == 0 && (s += 13, e >>>= 13), (127 & e) == 0 && (s += 7, e >>>= 7), (15 & e) == 0 && (s += 4, e >>>= 4), (3 & e) == 0 && (s += 2, e >>>= 2), (1 & e) == 0 && s++, s
                }, n.prototype.bitLength = function() {
                    var t = this.words[this.length - 1],
                        e = this._countBits(t);
                    return (this.length - 1) * 26 + e
                };

                function l(t, e, s) {
                    s.negative = e.negative ^ t.negative;
                    var r = t.length + e.length | 0;
                    s.length = r, r = r - 1 | 0;
                    var i = 0 | t.words[0],
                        n = 0 | e.words[0],
                        c = i * n,
                        o = 67108863 & c,
                        f = c / 67108864 | 0;
                    s.words[0] = o;
                    for (var u = 1; u < r; u++) {
                        for (var a = f >>> 26, d = 67108863 & f, p = Math.min(u, e.length - 1), b = Math.max(0, u - t.length + 1); b <= p; b++) {
                            var h = u - b | 0;
                            i = 0 | t.words[h], a += (c = i * (n = 0 | e.words[b]) + d) / 67108864 | 0, d = 67108863 & c
                        }
                        s.words[u] = 0 | d, f = 0 | a
                    }
                    return 0 !== f ? s.words[u] = 0 | f : s.length--, s._strip()
                }
                n.prototype.zeroBits = function() {
                    if (this.isZero()) return 0;
                    for (var t = 0, e = 0; e < this.length; e++) {
                        var s = this._zeroBits(this.words[e]);
                        if (t += s, 26 !== s) break
                    }
                    return t
                }, n.prototype.byteLength = function() {
                    return Math.ceil(this.bitLength() / 8)
                }, n.prototype.toTwos = function(t) {
                    return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                }, n.prototype.fromTwos = function(t) {
                    return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                }, n.prototype.isNeg = function() {
                    return 0 !== this.negative
                }, n.prototype.neg = function() {
                    return this.clone().ineg()
                }, n.prototype.ineg = function() {
                    return !this.isZero() && (this.negative ^= 1), this
                }, n.prototype.iuor = function(t) {
                    for (; this.length < t.length;) this.words[this.length++] = 0;
                    for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
                    return this._strip()
                }, n.prototype.ior = function(t) {
                    return r((this.negative | t.negative) == 0), this.iuor(t)
                }, n.prototype.or = function(t) {
                    return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                }, n.prototype.uor = function(t) {
                    return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                }, n.prototype.iuand = function(t) {
                    var e;
                    e = this.length > t.length ? t : this;
                    for (var s = 0; s < e.length; s++) this.words[s] = this.words[s] & t.words[s];
                    return this.length = e.length, this._strip()
                }, n.prototype.iand = function(t) {
                    return r((this.negative | t.negative) == 0), this.iuand(t)
                }, n.prototype.and = function(t) {
                    return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                }, n.prototype.uand = function(t) {
                    return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                }, n.prototype.iuxor = function(t) {
                    this.length > t.length ? (e = this, s = t) : (e = t, s = this);
                    for (var e, s, r = 0; r < s.length; r++) this.words[r] = e.words[r] ^ s.words[r];
                    if (this !== e)
                        for (; r < e.length; r++) this.words[r] = e.words[r];
                    return this.length = e.length, this._strip()
                }, n.prototype.ixor = function(t) {
                    return r((this.negative | t.negative) == 0), this.iuxor(t)
                }, n.prototype.xor = function(t) {
                    return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                }, n.prototype.uxor = function(t) {
                    return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                }, n.prototype.inotn = function(t) {
                    r("number" == typeof t && t >= 0);
                    var e = 0 | Math.ceil(t / 26),
                        s = t % 26;
                    this._expand(e), s > 0 && e--;
                    for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i];
                    return s > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - s), this._strip()
                }, n.prototype.notn = function(t) {
                    return this.clone().inotn(t)
                }, n.prototype.setn = function(t, e) {
                    r("number" == typeof t && t >= 0);
                    var s = t / 26 | 0,
                        i = t % 26;
                    return this._expand(s + 1), e ? this.words[s] = this.words[s] | 1 << i : this.words[s] = this.words[s] & ~(1 << i), this._strip()
                }, n.prototype.iadd = function(t) {
                    if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                    if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                    this.length > t.length ? (s = this, r = t) : (s = t, r = this);
                    for (var e, s, r, i = 0, n = 0; n < r.length; n++) e = (0 | s.words[n]) + (0 | r.words[n]) + i, this.words[n] = 67108863 & e, i = e >>> 26;
                    for (; 0 !== i && n < s.length; n++) e = (0 | s.words[n]) + i, this.words[n] = 67108863 & e, i = e >>> 26;
                    if (this.length = s.length, 0 !== i) this.words[this.length] = i, this.length++;
                    else if (s !== this)
                        for (; n < s.length; n++) this.words[n] = s.words[n];
                    return this
                }, n.prototype.add = function(t) {
                    var e;
                    return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                }, n.prototype.isub = function(t) {
                    if (0 !== t.negative) {
                        t.negative = 0;
                        var e, s, r = this.iadd(t);
                        return t.negative = 1, r._normSign()
                    }
                    if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                    var i = this.cmp(t);
                    if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    i > 0 ? (e = this, s = t) : (e = t, s = this);
                    for (var n = 0, c = 0; c < s.length; c++) n = (r = (0 | e.words[c]) - (0 | s.words[c]) + n) >> 26, this.words[c] = 67108863 & r;
                    for (; 0 !== n && c < e.length; c++) n = (r = (0 | e.words[c]) + n) >> 26, this.words[c] = 67108863 & r;
                    if (0 === n && c < e.length && e !== this)
                        for (; c < e.length; c++) this.words[c] = e.words[c];
                    return this.length = Math.max(this.length, c), e !== this && (this.negative = 1), this._strip()
                }, n.prototype.sub = function(t) {
                    return this.clone().isub(t)
                };
                var g = function(t, e, s) {
                    var r, i, n, c = t.words,
                        o = e.words,
                        f = s.words,
                        u = 0,
                        a = 0 | c[0],
                        d = 8191 & a,
                        p = a >>> 13,
                        b = 0 | c[1],
                        h = 8191 & b,
                        l = b >>> 13,
                        g = 0 | c[2],
                        v = 8191 & g,
                        x = g >>> 13,
                        m = 0 | c[3],
                        y = 8191 & m,
                        _ = m >>> 13,
                        w = 0 | c[4],
                        M = 8191 & w,
                        S = w >>> 13,
                        k = 0 | c[5],
                        E = 8191 & k,
                        A = k >>> 13,
                        B = 0 | c[6],
                        I = 8191 & B,
                        R = B >>> 13,
                        j = 0 | c[7],
                        C = 8191 & j,
                        O = j >>> 13,
                        P = 0 | c[8],
                        T = 8191 & P,
                        D = P >>> 13,
                        z = 0 | c[9],
                        L = 8191 & z,
                        N = z >>> 13,
                        q = 0 | o[0],
                        U = 8191 & q,
                        F = q >>> 13,
                        K = 0 | o[1],
                        H = 8191 & K,
                        W = K >>> 13,
                        V = 0 | o[2],
                        Z = 8191 & V,
                        G = V >>> 13,
                        $ = 0 | o[3],
                        X = 8191 & $,
                        Y = $ >>> 13,
                        J = 0 | o[4],
                        Q = 8191 & J,
                        tt = J >>> 13,
                        te = 0 | o[5],
                        ts = 8191 & te,
                        tr = te >>> 13,
                        ti = 0 | o[6],
                        tn = 8191 & ti,
                        tc = ti >>> 13,
                        to = 0 | o[7],
                        tf = 8191 & to,
                        tu = to >>> 13,
                        ta = 0 | o[8],
                        td = 8191 & ta,
                        tp = ta >>> 13,
                        tb = 0 | o[9],
                        th = 8191 & tb,
                        tl = tb >>> 13;
                    s.negative = t.negative ^ e.negative, s.length = 19, r = Math.imul(d, U), i = (i = Math.imul(d, F)) + Math.imul(p, U) | 0;
                    var tg = (u + r | 0) + ((8191 & i) << 13) | 0;
                    u = ((n = Math.imul(p, F)) + (i >>> 13) | 0) + (tg >>> 26) | 0, tg &= 67108863, r = Math.imul(h, U), i = (i = Math.imul(h, F)) + Math.imul(l, U) | 0, n = Math.imul(l, F), r = r + Math.imul(d, H) | 0, i = (i = i + Math.imul(d, W) | 0) + Math.imul(p, H) | 0;
                    var tv = (u + r | 0) + ((8191 & i) << 13) | 0;
                    u = ((n = n + Math.imul(p, W) | 0) + (i >>> 13) | 0) + (tv >>> 26) | 0, tv &= 67108863, r = Math.imul(v, U), i = (i = Math.imul(v, F)) + Math.imul(x, U) | 0, n = Math.imul(x, F), r = r + Math.imul(h, H) | 0, i = (i = i + Math.imul(h, W) | 0) + Math.imul(l, H) | 0, n = n + Math.imul(l, W) | 0, r = r + Math.imul(d, Z) | 0, i = (i = i + Math.imul(d, G) | 0) + Math.imul(p, Z) | 0;
                    var tx = (u + r | 0) + ((8191 & i) << 13) | 0;
                    u = ((n = n + Math.imul(p, G) | 0) + (i >>> 13) | 0) + (tx >>> 26) | 0, tx &= 67108863, r = Math.imul(y, U), i = (i = Math.imul(y, F)) + Math.imul(_, U) | 0, n = Math.imul(_, F), r = r + Math.imul(v, H) | 0, i = (i = i + Math.imul(v, W) | 0) + Math.imul(x, H) | 0, n = n + Math.imul(x, W) | 0, r = r + Math.imul(h, Z) | 0, i = (i = i + Math.imul(h, G) | 0) + Math.imul(l, Z) | 0, n = n + Math.imul(l, G) | 0, r = r + Math.imul(d, X) | 0, i = (i = i + Math.imul(d, Y) | 0) + Math.imul(p, X) | 0;
                    var tm = (u + r | 0) + ((8191 & i) << 13) | 0;
                    u = ((n = n + Math.imul(p, Y) | 0) + (i >>> 13) | 0) + (tm >>> 26) | 0, tm &= 67108863, r = Math.imul(M, U), i = (i = Math.imul(M, F)) + Math.imul(S, U) | 0, n = Math.imul(S, F), r = r + Math.imul(y, H) | 0, i = (i = i + Math.imul(y, W) | 0) + Math.imul(_, H) | 0, n = n + Math.imul(_, W) | 0, r = r + Math.imul(v, Z) | 0, i = (i = i + Math.imul(v, G) | 0) + Math.imul(x, Z) | 0, n = n + Math.imul(x, G) | 0, r = r + Math.imul(h, X) | 0, i = (i = i + Math.imul(h, Y) | 0) + Math.imul(l, X) | 0, n = n + Math.imul(l, Y) | 0, r = r + Math.imul(d, Q) | 0, i = (i = i + Math.imul(d, tt) | 0) + Math.imul(p, Q) | 0;
                    var ty = (u + r | 0) + ((8191 & i) << 13) | 0;
                    u = ((n = n + Math.imul(p, tt) | 0) + (i >>> 13) | 0) + (ty >>> 26) | 0, ty &= 67108863, r = Math.imul(E, U), i = (i = Math.imul(E, F)) + Math.imul(A, U) | 0, n = Math.imul(A, F), r = r + Math.imul(M, H) | 0, i = (i = i + Math.imul(M, W) | 0) + Math.imul(S, H) | 0, n = n + Math.imul(S, W) | 0, r = r + Math.imul(y, Z) | 0, i = (i = i + Math.imul(y, G) | 0) + Math.imul(_, Z) | 0, n = n + Math.imul(_, G) | 0, r = r + Math.imul(v, X) | 0, i = (i = i + Math.imul(v, Y) | 0) + Math.imul(x, X) | 0, n = n + Math.imul(x, Y) | 0, r = r + Math.imul(h, Q) | 0, i = (i = i + Math.imul(h, tt) | 0) + Math.imul(l, Q) | 0, n = n + Math.imul(l, tt) | 0, r = r + Math.imul(d, ts) | 0, i = (i = i + Math.imul(d, tr) | 0) + Math.imul(p, ts) | 0;
                    var t_ = (u + r | 0) + ((8191 & i) << 13) | 0;
                    u = ((n = n + Math.imul(p, tr) | 0) + (i >>> 13) | 0) + (t_ >>> 26) | 0, t_ &= 67108863, r = Math.imul(I, U), i = (i = Math.imul(I, F)) + Math.imul(R, U) | 0, n = Math.imul(R, F), r = r + Math.imul(E, H) | 0, i = (i = i + Math.imul(E, W) | 0) + Math.imul(A, H) | 0, n = n + Math.imul(A, W) | 0, r = r + Math.imul(M, Z) | 0, i = (i = i + Math.imul(M, G) | 0) + Math.imul(S, Z) | 0, n = n + Math.imul(S, G) | 0, r = r + Math.imul(y, X) | 0, i = (i = i + Math.imul(y, Y) | 0) + Math.imul(_, X) | 0, n = n + Math.imul(_, Y) | 0, r = r + Math.imul(v, Q) | 0, i = (i = i + Math.imul(v, tt) | 0) + Math.imul(x, Q) | 0, n = n + Math.imul(x, tt) | 0, r = r + Math.imul(h, ts) | 0, i = (i = i + Math.imul(h, tr) | 0) + Math.imul(l, ts) | 0, n = n + Math.imul(l, tr) | 0, r = r + Math.imul(d, tn) | 0, i = (i = i + Math.imul(d, tc) | 0) + Math.imul(p, tn) | 0;
                    var tw = (u + r | 0) + ((8191 & i) << 13) | 0;
                    u = ((n = n + Math.imul(p, tc) | 0) + (i >>> 13) | 0) + (tw >>> 26) | 0, tw &= 67108863, r = Math.imul(C, U), i = (i = Math.imul(C, F)) + Math.imul(O, U) | 0, n = Math.imul(O, F), r = r + Math.imul(I, H) | 0, i = (i = i + Math.imul(I, W) | 0) + Math.imul(R, H) | 0, n = n + Math.imul(R, W) | 0, r = r + Math.imul(E, Z) | 0, i = (i = i + Math.imul(E, G) | 0) + Math.imul(A, Z) | 0, n = n + Math.imul(A, G) | 0, r = r + Math.imul(M, X) | 0, i = (i = i + Math.imul(M, Y) | 0) + Math.imul(S, X) | 0, n = n + Math.imul(S, Y) | 0, r = r + Math.imul(y, Q) | 0, i = (i = i + Math.imul(y, tt) | 0) + Math.imul(_, Q) | 0, n = n + Math.imul(_, tt) | 0, r = r + Math.imul(v, ts) | 0, i = (i = i + Math.imul(v, tr) | 0) + Math.imul(x, ts) | 0, n = n + Math.imul(x, tr) | 0, r = r + Math.imul(h, tn) | 0, i = (i = i + Math.imul(h, tc) | 0) + Math.imul(l, tn) | 0, n = n + Math.imul(l, tc) | 0, r = r + Math.imul(d, tf) | 0, i = (i = i + Math.imul(d, tu) | 0) + Math.imul(p, tf) | 0;
                    var tM = (u + r | 0) + ((8191 & i) << 13) | 0;
                    u = ((n = n + Math.imul(p, tu) | 0) + (i >>> 13) | 0) + (tM >>> 26) | 0, tM &= 67108863, r = Math.imul(T, U), i = (i = Math.imul(T, F)) + Math.imul(D, U) | 0, n = Math.imul(D, F), r = r + Math.imul(C, H) | 0, i = (i = i + Math.imul(C, W) | 0) + Math.imul(O, H) | 0, n = n + Math.imul(O, W) | 0, r = r + Math.imul(I, Z) | 0, i = (i = i + Math.imul(I, G) | 0) + Math.imul(R, Z) | 0, n = n + Math.imul(R, G) | 0, r = r + Math.imul(E, X) | 0, i = (i = i + Math.imul(E, Y) | 0) + Math.imul(A, X) | 0, n = n + Math.imul(A, Y) | 0, r = r + Math.imul(M, Q) | 0, i = (i = i + Math.imul(M, tt) | 0) + Math.imul(S, Q) | 0, n = n + Math.imul(S, tt) | 0, r = r + Math.imul(y, ts) | 0, i = (i = i + Math.imul(y, tr) | 0) + Math.imul(_, ts) | 0, n = n + Math.imul(_, tr) | 0, r = r + Math.imul(v, tn) | 0, i = (i = i + Math.imul(v, tc) | 0) + Math.imul(x, tn) | 0, n = n + Math.imul(x, tc) | 0, r = r + Math.imul(h, tf) | 0, i = (i = i + Math.imul(h, tu) | 0) + Math.imul(l, tf) | 0, n = n + Math.imul(l, tu) | 0, r = r + Math.imul(d, td) | 0, i = (i = i + Math.imul(d, tp) | 0) + Math.imul(p, td) | 0;
                    var tS = (u + r | 0) + ((8191 & i) << 13) | 0;
                    u = ((n = n + Math.imul(p, tp) | 0) + (i >>> 13) | 0) + (tS >>> 26) | 0, tS &= 67108863, r = Math.imul(L, U), i = (i = Math.imul(L, F)) + Math.imul(N, U) | 0, n = Math.imul(N, F), r = r + Math.imul(T, H) | 0, i = (i = i + Math.imul(T, W) | 0) + Math.imul(D, H) | 0, n = n + Math.imul(D, W) | 0, r = r + Math.imul(C, Z) | 0, i = (i = i + Math.imul(C, G) | 0) + Math.imul(O, Z) | 0, n = n + Math.imul(O, G) | 0, r = r + Math.imul(I, X) | 0, i = (i = i + Math.imul(I, Y) | 0) + Math.imul(R, X) | 0, n = n + Math.imul(R, Y) | 0, r = r + Math.imul(E, Q) | 0, i = (i = i + Math.imul(E, tt) | 0) + Math.imul(A, Q) | 0, n = n + Math.imul(A, tt) | 0, r = r + Math.imul(M, ts) | 0, i = (i = i + Math.imul(M, tr) | 0) + Math.imul(S, ts) | 0, n = n + Math.imul(S, tr) | 0, r = r + Math.imul(y, tn) | 0, i = (i = i + Math.imul(y, tc) | 0) + Math.imul(_, tn) | 0, n = n + Math.imul(_, tc) | 0, r = r + Math.imul(v, tf) | 0, i = (i = i + Math.imul(v, tu) | 0) + Math.imul(x, tf) | 0, n = n + Math.imul(x, tu) | 0, r = r + Math.imul(h, td) | 0, i = (i = i + Math.imul(h, tp) | 0) + Math.imul(l, td) | 0, n = n + Math.imul(l, tp) | 0, r = r + Math.imul(d, th) | 0, i = (i = i + Math.imul(d, tl) | 0) + Math.imul(p, th) | 0;
                    var tk = (u + r | 0) + ((8191 & i) << 13) | 0;
                    u = ((n = n + Math.imul(p, tl) | 0) + (i >>> 13) | 0) + (tk >>> 26) | 0, tk &= 67108863, r = Math.imul(L, H), i = (i = Math.imul(L, W)) + Math.imul(N, H) | 0, n = Math.imul(N, W), r = r + Math.imul(T, Z) | 0, i = (i = i + Math.imul(T, G) | 0) + Math.imul(D, Z) | 0, n = n + Math.imul(D, G) | 0, r = r + Math.imul(C, X) | 0, i = (i = i + Math.imul(C, Y) | 0) + Math.imul(O, X) | 0, n = n + Math.imul(O, Y) | 0, r = r + Math.imul(I, Q) | 0, i = (i = i + Math.imul(I, tt) | 0) + Math.imul(R, Q) | 0, n = n + Math.imul(R, tt) | 0, r = r + Math.imul(E, ts) | 0, i = (i = i + Math.imul(E, tr) | 0) + Math.imul(A, ts) | 0, n = n + Math.imul(A, tr) | 0, r = r + Math.imul(M, tn) | 0, i = (i = i + Math.imul(M, tc) | 0) + Math.imul(S, tn) | 0, n = n + Math.imul(S, tc) | 0, r = r + Math.imul(y, tf) | 0, i = (i = i + Math.imul(y, tu) | 0) + Math.imul(_, tf) | 0, n = n + Math.imul(_, tu) | 0, r = r + Math.imul(v, td) | 0, i = (i = i + Math.imul(v, tp) | 0) + Math.imul(x, td) | 0, n = n + Math.imul(x, tp) | 0, r = r + Math.imul(h, th) | 0, i = (i = i + Math.imul(h, tl) | 0) + Math.imul(l, th) | 0;
                    var tE = (u + r | 0) + ((8191 & i) << 13) | 0;
                    u = ((n = n + Math.imul(l, tl) | 0) + (i >>> 13) | 0) + (tE >>> 26) | 0, tE &= 67108863, r = Math.imul(L, Z), i = (i = Math.imul(L, G)) + Math.imul(N, Z) | 0, n = Math.imul(N, G), r = r + Math.imul(T, X) | 0, i = (i = i + Math.imul(T, Y) | 0) + Math.imul(D, X) | 0, n = n + Math.imul(D, Y) | 0, r = r + Math.imul(C, Q) | 0, i = (i = i + Math.imul(C, tt) | 0) + Math.imul(O, Q) | 0, n = n + Math.imul(O, tt) | 0, r = r + Math.imul(I, ts) | 0, i = (i = i + Math.imul(I, tr) | 0) + Math.imul(R, ts) | 0, n = n + Math.imul(R, tr) | 0, r = r + Math.imul(E, tn) | 0, i = (i = i + Math.imul(E, tc) | 0) + Math.imul(A, tn) | 0, n = n + Math.imul(A, tc) | 0, r = r + Math.imul(M, tf) | 0, i = (i = i + Math.imul(M, tu) | 0) + Math.imul(S, tf) | 0, n = n + Math.imul(S, tu) | 0, r = r + Math.imul(y, td) | 0, i = (i = i + Math.imul(y, tp) | 0) + Math.imul(_, td) | 0, n = n + Math.imul(_, tp) | 0, r = r + Math.imul(v, th) | 0, i = (i = i + Math.imul(v, tl) | 0) + Math.imul(x, th) | 0;
                    var tA = (u + r | 0) + ((8191 & i) << 13) | 0;
                    u = ((n = n + Math.imul(x, tl) | 0) + (i >>> 13) | 0) + (tA >>> 26) | 0, tA &= 67108863, r = Math.imul(L, X), i = (i = Math.imul(L, Y)) + Math.imul(N, X) | 0, n = Math.imul(N, Y), r = r + Math.imul(T, Q) | 0, i = (i = i + Math.imul(T, tt) | 0) + Math.imul(D, Q) | 0, n = n + Math.imul(D, tt) | 0, r = r + Math.imul(C, ts) | 0, i = (i = i + Math.imul(C, tr) | 0) + Math.imul(O, ts) | 0, n = n + Math.imul(O, tr) | 0, r = r + Math.imul(I, tn) | 0, i = (i = i + Math.imul(I, tc) | 0) + Math.imul(R, tn) | 0, n = n + Math.imul(R, tc) | 0, r = r + Math.imul(E, tf) | 0, i = (i = i + Math.imul(E, tu) | 0) + Math.imul(A, tf) | 0, n = n + Math.imul(A, tu) | 0, r = r + Math.imul(M, td) | 0, i = (i = i + Math.imul(M, tp) | 0) + Math.imul(S, td) | 0, n = n + Math.imul(S, tp) | 0, r = r + Math.imul(y, th) | 0, i = (i = i + Math.imul(y, tl) | 0) + Math.imul(_, th) | 0;
                    var tB = (u + r | 0) + ((8191 & i) << 13) | 0;
                    u = ((n = n + Math.imul(_, tl) | 0) + (i >>> 13) | 0) + (tB >>> 26) | 0, tB &= 67108863, r = Math.imul(L, Q), i = (i = Math.imul(L, tt)) + Math.imul(N, Q) | 0, n = Math.imul(N, tt), r = r + Math.imul(T, ts) | 0, i = (i = i + Math.imul(T, tr) | 0) + Math.imul(D, ts) | 0, n = n + Math.imul(D, tr) | 0, r = r + Math.imul(C, tn) | 0, i = (i = i + Math.imul(C, tc) | 0) + Math.imul(O, tn) | 0, n = n + Math.imul(O, tc) | 0, r = r + Math.imul(I, tf) | 0, i = (i = i + Math.imul(I, tu) | 0) + Math.imul(R, tf) | 0, n = n + Math.imul(R, tu) | 0, r = r + Math.imul(E, td) | 0, i = (i = i + Math.imul(E, tp) | 0) + Math.imul(A, td) | 0, n = n + Math.imul(A, tp) | 0, r = r + Math.imul(M, th) | 0, i = (i = i + Math.imul(M, tl) | 0) + Math.imul(S, th) | 0;
                    var tI = (u + r | 0) + ((8191 & i) << 13) | 0;
                    u = ((n = n + Math.imul(S, tl) | 0) + (i >>> 13) | 0) + (tI >>> 26) | 0, tI &= 67108863, r = Math.imul(L, ts), i = (i = Math.imul(L, tr)) + Math.imul(N, ts) | 0, n = Math.imul(N, tr), r = r + Math.imul(T, tn) | 0, i = (i = i + Math.imul(T, tc) | 0) + Math.imul(D, tn) | 0, n = n + Math.imul(D, tc) | 0, r = r + Math.imul(C, tf) | 0, i = (i = i + Math.imul(C, tu) | 0) + Math.imul(O, tf) | 0, n = n + Math.imul(O, tu) | 0, r = r + Math.imul(I, td) | 0, i = (i = i + Math.imul(I, tp) | 0) + Math.imul(R, td) | 0, n = n + Math.imul(R, tp) | 0, r = r + Math.imul(E, th) | 0, i = (i = i + Math.imul(E, tl) | 0) + Math.imul(A, th) | 0;
                    var tR = (u + r | 0) + ((8191 & i) << 13) | 0;
                    u = ((n = n + Math.imul(A, tl) | 0) + (i >>> 13) | 0) + (tR >>> 26) | 0, tR &= 67108863, r = Math.imul(L, tn), i = (i = Math.imul(L, tc)) + Math.imul(N, tn) | 0, n = Math.imul(N, tc), r = r + Math.imul(T, tf) | 0, i = (i = i + Math.imul(T, tu) | 0) + Math.imul(D, tf) | 0, n = n + Math.imul(D, tu) | 0, r = r + Math.imul(C, td) | 0, i = (i = i + Math.imul(C, tp) | 0) + Math.imul(O, td) | 0, n = n + Math.imul(O, tp) | 0, r = r + Math.imul(I, th) | 0, i = (i = i + Math.imul(I, tl) | 0) + Math.imul(R, th) | 0;
                    var tj = (u + r | 0) + ((8191 & i) << 13) | 0;
                    u = ((n = n + Math.imul(R, tl) | 0) + (i >>> 13) | 0) + (tj >>> 26) | 0, tj &= 67108863, r = Math.imul(L, tf), i = (i = Math.imul(L, tu)) + Math.imul(N, tf) | 0, n = Math.imul(N, tu), r = r + Math.imul(T, td) | 0, i = (i = i + Math.imul(T, tp) | 0) + Math.imul(D, td) | 0, n = n + Math.imul(D, tp) | 0, r = r + Math.imul(C, th) | 0, i = (i = i + Math.imul(C, tl) | 0) + Math.imul(O, th) | 0;
                    var tC = (u + r | 0) + ((8191 & i) << 13) | 0;
                    u = ((n = n + Math.imul(O, tl) | 0) + (i >>> 13) | 0) + (tC >>> 26) | 0, tC &= 67108863, r = Math.imul(L, td), i = (i = Math.imul(L, tp)) + Math.imul(N, td) | 0, n = Math.imul(N, tp), r = r + Math.imul(T, th) | 0, i = (i = i + Math.imul(T, tl) | 0) + Math.imul(D, th) | 0;
                    var tO = (u + r | 0) + ((8191 & i) << 13) | 0;
                    u = ((n = n + Math.imul(D, tl) | 0) + (i >>> 13) | 0) + (tO >>> 26) | 0, tO &= 67108863, r = Math.imul(L, th), i = (i = Math.imul(L, tl)) + Math.imul(N, th) | 0;
                    var tP = (u + r | 0) + ((8191 & i) << 13) | 0;
                    return u = ((n = Math.imul(N, tl)) + (i >>> 13) | 0) + (tP >>> 26) | 0, tP &= 67108863, f[0] = tg, f[1] = tv, f[2] = tx, f[3] = tm, f[4] = ty, f[5] = t_, f[6] = tw, f[7] = tM, f[8] = tS, f[9] = tk, f[10] = tE, f[11] = tA, f[12] = tB, f[13] = tI, f[14] = tR, f[15] = tj, f[16] = tC, f[17] = tO, f[18] = tP, 0 !== u && (f[19] = u, s.length++), s
                };

                function v(t, e, s) {
                    s.negative = e.negative ^ t.negative, s.length = t.length + e.length;
                    for (var r = 0, i = 0, n = 0; n < s.length - 1; n++) {
                        var c = i;
                        i = 0;
                        for (var o = 67108863 & r, f = Math.min(n, e.length - 1), u = Math.max(0, n - t.length + 1); u <= f; u++) {
                            var a = n - u,
                                d = (0 | t.words[a]) * (0 | e.words[u]),
                                p = 67108863 & d;
                            c = c + (d / 67108864 | 0) | 0, o = 67108863 & (p = p + o | 0), i += (c = c + (p >>> 26) | 0) >>> 26, c &= 67108863
                        }
                        s.words[n] = o, r = c, c = i
                    }
                    return 0 !== r ? s.words[n] = r : s.length--, s._strip()
                }

                function x(t, e, s) {
                    return v(t, e, s)
                }

                function m(t, e) {
                    this.x = t, this.y = e
                }!Math.imul && (g = l), n.prototype.mulTo = function(t, e) {
                    var s, r, i = this.length + t.length;
                    if (10 === this.length && 10 === t.length) r = g(this, t, e);
                    else if (i < 63) r = l(this, t, e);
                    else if (i < 1024) r = v(this, t, e);
                    else {
                        ;
                        s = this, r = v(s, t, e)
                    }
                    return r
                }, m.prototype.makeRBT = function(t) {
                    for (var e = Array(t), s = n.prototype._countBits(t) - 1, r = 0; r < t; r++) e[r] = this.revBin(r, s, t);
                    return e
                }, m.prototype.revBin = function(t, e, s) {
                    if (0 === t || t === s - 1) return t;
                    for (var r = 0, i = 0; i < e; i++) r |= (1 & t) << e - i - 1, t >>= 1;
                    return r
                }, m.prototype.permute = function(t, e, s, r, i, n) {
                    for (var c = 0; c < n; c++) r[c] = e[t[c]], i[c] = s[t[c]]
                }, m.prototype.transform = function(t, e, s, r, i, n) {
                    this.permute(n, t, e, s, r, i);
                    for (var c = 1; c < i; c <<= 1) {
                        for (var o = c << 1, f = Math.cos(2 * Math.PI / o), u = Math.sin(2 * Math.PI / o), a = 0; a < i; a += o) {
                            for (var d = f, p = u, b = 0; b < c; b++) {
                                var h = s[a + b],
                                    l = r[a + b],
                                    g = s[a + b + c],
                                    v = r[a + b + c],
                                    x = d * g - p * v;
                                v = d * v + p * g, g = x, s[a + b] = h + g, r[a + b] = l + v, s[a + b + c] = h - g, r[a + b + c] = l - v, b !== o && (x = f * d - u * p, p = f * p + u * d, d = x)
                            }
                        }
                    }
                }, m.prototype.guessLen13b = function(t, e) {
                    var s = 1 | Math.max(e, t),
                        r = 1 & s,
                        i = 0;
                    for (s = s / 2 | 0; s; s >>>= 1) i++;
                    return 1 << i + 1 + r
                }, m.prototype.conjugate = function(t, e, s) {
                    if (!(s <= 1))
                        for (var r = 0; r < s / 2; r++) {
                            var i = t[r];
                            t[r] = t[s - r - 1], t[s - r - 1] = i, i = e[r], e[r] = -e[s - r - 1], e[s - r - 1] = -i
                        }
                }, m.prototype.normalize13b = function(t, e) {
                    for (var s = 0, r = 0; r < e / 2; r++) {
                        var i = 8192 * Math.round(t[2 * r + 1] / e) + Math.round(t[2 * r] / e) + s;
                        t[r] = 67108863 & i, s = i < 67108864 ? 0 : i / 67108864 | 0
                    }
                    return t
                }, m.prototype.convert13b = function(t, e, s, i) {
                    for (var n = 0, c = 0; c < e; c++) n += 0 | t[c], s[2 * c] = 8191 & n, n >>>= 13, s[2 * c + 1] = 8191 & n, n >>>= 13;
                    for (c = 2 * e; c < i; ++c) s[c] = 0;
                    r(0 === n), r((-8192 & n) == 0)
                }, m.prototype.stub = function(t) {
                    for (var e = Array(t), s = 0; s < t; s++) e[s] = 0;
                    return e
                }, m.prototype.mulp = function(t, e, s) {
                    var r = 2 * this.guessLen13b(t.length, e.length),
                        i = this.makeRBT(r),
                        n = this.stub(r),
                        c = Array(r),
                        o = Array(r),
                        f = Array(r),
                        u = Array(r),
                        a = Array(r),
                        d = Array(r),
                        p = s.words;
                    p.length = r, this.convert13b(t.words, t.length, c, r), this.convert13b(e.words, e.length, u, r), this.transform(c, n, o, f, r, i), this.transform(u, n, a, d, r, i);
                    for (var b = 0; b < r; b++) {
                        var h = o[b] * a[b] - f[b] * d[b];
                        f[b] = o[b] * d[b] + f[b] * a[b], o[b] = h
                    }
                    return this.conjugate(o, f, r), this.transform(o, f, p, n, r, i), this.conjugate(p, n, r), this.normalize13b(p, r), s.negative = t.negative ^ e.negative, s.length = t.length + e.length, s._strip()
                }, n.prototype.mul = function(t) {
                    var e = new n(null);
                    return e.words = Array(this.length + t.length), this.mulTo(t, e)
                }, n.prototype.mulf = function(t) {
                    var e, s = new n(null);
                    return s.words = Array(this.length + t.length), e = this, v(e, t, s)
                }, n.prototype.imul = function(t) {
                    return this.clone().mulTo(t, this)
                }, n.prototype.imuln = function(t) {
                    var e = t < 0;
                    e && (t = -t), r("number" == typeof t), r(t < 67108864);
                    for (var s = 0, i = 0; i < this.length; i++) {
                        var n = (0 | this.words[i]) * t,
                            c = (67108863 & n) + (67108863 & s);
                        s >>= 26, s += (n / 67108864 | 0) + (c >>> 26), this.words[i] = 67108863 & c
                    }
                    return 0 !== s && (this.words[i] = s, this.length++), e ? this.ineg() : this
                }, n.prototype.muln = function(t) {
                    return this.clone().imuln(t)
                }, n.prototype.sqr = function() {
                    return this.mul(this)
                }, n.prototype.isqr = function() {
                    return this.imul(this.clone())
                }, n.prototype.pow = function(t) {
                    var e = function(t) {
                        for (var e = Array(t.bitLength()), s = 0; s < e.length; s++) {
                            var r = s / 26 | 0,
                                i = s % 26;
                            e[s] = t.words[r] >>> i & 1
                        }
                        return e
                    }(t);
                    if (0 === e.length) return new n(1);
                    for (var s = this, r = 0; r < e.length && 0 === e[r]; r++, s = s.sqr());
                    if (++r < e.length)
                        for (var i = s.sqr(); r < e.length; r++, i = i.sqr()) 0 !== e[r] && (s = s.mul(i));
                    return s
                }, n.prototype.iushln = function(t) {
                    r("number" == typeof t && t >= 0);
                    var e, s = t % 26,
                        i = (t - s) / 26,
                        n = 67108863 >>> 26 - s << 26 - s;
                    if (0 !== s) {
                        var c = 0;
                        for (e = 0; e < this.length; e++) {
                            var o = this.words[e] & n,
                                f = (0 | this.words[e]) - o << s;
                            this.words[e] = f | c, c = o >>> 26 - s
                        }
                        c && (this.words[e] = c, this.length++)
                    }
                    if (0 !== i) {
                        for (e = this.length - 1; e >= 0; e--) this.words[e + i] = this.words[e];
                        for (e = 0; e < i; e++) this.words[e] = 0;
                        this.length += i
                    }
                    return this._strip()
                }, n.prototype.ishln = function(t) {
                    return r(0 === this.negative), this.iushln(t)
                }, n.prototype.iushrn = function(t, e, s) {
                    r("number" == typeof t && t >= 0), i = e ? (e - e % 26) / 26 : 0;
                    var i, n = t % 26,
                        c = Math.min((t - n) / 26, this.length),
                        o = 67108863 ^ 67108863 >>> n << n;
                    if (i -= c, i = Math.max(0, i), s) {
                        for (var f = 0; f < c; f++) s.words[f] = this.words[f];
                        s.length = c
                    }
                    if (0 === c);
                    else if (this.length > c)
                        for (this.length -= c, f = 0; f < this.length; f++) this.words[f] = this.words[f + c];
                    else this.words[0] = 0, this.length = 1;
                    var u = 0;
                    for (f = this.length - 1; f >= 0 && (0 !== u || f >= i); f--) {
                        var a = 0 | this.words[f];
                        this.words[f] = u << 26 - n | a >>> n, u = a & o
                    }
                    return s && 0 !== u && (s.words[s.length++] = u), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                }, n.prototype.ishrn = function(t, e, s) {
                    return r(0 === this.negative), this.iushrn(t, e, s)
                }, n.prototype.shln = function(t) {
                    return this.clone().ishln(t)
                }, n.prototype.ushln = function(t) {
                    return this.clone().iushln(t)
                }, n.prototype.shrn = function(t) {
                    return this.clone().ishrn(t)
                }, n.prototype.ushrn = function(t) {
                    return this.clone().iushrn(t)
                }, n.prototype.testn = function(t) {
                    r("number" == typeof t && t >= 0);
                    var e = t % 26,
                        s = (t - e) / 26;
                    return !(this.length <= s) && !!(this.words[s] & 1 << e)
                }, n.prototype.imaskn = function(t) {
                    r("number" == typeof t && t >= 0);
                    var e = t % 26,
                        s = (t - e) / 26;
                    return (r(0 === this.negative, "imaskn works only with positive numbers"), this.length <= s) ? this : (0 !== e && s++, this.length = Math.min(s, this.length), 0 !== e && (this.words[this.length - 1] &= 67108863 ^ 67108863 >>> e << e), this._strip())
                }, n.prototype.maskn = function(t) {
                    return this.clone().imaskn(t)
                }, n.prototype.iaddn = function(t) {
                    if (r("number" == typeof t), r(t < 67108864), t < 0) return this.isubn(-t);
                    if (0 !== this.negative) return 1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this);
                    return this._iaddn(t)
                }, n.prototype._iaddn = function(t) {
                    this.words[0] += t;
                    for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                    return this.length = Math.max(this.length, e + 1), this
                }, n.prototype.isubn = function(t) {
                    if (r("number" == typeof t), r(t < 67108864), t < 0) return this.iaddn(-t);
                    if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                    if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                    else
                        for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, this.words[e + 1] -= 1;
                    return this._strip()
                }, n.prototype.addn = function(t) {
                    return this.clone().iaddn(t)
                }, n.prototype.subn = function(t) {
                    return this.clone().isubn(t)
                }, n.prototype.iabs = function() {
                    return this.negative = 0, this
                }, n.prototype.abs = function() {
                    return this.clone().iabs()
                }, n.prototype._ishlnsubmul = function(t, e, s) {
                    var i, n, c = t.length + s;
                    this._expand(c);
                    var o = 0;
                    for (i = 0; i < t.length; i++) {
                        n = (0 | this.words[i + s]) + o;
                        var f = (0 | t.words[i]) * e;
                        n -= 67108863 & f, o = (n >> 26) - (f / 67108864 | 0), this.words[i + s] = 67108863 & n
                    }
                    for (; i < this.length - s; i++) o = (n = (0 | this.words[i + s]) + o) >> 26, this.words[i + s] = 67108863 & n;
                    if (0 === o) return this._strip();
                    for (r(-1 === o), o = 0, i = 0; i < this.length; i++) o = (n = -(0 | this.words[i]) + o) >> 26, this.words[i] = 67108863 & n;
                    return this.negative = 1, this._strip()
                }, n.prototype._wordDiv = function(t, e) {
                    var s, r = this.length - t.length,
                        i = this.clone(),
                        c = t,
                        o = 0 | c.words[c.length - 1];
                    0 != (r = 26 - this._countBits(o)) && (c = c.ushln(r), i.iushln(r), o = 0 | c.words[c.length - 1]);
                    var f = i.length - c.length;
                    if ("mod" !== e) {
                        (s = new n(null)).length = f + 1, s.words = Array(s.length);
                        for (var u = 0; u < s.length; u++) s.words[u] = 0
                    }
                    var a = i.clone()._ishlnsubmul(c, 1, f);
                    0 === a.negative && (i = a, s && (s.words[f] = 1));
                    for (var d = f - 1; d >= 0; d--) {
                        var p = (0 | i.words[c.length + d]) * 67108864 + (0 | i.words[c.length + d - 1]);
                        for (p = Math.min(p / o | 0, 67108863), i._ishlnsubmul(c, p, d); 0 !== i.negative;) p--, i.negative = 0, i._ishlnsubmul(c, 1, d), !i.isZero() && (i.negative ^= 1);
                        s && (s.words[d] = p)
                    }
                    return s && s._strip(), i._strip(), "div" !== e && 0 !== r && i.iushrn(r), {
                        div: s || null,
                        mod: i
                    }
                }, n.prototype.divmod = function(t, e, s) {
                    var i, c, o;
                    if (r(!t.isZero()), this.isZero()) return {
                        div: new n(0),
                        mod: new n(0)
                    };
                    if (0 !== this.negative && 0 === t.negative) return o = this.neg().divmod(t, e), "mod" !== e && (i = o.div.neg()), "div" !== e && (c = o.mod.neg(), s && 0 !== c.negative && c.iadd(t)), {
                        div: i,
                        mod: c
                    };
                    if (0 === this.negative && 0 !== t.negative) return o = this.divmod(t.neg(), e), "mod" !== e && (i = o.div.neg()), {
                        div: i,
                        mod: o.mod
                    };
                    if ((this.negative & t.negative) != 0) return o = this.neg().divmod(t.neg(), e), "div" !== e && (c = o.mod.neg(), s && 0 !== c.negative && c.isub(t)), {
                        div: o.div,
                        mod: c
                    };
                    if (t.length > this.length || 0 > this.cmp(t)) return {
                        div: new n(0),
                        mod: this
                    };
                    if (1 === t.length) return "div" === e ? {
                        div: this.divn(t.words[0]),
                        mod: null
                    } : "mod" === e ? {
                        div: null,
                        mod: new n(this.modrn(t.words[0]))
                    } : {
                        div: this.divn(t.words[0]),
                        mod: new n(this.modrn(t.words[0]))
                    };
                    return this._wordDiv(t, e)
                }, n.prototype.div = function(t) {
                    return this.divmod(t, "div", !1).div
                }, n.prototype.mod = function(t) {
                    return this.divmod(t, "mod", !1).mod
                }, n.prototype.umod = function(t) {
                    return this.divmod(t, "mod", !0).mod
                }, n.prototype.divRound = function(t) {
                    var e = this.divmod(t);
                    if (e.mod.isZero()) return e.div;
                    var s = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                        r = t.ushrn(1),
                        i = t.andln(1),
                        n = s.cmp(r);
                    return n < 0 || 1 === i && 0 === n ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                }, n.prototype.modrn = function(t) {
                    var e = t < 0;
                    e && (t = -t), r(t <= 67108863);
                    for (var s = 67108864 % t, i = 0, n = this.length - 1; n >= 0; n--) i = (s * i + (0 | this.words[n])) % t;
                    return e ? -i : i
                }, n.prototype.modn = function(t) {
                    return this.modrn(t)
                }, n.prototype.idivn = function(t) {
                    var e = t < 0;
                    e && (t = -t), r(t <= 67108863);
                    for (var s = 0, i = this.length - 1; i >= 0; i--) {
                        var n = (0 | this.words[i]) + 67108864 * s;
                        this.words[i] = n / t | 0, s = n % t
                    }
                    return this._strip(), e ? this.ineg() : this
                }, n.prototype.divn = function(t) {
                    return this.clone().idivn(t)
                }, n.prototype.egcd = function(t) {
                    r(0 === t.negative), r(!t.isZero());
                    var e = this,
                        s = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    for (var i = new n(1), c = new n(0), o = new n(0), f = new n(1), u = 0; e.isEven() && s.isEven();) e.iushrn(1), s.iushrn(1), ++u;
                    for (var a = s.clone(), d = e.clone(); !e.isZero();) {
                        for (var p = 0, b = 1;
                            (e.words[0] & b) == 0 && p < 26; ++p, b <<= 1);
                        if (p > 0)
                            for (e.iushrn(p); p-- > 0;)(i.isOdd() || c.isOdd()) && (i.iadd(a), c.isub(d)), i.iushrn(1), c.iushrn(1);
                        for (var h = 0, l = 1;
                            (s.words[0] & l) == 0 && h < 26; ++h, l <<= 1);
                        if (h > 0)
                            for (s.iushrn(h); h-- > 0;)(o.isOdd() || f.isOdd()) && (o.iadd(a), f.isub(d)), o.iushrn(1), f.iushrn(1);
                        e.cmp(s) >= 0 ? (e.isub(s), i.isub(o), c.isub(f)) : (s.isub(e), o.isub(i), f.isub(c))
                    }
                    return {
                        a: o,
                        b: f,
                        gcd: s.iushln(u)
                    }
                }, n.prototype._invmp = function(t) {
                    r(0 === t.negative), r(!t.isZero());
                    var e, s = this,
                        i = t.clone();
                    s = 0 !== s.negative ? s.umod(t) : s.clone();
                    for (var c = new n(1), o = new n(0), f = i.clone(); s.cmpn(1) > 0 && i.cmpn(1) > 0;) {
                        for (var u = 0, a = 1;
                            (s.words[0] & a) == 0 && u < 26; ++u, a <<= 1);
                        if (u > 0)
                            for (s.iushrn(u); u-- > 0;) c.isOdd() && c.iadd(f), c.iushrn(1);
                        for (var d = 0, p = 1;
                            (i.words[0] & p) == 0 && d < 26; ++d, p <<= 1);
                        if (d > 0)
                            for (i.iushrn(d); d-- > 0;) o.isOdd() && o.iadd(f), o.iushrn(1);
                        s.cmp(i) >= 0 ? (s.isub(i), c.isub(o)) : (i.isub(s), o.isub(c))
                    }
                    return 0 > (e = 0 === s.cmpn(1) ? c : o).cmpn(0) && e.iadd(t), e
                }, n.prototype.gcd = function(t) {
                    if (this.isZero()) return t.abs();
                    if (t.isZero()) return this.abs();
                    var e = this.clone(),
                        s = t.clone();
                    e.negative = 0, s.negative = 0;
                    for (var r = 0; e.isEven() && s.isEven(); r++) e.iushrn(1), s.iushrn(1);
                    for (;;) {
                        for (; e.isEven();) e.iushrn(1);
                        for (; s.isEven();) s.iushrn(1);
                        var i = e.cmp(s);
                        if (i < 0) {
                            var n = e;
                            e = s, s = n
                        } else if (0 === i || 0 === s.cmpn(1)) break;
                        e.isub(s)
                    }
                    return s.iushln(r)
                }, n.prototype.invm = function(t) {
                    return this.egcd(t).a.umod(t)
                }, n.prototype.isEven = function() {
                    return (1 & this.words[0]) == 0
                }, n.prototype.isOdd = function() {
                    return (1 & this.words[0]) == 1
                }, n.prototype.andln = function(t) {
                    return this.words[0] & t
                }, n.prototype.bincn = function(t) {
                    r("number" == typeof t);
                    var e = t % 26,
                        s = (t - e) / 26,
                        i = 1 << e;
                    if (this.length <= s) return this._expand(s + 1), this.words[s] |= i, this;
                    for (var n = i, c = s; 0 !== n && c < this.length; c++) {
                        var o = 0 | this.words[c];
                        o += n, n = o >>> 26, o &= 67108863, this.words[c] = o
                    }
                    return 0 !== n && (this.words[c] = n, this.length++), this
                }, n.prototype.isZero = function() {
                    return 1 === this.length && 0 === this.words[0]
                }, n.prototype.cmpn = function(t) {
                    var e, s = t < 0;
                    if (0 !== this.negative && !s) return -1;
                    if (0 === this.negative && s) return 1;
                    if (this._strip(), this.length > 1) e = 1;
                    else {
                        s && (t = -t), r(t <= 67108863, "Number is too big");
                        var i = 0 | this.words[0];
                        e = i === t ? 0 : i < t ? -1 : 1
                    }
                    return 0 !== this.negative ? 0 | -e : e
                }, n.prototype.cmp = function(t) {
                    if (0 !== this.negative && 0 === t.negative) return -1;
                    if (0 === this.negative && 0 !== t.negative) return 1;
                    var e = this.ucmp(t);
                    return 0 !== this.negative ? 0 | -e : e
                }, n.prototype.ucmp = function(t) {
                    if (this.length > t.length) return 1;
                    if (this.length < t.length) return -1;
                    for (var e = 0, s = this.length - 1; s >= 0; s--) {
                        var r = 0 | this.words[s],
                            i = 0 | t.words[s];
                        if (r !== i) {
                            r < i ? e = -1 : r > i && (e = 1);
                            break
                        }
                    }
                    return e
                }, n.prototype.gtn = function(t) {
                    return 1 === this.cmpn(t)
                }, n.prototype.gt = function(t) {
                    return 1 === this.cmp(t)
                }, n.prototype.gten = function(t) {
                    return this.cmpn(t) >= 0
                }, n.prototype.gte = function(t) {
                    return this.cmp(t) >= 0
                }, n.prototype.ltn = function(t) {
                    return -1 === this.cmpn(t)
                }, n.prototype.lt = function(t) {
                    return -1 === this.cmp(t)
                }, n.prototype.lten = function(t) {
                    return 0 >= this.cmpn(t)
                }, n.prototype.lte = function(t) {
                    return 0 >= this.cmp(t)
                }, n.prototype.eqn = function(t) {
                    return 0 === this.cmpn(t)
                }, n.prototype.eq = function(t) {
                    return 0 === this.cmp(t)
                }, n.red = function(t) {
                    return new E(t)
                }, n.prototype.toRed = function(t) {
                    return r(!this.red, "Already a number in reduction context"), r(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                }, n.prototype.fromRed = function() {
                    return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                }, n.prototype._forceRed = function(t) {
                    return this.red = t, this
                }, n.prototype.forceRed = function(t) {
                    return r(!this.red, "Already a number in reduction context"), this._forceRed(t)
                }, n.prototype.redAdd = function(t) {
                    return r(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                }, n.prototype.redIAdd = function(t) {
                    return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                }, n.prototype.redSub = function(t) {
                    return r(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                }, n.prototype.redISub = function(t) {
                    return r(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                }, n.prototype.redShl = function(t) {
                    return r(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                }, n.prototype.redMul = function(t) {
                    return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                }, n.prototype.redIMul = function(t) {
                    return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                }, n.prototype.redSqr = function() {
                    return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                }, n.prototype.redISqr = function() {
                    return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                }, n.prototype.redSqrt = function() {
                    return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                }, n.prototype.redInvm = function() {
                    return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                }, n.prototype.redNeg = function() {
                    return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                }, n.prototype.redPow = function(t) {
                    return r(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                };
                var y = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };

                function _(t, e) {
                    this.name = t, this.p = new n(e, 16), this.n = this.p.bitLength(), this.k = new n(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                }

                function w() {
                    _.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                }

                function M() {
                    _.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                }

                function S() {
                    _.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                }

                function k() {
                    _.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                }

                function E(t) {
                    if ("string" == typeof t) {
                        var e = n._prime(t);
                        this.m = e.p, this.prime = e
                    } else r(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                }

                function A(t) {
                    E.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new n(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                }
                _.prototype._tmp = function() {
                    var t = new n(null);
                    return t.words = Array(Math.ceil(this.n / 13)), t
                }, _.prototype.ireduce = function(t) {
                    var e, s = t;
                    do this.split(s, this.tmp), e = (s = (s = this.imulK(s)).iadd(this.tmp)).bitLength(); while (e > this.n);
                    var r = e < this.n ? -1 : s.ucmp(this.p);
                    return 0 === r ? (s.words[0] = 0, s.length = 1) : r > 0 ? s.isub(this.p) : void 0 !== s.strip ? s.strip() : s._strip(), s
                }, _.prototype.split = function(t, e) {
                    t.iushrn(this.n, 0, e)
                }, _.prototype.imulK = function(t) {
                    return t.imul(this.k)
                }, i(w, _), w.prototype.split = function(t, e) {
                    for (var s = Math.min(t.length, 9), r = 0; r < s; r++) e.words[r] = t.words[r];
                    if (e.length = s, t.length <= 9) {
                        t.words[0] = 0, t.length = 1;
                        return
                    }
                    var i = t.words[9];
                    for (r = 10, e.words[e.length++] = 4194303 & i; r < t.length; r++) {
                        var n = 0 | t.words[r];
                        t.words[r - 10] = (4194303 & n) << 4 | i >>> 22, i = n
                    }
                    i >>>= 22, t.words[r - 10] = i, 0 === i && t.length > 10 ? t.length -= 10 : t.length -= 9
                }, w.prototype.imulK = function(t) {
                    t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                    for (var e = 0, s = 0; s < t.length; s++) {
                        var r = 0 | t.words[s];
                        e += 977 * r, t.words[s] = 67108863 & e, e = 64 * r + (e / 67108864 | 0)
                    }
                    return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                }, i(M, _), i(S, _), i(k, _), k.prototype.imulK = function(t) {
                    for (var e = 0, s = 0; s < t.length; s++) {
                        var r = (0 | t.words[s]) * 19 + e,
                            i = 67108863 & r;
                        r >>>= 26, t.words[s] = i, e = r
                    }
                    return 0 !== e && (t.words[t.length++] = e), t
                }, n._prime = function(t) {
                    var e;
                    if (y[t]) return y[t];
                    if ("k256" === t) e = new w;
                    else if ("p224" === t) e = new M;
                    else if ("p192" === t) e = new S;
                    else if ("p25519" === t) e = new k;
                    else throw Error("Unknown prime " + t);
                    return y[t] = e, e
                }, E.prototype._verify1 = function(t) {
                    r(0 === t.negative, "red works only with positives"), r(t.red, "red works only with red numbers")
                }, E.prototype._verify2 = function(t, e) {
                    r((t.negative | e.negative) == 0, "red works only with positives"), r(t.red && t.red === e.red, "red works only with red numbers")
                }, E.prototype.imod = function(t) {
                    return this.prime ? this.prime.ireduce(t)._forceRed(this) : (u(t, t.umod(this.m)._forceRed(this)), t)
                }, E.prototype.neg = function(t) {
                    return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                }, E.prototype.add = function(t, e) {
                    this._verify2(t, e);
                    var s = t.add(e);
                    return s.cmp(this.m) >= 0 && s.isub(this.m), s._forceRed(this)
                }, E.prototype.iadd = function(t, e) {
                    this._verify2(t, e);
                    var s = t.iadd(e);
                    return s.cmp(this.m) >= 0 && s.isub(this.m), s
                }, E.prototype.sub = function(t, e) {
                    this._verify2(t, e);
                    var s = t.sub(e);
                    return 0 > s.cmpn(0) && s.iadd(this.m), s._forceRed(this)
                }, E.prototype.isub = function(t, e) {
                    this._verify2(t, e);
                    var s = t.isub(e);
                    return 0 > s.cmpn(0) && s.iadd(this.m), s
                }, E.prototype.shl = function(t, e) {
                    return this._verify1(t), this.imod(t.ushln(e))
                }, E.prototype.imul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.imul(e))
                }, E.prototype.mul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.mul(e))
                }, E.prototype.isqr = function(t) {
                    return this.imul(t, t.clone())
                }, E.prototype.sqr = function(t) {
                    return this.mul(t, t)
                }, E.prototype.sqrt = function(t) {
                    if (t.isZero()) return t.clone();
                    var e = this.m.andln(3);
                    if (r(e % 2 == 1), 3 === e) {
                        var s = this.m.add(new n(1)).iushrn(2);
                        return this.pow(t, s)
                    }
                    for (var i = this.m.subn(1), c = 0; !i.isZero() && 0 === i.andln(1);) c++, i.iushrn(1);
                    r(!i.isZero());
                    var o = new n(1).toRed(this),
                        f = o.redNeg(),
                        u = this.m.subn(1).iushrn(1),
                        a = this.m.bitLength();
                    for (a = new n(2 * a * a).toRed(this); 0 !== this.pow(a, u).cmp(f);) a.redIAdd(f);
                    for (var d = this.pow(a, i), p = this.pow(t, i.addn(1).iushrn(1)), b = this.pow(t, i), h = c; 0 !== b.cmp(o);) {
                        for (var l = b, g = 0; 0 !== l.cmp(o); g++) l = l.redSqr();
                        r(g < h);
                        var v = this.pow(d, new n(1).iushln(h - g - 1));
                        p = p.redMul(v), d = v.redSqr(), b = b.redMul(d), h = g
                    }
                    return p
                }, E.prototype.invm = function(t) {
                    var e = t._invmp(this.m);
                    return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e)
                }, E.prototype.pow = function(t, e) {
                    if (e.isZero()) return new n(1).toRed(this);
                    if (0 === e.cmpn(1)) return t.clone();
                    var s = Array(16);
                    s[0] = new n(1).toRed(this), s[1] = t;
                    for (var r = 2; r < s.length; r++) s[r] = this.mul(s[r - 1], t);
                    var i = s[0],
                        c = 0,
                        o = 0,
                        f = e.bitLength() % 26;
                    for (0 === f && (f = 26), r = e.length - 1; r >= 0; r--) {
                        for (var u = e.words[r], a = f - 1; a >= 0; a--) {
                            var d = u >> a & 1;
                            if (i !== s[0] && (i = this.sqr(i)), 0 === d && 0 === c) {
                                o = 0;
                                continue
                            }
                            c <<= 1, c |= d, (4 == ++o || 0 === r && 0 === a) && (i = this.mul(i, s[c]), o = 0, c = 0)
                        }
                        f = 26
                    }
                    return i
                }, E.prototype.convertTo = function(t) {
                    var e = t.umod(this.m);
                    return e === t ? e.clone() : e
                }, E.prototype.convertFrom = function(t) {
                    var e = t.clone();
                    return e.red = null, e
                }, n.mont = function(t) {
                    return new A(t)
                }, i(A, E), A.prototype.convertTo = function(t) {
                    return this.imod(t.ushln(this.shift))
                }, A.prototype.convertFrom = function(t) {
                    var e = this.imod(t.mul(this.rinv));
                    return e.red = null, e
                }, A.prototype.imul = function(t, e) {
                    if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
                    var s = t.imul(e),
                        r = s.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = s.isub(r).iushrn(this.shift),
                        n = i;
                    return i.cmp(this.m) >= 0 ? n = i.isub(this.m) : 0 > i.cmpn(0) && (n = i.iadd(this.m)), n._forceRed(this)
                }, A.prototype.mul = function(t, e) {
                    if (t.isZero() || e.isZero()) return new n(0)._forceRed(this);
                    var s = t.mul(e),
                        r = s.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = s.isub(r).iushrn(this.shift),
                        c = i;
                    return i.cmp(this.m) >= 0 ? c = i.isub(this.m) : 0 > i.cmpn(0) && (c = i.iadd(this.m)), c._forceRed(this)
                }, A.prototype.invm = function(t) {
                    return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                }
            }(void 0 === t || t, this)