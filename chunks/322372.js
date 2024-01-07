            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                i = n("368874"),
                l = n("104887"),
                r = n("775032"),
                o = n("25132"),
                u = n("806468"),
                d = n("922832"),
                c = n("782340"),
                E = n("960943"),
                f = n("358616"),
                _ = n("215529");
            let h = () => {
                let e = (0, o.useUserForLinkStatus)(d.UserLinkStatus.ACTIVE),
                    t = (0, r.default)(),
                    {
                        handleTabChange: n
                    } = (0, l.default)(),
                    i = (0, o.useHasMaxConnections)();
                return i || t && e.length > 0 ? null : (0, a.jsx)("div", {
                    className: E.button,
                    children: t ? (0, a.jsx)(s.Button, {
                        fullWidth: !1,
                        size: s.ButtonSizes.LARGE,
                        onClick: () => n(d.FamilyCenterSubPages.REQUESTS),
                        children: c.default.Messages.GET_STARTED
                    }) : (0, a.jsx)(u.default, {})
                })
            };
            var C = () => {
                let e = (0, r.default)(),
                    t = (0, i.useAgeSpecificText)(c.default.Messages.FAMILY_CENTER_ACTIVITY_BANNER_HEADER_TEEN, c.default.Messages.FAMILY_CENTER_ACTIVITY_BANNER_HEADER_PARENT),
                    n = (0, i.useAgeSpecificText)(c.default.Messages.FAMILY_CENTER_ACTIVITY_BANNER_DESCRIPTION_TEEN.format({
                        articleLink: "https://support.discord.com/hc/articles/14155060633623"
                    }), c.default.Messages.FAMILY_CENTER_ACTIVITY_BANNER_DESCRIPTION_PARENT.format({
                        articleLink: "https://support.discord.com/hc/articles/14155043715735"
                    }));
                return (0, a.jsxs)("div", {
                    className: E.container,
                    children: [(0, a.jsxs)("div", {
                        children: [(0, a.jsx)("div", {
                            children: (0, a.jsxs)("div", {
                                className: E.headerText,
                                children: [(0, a.jsx)(s.Heading, {
                                    variant: "heading-xl/medium",
                                    children: (0, a.jsx)(s.HeadingLevel, {
                                        children: t
                                    })
                                }), (0, a.jsx)(s.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: n
                                })]
                            })
                        }), (0, a.jsx)(h, {})]
                    }), (0, a.jsx)("div", {
                        className: E.headerImage,
                        children: (0, a.jsx)("img", {
                            src: e ? f : _,
                            alt: c.default.Messages.FAMILY_CENTER_ACTIVITY_BANNER_IMAGE_ALT
                        })
                    })]
                })
            }