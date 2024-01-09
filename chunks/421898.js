            t = e.nmd(t), ! function() {
                "use strict";
                var n = {}.hasOwnProperty;

                function e() {
                    for (var t = "", u = 0; u < arguments.length; u++) {
                        var o = arguments[u];
                        o && (t = r(t, function(t) {
                            if ("string" == typeof t || "number" == typeof t) return t;
                            if ("object" != typeof t) return "";
                            if (Array.isArray(t)) return e.apply(null, t);
                            if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]")) return t.toString();
                            var u = "";
                            for (var o in t) n.call(t, o) && t[o] && (u = r(u, o));
                            return u
                        }(o)))
                    }
                    return t
                }

                function r(t, n) {
                    return n ? t ? t + " " + n : t + n : t
                }
                void 0 !== t && t.exports ? (e.default = e, t.exports = e) : "function" == typeof define && "object" == typeof define.amd && define.amd ? define("classnames", [], function() {
                    return e
                }) : window.classNames = e
            }()