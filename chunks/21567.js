            var i = r("785225"),
                n = Math.max;
            t.exports = function(t, e, r) {
                return e = n(void 0 === e ? t.length - 1 : e, 0),
                    function() {
                        for (var a = arguments, o = -1, s = n(a.length - e, 0), f = Array(s); ++o < s;) f[o] = a[e + o];
                        o = -1;
                        for (var h = Array(e + 1); ++o < e;) h[o] = a[o];
                        return h[e] = r(f), i(t, this, h)
                    }
            }