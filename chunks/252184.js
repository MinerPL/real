            var e = r("603108");
            t.exports = function(t, n) {
                return function(r, o) {
                    if (null == r) return r;
                    if (!e(r)) return t(r, o);
                    for (var i = r.length, u = n ? i : -1, a = Object(r);
                        (n ? u-- : ++u < i) && !1 !== o(a[u], u, a););
                    return r
                }
            }