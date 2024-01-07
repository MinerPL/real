            t.exports = function(t, n) {
                for (var r = -1, e = null == t ? 0 : t.length, o = 0, i = []; ++r < e;) {
                    var u = t[r];
                    n(u, r, t) && (i[o++] = u)
                }
                return i
            }