            var e = n("855865"),
                o = n("258423"),
                i = n("260739");
            t.exports = function(t) {
                var r = o(t);
                return 1 == r.length && r[0][2] ? i(r[0][0], r[0][1]) : function(n) {
                    return n === t || e(n, t, r)
                }
            }