            "use strict";
            var r = s("407611")(),
                i = s("37549"),
                n = r && i("%Object.defineProperty%", !0),
                c = i("%SyntaxError%"),
                o = i("%TypeError%"),
                f = s("293471");
            t.exports = function(t, e, s) {
                if (!t || "object" != typeof t && "function" != typeof t) throw new o("`obj` must be an object or a function`");
                if ("string" != typeof e && "symbol" != typeof e) throw new o("`property` must be a string or a symbol`");
                if (arguments.length > 3 && "boolean" != typeof arguments[3] && null !== arguments[3]) throw new o("`nonEnumerable`, if provided, must be a boolean or null");
                if (arguments.length > 4 && "boolean" != typeof arguments[4] && null !== arguments[4]) throw new o("`nonWritable`, if provided, must be a boolean or null");
                if (arguments.length > 5 && "boolean" != typeof arguments[5] && null !== arguments[5]) throw new o("`nonConfigurable`, if provided, must be a boolean or null");
                if (arguments.length > 6 && "boolean" != typeof arguments[6]) throw new o("`loose`, if provided, must be a boolean");
                var r = arguments.length > 3 ? arguments[3] : null,
                    i = arguments.length > 4 ? arguments[4] : null,
                    u = arguments.length > 5 ? arguments[5] : null,
                    a = arguments.length > 6 && arguments[6],
                    d = !!f && f(t, e);
                if (n) n(t, e, {
                    configurable: null === u && d ? d.configurable : !u,
                    enumerable: null === r && d ? d.enumerable : !r,
                    value: s,
                    writable: null === i && d ? d.writable : !i
                });
                else if (!a && (r || i || u)) throw new c("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
                else t[e] = s
            }