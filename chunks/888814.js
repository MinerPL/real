            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("65597"),
                s = n("760679"),
                i = n("242260"),
                r = n("315841"),
                o = n("981913"),
                u = n("987772"),
                d = n("814711"),
                c = n("782340");

            function f() {
                let e = (0, l.default)([i.default], () => i.default.getDrawMode()),
                    t = (null == e ? void 0 : e.type) === r.DrawableType.LINE,
                    n = () => {
                        t ? (0, s.setDrawMode)(null) : (0, s.setDrawMode)({
                            type: r.DrawableType.LINE
                        })
                    };
                return (0, a.jsx)(d.default, {
                    renderPopout: () => null,
                    children: e => {
                        let {
                            ...l
                        } = e;
                        return (0, a.jsx)(o.default, {
                            ...l,
                            label: c.default.Messages.SHARED_CANVAS_DRAW_MODE_LINE,
                            isActive: t,
                            iconComponent: u.default,
                            onClick: n
                        })
                    }
                })
            }