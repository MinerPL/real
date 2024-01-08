            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                i = n("77078"),
                r = n("772280"),
                u = n("782340"),
                o = n("317797");

            function d(e) {
                let {
                    className: t,
                    iconContainerClassName: n,
                    icon: l,
                    color: d,
                    title: c,
                    description: f,
                    userCount: h,
                    onClick: p,
                    highlight: m
                } = e;
                return (0, a.jsxs)(i.Clickable, {
                    className: s(o.container, t, null != m && {
                        [o.pulse]: m
                    }),
                    onClick: p,
                    children: [(0, a.jsx)("div", {
                        style: {
                            backgroundColor: d
                        },
                        className: s(o.icon, n),
                        children: l
                    }), (0, a.jsxs)("div", {
                        className: o.textContainer,
                        children: [(0, a.jsx)(i.Heading, {
                            variant: "heading-md/semibold",
                            children: c
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            className: o.inline,
                            children: f
                        }), null != h && h > 0 ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(i.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: o.dot,
                                children: "•"
                            }), (0, a.jsx)(i.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: o.inline,
                                children: u.default.Messages.GUILD_EVENT_INTERESTED.format({
                                    count: h
                                })
                            })]
                        }) : null]
                    }), (0, a.jsx)(r.default, {
                        height: 16,
                        width: 16,
                        className: o.caret
                    })]
                })
            }