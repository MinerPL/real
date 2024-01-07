            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return n
                }
            });
            var a = r("59079");

            function n(e, t) {
                if (null == e) return {};
                var r, n, s = (0, a.default)(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) {
                        if (r = o[n], !(t.indexOf(r) >= 0)) Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r])
                    }
                }
                return s
            }