            "use strict";
            var e = n("664144"),
                i = n("16447");
            t.exports = !e(function() {
                var t = Error("a");
                return !("stack" in t) || (Object.defineProperty(t, "stack", i(1, 7)), 7 !== t.stack)
            })