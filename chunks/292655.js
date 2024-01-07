            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("446674"),
                a = n("77078"),
                u = n("206230"),
                d = n("491605"),
                c = n("782340"),
                f = n("491422");

            function p(e) {
                let {
                    hovered: t
                } = e, i = (0, s.useStateFromStores)([u.default], () => u.default.useReducedMotion);
                async function r() {
                    let {
                        default: e
                    } = await n.el("984138").then(n.t.bind(n, "984138", 19));
                    return e
                }
                return (0, l.jsx)(d.default, {
                    pauseAtFrame: t ? void 0 : 0,
                    importData: r,
                    shouldAnimate: t && !i,
                    className: o(f.rocket, {
                        [f.rocketHovered]: t
                    })
                })
            }

            function m(e) {
                let {
                    tabIndex: t,
                    className: n,
                    onClick: r,
                    "aria-expanded": s,
                    "aria-controls": u,
                    focusProps: d
                } = e, [m, h] = i.useState(!1);

                function E() {
                    h(!0)
                }

                function S() {
                    h(!1)
                }
                return (0, l.jsx)(a.Button, {
                    look: a.Button.Looks.BLANK,
                    size: a.Button.Sizes.NONE,
                    tabIndex: t,
                    className: o(f.activityButton, n),
                    onMouseEnter: E,
                    onMouseOver: E,
                    onMouseLeave: S,
                    onFocus: E,
                    onBlur: S,
                    onClick: r,
                    "aria-label": c.default.Messages.SELECT_ACTIVITY,
                    "aria-expanded": s,
                    "aria-controls": u,
                    focusProps: d,
                    children: (0, l.jsx)(p, {
                        hovered: m
                    })
                })
            }