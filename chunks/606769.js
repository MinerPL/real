            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("283416"),
                a = n("503616"),
                o = n("892880");

            function i(e, t) {
                if (null == e) return {};
                var n, i, l = (0, o.default)(e, t);
                if (r) {
                    var u = r(e);
                    for (i = 0; i < u.length; i++) {
                        if (n = u[i], !(a(t).call(t, n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
                    }
                }
                return l
            }