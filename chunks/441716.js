            "use strict";
            var e = n("969708"),
                o = n("113806"),
                i = RangeError;
            t.exports = function(t) {
                if (void 0 === t) return 0;
                var r = e(t),
                    n = o(r);
                if (r !== n) throw i("Wrong length or index");
                return n
            }