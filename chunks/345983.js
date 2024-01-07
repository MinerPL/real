            var e = r("855865"),
                o = r("258423"),
                i = r("260739");
            t.exports = function(t) {
                var n = o(t);
                return 1 == n.length && n[0][2] ? i(n[0][0], n[0][1]) : function(r) {
                    return r === t || e(r, t, n)
                }
            }