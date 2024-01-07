            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return d
                }
            });
            var a = r("261438"),
                n = r("126153"),
                s = r("884691"),
                o = r.n(s),
                i = r("493110"),
                u = r.n(i),
                c = r("29578"),
                l = ["data"];

            function f(e) {
                return "".concat(e.length, " ").concat(1 !== e.length ? "items" : "item")
            }
            var b = function(e) {
                var t = e.data,
                    r = (0, n.default)(e, l);
                return o.createElement(c.default, (0, a.default)({}, r, {
                    data: t,
                    nodeType: "Array",
                    nodeTypeIndicator: "[]",
                    createItemString: f,
                    expandable: t.length > 0
                }))
            };
            b.propTypes = {
                data: u.array
            };
            var d = b