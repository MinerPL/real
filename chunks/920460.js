            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var o = n("37983");
            n("884691");
            var s = n("77078"),
                i = n("701909"),
                r = n("451039"),
                a = n("49111"),
                l = n("782340"),
                d = n("612827"),
                C = n("997265");

            function u() {
                return (0, o.jsx)("div", {
                    className: d.getCrunchyrollApp,
                    children: (0, o.jsx)("div", {
                        className: d.getCrunchyrollAppBody,
                        children: (0, o.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: (0, o.jsx)(s.Anchor, {
                                href: i.default.getArticleURL(a.HelpdeskArticles.CRUNCHYROLL_CONNECTION),
                                children: l.default.Messages.LEARN_MORE
                            })
                        })
                    })
                })
            }

            function c(e) {
                let {
                    onClose: t
                } = e;
                return (0, o.jsx)(r.TwoWayLinkSuccess, {
                    img: (0, o.jsx)("img", {
                        src: C,
                        width: "224",
                        height: "104",
                        alt: ""
                    }),
                    title: l.default.Messages.CONNECT_CRUNCHYROLL_SUCCESS_TITLE,
                    body: l.default.Messages.CONNECT_CRUNCHYROLL_SUCCESS_BODY,
                    content: (0, o.jsx)(u, {}),
                    onClose: t
                })
            }