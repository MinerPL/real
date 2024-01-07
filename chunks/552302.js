            "use strict";
            var i = r("537778"),
                n = r("37549")("%TypeError%"),
                o = r("865435"),
                a = r("979271"),
                s = r("903389");
            t.exports = function(t) {
                if ("Object" !== o(t)) throw new n("ToPropertyDescriptor requires an object");
                var e = {};
                if (i(t, "enumerable") && (e["[[Enumerable]]"] = a(t.enumerable)), i(t, "configurable") && (e["[[Configurable]]"] = a(t.configurable)), i(t, "value") && (e["[[Value]]"] = t.value), i(t, "writable") && (e["[[Writable]]"] = a(t.writable)), i(t, "get")) {
                    var r = t.get;
                    if (void 0 !== r && !s(r)) throw new n("getter must be a function");
                    e["[[Get]]"] = r
                }
                if (i(t, "set")) {
                    var f = t.set;
                    if (void 0 !== f && !s(f)) throw new n("setter must be a function");
                    e["[[Set]]"] = f
                }
                if ((i(e, "[[Get]]") || i(e, "[[Set]]")) && (i(e, "[[Value]]") || i(e, "[[Writable]]"))) throw new n("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
                return e
            }