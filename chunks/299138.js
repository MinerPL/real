            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                i = n("368874"),
                l = n("328911"),
                r = n("782340"),
                o = n("186614"),
                u = n("392963"),
                d = () => {
                    let e = (0, i.useAgeSpecificText)(r.default.Messages.FAMILY_CENTER_ACTIVITY_DATA_CONFIRMATION_BANNER_DESCRIPTION_TEEN, r.default.Messages.FAMILY_CENTER_ACTIVITY_DATA_CONFIRMATION_BANNER_DESCRIPTION_PARENT);
                    return (0, a.jsxs)("div", {
                        className: o.container,
                        children: [(0, a.jsxs)("div", {
                            className: o.content,
                            children: [(0, a.jsx)(s.Heading, {
                                className: o.header,
                                variant: "heading-md/bold",
                                children: (0, a.jsx)(s.HeadingLevel, {
                                    children: r.default.Messages.FAMILY_CENTER_ACTIVITY_DATA_CONFIRMATION_BANNER_HEADER
                                })
                            }), (0, a.jsx)(s.Text, {
                                className: o.description,
                                variant: "text-sm/medium",
                                color: "text-muted",
                                children: e
                            }), (0, a.jsx)(l.default, {})]
                        }), (0, a.jsx)("div", {
                            className: o.artContainer,
                            children: (0, a.jsx)("img", {
                                src: u,
                                alt: r.default.Messages.FAMILY_CENTER_ACTIVITY_DATA_CONFIRMATION_BANNER_ALT
                            })
                        })]
                    })
                }