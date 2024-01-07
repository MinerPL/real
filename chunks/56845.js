            r("70102"), t.exports = function(t, e) {
                if (i("noDeprecation")) return t;
                var r = !1;
                return function() {
                    if (!r) {
                        if (i("throwDeprecation")) throw Error(e);
                        i("traceDeprecation") ? console.trace(e) : console.warn(e);
                        r = !0
                    }
                    return t.apply(this, arguments)
                }
            };

            function i(t) {
                try {
                    if (!r.g.localStorage) return !1
                } catch (t) {
                    return !1
                }
                var e = r.g.localStorage[t];
                return null != e && "true" === String(e).toLowerCase()
            }