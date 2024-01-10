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
                            var o, a, s = t.charCodeAt(n);
                            if (s < 128) r[i++] = s;
                            else if (s < 2048) r[i++] = s >> 6 | 192, r[i++] = 63 & s | 128;
                            else {
                                ;
                                if (o = t, a = n, (64512 & o.charCodeAt(a)) != 55296 || a < 0 || a + 1 >= o.length ? 1 : (64512 & o.charCodeAt(a + 1)) != 56320) r[i++] = s >> 12 | 224, r[i++] = s >> 6 & 63 | 128, r[i++] = 63 & s | 128;
                                else s = 65536 + ((1023 & s) << 10) + (1023 & t.charCodeAt(++n)), r[i++] = s >> 18 | 240, r[i++] = s >> 12 & 63 | 128, r[i++] = s >> 6 & 63 | 128, r[i++] = 63 & s | 128
                            }
                        }
                    }
                } else
                    for (n = 0; n < t.length; n++) r[n] = 0 | t[n];
                return r
            };

            function o(t) {
                return (t >>> 24 | t >>> 8 & 65280 | t << 8 & 16711680 | (255 & t) << 24) >>> 0
            }
            e.toHex = function(t) {
                for (var e = "", r = 0; r < t.length; r++) e += a(t[r].toString(16));
                return e
            }, e.htonl = o;

            function a(t) {
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
                    "little" === e && (n = o(n)), r += s(n.toString(16))
                }
                return r
            }, e.zero2 = a, e.zero8 = s;
            e.join32 = function(t, e, r, n) {
                var o, a = r - e;
                i(a % 4 == 0);
                for (var s = Array(a / 4), f = 0, h = e; f < s.length; f++, h += 4) o = "big" === n ? t[h] << 24 | t[h + 1] << 16 | t[h + 2] << 8 | t[h + 3] : t[h + 3] << 24 | t[h + 2] << 16 | t[h + 1] << 8 | t[h], s[f] = o >>> 0;
                return s
            };
            e.split32 = function(t, e) {
                for (var r = Array(4 * t.length), i = 0, n = 0; i < t.length; i++, n += 4) {
                    var o = t[i];
                    "big" === e ? (r[n] = o >>> 24, r[n + 1] = o >>> 16 & 255, r[n + 2] = o >>> 8 & 255, r[n + 3] = 255 & o) : (r[n + 3] = o >>> 24, r[n + 2] = o >>> 16 & 255, r[n + 1] = o >>> 8 & 255, r[n] = 255 & o)
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
                    o = i + t[e + 1] >>> 0;
                t[e] = (o < i ? 1 : 0) + r + n >>> 0, t[e + 1] = o
            };
            e.sum64_hi = function(t, e, r, i) {
                return (e + i >>> 0 < e ? 1 : 0) + t + r >>> 0
            };
            e.sum64_lo = function(t, e, r, i) {
                return e + i >>> 0
            };
            e.sum64_4_hi = function(t, e, r, i, n, o, a, s) {
                var f, h = e;
                return f = 0 + ((h = h + i >>> 0) < e ? 1 : 0), f += (h = h + o >>> 0) < o ? 1 : 0, t + r + n + a + (f += (h = h + s >>> 0) < s ? 1 : 0) >>> 0
            };
            e.sum64_4_lo = function(t, e, r, i, n, o, a, s) {
                return e + i + o + s >>> 0
            };
            e.sum64_5_hi = function(t, e, r, i, n, o, a, s, f, h) {
                var c, u = e;
                return c = 0 + ((u = u + i >>> 0) < e ? 1 : 0), c += (u = u + o >>> 0) < o ? 1 : 0, c += (u = u + s >>> 0) < s ? 1 : 0, t + r + n + a + f + (c += (u = u + h >>> 0) < h ? 1 : 0) >>> 0
            };
            e.sum64_5_lo = function(t, e, r, i, n, o, a, s, f, h) {
                return e + i + o + s + h >>> 0
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