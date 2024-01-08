            r("70102");
            var i = r("596659"),
                n = r("664813"),
                a = r("488274"),
                o = r("746067"),
                s = r("963130"),
                f = r("839309"),
                h = r("533971"),
                c = r("422077"),
                u = r("912065").Buffer;
            t.exports = function(t, e, r) {
                d = t.padding ? t.padding : r ? 1 : 4;
                var d, l, p = i(t);
                if (4 === d) l = function(t, e) {
                    var r = t.modulus.byteLength(),
                        i = e.length,
                        h = a("sha1").update(u.alloc(0)).digest(),
                        c = h.length,
                        d = 2 * c;
                    if (i > r - d - 2) throw Error("message too long");
                    var l = u.alloc(r - i - d - 2),
                        p = r - c - 1,
                        b = n(c),
                        m = s(u.concat([h, l, u.alloc(1, 1), e], p), o(b, p)),
                        g = s(b, o(m, c));
                    return new f(u.concat([u.alloc(1), g, m], r))
                }(p, e);
                else if (1 === d) l = function(t, e, r) {
                    var i, a = e.length,
                        o = t.modulus.byteLength();
                    if (a > o - 11) throw Error("message too long");
                    return i = r ? u.alloc(o - a - 3, 255) : function(t) {
                        for (var e, r = u.allocUnsafe(t), i = 0, a = n(2 * t), o = 0; i < t;) o === a.length && (a = n(2 * t), o = 0), (e = a[o++]) && (r[i++] = e);
                        return r
                    }(o - a - 3), new f(u.concat([u.from([0, r ? 1 : 2]), i, u.alloc(1), e], o))
                }(p, e, r);
                else if (3 === d) {
                    if ((l = new f(e)).cmp(p.modulus) >= 0) throw Error("data too long for modulus")
                } else throw Error("unknown padding");
                return r ? c(l, p) : h(l, p)
            }