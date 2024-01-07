            "use strict";
            var i = r("407611")(),
                n = r("37549"),
                o = i && n("%Object.defineProperty%", !0),
                a = n("%SyntaxError%"),
                s = n("%TypeError%"),
                f = r("293471");
            t.exports = function(t, e, r) {
                if (!t || "object" != typeof t && "function" != typeof t) throw new s("`obj` must be an object or a function`");
                if ("string" != typeof e && "symbol" != typeof e) throw new s("`property` must be a string or a symbol`");
                if (arguments.length > 3 && "boolean" != typeof arguments[3] && null !== arguments[3]) throw new s("`nonEnumerable`, if provided, must be a boolean or null");
                if (arguments.length > 4 && "boolean" != typeof arguments[4] && null !== arguments[4]) throw new s("`nonWritable`, if provided, must be a boolean or null");
                if (arguments.length > 5 && "boolean" != typeof arguments[5] && null !== arguments[5]) throw new s("`nonConfigurable`, if provided, must be a boolean or null");
                if (arguments.length > 6 && "boolean" != typeof arguments[6]) throw new s("`loose`, if provided, must be a boolean");
                var i = arguments.length > 3 ? arguments[3] : null,
                    n = arguments.length > 4 ? arguments[4] : null,
                    h = arguments.length > 5 ? arguments[5] : null,
                    c = arguments.length > 6 && arguments[6],
                    u = !!f && f(t, e);
                if (o) o(t, e, {
                    configurable: null === h && u ? u.configurable : !h,
                    enumerable: null === i && u ? u.enumerable : !i,
                    value: r,
                    writable: null === n && u ? u.writable : !n
                });
                else if (!c && (i || n || h)) throw new a("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
                else t[e] = r
            }