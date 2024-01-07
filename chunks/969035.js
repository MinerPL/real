            "use strict";
            var i = r("37549")("%TypeError%"),
                n = r("300344"),
                o = r("195893"),
                a = r("865435");
            t.exports = function(t, e, r) {
                if ("Object" !== a(t)) throw new i("Assertion failed: Type(O) is not Object");
                if (!n(e)) throw new i("Assertion failed: IsPropertyKey(P) is not true");
                return o(t, e, {
                    "[[Configurable]]": !0,
                    "[[Enumerable]]": !0,
                    "[[Value]]": r,
                    "[[Writable]]": !0
                })
            }