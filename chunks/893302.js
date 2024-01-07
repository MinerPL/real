            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                i = n.n(s),
                l = n("77078"),
                r = n("281319"),
                o = e => {
                    let {
                        icon: t,
                        iconClassName: n,
                        header: s,
                        description: o
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: r.container,
                        children: [(0, a.jsx)("div", {
                            className: r.circle,
                            children: (0, a.jsx)(t, {
                                className: i(r.icon, n),
                                width: 20,
                                height: 20,
                                color: "currentColor"
                            })
                        }), (0, a.jsxs)("div", {
                            children: [(0, a.jsx)(l.Heading, {
                                variant: "heading-md/bold",
                                className: r.header,
                                children: (0, a.jsx)(l.HeadingLevel, {
                                    children: s
                                })
                            }), (0, a.jsx)(l.Text, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                children: o
                            })]
                        })]
                    })
                }