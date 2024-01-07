            var e = r("725502"),
                o = r("27556"),
                i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                u = /^\w*$/;
            t.exports = function(t, n) {
                if (e(t)) return !1;
                var r = typeof t;
                return !!("number" == r || "symbol" == r || "boolean" == r || null == t || o(t)) || u.test(t) || !i.test(t) || null != n && t in Object(n)
            }