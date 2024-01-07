            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("563463"),
                a = n("503616");

            function o(e, t) {
                if (null == e) return {};
                var n, o, i = {},
                    l = r(e);
                for (o = 0; o < l.length; o++) n = l[o], !(a(t).call(t, n) >= 0) && (i[n] = e[n]);
                return i
            }