            "use strict";
            r("222007"), r("70102");
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator,
                n = r("240988"),
                o = r("170407"),
                a = r("140181"),
                s = r("5927"),
                f = function(t, e) {
                    if (null == t) throw TypeError("Cannot call method on " + t);
                    if ("string" != typeof e || "number" !== e && "string" !== e) throw TypeError('hint must be "string" or "number"');
                    var r, i, a, s = "string" === e ? ["toString", "valueOf"] : ["valueOf", "toString"];
                    for (a = 0; a < s.length; ++a)
                        if (o(r = t[s[a]]) && n(i = r.call(t))) return i;
                    throw TypeError("No default value")
                },
                h = function(t, e) {
                    var r = t[e];
                    if (null != r) {
                        if (!o(r)) throw TypeError(r + " returned for property " + e + " of object " + t + " is not a function");
                        return r
                    }
                };
            t.exports = function(t) {
                if (n(t)) return t;
                var e, r = "default";
                if (arguments.length > 1 && (arguments[1] === String ? r = "string" : arguments[1] === Number && (r = "number")), i && (Symbol.toPrimitive ? e = h(t, Symbol.toPrimitive) : s(t) && (e = Symbol.prototype.valueOf)), void 0 !== e) {
                    var o = e.call(t, r);
                    if (n(o)) return o;
                    throw TypeError("unable to convert exotic object to primitive")
                }
                return "default" === r && (a(t) || s(t)) && (r = "string"), f(t, "default" === r ? "number" : r)
            }