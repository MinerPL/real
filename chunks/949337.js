            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("808653");
            var r = n("697309"),
                a = n("614101"),
                o = n("464006"),
                i = n("403468"),
                s = n("986257"),
                u = n("837052"),
                l = n("593882"),
                c = n("753671"),
                d = n("130670"),
                f = n("199407"),
                p = n("819839"),
                m = n("190418"),
                h = n("483165"),
                _ = n("757367");

            function y(e, t, n) {
                var i, s, l;
                return t === r.viewport ? (0, h.default)((0, a.default)(e, n)) : (0, c.isElement)(t) ? (i = t, s = n, (l = (0, d.default)(i, !1, "fixed" === s)).top = l.top + i.clientTop, l.left = l.left + i.clientLeft, l.bottom = l.top + i.clientHeight, l.right = l.left + i.clientWidth, l.width = i.clientWidth, l.height = i.clientHeight, l.x = l.left, l.y = l.top, l) : (0, h.default)((0, o.default)((0, u.default)(e)))
            }

            function g(e, t, n, r) {
                var a, o, u, d = [].concat("clippingParents" === t ? (a = e, o = (0, i.default)((0, f.default)(a)), u = ["absolute", "fixed"].indexOf((0, l.default)(a).position) >= 0 && (0, c.isHTMLElement)(a) ? (0, s.default)(a) : a, (0, c.isElement)(u) ? o.filter(function(e) {
                        return (0, c.isElement)(e) && (0, p.default)(e, u) && "body" !== (0, m.default)(e)
                    }) : []) : [].concat(t), [n]),
                    h = d[0],
                    g = d.reduce(function(t, n) {
                        var a = y(e, n, r);
                        return t.top = (0, _.max)(a.top, t.top), t.right = (0, _.min)(a.right, t.right), t.bottom = (0, _.min)(a.bottom, t.bottom), t.left = (0, _.max)(a.left, t.left), t
                    }, y(e, h, r));
                return g.width = g.right - g.left, g.height = g.bottom - g.top, g.x = g.left, g.y = g.top, g
            }