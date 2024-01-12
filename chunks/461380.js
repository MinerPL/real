            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                o = n("384737"),
                s = n("448052"),
                a = n("748802"),
                u = n("260792"),
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
                        height: i = 24,
                        color: _ = "currentColor",
                        transition: p = f.transition,
                        className: C,
                        foreground: I,
                        expanded: A,
                        ...T
                    } = e, {
                        enabled: R
                    } = (0, c.useRedesignIconContext)(), h = t;
                    if (!0 === A ? h = E.DOWN : !1 === A && (h = E.RIGHT), R) {
                        let e = {
                            [E.UP]: u.ChevronSmallUpIcon,
                            [E.DOWN]: o.ChevronSmallDownIcon,
                            [E.LEFT]: s.ChevronSmallLeftIcon,
                            [E.RIGHT]: a.ChevronSmallRightIcon
                        } [h];
                        return (0, r.jsx)(e, {
                            ...T,
                            className: C,
                            width: n,
                            height: i,
                            color: _,
                            colorClass: I
                        })
                    }
                    return (0, r.jsx)("svg", {
                        className: l(C, p, h),
                        width: n,
                        height: i,
                        viewBox: "0 0 24 24",
                        ...(0, d.default)(T),
                        children: (0, r.jsx)("path", {
                            className: I,
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