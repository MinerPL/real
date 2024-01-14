"use strict";
t = s.nmd(t), s("424973"), s("781738"), s("990131"), s("477657"), s("811875"), s("90301"), s("652153"), s("28797"), s("817884"), s("597349"), s("667536"), s("690341"), s("311790");
var r, i, n, c, o, f = {
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

function u(t, e, s) {
  if (4 !== e.length) throw new f.exception.invalid("invalid aes block size");
  var r = t.b[s],
    i = e[0] ^ r[0],
    n = e[s ? 3 : 1] ^ r[1],
    c = e[2] ^ r[2];
  e = e[s ? 1 : 3] ^ r[3];
  var o, u, a, d, p = r.length / 4 - 2,
    b = 4,
    h = [0, 0, 0, 0];
  t = (o = t.s[s])[0];
  var l = o[1],
    g = o[2],
    v = o[3],
    x = o[4];
  for (d = 0; d < p; d++) o = t[i >>> 24] ^ l[n >> 16 & 255] ^ g[c >> 8 & 255] ^ v[255 & e] ^ r[b], u = t[n >>> 24] ^ l[c >> 16 & 255] ^ g[e >> 8 & 255] ^ v[255 & i] ^ r[b + 1], a = t[c >>> 24] ^ l[e >> 16 & 255] ^ g[i >> 8 & 255] ^ v[255 & n] ^ r[b + 2], e = t[e >>> 24] ^ l[i >> 16 & 255] ^ g[n >> 8 & 255] ^ v[255 & c] ^ r[b + 3], b += 4, i = o, n = u, c = a;
  for (d = 0; 4 > d; d++) h[s ? 3 & -d : d] = x[i >>> 24] << 24 ^ x[n >> 16 & 255] << 16 ^ x[c >> 8 & 255] << 8 ^ x[255 & e] ^ r[b++], o = i, i = n, n = c, c = e, e = o;
  return h
}

function a(t, e) {
  var s, r, i, n = t.F,
    c = t.b,
    o = n[0],
    f = n[1],
    u = n[2],
    a = n[3],
    d = n[4],
    p = n[5],
    b = n[6],
    h = n[7];
  for (s = 0; 64 > s; s++) 16 > s ? r = e[s] : (r = e[s + 1 & 15], i = e[s + 14 & 15], r = e[15 & s] = (r >>> 7 ^ r >>> 18 ^ r >>> 3 ^ r << 25 ^ r << 14) + (i >>> 17 ^ i >>> 19 ^ i >>> 10 ^ i << 15 ^ i << 13) + e[15 & s] + e[s + 9 & 15] | 0), r = r + h + (d >>> 6 ^ d >>> 11 ^ d >>> 25 ^ d << 26 ^ d << 21 ^ d << 7) + (b ^ d & (p ^ b)) + c[s], h = b, b = p, p = d, d = a + r | 0, a = u, u = f, o = r + ((f = o) & u ^ a & (f ^ u)) + (f >>> 2 ^ f >>> 13 ^ f >>> 22 ^ f << 30 ^ f << 19 ^ f << 10) | 0;
  n[0] = n[0] + o | 0, n[1] = n[1] + f | 0, n[2] = n[2] + u | 0, n[3] = n[3] + a | 0, n[4] = n[4] + d | 0, n[5] = n[5] + p | 0, n[6] = n[6] + b | 0, n[7] = n[7] + h | 0
}

function d(t, e) {
  var s, r = f.random.K[t],
    i = [];
  for (s in r) r.hasOwnProperty(s) && i.push(r[s]);
  for (s = 0; s < i.length; s++) i[s](e)
}

function p(t, e) {
  "undefined" != typeof window && window.performance && "function" == typeof window.performance.now ? t.addEntropy(window.performance.now(), e, "loadtime") : t.addEntropy((new Date).valueOf(), e, "loadtime")
}

function b(t) {
  t.b = h(t).concat(h(t)), t.L = new f.cipher.aes(t.b)
}

function h(t) {
  for (var e = 0; 4 > e && (t.h[e] = t.h[e] + 1 | 0, !t.h[e]); e++);
  return t.L.encrypt(t.h)
}

function l(t, e) {
  return function() {
    e.apply(t, arguments)
  }
}
f.cipher.aes = function(t) {
  this.s[0][0][0] || this.O();
  var e, s, r, i, n = this.s[0][4],
    c = this.s[1];
  e = t.length;
  var o = 1;
  if (4 !== e && 6 !== e && 8 !== e) throw new f.exception.invalid("invalid aes key size");
  for (this.b = [r = t.slice(0), i = []], t = e; t < 4 * e + 28; t++) s = r[t - 1], (0 == t % e || 8 === e && 4 == t % e) && (s = n[s >>> 24] << 24 ^ n[s >> 16 & 255] << 16 ^ n[s >> 8 & 255] << 8 ^ n[255 & s], 0 == t % e && (s = s << 8 ^ s >>> 24 ^ o << 24, o = o << 1 ^ 283 * (o >> 7))), r[t] = r[t - e] ^ s;
  for (e = 0; t; e++, t--) s = r[3 & e ? t : t - 4], i[e] = 4 >= t || 4 > e ? s : c[0][n[s >>> 24]] ^ c[1][n[s >> 16 & 255]] ^ c[2][n[s >> 8 & 255]] ^ c[3][n[255 & s]]
}, f.cipher.aes.prototype = {
  encrypt: function(t) {
    return u(this, t, 0)
  },
  decrypt: function(t) {
    return u(this, t, 1)
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
    var t, e, s, r, i, n, c, o = this.s[0],
      f = this.s[1],
      u = o[4],
      a = f[4],
      d = [],
      p = [];
    for (t = 0; 256 > t; t++) p[(d[t] = t << 1 ^ 283 * (t >> 7)) ^ t] = t;
    for (e = s = 0; !u[e]; e ^= r || 1, s = p[s] || 1)
      for (n = (n = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4) >> 8 ^ 255 & n ^ 99, u[e] = n, a[n] = e, c = 16843009 * (i = d[t = d[r = d[e]]]) ^ 65537 * t ^ 257 * r ^ 16843008 * e, i = 257 * d[n] ^ 16843008 * n, t = 0; 4 > t; t++) o[t][e] = i = i << 24 ^ i >>> 8, f[t][n] = c = c << 24 ^ c >>> 8;
    for (t = 0; 5 > t; t++) o[t] = o[t].slice(0), f[t] = f[t].slice(0)
  }
}, f.bitArray = {
  bitSlice: function(t, e, s) {
    return t = f.bitArray.$(t.slice(e / 32), 32 - (31 & e)).slice(1), void 0 === s ? t : f.bitArray.clamp(t, s - e)
  },
  extract: function(t, e, s) {
    var r = Math.floor(-e - s & 31);
    return ((e + s - 1 ^ e) & -32 ? t[e / 32 | 0] << 32 - r ^ t[e / 32 + 1 | 0] >>> r : t[e / 32 | 0] >>> r) & (1 << s) - 1
  },
  concat: function(t, e) {
    if (0 === t.length || 0 === e.length) return t.concat(e);
    var s = t[t.length - 1],
      r = f.bitArray.getPartial(s);
    return 32 === r ? t.concat(e) : f.bitArray.$(e, r, 0 | s, t.slice(0, t.length - 1))
  },
  bitLength: function(t) {
    var e = t.length;
    return 0 === e ? 0 : 32 * (e - 1) + f.bitArray.getPartial(t[e - 1])
  },
  clamp: function(t, e) {
    if (32 * t.length < e) return t;
    var s = (t = t.slice(0, Math.ceil(e / 32))).length;
    return e &= 31, 0 < s && e && (t[s - 1] = f.bitArray.partial(e, t[s - 1] & 2147483648 >> e - 1, 1)), t
  },
  partial: function(t, e, s) {
    return 32 === t ? e : (s ? 0 | e : e << 32 - t) + 1099511627776 * t
  },
  getPartial: function(t) {
    return Math.round(t / 1099511627776) || 32
  },
  equal: function(t, e) {
    if (f.bitArray.bitLength(t) !== f.bitArray.bitLength(e)) return !1;
    var s, r = 0;
    for (s = 0; s < t.length; s++) r |= t[s] ^ e[s];
    return 0 === r
  },
  $: function(t, e, s, r) {
    var i;
    for (i = 0, void 0 === r && (r = []); 32 <= e; e -= 32) r.push(s), s = 0;
    if (0 === e) return r.concat(t);
    for (i = 0; i < t.length; i++) r.push(s | t[i] >>> e), s = t[i] << 32 - e;
    return i = t.length ? t[t.length - 1] : 0, t = f.bitArray.getPartial(i), r.push(f.bitArray.partial(e + t & 31, 32 < e + t ? s : r.pop(), 1)), r
  },
  i: function(t, e) {
    return [t[0] ^ e[0], t[1] ^ e[1], t[2] ^ e[2], t[3] ^ e[3]]
  },
  byteswapM: function(t) {
    var e, s;
    for (e = 0; e < t.length; ++e) s = t[e], t[e] = s >>> 24 | s >>> 8 & 65280 | (65280 & s) << 8 | s << 24;
    return t
  }
}, f.codec.utf8String = {
  fromBits: function(t) {
    var e, s, r = "",
      i = f.bitArray.bitLength(t);
    for (e = 0; e < i / 8; e++) 0 == (3 & e) && (s = t[e / 4]), r += String.fromCharCode(s >>> 8 >>> 8 >>> 8), s <<= 8;
    return decodeURIComponent(escape(r))
  },
  toBits: function(t) {
    t = unescape(encodeURIComponent(t));
    var e, s = [],
      r = 0;
    for (e = 0; e < t.length; e++) r = r << 8 | t.charCodeAt(e), 3 == (3 & e) && (s.push(r), r = 0);
    return 3 & e && s.push(f.bitArray.partial(8 * (3 & e), r)), s
  }
}, f.codec.hex = {
  fromBits: function(t) {
    var e, s = "";
    for (e = 0; e < t.length; e++) s += ((0 | t[e]) + 0xf00000000000).toString(16).substr(4);
    return s.substr(0, f.bitArray.bitLength(t) / 4)
  },
  toBits: function(t) {
    var e, s, r = [];
    for (s = (t = t.replace(/\s|0x/g, "")).length, t += "00000000", e = 0; e < t.length; e += 8) r.push(0 ^ parseInt(t.substr(e, 8), 16));
    return f.bitArray.clamp(r, 4 * s)
  }
}, f.codec.base32 = {
  B: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  X: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  BITS: 32,
  BASE: 5,
  REMAINING: 27,
  fromBits: function(t, e, s) {
    var r = f.codec.base32.BASE,
      i = f.codec.base32.REMAINING,
      n = "",
      c = 0,
      o = f.codec.base32.B,
      u = 0,
      a = f.bitArray.bitLength(t);
    for (s && (o = f.codec.base32.X), s = 0; n.length * r < a;) n += o.charAt((u ^ t[s] >>> c) >>> i), c < r ? (u = t[s] << r - c, c += i, s++) : (u <<= r, c -= r);
    for (; 7 & n.length && !e;) n += "=";
    return n
  },
  toBits: function(t, e) {
    t = t.replace(/\s|=/g, "").toUpperCase();
    var s, r, i = f.codec.base32.BITS,
      n = f.codec.base32.BASE,
      c = f.codec.base32.REMAINING,
      o = [],
      u = 0,
      a = f.codec.base32.B,
      d = 0,
      p = "base32";
    for (e && (a = f.codec.base32.X, p = "base32hex"), s = 0; s < t.length; s++) {
      if (0 > (r = a.indexOf(t.charAt(s)))) {
        if (!e) try {
          return f.codec.base32hex.toBits(t)
        } catch (t) {}
        throw new f.exception.invalid("this isn't " + p + "!")
      }
      u > c ? (u -= c, o.push(d ^ r >>> u), d = r << i - u) : (u += n, d ^= r << i - u)
    }
    return 56 & u && o.push(f.bitArray.partial(56 & u, d, 1)), o
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
  fromBits: function(t, e, s) {
    var r = "",
      i = 0,
      n = f.codec.base64.B,
      c = 0,
      o = f.bitArray.bitLength(t);
    for (s && (n = n.substr(0, 62) + "-_"), s = 0; 6 * r.length < o;) r += n.charAt((c ^ t[s] >>> i) >>> 26), 6 > i ? (c = t[s] << 6 - i, i += 26, s++) : (c <<= 6, i -= 6);
    for (; 3 & r.length && !e;) r += "=";
    return r
  },
  toBits: function(t, e) {
    t = t.replace(/\s|=/g, "");
    var s, r, i = [],
      n = 0,
      c = f.codec.base64.B,
      o = 0;
    for (e && (c = c.substr(0, 62) + "-_"), s = 0; s < t.length; s++) {
      if (0 > (r = c.indexOf(t.charAt(s)))) throw new f.exception.invalid("this isn't base64!");
      26 < n ? (n -= 26, i.push(o ^ r >>> n), o = r << 32 - n) : (n += 6, o ^= r << 32 - n)
    }
    return 56 & n && i.push(f.bitArray.partial(56 & n, o, 1)), i
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
    var e, s = this.A = f.bitArray.concat(this.A, t);
    if (e = this.l, 9007199254740991 < (t = this.l = e + f.bitArray.bitLength(t))) throw new f.exception.invalid("Cannot hash more than 2^53 - 1 bits");
    if ("undefined" != typeof Uint32Array) {
      var r = new Uint32Array(s),
        i = 0;
      for (e = 512 + e - (512 + e & 511); e <= t; e += 512) a(this, r.subarray(16 * i, 16 * (i + 1))), i += 1;
      s.splice(0, 16 * i)
    } else
      for (e = 512 + e - (512 + e & 511); e <= t; e += 512) a(this, s.splice(0, 16));
    return this
  },
  finalize: function() {
    var t, e = this.A,
      s = this.F,
      e = f.bitArray.concat(e, [f.bitArray.partial(1, 1)]);
    for (t = e.length + 2; 15 & t; t++) e.push(0);
    for (e.push(Math.floor(this.l / 4294967296)), e.push(0 | this.l); e.length;) a(this, e.splice(0, 16));
    return this.reset(), s
  },
  Y: [],
  b: [],
  O: function() {
    function t(t) {
      return 4294967296 * (t - Math.floor(t)) | 0
    }
    for (var e, s, r = 0, i = 2; 64 > r; i++) {
      for (e = 2, s = !0; e * e <= i; e++)
        if (0 == i % e) {
          s = !1;
          break
        } s && (8 > r && (this.Y[r] = t(Math.pow(i, .5))), this.b[r] = t(Math.pow(i, 1 / 3)), r++)
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
    var e, s = f.mode.ccm.G.slice();
    for (e = 0; e < s.length; e += 1) s[e](t)
  },
  encrypt: function(t, e, s, r, i) {
    var n, c = e.slice(0),
      o = f.bitArray,
      u = o.bitLength(s) / 8,
      a = o.bitLength(c) / 8;
    if (i = i || 64, r = r || [], 7 > u) throw new f.exception.invalid("ccm: iv must be at least 7 bytes");
    for (n = 2; 4 > n && a >>> 8 * n; n++);
    return n < 15 - u && (n = 15 - u), s = o.clamp(s, 8 * (15 - n)), e = f.mode.ccm.V(t, e, s, r, i, n), c = f.mode.ccm.C(t, c, s, e, i, n), o.concat(c.data, c.tag)
  },
  decrypt: function(t, e, s, r, i) {
    i = i || 64, r = r || [];
    var n = f.bitArray,
      c = n.bitLength(s) / 8,
      o = n.bitLength(e),
      u = n.clamp(e, o - i),
      a = n.bitSlice(e, o - i),
      o = (o - i) / 8;
    if (7 > c) throw new f.exception.invalid("ccm: iv must be at least 7 bytes");
    for (e = 2; 4 > e && o >>> 8 * e; e++);
    if (e < 15 - c && (e = 15 - c), s = n.clamp(s, 8 * (15 - e)), u = f.mode.ccm.C(t, u, s, a, i, e), t = f.mode.ccm.V(t, u.data, s, r, i, e), !n.equal(u.tag, t)) throw new f.exception.corrupt("ccm: tag doesn't match");
    return u.data
  },
  na: function(t, e, s, r, i, n) {
    var c = [],
      o = f.bitArray,
      u = o.i;
    if (r = [o.partial(8, (e.length ? 64 : 0) | r - 2 << 2 | n - 1)], r = o.concat(r, s), r[3] |= i, r = t.encrypt(r), e.length)
      for (65279 >= (s = o.bitLength(e) / 8) ? c = [o.partial(16, s)] : 4294967295 >= s && (c = o.concat([o.partial(16, 65534)], [s])), c = o.concat(c, e), e = 0; e < c.length; e += 4) r = t.encrypt(u(r, c.slice(e, e + 4).concat([0, 0, 0])));
    return r
  },
  V: function(t, e, s, r, i, n) {
    var c = f.bitArray,
      o = c.i;
    if ((i /= 8) % 2 || 4 > i || 16 < i) throw new f.exception.invalid("ccm: invalid tag length");
    if (4294967295 < r.length || 4294967295 < e.length) throw new f.exception.bug("ccm: can't deal with 4GiB or more data");
    for (s = f.mode.ccm.na(t, r, s, i, c.bitLength(e) / 8, n), r = 0; r < e.length; r += 4) s = t.encrypt(o(s, e.slice(r, r + 4).concat([0, 0, 0])));
    return c.clamp(s, 8 * i)
  },
  C: function(t, e, s, r, i, n) {
    var c, o = f.bitArray;
    c = o.i;
    var u = e.length,
      a = o.bitLength(e),
      d = u / 50,
      p = d;
    if (s = o.concat([o.partial(8, n - 1)], s).concat([0, 0, 0]).slice(0, 4), r = o.bitSlice(c(r, t.encrypt(s)), 0, i), !u) return {
      tag: r,
      data: []
    };
    for (c = 0; c < u; c += 4) c > d && (f.mode.ccm.fa(c / u), d += p), s[3]++, i = t.encrypt(s), e[c] ^= i[0], e[c + 1] ^= i[1], e[c + 2] ^= i[2], e[c + 3] ^= i[3];
    return {
      tag: r,
      data: o.clamp(e, a)
    }
  }
}, f.mode.ocb2 = {
  name: "ocb2",
  encrypt: function(t, e, s, r, i, n) {
    if (128 !== f.bitArray.bitLength(s)) throw new f.exception.invalid("ocb iv must be 128 bits");
    var c, o = f.mode.ocb2.S,
      u = f.bitArray,
      a = u.i,
      d = [0, 0, 0, 0];
    s = o(t.encrypt(s));
    var p, b = [];
    for (c = 0, r = r || [], i = i || 64; c + 4 < e.length; c += 4) d = a(d, p = e.slice(c, c + 4)), b = b.concat(a(s, t.encrypt(a(s, p)))), s = o(s);
    return p = e.slice(c), e = u.bitLength(p), c = t.encrypt(a(s, [0, 0, 0, e])), p = u.clamp(a(p.concat([0, 0, 0]), c), e), d = a(d, a(p.concat([0, 0, 0]), c)), d = t.encrypt(a(d, a(s, o(s)))), r.length && (d = a(d, n ? r : f.mode.ocb2.pmac(t, r))), b.concat(u.concat(p, u.clamp(d, i)))
  },
  decrypt: function(t, e, s, r, i, n) {
    if (128 !== f.bitArray.bitLength(s)) throw new f.exception.invalid("ocb iv must be 128 bits");
    i = i || 64;
    var c, o, u = f.mode.ocb2.S,
      a = f.bitArray,
      d = a.i,
      p = [0, 0, 0, 0],
      b = u(t.encrypt(s)),
      h = f.bitArray.bitLength(e) - i,
      l = [];
    for (s = 0, r = r || []; s + 4 < h / 32; s += 4) c = d(b, t.decrypt(d(b, e.slice(s, s + 4)))), p = d(p, c), l = l.concat(c), b = u(b);
    if (o = h - 32 * s, c = t.encrypt(d(b, [0, 0, 0, o])), c = d(c, a.clamp(e.slice(s), o).concat([0, 0, 0])), p = d(p, c), p = t.encrypt(d(p, d(b, u(b)))), r.length && (p = d(p, n ? r : f.mode.ocb2.pmac(t, r))), !a.equal(a.clamp(p, i), a.bitSlice(e, h))) throw new f.exception.corrupt("ocb: tag doesn't match");
    return l.concat(a.clamp(c, o))
  },
  pmac: function(t, e) {
    var s, r = f.mode.ocb2.S,
      i = f.bitArray,
      n = i.i,
      c = [0, 0, 0, 0],
      o = t.encrypt([0, 0, 0, 0]),
      o = n(o, r(r(o)));
    for (s = 0; s + 4 < e.length; s += 4) o = r(o), c = n(c, t.encrypt(n(o, e.slice(s, s + 4))));
    return s = e.slice(s), 128 > i.bitLength(s) && (o = n(o, r(o)), s = i.concat(s, [-2147483648, 0, 0, 0])), c = n(c, s), t.encrypt(n(r(n(o, r(o))), c))
  },
  S: function(t) {
    return [t[0] << 1 ^ t[1] >>> 31, t[1] << 1 ^ t[2] >>> 31, t[2] << 1 ^ t[3] >>> 31, t[3] << 1 ^ 135 * (t[0] >>> 31)]
  }
}, f.mode.gcm = {
  name: "gcm",
  encrypt: function(t, e, s, r, i) {
    var n = e.slice(0);
    return e = f.bitArray, r = r || [], t = f.mode.gcm.C(!0, t, n, r, s, i || 128), e.concat(t.data, t.tag)
  },
  decrypt: function(t, e, s, r, i) {
    var n = e.slice(0),
      c = f.bitArray,
      o = c.bitLength(n);
    if (r = r || [], (i = i || 128) <= o ? (e = c.bitSlice(n, o - i), n = c.bitSlice(n, 0, o - i)) : (e = n, n = []), t = f.mode.gcm.C(!1, t, n, r, s, i), !c.equal(t.tag, e)) throw new f.exception.corrupt("gcm: tag doesn't match");
    return t.data
  },
  ka: function(t, e) {
    var s, r, i, n, c, o = f.bitArray.i;
    for (s = 0, i = [0, 0, 0, 0], n = e.slice(0); 128 > s; s++) {
      for ((r = 0 != (t[Math.floor(s / 32)] & 1 << 31 - s % 32)) && (i = o(i, n)), c = 0 != (1 & n[3]), r = 3; 0 < r; r--) n[r] = n[r] >>> 1 | (1 & n[r - 1]) << 31;
      n[0] >>>= 1, c && (n[0] ^= -520093696)
    }
    return i
  },
  j: function(t, e, s) {
    var r, i = s.length;
    for (r = 0, e = e.slice(0); r < i; r += 4) e[0] ^= 4294967295 & s[r], e[1] ^= 4294967295 & s[r + 1], e[2] ^= 4294967295 & s[r + 2], e[3] ^= 4294967295 & s[r + 3], e = f.mode.gcm.ka(e, t);
    return e
  },
  C: function(t, e, s, r, i, n) {
    var c, o, u, a, d, p, b, h, l = f.bitArray;
    for (p = s.length, b = l.bitLength(s), h = l.bitLength(r), o = l.bitLength(i), c = e.encrypt([0, 0, 0, 0]), 96 === o ? (i = i.slice(0), i = l.concat(i, [1])) : (i = f.mode.gcm.j(c, [0, 0, 0, 0], i), i = f.mode.gcm.j(c, i, [0, 0, Math.floor(o / 4294967296), 4294967295 & o])), o = f.mode.gcm.j(c, [0, 0, 0, 0], r), d = i.slice(0), r = o.slice(0), t || (r = f.mode.gcm.j(c, o, s)), a = 0; a < p; a += 4) d[3]++, u = e.encrypt(d), s[a] ^= u[0], s[a + 1] ^= u[1], s[a + 2] ^= u[2], s[a + 3] ^= u[3];
    return s = l.clamp(s, b), t && (r = f.mode.gcm.j(c, o, s)), t = [Math.floor(h / 4294967296), 4294967295 & h, Math.floor(b / 4294967296), 4294967295 & b], r = f.mode.gcm.j(c, r, t), u = e.encrypt(i), r[0] ^= u[0], r[1] ^= u[1], r[2] ^= u[2], r[3] ^= u[3], {
      tag: l.bitSlice(r, 0, n),
      data: s
    }
  }
}, f.misc.hmac = function(t, e) {
  this.W = e = e || f.hash.sha256;
  var s, r = [
      [],
      []
    ],
    i = e.prototype.blockSize / 32;
  for (this.w = [new e, new e], t.length > i && (t = e.hash(t)), s = 0; s < i; s++) r[0][s] = 909522486 ^ t[s], r[1][s] = 1549556828 ^ t[s];
  this.w[0].update(r[0]), this.w[1].update(r[1]), this.R = new e(this.w[0])
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
}, f.misc.pbkdf2 = function(t, e, s, r, i) {
  if (s = s || 1e4, 0 > r || 0 > s) throw new f.exception.invalid("invalid params to pbkdf2");
  "string" == typeof t && (t = f.codec.utf8String.toBits(t)), "string" == typeof e && (e = f.codec.utf8String.toBits(e)), t = new(i = i || f.misc.hmac)(t);
  var n, c, o, u, a = [],
    d = f.bitArray;
  for (u = 1; 32 * a.length < (r || 1); u++) {
    for (c = 1, i = n = t.encrypt(d.concat(e, [u])); c < s; c++)
      for (n = t.encrypt(n), o = 0; o < n.length; o++) i[o] ^= n[o];
    a = a.concat(i)
  }
  return r && (a = d.clamp(a, r)), a
}, f.prng = function(t) {
  this.c = [new f.hash.sha256], this.m = [0], this.P = 0, this.H = {}, this.N = 0, this.U = {}, this.Z = this.f = this.o = this.ha = 0, this.b = [0, 0, 0, 0, 0, 0, 0, 0], this.h = [0, 0, 0, 0], this.L = void 0, this.M = t, this.D = !1, this.K = {
    progress: {},
    seeded: {}
  }, this.u = this.ga = 0, this.I = 1, this.J = 2, this.ca = 65536, this.T = [0, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024], this.da = 3e4, this.ba = 80
}, f.prng.prototype = {
  randomWords: function(t, e) {
    var s, r = [];
    if ((s = this.isReady(e)) === this.u) throw new f.exception.notReady("generator isn't seeded");
    if (s & this.J) {
      s = !(s & this.I), i = [];
      var i, n, c = 0;
      for (n = 0, this.Z = i[0] = (new Date).valueOf() + this.da; 16 > n; n++) i.push(4294967296 * Math.random() | 0);
      for (n = 0; n < this.c.length && (i = i.concat(this.c[n].finalize()), c += this.m[n], this.m[n] = 0, s || !(this.P & 1 << n)); n++);
      for (this.P >= 1 << this.c.length && (this.c.push(new f.hash.sha256), this.m.push(0)), this.f -= c, c > this.o && (this.o = c), this.P++, this.b = f.hash.sha256.hash(this.b.concat(i)), this.L = new f.cipher.aes(this.b), s = 0; 4 > s && (this.h[s] = this.h[s] + 1 | 0, !this.h[s]); s++);
    }
    for (s = 0; s < t; s += 4) 0 == (s + 1) % this.ca && b(this), r.push((i = h(this))[0], i[1], i[2], i[3]);
    return b(this), r.slice(0, t)
  },
  setDefaultParanoia: function(t, e) {
    if (0 === t && "Setting paranoia=0 will ruin your security; use it only for testing" !== e) throw new f.exception.invalid("Setting paranoia=0 will ruin your security; use it only for testing");
    this.M = t
  },
  addEntropy: function(t, e, s) {
    s = s || "user";
    var r, i, n = (new Date).valueOf(),
      c = this.H[s],
      o = this.isReady(),
      u = 0;
    switch (void 0 === (r = this.U[s]) && (r = this.U[s] = this.ha++), void 0 === c && (c = this.H[s] = 0), this.H[s] = (this.H[s] + 1) % this.c.length, typeof t) {
      case "number":
        void 0 === e && (e = 1), this.c[c].update([r, this.N++, 1, e, n, 1, 0 | t]);
        break;
      case "object":
        if ("[object Uint32Array]" === (s = Object.prototype.toString.call(t))) {
          for (s = 0, i = []; s < t.length; s++) i.push(t[s]);
          t = i
        } else
          for ("[object Array]" !== s && (u = 1), s = 0; s < t.length && !u; s++) "number" != typeof t[s] && (u = 1);
        if (!u) {
          if (void 0 === e)
            for (s = e = 0; s < t.length; s++)
              for (i = t[s]; 0 < i;) e++, i >>>= 1;
          this.c[c].update([r, this.N++, 2, e, n, t.length].concat(t))
        }
        break;
      case "string":
        void 0 === e && (e = t.length), this.c[c].update([r, this.N++, 3, e, n, t.length]), this.c[c].update(t);
        break;
      default:
        u = 1
    }
    if (u) throw new f.exception.bug("random: addEntropy only supports number, array of numbers or string");
    this.m[c] += e, this.f += e, o === this.u && (this.isReady() !== this.u && d("seeded", Math.max(this.o, this.f)), d("progress", this.getProgress()))
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
          loadTimeCollector: l(this, this.ma),
          mouseCollector: l(this, this.oa),
          keyboardCollector: l(this, this.la),
          accelerometerCollector: l(this, this.ea),
          touchCollector: l(this, this.qa)
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
    var s, r, i = this.K[t],
      n = [];
    for (r in i) i.hasOwnProperty(r) && i[r] === e && n.push(r);
    for (s = 0; s < n.length; s++) r = n[s], delete i[r]
  },
  la: function() {
    p(this, 1)
  },
  oa: function(t) {
    var e, s;
    try {
      e = t.x || t.clientX || t.offsetX || 0, s = t.y || t.clientY || t.offsetY || 0
    } catch (t) {
      s = e = 0
    }
    0 != e && 0 != s && this.addEntropy([e, s], 2, "mouse"), p(this, 0)
  },
  qa: function(t) {
    t = t.touches[0] || t.changedTouches[0], this.addEntropy([t.pageX || t.clientX, t.pageY || t.clientY], 1, "touch"), p(this, 0)
  },
  ma: function() {
    p(this, 2)
  },
  ea: function(t) {
    if (t = t.accelerationIncludingGravity.x || t.accelerationIncludingGravity.y || t.accelerationIncludingGravity.z, window.orientation) {
      var e = window.orientation;
      "number" == typeof e && this.addEntropy(e, 1, "accelerometer")
    }
    t && this.addEntropy(t, 2, "accelerometer"), p(this, 0)
  }
}, f.random = new f.prng(6);
r: try {
  if (c = void 0 !== t && t.exports) {
    try {
      o = s("919886")
    } catch (t) {
      o = null
    }
    c = i = o
  }
  if (c && i.randomBytes) r = i.randomBytes(128), r = new Uint32Array(new Uint8Array(r).buffer), f.random.addEntropy(r, 1024, "crypto['randomBytes']");
  else if ("undefined" != typeof window && "undefined" != typeof Uint32Array) {
    if (n = new Uint32Array(32), window.crypto && window.crypto.getRandomValues) window.crypto.getRandomValues(n);
    else if (window.msCrypto && window.msCrypto.getRandomValues) window.msCrypto.getRandomValues(n);
    else break r;
    f.random.addEntropy(n, 1024, "crypto['getRandomValues']")
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
  ja: function(t, e, s, r) {
    s = s || {}, r = r || {};
    var i, n = f.json,
      c = n.g({
        iv: f.random.randomWords(4, 0)
      }, n.defaults);
    if (n.g(c, s), s = c.adata, "string" == typeof c.salt && (c.salt = f.codec.base64.toBits(c.salt)), "string" == typeof c.iv && (c.iv = f.codec.base64.toBits(c.iv)), !f.mode[c.mode] || !f.cipher[c.cipher] || "string" == typeof t && 100 >= c.iter || 64 !== c.ts && 96 !== c.ts && 128 !== c.ts || 128 !== c.ks && 192 !== c.ks && 256 !== c.ks || 2 > c.iv.length || 4 < c.iv.length) throw new f.exception.invalid("json encrypt: invalid parameters");
    return "string" == typeof t ? (t = (i = f.misc.cachedPbkdf2(t, c)).key.slice(0, c.ks / 32), c.salt = i.salt) : f.ecc && t instanceof f.ecc.elGamal.publicKey && (i = t.kem(), c.kemtag = i.tag, t = i.key.slice(0, c.ks / 32)), "string" == typeof e && (e = f.codec.utf8String.toBits(e)), "string" == typeof s && (c.adata = s = f.codec.utf8String.toBits(s)), i = new f.cipher[c.cipher](t), n.g(r, c), r.key = t, c.ct = "ccm" === c.mode && f.arrayBuffer && f.arrayBuffer.ccm && e instanceof ArrayBuffer ? f.arrayBuffer.ccm.encrypt(i, e, c.iv, s, c.ts) : f.mode[c.mode].encrypt(i, e, c.iv, s, c.ts), c
  },
  encrypt: function(t, e, s, r) {
    var i = f.json,
      n = i.ja.apply(i, arguments);
    return i.encode(n)
  },
  ia: function(t, e, s, r) {
    s = s || {}, r = r || {};
    var i, n, c = f.json;
    if (i = (e = c.g(c.g(c.g({}, c.defaults), e), s, !0)).adata, "string" == typeof e.salt && (e.salt = f.codec.base64.toBits(e.salt)), "string" == typeof e.iv && (e.iv = f.codec.base64.toBits(e.iv)), !f.mode[e.mode] || !f.cipher[e.cipher] || "string" == typeof t && 100 >= e.iter || 64 !== e.ts && 96 !== e.ts && 128 !== e.ts || 128 !== e.ks && 192 !== e.ks && 256 !== e.ks || !e.iv || 2 > e.iv.length || 4 < e.iv.length) throw new f.exception.invalid("json decrypt: invalid parameters");
    return "string" == typeof t ? (t = (n = f.misc.cachedPbkdf2(t, e)).key.slice(0, e.ks / 32), e.salt = n.salt) : f.ecc && t instanceof f.ecc.elGamal.secretKey && (t = t.unkem(f.codec.base64.toBits(e.kemtag)).slice(0, e.ks / 32)), "string" == typeof i && (i = f.codec.utf8String.toBits(i)), n = new f.cipher[e.cipher](t), i = "ccm" === e.mode && f.arrayBuffer && f.arrayBuffer.ccm && e.ct instanceof ArrayBuffer ? f.arrayBuffer.ccm.decrypt(n, e.ct, e.iv, e.tag, i, e.ts) : f.mode[e.mode].decrypt(n, e.ct, e.iv, i, e.ts), c.g(r, e), r.key = t, 1 === s.raw ? i : f.codec.utf8String.fromBits(i)
  },
  decrypt: function(t, e, s, r) {
    var i = f.json;
    return i.ia(t, i.decode(e), s, r)
  },
  encode: function(t) {
    var e, s = "{",
      r = "";
    for (e in t)
      if (t.hasOwnProperty(e)) {
        if (!e.match(/^[a-z0-9]+$/i)) throw new f.exception.invalid("json encode: invalid property name");
        switch (s += r + '"' + e + '":', r = ",", typeof t[e]) {
          case "number":
          case "boolean":
            s += t[e];
            break;
          case "string":
            s += '"' + escape(t[e]) + '"';
            break;
          case "object":
            s += '"' + f.codec.base64.fromBits(t[e], 0) + '"';
            break;
          default:
            throw new f.exception.bug("json encode: unsupported type")
        }
      } return s + "}"
  },
  decode: function(t) {
    if (!(t = t.replace(/\s/g, "")).match(/^\{.*\}$/)) throw new f.exception.invalid("json decode: this isn't json!");
    t = t.replace(/^\{|\}$/g, "").split(/,/);
    var e, s, r = {};
    for (e = 0; e < t.length; e++) {
      if (!(s = t[e].match(/^\s*(?:(["']?)([a-z][a-z0-9]*)\1)\s*:\s*(?:(-?\d+)|"([a-z0-9+\/%*_.@=\-]*)"|(true|false))$/i))) throw new f.exception.invalid("json decode: this isn't json!");
      null != s[3] ? r[s[2]] = parseInt(s[3], 10) : null != s[4] ? r[s[2]] = s[2].match(/^(ct|adata|salt|iv)$/) ? f.codec.base64.toBits(s[4]) : unescape(s[4]) : null != s[5] && (r[s[2]] = "true" === s[5])
    }
    return r
  },
  g: function(t, e, s) {
    if (void 0 === t && (t = {}), void 0 === e) return t;
    for (var r in e)
      if (e.hasOwnProperty(r)) {
        if (s && void 0 !== t[r] && t[r] !== e[r]) throw new f.exception.invalid("required parameter overridden");
        t[r] = e[r]
      } return t
  },
  sa: function(t, e) {
    var s, r = {};
    for (s in t) t.hasOwnProperty(s) && t[s] !== e[s] && (r[s] = t[s]);
    return r
  },
  ra: function(t, e) {
    var s, r = {};
    for (s = 0; s < e.length; s++) void 0 !== t[e[s]] && (r[e[s]] = t[e[s]]);
    return r
  }
}, f.encrypt = f.json.encrypt, f.decrypt = f.json.decrypt, f.misc.pa = {}, f.misc.cachedPbkdf2 = function(t, e) {
  var s, r = f.misc.pa;
  return s = (e = e || {}).iter || 1e3, s = (r = r[t] = r[t] || {})[s] = r[s] || {
    firstSalt: e.salt && e.salt.length ? e.salt.slice(0) : f.random.randomWords(2, 0)
  }, r = void 0 === e.salt ? s.firstSalt : e.salt, s[r] = s[r] || f.misc.pbkdf2(t, r, e.iter), {
    key: s[r].slice(0),
    salt: r.slice(0)
  }
}, void 0 !== t && t.exports && (t.exports = f), "function" == typeof define && define([], function() {
  return f
})