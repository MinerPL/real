            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("819855"),
                r = l("77078"),
                n = l("841098"),
                o = l("782340"),
                i = l("139948"),
                u = l("321220"),
                c = l("684386"),
                d = e => {
                    let {
                        onRetry: t
                    } = e, l = (0, n.default)();
                    return (0, a.jsxs)("div", {
                        className: i.wrapper,
                        children: [(0, a.jsx)("img", {
                            className: i.loadIssueImg,
                            src: (0, s.isThemeDark)(l) ? u : c,
                            alt: ""
                        }), (0, a.jsx)(r.Heading, {
                            className: i.heading1,
                            variant: "heading-xl/semibold",
                            children: o.default.Messages.COLLECTIBLES_SHOP_ERROR_HEADING
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-md/normal",
                            children: o.default.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD
                        }), (0, a.jsx)(r.Button, {
                            className: i.reload,
                            size: r.Button.Sizes.MEDIUM,
                            color: r.Button.Colors.BRAND_NEW,
                            onClick: t,
                            children: o.default.Messages.ERRORS_RELOAD
                        })]
                    })
                }