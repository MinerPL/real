            "use strict";
            s.r(t), s.d(t, {
                formatMetricTrend: function() {
                    return l
                },
                formatNextPaymentDate: function() {
                    return i
                }
            });
            var a = s("866227"),
                n = s.n(a);

            function l(e, t) {
                let s = "",
                    a = e >= 0;
                return a && (s += "+"), t ? s += "".concat(Math.floor(100 * e), "%") : s += e, {
                    formattedValue: s,
                    isPositive: a
                }
            }

            function i(e, t) {
                return null != e ? n(e).format(t) : "-"
            }