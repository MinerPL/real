            "use strict";
            var e = n("761300"),
                o = n("268540"),
                i = n("490653"),
                u = TypeError;
            t.exports = function(t, r) {
                var n, s;
                if ("string" === r && o(n = t.toString) && !i(s = e(n, t)) || o(n = t.valueOf) && !i(s = e(n, t)) || "string" !== r && o(n = t.toString) && !i(s = e(n, t))) return s;
                throw new u("Can't convert object to primitive value")
            }