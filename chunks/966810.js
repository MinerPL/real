            "use strict";
            var i = r("37549"),
                n = r("537778"),
                o = r("890741")(),
                a = i("%TypeError%"),
                s = {
                    assert: function(t, e) {
                        if (!t || "object" != typeof t && "function" != typeof t) throw new a("`O` is not an object");
                        if ("string" != typeof e) throw new a("`slot` must be a string");
                        if (o.assert(t), !s.has(t, e)) throw new a("`" + e + "` is not present on `O`")
                    },
                    get: function(t, e) {
                        if (!t || "object" != typeof t && "function" != typeof t) throw new a("`O` is not an object");
                        if ("string" != typeof e) throw new a("`slot` must be a string");
                        var r = o.get(t);
                        return r && r["$" + e]
                    },
                    has: function(t, e) {
                        if (!t || "object" != typeof t && "function" != typeof t) throw new a("`O` is not an object");
                        if ("string" != typeof e) throw new a("`slot` must be a string");
                        var r = o.get(t);
                        return !!r && n(r, "$" + e)
                    },
                    set: function(t, e, r) {
                        if (!t || "object" != typeof t && "function" != typeof t) throw new a("`O` is not an object");
                        if ("string" != typeof e) throw new a("`slot` must be a string");
                        var i = o.get(t);
                        !i && (i = {}, o.set(t, i)), i["$" + e] = r
                    }
                };
            Object.freeze && Object.freeze(s), t.exports = s