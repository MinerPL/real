            "use strict";
            n.r(t), n.d(t, {
                FormErrorBlockColors: function() {
                    return d
                },
                FormErrorBlock: function() {
                    return f
                }
            });
            var i = n("37983"),
                r = n("884691"),
                s = n("414456"),
                a = n.n(s),
                o = n("227645"),
                l = n("945330"),
                u = n("423487"),
                c = n("486859");
            let d = {
                    RED: c.backgroundRed,
                    BACKGROUND_TERTIARY: c.backgroundTertiary,
                    BACKGROUND_ACCENT: c.backgroundAccent
                },
                f = r.forwardRef(function(e, t) {
                    let {
                        role: n,
                        children: r,
                        className: s,
                        onDismiss: f,
                        backgroundColor: E = d.RED,
                        icon: h = u.default,
                        iconClassName: p
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: a(c.error, s, E),
                        ref: t,
                        children: [(0, i.jsx)(h, {
                            className: a(c.icon, p)
                        }), (0, i.jsx)("div", {
                            role: n,
                            className: c.text,
                            children: r
                        }), null != f ? (0, i.jsx)(o.Clickable, {
                            onClick: f,
                            className: c.errorClose,
                            children: (0, i.jsx)(l.default, {
                                className: c.errorCloseIcon
                            })
                        }) : null]
                    })
                })