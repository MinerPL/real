            "use strict";
            r("311790"), r("477657"), r("811875"), r("90301"), r("652153"), r("28797"), r("817884"), r("597349"), r("667536"), r("690341");
            var i = r("112774"),
                n = !0,
                a = !0;
            try {
                String.fromCharCode.apply(null, [0])
            } catch (t) {
                n = !1
            }
            try {
                String.fromCharCode.apply(null, new Uint8Array(1))
            } catch (t) {
                a = !1
            }
            for (var o = new i.Buf8(256), s = 0; s < 256; s++) o[s] = s >= 252 ? 6 : s >= 248 ? 5 : s >= 240 ? 4 : s >= 224 ? 3 : s >= 192 ? 2 : 1;

            function f(t, e) {
                if (e < 65534 && (t.subarray && a || !t.subarray && n)) return String.fromCharCode.apply(null, i.shrinkBuf(t, e));
                for (var r = "", o = 0; o < e; o++) r += String.fromCharCode(t[o]);
                return r
            }
            o[254] = o[254] = 1, e.string2buf = function(t) {
                var e, r, n, a, o, s = t.length,
                    f = 0;
                for (a = 0; a < s; a++)(64512 & (r = t.charCodeAt(a))) == 55296 && a + 1 < s && (64512 & (n = t.charCodeAt(a + 1))) == 56320 && (r = 65536 + (r - 55296 << 10) + (n - 56320), a++), f += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
                for (o = 0, e = new i.Buf8(f), a = 0; o < f; a++)(64512 & (r = t.charCodeAt(a))) == 55296 && a + 1 < s && (64512 & (n = t.charCodeAt(a + 1))) == 56320 && (r = 65536 + (r - 55296 << 10) + (n - 56320), a++), r < 128 ? e[o++] = r : (r < 2048 ? e[o++] = 192 | r >>> 6 : (r < 65536 ? e[o++] = 224 | r >>> 12 : (e[o++] = 240 | r >>> 18, e[o++] = 128 | r >>> 12 & 63), e[o++] = 128 | r >>> 6 & 63), e[o++] = 128 | 63 & r);
                return e
            }, e.buf2binstring = function(t) {
                return f(t, t.length)
            }, e.binstring2buf = function(t) {
                for (var e = new i.Buf8(t.length), r = 0, n = e.length; r < n; r++) e[r] = t.charCodeAt(r);
                return e
            }, e.buf2string = function(t, e) {
                var r, i, n, a, s = e || t.length,
                    h = Array(2 * s);
                for (i = 0, r = 0; r < s;) {
                    if ((n = t[r++]) < 128) {
                        h[i++] = n;
                        continue
                    }
                    if ((a = o[n]) > 4) {
                        h[i++] = 65533, r += a - 1;
                        continue
                    }
                    for (n &= 2 === a ? 31 : 3 === a ? 15 : 7; a > 1 && r < s;) n = n << 6 | 63 & t[r++], a--;
                    if (a > 1) {
                        h[i++] = 65533;
                        continue
                    }
                    n < 65536 ? h[i++] = n : (n -= 65536, h[i++] = 55296 | n >> 10 & 1023, h[i++] = 56320 | 1023 & n)
                }
                return f(h, i)
            }, e.utf8border = function(t, e) {
                var r;
                for ((e = e || t.length) > t.length && (e = t.length), r = e - 1; r >= 0 && (192 & t[r]) == 128;) r--;
                return r < 0 || 0 === r ? e : r + o[t[r]] > e ? r : e
            }