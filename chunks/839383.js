            t = r.nmd(t), r("70102"), r("781738"), r("274635"), r("854508"), ! function(t, e) {
                "use strict";

                function i(t, e) {
                    if (!t) throw Error(e || "Assertion failed")
                }

                function n(t, e) {
                    t.super_ = e;
                    var r = function() {};
                    r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                }

                function a(t, e, r) {
                    if (a.isBN(t)) return t;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && (("le" === e || "be" === e) && (r = e, e = 10), this._init(t || 0, e || 10, r || "be"))
                }
                "object" == typeof t ? t.exports = a : e.BN = a, a.BN = a, a.wordSize = 26;
                try {
                    u = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : r("495873").Buffer
                } catch (t) {}

                function o(t, e) {
                    var r = t.charCodeAt(e);
                    if (r >= 48 && r <= 57) return r - 48;
                    if (r >= 65 && r <= 70) return r - 55;
                    if (r >= 97 && r <= 102) return r - 87;
                    i(!1, "Invalid character in " + t)
                }

                function s(t, e, r) {
                    var i = o(t, r);
                    return r - 1 >= e && (i |= o(t, r - 1) << 4), i
                }

                function f(t, e, r, n) {
                    for (var a = 0, o = 0, s = Math.min(t.length, r), f = e; f < s; f++) {
                        var h = t.charCodeAt(f) - 48;
                        a *= n, o = h >= 49 ? h - 49 + 10 : h >= 17 ? h - 17 + 10 : h, i(h >= 0 && o < n, "Invalid character"), a += o
                    }
                    return a
                }

                function h(t, e) {
                    t.words = e.words, t.length = e.length, t.negative = e.negative, t.red = e.red
                }
                if (a.isBN = function(t) {
                        return t instanceof a || null !== t && "object" == typeof t && t.constructor.wordSize === a.wordSize && Array.isArray(t.words)
                    }, a.max = function(t, e) {
                        return t.cmp(e) > 0 ? t : e
                    }, a.min = function(t, e) {
                        return 0 > t.cmp(e) ? t : e
                    }, a.prototype._init = function(t, e, r) {
                        if ("number" == typeof t) return this._initNumber(t, e, r);
                        if ("object" == typeof t) return this._initArray(t, e, r);
                        "hex" === e && (e = 16), i(e === (0 | e) && e >= 2 && e <= 36), t = t.toString().replace(/\s+/g, "");
                        var n = 0;
                        "-" === t[0] && (n++, this.negative = 1), n < t.length && (16 === e ? this._parseHex(t, n, r) : (this._parseBase(t, e, n), "le" === r && this._initArray(this.toArray(), e, r)))
                    }, a.prototype._initNumber = function(t, e, r) {
                        t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (i(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), e, r)
                    }, a.prototype._initArray = function(t, e, r) {
                        if (i("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                        this.length = Math.ceil(t.length / 3), this.words = Array(this.length);
                        for (var n, a, o = 0; o < this.length; o++) this.words[o] = 0;
                        var s = 0;
                        if ("be" === r)
                            for (o = t.length - 1, n = 0; o >= 0; o -= 3) a = t[o] | t[o - 1] << 8 | t[o - 2] << 16, this.words[n] |= a << s & 67108863, this.words[n + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, n++);
                        else if ("le" === r)
                            for (o = 0, n = 0; o < t.length; o += 3) a = t[o] | t[o + 1] << 8 | t[o + 2] << 16, this.words[n] |= a << s & 67108863, this.words[n + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, n++);
                        return this._strip()
                    }, a.prototype._parseHex = function(t, e, r) {
                        this.length = Math.ceil((t.length - e) / 6), this.words = Array(this.length);
                        for (var i, n = 0; n < this.length; n++) this.words[n] = 0;
                        var a = 0,
                            o = 0;
                        if ("be" === r)
                            for (n = t.length - 1; n >= e; n -= 2) i = s(t, e, n) << a, this.words[o] |= 67108863 & i, a >= 18 ? (a -= 18, o += 1, this.words[o] |= i >>> 26) : a += 8;
                        else
                            for (n = (t.length - e) % 2 == 0 ? e + 1 : e; n < t.length; n += 2) i = s(t, e, n) << a, this.words[o] |= 67108863 & i, a >= 18 ? (a -= 18, o += 1, this.words[o] |= i >>> 26) : a += 8;
                        this._strip()
                    }, a.prototype._parseBase = function(t, e, r) {
                        this.words = [0], this.length = 1;
                        for (var i = 0, n = 1; n <= 67108863; n *= e) i++;
                        i--, n = n / e | 0;
                        for (var a = t.length - r, o = a % i, s = Math.min(a, a - o) + r, h = 0, c = r; c < s; c += i) h = f(t, c, c + i, e), this.imuln(n), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h);
                        if (0 !== o) {
                            var u = 1;
                            for (h = f(t, c, t.length, e), c = 0; c < o; c++) u *= e;
                            this.imuln(u), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h)
                        }
                        this._strip()
                    }, a.prototype.copy = function(t) {
                        t.words = Array(this.length);
                        for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
                        t.length = this.length, t.negative = this.negative, t.red = this.red
                    }, a.prototype._move = function(t) {
                        h(t, this)
                    }, a.prototype.clone = function() {
                        var t = new a(null);
                        return this.copy(t), t
                    }, a.prototype._expand = function(t) {
                        for (; this.length < t;) this.words[this.length++] = 0;
                        return this
                    }, a.prototype._strip = function() {
                        for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                        return this._normSign()
                    }, a.prototype._normSign = function() {
                        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                    }, "undefined" != typeof Symbol && "function" == typeof Symbol.for) try {
                    a.prototype[Symbol.for("nodejs.util.inspect.custom")] = c
                } catch (t) {
                    a.prototype.inspect = c
                } else a.prototype.inspect = c;

                function c() {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                }
                var u, d = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                    l = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    p = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
                a.prototype.toString = function(t, e) {
                    if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
                        r = "";
                        for (var r, n = 0, a = 0, o = 0; o < this.length; o++) {
                            var s = this.words[o],
                                f = ((s << n | a) & 16777215).toString(16);
                            a = s >>> 24 - n & 16777215, (n += 2) >= 26 && (n -= 26, o--), r = 0 !== a || o !== this.length - 1 ? d[6 - f.length] + f + r : f + r
                        }
                        for (0 !== a && (r = a.toString(16) + r); r.length % e != 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    if (t === (0 | t) && t >= 2 && t <= 36) {
                        var h = l[t],
                            c = p[t];
                        r = "";
                        var u = this.clone();
                        for (u.negative = 0; !u.isZero();) {
                            var b = u.modrn(c).toString(t);
                            r = (u = u.idivn(c)).isZero() ? b + r : d[h - b.length] + b + r
                        }
                        for (this.isZero() && (r = "0" + r); r.length % e != 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    i(!1, "Base should be between 2 and 36")
                }, a.prototype.toNumber = function() {
                    var t = this.words[0];
                    return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && i(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                }, a.prototype.toJSON = function() {
                    return this.toString(16, 2)
                }, u && (a.prototype.toBuffer = function(t, e) {
                    return this.toArrayLike(u, t, e)
                }), a.prototype.toArray = function(t, e) {
                    return this.toArrayLike(Array, t, e)
                };
                a.prototype.toArrayLike = function(t, e, r) {
                    this._strip();
                    var n, a, o = this.byteLength(),
                        s = r || Math.max(1, o);
                    i(o <= s, "byte array longer than desired length"), i(s > 0, "Requested array length <= 0");
                    var f = (n = t, a = s, n.allocUnsafe ? n.allocUnsafe(a) : new n(a));
                    return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](f, o), f
                }, a.prototype._toArrayLikeLE = function(t, e) {
                    for (var r = 0, i = 0, n = 0, a = 0; n < this.length; n++) {
                        var o = this.words[n] << a | i;
                        t[r++] = 255 & o, r < t.length && (t[r++] = o >> 8 & 255), r < t.length && (t[r++] = o >> 16 & 255), 6 === a ? (r < t.length && (t[r++] = o >> 24 & 255), i = 0, a = 0) : (i = o >>> 24, a += 2)
                    }
                    if (r < t.length)
                        for (t[r++] = i; r < t.length;) t[r++] = 0
                }, a.prototype._toArrayLikeBE = function(t, e) {
                    for (var r = t.length - 1, i = 0, n = 0, a = 0; n < this.length; n++) {
                        var o = this.words[n] << a | i;
                        t[r--] = 255 & o, r >= 0 && (t[r--] = o >> 8 & 255), r >= 0 && (t[r--] = o >> 16 & 255), 6 === a ? (r >= 0 && (t[r--] = o >> 24 & 255), i = 0, a = 0) : (i = o >>> 24, a += 2)
                    }
                    if (r >= 0)
                        for (t[r--] = i; r >= 0;) t[r--] = 0
                }, Math.clz32 ? a.prototype._countBits = function(t) {
                    return 32 - Math.clz32(t)
                } : a.prototype._countBits = function(t) {
                    var e = t,
                        r = 0;
                    return e >= 4096 && (r += 13, e >>>= 13), e >= 64 && (r += 7, e >>>= 7), e >= 8 && (r += 4, e >>>= 4), e >= 2 && (r += 2, e >>>= 2), r + e
                }, a.prototype._zeroBits = function(t) {
                    if (0 === t) return 26;
                    var e = t,
                        r = 0;
                    return (8191 & e) == 0 && (r += 13, e >>>= 13), (127 & e) == 0 && (r += 7, e >>>= 7), (15 & e) == 0 && (r += 4, e >>>= 4), (3 & e) == 0 && (r += 2, e >>>= 2), (1 & e) == 0 && r++, r
                }, a.prototype.bitLength = function() {
                    var t = this.words[this.length - 1],
                        e = this._countBits(t);
                    return (this.length - 1) * 26 + e
                };

                function b(t, e, r) {
                    r.negative = e.negative ^ t.negative;
                    var i = t.length + e.length | 0;
                    r.length = i, i = i - 1 | 0;
                    var n = 0 | t.words[0],
                        a = 0 | e.words[0],
                        o = n * a,
                        s = 67108863 & o,
                        f = o / 67108864 | 0;
                    r.words[0] = s;
                    for (var h = 1; h < i; h++) {
                        for (var c = f >>> 26, u = 67108863 & f, d = Math.min(h, e.length - 1), l = Math.max(0, h - t.length + 1); l <= d; l++) {
                            var p = h - l | 0;
                            n = 0 | t.words[p], c += (o = n * (a = 0 | e.words[l]) + u) / 67108864 | 0, u = 67108863 & o
                        }
                        r.words[h] = 0 | u, f = 0 | c
                    }
                    return 0 !== f ? r.words[h] = 0 | f : r.length--, r._strip()
                }
                a.prototype.zeroBits = function() {
                    if (this.isZero()) return 0;
                    for (var t = 0, e = 0; e < this.length; e++) {
                        var r = this._zeroBits(this.words[e]);
                        if (t += r, 26 !== r) break
                    }
                    return t
                }, a.prototype.byteLength = function() {
                    return Math.ceil(this.bitLength() / 8)
                }, a.prototype.toTwos = function(t) {
                    return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                }, a.prototype.fromTwos = function(t) {
                    return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                }, a.prototype.isNeg = function() {
                    return 0 !== this.negative
                }, a.prototype.neg = function() {
                    return this.clone().ineg()
                }, a.prototype.ineg = function() {
                    return !this.isZero() && (this.negative ^= 1), this
                }, a.prototype.iuor = function(t) {
                    for (; this.length < t.length;) this.words[this.length++] = 0;
                    for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
                    return this._strip()
                }, a.prototype.ior = function(t) {
                    return i((this.negative | t.negative) == 0), this.iuor(t)
                }, a.prototype.or = function(t) {
                    return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                }, a.prototype.uor = function(t) {
                    return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                }, a.prototype.iuand = function(t) {
                    var e;
                    e = this.length > t.length ? t : this;
                    for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];
                    return this.length = e.length, this._strip()
                }, a.prototype.iand = function(t) {
                    return i((this.negative | t.negative) == 0), this.iuand(t)
                }, a.prototype.and = function(t) {
                    return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                }, a.prototype.uand = function(t) {
                    return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                }, a.prototype.iuxor = function(t) {
                    this.length > t.length ? (e = this, r = t) : (e = t, r = this);
                    for (var e, r, i = 0; i < r.length; i++) this.words[i] = e.words[i] ^ r.words[i];
                    if (this !== e)
                        for (; i < e.length; i++) this.words[i] = e.words[i];
                    return this.length = e.length, this._strip()
                }, a.prototype.ixor = function(t) {
                    return i((this.negative | t.negative) == 0), this.iuxor(t)
                }, a.prototype.xor = function(t) {
                    return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                }, a.prototype.uxor = function(t) {
                    return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                }, a.prototype.inotn = function(t) {
                    i("number" == typeof t && t >= 0);
                    var e = 0 | Math.ceil(t / 26),
                        r = t % 26;
                    this._expand(e), r > 0 && e--;
                    for (var n = 0; n < e; n++) this.words[n] = 67108863 & ~this.words[n];
                    return r > 0 && (this.words[n] = ~this.words[n] & 67108863 >> 26 - r), this._strip()
                }, a.prototype.notn = function(t) {
                    return this.clone().inotn(t)
                }, a.prototype.setn = function(t, e) {
                    i("number" == typeof t && t >= 0);
                    var r = t / 26 | 0,
                        n = t % 26;
                    return this._expand(r + 1), e ? this.words[r] = this.words[r] | 1 << n : this.words[r] = this.words[r] & ~(1 << n), this._strip()
                }, a.prototype.iadd = function(t) {
                    if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                    if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                    this.length > t.length ? (r = this, i = t) : (r = t, i = this);
                    for (var e, r, i, n = 0, a = 0; a < i.length; a++) e = (0 | r.words[a]) + (0 | i.words[a]) + n, this.words[a] = 67108863 & e, n = e >>> 26;
                    for (; 0 !== n && a < r.length; a++) e = (0 | r.words[a]) + n, this.words[a] = 67108863 & e, n = e >>> 26;
                    if (this.length = r.length, 0 !== n) this.words[this.length] = n, this.length++;
                    else if (r !== this)
                        for (; a < r.length; a++) this.words[a] = r.words[a];
                    return this
                }, a.prototype.add = function(t) {
                    var e;
                    return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                }, a.prototype.isub = function(t) {
                    if (0 !== t.negative) {
                        t.negative = 0;
                        var e, r, i = this.iadd(t);
                        return t.negative = 1, i._normSign()
                    }
                    if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                    var n = this.cmp(t);
                    if (0 === n) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    n > 0 ? (e = this, r = t) : (e = t, r = this);
                    for (var a = 0, o = 0; o < r.length; o++) a = (i = (0 | e.words[o]) - (0 | r.words[o]) + a) >> 26, this.words[o] = 67108863 & i;
                    for (; 0 !== a && o < e.length; o++) a = (i = (0 | e.words[o]) + a) >> 26, this.words[o] = 67108863 & i;
                    if (0 === a && o < e.length && e !== this)
                        for (; o < e.length; o++) this.words[o] = e.words[o];
                    return this.length = Math.max(this.length, o), e !== this && (this.negative = 1), this._strip()
                }, a.prototype.sub = function(t) {
                    return this.clone().isub(t)
                };
                var m = function(t, e, r) {
                    var i, n, a, o = t.words,
                        s = e.words,
                        f = r.words,
                        h = 0,
                        c = 0 | o[0],
                        u = 8191 & c,
                        d = c >>> 13,
                        l = 0 | o[1],
                        p = 8191 & l,
                        b = l >>> 13,
                        m = 0 | o[2],
                        g = 8191 & m,
                        v = m >>> 13,
                        y = 0 | o[3],
                        _ = 8191 & y,
                        w = y >>> 13,
                        M = 0 | o[4],
                        S = 8191 & M,
                        k = M >>> 13,
                        E = 0 | o[5],
                        A = 8191 & E,
                        x = E >>> 13,
                        B = 0 | o[6],
                        R = 8191 & B,
                        I = B >>> 13,
                        C = 0 | o[7],
                        j = 8191 & C,
                        T = C >>> 13,
                        P = 0 | o[8],
                        z = 8191 & P,
                        O = P >>> 13,
                        L = 0 | o[9],
                        D = 8191 & L,
                        N = L >>> 13,
                        q = 0 | s[0],
                        U = 8191 & q,
                        F = q >>> 13,
                        K = 0 | s[1],
                        H = 8191 & K,
                        Z = K >>> 13,
                        W = 0 | s[2],
                        V = 8191 & W,
                        G = W >>> 13,
                        X = 0 | s[3],
                        Y = 8191 & X,
                        J = X >>> 13,
                        $ = 0 | s[4],
                        Q = 8191 & $,
                        tt = $ >>> 13,
                        te = 0 | s[5],
                        tr = 8191 & te,
                        ti = te >>> 13,
                        tn = 0 | s[6],
                        ta = 8191 & tn,
                        to = tn >>> 13,
                        ts = 0 | s[7],
                        tf = 8191 & ts,
                        th = ts >>> 13,
                        tc = 0 | s[8],
                        tu = 8191 & tc,
                        td = tc >>> 13,
                        tl = 0 | s[9],
                        tp = 8191 & tl,
                        tb = tl >>> 13;
                    r.negative = t.negative ^ e.negative, r.length = 19, i = Math.imul(u, U), n = (n = Math.imul(u, F)) + Math.imul(d, U) | 0;
                    var tm = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((a = Math.imul(d, F)) + (n >>> 13) | 0) + (tm >>> 26) | 0, tm &= 67108863, i = Math.imul(p, U), n = (n = Math.imul(p, F)) + Math.imul(b, U) | 0, a = Math.imul(b, F), i = i + Math.imul(u, H) | 0, n = (n = n + Math.imul(u, Z) | 0) + Math.imul(d, H) | 0;
                    var tg = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((a = a + Math.imul(d, Z) | 0) + (n >>> 13) | 0) + (tg >>> 26) | 0, tg &= 67108863, i = Math.imul(g, U), n = (n = Math.imul(g, F)) + Math.imul(v, U) | 0, a = Math.imul(v, F), i = i + Math.imul(p, H) | 0, n = (n = n + Math.imul(p, Z) | 0) + Math.imul(b, H) | 0, a = a + Math.imul(b, Z) | 0, i = i + Math.imul(u, V) | 0, n = (n = n + Math.imul(u, G) | 0) + Math.imul(d, V) | 0;
                    var tv = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((a = a + Math.imul(d, G) | 0) + (n >>> 13) | 0) + (tv >>> 26) | 0, tv &= 67108863, i = Math.imul(_, U), n = (n = Math.imul(_, F)) + Math.imul(w, U) | 0, a = Math.imul(w, F), i = i + Math.imul(g, H) | 0, n = (n = n + Math.imul(g, Z) | 0) + Math.imul(v, H) | 0, a = a + Math.imul(v, Z) | 0, i = i + Math.imul(p, V) | 0, n = (n = n + Math.imul(p, G) | 0) + Math.imul(b, V) | 0, a = a + Math.imul(b, G) | 0, i = i + Math.imul(u, Y) | 0, n = (n = n + Math.imul(u, J) | 0) + Math.imul(d, Y) | 0;
                    var ty = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((a = a + Math.imul(d, J) | 0) + (n >>> 13) | 0) + (ty >>> 26) | 0, ty &= 67108863, i = Math.imul(S, U), n = (n = Math.imul(S, F)) + Math.imul(k, U) | 0, a = Math.imul(k, F), i = i + Math.imul(_, H) | 0, n = (n = n + Math.imul(_, Z) | 0) + Math.imul(w, H) | 0, a = a + Math.imul(w, Z) | 0, i = i + Math.imul(g, V) | 0, n = (n = n + Math.imul(g, G) | 0) + Math.imul(v, V) | 0, a = a + Math.imul(v, G) | 0, i = i + Math.imul(p, Y) | 0, n = (n = n + Math.imul(p, J) | 0) + Math.imul(b, Y) | 0, a = a + Math.imul(b, J) | 0, i = i + Math.imul(u, Q) | 0, n = (n = n + Math.imul(u, tt) | 0) + Math.imul(d, Q) | 0;
                    var t_ = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((a = a + Math.imul(d, tt) | 0) + (n >>> 13) | 0) + (t_ >>> 26) | 0, t_ &= 67108863, i = Math.imul(A, U), n = (n = Math.imul(A, F)) + Math.imul(x, U) | 0, a = Math.imul(x, F), i = i + Math.imul(S, H) | 0, n = (n = n + Math.imul(S, Z) | 0) + Math.imul(k, H) | 0, a = a + Math.imul(k, Z) | 0, i = i + Math.imul(_, V) | 0, n = (n = n + Math.imul(_, G) | 0) + Math.imul(w, V) | 0, a = a + Math.imul(w, G) | 0, i = i + Math.imul(g, Y) | 0, n = (n = n + Math.imul(g, J) | 0) + Math.imul(v, Y) | 0, a = a + Math.imul(v, J) | 0, i = i + Math.imul(p, Q) | 0, n = (n = n + Math.imul(p, tt) | 0) + Math.imul(b, Q) | 0, a = a + Math.imul(b, tt) | 0, i = i + Math.imul(u, tr) | 0, n = (n = n + Math.imul(u, ti) | 0) + Math.imul(d, tr) | 0;
                    var tw = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((a = a + Math.imul(d, ti) | 0) + (n >>> 13) | 0) + (tw >>> 26) | 0, tw &= 67108863, i = Math.imul(R, U), n = (n = Math.imul(R, F)) + Math.imul(I, U) | 0, a = Math.imul(I, F), i = i + Math.imul(A, H) | 0, n = (n = n + Math.imul(A, Z) | 0) + Math.imul(x, H) | 0, a = a + Math.imul(x, Z) | 0, i = i + Math.imul(S, V) | 0, n = (n = n + Math.imul(S, G) | 0) + Math.imul(k, V) | 0, a = a + Math.imul(k, G) | 0, i = i + Math.imul(_, Y) | 0, n = (n = n + Math.imul(_, J) | 0) + Math.imul(w, Y) | 0, a = a + Math.imul(w, J) | 0, i = i + Math.imul(g, Q) | 0, n = (n = n + Math.imul(g, tt) | 0) + Math.imul(v, Q) | 0, a = a + Math.imul(v, tt) | 0, i = i + Math.imul(p, tr) | 0, n = (n = n + Math.imul(p, ti) | 0) + Math.imul(b, tr) | 0, a = a + Math.imul(b, ti) | 0, i = i + Math.imul(u, ta) | 0, n = (n = n + Math.imul(u, to) | 0) + Math.imul(d, ta) | 0;
                    var tM = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((a = a + Math.imul(d, to) | 0) + (n >>> 13) | 0) + (tM >>> 26) | 0, tM &= 67108863, i = Math.imul(j, U), n = (n = Math.imul(j, F)) + Math.imul(T, U) | 0, a = Math.imul(T, F), i = i + Math.imul(R, H) | 0, n = (n = n + Math.imul(R, Z) | 0) + Math.imul(I, H) | 0, a = a + Math.imul(I, Z) | 0, i = i + Math.imul(A, V) | 0, n = (n = n + Math.imul(A, G) | 0) + Math.imul(x, V) | 0, a = a + Math.imul(x, G) | 0, i = i + Math.imul(S, Y) | 0, n = (n = n + Math.imul(S, J) | 0) + Math.imul(k, Y) | 0, a = a + Math.imul(k, J) | 0, i = i + Math.imul(_, Q) | 0, n = (n = n + Math.imul(_, tt) | 0) + Math.imul(w, Q) | 0, a = a + Math.imul(w, tt) | 0, i = i + Math.imul(g, tr) | 0, n = (n = n + Math.imul(g, ti) | 0) + Math.imul(v, tr) | 0, a = a + Math.imul(v, ti) | 0, i = i + Math.imul(p, ta) | 0, n = (n = n + Math.imul(p, to) | 0) + Math.imul(b, ta) | 0, a = a + Math.imul(b, to) | 0, i = i + Math.imul(u, tf) | 0, n = (n = n + Math.imul(u, th) | 0) + Math.imul(d, tf) | 0;
                    var tS = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((a = a + Math.imul(d, th) | 0) + (n >>> 13) | 0) + (tS >>> 26) | 0, tS &= 67108863, i = Math.imul(z, U), n = (n = Math.imul(z, F)) + Math.imul(O, U) | 0, a = Math.imul(O, F), i = i + Math.imul(j, H) | 0, n = (n = n + Math.imul(j, Z) | 0) + Math.imul(T, H) | 0, a = a + Math.imul(T, Z) | 0, i = i + Math.imul(R, V) | 0, n = (n = n + Math.imul(R, G) | 0) + Math.imul(I, V) | 0, a = a + Math.imul(I, G) | 0, i = i + Math.imul(A, Y) | 0, n = (n = n + Math.imul(A, J) | 0) + Math.imul(x, Y) | 0, a = a + Math.imul(x, J) | 0, i = i + Math.imul(S, Q) | 0, n = (n = n + Math.imul(S, tt) | 0) + Math.imul(k, Q) | 0, a = a + Math.imul(k, tt) | 0, i = i + Math.imul(_, tr) | 0, n = (n = n + Math.imul(_, ti) | 0) + Math.imul(w, tr) | 0, a = a + Math.imul(w, ti) | 0, i = i + Math.imul(g, ta) | 0, n = (n = n + Math.imul(g, to) | 0) + Math.imul(v, ta) | 0, a = a + Math.imul(v, to) | 0, i = i + Math.imul(p, tf) | 0, n = (n = n + Math.imul(p, th) | 0) + Math.imul(b, tf) | 0, a = a + Math.imul(b, th) | 0, i = i + Math.imul(u, tu) | 0, n = (n = n + Math.imul(u, td) | 0) + Math.imul(d, tu) | 0;
                    var tk = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((a = a + Math.imul(d, td) | 0) + (n >>> 13) | 0) + (tk >>> 26) | 0, tk &= 67108863, i = Math.imul(D, U), n = (n = Math.imul(D, F)) + Math.imul(N, U) | 0, a = Math.imul(N, F), i = i + Math.imul(z, H) | 0, n = (n = n + Math.imul(z, Z) | 0) + Math.imul(O, H) | 0, a = a + Math.imul(O, Z) | 0, i = i + Math.imul(j, V) | 0, n = (n = n + Math.imul(j, G) | 0) + Math.imul(T, V) | 0, a = a + Math.imul(T, G) | 0, i = i + Math.imul(R, Y) | 0, n = (n = n + Math.imul(R, J) | 0) + Math.imul(I, Y) | 0, a = a + Math.imul(I, J) | 0, i = i + Math.imul(A, Q) | 0, n = (n = n + Math.imul(A, tt) | 0) + Math.imul(x, Q) | 0, a = a + Math.imul(x, tt) | 0, i = i + Math.imul(S, tr) | 0, n = (n = n + Math.imul(S, ti) | 0) + Math.imul(k, tr) | 0, a = a + Math.imul(k, ti) | 0, i = i + Math.imul(_, ta) | 0, n = (n = n + Math.imul(_, to) | 0) + Math.imul(w, ta) | 0, a = a + Math.imul(w, to) | 0, i = i + Math.imul(g, tf) | 0, n = (n = n + Math.imul(g, th) | 0) + Math.imul(v, tf) | 0, a = a + Math.imul(v, th) | 0, i = i + Math.imul(p, tu) | 0, n = (n = n + Math.imul(p, td) | 0) + Math.imul(b, tu) | 0, a = a + Math.imul(b, td) | 0, i = i + Math.imul(u, tp) | 0, n = (n = n + Math.imul(u, tb) | 0) + Math.imul(d, tp) | 0;
                    var tE = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((a = a + Math.imul(d, tb) | 0) + (n >>> 13) | 0) + (tE >>> 26) | 0, tE &= 67108863, i = Math.imul(D, H), n = (n = Math.imul(D, Z)) + Math.imul(N, H) | 0, a = Math.imul(N, Z), i = i + Math.imul(z, V) | 0, n = (n = n + Math.imul(z, G) | 0) + Math.imul(O, V) | 0, a = a + Math.imul(O, G) | 0, i = i + Math.imul(j, Y) | 0, n = (n = n + Math.imul(j, J) | 0) + Math.imul(T, Y) | 0, a = a + Math.imul(T, J) | 0, i = i + Math.imul(R, Q) | 0, n = (n = n + Math.imul(R, tt) | 0) + Math.imul(I, Q) | 0, a = a + Math.imul(I, tt) | 0, i = i + Math.imul(A, tr) | 0, n = (n = n + Math.imul(A, ti) | 0) + Math.imul(x, tr) | 0, a = a + Math.imul(x, ti) | 0, i = i + Math.imul(S, ta) | 0, n = (n = n + Math.imul(S, to) | 0) + Math.imul(k, ta) | 0, a = a + Math.imul(k, to) | 0, i = i + Math.imul(_, tf) | 0, n = (n = n + Math.imul(_, th) | 0) + Math.imul(w, tf) | 0, a = a + Math.imul(w, th) | 0, i = i + Math.imul(g, tu) | 0, n = (n = n + Math.imul(g, td) | 0) + Math.imul(v, tu) | 0, a = a + Math.imul(v, td) | 0, i = i + Math.imul(p, tp) | 0, n = (n = n + Math.imul(p, tb) | 0) + Math.imul(b, tp) | 0;
                    var tA = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((a = a + Math.imul(b, tb) | 0) + (n >>> 13) | 0) + (tA >>> 26) | 0, tA &= 67108863, i = Math.imul(D, V), n = (n = Math.imul(D, G)) + Math.imul(N, V) | 0, a = Math.imul(N, G), i = i + Math.imul(z, Y) | 0, n = (n = n + Math.imul(z, J) | 0) + Math.imul(O, Y) | 0, a = a + Math.imul(O, J) | 0, i = i + Math.imul(j, Q) | 0, n = (n = n + Math.imul(j, tt) | 0) + Math.imul(T, Q) | 0, a = a + Math.imul(T, tt) | 0, i = i + Math.imul(R, tr) | 0, n = (n = n + Math.imul(R, ti) | 0) + Math.imul(I, tr) | 0, a = a + Math.imul(I, ti) | 0, i = i + Math.imul(A, ta) | 0, n = (n = n + Math.imul(A, to) | 0) + Math.imul(x, ta) | 0, a = a + Math.imul(x, to) | 0, i = i + Math.imul(S, tf) | 0, n = (n = n + Math.imul(S, th) | 0) + Math.imul(k, tf) | 0, a = a + Math.imul(k, th) | 0, i = i + Math.imul(_, tu) | 0, n = (n = n + Math.imul(_, td) | 0) + Math.imul(w, tu) | 0, a = a + Math.imul(w, td) | 0, i = i + Math.imul(g, tp) | 0, n = (n = n + Math.imul(g, tb) | 0) + Math.imul(v, tp) | 0;
                    var tx = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((a = a + Math.imul(v, tb) | 0) + (n >>> 13) | 0) + (tx >>> 26) | 0, tx &= 67108863, i = Math.imul(D, Y), n = (n = Math.imul(D, J)) + Math.imul(N, Y) | 0, a = Math.imul(N, J), i = i + Math.imul(z, Q) | 0, n = (n = n + Math.imul(z, tt) | 0) + Math.imul(O, Q) | 0, a = a + Math.imul(O, tt) | 0, i = i + Math.imul(j, tr) | 0, n = (n = n + Math.imul(j, ti) | 0) + Math.imul(T, tr) | 0, a = a + Math.imul(T, ti) | 0, i = i + Math.imul(R, ta) | 0, n = (n = n + Math.imul(R, to) | 0) + Math.imul(I, ta) | 0, a = a + Math.imul(I, to) | 0, i = i + Math.imul(A, tf) | 0, n = (n = n + Math.imul(A, th) | 0) + Math.imul(x, tf) | 0, a = a + Math.imul(x, th) | 0, i = i + Math.imul(S, tu) | 0, n = (n = n + Math.imul(S, td) | 0) + Math.imul(k, tu) | 0, a = a + Math.imul(k, td) | 0, i = i + Math.imul(_, tp) | 0, n = (n = n + Math.imul(_, tb) | 0) + Math.imul(w, tp) | 0;
                    var tB = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((a = a + Math.imul(w, tb) | 0) + (n >>> 13) | 0) + (tB >>> 26) | 0, tB &= 67108863, i = Math.imul(D, Q), n = (n = Math.imul(D, tt)) + Math.imul(N, Q) | 0, a = Math.imul(N, tt), i = i + Math.imul(z, tr) | 0, n = (n = n + Math.imul(z, ti) | 0) + Math.imul(O, tr) | 0, a = a + Math.imul(O, ti) | 0, i = i + Math.imul(j, ta) | 0, n = (n = n + Math.imul(j, to) | 0) + Math.imul(T, ta) | 0, a = a + Math.imul(T, to) | 0, i = i + Math.imul(R, tf) | 0, n = (n = n + Math.imul(R, th) | 0) + Math.imul(I, tf) | 0, a = a + Math.imul(I, th) | 0, i = i + Math.imul(A, tu) | 0, n = (n = n + Math.imul(A, td) | 0) + Math.imul(x, tu) | 0, a = a + Math.imul(x, td) | 0, i = i + Math.imul(S, tp) | 0, n = (n = n + Math.imul(S, tb) | 0) + Math.imul(k, tp) | 0;
                    var tR = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((a = a + Math.imul(k, tb) | 0) + (n >>> 13) | 0) + (tR >>> 26) | 0, tR &= 67108863, i = Math.imul(D, tr), n = (n = Math.imul(D, ti)) + Math.imul(N, tr) | 0, a = Math.imul(N, ti), i = i + Math.imul(z, ta) | 0, n = (n = n + Math.imul(z, to) | 0) + Math.imul(O, ta) | 0, a = a + Math.imul(O, to) | 0, i = i + Math.imul(j, tf) | 0, n = (n = n + Math.imul(j, th) | 0) + Math.imul(T, tf) | 0, a = a + Math.imul(T, th) | 0, i = i + Math.imul(R, tu) | 0, n = (n = n + Math.imul(R, td) | 0) + Math.imul(I, tu) | 0, a = a + Math.imul(I, td) | 0, i = i + Math.imul(A, tp) | 0, n = (n = n + Math.imul(A, tb) | 0) + Math.imul(x, tp) | 0;
                    var tI = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((a = a + Math.imul(x, tb) | 0) + (n >>> 13) | 0) + (tI >>> 26) | 0, tI &= 67108863, i = Math.imul(D, ta), n = (n = Math.imul(D, to)) + Math.imul(N, ta) | 0, a = Math.imul(N, to), i = i + Math.imul(z, tf) | 0, n = (n = n + Math.imul(z, th) | 0) + Math.imul(O, tf) | 0, a = a + Math.imul(O, th) | 0, i = i + Math.imul(j, tu) | 0, n = (n = n + Math.imul(j, td) | 0) + Math.imul(T, tu) | 0, a = a + Math.imul(T, td) | 0, i = i + Math.imul(R, tp) | 0, n = (n = n + Math.imul(R, tb) | 0) + Math.imul(I, tp) | 0;
                    var tC = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((a = a + Math.imul(I, tb) | 0) + (n >>> 13) | 0) + (tC >>> 26) | 0, tC &= 67108863, i = Math.imul(D, tf), n = (n = Math.imul(D, th)) + Math.imul(N, tf) | 0, a = Math.imul(N, th), i = i + Math.imul(z, tu) | 0, n = (n = n + Math.imul(z, td) | 0) + Math.imul(O, tu) | 0, a = a + Math.imul(O, td) | 0, i = i + Math.imul(j, tp) | 0, n = (n = n + Math.imul(j, tb) | 0) + Math.imul(T, tp) | 0;
                    var tj = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((a = a + Math.imul(T, tb) | 0) + (n >>> 13) | 0) + (tj >>> 26) | 0, tj &= 67108863, i = Math.imul(D, tu), n = (n = Math.imul(D, td)) + Math.imul(N, tu) | 0, a = Math.imul(N, td), i = i + Math.imul(z, tp) | 0, n = (n = n + Math.imul(z, tb) | 0) + Math.imul(O, tp) | 0;
                    var tT = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((a = a + Math.imul(O, tb) | 0) + (n >>> 13) | 0) + (tT >>> 26) | 0, tT &= 67108863, i = Math.imul(D, tp), n = (n = Math.imul(D, tb)) + Math.imul(N, tp) | 0;
                    var tP = (h + i | 0) + ((8191 & n) << 13) | 0;
                    return h = ((a = Math.imul(N, tb)) + (n >>> 13) | 0) + (tP >>> 26) | 0, tP &= 67108863, f[0] = tm, f[1] = tg, f[2] = tv, f[3] = ty, f[4] = t_, f[5] = tw, f[6] = tM, f[7] = tS, f[8] = tk, f[9] = tE, f[10] = tA, f[11] = tx, f[12] = tB, f[13] = tR, f[14] = tI, f[15] = tC, f[16] = tj, f[17] = tT, f[18] = tP, 0 !== h && (f[19] = h, r.length++), r
                };

                function g(t, e, r) {
                    r.negative = e.negative ^ t.negative, r.length = t.length + e.length;
                    for (var i = 0, n = 0, a = 0; a < r.length - 1; a++) {
                        var o = n;
                        n = 0;
                        for (var s = 67108863 & i, f = Math.min(a, e.length - 1), h = Math.max(0, a - t.length + 1); h <= f; h++) {
                            var c = a - h,
                                u = (0 | t.words[c]) * (0 | e.words[h]),
                                d = 67108863 & u;
                            o = o + (u / 67108864 | 0) | 0, s = 67108863 & (d = d + s | 0), n += (o = o + (d >>> 26) | 0) >>> 26, o &= 67108863
                        }
                        r.words[a] = s, i = o, o = n
                    }
                    return 0 !== i ? r.words[a] = i : r.length--, r._strip()
                }

                function v(t, e, r) {
                    return g(t, e, r)
                }

                function y(t, e) {
                    this.x = t, this.y = e
                }!Math.imul && (m = b), a.prototype.mulTo = function(t, e) {
                    var r, i, n = this.length + t.length;
                    if (10 === this.length && 10 === t.length) i = m(this, t, e);
                    else if (n < 63) i = b(this, t, e);
                    else if (n < 1024) i = g(this, t, e);
                    else {
                        ;
                        r = this, i = g(r, t, e)
                    }
                    return i
                }, y.prototype.makeRBT = function(t) {
                    for (var e = Array(t), r = a.prototype._countBits(t) - 1, i = 0; i < t; i++) e[i] = this.revBin(i, r, t);
                    return e
                }, y.prototype.revBin = function(t, e, r) {
                    if (0 === t || t === r - 1) return t;
                    for (var i = 0, n = 0; n < e; n++) i |= (1 & t) << e - n - 1, t >>= 1;
                    return i
                }, y.prototype.permute = function(t, e, r, i, n, a) {
                    for (var o = 0; o < a; o++) i[o] = e[t[o]], n[o] = r[t[o]]
                }, y.prototype.transform = function(t, e, r, i, n, a) {
                    this.permute(a, t, e, r, i, n);
                    for (var o = 1; o < n; o <<= 1) {
                        for (var s = o << 1, f = Math.cos(2 * Math.PI / s), h = Math.sin(2 * Math.PI / s), c = 0; c < n; c += s) {
                            for (var u = f, d = h, l = 0; l < o; l++) {
                                var p = r[c + l],
                                    b = i[c + l],
                                    m = r[c + l + o],
                                    g = i[c + l + o],
                                    v = u * m - d * g;
                                g = u * g + d * m, m = v, r[c + l] = p + m, i[c + l] = b + g, r[c + l + o] = p - m, i[c + l + o] = b - g, l !== s && (v = f * u - h * d, d = f * d + h * u, u = v)
                            }
                        }
                    }
                }, y.prototype.guessLen13b = function(t, e) {
                    var r = 1 | Math.max(e, t),
                        i = 1 & r,
                        n = 0;
                    for (r = r / 2 | 0; r; r >>>= 1) n++;
                    return 1 << n + 1 + i
                }, y.prototype.conjugate = function(t, e, r) {
                    if (!(r <= 1))
                        for (var i = 0; i < r / 2; i++) {
                            var n = t[i];
                            t[i] = t[r - i - 1], t[r - i - 1] = n, n = e[i], e[i] = -e[r - i - 1], e[r - i - 1] = -n
                        }
                }, y.prototype.normalize13b = function(t, e) {
                    for (var r = 0, i = 0; i < e / 2; i++) {
                        var n = 8192 * Math.round(t[2 * i + 1] / e) + Math.round(t[2 * i] / e) + r;
                        t[i] = 67108863 & n, r = n < 67108864 ? 0 : n / 67108864 | 0
                    }
                    return t
                }, y.prototype.convert13b = function(t, e, r, n) {
                    for (var a = 0, o = 0; o < e; o++) a += 0 | t[o], r[2 * o] = 8191 & a, a >>>= 13, r[2 * o + 1] = 8191 & a, a >>>= 13;
                    for (o = 2 * e; o < n; ++o) r[o] = 0;
                    i(0 === a), i((-8192 & a) == 0)
                }, y.prototype.stub = function(t) {
                    for (var e = Array(t), r = 0; r < t; r++) e[r] = 0;
                    return e
                }, y.prototype.mulp = function(t, e, r) {
                    var i = 2 * this.guessLen13b(t.length, e.length),
                        n = this.makeRBT(i),
                        a = this.stub(i),
                        o = Array(i),
                        s = Array(i),
                        f = Array(i),
                        h = Array(i),
                        c = Array(i),
                        u = Array(i),
                        d = r.words;
                    d.length = i, this.convert13b(t.words, t.length, o, i), this.convert13b(e.words, e.length, h, i), this.transform(o, a, s, f, i, n), this.transform(h, a, c, u, i, n);
                    for (var l = 0; l < i; l++) {
                        var p = s[l] * c[l] - f[l] * u[l];
                        f[l] = s[l] * u[l] + f[l] * c[l], s[l] = p
                    }
                    return this.conjugate(s, f, i), this.transform(s, f, d, a, i, n), this.conjugate(d, a, i), this.normalize13b(d, i), r.negative = t.negative ^ e.negative, r.length = t.length + e.length, r._strip()
                }, a.prototype.mul = function(t) {
                    var e = new a(null);
                    return e.words = Array(this.length + t.length), this.mulTo(t, e)
                }, a.prototype.mulf = function(t) {
                    var e, r = new a(null);
                    return r.words = Array(this.length + t.length), e = this, g(e, t, r)
                }, a.prototype.imul = function(t) {
                    return this.clone().mulTo(t, this)
                }, a.prototype.imuln = function(t) {
                    var e = t < 0;
                    e && (t = -t), i("number" == typeof t), i(t < 67108864);
                    for (var r = 0, n = 0; n < this.length; n++) {
                        var a = (0 | this.words[n]) * t,
                            o = (67108863 & a) + (67108863 & r);
                        r >>= 26, r += (a / 67108864 | 0) + (o >>> 26), this.words[n] = 67108863 & o
                    }
                    return 0 !== r && (this.words[n] = r, this.length++), e ? this.ineg() : this
                }, a.prototype.muln = function(t) {
                    return this.clone().imuln(t)
                }, a.prototype.sqr = function() {
                    return this.mul(this)
                }, a.prototype.isqr = function() {
                    return this.imul(this.clone())
                }, a.prototype.pow = function(t) {
                    var e = function(t) {
                        for (var e = Array(t.bitLength()), r = 0; r < e.length; r++) {
                            var i = r / 26 | 0,
                                n = r % 26;
                            e[r] = t.words[i] >>> n & 1
                        }
                        return e
                    }(t);
                    if (0 === e.length) return new a(1);
                    for (var r = this, i = 0; i < e.length && 0 === e[i]; i++, r = r.sqr());
                    if (++i < e.length)
                        for (var n = r.sqr(); i < e.length; i++, n = n.sqr()) 0 !== e[i] && (r = r.mul(n));
                    return r
                }, a.prototype.iushln = function(t) {
                    i("number" == typeof t && t >= 0);
                    var e, r = t % 26,
                        n = (t - r) / 26,
                        a = 67108863 >>> 26 - r << 26 - r;
                    if (0 !== r) {
                        var o = 0;
                        for (e = 0; e < this.length; e++) {
                            var s = this.words[e] & a,
                                f = (0 | this.words[e]) - s << r;
                            this.words[e] = f | o, o = s >>> 26 - r
                        }
                        o && (this.words[e] = o, this.length++)
                    }
                    if (0 !== n) {
                        for (e = this.length - 1; e >= 0; e--) this.words[e + n] = this.words[e];
                        for (e = 0; e < n; e++) this.words[e] = 0;
                        this.length += n
                    }
                    return this._strip()
                }, a.prototype.ishln = function(t) {
                    return i(0 === this.negative), this.iushln(t)
                }, a.prototype.iushrn = function(t, e, r) {
                    i("number" == typeof t && t >= 0), n = e ? (e - e % 26) / 26 : 0;
                    var n, a = t % 26,
                        o = Math.min((t - a) / 26, this.length),
                        s = 67108863 ^ 67108863 >>> a << a;
                    if (n -= o, n = Math.max(0, n), r) {
                        for (var f = 0; f < o; f++) r.words[f] = this.words[f];
                        r.length = o
                    }
                    if (0 === o);
                    else if (this.length > o)
                        for (this.length -= o, f = 0; f < this.length; f++) this.words[f] = this.words[f + o];
                    else this.words[0] = 0, this.length = 1;
                    var h = 0;
                    for (f = this.length - 1; f >= 0 && (0 !== h || f >= n); f--) {
                        var c = 0 | this.words[f];
                        this.words[f] = h << 26 - a | c >>> a, h = c & s
                    }
                    return r && 0 !== h && (r.words[r.length++] = h), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                }, a.prototype.ishrn = function(t, e, r) {
                    return i(0 === this.negative), this.iushrn(t, e, r)
                }, a.prototype.shln = function(t) {
                    return this.clone().ishln(t)
                }, a.prototype.ushln = function(t) {
                    return this.clone().iushln(t)
                }, a.prototype.shrn = function(t) {
                    return this.clone().ishrn(t)
                }, a.prototype.ushrn = function(t) {
                    return this.clone().iushrn(t)
                }, a.prototype.testn = function(t) {
                    i("number" == typeof t && t >= 0);
                    var e = t % 26,
                        r = (t - e) / 26;
                    return !(this.length <= r) && !!(this.words[r] & 1 << e)
                }, a.prototype.imaskn = function(t) {
                    i("number" == typeof t && t >= 0);
                    var e = t % 26,
                        r = (t - e) / 26;
                    return (i(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) ? this : (0 !== e && r++, this.length = Math.min(r, this.length), 0 !== e && (this.words[this.length - 1] &= 67108863 ^ 67108863 >>> e << e), this._strip())
                }, a.prototype.maskn = function(t) {
                    return this.clone().imaskn(t)
                }, a.prototype.iaddn = function(t) {
                    if (i("number" == typeof t), i(t < 67108864), t < 0) return this.isubn(-t);
                    if (0 !== this.negative) return 1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this);
                    return this._iaddn(t)
                }, a.prototype._iaddn = function(t) {
                    this.words[0] += t;
                    for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                    return this.length = Math.max(this.length, e + 1), this
                }, a.prototype.isubn = function(t) {
                    if (i("number" == typeof t), i(t < 67108864), t < 0) return this.iaddn(-t);
                    if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                    if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                    else
                        for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, this.words[e + 1] -= 1;
                    return this._strip()
                }, a.prototype.addn = function(t) {
                    return this.clone().iaddn(t)
                }, a.prototype.subn = function(t) {
                    return this.clone().isubn(t)
                }, a.prototype.iabs = function() {
                    return this.negative = 0, this
                }, a.prototype.abs = function() {
                    return this.clone().iabs()
                }, a.prototype._ishlnsubmul = function(t, e, r) {
                    var n, a, o = t.length + r;
                    this._expand(o);
                    var s = 0;
                    for (n = 0; n < t.length; n++) {
                        a = (0 | this.words[n + r]) + s;
                        var f = (0 | t.words[n]) * e;
                        a -= 67108863 & f, s = (a >> 26) - (f / 67108864 | 0), this.words[n + r] = 67108863 & a
                    }
                    for (; n < this.length - r; n++) s = (a = (0 | this.words[n + r]) + s) >> 26, this.words[n + r] = 67108863 & a;
                    if (0 === s) return this._strip();
                    for (i(-1 === s), s = 0, n = 0; n < this.length; n++) s = (a = -(0 | this.words[n]) + s) >> 26, this.words[n] = 67108863 & a;
                    return this.negative = 1, this._strip()
                }, a.prototype._wordDiv = function(t, e) {
                    var r, i = this.length - t.length,
                        n = this.clone(),
                        o = t,
                        s = 0 | o.words[o.length - 1];
                    0 != (i = 26 - this._countBits(s)) && (o = o.ushln(i), n.iushln(i), s = 0 | o.words[o.length - 1]);
                    var f = n.length - o.length;
                    if ("mod" !== e) {
                        (r = new a(null)).length = f + 1, r.words = Array(r.length);
                        for (var h = 0; h < r.length; h++) r.words[h] = 0
                    }
                    var c = n.clone()._ishlnsubmul(o, 1, f);
                    0 === c.negative && (n = c, r && (r.words[f] = 1));
                    for (var u = f - 1; u >= 0; u--) {
                        var d = (0 | n.words[o.length + u]) * 67108864 + (0 | n.words[o.length + u - 1]);
                        for (d = Math.min(d / s | 0, 67108863), n._ishlnsubmul(o, d, u); 0 !== n.negative;) d--, n.negative = 0, n._ishlnsubmul(o, 1, u), !n.isZero() && (n.negative ^= 1);
                        r && (r.words[u] = d)
                    }
                    return r && r._strip(), n._strip(), "div" !== e && 0 !== i && n.iushrn(i), {
                        div: r || null,
                        mod: n
                    }
                }, a.prototype.divmod = function(t, e, r) {
                    var n, o, s;
                    if (i(!t.isZero()), this.isZero()) return {
                        div: new a(0),
                        mod: new a(0)
                    };
                    if (0 !== this.negative && 0 === t.negative) return s = this.neg().divmod(t, e), "mod" !== e && (n = s.div.neg()), "div" !== e && (o = s.mod.neg(), r && 0 !== o.negative && o.iadd(t)), {
                        div: n,
                        mod: o
                    };
                    if (0 === this.negative && 0 !== t.negative) return s = this.divmod(t.neg(), e), "mod" !== e && (n = s.div.neg()), {
                        div: n,
                        mod: s.mod
                    };
                    if ((this.negative & t.negative) != 0) return s = this.neg().divmod(t.neg(), e), "div" !== e && (o = s.mod.neg(), r && 0 !== o.negative && o.isub(t)), {
                        div: s.div,
                        mod: o
                    };
                    if (t.length > this.length || 0 > this.cmp(t)) return {
                        div: new a(0),
                        mod: this
                    };
                    if (1 === t.length) return "div" === e ? {
                        div: this.divn(t.words[0]),
                        mod: null
                    } : "mod" === e ? {
                        div: null,
                        mod: new a(this.modrn(t.words[0]))
                    } : {
                        div: this.divn(t.words[0]),
                        mod: new a(this.modrn(t.words[0]))
                    };
                    return this._wordDiv(t, e)
                }, a.prototype.div = function(t) {
                    return this.divmod(t, "div", !1).div
                }, a.prototype.mod = function(t) {
                    return this.divmod(t, "mod", !1).mod
                }, a.prototype.umod = function(t) {
                    return this.divmod(t, "mod", !0).mod
                }, a.prototype.divRound = function(t) {
                    var e = this.divmod(t);
                    if (e.mod.isZero()) return e.div;
                    var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                        i = t.ushrn(1),
                        n = t.andln(1),
                        a = r.cmp(i);
                    return a < 0 || 1 === n && 0 === a ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                }, a.prototype.modrn = function(t) {
                    var e = t < 0;
                    e && (t = -t), i(t <= 67108863);
                    for (var r = 67108864 % t, n = 0, a = this.length - 1; a >= 0; a--) n = (r * n + (0 | this.words[a])) % t;
                    return e ? -n : n
                }, a.prototype.modn = function(t) {
                    return this.modrn(t)
                }, a.prototype.idivn = function(t) {
                    var e = t < 0;
                    e && (t = -t), i(t <= 67108863);
                    for (var r = 0, n = this.length - 1; n >= 0; n--) {
                        var a = (0 | this.words[n]) + 67108864 * r;
                        this.words[n] = a / t | 0, r = a % t
                    }
                    return this._strip(), e ? this.ineg() : this
                }, a.prototype.divn = function(t) {
                    return this.clone().idivn(t)
                }, a.prototype.egcd = function(t) {
                    i(0 === t.negative), i(!t.isZero());
                    var e = this,
                        r = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    for (var n = new a(1), o = new a(0), s = new a(0), f = new a(1), h = 0; e.isEven() && r.isEven();) e.iushrn(1), r.iushrn(1), ++h;
                    for (var c = r.clone(), u = e.clone(); !e.isZero();) {
                        for (var d = 0, l = 1;
                            (e.words[0] & l) == 0 && d < 26; ++d, l <<= 1);
                        if (d > 0)
                            for (e.iushrn(d); d-- > 0;)(n.isOdd() || o.isOdd()) && (n.iadd(c), o.isub(u)), n.iushrn(1), o.iushrn(1);
                        for (var p = 0, b = 1;
                            (r.words[0] & b) == 0 && p < 26; ++p, b <<= 1);
                        if (p > 0)
                            for (r.iushrn(p); p-- > 0;)(s.isOdd() || f.isOdd()) && (s.iadd(c), f.isub(u)), s.iushrn(1), f.iushrn(1);
                        e.cmp(r) >= 0 ? (e.isub(r), n.isub(s), o.isub(f)) : (r.isub(e), s.isub(n), f.isub(o))
                    }
                    return {
                        a: s,
                        b: f,
                        gcd: r.iushln(h)
                    }
                }, a.prototype._invmp = function(t) {
                    i(0 === t.negative), i(!t.isZero());
                    var e, r = this,
                        n = t.clone();
                    r = 0 !== r.negative ? r.umod(t) : r.clone();
                    for (var o = new a(1), s = new a(0), f = n.clone(); r.cmpn(1) > 0 && n.cmpn(1) > 0;) {
                        for (var h = 0, c = 1;
                            (r.words[0] & c) == 0 && h < 26; ++h, c <<= 1);
                        if (h > 0)
                            for (r.iushrn(h); h-- > 0;) o.isOdd() && o.iadd(f), o.iushrn(1);
                        for (var u = 0, d = 1;
                            (n.words[0] & d) == 0 && u < 26; ++u, d <<= 1);
                        if (u > 0)
                            for (n.iushrn(u); u-- > 0;) s.isOdd() && s.iadd(f), s.iushrn(1);
                        r.cmp(n) >= 0 ? (r.isub(n), o.isub(s)) : (n.isub(r), s.isub(o))
                    }
                    return 0 > (e = 0 === r.cmpn(1) ? o : s).cmpn(0) && e.iadd(t), e
                }, a.prototype.gcd = function(t) {
                    if (this.isZero()) return t.abs();
                    if (t.isZero()) return this.abs();
                    var e = this.clone(),
                        r = t.clone();
                    e.negative = 0, r.negative = 0;
                    for (var i = 0; e.isEven() && r.isEven(); i++) e.iushrn(1), r.iushrn(1);
                    for (;;) {
                        for (; e.isEven();) e.iushrn(1);
                        for (; r.isEven();) r.iushrn(1);
                        var n = e.cmp(r);
                        if (n < 0) {
                            var a = e;
                            e = r, r = a
                        } else if (0 === n || 0 === r.cmpn(1)) break;
                        e.isub(r)
                    }
                    return r.iushln(i)
                }, a.prototype.invm = function(t) {
                    return this.egcd(t).a.umod(t)
                }, a.prototype.isEven = function() {
                    return (1 & this.words[0]) == 0
                }, a.prototype.isOdd = function() {
                    return (1 & this.words[0]) == 1
                }, a.prototype.andln = function(t) {
                    return this.words[0] & t
                }, a.prototype.bincn = function(t) {
                    i("number" == typeof t);
                    var e = t % 26,
                        r = (t - e) / 26,
                        n = 1 << e;
                    if (this.length <= r) return this._expand(r + 1), this.words[r] |= n, this;
                    for (var a = n, o = r; 0 !== a && o < this.length; o++) {
                        var s = 0 | this.words[o];
                        s += a, a = s >>> 26, s &= 67108863, this.words[o] = s
                    }
                    return 0 !== a && (this.words[o] = a, this.length++), this
                }, a.prototype.isZero = function() {
                    return 1 === this.length && 0 === this.words[0]
                }, a.prototype.cmpn = function(t) {
                    var e, r = t < 0;
                    if (0 !== this.negative && !r) return -1;
                    if (0 === this.negative && r) return 1;
                    if (this._strip(), this.length > 1) e = 1;
                    else {
                        r && (t = -t), i(t <= 67108863, "Number is too big");
                        var n = 0 | this.words[0];
                        e = n === t ? 0 : n < t ? -1 : 1
                    }
                    return 0 !== this.negative ? 0 | -e : e
                }, a.prototype.cmp = function(t) {
                    if (0 !== this.negative && 0 === t.negative) return -1;
                    if (0 === this.negative && 0 !== t.negative) return 1;
                    var e = this.ucmp(t);
                    return 0 !== this.negative ? 0 | -e : e
                }, a.prototype.ucmp = function(t) {
                    if (this.length > t.length) return 1;
                    if (this.length < t.length) return -1;
                    for (var e = 0, r = this.length - 1; r >= 0; r--) {
                        var i = 0 | this.words[r],
                            n = 0 | t.words[r];
                        if (i !== n) {
                            i < n ? e = -1 : i > n && (e = 1);
                            break
                        }
                    }
                    return e
                }, a.prototype.gtn = function(t) {
                    return 1 === this.cmpn(t)
                }, a.prototype.gt = function(t) {
                    return 1 === this.cmp(t)
                }, a.prototype.gten = function(t) {
                    return this.cmpn(t) >= 0
                }, a.prototype.gte = function(t) {
                    return this.cmp(t) >= 0
                }, a.prototype.ltn = function(t) {
                    return -1 === this.cmpn(t)
                }, a.prototype.lt = function(t) {
                    return -1 === this.cmp(t)
                }, a.prototype.lten = function(t) {
                    return 0 >= this.cmpn(t)
                }, a.prototype.lte = function(t) {
                    return 0 >= this.cmp(t)
                }, a.prototype.eqn = function(t) {
                    return 0 === this.cmpn(t)
                }, a.prototype.eq = function(t) {
                    return 0 === this.cmp(t)
                }, a.red = function(t) {
                    return new A(t)
                }, a.prototype.toRed = function(t) {
                    return i(!this.red, "Already a number in reduction context"), i(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                }, a.prototype.fromRed = function() {
                    return i(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                }, a.prototype._forceRed = function(t) {
                    return this.red = t, this
                }, a.prototype.forceRed = function(t) {
                    return i(!this.red, "Already a number in reduction context"), this._forceRed(t)
                }, a.prototype.redAdd = function(t) {
                    return i(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                }, a.prototype.redIAdd = function(t) {
                    return i(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                }, a.prototype.redSub = function(t) {
                    return i(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                }, a.prototype.redISub = function(t) {
                    return i(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                }, a.prototype.redShl = function(t) {
                    return i(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                }, a.prototype.redMul = function(t) {
                    return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                }, a.prototype.redIMul = function(t) {
                    return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                }, a.prototype.redSqr = function() {
                    return i(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                }, a.prototype.redISqr = function() {
                    return i(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                }, a.prototype.redSqrt = function() {
                    return i(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                }, a.prototype.redInvm = function() {
                    return i(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                }, a.prototype.redNeg = function() {
                    return i(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                }, a.prototype.redPow = function(t) {
                    return i(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                };
                var _ = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };

                function w(t, e) {
                    this.name = t, this.p = new a(e, 16), this.n = this.p.bitLength(), this.k = new a(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                }

                function M() {
                    w.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                }

                function S() {
                    w.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                }

                function k() {
                    w.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                }

                function E() {
                    w.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                }

                function A(t) {
                    if ("string" == typeof t) {
                        var e = a._prime(t);
                        this.m = e.p, this.prime = e
                    } else i(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                }

                function x(t) {
                    A.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new a(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                }
                w.prototype._tmp = function() {
                    var t = new a(null);
                    return t.words = Array(Math.ceil(this.n / 13)), t
                }, w.prototype.ireduce = function(t) {
                    var e, r = t;
                    do this.split(r, this.tmp), e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength(); while (e > this.n);
                    var i = e < this.n ? -1 : r.ucmp(this.p);
                    return 0 === i ? (r.words[0] = 0, r.length = 1) : i > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
                }, w.prototype.split = function(t, e) {
                    t.iushrn(this.n, 0, e)
                }, w.prototype.imulK = function(t) {
                    return t.imul(this.k)
                }, n(M, w), M.prototype.split = function(t, e) {
                    for (var r = Math.min(t.length, 9), i = 0; i < r; i++) e.words[i] = t.words[i];
                    if (e.length = r, t.length <= 9) {
                        t.words[0] = 0, t.length = 1;
                        return
                    }
                    var n = t.words[9];
                    for (i = 10, e.words[e.length++] = 4194303 & n; i < t.length; i++) {
                        var a = 0 | t.words[i];
                        t.words[i - 10] = (4194303 & a) << 4 | n >>> 22, n = a
                    }
                    n >>>= 22, t.words[i - 10] = n, 0 === n && t.length > 10 ? t.length -= 10 : t.length -= 9
                }, M.prototype.imulK = function(t) {
                    t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                    for (var e = 0, r = 0; r < t.length; r++) {
                        var i = 0 | t.words[r];
                        e += 977 * i, t.words[r] = 67108863 & e, e = 64 * i + (e / 67108864 | 0)
                    }
                    return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                }, n(S, w), n(k, w), n(E, w), E.prototype.imulK = function(t) {
                    for (var e = 0, r = 0; r < t.length; r++) {
                        var i = (0 | t.words[r]) * 19 + e,
                            n = 67108863 & i;
                        i >>>= 26, t.words[r] = n, e = i
                    }
                    return 0 !== e && (t.words[t.length++] = e), t
                }, a._prime = function(t) {
                    var e;
                    if (_[t]) return _[t];
                    if ("k256" === t) e = new M;
                    else if ("p224" === t) e = new S;
                    else if ("p192" === t) e = new k;
                    else if ("p25519" === t) e = new E;
                    else throw Error("Unknown prime " + t);
                    return _[t] = e, e
                }, A.prototype._verify1 = function(t) {
                    i(0 === t.negative, "red works only with positives"), i(t.red, "red works only with red numbers")
                }, A.prototype._verify2 = function(t, e) {
                    i((t.negative | e.negative) == 0, "red works only with positives"), i(t.red && t.red === e.red, "red works only with red numbers")
                }, A.prototype.imod = function(t) {
                    return this.prime ? this.prime.ireduce(t)._forceRed(this) : (h(t, t.umod(this.m)._forceRed(this)), t)
                }, A.prototype.neg = function(t) {
                    return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                }, A.prototype.add = function(t, e) {
                    this._verify2(t, e);
                    var r = t.add(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                }, A.prototype.iadd = function(t, e) {
                    this._verify2(t, e);
                    var r = t.iadd(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r
                }, A.prototype.sub = function(t, e) {
                    this._verify2(t, e);
                    var r = t.sub(e);
                    return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this)
                }, A.prototype.isub = function(t, e) {
                    this._verify2(t, e);
                    var r = t.isub(e);
                    return 0 > r.cmpn(0) && r.iadd(this.m), r
                }, A.prototype.shl = function(t, e) {
                    return this._verify1(t), this.imod(t.ushln(e))
                }, A.prototype.imul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.imul(e))
                }, A.prototype.mul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.mul(e))
                }, A.prototype.isqr = function(t) {
                    return this.imul(t, t.clone())
                }, A.prototype.sqr = function(t) {
                    return this.mul(t, t)
                }, A.prototype.sqrt = function(t) {
                    if (t.isZero()) return t.clone();
                    var e = this.m.andln(3);
                    if (i(e % 2 == 1), 3 === e) {
                        var r = this.m.add(new a(1)).iushrn(2);
                        return this.pow(t, r)
                    }
                    for (var n = this.m.subn(1), o = 0; !n.isZero() && 0 === n.andln(1);) o++, n.iushrn(1);
                    i(!n.isZero());
                    var s = new a(1).toRed(this),
                        f = s.redNeg(),
                        h = this.m.subn(1).iushrn(1),
                        c = this.m.bitLength();
                    for (c = new a(2 * c * c).toRed(this); 0 !== this.pow(c, h).cmp(f);) c.redIAdd(f);
                    for (var u = this.pow(c, n), d = this.pow(t, n.addn(1).iushrn(1)), l = this.pow(t, n), p = o; 0 !== l.cmp(s);) {
                        for (var b = l, m = 0; 0 !== b.cmp(s); m++) b = b.redSqr();
                        i(m < p);
                        var g = this.pow(u, new a(1).iushln(p - m - 1));
                        d = d.redMul(g), u = g.redSqr(), l = l.redMul(u), p = m
                    }
                    return d
                }, A.prototype.invm = function(t) {
                    var e = t._invmp(this.m);
                    return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e)
                }, A.prototype.pow = function(t, e) {
                    if (e.isZero()) return new a(1).toRed(this);
                    if (0 === e.cmpn(1)) return t.clone();
                    var r = Array(16);
                    r[0] = new a(1).toRed(this), r[1] = t;
                    for (var i = 2; i < r.length; i++) r[i] = this.mul(r[i - 1], t);
                    var n = r[0],
                        o = 0,
                        s = 0,
                        f = e.bitLength() % 26;
                    for (0 === f && (f = 26), i = e.length - 1; i >= 0; i--) {
                        for (var h = e.words[i], c = f - 1; c >= 0; c--) {
                            var u = h >> c & 1;
                            if (n !== r[0] && (n = this.sqr(n)), 0 === u && 0 === o) {
                                s = 0;
                                continue
                            }
                            o <<= 1, o |= u, (4 == ++s || 0 === i && 0 === c) && (n = this.mul(n, r[o]), s = 0, o = 0)
                        }
                        f = 26
                    }
                    return n
                }, A.prototype.convertTo = function(t) {
                    var e = t.umod(this.m);
                    return e === t ? e.clone() : e
                }, A.prototype.convertFrom = function(t) {
                    var e = t.clone();
                    return e.red = null, e
                }, a.mont = function(t) {
                    return new x(t)
                }, n(x, A), x.prototype.convertTo = function(t) {
                    return this.imod(t.ushln(this.shift))
                }, x.prototype.convertFrom = function(t) {
                    var e = this.imod(t.mul(this.rinv));
                    return e.red = null, e
                }, x.prototype.imul = function(t, e) {
                    if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
                    var r = t.imul(e),
                        i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        n = r.isub(i).iushrn(this.shift),
                        a = n;
                    return n.cmp(this.m) >= 0 ? a = n.isub(this.m) : 0 > n.cmpn(0) && (a = n.iadd(this.m)), a._forceRed(this)
                }, x.prototype.mul = function(t, e) {
                    if (t.isZero() || e.isZero()) return new a(0)._forceRed(this);
                    var r = t.mul(e),
                        i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        n = r.isub(i).iushrn(this.shift),
                        o = n;
                    return n.cmp(this.m) >= 0 ? o = n.isub(this.m) : 0 > n.cmpn(0) && (o = n.iadd(this.m)), o._forceRed(this)
                }, x.prototype.invm = function(t) {
                    return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                }
            }(void 0 === t || t, this)