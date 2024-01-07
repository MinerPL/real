            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return n
                }
            });
            var a = r("332052");

            function n(e, t) {
                if (e) {
                    if ("string" == typeof e) return (0, a.default)(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return (0, a.default)(e, t)
                }
            }