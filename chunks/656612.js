            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("819855"),
                i = n("77078"),
                r = n("841098"),
                o = n("716241"),
                u = n("539938"),
                d = n("593195"),
                c = n("49111"),
                f = n("782340"),
                h = n("845871"),
                p = n("242412"),
                m = n("846770"),
                E = () => {
                    let e = (0, r.default)();
                    l.useEffect(() => {
                        o.default.trackWithMetadata(c.AnalyticEvents.GUILD_OUTAGE_VIEWED, {})
                    }, []);
                    let t = (0, s.isThemeDark)(e) ? p : m;
                    return (0, a.jsxs)("div", {
                        className: h.container,
                        children: [(0, a.jsxs)(u.default, {
                            toolbar: (0, a.jsx)(l.Fragment, {}),
                            children: [(0, a.jsx)(u.default.Icon, {
                                icon: d.default,
                                "aria-hidden": !0
                            }), (0, a.jsx)(u.default.Title, {
                                children: f.default.Messages.GUILD_UNAVAILABLE_HEADER
                            })]
                        }), (0, a.jsxs)("div", {
                            className: h.content,
                            children: [(0, a.jsx)("img", {
                                alt: "",
                                className: h.splashImage,
                                src: t
                            }), (0, a.jsx)(i.Heading, {
                                className: h.splashHeader,
                                variant: "heading-lg/medium",
                                children: f.default.Messages.GUILD_UNAVAILABLE_TITLE
                            }), (0, a.jsx)(i.Text, {
                                className: h.splashText,
                                variant: "text-md/normal",
                                children: f.default.Messages.GUILD_UNAVAILABLE_BODY
                            })]
                        })]
                    })
                }