            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("837052"),
                a = n("593882"),
                o = n("209026"),
                i = n("516925"),
                s = n("757367");

            function u(e) {
                var t, n = (0, r.default)(e),
                    u = (0, i.default)(e),
                    l = null == (t = e.ownerDocument) ? void 0 : t.body,
                    c = (0, s.max)(n.scrollWidth, n.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0),
                    d = (0, s.max)(n.scrollHeight, n.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0),
                    f = -u.scrollLeft + (0, o.default)(e),
                    p = -u.scrollTop;
                return "rtl" === (0, a.default)(l || n).direction && (f += (0, s.max)(n.clientWidth, l ? l.clientWidth : 0) - c), {
                    width: c,
                    height: d,
                    x: f,
                    y: p
                }
            }