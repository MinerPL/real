            t.exports = function(t, e, r) {
                for (var i = -1, n = null == t ? 0 : t.length; ++i < n;)
                    if (r(e, t[i])) return !0;
                return !1
            }