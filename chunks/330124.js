            var e = n("253792"),
                o = n("766665");
            t.exports = function(t, r, n, c) {
                var u = !n;
                n || (n = {});
                for (var a = -1, i = r.length; ++a < i;) {
                    var f = r[a],
                        s = c ? c(n[f], t[f], f, n, t) : void 0;
                    void 0 === s && (s = t[f]), u ? o(n, f, s) : e(n, f, s)
                }
                return n
            }