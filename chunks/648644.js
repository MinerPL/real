            "use strict";
            var r = n("342646"),
                o = n("37549"),
                a = o("%Function.prototype.apply%"),
                i = o("%Function.prototype.call%"),
                s = o("%Reflect.apply%", !0) || r.call(i, a),
                c = o("%Object.getOwnPropertyDescriptor%", !0),
                l = o("%Object.defineProperty%", !0),
                u = o("%Math.max%");
            if (l) try {
                l({}, "a", {
                    value: 1
                })
            } catch (e) {
                l = null
            }
            e.exports = function(e) {
                var t = s(r, i, arguments);
                return c && l && c(t, "length").configurable && l(t, "length", {
                    value: 1 + u(0, e.length - (arguments.length - 1))
                }), t
            };
            var d = function() {
                return s(r, a, arguments)
            };
            l ? l(e.exports, "apply", {
                value: d
            }) : e.exports.apply = d