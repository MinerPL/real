                "use strict";
                var e = r("664144"),
                    o = r("16447");
                t.exports = !e(function() {
                    var t = Error("a");
                    return !("stack" in t) || (Object.defineProperty(t, "stack", o(1, 7)), 7 !== t.stack)
                })