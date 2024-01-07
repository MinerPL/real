            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("222007"), n("424973");
            var l = n("135038"),
                i = n("385887");
            let r = new Set(["line", "blockQuote"]),
                o = [];

            function s(e, t, n) {
                if (i.EditorUtils.areStylesDisabled(e)) return [];
                let [s, a] = t;
                if (1 !== a.length || !i.NodeUtils.isInTypes(s, r)) return o;
                let {
                    entries: u,
                    serializedChildren: d
                } = i.ElementUtils.markdown(s, n, !0), c = [];
                for (let t = 0; t < u.length; t++) {
                    let n = u[t];
                    if (n.attributes.length > 0 && n.text.length > 0) {
                        let r = u[t - 1],
                            o = u[t + 1],
                            s = (0, l.getPointFromPosition)(e, a, d, n.start),
                            f = (0, l.getPointFromPosition)(e, a, d, n.start + n.text.length),
                            p = {
                                anchor: s,
                                focus: f
                            },
                            m = i.EditorUtils.nodes(e, {
                                at: p,
                                mode: "lowest",
                                voids: !1
                            }),
                            h = {};
                        for (let e of n.attributes)
                            if (h[e] = !0, "syntaxBefore" === e && null != o)
                                for (let e of o.attributes) h["before_".concat(e)] = !0;
                            else if ("syntaxAfter" === e && null != r)
                            for (let e of r.attributes) h["after_".concat(e)] = !0;
                        for (let [t, n] of m) {
                            if (i.EditorUtils.isVoid(e, t)) continue;
                            let l = {
                                anchor: i.EditorUtils.start(e, n),
                                focus: i.EditorUtils.end(e, n)
                            };
                            i.PointUtils.isBefore(l.anchor, p.anchor) && (l.anchor = p.anchor), i.PointUtils.isAfter(l.focus, p.focus) && (l.focus = p.focus), c.push({
                                ...h,
                                ...l
                            })
                        }
                    }
                }
                return c
            }