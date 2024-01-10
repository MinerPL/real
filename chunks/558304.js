            var i = r("126580");
            t.exports = function(t, e, r) {
                for (var n = -1, o = t.criteria, a = e.criteria, s = o.length, f = r.length; ++n < s;) {
                    var h = i(o[n], a[n]);
                    if (h) {
                        if (n >= f) return h;
                        return h * ("desc" == r[n] ? -1 : 1)
                    }
                }
                return t.index - e.index
            }