            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var s = n("37983");
            n("884691");
            var o = n("77078"),
                r = n("376556"),
                i = n("671278"),
                a = n("701909"),
                l = n("451039"),
                d = n("49111"),
                c = n("171644"),
                u = n("782340"),
                f = n("295398"),
                C = n("307460");

            function h() {
                return (0, s.jsxs)("div", {
                    className: f.getXboxApp,
                    children: [(0, s.jsxs)("div", {
                        className: f.getXboxAppBody,
                        children: [(0, s.jsxs)(o.Heading, {
                            className: f.getXboxAppHeading,
                            variant: "text-lg/semibold",
                            children: [(0, s.jsx)("div", {
                                className: f.xboxLogoBox,
                                children: (0, s.jsx)("img", {
                                    src: r.default.get(d.PlatformTypes.XBOX).icon.whiteSVG,
                                    alt: ""
                                })
                            }), u.default.Messages.GET_XBOX_APP]
                        }), (0, s.jsx)(o.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: u.default.Messages.CONNECT_XBOX_SUCCESS_APP_BODY
                        }), (0, s.jsx)(o.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: (0, s.jsx)(o.Anchor, {
                                href: a.default.getArticleURL(d.HelpdeskArticles.XBOX_CONNECTION),
                                children: u.default.Messages.LEARN_MORE
                            })
                        })]
                    }), (0, s.jsx)(i.default, {
                        className: f.getXboxAppQR,
                        text: c.XBOX_APP_WEB_LINK,
                        size: 90
                    })]
                })
            }

            function p(e) {
                let {
                    onClose: t
                } = e;
                return (0, s.jsx)(l.TwoWayLinkSuccess, {
                    img: (0, s.jsx)("img", {
                        src: C,
                        width: "232",
                        height: "113",
                        alt: ""
                    }),
                    title: u.default.Messages.CONNECT_XBOX_SUCCESS_TITLE,
                    body: u.default.Messages.CONNECT_XBOX_SUCCESS_BODY,
                    content: (0, s.jsx)(h, {}),
                    onClose: t
                })
            }