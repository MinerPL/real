            t.exports = function(t, r) {
                for (var n = -1, e = null == t ? 0 : t.length; ++n < e;)
                    if (r(t[n], n, t)) return !0;
                return !1
            }