            "use strict";
            r("781738"), r("424973");
            var i = r("463483"),
                n = r("599235");
            e.inherits = n;
            e.toArray = function(t, e) {
                if (Array.isArray(t)) return t.slice();
                if (!t) return [];
                var r = [];
                if ("string" == typeof t) {
                    if (e) {
                        if ("hex" === e)
                            for ((t = t.replace(/[^a-z0-9]+/ig, "")).length % 2 != 0 && (t = "0" + t), n = 0; n < t.length; n += 2) r.push(parseInt(t[n] + t[n + 1], 16))
                    } else {
                        for (var i = 0, n = 0; n < t.length; n++) {
                            var a, o, s = t.charCodeAt(n);
                            if (s < 128) r[i++] = s;
                            else if (s < 2048) r[i++] = s >> 6 | 192, r[i++] = 63 & s | 128;
                            else {
                                ;
                                if (a = t, o = n, (64512 & a.charCodeAt(o)) != 55296 || o < 0 || o + 1 >= a.length ? 1 : (64512 & a.charCodeAt(o + 1)) != 56320) r[i++] = s >> 12 | 224, r[i++] = s >> 6 & 63 | 128, r[i++] = 63 & s | 128;
                                else s = 65536 + ((1023 & s) << 10) + (1023 & t.charCodeAt(++n)), r[i++] = s >> 18 | 240, r[i++] = s >> 12 & 63 | 128, r[i++] = s >> 6 & 63 | 128, r[i++] = 63 & s | 128
                            }
                        }
                    }
                } else
                    for (n = 0; n < t.length; n++) r[n] = 0 | t[n];
                return r
            };

            function a(t) {
                return (t >>> 24 | t >>> 8 & 65280 | t << 8 & 16711680 | (255 & t) << 24) >>> 0
            }
            e.toHex = function(t) {
                for (var e = "", r = 0; r < t.length; r++) e += o(t[r].toString(16));
                return e
            }, e.htonl = a;

            function o(t) {
                return 1 === t.length ? "0" + t : t
            }

            function s(t) {
                if (7 === t.length) return "0" + t;
                if (6 === t.length) return "00" + t;
                if (5 === t.length) return "000" + t;
                else if (4 === t.length) return "0000" + t;
                else if (3 === t.length) return "00000" + t;
                else if (2 === t.length) return "000000" + t;
                else if (1 === t.length) return "0000000" + t;
                else return t
            }
            e.toHex32 = function(t, e) {
                for (var r = "", i = 0; i < t.length; i++) {
                    var n = t[i];
                    "little" === e && (n = a(n)), r += s(n.toString(16))
                }
                return r
            }, e.zero2 = o, e.zero8 = s;
            e.join32 = function(t, e, r, n) {
                var a, o = r - e;
                i(o % 4 == 0);
                for (var s = Array(o / 4), f = 0, h = e; f < s.length; f++, h += 4) a = "big" === n ? t[h] << 24 | t[h + 1] << 16 | t[h + 2] << 8 | t[h + 3] : t[h + 3] << 24 | t[h + 2] << 16 | t[h + 1] << 8 | t[h], s[f] = a >>> 0;
                return s
            };
            e.split32 = function(t, e) {
                for (var r = Array(4 * t.length), i = 0, n = 0; i < t.length; i++, n += 4) {
                    var a = t[i];
                    "big" === e ? (r[n] = a >>> 24, r[n + 1] = a >>> 16 & 255, r[n + 2] = a >>> 8 & 255, r[n + 3] = 255 & a) : (r[n + 3] = a >>> 24, r[n + 2] = a >>> 16 & 255, r[n + 1] = a >>> 8 & 255, r[n] = 255 & a)
                }
                return r
            };
            e.rotr32 = function(t, e) {
                return t >>> e | t << 32 - e
            };
            e.rotl32 = function(t, e) {
                return t << e | t >>> 32 - e
            };
            e.sum32 = function(t, e) {
                return t + e >>> 0
            };
            e.sum32_3 = function(t, e, r) {
                return t + e + r >>> 0
            };
            e.sum32_4 = function(t, e, r, i) {
                return t + e + r + i >>> 0
            };
            e.sum32_5 = function(t, e, r, i, n) {
                return t + e + r + i + n >>> 0
            };
            e.sum64 = function(t, e, r, i) {
                var n = t[e],
                    a = i + t[e + 1] >>> 0;
                t[e] = (a < i ? 1 : 0) + r + n >>> 0, t[e + 1] = a
            };
            e.sum64_hi = function(t, e, r, i) {
                return (e + i >>> 0 < e ? 1 : 0) + t + r >>> 0
            };
            e.sum64_lo = function(t, e, r, i) {
                return e + i >>> 0
            };
            e.sum64_4_hi = function(t, e, r, i, n, a, o, s) {
                var f, h = e;
                return f = 0 + ((h = h + i >>> 0) < e ? 1 : 0), f += (h = h + a >>> 0) < a ? 1 : 0, t + r + n + o + (f += (h = h + s >>> 0) < s ? 1 : 0) >>> 0
            };
            e.sum64_4_lo = function(t, e, r, i, n, a, o, s) {
                return e + i + a + s >>> 0
            };
            e.sum64_5_hi = function(t, e, r, i, n, a, o, s, f, h) {
                var c, u = e;
                return c = 0 + ((u = u + i >>> 0) < e ? 1 : 0), c += (u = u + a >>> 0) < a ? 1 : 0, c += (u = u + s >>> 0) < s ? 1 : 0, t + r + n + o + f + (c += (u = u + h >>> 0) < h ? 1 : 0) >>> 0
            };
            e.sum64_5_lo = function(t, e, r, i, n, a, o, s, f, h) {
                return e + i + a + s + h >>> 0
            };
            e.rotr64_hi = function(t, e, r) {
                return (e << 32 - r | t >>> r) >>> 0
            };
            e.rotr64_lo = function(t, e, r) {
                return (t << 32 - r | e >>> r) >>> 0
            };
            e.shr64_hi = function(t, e, r) {
                return t >>> r
            };
            e.shr64_lo = function(t, e, r) {
                return (t << 32 - r | e >>> r) >>> 0
            }