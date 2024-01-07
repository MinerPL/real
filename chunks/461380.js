            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                r = n.n(l),
                o = n("384737"),
                s = n("448052"),
                u = n("748802"),
                a = n("260792"),
                c = n("77078"),
                d = n("75196"),
                f = n("4177");
            let E = {
                    UP: f.directionUp,
                    RIGHT: f.directionRight,
                    DOWN: f.directionDown,
                    LEFT: f.directionLeft
                },
                _ = e => {
                    let {
                        direction: t = E.DOWN,
                        width: n = 24,
                        height: l = 24,
                        color: _ = "currentColor",
                        transition: p = f.transition,
                        className: I,
                        foreground: S,
                        expanded: h,
                        ...T
                    } = e, {
                        enabled: N
                    } = (0, c.useRedesignIconContext)(), C = t;
                    if (!0 === h ? C = E.DOWN : !1 === h && (C = E.RIGHT), N) {
                        let e = {
                            [E.UP]: a.ChevronSmallUpIcon,
                            [E.DOWN]: o.ChevronSmallDownIcon,
                            [E.LEFT]: s.ChevronSmallLeftIcon,
                            [E.RIGHT]: u.ChevronSmallRightIcon
                        } [C];
                        return (0, i.jsx)(e, {
                            ...T,
                            className: I,
                            width: n,
                            height: l,
                            color: _,
                            colorClass: S
                        })
                    }
                    return (0, i.jsx)("svg", {
                        className: r(I, p, C),
                        width: n,
                        height: l,
                        viewBox: "0 0 24 24",
                        ...(0, d.default)(T),
                        children: (0, i.jsx)("path", {
                            className: S,
                            fill: "none",
                            stroke: _,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    })
                };
            _.Directions = E;
            var p = _