            "use strict";
            var r = n("605357"),
                a = n("919863"),
                o = n("453084"),
                i = n("958260");
            e.exports = function(e, t, n) {
                for (var l = a(t), u = i.f, s = o.f, c = 0; c < l.length; c++) {
                    var d = l[c];
                    !r(e, d) && !(n && r(n, d)) && u(e, d, s(t, d))
                }
            }