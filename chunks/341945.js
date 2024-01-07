            t.exports = function(t, e, r, i) {
                for (var n = t.length, o = r + (i ? 1 : -1); i ? o-- : ++o < n;)
                    if (e(t[o], o, t)) return o;
                return -1
            }