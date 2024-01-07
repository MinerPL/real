            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            });
            var n = r("54493");

            function i(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, (0, n.default)(i.key), i)
                }
            }

            function o(e, t, r) {
                return t && i(e.prototype, t), r && i(e, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }