            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("130670"),
                a = n("802016"),
                o = n("190418"),
                i = n("753671"),
                s = n("209026"),
                u = n("837052"),
                l = n("790973"),
                c = n("757367");

            function d(e, t, n) {
                void 0 === n && (n = !1);
                var d, f, p, m, h = (0, i.isHTMLElement)(t);
                var _ = (0, i.isHTMLElement)(t) && (f = (d = t).getBoundingClientRect(), p = (0, c.round)(f.width) / d.offsetWidth || 1, m = (0, c.round)(f.height) / d.offsetHeight || 1, 1 !== p || 1 !== m),
                    y = (0, u.default)(t),
                    g = (0, r.default)(e, _, n),
                    v = {
                        scrollLeft: 0,
                        scrollTop: 0
                    },
                    b = {
                        x: 0,
                        y: 0
                    };
                return (h || !h && !n) && (("body" !== (0, o.default)(t) || (0, l.default)(y)) && (v = (0, a.default)(t)), (0, i.isHTMLElement)(t) ? (b = (0, r.default)(t, !0), b.x += t.clientLeft, b.y += t.clientTop) : y && (b.x = (0, s.default)(y))), {
                    x: g.left + v.scrollLeft - b.x,
                    y: g.top + v.scrollTop - b.y,
                    width: g.width,
                    height: g.height
                }
            }