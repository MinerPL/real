            r("70102");
            var i = r("912065").Buffer,
                n = r("708893");
            t.exports = function(t, e, r, a) {
                if (!i.isBuffer(t) && (t = i.from(t, "binary")), e && (!i.isBuffer(e) && (e = i.from(e, "binary")), 8 !== e.length)) throw RangeError("salt should be Buffer with 8 byte length");
                for (var o = r / 8, s = i.alloc(o), f = i.alloc(a || 0), h = i.alloc(0); o > 0 || a > 0;) {
                    var c = new n;
                    c.update(h), c.update(t), e && c.update(e), h = c.digest();
                    var u = 0;
                    if (o > 0) {
                        var d = s.length - o;
                        u = Math.min(o, h.length), h.copy(s, d, 0, u), o -= u
                    }
                    if (u < h.length && a > 0) {
                        var l = f.length - a,
                            p = Math.min(a, h.length - u);
                        h.copy(f, l, u, u + p), a -= p
                    }
                }
                return h.fill(0), {
                    key: s,
                    iv: f
                }
            }