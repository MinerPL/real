            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var l = a("37983"),
                s = a("884691"),
                n = a("414456"),
                i = a.n(n),
                r = a("77078"),
                o = a("149279"),
                d = a("302949");

            function u(e) {
                let {
                    onClick: t,
                    children: a,
                    tooltip: n,
                    dangerous: u = !1,
                    className: c,
                    "aria-label": m
                } = e;
                return (0, l.jsx)(r.Tooltip, {
                    text: n,
                    hideOnClick: !0,
                    children: e => {
                        let {
                            onMouseEnter: r,
                            onMouseLeave: h,
                            onClick: p
                        } = e;
                        return (0, l.jsx)(o.Button, {
                            onMouseEnter: r,
                            onMouseLeave: h,
                            onClick: e => {
                                e.stopPropagation(), null == p || p(), t(e)
                            },
                            dangerous: u,
                            "aria-label": null != m ? m : n,
                            className: c,
                            children: s.Children.map(a, e => s.isValidElement(e) ? s.cloneElement(e, {
                                className: i(e.props.className, d.actionBarIcon)
                            }) : e)
                        })
                    }
                })
            }