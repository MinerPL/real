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

                function o(t, e, r) {
                    if (o.isBN(t)) return t;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && (("le" === e || "be" === e) && (r = e, e = 10), this._init(t || 0, e || 10, r || "be"))
                }
                "object" == typeof t ? t.exports = o : e.BN = o, o.BN = o, o.wordSize = 26;
                try {
                    u = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : r("495873").Buffer
                } catch (t) {}

                function a(t, e) {
                    var r = t.charCodeAt(e);
                    if (r >= 48 && r <= 57) return r - 48;
                    if (r >= 65 && r <= 70) return r - 55;
                    if (r >= 97 && r <= 102) return r - 87;
                    i(!1, "Invalid character in " + t)
                }

                function s(t, e, r) {
                    var i = a(t, r);
                    return r - 1 >= e && (i |= a(t, r - 1) << 4), i
                }

                function f(t, e, r, n) {
                    for (var o = 0, a = 0, s = Math.min(t.length, r), f = e; f < s; f++) {
                        var h = t.charCodeAt(f) - 48;
                        o *= n, a = h >= 49 ? h - 49 + 10 : h >= 17 ? h - 17 + 10 : h, i(h >= 0 && a < n, "Invalid character"), o += a
                    }
                    return o
                }

                function h(t, e) {
                    t.words = e.words, t.length = e.length, t.negative = e.negative, t.red = e.red
                }
                if (o.isBN = function(t) {
                        return t instanceof o || null !== t && "object" == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
                    }, o.max = function(t, e) {
                        return t.cmp(e) > 0 ? t : e
                    }, o.min = function(t, e) {
                        return 0 > t.cmp(e) ? t : e
                    }, o.prototype._init = function(t, e, r) {
                        if ("number" == typeof t) return this._initNumber(t, e, r);
                        if ("object" == typeof t) return this._initArray(t, e, r);
                        "hex" === e && (e = 16), i(e === (0 | e) && e >= 2 && e <= 36), t = t.toString().replace(/\s+/g, "");
                        var n = 0;
                        "-" === t[0] && (n++, this.negative = 1), n < t.length && (16 === e ? this._parseHex(t, n, r) : (this._parseBase(t, e, n), "le" === r && this._initArray(this.toArray(), e, r)))
                    }, o.prototype._initNumber = function(t, e, r) {
                        t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (i(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), e, r)
                    }, o.prototype._initArray = function(t, e, r) {
                        if (i("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                        this.length = Math.ceil(t.length / 3), this.words = Array(this.length);
                        for (var n, o, a = 0; a < this.length; a++) this.words[a] = 0;
                        var s = 0;
                        if ("be" === r)
                            for (a = t.length - 1, n = 0; a >= 0; a -= 3) o = t[a] | t[a - 1] << 8 | t[a - 2] << 16, this.words[n] |= o << s & 67108863, this.words[n + 1] = o >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, n++);
                        else if ("le" === r)
                            for (a = 0, n = 0; a < t.length; a += 3) o = t[a] | t[a + 1] << 8 | t[a + 2] << 16, this.words[n] |= o << s & 67108863, this.words[n + 1] = o >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, n++);
                        return this._strip()
                    }, o.prototype._parseHex = function(t, e, r) {
                        this.length = Math.ceil((t.length - e) / 6), this.words = Array(this.length);
                        for (var i, n = 0; n < this.length; n++) this.words[n] = 0;
                        var o = 0,
                            a = 0;
                        if ("be" === r)
                            for (n = t.length - 1; n >= e; n -= 2) i = s(t, e, n) << o, this.words[a] |= 67108863 & i, o >= 18 ? (o -= 18, a += 1, this.words[a] |= i >>> 26) : o += 8;
                        else
                            for (n = (t.length - e) % 2 == 0 ? e + 1 : e; n < t.length; n += 2) i = s(t, e, n) << o, this.words[a] |= 67108863 & i, o >= 18 ? (o -= 18, a += 1, this.words[a] |= i >>> 26) : o += 8;
                        this._strip()
                    }, o.prototype._parseBase = function(t, e, r) {
                        this.words = [0], this.length = 1;
                        for (var i = 0, n = 1; n <= 67108863; n *= e) i++;
                        i--, n = n / e | 0;
                        for (var o = t.length - r, a = o % i, s = Math.min(o, o - a) + r, h = 0, c = r; c < s; c += i) h = f(t, c, c + i, e), this.imuln(n), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h);
                        if (0 !== a) {
                            var u = 1;
                            for (h = f(t, c, t.length, e), c = 0; c < a; c++) u *= e;
                            this.imuln(u), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h)
                        }
                        this._strip()
                    }, o.prototype.copy = function(t) {
                        t.words = Array(this.length);
                        for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
                        t.length = this.length, t.negative = this.negative, t.red = this.red
                    }, o.prototype._move = function(t) {
                        h(t, this)
                    }, o.prototype.clone = function() {
                        var t = new o(null);
                        return this.copy(t), t
                    }, o.prototype._expand = function(t) {
                        for (; this.length < t;) this.words[this.length++] = 0;
                        return this
                    }, o.prototype._strip = function() {
                        for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                        return this._normSign()
                    }, o.prototype._normSign = function() {
                        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                    }, "undefined" != typeof Symbol && "function" == typeof Symbol.for) try {
                    o.prototype[Symbol.for("nodejs.util.inspect.custom")] = c
                } catch (t) {
                    o.prototype.inspect = c
                } else o.prototype.inspect = c;

                function c() {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                }
                var u, d = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                    l = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    p = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
                o.prototype.toString = function(t, e) {
                    if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
                        r = "";
                        for (var r, n = 0, o = 0, a = 0; a < this.length; a++) {
                            var s = this.words[a],
                                f = ((s << n | o) & 16777215).toString(16);
                            o = s >>> 24 - n & 16777215, (n += 2) >= 26 && (n -= 26, a--), r = 0 !== o || a !== this.length - 1 ? d[6 - f.length] + f + r : f + r
                        }
                        for (0 !== o && (r = o.toString(16) + r); r.length % e != 0;) r = "0" + r;
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
                }, o.prototype.toNumber = function() {
                    var t = this.words[0];
                    return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && i(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                }, o.prototype.toJSON = function() {
                    return this.toString(16, 2)
                }, u && (o.prototype.toBuffer = function(t, e) {
                    return this.toArrayLike(u, t, e)
                }), o.prototype.toArray = function(t, e) {
                    return this.toArrayLike(Array, t, e)
                };
                o.prototype.toArrayLike = function(t, e, r) {
                    this._strip();
                    var n, o, a = this.byteLength(),
                        s = r || Math.max(1, a);
                    i(a <= s, "byte array longer than desired length"), i(s > 0, "Requested array length <= 0");
                    var f = (n = t, o = s, n.allocUnsafe ? n.allocUnsafe(o) : new n(o));
                    return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](f, a), f
                }, o.prototype._toArrayLikeLE = function(t, e) {
                    for (var r = 0, i = 0, n = 0, o = 0; n < this.length; n++) {
                        var a = this.words[n] << o | i;
                        t[r++] = 255 & a, r < t.length && (t[r++] = a >> 8 & 255), r < t.length && (t[r++] = a >> 16 & 255), 6 === o ? (r < t.length && (t[r++] = a >> 24 & 255), i = 0, o = 0) : (i = a >>> 24, o += 2)
                    }
                    if (r < t.length)
                        for (t[r++] = i; r < t.length;) t[r++] = 0
                }, o.prototype._toArrayLikeBE = function(t, e) {
                    for (var r = t.length - 1, i = 0, n = 0, o = 0; n < this.length; n++) {
                        var a = this.words[n] << o | i;
                        t[r--] = 255 & a, r >= 0 && (t[r--] = a >> 8 & 255), r >= 0 && (t[r--] = a >> 16 & 255), 6 === o ? (r >= 0 && (t[r--] = a >> 24 & 255), i = 0, o = 0) : (i = a >>> 24, o += 2)
                    }
                    if (r >= 0)
                        for (t[r--] = i; r >= 0;) t[r--] = 0
                }, Math.clz32 ? o.prototype._countBits = function(t) {
                    return 32 - Math.clz32(t)
                } : o.prototype._countBits = function(t) {
                    var e = t,
                        r = 0;
                    return e >= 4096 && (r += 13, e >>>= 13), e >= 64 && (r += 7, e >>>= 7), e >= 8 && (r += 4, e >>>= 4), e >= 2 && (r += 2, e >>>= 2), r + e
                }, o.prototype._zeroBits = function(t) {
                    if (0 === t) return 26;
                    var e = t,
                        r = 0;
                    return (8191 & e) == 0 && (r += 13, e >>>= 13), (127 & e) == 0 && (r += 7, e >>>= 7), (15 & e) == 0 && (r += 4, e >>>= 4), (3 & e) == 0 && (r += 2, e >>>= 2), (1 & e) == 0 && r++, r
                }, o.prototype.bitLength = function() {
                    var t = this.words[this.length - 1],
                        e = this._countBits(t);
                    return (this.length - 1) * 26 + e
                };

                function b(t, e, r) {
                    r.negative = e.negative ^ t.negative;
                    var i = t.length + e.length | 0;
                    r.length = i, i = i - 1 | 0;
                    var n = 0 | t.words[0],
                        o = 0 | e.words[0],
                        a = n * o,
                        s = 67108863 & a,
                        f = a / 67108864 | 0;
                    r.words[0] = s;
                    for (var h = 1; h < i; h++) {
                        for (var c = f >>> 26, u = 67108863 & f, d = Math.min(h, e.length - 1), l = Math.max(0, h - t.length + 1); l <= d; l++) {
                            var p = h - l | 0;
                            n = 0 | t.words[p], c += (a = n * (o = 0 | e.words[l]) + u) / 67108864 | 0, u = 67108863 & a
                        }
                        r.words[h] = 0 | u, f = 0 | c
                    }
                    return 0 !== f ? r.words[h] = 0 | f : r.length--, r._strip()
                }
                o.prototype.zeroBits = function() {
                    if (this.isZero()) return 0;
                    for (var t = 0, e = 0; e < this.length; e++) {
                        var r = this._zeroBits(this.words[e]);
                        if (t += r, 26 !== r) break
                    }
                    return t
                }, o.prototype.byteLength = function() {
                    return Math.ceil(this.bitLength() / 8)
                }, o.prototype.toTwos = function(t) {
                    return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                }, o.prototype.fromTwos = function(t) {
                    return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                }, o.prototype.isNeg = function() {
                    return 0 !== this.negative
                }, o.prototype.neg = function() {
                    return this.clone().ineg()
                }, o.prototype.ineg = function() {
                    return !this.isZero() && (this.negative ^= 1), this
                }, o.prototype.iuor = function(t) {
                    for (; this.length < t.length;) this.words[this.length++] = 0;
                    for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
                    return this._strip()
                }, o.prototype.ior = function(t) {
                    return i((this.negative | t.negative) == 0), this.iuor(t)
                }, o.prototype.or = function(t) {
                    return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                }, o.prototype.uor = function(t) {
                    return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                }, o.prototype.iuand = function(t) {
                    var e;
                    e = this.length > t.length ? t : this;
                    for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];
                    return this.length = e.length, this._strip()
                }, o.prototype.iand = function(t) {
                    return i((this.negative | t.negative) == 0), this.iuand(t)
                }, o.prototype.and = function(t) {
                    return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                }, o.prototype.uand = function(t) {
                    return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                }, o.prototype.iuxor = function(t) {
                    this.length > t.length ? (e = this, r = t) : (e = t, r = this);
                    for (var e, r, i = 0; i < r.length; i++) this.words[i] = e.words[i] ^ r.words[i];
                    if (this !== e)
                        for (; i < e.length; i++) this.words[i] = e.words[i];
                    return this.length = e.length, this._strip()
                }, o.prototype.ixor = function(t) {
                    return i((this.negative | t.negative) == 0), this.iuxor(t)
                }, o.prototype.xor = function(t) {
                    return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                }, o.prototype.uxor = function(t) {
                    return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                }, o.prototype.inotn = function(t) {
                    i("number" == typeof t && t >= 0);
                    var e = 0 | Math.ceil(t / 26),
                        r = t % 26;
                    this._expand(e), r > 0 && e--;
                    for (var n = 0; n < e; n++) this.words[n] = 67108863 & ~this.words[n];
                    return r > 0 && (this.words[n] = ~this.words[n] & 67108863 >> 26 - r), this._strip()
                }, o.prototype.notn = function(t) {
                    return this.clone().inotn(t)
                }, o.prototype.setn = function(t, e) {
                    i("number" == typeof t && t >= 0);
                    var r = t / 26 | 0,
                        n = t % 26;
                    return this._expand(r + 1), e ? this.words[r] = this.words[r] | 1 << n : this.words[r] = this.words[r] & ~(1 << n), this._strip()
                }, o.prototype.iadd = function(t) {
                    if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                    if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                    this.length > t.length ? (r = this, i = t) : (r = t, i = this);
                    for (var e, r, i, n = 0, o = 0; o < i.length; o++) e = (0 | r.words[o]) + (0 | i.words[o]) + n, this.words[o] = 67108863 & e, n = e >>> 26;
                    for (; 0 !== n && o < r.length; o++) e = (0 | r.words[o]) + n, this.words[o] = 67108863 & e, n = e >>> 26;
                    if (this.length = r.length, 0 !== n) this.words[this.length] = n, this.length++;
                    else if (r !== this)
                        for (; o < r.length; o++) this.words[o] = r.words[o];
                    return this
                }, o.prototype.add = function(t) {
                    var e;
                    return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                }, o.prototype.isub = function(t) {
                    if (0 !== t.negative) {
                        t.negative = 0;
                        var e, r, i = this.iadd(t);
                        return t.negative = 1, i._normSign()
                    }
                    if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                    var n = this.cmp(t);
                    if (0 === n) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    n > 0 ? (e = this, r = t) : (e = t, r = this);
                    for (var o = 0, a = 0; a < r.length; a++) o = (i = (0 | e.words[a]) - (0 | r.words[a]) + o) >> 26, this.words[a] = 67108863 & i;
                    for (; 0 !== o && a < e.length; a++) o = (i = (0 | e.words[a]) + o) >> 26, this.words[a] = 67108863 & i;
                    if (0 === o && a < e.length && e !== this)
                        for (; a < e.length; a++) this.words[a] = e.words[a];
                    return this.length = Math.max(this.length, a), e !== this && (this.negative = 1), this._strip()
                }, o.prototype.sub = function(t) {
                    return this.clone().isub(t)
                };
                var m = function(t, e, r) {
                    var i, n, o, a = t.words,
                        s = e.words,
                        f = r.words,
                        h = 0,
                        c = 0 | a[0],
                        u = 8191 & c,
                        d = c >>> 13,
                        l = 0 | a[1],
                        p = 8191 & l,
                        b = l >>> 13,
                        m = 0 | a[2],
                        g = 8191 & m,
                        y = m >>> 13,
                        v = 0 | a[3],
                        _ = 8191 & v,
                        w = v >>> 13,
                        M = 0 | a[4],
                        S = 8191 & M,
                        k = M >>> 13,
                        x = 0 | a[5],
                        E = 8191 & x,
                        A = x >>> 13,
                        B = 0 | a[6],
                        I = 8191 & B,
                        R = B >>> 13,
                        j = 0 | a[7],
                        C = 8191 & j,
                        O = j >>> 13,
                        P = 0 | a[8],
                        T = 8191 & P,
                        D = P >>> 13,
                        z = 0 | a[9],
                        L = 8191 & z,
                        N = z >>> 13,
                        q = 0 | s[0],
                        U = 8191 & q,
                        F = q >>> 13,
                        K = 0 | s[1],
                        H = 8191 & K,
                        W = K >>> 13,
                        V = 0 | s[2],
                        Z = 8191 & V,
                        G = V >>> 13,
                        $ = 0 | s[3],
                        X = 8191 & $,
                        Y = $ >>> 13,
                        J = 0 | s[4],
                        Q = 8191 & J,
                        tt = J >>> 13,
                        te = 0 | s[5],
                        tr = 8191 & te,
                        ti = te >>> 13,
                        tn = 0 | s[6],
                        to = 8191 & tn,
                        ta = tn >>> 13,
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
                    h = ((o = Math.imul(d, F)) + (n >>> 13) | 0) + (tm >>> 26) | 0, tm &= 67108863, i = Math.imul(p, U), n = (n = Math.imul(p, F)) + Math.imul(b, U) | 0, o = Math.imul(b, F), i = i + Math.imul(u, H) | 0, n = (n = n + Math.imul(u, W) | 0) + Math.imul(d, H) | 0;
                    var tg = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((o = o + Math.imul(d, W) | 0) + (n >>> 13) | 0) + (tg >>> 26) | 0, tg &= 67108863, i = Math.imul(g, U), n = (n = Math.imul(g, F)) + Math.imul(y, U) | 0, o = Math.imul(y, F), i = i + Math.imul(p, H) | 0, n = (n = n + Math.imul(p, W) | 0) + Math.imul(b, H) | 0, o = o + Math.imul(b, W) | 0, i = i + Math.imul(u, Z) | 0, n = (n = n + Math.imul(u, G) | 0) + Math.imul(d, Z) | 0;
                    var ty = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((o = o + Math.imul(d, G) | 0) + (n >>> 13) | 0) + (ty >>> 26) | 0, ty &= 67108863, i = Math.imul(_, U), n = (n = Math.imul(_, F)) + Math.imul(w, U) | 0, o = Math.imul(w, F), i = i + Math.imul(g, H) | 0, n = (n = n + Math.imul(g, W) | 0) + Math.imul(y, H) | 0, o = o + Math.imul(y, W) | 0, i = i + Math.imul(p, Z) | 0, n = (n = n + Math.imul(p, G) | 0) + Math.imul(b, Z) | 0, o = o + Math.imul(b, G) | 0, i = i + Math.imul(u, X) | 0, n = (n = n + Math.imul(u, Y) | 0) + Math.imul(d, X) | 0;
                    var tv = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((o = o + Math.imul(d, Y) | 0) + (n >>> 13) | 0) + (tv >>> 26) | 0, tv &= 67108863, i = Math.imul(S, U), n = (n = Math.imul(S, F)) + Math.imul(k, U) | 0, o = Math.imul(k, F), i = i + Math.imul(_, H) | 0, n = (n = n + Math.imul(_, W) | 0) + Math.imul(w, H) | 0, o = o + Math.imul(w, W) | 0, i = i + Math.imul(g, Z) | 0, n = (n = n + Math.imul(g, G) | 0) + Math.imul(y, Z) | 0, o = o + Math.imul(y, G) | 0, i = i + Math.imul(p, X) | 0, n = (n = n + Math.imul(p, Y) | 0) + Math.imul(b, X) | 0, o = o + Math.imul(b, Y) | 0, i = i + Math.imul(u, Q) | 0, n = (n = n + Math.imul(u, tt) | 0) + Math.imul(d, Q) | 0;
                    var t_ = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((o = o + Math.imul(d, tt) | 0) + (n >>> 13) | 0) + (t_ >>> 26) | 0, t_ &= 67108863, i = Math.imul(E, U), n = (n = Math.imul(E, F)) + Math.imul(A, U) | 0, o = Math.imul(A, F), i = i + Math.imul(S, H) | 0, n = (n = n + Math.imul(S, W) | 0) + Math.imul(k, H) | 0, o = o + Math.imul(k, W) | 0, i = i + Math.imul(_, Z) | 0, n = (n = n + Math.imul(_, G) | 0) + Math.imul(w, Z) | 0, o = o + Math.imul(w, G) | 0, i = i + Math.imul(g, X) | 0, n = (n = n + Math.imul(g, Y) | 0) + Math.imul(y, X) | 0, o = o + Math.imul(y, Y) | 0, i = i + Math.imul(p, Q) | 0, n = (n = n + Math.imul(p, tt) | 0) + Math.imul(b, Q) | 0, o = o + Math.imul(b, tt) | 0, i = i + Math.imul(u, tr) | 0, n = (n = n + Math.imul(u, ti) | 0) + Math.imul(d, tr) | 0;
                    var tw = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((o = o + Math.imul(d, ti) | 0) + (n >>> 13) | 0) + (tw >>> 26) | 0, tw &= 67108863, i = Math.imul(I, U), n = (n = Math.imul(I, F)) + Math.imul(R, U) | 0, o = Math.imul(R, F), i = i + Math.imul(E, H) | 0, n = (n = n + Math.imul(E, W) | 0) + Math.imul(A, H) | 0, o = o + Math.imul(A, W) | 0, i = i + Math.imul(S, Z) | 0, n = (n = n + Math.imul(S, G) | 0) + Math.imul(k, Z) | 0, o = o + Math.imul(k, G) | 0, i = i + Math.imul(_, X) | 0, n = (n = n + Math.imul(_, Y) | 0) + Math.imul(w, X) | 0, o = o + Math.imul(w, Y) | 0, i = i + Math.imul(g, Q) | 0, n = (n = n + Math.imul(g, tt) | 0) + Math.imul(y, Q) | 0, o = o + Math.imul(y, tt) | 0, i = i + Math.imul(p, tr) | 0, n = (n = n + Math.imul(p, ti) | 0) + Math.imul(b, tr) | 0, o = o + Math.imul(b, ti) | 0, i = i + Math.imul(u, to) | 0, n = (n = n + Math.imul(u, ta) | 0) + Math.imul(d, to) | 0;
                    var tM = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((o = o + Math.imul(d, ta) | 0) + (n >>> 13) | 0) + (tM >>> 26) | 0, tM &= 67108863, i = Math.imul(C, U), n = (n = Math.imul(C, F)) + Math.imul(O, U) | 0, o = Math.imul(O, F), i = i + Math.imul(I, H) | 0, n = (n = n + Math.imul(I, W) | 0) + Math.imul(R, H) | 0, o = o + Math.imul(R, W) | 0, i = i + Math.imul(E, Z) | 0, n = (n = n + Math.imul(E, G) | 0) + Math.imul(A, Z) | 0, o = o + Math.imul(A, G) | 0, i = i + Math.imul(S, X) | 0, n = (n = n + Math.imul(S, Y) | 0) + Math.imul(k, X) | 0, o = o + Math.imul(k, Y) | 0, i = i + Math.imul(_, Q) | 0, n = (n = n + Math.imul(_, tt) | 0) + Math.imul(w, Q) | 0, o = o + Math.imul(w, tt) | 0, i = i + Math.imul(g, tr) | 0, n = (n = n + Math.imul(g, ti) | 0) + Math.imul(y, tr) | 0, o = o + Math.imul(y, ti) | 0, i = i + Math.imul(p, to) | 0, n = (n = n + Math.imul(p, ta) | 0) + Math.imul(b, to) | 0, o = o + Math.imul(b, ta) | 0, i = i + Math.imul(u, tf) | 0, n = (n = n + Math.imul(u, th) | 0) + Math.imul(d, tf) | 0;
                    var tS = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((o = o + Math.imul(d, th) | 0) + (n >>> 13) | 0) + (tS >>> 26) | 0, tS &= 67108863, i = Math.imul(T, U), n = (n = Math.imul(T, F)) + Math.imul(D, U) | 0, o = Math.imul(D, F), i = i + Math.imul(C, H) | 0, n = (n = n + Math.imul(C, W) | 0) + Math.imul(O, H) | 0, o = o + Math.imul(O, W) | 0, i = i + Math.imul(I, Z) | 0, n = (n = n + Math.imul(I, G) | 0) + Math.imul(R, Z) | 0, o = o + Math.imul(R, G) | 0, i = i + Math.imul(E, X) | 0, n = (n = n + Math.imul(E, Y) | 0) + Math.imul(A, X) | 0, o = o + Math.imul(A, Y) | 0, i = i + Math.imul(S, Q) | 0, n = (n = n + Math.imul(S, tt) | 0) + Math.imul(k, Q) | 0, o = o + Math.imul(k, tt) | 0, i = i + Math.imul(_, tr) | 0, n = (n = n + Math.imul(_, ti) | 0) + Math.imul(w, tr) | 0, o = o + Math.imul(w, ti) | 0, i = i + Math.imul(g, to) | 0, n = (n = n + Math.imul(g, ta) | 0) + Math.imul(y, to) | 0, o = o + Math.imul(y, ta) | 0, i = i + Math.imul(p, tf) | 0, n = (n = n + Math.imul(p, th) | 0) + Math.imul(b, tf) | 0, o = o + Math.imul(b, th) | 0, i = i + Math.imul(u, tu) | 0, n = (n = n + Math.imul(u, td) | 0) + Math.imul(d, tu) | 0;
                    var tk = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((o = o + Math.imul(d, td) | 0) + (n >>> 13) | 0) + (tk >>> 26) | 0, tk &= 67108863, i = Math.imul(L, U), n = (n = Math.imul(L, F)) + Math.imul(N, U) | 0, o = Math.imul(N, F), i = i + Math.imul(T, H) | 0, n = (n = n + Math.imul(T, W) | 0) + Math.imul(D, H) | 0, o = o + Math.imul(D, W) | 0, i = i + Math.imul(C, Z) | 0, n = (n = n + Math.imul(C, G) | 0) + Math.imul(O, Z) | 0, o = o + Math.imul(O, G) | 0, i = i + Math.imul(I, X) | 0, n = (n = n + Math.imul(I, Y) | 0) + Math.imul(R, X) | 0, o = o + Math.imul(R, Y) | 0, i = i + Math.imul(E, Q) | 0, n = (n = n + Math.imul(E, tt) | 0) + Math.imul(A, Q) | 0, o = o + Math.imul(A, tt) | 0, i = i + Math.imul(S, tr) | 0, n = (n = n + Math.imul(S, ti) | 0) + Math.imul(k, tr) | 0, o = o + Math.imul(k, ti) | 0, i = i + Math.imul(_, to) | 0, n = (n = n + Math.imul(_, ta) | 0) + Math.imul(w, to) | 0, o = o + Math.imul(w, ta) | 0, i = i + Math.imul(g, tf) | 0, n = (n = n + Math.imul(g, th) | 0) + Math.imul(y, tf) | 0, o = o + Math.imul(y, th) | 0, i = i + Math.imul(p, tu) | 0, n = (n = n + Math.imul(p, td) | 0) + Math.imul(b, tu) | 0, o = o + Math.imul(b, td) | 0, i = i + Math.imul(u, tp) | 0, n = (n = n + Math.imul(u, tb) | 0) + Math.imul(d, tp) | 0;
                    var tx = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((o = o + Math.imul(d, tb) | 0) + (n >>> 13) | 0) + (tx >>> 26) | 0, tx &= 67108863, i = Math.imul(L, H), n = (n = Math.imul(L, W)) + Math.imul(N, H) | 0, o = Math.imul(N, W), i = i + Math.imul(T, Z) | 0, n = (n = n + Math.imul(T, G) | 0) + Math.imul(D, Z) | 0, o = o + Math.imul(D, G) | 0, i = i + Math.imul(C, X) | 0, n = (n = n + Math.imul(C, Y) | 0) + Math.imul(O, X) | 0, o = o + Math.imul(O, Y) | 0, i = i + Math.imul(I, Q) | 0, n = (n = n + Math.imul(I, tt) | 0) + Math.imul(R, Q) | 0, o = o + Math.imul(R, tt) | 0, i = i + Math.imul(E, tr) | 0, n = (n = n + Math.imul(E, ti) | 0) + Math.imul(A, tr) | 0, o = o + Math.imul(A, ti) | 0, i = i + Math.imul(S, to) | 0, n = (n = n + Math.imul(S, ta) | 0) + Math.imul(k, to) | 0, o = o + Math.imul(k, ta) | 0, i = i + Math.imul(_, tf) | 0, n = (n = n + Math.imul(_, th) | 0) + Math.imul(w, tf) | 0, o = o + Math.imul(w, th) | 0, i = i + Math.imul(g, tu) | 0, n = (n = n + Math.imul(g, td) | 0) + Math.imul(y, tu) | 0, o = o + Math.imul(y, td) | 0, i = i + Math.imul(p, tp) | 0, n = (n = n + Math.imul(p, tb) | 0) + Math.imul(b, tp) | 0;
                    var tE = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((o = o + Math.imul(b, tb) | 0) + (n >>> 13) | 0) + (tE >>> 26) | 0, tE &= 67108863, i = Math.imul(L, Z), n = (n = Math.imul(L, G)) + Math.imul(N, Z) | 0, o = Math.imul(N, G), i = i + Math.imul(T, X) | 0, n = (n = n + Math.imul(T, Y) | 0) + Math.imul(D, X) | 0, o = o + Math.imul(D, Y) | 0, i = i + Math.imul(C, Q) | 0, n = (n = n + Math.imul(C, tt) | 0) + Math.imul(O, Q) | 0, o = o + Math.imul(O, tt) | 0, i = i + Math.imul(I, tr) | 0, n = (n = n + Math.imul(I, ti) | 0) + Math.imul(R, tr) | 0, o = o + Math.imul(R, ti) | 0, i = i + Math.imul(E, to) | 0, n = (n = n + Math.imul(E, ta) | 0) + Math.imul(A, to) | 0, o = o + Math.imul(A, ta) | 0, i = i + Math.imul(S, tf) | 0, n = (n = n + Math.imul(S, th) | 0) + Math.imul(k, tf) | 0, o = o + Math.imul(k, th) | 0, i = i + Math.imul(_, tu) | 0, n = (n = n + Math.imul(_, td) | 0) + Math.imul(w, tu) | 0, o = o + Math.imul(w, td) | 0, i = i + Math.imul(g, tp) | 0, n = (n = n + Math.imul(g, tb) | 0) + Math.imul(y, tp) | 0;
                    var tA = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((o = o + Math.imul(y, tb) | 0) + (n >>> 13) | 0) + (tA >>> 26) | 0, tA &= 67108863, i = Math.imul(L, X), n = (n = Math.imul(L, Y)) + Math.imul(N, X) | 0, o = Math.imul(N, Y), i = i + Math.imul(T, Q) | 0, n = (n = n + Math.imul(T, tt) | 0) + Math.imul(D, Q) | 0, o = o + Math.imul(D, tt) | 0, i = i + Math.imul(C, tr) | 0, n = (n = n + Math.imul(C, ti) | 0) + Math.imul(O, tr) | 0, o = o + Math.imul(O, ti) | 0, i = i + Math.imul(I, to) | 0, n = (n = n + Math.imul(I, ta) | 0) + Math.imul(R, to) | 0, o = o + Math.imul(R, ta) | 0, i = i + Math.imul(E, tf) | 0, n = (n = n + Math.imul(E, th) | 0) + Math.imul(A, tf) | 0, o = o + Math.imul(A, th) | 0, i = i + Math.imul(S, tu) | 0, n = (n = n + Math.imul(S, td) | 0) + Math.imul(k, tu) | 0, o = o + Math.imul(k, td) | 0, i = i + Math.imul(_, tp) | 0, n = (n = n + Math.imul(_, tb) | 0) + Math.imul(w, tp) | 0;
                    var tB = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((o = o + Math.imul(w, tb) | 0) + (n >>> 13) | 0) + (tB >>> 26) | 0, tB &= 67108863, i = Math.imul(L, Q), n = (n = Math.imul(L, tt)) + Math.imul(N, Q) | 0, o = Math.imul(N, tt), i = i + Math.imul(T, tr) | 0, n = (n = n + Math.imul(T, ti) | 0) + Math.imul(D, tr) | 0, o = o + Math.imul(D, ti) | 0, i = i + Math.imul(C, to) | 0, n = (n = n + Math.imul(C, ta) | 0) + Math.imul(O, to) | 0, o = o + Math.imul(O, ta) | 0, i = i + Math.imul(I, tf) | 0, n = (n = n + Math.imul(I, th) | 0) + Math.imul(R, tf) | 0, o = o + Math.imul(R, th) | 0, i = i + Math.imul(E, tu) | 0, n = (n = n + Math.imul(E, td) | 0) + Math.imul(A, tu) | 0, o = o + Math.imul(A, td) | 0, i = i + Math.imul(S, tp) | 0, n = (n = n + Math.imul(S, tb) | 0) + Math.imul(k, tp) | 0;
                    var tI = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((o = o + Math.imul(k, tb) | 0) + (n >>> 13) | 0) + (tI >>> 26) | 0, tI &= 67108863, i = Math.imul(L, tr), n = (n = Math.imul(L, ti)) + Math.imul(N, tr) | 0, o = Math.imul(N, ti), i = i + Math.imul(T, to) | 0, n = (n = n + Math.imul(T, ta) | 0) + Math.imul(D, to) | 0, o = o + Math.imul(D, ta) | 0, i = i + Math.imul(C, tf) | 0, n = (n = n + Math.imul(C, th) | 0) + Math.imul(O, tf) | 0, o = o + Math.imul(O, th) | 0, i = i + Math.imul(I, tu) | 0, n = (n = n + Math.imul(I, td) | 0) + Math.imul(R, tu) | 0, o = o + Math.imul(R, td) | 0, i = i + Math.imul(E, tp) | 0, n = (n = n + Math.imul(E, tb) | 0) + Math.imul(A, tp) | 0;
                    var tR = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((o = o + Math.imul(A, tb) | 0) + (n >>> 13) | 0) + (tR >>> 26) | 0, tR &= 67108863, i = Math.imul(L, to), n = (n = Math.imul(L, ta)) + Math.imul(N, to) | 0, o = Math.imul(N, ta), i = i + Math.imul(T, tf) | 0, n = (n = n + Math.imul(T, th) | 0) + Math.imul(D, tf) | 0, o = o + Math.imul(D, th) | 0, i = i + Math.imul(C, tu) | 0, n = (n = n + Math.imul(C, td) | 0) + Math.imul(O, tu) | 0, o = o + Math.imul(O, td) | 0, i = i + Math.imul(I, tp) | 0, n = (n = n + Math.imul(I, tb) | 0) + Math.imul(R, tp) | 0;
                    var tj = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((o = o + Math.imul(R, tb) | 0) + (n >>> 13) | 0) + (tj >>> 26) | 0, tj &= 67108863, i = Math.imul(L, tf), n = (n = Math.imul(L, th)) + Math.imul(N, tf) | 0, o = Math.imul(N, th), i = i + Math.imul(T, tu) | 0, n = (n = n + Math.imul(T, td) | 0) + Math.imul(D, tu) | 0, o = o + Math.imul(D, td) | 0, i = i + Math.imul(C, tp) | 0, n = (n = n + Math.imul(C, tb) | 0) + Math.imul(O, tp) | 0;
                    var tC = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((o = o + Math.imul(O, tb) | 0) + (n >>> 13) | 0) + (tC >>> 26) | 0, tC &= 67108863, i = Math.imul(L, tu), n = (n = Math.imul(L, td)) + Math.imul(N, tu) | 0, o = Math.imul(N, td), i = i + Math.imul(T, tp) | 0, n = (n = n + Math.imul(T, tb) | 0) + Math.imul(D, tp) | 0;
                    var tO = (h + i | 0) + ((8191 & n) << 13) | 0;
                    h = ((o = o + Math.imul(D, tb) | 0) + (n >>> 13) | 0) + (tO >>> 26) | 0, tO &= 67108863, i = Math.imul(L, tp), n = (n = Math.imul(L, tb)) + Math.imul(N, tp) | 0;
                    var tP = (h + i | 0) + ((8191 & n) << 13) | 0;
                    return h = ((o = Math.imul(N, tb)) + (n >>> 13) | 0) + (tP >>> 26) | 0, tP &= 67108863, f[0] = tm, f[1] = tg, f[2] = ty, f[3] = tv, f[4] = t_, f[5] = tw, f[6] = tM, f[7] = tS, f[8] = tk, f[9] = tx, f[10] = tE, f[11] = tA, f[12] = tB, f[13] = tI, f[14] = tR, f[15] = tj, f[16] = tC, f[17] = tO, f[18] = tP, 0 !== h && (f[19] = h, r.length++), r
                };

                function g(t, e, r) {
                    r.negative = e.negative ^ t.negative, r.length = t.length + e.length;
                    for (var i = 0, n = 0, o = 0; o < r.length - 1; o++) {
                        var a = n;
                        n = 0;
                        for (var s = 67108863 & i, f = Math.min(o, e.length - 1), h = Math.max(0, o - t.length + 1); h <= f; h++) {
                            var c = o - h,
                                u = (0 | t.words[c]) * (0 | e.words[h]),
                                d = 67108863 & u;
                            a = a + (u / 67108864 | 0) | 0, s = 67108863 & (d = d + s | 0), n += (a = a + (d >>> 26) | 0) >>> 26, a &= 67108863
                        }
                        r.words[o] = s, i = a, a = n
                    }
                    return 0 !== i ? r.words[o] = i : r.length--, r._strip()
                }

                function y(t, e, r) {
                    return g(t, e, r)
                }

                function v(t, e) {
                    this.x = t, this.y = e
                }!Math.imul && (m = b), o.prototype.mulTo = function(t, e) {
                    var r, i, n = this.length + t.length;
                    if (10 === this.length && 10 === t.length) i = m(this, t, e);
                    else if (n < 63) i = b(this, t, e);
                    else if (n < 1024) i = g(this, t, e);
                    else {
                        ;
                        r = this, i = g(r, t, e)
                    }
                    return i
                }, v.prototype.makeRBT = function(t) {
                    for (var e = Array(t), r = o.prototype._countBits(t) - 1, i = 0; i < t; i++) e[i] = this.revBin(i, r, t);
                    return e
                }, v.prototype.revBin = function(t, e, r) {
                    if (0 === t || t === r - 1) return t;
                    for (var i = 0, n = 0; n < e; n++) i |= (1 & t) << e - n - 1, t >>= 1;
                    return i
                }, v.prototype.permute = function(t, e, r, i, n, o) {
                    for (var a = 0; a < o; a++) i[a] = e[t[a]], n[a] = r[t[a]]
                }, v.prototype.transform = function(t, e, r, i, n, o) {
                    this.permute(o, t, e, r, i, n);
                    for (var a = 1; a < n; a <<= 1) {
                        for (var s = a << 1, f = Math.cos(2 * Math.PI / s), h = Math.sin(2 * Math.PI / s), c = 0; c < n; c += s) {
                            for (var u = f, d = h, l = 0; l < a; l++) {
                                var p = r[c + l],
                                    b = i[c + l],
                                    m = r[c + l + a],
                                    g = i[c + l + a],
                                    y = u * m - d * g;
                                g = u * g + d * m, m = y, r[c + l] = p + m, i[c + l] = b + g, r[c + l + a] = p - m, i[c + l + a] = b - g, l !== s && (y = f * u - h * d, d = f * d + h * u, u = y)
                            }
                        }
                    }
                }, v.prototype.guessLen13b = function(t, e) {
                    var r = 1 | Math.max(e, t),
                        i = 1 & r,
                        n = 0;
                    for (r = r / 2 | 0; r; r >>>= 1) n++;
                    return 1 << n + 1 + i
                }, v.prototype.conjugate = function(t, e, r) {
                    if (!(r <= 1))
                        for (var i = 0; i < r / 2; i++) {
                            var n = t[i];
                            t[i] = t[r - i - 1], t[r - i - 1] = n, n = e[i], e[i] = -e[r - i - 1], e[r - i - 1] = -n
                        }
                }, v.prototype.normalize13b = function(t, e) {
                    for (var r = 0, i = 0; i < e / 2; i++) {
                        var n = 8192 * Math.round(t[2 * i + 1] / e) + Math.round(t[2 * i] / e) + r;
                        t[i] = 67108863 & n, r = n < 67108864 ? 0 : n / 67108864 | 0
                    }
                    return t
                }, v.prototype.convert13b = function(t, e, r, n) {
                    for (var o = 0, a = 0; a < e; a++) o += 0 | t[a], r[2 * a] = 8191 & o, o >>>= 13, r[2 * a + 1] = 8191 & o, o >>>= 13;
                    for (a = 2 * e; a < n; ++a) r[a] = 0;
                    i(0 === o), i((-8192 & o) == 0)
                }, v.prototype.stub = function(t) {
                    for (var e = Array(t), r = 0; r < t; r++) e[r] = 0;
                    return e
                }, v.prototype.mulp = function(t, e, r) {
                    var i = 2 * this.guessLen13b(t.length, e.length),
                        n = this.makeRBT(i),
                        o = this.stub(i),
                        a = Array(i),
                        s = Array(i),
                        f = Array(i),
                        h = Array(i),
                        c = Array(i),
                        u = Array(i),
                        d = r.words;
                    d.length = i, this.convert13b(t.words, t.length, a, i), this.convert13b(e.words, e.length, h, i), this.transform(a, o, s, f, i, n), this.transform(h, o, c, u, i, n);
                    for (var l = 0; l < i; l++) {
                        var p = s[l] * c[l] - f[l] * u[l];
                        f[l] = s[l] * u[l] + f[l] * c[l], s[l] = p
                    }
                    return this.conjugate(s, f, i), this.transform(s, f, d, o, i, n), this.conjugate(d, o, i), this.normalize13b(d, i), r.negative = t.negative ^ e.negative, r.length = t.length + e.length, r._strip()
                }, o.prototype.mul = function(t) {
                    var e = new o(null);
                    return e.words = Array(this.length + t.length), this.mulTo(t, e)
                }, o.prototype.mulf = function(t) {
                    var e, r = new o(null);
                    return r.words = Array(this.length + t.length), e = this, g(e, t, r)
                }, o.prototype.imul = function(t) {
                    return this.clone().mulTo(t, this)
                }, o.prototype.imuln = function(t) {
                    var e = t < 0;
                    e && (t = -t), i("number" == typeof t), i(t < 67108864);
                    for (var r = 0, n = 0; n < this.length; n++) {
                        var o = (0 | this.words[n]) * t,
                            a = (67108863 & o) + (67108863 & r);
                        r >>= 26, r += (o / 67108864 | 0) + (a >>> 26), this.words[n] = 67108863 & a
                    }
                    return 0 !== r && (this.words[n] = r, this.length++), e ? this.ineg() : this
                }, o.prototype.muln = function(t) {
                    return this.clone().imuln(t)
                }, o.prototype.sqr = function() {
                    return this.mul(this)
                }, o.prototype.isqr = function() {
                    return this.imul(this.clone())
                }, o.prototype.pow = function(t) {
                    var e = function(t) {
                        for (var e = Array(t.bitLength()), r = 0; r < e.length; r++) {
                            var i = r / 26 | 0,
                                n = r % 26;
                            e[r] = t.words[i] >>> n & 1
                        }
                        return e
                    }(t);
                    if (0 === e.length) return new o(1);
                    for (var r = this, i = 0; i < e.length && 0 === e[i]; i++, r = r.sqr());
                    if (++i < e.length)
                        for (var n = r.sqr(); i < e.length; i++, n = n.sqr()) 0 !== e[i] && (r = r.mul(n));
                    return r
                }, o.prototype.iushln = function(t) {
                    i("number" == typeof t && t >= 0);
                    var e, r = t % 26,
                        n = (t - r) / 26,
                        o = 67108863 >>> 26 - r << 26 - r;
                    if (0 !== r) {
                        var a = 0;
                        for (e = 0; e < this.length; e++) {
                            var s = this.words[e] & o,
                                f = (0 | this.words[e]) - s << r;
                            this.words[e] = f | a, a = s >>> 26 - r
                        }
                        a && (this.words[e] = a, this.length++)
                    }
                    if (0 !== n) {
                        for (e = this.length - 1; e >= 0; e--) this.words[e + n] = this.words[e];
                        for (e = 0; e < n; e++) this.words[e] = 0;
                        this.length += n
                    }
                    return this._strip()
                }, o.prototype.ishln = function(t) {
                    return i(0 === this.negative), this.iushln(t)
                }, o.prototype.iushrn = function(t, e, r) {
                    i("number" == typeof t && t >= 0), n = e ? (e - e % 26) / 26 : 0;
                    var n, o = t % 26,
                        a = Math.min((t - o) / 26, this.length),
                        s = 67108863 ^ 67108863 >>> o << o;
                    if (n -= a, n = Math.max(0, n), r) {
                        for (var f = 0; f < a; f++) r.words[f] = this.words[f];
                        r.length = a
                    }
                    if (0 === a);
                    else if (this.length > a)
                        for (this.length -= a, f = 0; f < this.length; f++) this.words[f] = this.words[f + a];
                    else this.words[0] = 0, this.length = 1;
                    var h = 0;
                    for (f = this.length - 1; f >= 0 && (0 !== h || f >= n); f--) {
                        var c = 0 | this.words[f];
                        this.words[f] = h << 26 - o | c >>> o, h = c & s
                    }
                    return r && 0 !== h && (r.words[r.length++] = h), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                }, o.prototype.ishrn = function(t, e, r) {
                    return i(0 === this.negative), this.iushrn(t, e, r)
                }, o.prototype.shln = function(t) {
                    return this.clone().ishln(t)
                }, o.prototype.ushln = function(t) {
                    return this.clone().iushln(t)
                }, o.prototype.shrn = function(t) {
                    return this.clone().ishrn(t)
                }, o.prototype.ushrn = function(t) {
                    return this.clone().iushrn(t)
                }, o.prototype.testn = function(t) {
                    i("number" == typeof t && t >= 0);
                    var e = t % 26,
                        r = (t - e) / 26;
                    return !(this.length <= r) && !!(this.words[r] & 1 << e)
                }, o.prototype.imaskn = function(t) {
                    i("number" == typeof t && t >= 0);
                    var e = t % 26,
                        r = (t - e) / 26;
                    return (i(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) ? this : (0 !== e && r++, this.length = Math.min(r, this.length), 0 !== e && (this.words[this.length - 1] &= 67108863 ^ 67108863 >>> e << e), this._strip())
                }, o.prototype.maskn = function(t) {
                    return this.clone().imaskn(t)
                }, o.prototype.iaddn = function(t) {
                    if (i("number" == typeof t), i(t < 67108864), t < 0) return this.isubn(-t);
                    if (0 !== this.negative) return 1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this);
                    return this._iaddn(t)
                }, o.prototype._iaddn = function(t) {
                    this.words[0] += t;
                    for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                    return this.length = Math.max(this.length, e + 1), this
                }, o.prototype.isubn = function(t) {
                    if (i("number" == typeof t), i(t < 67108864), t < 0) return this.iaddn(-t);
                    if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                    if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                    else
                        for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, this.words[e + 1] -= 1;
                    return this._strip()
                }, o.prototype.addn = function(t) {
                    return this.clone().iaddn(t)
                }, o.prototype.subn = function(t) {
                    return this.clone().isubn(t)
                }, o.prototype.iabs = function() {
                    return this.negative = 0, this
                }, o.prototype.abs = function() {
                    return this.clone().iabs()
                }, o.prototype._ishlnsubmul = function(t, e, r) {
                    var n, o, a = t.length + r;
                    this._expand(a);
                    var s = 0;
                    for (n = 0; n < t.length; n++) {
                        o = (0 | this.words[n + r]) + s;
                        var f = (0 | t.words[n]) * e;
                        o -= 67108863 & f, s = (o >> 26) - (f / 67108864 | 0), this.words[n + r] = 67108863 & o
                    }
                    for (; n < this.length - r; n++) s = (o = (0 | this.words[n + r]) + s) >> 26, this.words[n + r] = 67108863 & o;
                    if (0 === s) return this._strip();
                    for (i(-1 === s), s = 0, n = 0; n < this.length; n++) s = (o = -(0 | this.words[n]) + s) >> 26, this.words[n] = 67108863 & o;
                    return this.negative = 1, this._strip()
                }, o.prototype._wordDiv = function(t, e) {
                    var r, i = this.length - t.length,
                        n = this.clone(),
                        a = t,
                        s = 0 | a.words[a.length - 1];
                    0 != (i = 26 - this._countBits(s)) && (a = a.ushln(i), n.iushln(i), s = 0 | a.words[a.length - 1]);
                    var f = n.length - a.length;
                    if ("mod" !== e) {
                        (r = new o(null)).length = f + 1, r.words = Array(r.length);
                        for (var h = 0; h < r.length; h++) r.words[h] = 0
                    }
                    var c = n.clone()._ishlnsubmul(a, 1, f);
                    0 === c.negative && (n = c, r && (r.words[f] = 1));
                    for (var u = f - 1; u >= 0; u--) {
                        var d = (0 | n.words[a.length + u]) * 67108864 + (0 | n.words[a.length + u - 1]);
                        for (d = Math.min(d / s | 0, 67108863), n._ishlnsubmul(a, d, u); 0 !== n.negative;) d--, n.negative = 0, n._ishlnsubmul(a, 1, u), !n.isZero() && (n.negative ^= 1);
                        r && (r.words[u] = d)
                    }
                    return r && r._strip(), n._strip(), "div" !== e && 0 !== i && n.iushrn(i), {
                        div: r || null,
                        mod: n
                    }
                }, o.prototype.divmod = function(t, e, r) {
                    var n, a, s;
                    if (i(!t.isZero()), this.isZero()) return {
                        div: new o(0),
                        mod: new o(0)
                    };
                    if (0 !== this.negative && 0 === t.negative) return s = this.neg().divmod(t, e), "mod" !== e && (n = s.div.neg()), "div" !== e && (a = s.mod.neg(), r && 0 !== a.negative && a.iadd(t)), {
                        div: n,
                        mod: a
                    };
                    if (0 === this.negative && 0 !== t.negative) return s = this.divmod(t.neg(), e), "mod" !== e && (n = s.div.neg()), {
                        div: n,
                        mod: s.mod
                    };
                    if ((this.negative & t.negative) != 0) return s = this.neg().divmod(t.neg(), e), "div" !== e && (a = s.mod.neg(), r && 0 !== a.negative && a.isub(t)), {
                        div: s.div,
                        mod: a
                    };
                    if (t.length > this.length || 0 > this.cmp(t)) return {
                        div: new o(0),
                        mod: this
                    };
                    if (1 === t.length) return "div" === e ? {
                        div: this.divn(t.words[0]),
                        mod: null
                    } : "mod" === e ? {
                        div: null,
                        mod: new o(this.modrn(t.words[0]))
                    } : {
                        div: this.divn(t.words[0]),
                        mod: new o(this.modrn(t.words[0]))
                    };
                    return this._wordDiv(t, e)
                }, o.prototype.div = function(t) {
                    return this.divmod(t, "div", !1).div
                }, o.prototype.mod = function(t) {
                    return this.divmod(t, "mod", !1).mod
                }, o.prototype.umod = function(t) {
                    return this.divmod(t, "mod", !0).mod
                }, o.prototype.divRound = function(t) {
                    var e = this.divmod(t);
                    if (e.mod.isZero()) return e.div;
                    var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                        i = t.ushrn(1),
                        n = t.andln(1),
                        o = r.cmp(i);
                    return o < 0 || 1 === n && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                }, o.prototype.modrn = function(t) {
                    var e = t < 0;
                    e && (t = -t), i(t <= 67108863);
                    for (var r = 67108864 % t, n = 0, o = this.length - 1; o >= 0; o--) n = (r * n + (0 | this.words[o])) % t;
                    return e ? -n : n
                }, o.prototype.modn = function(t) {
                    return this.modrn(t)
                }, o.prototype.idivn = function(t) {
                    var e = t < 0;
                    e && (t = -t), i(t <= 67108863);
                    for (var r = 0, n = this.length - 1; n >= 0; n--) {
                        var o = (0 | this.words[n]) + 67108864 * r;
                        this.words[n] = o / t | 0, r = o % t
                    }
                    return this._strip(), e ? this.ineg() : this
                }, o.prototype.divn = function(t) {
                    return this.clone().idivn(t)
                }, o.prototype.egcd = function(t) {
                    i(0 === t.negative), i(!t.isZero());
                    var e = this,
                        r = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    for (var n = new o(1), a = new o(0), s = new o(0), f = new o(1), h = 0; e.isEven() && r.isEven();) e.iushrn(1), r.iushrn(1), ++h;
                    for (var c = r.clone(), u = e.clone(); !e.isZero();) {
                        for (var d = 0, l = 1;
                            (e.words[0] & l) == 0 && d < 26; ++d, l <<= 1);
                        if (d > 0)
                            for (e.iushrn(d); d-- > 0;)(n.isOdd() || a.isOdd()) && (n.iadd(c), a.isub(u)), n.iushrn(1), a.iushrn(1);
                        for (var p = 0, b = 1;
                            (r.words[0] & b) == 0 && p < 26; ++p, b <<= 1);
                        if (p > 0)
                            for (r.iushrn(p); p-- > 0;)(s.isOdd() || f.isOdd()) && (s.iadd(c), f.isub(u)), s.iushrn(1), f.iushrn(1);
                        e.cmp(r) >= 0 ? (e.isub(r), n.isub(s), a.isub(f)) : (r.isub(e), s.isub(n), f.isub(a))
                    }
                    return {
                        a: s,
                        b: f,
                        gcd: r.iushln(h)
                    }
                }, o.prototype._invmp = function(t) {
                    i(0 === t.negative), i(!t.isZero());
                    var e, r = this,
                        n = t.clone();
                    r = 0 !== r.negative ? r.umod(t) : r.clone();
                    for (var a = new o(1), s = new o(0), f = n.clone(); r.cmpn(1) > 0 && n.cmpn(1) > 0;) {
                        for (var h = 0, c = 1;
                            (r.words[0] & c) == 0 && h < 26; ++h, c <<= 1);
                        if (h > 0)
                            for (r.iushrn(h); h-- > 0;) a.isOdd() && a.iadd(f), a.iushrn(1);
                        for (var u = 0, d = 1;
                            (n.words[0] & d) == 0 && u < 26; ++u, d <<= 1);
                        if (u > 0)
                            for (n.iushrn(u); u-- > 0;) s.isOdd() && s.iadd(f), s.iushrn(1);
                        r.cmp(n) >= 0 ? (r.isub(n), a.isub(s)) : (n.isub(r), s.isub(a))
                    }
                    return 0 > (e = 0 === r.cmpn(1) ? a : s).cmpn(0) && e.iadd(t), e
                }, o.prototype.gcd = function(t) {
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
                            var o = e;
                            e = r, r = o
                        } else if (0 === n || 0 === r.cmpn(1)) break;
                        e.isub(r)
                    }
                    return r.iushln(i)
                }, o.prototype.invm = function(t) {
                    return this.egcd(t).a.umod(t)
                }, o.prototype.isEven = function() {
                    return (1 & this.words[0]) == 0
                }, o.prototype.isOdd = function() {
                    return (1 & this.words[0]) == 1
                }, o.prototype.andln = function(t) {
                    return this.words[0] & t
                }, o.prototype.bincn = function(t) {
                    i("number" == typeof t);
                    var e = t % 26,
                        r = (t - e) / 26,
                        n = 1 << e;
                    if (this.length <= r) return this._expand(r + 1), this.words[r] |= n, this;
                    for (var o = n, a = r; 0 !== o && a < this.length; a++) {
                        var s = 0 | this.words[a];
                        s += o, o = s >>> 26, s &= 67108863, this.words[a] = s
                    }
                    return 0 !== o && (this.words[a] = o, this.length++), this
                }, o.prototype.isZero = function() {
                    return 1 === this.length && 0 === this.words[0]
                }, o.prototype.cmpn = function(t) {
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
                }, o.prototype.cmp = function(t) {
                    if (0 !== this.negative && 0 === t.negative) return -1;
                    if (0 === this.negative && 0 !== t.negative) return 1;
                    var e = this.ucmp(t);
                    return 0 !== this.negative ? 0 | -e : e
                }, o.prototype.ucmp = function(t) {
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
                }, o.prototype.gtn = function(t) {
                    return 1 === this.cmpn(t)
                }, o.prototype.gt = function(t) {
                    return 1 === this.cmp(t)
                }, o.prototype.gten = function(t) {
                    return this.cmpn(t) >= 0
                }, o.prototype.gte = function(t) {
                    return this.cmp(t) >= 0
                }, o.prototype.ltn = function(t) {
                    return -1 === this.cmpn(t)
                }, o.prototype.lt = function(t) {
                    return -1 === this.cmp(t)
                }, o.prototype.lten = function(t) {
                    return 0 >= this.cmpn(t)
                }, o.prototype.lte = function(t) {
                    return 0 >= this.cmp(t)
                }, o.prototype.eqn = function(t) {
                    return 0 === this.cmpn(t)
                }, o.prototype.eq = function(t) {
                    return 0 === this.cmp(t)
                }, o.red = function(t) {
                    return new E(t)
                }, o.prototype.toRed = function(t) {
                    return i(!this.red, "Already a number in reduction context"), i(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                }, o.prototype.fromRed = function() {
                    return i(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                }, o.prototype._forceRed = function(t) {
                    return this.red = t, this
                }, o.prototype.forceRed = function(t) {
                    return i(!this.red, "Already a number in reduction context"), this._forceRed(t)
                }, o.prototype.redAdd = function(t) {
                    return i(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                }, o.prototype.redIAdd = function(t) {
                    return i(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                }, o.prototype.redSub = function(t) {
                    return i(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                }, o.prototype.redISub = function(t) {
                    return i(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                }, o.prototype.redShl = function(t) {
                    return i(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                }, o.prototype.redMul = function(t) {
                    return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                }, o.prototype.redIMul = function(t) {
                    return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                }, o.prototype.redSqr = function() {
                    return i(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                }, o.prototype.redISqr = function() {
                    return i(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                }, o.prototype.redSqrt = function() {
                    return i(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                }, o.prototype.redInvm = function() {
                    return i(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                }, o.prototype.redNeg = function() {
                    return i(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                }, o.prototype.redPow = function(t) {
                    return i(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                };
                var _ = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };

                function w(t, e) {
                    this.name = t, this.p = new o(e, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
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

                function x() {
                    w.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                }

                function E(t) {
                    if ("string" == typeof t) {
                        var e = o._prime(t);
                        this.m = e.p, this.prime = e
                    } else i(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                }

                function A(t) {
                    E.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                }
                w.prototype._tmp = function() {
                    var t = new o(null);
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
                        var o = 0 | t.words[i];
                        t.words[i - 10] = (4194303 & o) << 4 | n >>> 22, n = o
                    }
                    n >>>= 22, t.words[i - 10] = n, 0 === n && t.length > 10 ? t.length -= 10 : t.length -= 9
                }, M.prototype.imulK = function(t) {
                    t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                    for (var e = 0, r = 0; r < t.length; r++) {
                        var i = 0 | t.words[r];
                        e += 977 * i, t.words[r] = 67108863 & e, e = 64 * i + (e / 67108864 | 0)
                    }
                    return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                }, n(S, w), n(k, w), n(x, w), x.prototype.imulK = function(t) {
                    for (var e = 0, r = 0; r < t.length; r++) {
                        var i = (0 | t.words[r]) * 19 + e,
                            n = 67108863 & i;
                        i >>>= 26, t.words[r] = n, e = i
                    }
                    return 0 !== e && (t.words[t.length++] = e), t
                }, o._prime = function(t) {
                    var e;
                    if (_[t]) return _[t];
                    if ("k256" === t) e = new M;
                    else if ("p224" === t) e = new S;
                    else if ("p192" === t) e = new k;
                    else if ("p25519" === t) e = new x;
                    else throw Error("Unknown prime " + t);
                    return _[t] = e, e
                }, E.prototype._verify1 = function(t) {
                    i(0 === t.negative, "red works only with positives"), i(t.red, "red works only with red numbers")
                }, E.prototype._verify2 = function(t, e) {
                    i((t.negative | e.negative) == 0, "red works only with positives"), i(t.red && t.red === e.red, "red works only with red numbers")
                }, E.prototype.imod = function(t) {
                    return this.prime ? this.prime.ireduce(t)._forceRed(this) : (h(t, t.umod(this.m)._forceRed(this)), t)
                }, E.prototype.neg = function(t) {
                    return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                }, E.prototype.add = function(t, e) {
                    this._verify2(t, e);
                    var r = t.add(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                }, E.prototype.iadd = function(t, e) {
                    this._verify2(t, e);
                    var r = t.iadd(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r
                }, E.prototype.sub = function(t, e) {
                    this._verify2(t, e);
                    var r = t.sub(e);
                    return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this)
                }, E.prototype.isub = function(t, e) {
                    this._verify2(t, e);
                    var r = t.isub(e);
                    return 0 > r.cmpn(0) && r.iadd(this.m), r
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
                    if (i(e % 2 == 1), 3 === e) {
                        var r = this.m.add(new o(1)).iushrn(2);
                        return this.pow(t, r)
                    }
                    for (var n = this.m.subn(1), a = 0; !n.isZero() && 0 === n.andln(1);) a++, n.iushrn(1);
                    i(!n.isZero());
                    var s = new o(1).toRed(this),
                        f = s.redNeg(),
                        h = this.m.subn(1).iushrn(1),
                        c = this.m.bitLength();
                    for (c = new o(2 * c * c).toRed(this); 0 !== this.pow(c, h).cmp(f);) c.redIAdd(f);
                    for (var u = this.pow(c, n), d = this.pow(t, n.addn(1).iushrn(1)), l = this.pow(t, n), p = a; 0 !== l.cmp(s);) {
                        for (var b = l, m = 0; 0 !== b.cmp(s); m++) b = b.redSqr();
                        i(m < p);
                        var g = this.pow(u, new o(1).iushln(p - m - 1));
                        d = d.redMul(g), u = g.redSqr(), l = l.redMul(u), p = m
                    }
                    return d
                }, E.prototype.invm = function(t) {
                    var e = t._invmp(this.m);
                    return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e)
                }, E.prototype.pow = function(t, e) {
                    if (e.isZero()) return new o(1).toRed(this);
                    if (0 === e.cmpn(1)) return t.clone();
                    var r = Array(16);
                    r[0] = new o(1).toRed(this), r[1] = t;
                    for (var i = 2; i < r.length; i++) r[i] = this.mul(r[i - 1], t);
                    var n = r[0],
                        a = 0,
                        s = 0,
                        f = e.bitLength() % 26;
                    for (0 === f && (f = 26), i = e.length - 1; i >= 0; i--) {
                        for (var h = e.words[i], c = f - 1; c >= 0; c--) {
                            var u = h >> c & 1;
                            if (n !== r[0] && (n = this.sqr(n)), 0 === u && 0 === a) {
                                s = 0;
                                continue
                            }
                            a <<= 1, a |= u, (4 == ++s || 0 === i && 0 === c) && (n = this.mul(n, r[a]), s = 0, a = 0)
                        }
                        f = 26
                    }
                    return n
                }, E.prototype.convertTo = function(t) {
                    var e = t.umod(this.m);
                    return e === t ? e.clone() : e
                }, E.prototype.convertFrom = function(t) {
                    var e = t.clone();
                    return e.red = null, e
                }, o.mont = function(t) {
                    return new A(t)
                }, n(A, E), A.prototype.convertTo = function(t) {
                    return this.imod(t.ushln(this.shift))
                }, A.prototype.convertFrom = function(t) {
                    var e = this.imod(t.mul(this.rinv));
                    return e.red = null, e
                }, A.prototype.imul = function(t, e) {
                    if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
                    var r = t.imul(e),
                        i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        n = r.isub(i).iushrn(this.shift),
                        o = n;
                    return n.cmp(this.m) >= 0 ? o = n.isub(this.m) : 0 > n.cmpn(0) && (o = n.iadd(this.m)), o._forceRed(this)
                }, A.prototype.mul = function(t, e) {
                    if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
                    var r = t.mul(e),
                        i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        n = r.isub(i).iushrn(this.shift),
                        a = n;
                    return n.cmp(this.m) >= 0 ? a = n.isub(this.m) : 0 > n.cmpn(0) && (a = n.iadd(this.m)), a._forceRed(this)
                }, A.prototype.invm = function(t) {
                    return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                }
            }(void 0 === t || t, this)