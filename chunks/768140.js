            "use strict";
            n.r(t), n.d(t, {
                useOptionalFactory: function() {
                    return a
                }
            }), n("70102"), n("222007"), n("424973");
            var r = n("884691");

            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function a(e, t) {
                var n, a = function(e) {
                    if (Array.isArray(e)) return o(e)
                }(n = t || []) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(n) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return o(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
                    }
                }(n) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }();
                return null == t && "function" != typeof e && a.push(e), (0, r.useMemo)(function() {
                    return "function" == typeof e ? e() : e
                }, a)
            }