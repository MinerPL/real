            "use strict";
            var r = function(e) {
                switch (typeof e) {
                    case "string":
                        return e;
                    case "boolean":
                        return e ? "true" : "false";
                    case "number":
                        return isFinite(e) ? e : "";
                    default:
                        return ""
                }
            };
            e.exports = function(e, t, n, o) {
                return (t = t || "&", n = n || "=", null === e && (e = void 0), "object" == typeof e) ? Object.keys(e).map(function(o) {
                    var a = encodeURIComponent(r(o)) + n;
                    return Array.isArray(e[o]) ? e[o].map(function(e) {
                        return a + encodeURIComponent(r(e))
                    }).join(t) : a + encodeURIComponent(r(e[o]))
                }).filter(Boolean).join(t) : o ? encodeURIComponent(r(o)) + n + encodeURIComponent(r(e)) : ""
            }