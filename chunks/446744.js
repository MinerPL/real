            "use strict";
            r("424973"), e.readUInt32BE = function(t, e) {
                return (t[0 + e] << 24 | t[1 + e] << 16 | t[2 + e] << 8 | t[3 + e]) >>> 0
            }, e.writeUInt32BE = function(t, e, r) {
                t[0 + r] = e >>> 24, t[1 + r] = e >>> 16 & 255, t[2 + r] = e >>> 8 & 255, t[3 + r] = 255 & e
            }, e.ip = function(t, e, r, i) {
                for (var n = 0, o = 0, a = 6; a >= 0; a -= 2) {
                    for (var s = 0; s <= 24; s += 8) n <<= 1, n |= e >>> s + a & 1;
                    for (var s = 0; s <= 24; s += 8) n <<= 1, n |= t >>> s + a & 1
                }
                for (var a = 6; a >= 0; a -= 2) {
                    for (var s = 1; s <= 25; s += 8) o <<= 1, o |= e >>> s + a & 1;
                    for (var s = 1; s <= 25; s += 8) o <<= 1, o |= t >>> s + a & 1
                }
                r[i + 0] = n >>> 0, r[i + 1] = o >>> 0
            }, e.rip = function(t, e, r, i) {
                for (var n = 0, o = 0, a = 0; a < 4; a++)
                    for (var s = 24; s >= 0; s -= 8) n <<= 1, n |= e >>> s + a & 1, n <<= 1, n |= t >>> s + a & 1;
                for (var a = 4; a < 8; a++)
                    for (var s = 24; s >= 0; s -= 8) o <<= 1, o |= e >>> s + a & 1, o <<= 1, o |= t >>> s + a & 1;
                r[i + 0] = n >>> 0, r[i + 1] = o >>> 0
            }, e.pc1 = function(t, e, r, i) {
                for (var n = 0, o = 0, a = 7; a >= 5; a--) {
                    for (var s = 0; s <= 24; s += 8) n <<= 1, n |= e >> s + a & 1;
                    for (var s = 0; s <= 24; s += 8) n <<= 1, n |= t >> s + a & 1
                }
                for (var s = 0; s <= 24; s += 8) n <<= 1, n |= e >> s + a & 1;
                for (var a = 1; a <= 3; a++) {
                    for (var s = 0; s <= 24; s += 8) o <<= 1, o |= e >> s + a & 1;
                    for (var s = 0; s <= 24; s += 8) o <<= 1, o |= t >> s + a & 1
                }
                for (var s = 0; s <= 24; s += 8) o <<= 1, o |= t >> s + a & 1;
                r[i + 0] = n >>> 0, r[i + 1] = o >>> 0
            }, e.r28shl = function(t, e) {
                return t << e & 268435455 | t >>> 28 - e
            };
            var i = [14, 11, 17, 4, 27, 23, 25, 0, 13, 22, 7, 18, 5, 9, 16, 24, 2, 20, 12, 21, 1, 8, 15, 26, 15, 4, 25, 19, 9, 1, 26, 16, 5, 11, 23, 8, 12, 7, 17, 0, 22, 3, 10, 14, 6, 20, 27, 24];
            e.pc2 = function(t, e, r, n) {
                for (var o = 0, a = 0, s = i.length >>> 1, f = 0; f < s; f++) o <<= 1, o |= t >>> i[f] & 1;
                for (var f = s; f < i.length; f++) a <<= 1, a |= e >>> i[f] & 1;
                r[n + 0] = o >>> 0, r[n + 1] = a >>> 0
            }, e.expand = function(t, e, r) {
                var i = 0,
                    n = 0;
                i = (1 & t) << 5 | t >>> 27;
                for (var o = 23; o >= 15; o -= 4) i <<= 6, i |= t >>> o & 63;
                for (var o = 11; o >= 3; o -= 4) n |= t >>> o & 63, n <<= 6;
                n |= (31 & t) << 1 | t >>> 31, e[r + 0] = i >>> 0, e[r + 1] = n >>> 0
            };
            var n = [14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1, 3, 10, 10, 6, 6, 12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8, 4, 15, 1, 12, 14, 8, 8, 2, 13, 4, 6, 9, 2, 1, 11, 7, 15, 5, 12, 11, 9, 3, 7, 14, 3, 10, 10, 0, 5, 6, 0, 13, 15, 3, 1, 13, 8, 4, 14, 7, 6, 15, 11, 2, 3, 8, 4, 14, 9, 12, 7, 0, 2, 1, 13, 10, 12, 6, 0, 9, 5, 11, 10, 5, 0, 13, 14, 8, 7, 10, 11, 1, 10, 3, 4, 15, 13, 4, 1, 2, 5, 11, 8, 6, 12, 7, 6, 12, 9, 0, 3, 5, 2, 14, 15, 9, 10, 13, 0, 7, 9, 0, 14, 9, 6, 3, 3, 4, 15, 6, 5, 10, 1, 2, 13, 8, 12, 5, 7, 14, 11, 12, 4, 11, 2, 15, 8, 1, 13, 1, 6, 10, 4, 13, 9, 0, 8, 6, 15, 9, 3, 8, 0, 7, 11, 4, 1, 15, 2, 14, 12, 3, 5, 11, 10, 5, 14, 2, 7, 12, 7, 13, 13, 8, 14, 11, 3, 5, 0, 6, 6, 15, 9, 0, 10, 3, 1, 4, 2, 7, 8, 2, 5, 12, 11, 1, 12, 10, 4, 14, 15, 9, 10, 3, 6, 15, 9, 0, 0, 6, 12, 10, 11, 1, 7, 13, 13, 8, 15, 9, 1, 4, 3, 5, 14, 11, 5, 12, 2, 7, 8, 2, 4, 14, 2, 14, 12, 11, 4, 2, 1, 12, 7, 4, 10, 7, 11, 13, 6, 1, 8, 5, 5, 0, 3, 15, 15, 10, 13, 3, 0, 9, 14, 8, 9, 6, 4, 11, 2, 8, 1, 12, 11, 7, 10, 1, 13, 14, 7, 2, 8, 13, 15, 6, 9, 15, 12, 0, 5, 9, 6, 10, 3, 4, 0, 5, 14, 3, 12, 10, 1, 15, 10, 4, 15, 2, 9, 7, 2, 12, 6, 9, 8, 5, 0, 6, 13, 1, 3, 13, 4, 14, 14, 0, 7, 11, 5, 3, 11, 8, 9, 4, 14, 3, 15, 2, 5, 12, 2, 9, 8, 5, 12, 15, 3, 10, 7, 11, 0, 14, 4, 1, 10, 7, 1, 6, 13, 0, 11, 8, 6, 13, 4, 13, 11, 0, 2, 11, 14, 7, 15, 4, 0, 9, 8, 1, 13, 10, 3, 14, 12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6, 8, 1, 6, 1, 6, 4, 11, 11, 13, 13, 8, 12, 1, 3, 4, 7, 10, 14, 7, 10, 9, 15, 5, 6, 0, 8, 15, 0, 14, 5, 2, 9, 3, 2, 12, 13, 1, 2, 15, 8, 13, 4, 8, 6, 10, 15, 3, 11, 7, 1, 4, 10, 12, 9, 5, 3, 6, 14, 11, 5, 0, 0, 14, 12, 9, 7, 2, 7, 2, 11, 1, 4, 14, 1, 7, 9, 4, 12, 10, 14, 8, 2, 13, 0, 15, 6, 12, 10, 9, 13, 0, 15, 3, 3, 5, 5, 6, 8, 11];
            e.substitute = function(t, e) {
                for (var r = 0, i = 0; i < 4; i++) {
                    var o = t >>> 18 - 6 * i & 63,
                        a = n[64 * i + o];
                    r <<= 4, r |= a
                }
                for (var i = 0; i < 4; i++) {
                    var o = e >>> 18 - 6 * i & 63,
                        a = n[256 + 64 * i + o];
                    r <<= 4, r |= a
                }
                return r >>> 0
            };
            var o = [16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22, 30, 24, 8, 18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7];
            e.permute = function(t) {
                for (var e = 0, r = 0; r < o.length; r++) e <<= 1, e |= t >>> o[r] & 1;
                return e >>> 0
            }, e.padSplit = function(t, e, r) {
                for (var i = t.toString(2); i.length < e;) i = "0" + i;
                for (var n = [], o = 0; o < e; o += r) n.push(i.slice(o, o + r));
                return n.join(" ")
            }