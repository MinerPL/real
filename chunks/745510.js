            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("884691"),
                r = n("48174");
            let s = [];

            function l(e, t) {
                let n = (0, i.useRef)(),
                    l = (0, i.useRef)(s);
                return l.current === s ? (n.current = e(), l.current = t) : !(0, r.default)(t, l.current) && (n.current = e(), l.current = t), n.current
            }