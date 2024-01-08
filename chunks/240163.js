            var i = r("664813");
            t.exports = g, g.simpleSieve = b, g.fermatTest = m;
            var n = r("839309"),
                a = new n(24),
                o = new(r("925197")),
                s = new n(1),
                f = new n(2),
                h = new n(5);
            new n(16), new n(8);
            var c = new n(10),
                u = new n(3);
            new n(7);
            var d = new n(11),
                l = new n(4);
            new n(12);
            var p = null;

            function b(t) {
                for (var e = function() {
                        if (null !== p) return p;
                        var t = [];
                        t[0] = 2;
                        for (var e = 1, r = 3; r < 1048576; r += 2) {
                            for (var i = Math.ceil(Math.sqrt(r)), n = 0; n < e && t[n] <= i && r % t[n] != 0; n++);
                            (e === n || !(t[n] <= i)) && (t[e++] = r)
                        }
                        return p = t, t
                    }(), r = 0; r < e.length; r++)
                    if (0 === t.modn(e[r])) {
                        if (0 !== t.cmpn(e[r])) return !1;
                        break
                    } return !0
            }

            function m(t) {
                var e = n.mont(t);
                return 0 === f.toRed(e).redPow(t.subn(1)).fromRed().cmpn(1)
            }

            function g(t, e) {
                var r, p;
                if (t < 16) return 2 === e || 5 === e ? new n([140, 123]) : new n([140, 39]);
                for (e = new n(e);;) {
                    for (r = new n(i(Math.ceil(t / 8))); r.bitLength() > t;) r.ishrn(1);
                    if (r.isEven() && r.iadd(s), !r.testn(1) && r.iadd(f), e.cmp(f)) {
                        if (!e.cmp(h))
                            for (; r.mod(c).cmp(u);) r.iadd(l)
                    } else
                        for (; r.mod(a).cmp(d);) r.iadd(l);
                    if (b(p = r.shrn(1)) && b(r) && m(p) && m(r) && o.test(p) && o.test(r)) return r
                }
            }