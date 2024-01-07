            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                l = n("384737"),
                o = n("448052"),
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
                        height: r = 24,
                        color: _ = "currentColor",
                        transition: I = f.transition,
                        className: p,
                        foreground: h,
                        expanded: S,
                        ...T
                    } = e, {
                        enabled: N
                    } = (0, c.useRedesignIconContext)(), C = t;
                    if (!0 === S ? C = E.DOWN : !1 === S && (C = E.RIGHT), N) {
                        let e = {
                            [E.UP]: a.ChevronSmallUpIcon,
                            [E.DOWN]: l.ChevronSmallDownIcon,
                            [E.LEFT]: o.ChevronSmallLeftIcon,
                            [E.RIGHT]: u.ChevronSmallRightIcon
                        } [C];
                        return (0, i.jsx)(e, {
                            ...T,
                            className: p,
                            width: n,
                            height: r,
                            color: _,
                            colorClass: h
                        })
                    }
                    return (0, i.jsx)("svg", {
                        className: s(p, I, C),
                        width: n,
                        height: r,
                        viewBox: "0 0 24 24",
                        ...(0, d.default)(T),
                        children: (0, i.jsx)("path", {
                            className: h,
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
            var I = _