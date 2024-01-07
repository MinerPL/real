            r("70102");
            var i = r("912065").Buffer,
                n = r("708893");
            t.exports = function(t, e, r, o) {
                if (!i.isBuffer(t) && (t = i.from(t, "binary")), e && (!i.isBuffer(e) && (e = i.from(e, "binary")), 8 !== e.length)) throw RangeError("salt should be Buffer with 8 byte length");
                for (var a = r / 8, s = i.alloc(a), f = i.alloc(o || 0), h = i.alloc(0); a > 0 || o > 0;) {
                    var c = new n;
                    c.update(h), c.update(t), e && c.update(e), h = c.digest();
                    var u = 0;
                    if (a > 0) {
                        var d = s.length - a;
                        u = Math.min(a, h.length), h.copy(s, d, 0, u), a -= u
                    }
                    if (u < h.length && o > 0) {
                        var l = f.length - o,
                            p = Math.min(o, h.length - u);
                        h.copy(f, l, u, u + p), o -= p
                    }
                }
                return h.fill(0), {
                    key: s,
                    iv: f
                }
            }