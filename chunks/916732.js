            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return s
                }
            });
            var n = r("382356"),
                o = r("397202"),
                a = r("557916"),
                i = r("723347"),
                u = 1 / 0,
                l = n.default ? n.default.prototype : void 0,
                c = l ? l.toString : void 0,
                s = function e(t) {
                    if ("string" == typeof t) return t;
                    if ((0, a.default)(t)) return (0, o.default)(t, e) + "";
                    if ((0, i.default)(t)) return c ? c.call(t) : "";
                    var r = t + "";
                    return "0" == r && 1 / t == -u ? "-0" : r
                }