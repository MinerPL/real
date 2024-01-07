            t.exports = function(t, r) {
                for (var e = -1, n = null == t ? 0 : t.length, o = 0, i = []; ++e < n;) {
                    var u = t[e];
                    r(u, e, t) && (i[o++] = u)
                }
                return i
            }