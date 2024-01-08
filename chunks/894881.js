            r("70102");
            var i = r("596659"),
                n = r("746067"),
                a = r("963130"),
                o = r("839309"),
                s = r("422077"),
                f = r("488274"),
                h = r("533971"),
                c = r("912065").Buffer;
            t.exports = function(t, e, r) {
                u = t.padding ? t.padding : r ? 1 : 4;
                var u, d, l = i(t),
                    p = l.modulus.byteLength();
                if (e.length > p || new o(e).cmp(l.modulus) >= 0) throw Error("decryption error");
                d = r ? h(new o(e), l) : s(e, l);
                var b = c.alloc(p - d.length);
                if (d = c.concat([b, d], p), 4 === u) return function(t, e) {
                    var r = t.modulus.byteLength(),
                        i = f("sha1").update(c.alloc(0)).digest(),
                        o = i.length;
                    if (0 !== e[0]) throw Error("decryption error");
                    var s = e.slice(1, o + 1),
                        h = e.slice(o + 1),
                        u = a(s, n(h, o)),
                        d = a(h, n(u, r - o - 1));
                    if (function(t, e) {
                            t = c.from(t), e = c.from(e);
                            var r = 0,
                                i = t.length;
                            t.length !== e.length && (r++, i = Math.min(t.length, e.length));
                            for (var n = -1; ++n < i;) r += t[n] ^ e[n];
                            return r
                        }(i, d.slice(0, o))) throw Error("decryption error");
                    for (var l = o; 0 === d[l];) l++;
                    if (1 !== d[l++]) throw Error("decryption error");
                    return d.slice(l)
                }(l, d);
                if (1 === u) return function(t, e, r) {
                    for (var i = e.slice(0, 2), n = 2, a = 0; 0 !== e[n++];)
                        if (n >= e.length) {
                            a++;
                            break
                        } var o = e.slice(2, n - 1);
                    if (("0002" !== i.toString("hex") && !r || "0001" !== i.toString("hex") && r) && a++, o.length < 8 && a++, a) throw Error("decryption error");
                    return e.slice(n)
                }(l, d, r);
                if (3 === u) return d;
                else throw Error("unknown padding")
            }