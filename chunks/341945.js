            t.exports = function(t, e, r, i) {
                for (var n = t.length, a = r + (i ? 1 : -1); i ? a-- : ++a < n;)
                    if (e(t[a], a, t)) return a;
                return -1
            }