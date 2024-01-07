            var i = r("785225"),
                n = Math.max;
            t.exports = function(t, e, r) {
                return e = n(void 0 === e ? t.length - 1 : e, 0),
                    function() {
                        for (var o = arguments, a = -1, s = n(o.length - e, 0), f = Array(s); ++a < s;) f[a] = o[e + a];
                        a = -1;
                        for (var h = Array(e + 1); ++a < e;) h[a] = o[a];
                        return h[e] = r(f), i(t, this, h)
                    }
            }