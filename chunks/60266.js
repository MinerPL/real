            t.exports = function(t, e, a, n) {
                for (var s = -1, i = null == t ? 0 : t.length; ++s < i;) {
                    var l = t[s];
                    e(n, l, a(l), t)
                }
                return n
            }