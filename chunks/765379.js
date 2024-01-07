            "use strict";
            var i = r("37549"),
                n = r("812095"),
                o = i("%TypeError%"),
                a = r("81109"),
                s = i("%Reflect.apply%", !0) || n("Function.prototype.apply");
            t.exports = function(t, e) {
                var r = arguments.length > 2 ? arguments[2] : [];
                if (!a(r)) throw new o("Assertion failed: optional `argumentsList`, if provided, must be a List");
                return s(t, e, r)
            }