            var a = s("446825").Buffer;
            s("70102");
            var n = [255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255];
            t.encode = function(e) {
                !a.isBuffer(e) && (e = new a(e));
                var t, s, n = 0,
                    l = 0,
                    i = 0,
                    r = 0;
                for (var o = new a(8 * (s = Math.floor((t = e).length / 5), t.length % 5 == 0 ? s : s + 1)); n < e.length;) {
                    var d = e[n];
                    i > 3 ? (r = (r = d & 255 >> i) << (i = (i + 5) % 8) | (n + 1 < e.length ? e[n + 1] : 0) >> 8 - i, n++) : (r = d >> 8 - (i + 5) & 31, 0 == (i = (i + 5) % 8) && n++), o[l] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".charCodeAt(r), l++
                }
                for (n = l; n < o.length; n++) o[n] = 61;
                return o
            }, t.decode = function(e) {
                var t, s = 0,
                    l = 0,
                    i = 0;
                !a.isBuffer(e) && (e = new a(e));
                for (var r = new a(Math.ceil(5 * e.length / 8)), o = 0; o < e.length && 61 != e[o]; o++) {
                    var d = e[o] - 48;
                    if (d < n.length) l = n[d], s <= 3 ? 0 == (s = (s + 5) % 8) ? (t |= l, r[i] = t, i++, t = 0) : t |= 255 & l << 8 - s : (t |= 255 & l >>> (s = (s + 5) % 8), r[i] = t, i++, t = 255 & l << 8 - s);
                    else throw Error("Invalid input - it is not base32 encoded string")
                }
                return r.slice(0, i)
            }