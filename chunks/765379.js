            "use strict";
            var r = s("37549"),
                i = s("812095"),
                n = r("%TypeError%"),
                c = s("81109"),
                o = r("%Reflect.apply%", !0) || i("Function.prototype.apply");
            t.exports = function(t, e) {
                var s = arguments.length > 2 ? arguments[2] : [];
                if (!c(s)) throw new n("Assertion failed: optional `argumentsList`, if provided, must be a List");
                return o(t, e, s)
            }